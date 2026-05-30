from gtts import gTTS
from io import BytesIO
from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        params = parse_qs(parsed.query)
        text = params.get('text', [''])[0]

        if not text:
            self.send_response(400)
            self.end_headers()
            return

        buf = BytesIO()
        tts = gTTS(text=text, lang='bn')
        tts.write_to_fp(buf)
        buf.seek(0)

        self.send_response(200)
        self.send_header('Content-Type', 'audio/mpeg')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(buf.read())