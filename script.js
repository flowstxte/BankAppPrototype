// ============ STATE ============
let balance = 85420;
let pinAttempts = 0;
let pinValue = "";
let pinMode = "login"; // 'login' | 'send'
let currentSendAmount = 500;
let currentSendContact = {
  name: "রফিক উদ্দিন",
  phone: "+৮৮০ ১৭১১-২৩৪৫৬৭",
  avatar: "র",
  color: "var(--teal-circle)",
};
let activeScreen = "home";
let balanceVisible = true;
let lastTxnId = null;
let lastTxnTime = null;
let lastTxnAmount = 0;
let lastTxnContact = "";
let otpValue = "";
let otpTimerInterval = null;
let otpSeconds = 179;
let currentBillType = "";
let otp_generated = "৪৯২১৩৫";

// Numpad popup state
let numpadMode = ""; // 'amount' | 'phone' | 'otp' | 'bill-account' | 'bill-amount'
let numpadValue = "";
let manualPhoneValue = "";
let billAccountValue = "";
let billAmountValue = "500";

const profileToggles = {
  send: true,
  receive: true,
  bills: false,
  contacts: true,
};

let contacts = [
  {
    name: "রফিক উদ্দিন",
    phone: "+৮৮০ ১৭১১-২৩৪৫৬৭",
    avatar: "র",
    color: "var(--teal-circle)",
  },
  {
    name: "সুমাইয়া বেগম",
    phone: "+৮৮০ ১৮১৫-৬৭৮৯০১",
    avatar: "স",
    color: "var(--yellow-circle)",
  },
  {
    name: "আহমেদ করিম",
    phone: "+৮৮০ ১৯০০-১১২২৩৩",
    avatar: "আ",
    color: "var(--purple-circle)",
  },
];

let transactions = [];

// ============ VOICE AUDIO ============
let currentAudio = null;
let voiceMuted = false;

function playVoice(filename) {
  if (voiceMuted) return;
  try {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio("voice/" + filename);
    currentAudio.play().catch(() => {});
  } catch (e) {}
}

function toggleVoiceMute() {
  voiceMuted = !voiceMuted;
  const icon = document.getElementById("mute-icon");
  const btn = document.getElementById("voice-mute-btn");
  if (voiceMuted) {
    icon.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    `;
    btn.style.background = "var(--red-circle)";
    btn.style.border = "2px solid #c0392b";
  } else {
    icon.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 010 14.14"/>
      <path d="M15.54 8.46a5 5 0 010 7.07"/>
    `;
    btn.style.background = "var(--green-dark)";
    btn.style.border = "none";
  }
}

// ============ BANGLA NUMERALS ============
const bnNum = (n) => String(n).replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
const formatBDT = (n) => "৳ " + bnNum(n.toLocaleString("en"));

// ============ RESPONSIVE ============
function checkDevice() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) || window.innerWidth < 768;
  if (!isMobile) {
    document.getElementById("desktop-overlay").style.display = "flex";
    document.getElementById("app").style.display = "none";
  } else {
    document.getElementById("desktop-overlay").style.display = "none";
    document.getElementById("app").style.display = "flex";
    if (!document.fullscreenElement) {
      document.getElementById("fullscreen-prompt").style.display = "flex";
    }
  }
}
window.addEventListener("resize", checkDevice);
checkDevice();

function goFullscreen() {
  const el = document.documentElement;
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  document.getElementById("fullscreen-prompt").style.display = "none";
}
function skipFullscreen() {
  document.getElementById("fullscreen-prompt").style.display = "none";
}

// ============ DUMMY TOAST (for fingerprint, face, new account, add contact) ============
function showDummyToast() {
  const t = document.getElementById("dummy-toast");
  t.style.display = "block";
  setTimeout(() => (t.style.display = "none"), 3000);
}

// ============ TERMS ============
function toggleTerms() {
  const p = document.getElementById("terms-popup");
  const o = document.getElementById("terms-overlay");
  const showing = p.style.display === "block";
  p.style.display = showing ? "none" : "block";
  o.style.display = showing ? "none" : "block";
}
function closeTerms() {
  document.getElementById("terms-popup").style.display = "none";
  document.getElementById("terms-overlay").style.display = "none";
}

// ============ PIN (4-digit, 0000 in Bangla) ============
const CORRECT_PIN = "০০০০";

function openPin(mode) {
  pinValue = "";
  pinAttempts = 0;
  pinMode = mode;
  updatePinDots();
  document.getElementById("pin-error").textContent = "";
  document.getElementById("pin-attempts-text").textContent = "";
  document.getElementById("pin-context-text").textContent =
    mode === "send" ? "লেনদেন নিশ্চিত করতে পিন দিন" : "আপনার ৪ সংখ্যার পিন দিন";
  document.getElementById("pin-screen").classList.add("active");
}

function closePin() {
  document.getElementById("pin-screen").classList.remove("active");
  pinValue = "";
}

function pinKey(d) {
  if (pinValue.length >= 4) return;
  pinValue += d;
  updatePinDots();
  if (pinValue.length === 4) setTimeout(checkPin, 200);
}

function pinDelete() {
  pinValue = pinValue.slice(0, -1);
  updatePinDots();
}

function updatePinDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById("d" + i);
    dot.textContent = i < pinValue.length ? "●" : "";
    dot.className =
      "pin-dot" +
      (i < pinValue.length ? " filled" : "") +
      (i === pinValue.length ? " active" : "");
  }
}

function checkPin() {
  if (pinValue === CORRECT_PIN) {
    pinAttempts = 0;
    closePin();
    if (pinMode === "login") {
      showScreen("home");
      updateHomeActions();
      renderTransactions();
      renderToggleList();
      playVoice("home.mp3");
    } else if (pinMode === "send") {
      executeSend();
    }
  } else {
    pinAttempts++;
    pinValue = "";
    updatePinDots();
    if (pinAttempts >= 3) {
      document.getElementById("pin-screen").classList.remove("active");
      openOtp();
    } else {
      document.getElementById("pin-error").textContent =
        "ভুল পিন! আবার চেষ্টা করুন।";
      document.getElementById("pin-attempts-text").textContent =
        `${bnNum(3 - pinAttempts)} বার সুযোগ বাকি আছে`;
    }
  }
}

// ============ OTP ============
function openOtp() {
  otpValue = "";
  otpSeconds = 179;
  otp_generated = "৪৯২১৩৫";
  document.getElementById("otp-screen").classList.add("active");
  startOtpTimer();
  // Clear boxes and focus first
  for (let i = 0; i < 6; i++) {
    const box = document.getElementById("ob" + i);
    if (box) box.value = "";
  }
  setTimeout(() => {
    const first = document.getElementById("ob0");
    if (first) first.focus();
  }, 300);
}

function closeOtp() {
  document.getElementById("otp-screen").classList.remove("active");
  clearInterval(otpTimerInterval);
}

function renderOtpBoxes() {
  // Clear all input boxes
  for (let i = 0; i < 6; i++) {
    const box = document.getElementById("ob" + i);
    if (box) box.value = "";
  }
  otpValue = "";
  // Focus first box
  const first = document.getElementById("ob0");
  if (first) setTimeout(() => first.focus(), 100);
}

// OTP inline box input handlers
function otpBoxInput(input, idx) {
  let val = input.value.replace(/[^0-9০-৯]/g, "").slice(-1);
  // Normalize Bangla to ASCII
  const bnMap = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };
  val = bnMap[val] ?? val;
  input.value = val;
  if (val && idx < 5) {
    document.getElementById("ob" + (idx + 1)).focus();
  }
  // Rebuild otpValue
  otpValue = "";
  for (let i = 0; i < 6; i++) {
    otpValue += document.getElementById("ob" + i).value || "";
  }
  if (otpValue.length === 6) setTimeout(checkOtp, 200);
}

function otpBoxKeydown(input, idx) {
  if (event.key === "Backspace" && !input.value && idx > 0) {
    document.getElementById("ob" + (idx - 1)).focus();
  }
}

function openOtpNumpad() {
  // no-op: OTP uses inline boxes now
}

function otpKey(d) {
  // Legacy - no-op, inline boxes handle OTP input now
}
function otpDelete() {
  // Legacy - no-op, inline boxes handle OTP input now
}

function checkOtp() {
  const toAscii = (s) => s.replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d));
  const normalizeOtp = (s) =>
    s.replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d).toString());
  if (normalizeOtp(otpValue) === normalizeOtp(otp_generated)) {
    closeOtp();
    pinAttempts = 0;
    if (pinMode === "login") {
      showScreen("home");
      updateHomeActions();
      renderTransactions();
      renderToggleList();
      playVoice("home.mp3");
    } else {
      executeSend();
    }
  } else {
    showErrorToast("ভুল OTP! আবার চেষ্টা করুন।");
    otpValue = "";
    renderOtpBoxes();
  }
}

function resendOtp() {
  otp_generated = "৪৯২১৩৫";
  otpValue = "";
  otpSeconds = 179;
  for (let i = 0; i < 6; i++) {
    const box = document.getElementById("ob" + i);
    if (box) box.value = "";
  }
  clearInterval(otpTimerInterval);
  startOtpTimer();
  showToast("নতুন OTP পাঠানো হয়েছে।");
  setTimeout(() => {
    const first = document.getElementById("ob0");
    if (first) first.focus();
  }, 100);
}

function startOtpTimer() {
  clearInterval(otpTimerInterval);
  const totalSec = 179;
  function tick() {
    const m = Math.floor(otpSeconds / 60);
    const s = otpSeconds % 60;
    document.getElementById("otp-timer").textContent =
      bnNum(m) + ":" + (s < 10 ? "০" : "") + bnNum(s);
    document.getElementById("otp-fill").style.width =
      (otpSeconds / totalSec) * 100 + "%";
    if (otpSeconds <= 0) {
      clearInterval(otpTimerInterval);
      return;
    }
    otpSeconds--;
  }
  tick();
  otpTimerInterval = setInterval(tick, 1000);
}

// ============ NAVIGATION ============
const NAV_ITEMS = [
  {
    id: "home",
    label: "হোম",
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  },
  {
    id: "receive",
    label: "হিসাব",
    icon: '<rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="8" y1="3" x2="8" y2="9"/>',
  },
  { id: "help", label: "সাহায্য", isHelp: true },
  {
    id: "profile",
    label: "প্রোফাইল",
    icon: '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>',
  },
];

function renderBottomNav(containerId, active) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.className = "bottom-nav";
  el.innerHTML = NAV_ITEMS.map((item) => {
    if (item.isHelp) {
      return `<div class="nav-item ${item.id === active ? "active" : ""}" onclick="navigate('${item.id}')">
        <div class="help-icon-circle"><span>?</span></div>
        <span>${item.label}</span>
      </div>`;
    }
    return `<div class="nav-item ${item.id === active ? "active" : ""}" onclick="navigate('${item.id}')">
      <svg viewBox="0 0 24 24">${item.icon}</svg>
      <span>${item.label}</span>
    </div>`;
  }).join("");
}

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id + "-screen").classList.add("active");
  activeScreen = id;
  renderBottomNav("bottom-nav-" + id, id);
}

function navigate(id) {
  if (id === "send") {
    // Always show contact picker first, then send screen
    showContactPickerThenSend();
    return;
  }
  if (id === "bills") {
    showScreen("bills");
    playVoice("bill.mp3");
    return;
  }
  if (id === "receive") {
    showScreen("receive");
    renderTransactionsHishab();
    playVoice("hishab.mp3");
    return;
  }
  if (id === "receive_qr") {
    showScreen("qr");
    playVoice("receive.mp3");
    return;
  }
  showScreen(id);
  if (id === "home") {
    updateBalanceDisplay();
    renderTransactions();
    playVoice("home.mp3");
  }
  if (id === "receive") {
    // already handled above, but ensure voice
  }
  if (id === "profile") {
    renderToggleList();
    playVoice("profile.mp3");
  }
  if (id === "help") {
    playVoice("help.mp3");
  }
}

function showContactPickerThenSend() {
  // Show the contact picker modal, and on selection go to send screen
  pendingSendNavigation = true;
  const list = document.getElementById("contact-picker-list");
  list.innerHTML = contacts
    .map(
      (c, i) => `
    <div class="contact-pick-item" onclick="selectContactAndGoSend(${i})">
      <div class="cp-avatar" style="background:${c.color};color:var(--green-dark)">${c.avatar}</div>
      <div>
        <div class="cp-name">${c.name}</div>
        <div class="cp-phone">${c.phone}</div>
      </div>
    </div>
  `,
    )
    .join("");
  // Reset manual input
  const phoneInput = document.getElementById("manual-phone-input");
  if (phoneInput) {
    phoneInput.value = "";
  }
  const msg = document.getElementById("phone-validation-msg");
  if (msg) msg.textContent = "";
  const btn = document.getElementById("phone-confirm-btn");
  if (btn) btn.style.display = "none";
  document.getElementById("contact-picker-modal").classList.add("active");
}

let pendingSendNavigation = false;

function selectContactAndGoSend(i) {
  currentSendContact = contacts[i];
  document.getElementById("contact-picker-modal").classList.remove("active");
  showScreen("send");
  updateSendScreenContact();
}

function updateSendScreenContact() {
  document.getElementById("send-contact-avatar").textContent =
    currentSendContact.avatar;
  document.getElementById("send-contact-avatar").style.background =
    currentSendContact.color;
  document.getElementById("send-contact-name").textContent =
    currentSendContact.name;
  document.getElementById("send-contact-phone").textContent =
    currentSendContact.phone;
  document.getElementById("review-recipient").textContent =
    currentSendContact.name;
}

// ============ HISHAB TABS ============
function switchHishabTab(tab) {
  // Legacy function - tabs removed, no-op
}

// ============ HOME ============
function updateGreeting() {
  const h = new Date().getHours();
  const greetings =
    h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
  document.getElementById("greeting-en").textContent = greetings;
}

function updateBalanceDisplay() {
  document.getElementById("balance-display").textContent = balanceVisible
    ? formatBDT(balance)
    : "৳ ••••••";
}

function toggleBalanceVisibility() {
  balanceVisible = !balanceVisible;
  updateBalanceDisplay();
}

const ACTION_DEFS = {
  send: {
    label: "পাঠান",
    color: "var(--teal-circle)",
    iconStroke: "var(--green-dark)",
    icon: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    action: "playVoice('send.mp3'); navigate('send')",
  },
  receive: {
    label: "নিন",
    color: "var(--yellow-circle)",
    iconStroke: "#8a6d00",
    icon: '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    action: "navigate('receive_qr')",
  },
  bills: {
    label: "বিল",
    color: "var(--red-circle)",
    iconStroke: "#8a3020",
    icon: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="12" y2="13"/>',
    action: "navigate('bills')",
  },
  contacts: {
    label: "মানুষ",
    color: "var(--purple-circle)",
    iconStroke: "#5a4a8a",
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
    action: "playVoice('contact.mp3'); openContactsModal()",
  },
};

function updateHomeActions() {
  const container = document.getElementById("quick-actions");
  const active = Object.keys(profileToggles).filter((k) => profileToggles[k]);
  container.innerHTML = active
    .map((key) => {
      const a = ACTION_DEFS[key];
      return `<div class="action-card" onclick="${a.action}">
      <div class="action-icon" style="background:${a.color}">
        <svg viewBox="0 0 24 24" style="stroke:${a.iconStroke}">${a.icon}</svg>
      </div>
      <span class="action-label">${a.label}</span>
    </div>`;
    })
    .join("");
}

function renderTransactions() {
  // Only used on home screen (not hishab tab anymore)
  // Home no longer shows transactions - nothing to render here
}

function renderTransactionsHishab() {
  const list = document.getElementById("txn-list-hishab");
  if (!list) return;
  if (transactions.length === 0) {
    list.innerHTML =
      "<div style=\"padding:20px;text-align:center;color:var(--text-light);font-family:'Noto Serif Bengali';font-size:14px;\">কোনো লেনদেন নেই</div>";
    return;
  }
  list.innerHTML = transactions
    .map(
      (t, i) => `
    <div class="txn-item" onclick="showTxnDetail(${i})">
      <div class="txn-avatar" style="background:${t.credit ? "var(--teal-circle)" : "var(--red-circle)"}">${t.avatar}</div>
      <div class="txn-info">
        <div class="txn-name">${t.name}</div>
        <div class="txn-time">${t.time}${t.refunded ? " · ফেরত পাওয়া গেছে" : ""}</div>
      </div>
      <div class="txn-amount ${t.credit ? "credit" : "debit"}">${t.credit ? "+" : "-"}${formatBDT(t.amount)}</div>
    </div>
  `,
    )
    .join("");
}

function showTxnDetail(i) {
  const t = transactions[i];
  const canRefund = !t.credit && !t.refunded && t.canRefundUntil > Date.now();
  lastTxnId = i;
  document.getElementById("success-title").textContent = t.credit
    ? "টাকা পাওয়া গেছে!"
    : "লেনদেন বিবরণ";
  document.getElementById("success-body").innerHTML = `
    <strong>${t.name}</strong><br>
    ${t.credit ? "+" : "-"}${formatBDT(t.amount)}<br>
    ${t.time}<br>
    ${t.refunded ? '<span style="color:var(--green-dark)">✓ ফেরত পাওয়া গেছে</span>' : ""}
  `;
  document.getElementById("refund-btn").style.display = canRefund
    ? "flex"
    : "none";
  document.getElementById("success-screen").classList.add("active");
}

// ============ SEND MONEY ============
function selectPreset(amount, el) {
  currentSendAmount = amount;
  document
    .querySelectorAll(".preset-btn")
    .forEach((b) => b.classList.remove("selected"));
  el.classList.add("selected");
  // Update inline input
  const inp = document.getElementById("send-amount-input");
  if (inp) inp.value = amount;
  document.getElementById("review-amount").textContent = formatBDT(amount);
  document.getElementById("review-total").textContent = formatBDT(amount);
}

// Inline amount input handlers
function openAmountNumpad() {
  // Focus the inline input instead of opening a popup
  const inp = document.getElementById("send-amount-input");
  if (inp) {
    inp.focus();
    inp.select();
  }
}

function onAmountInput(input) {
  let val = input.value.replace(/[^0-9]/g, "");
  if (val === "" || val === "0") val = "";
  input.value = val;
  const amt = parseInt(val) || 0;
  if (amt > 0) {
    currentSendAmount = amt;
    document
      .querySelectorAll(".preset-btn")
      .forEach((b) => b.classList.remove("selected"));
    // highlight matching preset
    document.querySelectorAll(".preset-btn").forEach((b) => {
      const presetVal = parseInt(
        b.querySelector(".preset-amount").textContent.replace(/[৳,]/g, ""),
      );
      if (presetVal === amt) b.classList.add("selected");
    });
    document.getElementById("review-amount").textContent = formatBDT(amt);
    document.getElementById("review-total").textContent = formatBDT(amt);
  }
}

function onAmountFocus(input) {
  input.select();
}

function onAmountBlur(input) {
  let val = parseInt(input.value) || currentSendAmount;
  if (val <= 0) val = currentSendAmount;
  input.value = val;
  currentSendAmount = val;
  document.getElementById("review-amount").textContent = formatBDT(val);
  document.getElementById("review-total").textContent = formatBDT(val);
}

// Inline phone input handlers
function onPhoneInput(input) {
  // Only digits
  let val = input.value.replace(/[^0-9]/g, "");
  input.value = val;
  const msg = document.getElementById("phone-validation-msg");
  const btn = document.getElementById("phone-confirm-btn");
  if (val.length === 0) {
    msg.textContent = "";
    btn.style.display = "none";
  } else if (!val.startsWith("01")) {
    msg.textContent = "নম্বর অবশ্যই 01 দিয়ে শুরু হতে হবে";
    msg.style.color = "#c0392b";
    btn.style.display = "none";
  } else if (val.length < 11) {
    msg.textContent = `${val.length}/11 সংখ্যা`;
    msg.style.color = "var(--text-mid)";
    btn.style.display = "none";
  } else if (val.length === 11) {
    msg.textContent = "✓ বৈধ নম্বর";
    msg.style.color = "var(--green-dark)";
    btn.style.display = "block";
  }
}

function onPhoneKeydown(input) {
  // Allow confirm on Enter
  if (event.key === "Enter") confirmManualPhone();
}

function confirmManualPhone() {
  const input = document.getElementById("manual-phone-input");
  const val = input.value.replace(/[^0-9]/g, "");
  if (val.length !== 11 || !val.startsWith("01")) {
    showErrorToast("সঠিক ১১ সংখ্যার বাংলাদেশি নম্বর দিন");
    return;
  }
  manualPhoneValue = val;
  currentSendContact = {
    name: "+880 " + val,
    phone: "+880 " + val,
    avatar: "?",
    color: "var(--purple-circle)",
  };
  closeContactPicker();
  if (pendingSendNavigation) {
    pendingSendNavigation = false;
    showScreen("send");
    updateSendScreenContact();
  } else {
    updateSendScreenContact();
  }
}

// Legacy - kept for bill numpad
function openPhoneNumpad() {
  // no-op: replaced by inline input
}

function openBillAccountNumpad() {
  numpadMode = "bill-account";
  numpadValue = billAccountValue;
  document.getElementById("numpad-title").textContent =
    "মিটার/অ্যাকাউন্ট নম্বর লিখুন";
  document.getElementById("numpad-display").textContent = numpadValue
    ? bnNum(numpadValue)
    : "০";
  document.getElementById("numpad-overlay").classList.add("active");
}

function openBillAmountNumpad() {
  numpadMode = "bill-amount";
  numpadValue = billAmountValue;
  document.getElementById("numpad-title").textContent = "পরিমাণ লিখুন (৳)";
  document.getElementById("numpad-display").textContent = numpadValue
    ? bnNum(numpadValue)
    : "০";
  document.getElementById("numpad-overlay").classList.add("active");
}

// ============ GENERIC NUMPAD POPUP ============
function numpadKey(d) {
  if (numpadMode === "otp" && numpadValue.length >= 6) return;
  numpadValue += d;
  document.getElementById("numpad-display").textContent =
    bnNum(numpadValue) || "০";

  // Live update for OTP
  if (numpadMode === "otp") {
    otpValue = numpadValue;
    renderOtpBoxes();
    if (otpValue.length === 6) {
      closeNumpadNow();
      setTimeout(checkOtp, 200);
    }
  }
}

function numpadDelete() {
  numpadValue = numpadValue.slice(0, -1);
  document.getElementById("numpad-display").textContent =
    bnNum(numpadValue) || "০";
  if (numpadMode === "otp") {
    otpValue = numpadValue;
    renderOtpBoxes();
  }
}

function confirmNumpad() {
  if (numpadMode === "amount") {
    const val = parseInt(numpadValue) || 0;
    if (val > 0) {
      currentSendAmount = val;
      document
        .querySelectorAll(".preset-btn")
        .forEach((b) => b.classList.remove("selected"));
      document.getElementById("send-amount-display").textContent =
        formatBDT(val);
      document.getElementById("review-amount").textContent = formatBDT(val);
      document.getElementById("review-total").textContent = formatBDT(val);
    }
  } else if (numpadMode === "phone") {
    manualPhoneValue = numpadValue;
    const display = document.getElementById("manual-input-display");
    if (manualPhoneValue) {
      display.textContent = "+৮৮০ " + bnNum(manualPhoneValue);
      display.style.color = "var(--text-dark)";
      display.style.fontFamily = "'Tiro Bangla', serif";
      display.style.fontSize = "16px";
      // Select this as the send contact
      currentSendContact = {
        name: "+৮৮০ " + bnNum(manualPhoneValue),
        phone: "+৮৮০ " + bnNum(manualPhoneValue),
        avatar: "?",
        color: "var(--purple-circle)",
      };
      document.getElementById("send-contact-avatar").textContent = "?";
      document.getElementById("send-contact-name").textContent =
        "+৮৮০ " + bnNum(manualPhoneValue);
      document.getElementById("send-contact-phone").textContent = "নতুন নম্বর";
      document.getElementById("review-recipient").textContent =
        "+৮৮০ " + bnNum(manualPhoneValue);
      closeContactPicker();
    }
  } else if (numpadMode === "bill-account") {
    billAccountValue = numpadValue;
    const el = document.getElementById("bill-account-display");
    el.textContent = billAccountValue
      ? bnNum(billAccountValue)
      : "নম্বর দিন...";
  } else if (numpadMode === "bill-amount") {
    billAmountValue = numpadValue;
    const el = document.getElementById("bill-amount-display");
    el.textContent = billAmountValue ? bnNum(billAmountValue) : "০";
  } else if (numpadMode === "otp") {
    otpValue = numpadValue;
    renderOtpBoxes();
    if (otpValue.length === 6) setTimeout(checkOtp, 200);
  }
  closeNumpadNow();
}

function closeNumpadNow() {
  document.getElementById("numpad-overlay").classList.remove("active");
  numpadMode = "";
  numpadValue = "";
}

function closeNumpadOverlay(e) {
  if (e && e.target === document.getElementById("numpad-overlay")) {
    closeNumpadNow();
  }
}

// ============ CONTACT PICKER ============
function showContactPicker() {
  // This is called from the send screen to re-select contact
  const list = document.getElementById("contact-picker-list");
  list.innerHTML = contacts
    .map(
      (c, i) => `
    <div class="contact-pick-item" onclick="selectContact(${i})">
      <div class="cp-avatar" style="background:${c.color};color:var(--green-dark)">${c.avatar}</div>
      <div>
        <div class="cp-name">${c.name}</div>
        <div class="cp-phone">${c.phone}</div>
      </div>
    </div>
  `,
    )
    .join("");
  const phoneInput = document.getElementById("manual-phone-input");
  if (phoneInput) phoneInput.value = "";
  document.getElementById("contact-picker-modal").classList.add("active");
}

function selectContact(i) {
  currentSendContact = contacts[i];
  document.getElementById("send-contact-avatar").textContent =
    contacts[i].avatar;
  document.getElementById("send-contact-avatar").style.background =
    contacts[i].color;
  document.getElementById("send-contact-name").textContent = contacts[i].name;
  document.getElementById("send-contact-phone").textContent = contacts[i].phone;
  document.getElementById("review-recipient").textContent = contacts[i].name;
  closeContactPicker();
  if (pendingSendNavigation) {
    pendingSendNavigation = false;
    showScreen("send");
    updateSendScreenContact();
  }
}

function closeContactPicker(e) {
  if (!e || e.target === document.getElementById("contact-picker-modal")) {
    document.getElementById("contact-picker-modal").classList.remove("active");
  }
}

// ============ CONTACTS MODAL (মানুষ button) ============
function openContactsModal() {
  const list = document.getElementById("contacts-modal-list");
  list.innerHTML = contacts
    .map(
      (c) => `
    <div class="contact-pick-item" style="pointer-events:none;">
      <div class="cp-avatar" style="background:${c.color};color:var(--green-dark)">${c.avatar}</div>
      <div>
        <div class="cp-name">${c.name}</div>
        <div class="cp-phone">${c.phone}</div>
      </div>
    </div>
  `,
    )
    .join("");
  document.getElementById("contacts-modal").classList.add("active");
}

function closeContactsModal(e) {
  if (!e || e.target === document.getElementById("contacts-modal")) {
    document.getElementById("contacts-modal").classList.remove("active");
  }
}

function initiateSend() {
  if (currentSendAmount > balance) {
    showErrorToast("আপনার ব্যালেন্স যথেষ্ট নয়!");
    return;
  }
  // Populate confirm screen
  const name = currentSendContact ? currentSendContact.name : "—";
  const amt = formatBDT(currentSendAmount);
  document.getElementById("confirm-recipient").textContent = name;
  document.getElementById("confirm-amount").textContent = amt;
  document.getElementById("confirm-total").textContent = amt;
  // Show confirm screen
  document.getElementById("send-confirm-screen").classList.add("active");
  // Voice prompt using Web Speech API
  speakConfirmPrompt(name, currentSendAmount);
}

async function speakConfirmPrompt(name, amount) {
  if (voiceMuted) return;
  try {
    const text = `আপনি ${name} কে ${amount} টাকা পাঠাতে চাইলে নিশ্চিত করুন`;
    const url = `https://bank-app-prototype.vercel.app/api/tts?text=${encodeURIComponent(text)}`;
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(url);
    currentAudio.play().catch(() => {});
  } catch (e) {}
}

function confirmAndProceed() {
  window.speechSynthesis.cancel();
  closeSendConfirm();
  pinAttempts = 0;
  openPin("send");
}

function closeSendConfirm() {
  document.getElementById("send-confirm-screen").classList.remove("active");
  window.speechSynthesis.cancel();
}

function executeSend() {
  const now = new Date();
  const timeStr =
    bnNum(now.getHours()) +
    ":" +
    (now.getMinutes() < 10 ? "০" : "") +
    bnNum(now.getMinutes());
  balance -= currentSendAmount;
  lastTxnAmount = currentSendAmount;
  lastTxnContact = currentSendContact.name;
  lastTxnTime = now.getTime();
  const txn = {
    name: currentSendContact.name,
    avatar: currentSendContact.avatar,
    amount: currentSendAmount,
    credit: false,
    time: "আজ " + timeStr,
    refunded: false,
    canRefundUntil: Date.now() + 30 * 60 * 1000,
  };
  transactions.unshift(txn);
  lastTxnId = 0;

  document.getElementById("success-title").textContent = "টাকা পাঠানো হয়েছে!";
  playVoice("sent.mp3");
  document.getElementById("success-body").innerHTML = `
    <strong>${currentSendContact.name}</strong>-কে ${formatBDT(currentSendAmount)} পাঠানো হয়েছে।<br><br>
    ৩০ মিনিটের মধ্যে ফেরত নিতে পারবেন।
  `;
  document.getElementById("refund-btn").style.display = "flex";
  document.getElementById("success-screen").classList.add("active");
  updateBalanceDisplay();
}

function closeSuccess() {
  document.getElementById("success-screen").classList.remove("active");
  navigate("home");
  // home voice already plays inside navigate("home")
}

function showRefundConfirm() {
  if (lastTxnId === null) return;
  const t = transactions[lastTxnId];
  document.getElementById("refund-modal-body").textContent =
    `${t.name}-কে পাঠানো ${formatBDT(t.amount)} ফেরত নেবেন?`;
  document.getElementById("refund-modal").classList.add("active");
}

function closeRefundModal(e) {
  if (!e || e.target === document.getElementById("refund-modal")) {
    document.getElementById("refund-modal").classList.remove("active");
  }
}

function confirmRefund() {
  if (lastTxnId === null) return;
  playVoice("back.mp3");
  const t = transactions[lastTxnId];
  if (Date.now() > t.canRefundUntil) {
    showErrorToast("৩০ মিনিট পেরিয়ে গেছে, ফেরত সম্ভব নয়।");
    closeRefundModal();
    return;
  }
  balance += t.amount;
  t.refunded = true;
  transactions.unshift({
    name: t.name + " (ফেরত)",
    avatar: t.avatar,
    amount: t.amount,
    credit: true,
    time: t.time + " · ফেরত",
    refunded: false,
    canRefundUntil: 0,
  });
  closeRefundModal();
  document.getElementById("success-screen").classList.remove("active");
  document.getElementById("refund-btn").style.display = "none";
  updateBalanceDisplay();
  renderTransactionsHishab();
  showToast("টাকা সফলভাবে ফেরত নেওয়া হয়েছে!");
}

// ============ BILLS ============
function showBillModal(type, provider) {
  currentBillType = type;
  document.getElementById("bill-modal-title").textContent =
    type + " বিল · " + provider;
  billAccountValue = "";
  billAmountValue = "500";
  document.getElementById("bill-account-display").textContent = "নম্বর দিন...";
  document.getElementById("bill-amount-display").textContent = bnNum("500");
  document.getElementById("bill-modal").classList.add("active");
}
function closeBillModal(e) {
  if (!e || e.target === document.getElementById("bill-modal")) {
    document.getElementById("bill-modal").classList.remove("active");
  }
}
function payBill() {
  const amt = parseInt(billAmountValue) || 0;
  if (amt <= 0) {
    showErrorToast("সঠিক পরিমাণ দিন।");
    return;
  }
  if (amt > balance) {
    showErrorToast("আপনার ব্যালেন্স যথেষ্ট নয়!");
    return;
  }
  balance -= amt;
  transactions.unshift({
    name: currentBillType + " বিল",
    avatar: "ব",
    amount: amt,
    credit: false,
    time: "এইমাত্র",
    refunded: false,
    canRefundUntil: Date.now() + 30 * 60 * 1000,
  });
  closeBillModal();
  updateBalanceDisplay();
  showToast(currentBillType + " বিল পরিশোধ হয়েছে!");
}

// ============ PROFILE TOGGLES ============
const TOGGLE_LABELS = {
  send: {
    bn: "পাঠান",
    en: "Send",
    color: "var(--teal-circle)",
    iconStroke: "var(--green-dark)",
    icon: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  },
  receive: {
    bn: "নিন",
    en: "Receive",
    color: "var(--yellow-circle)",
    iconStroke: "#8a6d00",
    icon: '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  },
  bills: {
    bn: "বিল",
    en: "Bills",
    color: "var(--red-circle)",
    iconStroke: "#8a3020",
    icon: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/>',
  },
  contacts: {
    bn: "মানুষ",
    en: "Contacts",
    color: "var(--purple-circle)",
    iconStroke: "#5a4a8a",
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>',
  },
};

function renderToggleList() {
  const el = document.getElementById("toggle-list");
  el.innerHTML = Object.keys(profileToggles)
    .map((key) => {
      const t = TOGGLE_LABELS[key];
      const on = profileToggles[key];
      return `<div class="toggle-item">
      <div class="toggle-icon-wrap" style="background:${t.color}">
        <svg viewBox="0 0 24 24" style="stroke:${t.iconStroke}">${t.icon}</svg>
      </div>
      <div class="toggle-labels">
        <div class="toggle-name">${t.bn}</div>
        <div class="toggle-en">${t.en}</div>
      </div>
      <div class="toggle-switch ${on ? "on" : ""}" onclick="toggleFeature('${key}', this)"></div>
    </div>`;
    })
    .join("");
}

function toggleFeature(key, el) {
  profileToggles[key] = !profileToggles[key];
  el.classList.toggle("on", profileToggles[key]);
  updateHomeActions();
}

// ============ HELP ============
function toggleFaq(el) {
  const a = el.querySelector(".faq-a");
  a.classList.toggle("open");
}

const TUTORIALS = {
  send: {
    title: "টাকা পাঠান",
    steps: [
      'হোম স্ক্রিনে "পাঠান" বোতামে চাপুন।',
      "যার কাছে পাঠাবেন তার নাম বা নম্বর বেছে নিন।",
      "কত টাকা পাঠাবেন সেটা দিন বা বাটন থেকে বেছে নিন।",
      '"পাঠিয়ে দিন" বোতামে চাপুন এবং পিন নিশ্চিত করুন।',
    ],
  },
  receive: {
    title: "টাকা নিন",
    steps: [
      'হোম স্ক্রিনে "নিন" বোতামে চাপুন।',
      "আপনার QR কোড শেয়ার করুন অথবা স্ক্রিন দেখান।",
      "প্রেরক আপনার কোড স্ক্যান করবেন।",
      "টাকা সরাসরি আপনার অ্যাকাউন্টে আসবে।",
    ],
  },
  bill: {
    title: "বিল পরিশোধ",
    steps: [
      'হোম স্ক্রিনে "বিল" বোতামে চাপুন।',
      "বিলের ধরন বেছে নিন (বিদ্যুৎ, গ্যাস, পানি ইত্যাদি)।",
      "মিটার নম্বর ও পরিমাণ দিন।",
      '"পরিশোধ করুন" চাপুন।',
    ],
  },
  contact: {
    title: "যোগাযোগ যোগ করুন",
    steps: [
      'হোম স্ক্রিনে "মানুষ" বোতামে চাপুন।',
      "সংরক্ষিত যোগাযোগ দেখুন।",
      "নতুন যোগাযোগ যোগ করতে + বোতামে চাপুন।",
      "নাম ও নম্বর দিয়ে সংরক্ষণ করুন।",
    ],
  },
};

function showTutorial(key) {
  const t = TUTORIALS[key];
  document.getElementById("tutorial-content").innerHTML = `
    <div class="modal-title">${t.title}</div>
    <div class="tutorial-modal">
      ${t.steps.map((s, i) => `<div class="tutorial-step"><div class="tutorial-step-num">ধাপ ${bnNum(i + 1)}</div><div class="tutorial-step-text">${s}</div></div>`).join("")}
    </div>
  `;
  document.getElementById("tutorial-modal").classList.add("active");
}

function closeTutorialModal(e) {
  if (!e || e.target === document.getElementById("tutorial-modal")) {
    document.getElementById("tutorial-modal").classList.remove("active");
  }
}

// ============ LOGOUT ============
function logout() {
  navigate("home");
  setTimeout(() => {
    document
      .querySelectorAll(".screen")
      .forEach((s) => s.classList.remove("active"));
    document.getElementById("login-screen").classList.add("active");
  }, 100);
}

// ============ TOAST ============
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  setTimeout(() => (t.style.display = "none"), 3000);
}
function showErrorToast(msg) {
  const t = document.getElementById("error-toast");
  t.textContent = msg;
  t.style.display = "block";
  setTimeout(() => (t.style.display = "none"), 3000);
}

// ============ INIT ============
updateGreeting();
updateBalanceDisplay();
updateHomeActions();
renderToggleList();

["home", "receive", "bills", "help", "profile"].forEach((id) => {
  renderBottomNav("bottom-nav-" + id, id);
});

function updateClock() {
  const now = new Date().toLocaleTimeString("en-BD", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  document.getElementById("status-time").textContent = now;
}
updateClock();
setInterval(updateClock, 1000);
