# Inclusive Design for Digital Banking Interfaces: Rethinking Interfaces and Design Processes for the Elderly Users in the Global South

**by**

- MD. Mohaimenul Haque Helali (24341258)
- Sahana Parvin Nupur (24141251)
- Ullas Sarkar Tirtha (24141252)
- Aarya Ibteda Foyez (22201509)
- Adnan Sami Srijon (24141166)

A thesis submitted to the Department of Computer Science and Engineering in partial fulfillment of the requirements for the degree of B.Sc. in Computer Science and Engineering

**Department of Computer Science and Engineering**  
**Brac University**  
**October 2025**  
© 2025. Brac University  
All rights reserved.

---

## Declaration

It is hereby declared that

1. The thesis submitted is my/our own original work while completing degree at Brac University.
2. The thesis does not contain material previously published or written by a third party, except where this is appropriately cited through full and accurate referencing.
3. The thesis does not contain material which has been accepted, or submitted, for any other degree or diploma at a university or other institution.
4. We have acknowledged all main sources of help.

---

## Approval

The thesis titled "Inclusive Design for Digital Banking Interfaces: Rethinking Interfaces and Design Processes for the Elderly Users in the Global South" submitted by

1. MD. Mohaimenul Haque Helali (24341258)
2. Sahana Parvin Nupur (24141251)
3. Ullas Sarkar Tirtha (24141252)
4. Aarya Ibteda Foyez (22201509)
5. Adnan Sami Srijon (24141166)

of Summer, 2025 has been accepted as satisfactory in partial fulfillment of the requirement for the degree of B.Sc. in Computer Science in Fall 2025 Year.

**Examining Committee:**

- **Supervisor (Member):** Partha Bhoumik, Lecturer, Department of Computer Science and Engineering, Brac University
- **Supervisor (Member):** Anika Priodorshinee Mrittika, Lecturer, Department of Computer Science and Engineering, Brac University
- **Thesis Coordinator (Member):** Md. Golam Rabiul Alam, PhD, Professor, Department of Computer Science and Engineering, Brac University
- **Head of Department (Chair):** Dr. Sadia Hamid Kazi, PhD, Chairperson and Associate Professor, Department of Computer Science and Engineering, Brac University

---

## Ethics Statement

This research has been conducted ethically, according to the rules for research involving humans. We completely described the aim, scope and operation of the study to the students before any of them joined. All were involved on a fully voluntary basis. All individuals were given written and verbal consent prior to conducting interviews and prototype testing. It was also clearly communicated to the participants that they are free to withdraw from the study at any time without problems. Throughout the data collection, analysis and reporting process, individual identities were maintained, while protecting everyone's privacy. We only referred to participants using codes (P1-P31), and we didn't collect or share any personal identifying information. All the information we collected was solely for academic research and was not used for any other purpose. No monetary risks were incurred during the evaluation in the prototype evaluation sessions. Personal information such as age, occupation, gender, and education has been attended to with great sensitivity. This information was only reported as group averages or anonymously. The older participants were included and we paid special attention to them. We interviewed and assessed at their pace and accommodated for digital and physical literacy levels. We recognise their emotional and thinking needs and responded to them at all stages of the research.

---

## Abstract

Digital Banking refers to the process of performing financial transactions through online banking platforms that eliminate the need for physical bank visits. In Bangladesh, digital banking has rapidly expanded, driven by growing internet access and technological advancements. However, elderly citizens often struggle to use these platforms due to issues like complex interfaces, language barriers, lack of trust, etc., leading to digital exclusion and restricted financial independence as well as increased reliance on others. While most research has explored basic user experience and accessibility, it has not specifically focused on the elderly in the context of Bangladesh. This research investigated the key barriers faced by older adults when interacting with mobile banking apps, websites, and ATMs as it combined field research like interviews, surveys and general observations at the primary stage and later progressive co-design workshops with the older users and banks, and usability testing that aspired to develop user-centered design strategies and propose regulatory measures to address their challenges. The findings aimed to assist designers, developers, and regulatory authorities in building a safer, simpler, and more age-friendly digital banking system. By identifying critical barriers and proposing targeted interface and policy solutions, this paper laid the groundwork for a more age-inclusive digital banking ecosystem in Bangladesh.

**Keywords:** Digital banking, Elderly Users, Inclusive Design, Age-Friendly UX, Gamification, Human-Centered Design (HCD), Accessibility

---

## Dedication

We dedicate this thesis to the old age people of Bangladesh. This research was made possible, through their resilience, patience, and willingness to share their experiences. The voices that are not heard when they design their digital systems are the basis of all of their findings and recommendations in this work. We hope that this research will contribute in some way to the creation of a digital future that is inclusive and respectful of them. This work is dedicated to our supervisors and Parents as well. They were always there in our lives, making sacrifices, encouraging us and helping us through this journey. It was all possible thanks to their faith in us.

---

## Acknowledgement

We would like to thank everyone who helped us with this research. First, a big thank you to our supervisors, Partha Bhoumik and Anika Priodorshinee Mrittika, Lecturers at the Department of Computer Science and Engineering, BRAC University. Their constant advice, thoughtful feedback, and encouragement were crucial at every stage of this project. Their knowledge and patience were extremely valuable in guiding this work and its overall quality. We are also thankful to Md. Golam Rabiul Alam, PhD, the Thesis Coordinator, and Dr. Sadia Hamid Kazi, PhD, Head of the Department of Computer Science and Engineering, for their support and supervision throughout the research. A special thanks goes out to all 31 participants. They kindly gave their time, shared their experiences, and openly tried out our prototypes. This research would not have been possible without their trust and willingness to take part. Their opinions are central to every finding in this thesis. Finally, we want to thank the Department of Computer Science and Engineering at BRAC University for giving us the academic setup and resources we needed to do this research.

---

# 1 Introduction

## 1.1 Background

On June 16, 2014, the senior officer Kabir Ahmed in his sixties died while waiting in the long queues at the bank to receive his pension of 900tk for every quarter at a topical branch, in Feni, Bangladesh. After standing for five long hours under the scorching heat of the sun, experiencing continuous delays and standstill lunch breaks, he breathed his last breath. He sat at a nearby tea shop, and passed away from a sudden and fatal cardiac arrest. He was not able to draw his pension. Reports [48] made it clear that there were several hundred people waiting in a similar health situation that day, and bankers at the hospital have minimized the situation and claimed that there were just a few people in the queue. Kabir Ahmed's death echoes a tremendous issue that many old timers in the financial sector of Bangladesh perceive. While digital banking has made transactions smoother for numerous denizens, it has also increased the struggles of older adults who confront challenges with reading, trust, and applying technology.

## 1.2 Rational of the Study or Motivation

The government's aim to have 30 per cent of all transactions done digitally by 2025 and a full cashless economy by 2031 is a big step forward towards modernization. This, however, is a forward-looking vision and there are serious questions about inclusiveness. If not addressed to meet the needs of the citizenry, these objectives can leave the younger, technologically literate users feeling at ease while older users are cut off and unable to use and trust the very systems developed to serve them [49]. There is both a national agenda and personal motivation behind this research. When observing older family members using basic digital financial services like entering one-time passwords or dealing with a cluttered mobile interface, it became clear just how many design requirements left out older users. These moments raised our questions about how a well-considered and inclusive design can give back the confidence and independence to the elderly, particularly in low-tech countries such as Bangladesh where digital literacy and access is still low. Current digital banking solutions tend to be geared towards speed and aesthetics, leaving out accessibility. We do this by designing in a human-centred and inclusive way that is simple, clear and built on trust. The vision is to make digital banking more user-friendly and to ensure that elderly people feel safe, confident and valued in Bangladesh's march towards a digital future.

## 1.3 Problem Statement

In Bangladesh, Digital Banking platforms pose a plethora of systematic barriers for the older adults under the guise of complexity of interface, language barrier and unfamiliar metaphors, substandard digital literacy rate, privacy and trust concerns and an altogether lack of inclusive design thought processes. As such, the question that arises is: How can a digital banking infrastructure and interface be created which is user-centered, age-adaptive, scalable and cost-effective so that older adults find the technology irrefutably reliable and usable, a system which rises above the systematic barriers native to the region?

## 1.4 Objective

The Spearhead objective of this research lies in exploring and enhancing the inclusivity and accessibility of the digital finance services for the older population, focusing predominantly on the Global South. By enmeshing user-centric design philosophies and a crystal understanding of cultural and contextual contents of the region, our objectives plan to mend the digital finance breach between older and younger counterparts.

- **RO1 Analyzing Current Research and existing frameworks:** Conduct a comprehensive analysis of the existing frameworks, literature and real-world implementations that focus on digital inclusivity and accessibility of older adults and delve into a critical deep-dive of current design standards, usability ratios and to pinpoint gaps, overlooked socio-technical domain, in turn figure out a robust digital banking phenomena for the elderly demographic.
- **RO2 Identifying and analyzing barriers and enablers in online banking for older adults:** Identify, scrutinize, analyze and chronicle the main barriers older adults face with online banking medium and figure out enablers as well, this includes technical, literary, trust and physical parameters.
- **RO3 Documenting design patterns and establishing inclusive design principles:** Document design patterns and lay out design principles susceptible to cultural appropriation, usability, age-adaptiveness and simplicity of UX and inclusivity. In turn, provide a policy framework and digital design criterion handbook for designers, developers and financial institutions alike.
- **RO4 Evaluating practicality, scalability, and financial feasibility of proposed solutions:** To evaluate the practicality, scalability, and financial reasoning on whether the proposed solutions can be implemented directly to terraform the overall landscape of digital banking for the older generation of the Global South and to leave a lasting positive impression on the older demography.
- **RO5 Playtesting and assessing experimental effectiveness and verdict of proposed solution:** Playtesting different formats of solutions or methods be it quantitative metrics or qualitative feedbacks, or mixed methods for testing out ideas effectively in the real-world and will be an anchor to future potential prospective solutions and will help discover psychological and sentimental dimensions of older adults' relationship with fin-tech.

To provide more support into elderly adaption, this research also explored gamification as a confidence building system which incorporates guided tutorials, risk free practice modes and reward system to reduce the fear of making mistakes and encourage them the use of digital banking platforms without any hesitations.

## 1.5 Methodology in Brief

- **Problem Identification:** The initial research phase where researchers define and articulate the specific issues, gaps, or challenges that need to be addressed through the study.
- **User Interviews:** A qualitative research method involving structured or semi-structured conversations with target users to gather in-depth insights about their experiences, needs, and challenges.
- **Field Observations:** A research technique where researchers directly observe users in their natural environment to understand real-world behaviors and interactions without interference.
- **Surveys and Data Collection:** Systematic gathering of information from a large sample using questionnaires or structured instruments to obtain quantifiable data about user attitudes, behaviors, or demographics.
- **Barrier Analysis:** Identification and analysis of the barriers (physical, cognitive, social, technical) which are preventing users from effectively using a system or service.
- **Pattern Documentation:** Documenting and generalising common themes, behaviours or problems found in several data sources to reveal systematic trends.
- **Design Principal Drafting:** Developing rules or guidelines from research results that guide the design of interfaces and systems for user needs.
- **Co-design Workshops:** Sessions in which researchers, designers and end-users work together to develop and evolve solutions with user input at the forefront of the design process.
- **Prototype Development:** The prototype was developed by an iterative design process. This included considering and designing with the challenges and expectations of users and translating them into a working interface. We worked on making it accessible to Bengali speakers first, presenting information step-by-step, designing it to be forgiving or user-friendly, and building trust through transparency. We also incorporated elements of games like guided onboarding, a practice mode with no repercussions and confidence tracking, all with a view to supporting seniors in Bangladesh.
- **Usability Testing:** A structured evaluation process was followed. The prototype was tested with elderly participants several times. Common banking tasks were performed by the participants, with the voice of the participants dictating what they were thinking. This assisted our research team to detect any current access problems and to enhance the interface. General observations and specific feedback were collected to assess the ease of use, accessibility, and usefulness of the design.
- **Quantitative Evaluation:** Collecting numerical data that can be used to measure the performance of the system and/or the outcome of the users, such as task completion time, error rates, or satisfaction ratings, for statistical analysis.
- **Qualitative Feedback:** Gathering user feedback that is not numerical, such as by conducting interviews, asking open-ended questions, or observing users, to gain insights into subjective experiences, opinions, and contextual nuances.
- **Cultural Validation:** Assessing the appropriateness, meaning and effectiveness of a design, interface, or solution in specific cultural contexts, including local norms, symbols and preferences.
- **Trust Assessment:** Ascertainment of users' trust and trustworthiness of a system, including trust in security, reliability, and institutional trustworthiness.
- **Accessibility Review:** A systematic process of examining a product or service and applying accessibility standards and guidelines to make it accessible for people with disabilities and limitations.
- **Policy Framework Creation:** Developing structured guidelines, regulations, or institutional recommendations that govern how systems should be designed, implemented, or regulated to ensure inclusivity and compliance.

## 1.6 Scopes and Challenges

The main goal of this research is to identify, analyze and enhance the usability and accessibility of digital banking interfaces for low-literacy and elderly users in Bangladesh. The study aims to identify the impact of these design features like typography, color contrast, navigation pattern, iconography and information layout on the user experience of this type of user. Furthermore, it examines the influence of cultural familiarity, trust, and e-literacy on older adults' attitudes towards mobile banking applications. The research is extensive and includes both academic and empirical articles which are related to Human Computer Interaction (HCI), inclusive design and user-centred development practices. It also incorporates insights from previous research on gamification, conversational AI, and localized text-free interfaces, which are closely connected to the aspects of engagement and accessibility pertinent to elderly users. There are a number of methodological and practical difficulties in carrying out this research. It is hard to gather accurate data from older adults, since many older adults are unwilling to participate in digital surveys or usability tests and differences in literacy, language and previous tech exposure make design challenging. It will be necessary to plan carefully to ensure accessibility and ethical sensitivity. Participant diversity might be limited because of time and logistics and privacy regulations may limit cooperation from financial institutions for conducting real-world tests. Simplicity versus functionality is another challenge; if the interface is too simple, it may be missing some of the key features. The performance of devices, screen size and connectivity are also factors that impact usability in rural areas. Lastly, cultural and regional variations in language, icons, and color perception make designing a universally understood design more complex, and require repeated and context-specific solutions.

---

# 2 Literature Review

## 2.1 Preliminaries

### 2.1.1 Research Methodologies

- **SEM (Structural Equation Modeling):** A statistical technique that combines factor analysis and multiple regression to analyze complex relationships between observed and latent (hidden) variables. Used to test theoretical models by examining how well proposed relationships fit actual data.
- **TAM (Technology Acceptance Model):** A theoretical framework that predicts how users accept and use technology based on two key factors: Perceived Usefulness (PU) and Perceived Ease of Use (PEOU). Originally developed by Fred Davis in 1989.
- **PLS-SEM (Partial Least Squares Structural Equation Modeling):** A variance-based SEM technique that works well with smaller sample sizes and makes fewer assumptions about data distribution. Commonly used in exploratory research to predict relationships.
- **HCD (Human-Centered Design):** A design approach that places human needs, capabilities, and behaviors at the center of the design process. Involves users throughout design and development through observation, ideation, prototyping, and testing.
- **CFA (Confirmatory Factor Analysis):** A statistical method used to verify whether measures of a construct are consistent with a researcher's understanding of that construct. Tests if data fits a hypothesized measurement model.
- **ANOVA (Analysis of Variance):** A statistical test that compares means across multiple groups to determine if differences are statistically significant. Used to identify whether independent variables affect dependent variables.
- **SLR (Systematic Literature Review):** A rigorous method for identifying, evaluating, and synthesizing all relevant research on a specific topic using predefined, transparent, and replicable procedures.
- **RCT (Randomized Controlled Trial):** An experimental design where participants are randomly assigned to treatment or control groups to test the effectiveness of an intervention while minimizing bias.
- **UCD (User-Centered Design):** Similar to HCD; a design philosophy that prioritizes users' needs, preferences, and limitations throughout the entire design process.
- **SUS (System Usability Scale):** A widely-used 10-item questionnaire that provides a quick and reliable measure of usability. Scores range from 0-100, with scores above 68 considered above average.

### 2.1.2 Key Measurement Variables

- **PU (Perceived Usefulness):** The degree to which a person believes using a particular system would enhance their job performance or make tasks easier. A core TAM variable.
- **PEOU (Perceived Ease of Use):** The degree to which a person believes using a system would be free from effort. Another core TAM variable that often influences PU.
- **BI (Behavioral Intention):** A person's stated willingness or plan to perform a specific behavior, such as adopting a new technology. Often used as a proxy for actual behavior.
- **AoA (Age of Acquisition):** The age at which a word or concept is typically learned. Earlier-acquired words are generally recognized faster and more accurately.
- **RT (Reaction Time):** The time interval between stimulus presentation and a participant's response. Used to measure processing speed and cognitive load.
- **$R^{2}$ (Coefficient of Determination):** A statistical measure representing the proportion of variance in a dependent variable explained by independent variables. Values range from 0 to 1.
- **$Q^{2}$ (Predictive Relevance):** A measure of a model's predictive accuracy in PLS-SEM. Positive values indicate predictive relevance, while negative values suggest the model lacks predictive power.

### 2.1.3 User Interface & Design Terms

- **UI (User Interface):** The space where interactions between humans and machines occur, including screens, buttons, menus, and other visual and interactive elements.
- **UX (User Experience):** The overall experience a person has when interacting with a product or service, encompassing usability, accessibility, pleasure, and utility.
- **HCI (Human-Computer Interaction):** An interdisciplinary field that studies the design, evaluation, and implementation of interactive computing systems for human use.
- **TTS (Text-to-Speech):** Assistive technology that converts written text into spoken voice output.
- **STT (Speech-to-Text):** Technology that converts spoken language into written text.
- **AT (Assistive Technology):** Devices, software, or systems that help people with disabilities or limitations perform tasks that might otherwise be difficult or impossible.
- **ATM (Automated Teller Machine):** A self-service banking terminal that allows customers to perform financial transactions without human assistance.
- **W3C (World Wide Web Consortium):** An international standards organization that develops guidelines for web accessibility (WCAG) and other web technologies.
- **WCAG (Web Content Accessibility Guidelines):** International standards developed by W3C to make web content more accessible to people with disabilities.
- **API (Application Programming Interface):** A set of rules and protocols that allows different software applications to communicate and share data with each other.
- **DTN (Delay-Tolerant Networking):** A network architecture designed to work in challenging environments with intermittent connectivity, high latency, or limited bandwidth.

### 2.1.4 Statistical & Analysis Terms

- **Bootstrap/Bootstrapping:** A resampling technique that repeatedly draws samples from data to estimate the accuracy of statistical measures and test stability of results.
- **Spearman's Correlation Coefficient:** A non-parametric measure of rank correlation that assesses how well the relationship between two variables can be described using a monotonic function.
- **P-value:** The probability that observed results occurred by chance. Values less than 0.05 are typically considered statistically significant.
- **Wilcoxon Signed-Rank Test:** A non-parametric statistical test used to compare two related samples or repeated measurements.
- **Gaussian Copula Method:** A statistical technique used to test for endogeneity in structural models.
- **CLS (Confidence Levels / Confidence Limits):** Statistical ranges that indicate the reliability of an estimate.

### 2.1.5 Banking & Financial Technology Terms

- **Fintech (Financial Technology):** Technology-driven innovation in financial services, including mobile payments, digital wallets, robo-advisors, and blockchain.
- **Financial Inclusion:** Ensuring that individuals and businesses have access to useful and affordable financial products and services.
- **Mobile Money:** Financial services provided through mobile phones, particularly popular in developing countries.
- **Digital Wallet / E-Wallet:** A digital system that stores payment information for online transactions.
- **Biometric Verification:** Authentication using unique biological characteristics like fingerprints or face recognition.
- **KYC (Know Your Customer):** Regulations requiring banks to verify customer identities to prevent fraud.

### 2.1.6 Research Design Terms

- **Mixed Methods:** Combines both quantitative and qualitative data collection and analysis.
- **Cross-Sectional Study:** Analyzes data from a population at a single point in time.
- **Longitudinal Study:** Follows the same subjects over time to observe changes.
- **Quasi-Experimental Design:** Similar to experiments but without random assignment.
- **Thematic Analysis:** A qualitative method for identifying and analyzing patterns in data.
- **Think-Aloud Protocol:** A usability testing method where participants verbalize thoughts during tasks.
- **Bodystorming:** A technique where designers physically simulate user limitations to gain empathy.
- **Heuristic Evaluation:** A usability inspection method comparing interfaces to usability principles.

### 2.1.7 Specialized Terms

- **MCI (Mild Cognitive Impairment):** A condition involving noticeable decline in cognitive abilities that doesn't yet interfere with daily life.
- **Gamification:** The application of game-design elements in non-game contexts.
- **Progressive Disclosure:** A design strategy showing essential information first and revealing details as needed.
- **Affordance:** A property that suggests how an object or interface should be used.
- **Cognitive Load:** The mental effort required to process information and complete tasks.
- **Literacy Rate:** The percentage of a population that can read and write.
- **Semi-Literate / Functionally Illiterate:** People who can read basic text but struggle with complex tasks.
- **OAuth (Open Authorization):** A protocol that allows secure authorization without sharing passwords.
- **SSO (Single Sign-On):** A process allowing access to multiple applications with one login.

### 2.1.8 Framework & Model Abbreviations

- **TCCM (Theory-Context-Characteristics-Method):** A framework for systematically reviewing and organizing literature.
- **PRISMA:** Guidelines for reporting systematic reviews.
- **4D Model:** A design thinking framework with four phases: Discover, Define, Develop, Deliver.
- **ISO (International Organization for Standardization):** An international body developing and publishing quality standards.
- **ADA (Americans with Disabilities Act):** U.S. legislation prohibiting discrimination against people with disabilities.
- **GDPR (General Data Protection Regulation):** EU regulation on data protection and privacy.
- **NGO (Non-Governmental Organization):** Non-profit organizations operating independently of government.

### 2.1.9 Technology & Platform Terms

- **Meteor.js:** An open-source JavaScript web framework for real-time applications.
- **MongoDB:** A NoSQL database storing data in flexible, JSON-like documents.
- **React Native:** A framework for building mobile applications using JavaScript and React.
- **Expo:** A platform simplifying React Native development and deployment.
- **CI/CD (Continuous Integration / Continuous Deployment):** Practices that automate testing and deployment.
- **WebSocket:** A protocol for full-duplex real-time communication.
- **OCR (Optical Character Recognition):** Technology converting images of text into machine-readable text.
- **Fitts' Law:** A predictive model stating that movement time depends on target distance and size.

## 2.2 Review of Existing Research

### 2.2.1 Digital Literacy, Training, and Behavioral Inclusion

Predominantly, authors of [1, 2, 3, 4, 5, 6, 7, 8, 9] focused on community interventions, digital literacy, and behavioral inclusion of older adults within the bounds of digital banking ecosystems. The paper [1] deep dived into reasons surrounding low mobile banking usage among older adults through direct interviews and thematically framing them under criteria, identifying key barriers like security anxieties, lack of comprehension, language barriers, and physical decline. The authors of paper [2] compiled twenty-seven evidence-based design guidelines emphasizing readability, simplicity, and consistency. The study [3] tested AI performance and trust on said technology. Paper [4] illustrated how intergenerational training greatly improved digital literacy, confidence and skills, bridging the gap between the younger generation and the older populations. Furthermore, works included in paper [9] gave a clear demonstration of game-based learning which was found to strengthen cyber trust, scam recognition, and a readiness to handle such crisis situations. Collectively, these researches emphasize that empowerment through digital training, human interaction and intervention, and simplified design guidelines are tantamount and key enablers of digital inclusion.

### 2.2.2 Gamification and Engagement in Fintech Adoption

Concurrently, researchers [5, 6, 7, 8, 47] investigated the application of gamification principles and their causation and correlation on technology adoption, learning and engagement among the elderly or novice users. The paper [5] ran tests on the integration of gamified elements within the Technology Acceptance Model and ascertained that gamification indeed boosted user engagement, interaction and retention. Similarly, study [6] empirically demonstrated that gamification cues improve perceived enjoyment and ease of use but are moderated by risk perceptions. The researchers of paper [7] validated that tailored gamified training enhances perceived usefulness, ease of use, and adoption intention among older adults. These findings profoundly resonate with inclusive digital design philosophy where fun, feedback and perceived motivation marry with the willingness to use cyber financing tools. In a nutshell, these research findings as a whole argue that gamification is bound to balance simplicity and trust to efficiently engage not only the younger generation but also should not alienate the elderly users in the fintech ecosystems. Supporting this, across a sample size including thirty-seven banks that has an implementation of gamified system between 2021 and 2024, the average daily active users (DAU) increased from 1.2 million to a whopping 2.0 million, citing a 67% increment within the first six months [50]. Consequently, Figure 2.1 shows the average increase in user engagement across tiers like payments, savings and education modules also increased at a substantial amount after the implementation of gamified system.

### 2.2.3 Assistive Technologies and Accessible Banking Interfaces

This archetype [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26] emphasizes technologies and inclusive banking frameworks to help older generations use digital finance. It also talks about accessibility infrastructures. For instance, paper [17] and paper [18] discuss how important it is to have autonomy and usability for people with disabilities or those who are getting older. They affirm that in order to assist these people we need auditory and tactile aids. Whereas studies like [15] and [13] show that there are gaps in inclusion. They say that just making everything digital is not enough. We need strong policies and awareness to make sure everyone is included. Study [14] found that AI assistants still have trouble understanding different types of speech. Thus, meaning we need to improve and refine these assistants so they can be used in applications. The archetype and these studies show that we need to integrate accessibility standards and assistive interfaces into the banking infrastructure. This will help fill in the gaps and make digital banking better for everyone, older generations and people with disabilities. The archetype is vital because it sheds light on clear signs of a need for assistive technologies and accessibility infrastructures. We need to implement this idea on a practical scale to make digital finance more reachable for everyone involved.

### 2.2.4 Inclusive Design, Cultural Adaptivity, and HCI Models

The authors, like the ones in studies [21, 22, 23, 24, 26, 27, 41, 46] took a glance at design models that focus on the user adaptations that consider culture and user centric design frameworks for user experience that work for older people and a wide range of users. Some studies, such as [21] and [22] pointed out that it is really important for older users to feel comfortable with and understand the design and be able to use it on their own, including cultural familiarity and clarity of usage. The people who did the research in [24] found out that a lot of applications do not follow this set of rules for accessibility, which shows that we need to make sure all digital finance services follow the same cultural standards and are designed to universally design compliance instead of being set in stone. Furthermore, the papers [26] and [27] showed that it is crucial to consider the needs of people with cognitive and perceptual abilities or lack there-of. All these studies together help us create designs for services that are accessible, culturally adaptive and promotes ease of use for everyone, which is what we mark as inclusive user experience theory and a clear idea of the theory is cited as well in the papers, a chassis of culturally appropriate design so to speak.

### 2.2.5 Policy, Regulation, and Financial Inclusion Frameworks

Research in this group [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47] explored legal, ethical, and infrastructural dimensions molding accessibility and inclusive digital banking design philosophy. Papers [18] and [20] highlighted policy inconsistencies across a plethora of digital finance services along with a clear line of maintenance challenges these cyber services face on a daily basis, let alone a solidified proper system of organization. The authors of studies [34] and [35] proposed scalable frameworks under the pretext of realistic installment of said solution for low-literate, semiliterate, and cross-lingual population groups. Additionally, papers [39] and [40] contributed to a fully fleshed-out understanding of literacy-linked UX design and how it can be extended to other population groups so that even if the digital literacy rate suffers, the UX will stand the test of time. Altogether, these studies revealed that inclusive digital financial systems have dependency on not only design innovations and novelty, but also harmonized governance, policy support, and socio-technical integration to ensure an equitable digital access framework and regulations.

## 2.3 Summary of Key Findings

Despite growing attention to inclusive interface design, notable research gaps persist in the context of Bangladesh and similar Global South countries. Most existing studies were conducted in high-income regions, making their findings less applicable to local challenges such as low literacy, limited digital exposure, and linguistic diversity. Empirical testing remains largely small-scale or laboratory-based, rarely reflecting the infrastructural and socioeconomic realities of Bangladeshi users. Moreover, while emerging tools such as voice interaction and AI-driven assistance show promise, they have yet to be systematically explored in local digital banking or financial inclusion systems. The absence of a unified framework for evaluating accessibility across age, literacy, and cognitive dimensions further limits progress. These gaps highlight the urgent need for context-sensitive, participatory, and longitudinal research that integrates technological design with cultural and linguistic inclusivity to ensure equitable access to digital banking for the elderly in Bangladesh. To illustrate these gaps and research trends, a feature-based comparison of the most relevant papers is presented below:

| Papers               | Cultural Adapt. | User Centered | Access. Elderly/Low Lit. | Empirical Eval. | Prototype | Practical Impact | Regional Context | Tech (AI) Tools |
| :------------------- | :-------------: | :-----------: | :----------------------: | :-------------: | :-------: | :--------------: | :--------------: | :-------------: |
| Hernandez et al. [2] |        X        |               |            ✓             |                 |     X     |                  |        X         |        X        |
| Chauhan et al. [47]  |        X        |       ✓       |            X             |        X        |     X     |        ✓         |        X         |        ✓        |
| Alsswey et al. [21]  |        ✓        |       ✓       |            ✓             |        ✓        |     ✓     |        ✓         |        X         |        ✓        |
| Yaldaie [27]         |        X        |       ✓       |                          |        ✓        |     X     |        ✓         |        X         |        ✓        |
| Ilyas et al. [35]    |        ✓        |       ✓       |                          |        ✓        |     X     |        ✓         |        ✓         |                 |
| Emmanuel et al. [31] |        ✓        |       ✓       |                          |        ✓        |     ✓     |        ✓         |        ✓         |        ✓        |
| Miller et al. [4]    |        X        |       ✓       |            ✓             |        ✓        |     ✓     |        ✓         |        ✓         |        X        |
| Ahmed [40]           |        ✓        |       ✓       |                          |        ✓        |     ✓     |        ✓         |        ✓         |        ✓        |
| Cheng et al. [26]    |        ✓        |       ✓       |            ✓             |        X        |     X     |        ✓         |        ✓         |        ✓        |
| Kim et al. [3]       |        ✓        |       ✓       |                          |        ✓        |     ✓     |        ✓         |        X         |        ✓        |

---

# 3 System Specifications, Impact Analysis, and Project Management

## 3.1 System Specifications, Impact Analysis, and Project Management

### 3.1.1 Final Specifications and Requirements

The prototype design was based on the results of the interviews, co-design workshops and prototype evaluation sessions with elderly users in Bangladesh. The goal was to design a user-friendly, user-friendly and trustworthy digital banking platform for older people.

**Functional Requirements**

- All interface and transaction processes in Bengali language.
- Voice control for people with visual and literacy impairments.
- Senior Mode provides easy navigation, enlarged text and touch targets.
- A safe environment for practicing with no financial risks.
- Multiple step transaction confirmations to minimise accidental errors.
- Step-by-step, interactive tutorials and contextual help.
- Gamification features such as achievements and progress tracking.
- Easily customisable banking service dashboard.
- Biometric Authentication Methods like Fingerprint Identification etc.

**Non-Functional Requirements**

- Higher level of usability and ease of learning.
- Abiding of accessibility guidelines.
- Quick speeds on lower-end Android smartphones.
- Robust performance in different network scenarios.
- Implement secure Data Security and Authentication.
- Localisation in Bangla language and culture.
- Scalability to other mobile banking platforms.
- Modular design for future maintenance and upgrades.

**Design Constraints**
The system has to be compatible with common Android devices used in Bangladesh, be able to function with limited internet connection, render Bangla text correctly, and be compatible with the existing mobile financial service infrastructures and regulatory requirements.

### 3.1.2 Societal Impact

The proposed inclusive digital banking framework can have a tremendous impact on the lives of elderly users in Bangladesh. For older people, current digital banking products can be hard to navigate due to issues with understanding the language, accessing small text, complexity of products, and avoiding errors. In many cases, they need to rely on relatives, friends or third parties for financial responsibility. The proposed system will also include features like Bengali language support, voice guidance, user-friendly navigation, and safe practice modes to boost users' confidence and independence. The elderly can conduct banking operations more easily without relying on others, which is beneficial to achieving financial independence and self-sufficiency. The framework could also help to lower digital exclusion of seniors. With the expansion of digital financial services in Bangladesh, it is critical to ensure that such services are available and accessible for the elderly. The proposed design communicates in a manner that reflects its target audience and their needs, and aligns with national objectives to advance digital inclusion and financial services for equality.
In addition, the system could have a positive effect on intergenerational family relationships by decreasing the reliance that older family members have on younger family members for routine finances. This enables the elderly to have more control over their own finances and remain confident and dignified.

### 3.1.3 Environmental Impact

The system as proposed can offer a number of environmental benefits, since it will lead to the substitution of the traditional banking channels with digital ones. Even simple and common services such as paying bills, transferring money, checking balances are activities that elderly users come across in physical bank branches. More use of accessible digital banking will help to lower the number of such visits, which in turn will decrease transportation-related fuel use and emissions.
Digital transactions also minimize the need to engage in paper-based banking processes. Printed forms, passbooks and receipts can be reduced by using electronic receipts, electronic records and online transaction history. This helps to make banking operations more environmentally friendly. The prototype is designed to work well on low-end Android Devices which are prevalent in Bangladesh. Backwards compatibility prevents the need for regular hardware changes and the build up of electronic waste. In addition, the design is designed to be lightweight and low-bandwidth, reducing the overall resources consumed for digital service delivery. While the infrastructure and network requirements for digital systems have to be met by servers, the environmental impacts of paper saving and reduced travel are expected to be greater in the long-term.

### 3.1.4 Ethical Issues

Ethical aspects were a critical issue in the research process and in the design of the proposed system. All participants were informed of the purpose of the study and all were volunteers during data collection. Prior to interviews and prototype evaluations, informed consent was obtained. They were also told they could come and go from the study if they wished without penalty.
All the participant identities were anonymised for privacy and confidentiality during analysis and reporting. Personal information was not shared and collected information was only for academic research. The prototype evaluation process did not include real financial transactions, meaning that no participant would have any financial risk in using the system. The design approach focuses on ensuring fairness and accessibility in financial services, with the aim to not exclude elderly users due to their age. The design complies with the absence of discriminatory practices and, on the contrary, aims at equal opportunities among users with different levels of digital literacy.
Ethical concerns were also taken into account, such as security and privacy. The different features such as biometric security, secure user logins and transaction confirmation are intended to guarantee the security of users against fraud, unauthorised access and mistakes. The proposed system emphasizes transparency, accessibility, and user protection, adhering to ethical principles of responsible technology design.

### 3.1.5 Economic Analysis

To adopt an inclusive digital banking framework, investments are needed to be put into interface redesign, accessibility, voice guidance systems, and user onboarding mechanism. Resources could also be required for testing, maintenance and awareness building activities at financial institutions.
Although these are costs, there are several potential economic benefits to the proposed system. Better access will enable more older users to embrace digital banking services and boost the number of users and digital transactions. Increased digital adoption could help alleviate in-branch pressure in financial institutions and help to decrease in-person service delivery costs. The structure could also lower monetary costs for aged users who have to make use of an intermediary or broker to conduct banking actions. This can help to eliminate unnecessary service fees and travel costs. In a larger sense, financial inclusion can have a positive impact on the economy of the country. The financial inclusion of elderly people who can conduct their financial transactions independently can play a significant role in promoting economic activity, thereby continuing the digitalization of the financial sector in Bangladesh. Thus, the long term gains of increased access and inclusion are likely to be greater than the implementation costs.

### 3.1.6 Project Management Plan

Research project was carried out during two semesters in the following of a structured user-centered design approach. The project started by identifying problems and reviewing the existing literature on digital banking accessibility, ageing populations and inclusive design. This phase was important in defining the research gap and the research aims.
After the literature review, interview protocols were designed and data gathering was done with elderly people in Bangladesh. Thematic analysis techniques were used to process the collected data to assess and extract common problems, perceptions and needs of digital banking. The proposed design framework is designed based on the findings. The identified themes were used to create a prototype which was progressively developed in co-design activities and user feedback sessions. The prototype was presented to the participants for their evaluation and feedback on usability, accessibility, and user experience. These evaluations in turn led to further design improvements.
The project was distributed among team members based on the skills and workloads required during the project. Progress was tracked and discussed regularly, as were challenges and any time limits for project milestones. There was also ongoing communication with project supervisors, which kept the academic quality and work on-going relevant to the research aims.

### 3.1.7 Risk Management

Risk management was a key element of this research project, helping to make sure the activities planned for the project were completed within the time and resources available. During the course of the study, several potential risks were identified, such as recruitment difficulties, technical problems during prototype evaluation, time constraints, and user engagement difficulties. Given the age of the participants, further consideration was given to issues concerning risks related to digital literacy, communication, and participant availability. Measures to minimise disruptions were put in place at the project stage and monitored throughout the research process. The main risks that were identified and the mitigation measures taken by the research team are summarised in the following table.
Appropriate mitigation measures helped minimise the impact of these risks throughout the project.

| Risk                                          | Mitigation Strategy                                                |
| :-------------------------------------------- | :----------------------------------------------------------------- |
| Difficulty recruiting elderly participants    | Recruitment through community networks and personal referrals      |
| Limited digital experience among participants | Guided evaluation sessions and simplified instructions             |
| Technical issues during testing               | Use of prototype-based evaluation rather than live banking systems |
| Time constraints                              | Division of responsibilities among team members                    |
| Scope expansion                               | Strict alignment with research objectives                          |

### 3.1.8 Summary

This chapter introduced the specifications and wider impact of the proposed inclusive digital banking framework for elderly customers in Bangladesh. The findings from the interviews, co-design workshops and prototype evaluations were used to define the functional and non-functional requirements. The solution that has been developed has been based on the above requirements, which include the accessibility, usability, security, and user confidence.
The chapter also explored the societal, environmental, ethical and economic effects of the proposed framework. The analysis proved that enhancing the usability of digital banking for the elderly can foster financial independence, contribute to digital inclusion, lower the environmental footprint and create sustainable value for users and financial institutions. Ethical issues of privacy, security, accessibility and participant well-being were also discussed.
Lastly, the chapter discussed the project management strategy that was used during the research process, describing what was done from data collection to data analysis, prototype development to evaluation. All of these discussions set the stage for the feasibility and impact of the proposed solution and serve as the basis for discussion and conclusion in the following chapters.

---

# 4 Methodology Findings

## 4.1 Design Process and Methodology Overview

This section is based on a synthesis of the results of 31 semi-structured interviews with elderly users aged 46 to 60 and above with diverse occupational backgrounds and socio-economic groups in Bangladesh. The participants will be identified with the help of anonymized codes (P1-P31), where the numeric part of the code can be understood as the order of the interview with this person (e.g. P10 is the tenth interviewee). Our systematic thematic analysis has produced eight salient themes into two overall themes. The themes are based on the embodied experiences of the participants, and placed within the wider context of HCI scholarship on inclusive design and financial technology adoption, as well as the issue of age-related accessibility.
This study was done in two phases. During the exploratory phase, 19 elderly participants were interviewed using semi-structured interviews to gain insight into their experiences, problems, coping strategies and expectations about digital banking. The results of these interviews were used to help define the design requirements and to help develop the proposed prototype.
During the second phase the developed prototype was tested with another set of participants and a total of 31 participants participated in the study. The prototype evaluation was conducted to test the proposed design solutions for their usability, accessibility and perceived usefulness. The results from the analysis of the thematic data of the interview participants are presented in this chapter, with the results of the prototype evaluations discussed separately in the validation section.
This chapter is a synthesis of the thematic results that came from the interview phase as well as the results of the iterative prototype validation which form the empirical core of the research.

## 4.2 Preliminary Design and Model Specification

The barriers and aspirations identified in the interview phase were directly addressed in the development of the prototype. It is based on the premise that accessibility for older people is more than visually simplifying something, it is rethinking the architecture of interaction, the language, and the trust systems.

### 4.2.1 Core Design Principles

The following 4 principles guided all design decisions during the process of developing the prototype.

- **Localisation of content and culture in the first language Bengali:** All user interface text, navigation labels, user interface icons, and security information were translated into Bengali. Symbols and icons were introduced to replace the conventions of the western iconography and since the interviews revealed a symbolic alienation and a linguistic gatekeeping, the Bengali users were addressed.
- **Progressive Disclosure to reduce cognitive load:** The interface's most common functions were displayed at default more were available but not highlighted. Multi-step transaction flows were streamlined and each screen was designed only to present information for the current step of the process, thus minimizing working memory demands.
- **Forgiving interaction design:** To meet the slower transaction processing speeds and increased error rates reported by participants, multi-step transaction confirmations, extended OTP validity periods and a transaction reversal mechanism were added.
- **Trust through transparency:** Security information (e.g., "Banks do not ask for codes") was intrusive in the interface, rather than attached to external documents.

### 4.2.2 Prototype Interface

The prototype was developed as an application or mobile interface to be used on common low end Android phones that are available around Bangladesh and would work well in the absence of internet connectivity.
The home screen displays a limited collection of primary actions (Send, Receive, Bill, People, Balance Check) with large Bengali-titled icons, a large prominently displayed balance field, and a persistent security reminder. The home screen has a "Learn" (Shikhun) entry point that will take you to a guided onboarding system. The service menu maintains the same visual language, using a simple grid with no ads or promotions, and is in direct contrast to existing mobile financial services interfaces that participants said were "cluttered".

### 4.2.3 Gamification Framework

The prototype included a gamification structure that aimed to boost self-learning and involvement by the elderly users, as well as their confidence. The framework consisted of four interconnected components that identified barriers to digital banking adoption found during the interviews.
First, a Guided Onboarding and Tutorial System that introduced the banking functions gradually through step by step tutorials, instead of showing them all at once. The animated demonstrations, interface elements highlighting, confirmation indicators and Bengali voice guidance helped the users throughout the learning process. This approach helped to lower the anxiety and created familiarity with the repetition approach, tackling the concerns of the participants in the existing banking applications for not having enough direction and assistance.
Second, there is a Risk-Free Practice Mode that lets users carry out banking operations without transferring any money or recharging their mobiles, paying bills, or checking their balances, in a simulated version of the same application. The feature made it easier to experiment and less risky to take expensive risks.
Thirdly, the Digital Banking Confidence Progression Bar graphically represented the users' autonomous task completion. The progress indicator took technology-related anxiety out of the learning process, since successful completion of banking activities increased the indicator.
Lastly, an Achievement and Reward System gave positive feedback and monetary rewards for self-study of tutorials and transactions. These rewards helped to reinforce learning, motivate students and foster a sense of achievement.

## 4.3 Lived Barriers, Frictions, and Coping Practices

### 4.3.1 Physical Banking as Bodily, Temporal, and Emotional Burden

Although more and more aspects of banking are online, physical banking is still a reality to the aged. Nevertheless, it is always referred to as physically tiring, time-wasting and emotionally traumatizing. The embodied needs of the conventional banking framework displays how institutional design systematically disfavors the aging bodies, and in response make regular financial processes into survival exercises that young users may not usually interpret as such.

> "I spend a lot of time in the endless queues. Wasting a lot of time is also adding to my body pain." [P17]

The extent of time investment necessary to perform simple banking tasks turned out to be an international grievance. The difference in the waiting times by the participants highlights the erraticity and lack of reliability of physical banking infrastructure which adds the physical load with a dimension of uncertainty in time.

> "Maximum 10 hours minimum 2 hours." [P19]

This temporal inefficiency is not evenly spread in the demographics of age. The need to spend long hours in the office makes banking not a civic duty but a physical torture, especially to those who feel their strength, joint condition, and heart capacity are waning with age.

> "Standing a little is painful, and when I stand long, it is inconceivable." [P6]

The subjects pointed out that waiting is not just a nuisance but is actually discriminative, to the aging body. The layout of the banking areas makes certain implicit assumptions of able bodied individuals who can stand longer thus creating a built in environment in which anyone with limited physical capacity is systematically discriminated against. The technological and institutional infrastructures have assumptions regarding user capacities, and they can make the experiences of individuals who do not conform to the normative physical parameters invisible.

#### 4.3.1.1 Queueing as Structural Inequity

The problem of queueing was constantly posed as a structural malfunction and not as a convenient operational inconvenience. Waiting itself, with its rude order of place, taken not in minutes but number in a row among hundreds, is the lottery of banking turned into a test of patience and physical skill. This anxiety effect of this system is easily felt in the descriptions of the participants as the numerical position is not the source of information but psychological distress.

> "Occasionally I do find myself in serial 167 and I can see over 20 people or even 50 percent ahead of me. That's panic." [P11]

The psychological aspect of queueing is not only limited to physical inconvenience, but also to the sense of helplessness and time robbery. The feeling of time being stolen by the inefficient systems, a time which can not be taken back or turned to some other direction, adds to the sense of institutional disrespect towards the elderly citizens.

> "Without paying to brokers, I will have to wait hours and hours alone." [P3]

The participants P4 through P10 and P12, P14 and P18 echoed the same experience and stated that longer queues disfavored older adults with a limited stamina disproportionately. In heuristic terms, this is to the detriment of efficiency of use, flexibility and fair access, which are inclusive design core tenets. This complaint is so universal among our participants that it is tempting to think that queueing is not a singular implementation failure, but a philosophy of design, with the concept of user dignity taking second place to operational efficiency. The social hierarchies are coded in the institutional infrastructures as a result of operations being put in place by apparently neutral steps.

#### 4.3.1.2 Brokers, Informality, and Exploitation

One of the repeated coping strategies was the use of brokers, which is an informal interface that brings about both financial leakage and mental uneasiness. The development of the broker networks as the mediators between the elderly users and the formal banking infrastructure is an indication of a market solution to institutional failure, but this solution creates a type of exploitation and vulnerability on its own. The monetary cost of employing brokers further increases the already retrogressive nature of time costs to form a pay-to-play system, with those who can afford it being able to avoid lines and those who cannot afford it being forced to neglect the comfort of their bodies.

> "The cost to the brokers is high and this makes me lose economically." [P19]

The broker system never only extracts funds but also adds more layers of risks such as corruption and institutional complicity. The penetration of the informal intermediaries into the formal banking areas indicates either toleration or close cooperation by the institutions, which puts the areas of accountability and control in question.

> "There are brokers who are associated with corrupted individuals." [P2]

The uncontrolled digitization will only replace exclusion instead of eradicating it. The continued presence of informal intermediaries in so-called modernising banking systems demonstrates the possibility of technological solutions to be co-present with, and even continue to support, extractive informal economies. Technological progress has the capacity to re-arrange the preexisting power imbalances and not actually democratize access. Institutional loopholes provide platforms upon which informal market participants become the required yet undesirable solutions.

### 4.3.2 Digital Banking: The Convenience Tangled in Cognitive Load

Although digital banking saves a lot of physical load, it poses some new cognitive and perceptual load particularly to the elderly users. This is because the tension between bodily convenience and cognitive complexity became a major conflict when the participants encountered digital finance. Although mobile banking apps lead to the removal of physical presence, they also exert a working memory, visual processing, and decision-making capacity load that the elderly cannot handle.

> "The interface of bKash is overwhelming with so many options." [P17]

The increase in features and capabilities in mobile financial service applications is like a paradox of choice that compromises usability. Although what might be desirable on a design basis, in terms of functionality, would seem to be extensive, it would create cognitive overhead that especially overloads users with diminishing information processing ability. The fear of the complexity of navigation implies that interface design has not taken into consideration the possibility of heterogeneous users.

> "Too many choices... we are likely to make errors." [P11]

This cognitive load is stated by the users as the inability to find something over the impossible to overwhelm them, showing the way too much functionality hides the simple features necessary.

> "The writing feels like a lot. It feels like what I am looking for isn't there, but everything else is there." [P10]

This cognitive load is complicated by the multi-step character of common transactions which spread information over temporal series that overload working memory. Each added screen or input field is more than an incremental addition to the interface, it is also a multiplicative increase in mental load, since users need to remember situational awareness when looking at interface states.

> "It is so cumbersome, sending money, one goes to so many places, it makes it complicated." [P13]

Interfaces design contravene the recognition-over-recall heuristics because they require the user to memorise information on several screens instead of displaying it on the monitor at all times. The aged due to the complexities cause anxieties and avoidance of the complexities among the aging population as they are faced with deteriorating information processing abilities. The inability of numerous applications to comply with minimal requirements of accessibility highlights the prevalence of this issue even after knowing the implications theoretically.

#### 4.3.2.1 Fears of Irreversibility and Error

The most pervasive panic among the participants was the inability to undo digital errors. Digital transactions have an algorithmic finality that does not tolerate human fallibility in the way that physical banking does, as the errors can certainly be identified and fixed with the help of human mediation. The unforgivable accuracy that was a feature of digital systems creates a feeling of deep anxiety in the minds of users who are aware of their vulnerability to make a mistake.

> "I sent 20000tk to a stranger somewhere and did not get it back." [P17]

The magnitude of the possible loss in small errors in the input will show how digital interfaces turn even minor typing errors into economic disasters. The presence or absence of one digit can cause orders of magnitude differences in the amount of transactions, but safeguards are almost never designed according to such a threat.

> "A digit became extra, 1 lakh 40 thousand went away." [P11]

On top of mechanical errors, there were security breaches due to the lack of understanding of the protocols to be followed during authentication. The exposure of credentials (which in most cases were not viewed by the users as a threat in the digital security model) led to irreversible financial damages which would have been avoided with the help of institutional controls in traditional banking models.

> "And as soon as I gave out my password... 5000tk appeared... I could never get back the money." [P19]

The perception of risk and the absence of trust typify the adoption of fintech among the elderly population. Security anxiety and inability to understand is directly reflected in the experience of loss of money. Seniors have a hard time adjusting their faith to the automated financial applications. Even with educational solutions, basic interface design can not be made up. Even good strategies of engagement may be eroded by fear of making irreversible mistakes.

#### 4.3.2.2 Interface Inaccessibility and Visual Decline

Visual disabilities were an issue of general concern that rendered even common digital experiences physical pain. The sheer physiological effects of continued use of ill-conceived interfaces of headaches, eye strain, and visual fatigue are embodied exclusion that stops further use no matter how good it is.

> "The fonts on the mobile screens are very small hence causing an acute headache." [P18]

The issue with default text size perhaps came out as the most fundamental accessibility failure in terms of readability. The fact that this complaint has been universal implies that there is systematic ineffectiveness in putting in place established guidelines of accessibility.

> "Letters are small. Hard to read." [P19]

The unequal scaling of specific information usually of monetary values and the retention of small fonts in key interface text proves the existence of a pecking order of perceived value that does not appreciate the role of instructional and navigation text in being equally readable to get tasks accomplished successfully.

> "The amount of money is small compared to most of the text." [P2]

The embodied exclusion through physiological effects of prolonged use of ill-designed interfaces, such as headaches, eye fatigue, and visual fatigue, makes it impossible to keep on using a device despite its functionality. The smallest failure on accessibility turned out to be the ineffectiveness of default text sizing. The selective expansion of some information shows a priority of supposed significance which does not acknowledge how didactic and navigative writing should be as readable as it is to accomplish tasks successfully. Auditory and tactile aids have not been implemented in many ways despite the fact that they are recorded to be needed. The concretely understood systematic gaps in inclusion are present in the reports on physical pain and reading difficulty. Even new assistive technologies can not properly serve the elderly users lacking specific design consideration. The solutions reported in the study of accessibility are not used extensively in mainstream digital banking applications that are used in settings such as Bangladesh.

### 4.3.3 Symbolic Alienation, Cultural Mismatch, and Language

The subjects were highly critical of Westernized symbols and English-heavy interfaces, and shared their experiences of cultural alienation that had not been limited to language preference issues but also involved fundamental issues of belonging and recognition. This introduction of interface metaphors that are based in the Western contexts introduces a further mental load to users whose cultural referencing points are not presumed by the system designers.

> "It would be more convenient in case the symbols were more like signs employed by the Bengali people." [P13]

The need to use culturally appropriate authentication mechanisms is not just in the interface language but the whole symbolic language that users use with financial systems.

> "There must be two languages, one English and another language Bengali. As our country is Bengali speaking, and a large percentage of them read in the Bengali language, and the educated ones tend to go directly to the English format." [P14]

The enforcement of English as an element of vital security and identification is a linguistic gatekeeping process which reduces language competence to a condition of financial inclusion. This criterion bears an implication of excluding users with complete financial competency but who do not speak English.

> "The password and bKash number all are to be in Bengali." [P19]

Clarity, familiarity with culture and self-sufficiency are essential in elderly user acceptance. The interface design is a coded form of cultural beliefs that favor a group of users to the disadvantage of others. The patterns of symbolic interpretation and meaning-making are culturally specific and also influence user experience on very deep levels. Scalable models of low-literate, semiliterate, and cross-lingual segments of the population are not deployed as yet, which implies a continued lack of links between the inclusive design theory and practice.

### 4.3.4 Trust, Security Anxiety and Fear of Fraud

The fear of fraud was widespread, influenced by the loss of personal experience and influencing the perception of digital environments as unpredictable and threatening to the media. The background radiation of anxiety caused by the accrued weight of phishing attacks, spam emails, and fraud cases reported, tints all online financial transactions.

> "I fell into a number of phishing sites believing it was a real site." [P1]

The racialized and geographically distant threat actors frequently featured in the explanatory models of participants of digital fraud would be seen as a way that media discourses and folk theories would bridge knowledge gaps left by insufficient security education. Although empirically dubious, these attributions provide an insight into the feeling of vulnerability and lack of understanding how digital security is perceived by elderly users.

> "I do not feel secure when I hear about fraud." [P15]
> "Software created by African people is used to make complications." [P13]

The technical advancedness of phishing attacks, namely, their capability of imitating the official communications with a hundred percent accuracy, discredits the user ability to recognize legitimate and fraudulent messages in accordance with the traditional verification heuristic patterns.

> "Messages are the exact copying of the dedicated number of my bank." [P2]

Technical security is not perceived security. The disconnect between perceived security and objective security taken is still quite large. The interface design should be proactive in developing trust instead of expecting it to be created by technical soundness. The approaches to education have to be maintained and based on the context instead of the single interventions to respond to the extent of anxiety that participants share.

> "I cannot say that I know how to trust or distrust them. My credibility lies with the individual that assisted me." [P3]

This definition exposes the mediating effect of interpersonal relationships as sources of trust in digital systems instead of coming up through technical properties.

## 4.4 Aspirations and Design Expectations for Inclusive Digital Banking

### 4.4.1 Desire for Simplification Through Personalization

Among the suggestions made many times there was the idea of customizable interfaces as a remedy to excessive complexity, coupled with a vision of an adaptive system, in which individual differences in ability, preference and usage modes can be accommodated. The need to have personalization is based on the realization that there are no universal interface settings that can adequately support every user, especially in the heterogeneous aging population.

> "Whatever I need, I should give the tick mark... the rest will be on another page." [P11]

The suggestion of foregrounding common features in addition to preserving full functionality is a complex interpretation of the hierarchical information architecture that is simple to use and still provides expertise. This indication shows that subjects have clear-stated mental models of what they would desire an interface to have, even though they have difficulty with the existing ones.

> "I want the easy way. In case of an easy to use new technology, then I will apply it. However, I do not wish to enter into complexity." [P9]
> "Customization, having frequently used features on top." [P12]

The pressure to have interface configuration to be controlled by the user indicates the advanced knowledge on how personalisation can be used to ensure that the individual variation is accommodated and at the same time ensure system uniformity. Inclusive UX models promote adaptable interfaces to the heterogeneous aging audience. Participatory design has theoretical bases in the realization that a single interface configuration cannot be effective with all users. Cognitive and perceptual accommodations are in line with the intuition of the participants concerning effective interface adaptation. Gamified features and custom training strategies may lead to personalization by offering interesting ways in which users can customize interfaces to suit personal requirements.

#### 4.4.1.1 Senior Mode as a Parallel Interface

The existence of a special senior mode was supported by almost all respondents, and the general view of the desirability of interface variants based on age and responding to age-related changes without stigmatizing or infantilizing older people was strongly congruent. The demand of parallel interfaces attempts to criticize implicitly the approaches to universal design that seek to satisfy the needs of all users with one and the same optimized setup.

> "The interface should be easier for senior people." [P2]

A strong agreement emerged in approval of the senior mode with nearly all participants showing strong support to the idea of age-specific variants of interfaces.

> "There would be a nice senior citizen setting." [P10]

The analogy that is made between simple design and high use is based on the understanding that the present day complexity is a hands-on blocking factor to adoption as opposed to a simply annoying factor to existing users. This point of observation implies that interface inaccessibility is a major obstacle to financial inclusion among the elderly groups.

> "Easy to use seniors friendly software would make them more used." [P13]

The association made between reduced design and higher adoption acknowledges that the existing complexity is dynamically getting in the way of engagement, not just annoying the existing users.

> "I prefer help. I know my limitations. I could not handle anything in the banking department without assistance." [P4]

Such recognition of the dependency is not only practical evaluation of the ability but also emotive aspects of ostracism.

> "It is due to this shift that I feel dependent. Numerous services are now digital in nature." [P1]

Accessibility studies provide design bifurcation models to propose that parallel interfaces will be more effective with diverse user populations than general solutions. The failures of the accessibility guidelines offer empirical support to the demands of special senior interfaces. Available banking systems and assistive technologies provide tangible patterns of design, which might be used in the implementation of senior mode, but their lack of implementation indicates institutional resistance or resource limitations. Gamified training is capable of increasing the perceived usefulness and ease-of-use in older adults, which means that the engagement mechanisms used in senior modes may be tailored to the requirements of an aging user.

### 4.4.2 Voice, Guidance and Human-in-the-Loop Systems

The participants continually required auditory support and human verification, expressing a dream of hybrid systems inside which computational effectiveness and human reassurance and context intelligence could be linked. The voice interaction preference is indicative of the constraints of visual interfaces in the aging vision and of the natural language as an interaction media.

> "In case a person calls and tells me what to do using the voice..." [P19]

The focus on human voice in particular, and not the use of synthetic speech, demonstrates the fact that even in digital terms trust and credibility are also deeply interpersonal. The authority and weight of human confirmation is unreplicated to any extent by the algorithmic processes, no matter how reliable they are.

> "It is more weighty when a human voice confirms that it is." [P2]

It is the focus on human voice in particular that goes beyond the desire to favor auditory feedback to the questions of the authority, authenticity and trustworthiness in technological mediation.

> "I think when a human voice confirms something it holds more weight. If a human is involved in one way or the other, I will feel quite confident." [P16]

Assistive technology focuses on auditory feedback and hybrid human-AI systems as important elements of accessible interface design. The voice interaction should be well-crafted to support linguistic diversity and accent diversity that occur in the Global South. Tactile and auditory feedback will assist the independence of the users with dissipating visual skills. Digital literacy is enhanced through human interaction and confidence is created among the elderly users. Human intervention empowerment is one of the enablers of digital inclusion.

#### 4.4.2.1 Long Timeouts and Recovery of Errors

Older users demanded longer OTP time, and reversible transactions, and a vision of more forgiving systems that recognize the fallibility of man and slowing processing. The time limitation of the existing security systems, in which average users are aimed, are systematically disadvantageous to the individuals whose interaction rate may not conform to the normative presumptions.

> "OTP has a minute to go, time to be increased." [P2]

The time limitations of existing security do so in a systematic way, favoring individuals who do not interact at the normal rate within the systems.

> "Those who are a bit elderly, it takes them some time to see or think. If the OTP duration is slightly longer, it is better." [P8]

The need to be able to reverse transactions is one of the core problems of digital banking, which postulates an opportunity period during which users would be able to notice and rectify the mistakes before they were irreversible. This is an indication of profound knowledge of the existing gap between system responsiveness and human deliberation.

> "It must have a correctional mechanism of the amount of money." [P2]

The systemic need of item reversibility poses a challenge to the digital banking feature of immediate completion, which implies instead a grace period, during which the user could have detected the mistakes and corrected them before they became irreversible. This recommendation is an in depth understanding of the disconnection between responsiveness of the systems and human consideration.

> "It should be provided that there is an option of a Reverse Transaction where one can send money and at a certain time frame the person has the option to call the money back in case he sent the money accidentally." [P7]

The heuristic rules of error avoidance and graceful recovery are that it is the duty of the system to provide various user capabilities and processing speeds. With the help of unambiguous support to the error prevention and recovery strategies, design rules, which are based on the evidence-based design, which include readability, simplicity, and consistency. The inclusive UX theory assists in incorporating the frameworks to learn how the concept of error tolerance is to be applied to the system not as an optionalized feature.

### 4.4.3 Trustworthiness in transparency and responsiveness

Respondents insisted on the fact that the helplines should be responsive and meaningful, demonstrating that not only interface design but also support infrastructure and communication specifications are constrained to accessibility of the institutions. Failure to use the helplines to provide quality support maintains the interface usability problems because it eliminates safety nets in case the users have some trouble or the other.

#### 4.4.3.1 Infrastructure and Communication failure in institutions

The absence of adequate customer support systems turned out to be a significant obstacle to further adoption of digital banking. Even the recoverable errors turn into sources of frustration and lack of trust as long as the unresponsive help desks receive the users when they are encountering problems.

> "Helpline services are unresponsive." [P1]

This breakdown of institutional capability to provide easy human assistance is a cascading effect of the minor technical complications into large impediments particularly on those who do not have other facilities or technical capability to manage their own complications.

#### 4.4.3.2 Disclosure Under the Consequences of Transactions

The necessity to clarify the consequences of communication is oriented on the fact that the majority of errors are caused by ignorance about what actions should be followed to provide what results. Most of the errors experienced by the participants would be avoided through open reporting of the effects of transactions.

> "If written clearly what will happen... error will be minus." [P11]

Users articulated a need of systems that can make the consequences visible before performing any action that could not be reversed which means that prevention of errors could not be done solely by delivery of warning messages but giving complete description of cause and effect relationship between what could be done by interface users and the cost of the action to the organization.

#### 4.4.3.3 Pathways To Digital Trust with Humans

Digital inclusions are grounded on human intervention. Inter-generational training increases self-confidence and proficiency and such that the human support systems ought to be authentic and responsive as well as being at the nominal level. Games as learning can contribute to crisis preparedness that implies that the individual must build trust with other people not just through responding to the crisis but also through teaching and training abilities. The trust is brought about by harmonized governance, institutional accountability, and not by technical qualities.

### 4.4.4 The broader financial ecosystems to Humane Financial Ecosystems

Other respondents envisioned AI, biometrics, and emotion-sensitive systems being eulogized in the future as further enhancements to the existing banking services to enhance comprehensive support in making financial decisions and in security. These imaginative conceptions liberate the level of insecurity of the former users and their imaginative power to conceive technology solutions according to their perceived needs.

#### 4.4.4.1 Biometric Authentication and Embodied security

The suggested authentication systems incorporated the solutions related to the verification of physiological indicators, i.e. biometrics as an alternative to the conventional password systems proposed by the participants. These suggestions are reflective of great fear when it comes to vulnerability in online transactions.

> "Nothing can deceive me when it scans my pulse so much." [P19]

These conjectures show a lot of insecurity among the users who are not secure in the electronic cash systems. Fears of identity theft and unauthorized entry can be credited to the need to possess biometric authentication that is beyond the normal authentication.

#### 4.4.4.2 Autonomy, Dignity and Inter-generational Connection

Besides the security matter, the participants also expressed their expectations of having digital systems that would make it possible to have their own financial agency and transact money directly to strengthen family bonds.

> "I would have loved to be in a position whereby I can send money to my grandchildren. That would make me feel proud." [P4]

This requirement of an independent transactional ability is reflective of the emotional costs of digital inability which are not restricted to the inconveniences that confront inability to do things in an effective manner, but also includes a sense of low self-worth and social rejection.

#### 4.4.4.3 Implications of Ethics and design

Although these ideas are hypothetical, they signify a great deal of insecurity and a sense of need to feel valuable, which is relevant to the theme of ethical AI and affective computing in HCI nowadays. To get such visions to occur, much development of context aware and emotionally intelligent systems is required. The broader deliberation of moral issues and user-friendly solutions can provide models to evaluate the honesty of biometric and affective technologies to provide users with additional control or open a novel security paradigm and a new surveillance and control level. These utopian visions define that researchers and designers must leave the space of incremental improvements to the current systems and truly transformative strategies, where human dignity, cultural specificity, and embodied experience has become the key factor in designing digital financial infrastructures.

#### 4.4.4.4 Intersectional Digital Financial Inclusion Blockers

Technical design is only part of the architectural barriers to going digital and includes more of the general trends of social exclusion. Gender, education, and early life experiences play a great role in determining the capabilities of the people to become a part of the digital financial systems.

> "Many women like me had not got that chance" [P5]

The reflection illuminates the fact that historical disparities in education access create multiplied disadvantages in cyber space, where design of the system assumes that there are already existing literacies, which were systematically concealed to entire segments of demographic groups. The themes presented above indicate the problems and expectations of the participants in the field of digital banking, but the next step in the study was to take these themes and turn them into a practical design solution. Themes emerging from the interviews with participants directly fed into the design and development of the proposed prototype. These reoccurring issues with interface complexity, visual accessibility, language barriers, trust, error recovery and reliance on external support were translated to actual design elements of simplified navigation, customization that suits senior needs, enhanced visual clarity, voice-guided assistance and improved confirmation mechanisms. After prototype development, participants were asked to engage with the proposed design to determine if the design interventions were effective in solving the challenges found during the interview phase. The validation process thus provided a chance to explore how applicable the results of the study were and how the results were perceived by the users.

### 4.4.5 Iterative Prototype Validation and User-Centered Design Refinement

The prototype development process adopted an iterative design approach in which initial prototype ideas were tested with elderly users, changes were systematically made based on the feedback received and further prototypes were tested with participants. By doing so, the process was based on user feedback and not designer assumption. The last prototype version presented to participants who presented some refinements based on the previous evaluation rounds, thus showing the viability of participatory design processes for the design of banking interfaces.

#### 4.4.5.1 Positive Reception and Design Validation

The participants were positive about the improved prototype design and supported the idea that it can be achieved by reducing the complexity. The positive feedback received in several iterations indicated that the design approach of keeping the essential function of the product to the minimum, and removing all superfluous features was consistent with the needs and preferences of the elderly user.

> "I am satisfied with the new design. It is very easy to use." [P22]
> "The icons and the text are big enough now, which makes everything very easy to read and use without any strain." [P11]

A strong appreciation of simple design components throughout the cycles confirms the philosophy of decomposing interface complexity into separate senior designs.

#### 4.4.5.2 Persistent Accessibility Challenges

Although prototype testing was iterative, the prototype went through several rounds of revisions, with accessibility issues continually emerging and needing attention. Participants pointed out problems to be solved involving text rendering and language localization.

> "I am having a problem reading a lot of lines written in Bangla. Fonts appear too small for me." [P23]

The need for a suitable visual representation of Bangla text is a specific challenge in the Bangladeshi context because the requirements for rendering Bangla text are vastly different from Latin alphabets. This discovery suggests that accessibility enhancement should be culturally and linguistically tailored.

#### 4.4.5.3 Navigation and Interaction Refinement

Through iterative testing there were still further opportunities to enhance the interaction model itself notwithstanding its visual design. The refined interface seemed less daunting to participants, but further simplifications in the way to move from one interface state to another might be possible.

> "The interface is simple but it involves repeated tapping on the screen. Additionally, the number of new pages coming on tap is very high." [P21]

This feedback indicates the need for additional visual and interaction flow simplification. Less sequential steps and page changes would further lower cognitive load and interaction complexities. The comment on too many taps emphasizes that motor control issues related to aging (such as tremors, loss of precision, or hand fatigue) can impair, despite all the other factors, interfaces that are otherwise accessible.

#### 4.4.5.4 Voice Guidance as Critical Accessibility Feature

For all iterations, the need for auditory support measures, especially voice guidance with visual navigation, was repeatedly pointed out. This consistent advice across several different prototype versions suggests it's a necessity of accessibility.

> "Adding voice assistance spoken guidance could dramatically improve accessibility for elderly users. Even simple spoken guidance could dramatically improve accessibility for elderly users." [P27]
> "If someone speaks from the phone and gives me voice instructions I think I will be able to do everything on my own." [P22]

Indeed, the strong demand for voice feedback seems to be a combination of both physiological and cognitive factors associated with declining visual acuity, difficulty maintaining visual attention and benefits of multimodal feedback. Voice guidance would also serve as an alternative channel of information that could be helpful for users with visual impairments, and would additionally help to provide reassurance through interactions which were comparable to human interaction and participants identified as being important for establishing trust.

#### 4.4.5.5 User Onboarding and Contextual Support

Simple interfaces were developed through iterative prototype testing, which showed that simple interface onboarding and contextual guidance is still needed. As the interface evolved over refinement cycles, participants still pointed out missing aspects for new users to understand the available functions.

> "Lack of user manual on opening the app for the first time." [P24]

The need to simplify the interface over multiple iterations has been consistent, and this is not enough without support, such as documentation and workflow steps. This could be overcome through interactive tutorials or providing contextual help systems and gradually showing the functionality in the order that was most useful to the participants, while preserving the visual simplicity that was appreciated.

#### 4.4.5.6 Gamification and Participant Engagement

The feedback that the participants gave about the gamified model was very positive. Tutorial rewards and the ability to practice without risk, have the confidence tracked visible and receive immediate voice feedback that validated successful actions, were particularly appreciated by users. The value of using simple animated visuals to enhance understanding and less cognitive effort was also noted.

> "The combination of Tutorial Mode, Practice Mode, and voice guidance. Learning a task, practicing it safely, and receiving audio feedback creates a more supportive banking experience." [P7]

The gamification framework has solved the functional and emotional challenges associated with digital banking adoption, which included learning support, risk-free practice, visualization of progress and rewards. The results are consistent with those found by Chauhan et al, that gamification can enhance technology adoption when game elements are used to assist in meaningful learning goals [47].

#### 4.4.5.7 Iterative Design Validation as Pathway to Accessibility

The multi-cycle prototype validation process shows that design changes based on the embodied experiences of elderly users can be effective, through iterative refinement. The overlap of user feedback across iterations and evidence-based inclusive design principles indicates possible implementation routes. Some accessibility barriers did not get resolved during multiple refinement cycles, and included typography and voice assistance, suggesting that some of these issues will need to be addressed at the architectural level, not just at the interface. This reinforces the need to design with the needs of elderly users in mind early in architectural design, rather than trying to fix them at the prototype stage.

---

# 5 Discussion

## 5.1 Performance Evaluation

After conducting the interviews, the prototype was tested multiple times with 31 participants during several iterations. Participants were from a wide variety of age, occupation and educational level. Real world settings were used for evaluations to guarantee ecological validity.
The usability was evaluated by observing the tasks participants performed, using think-aloud protocols and providing structured feedback during the completion of typical banking tasks. Refining the navigation, typography, onboarding and interaction design features were the emphasis of iterative adjustments. Finally, 90% of the participants were satisfied with the simplified design.
The gamification framework of guided onboarding, practice mode, confidence tracking and rewards were shown to lower the anxiety and boost the confidence of completing banking-related tasks without assistance. Voice guidance was always mentioned as a key accessibility element, and was seen as essential for independent use.

## 5.2 Analysis of Design Solutions

The design solutions that were used within the prototype were directly taken from the barriers identified during the interview phase and were iteratively evaluated.
The Bengali-first localization plan was one of the most well-received interventions. Bengali navigation labels, instructions and icons were well received by participants because of their cultural familiarity and ease of understanding of the function of the interface. It implies that language and cultural adaptation is an important issue to address for making the services accessible to older users in Bangladesh.
Progressive disclosure design approach was also found to be effective. The interface was streamlined and made more user-friendly with its focus on commonly used banking tasks and the removal of unnecessary visual clutter. Participants found that the home screen was easier to read and tasks were easier to complete due to the simplicity and size of the interface elements.
Another important design contribution was the implementation of forgiving interaction mechanisms. The practice mode with zero risk, transaction reversion options, long OTP validity and confirmations eliminated some anxieties while making transactions. These were some of the biggest challenges found in the interviews that were overcome through these features: fear of irreversible financial mistakes. Furthermore, contextual security guidance boosted user confidence by offering reassurance for critical banking activities. All these interventions helped to create a more accessible, understandable, and trusted digital banking experience.

## 5.3 Statistical Analysis

Overall, 90% of the participants were satisfied with the simplified design after multiple iterations.
The interviews also revealed that external support is still high, with many respondents saying they are supported by their family members or agents/peers in accessing digital banking. A good reminder that accessibility should be considered when designing things.

## 5.4 Comparisons and Relationships

The findings are consistent with other studies that have been conducted on simplicity, readability, and usability for older people. The present study, however, highlights the nature of these difficulties in the context of Bangladesh, where language is preferred, the devices have limited capabilities and intermediaries are used.
The findings of this study are in accordance with previous studies demonstrating enhanced technology use and engagement with older adults for the positive effects of gamification. Trust was also shown to be dependent on technical security, but also on transparency, guidance and error recovery mechanisms like this.

## 5.5 Final Design Adjustments

The final prototype resulted from multiple iterations and feedback from participants. During the evaluation process, a number of features were always significant, which resulted in some specific typography, navigation, onboarding, accessibility, and gamification tweaks.
Making typographical improvements to increase the size of Bangla text and space between text for easy readability. Navigation flows reduced wherever possible to minimise effort of interaction and cognitive load. These changes simplified the use and retention of the essential banking functions of the application. The changes improved the usability of the application, but did not affect its core banking functions.
Voice guidance was not added as an optional addition, but as a built-in accessibility feature. Incorporation of Bengali voice instructions into onboarding and other critical transactional functions to cater for users who are visually challenged and enhance the self-service for them. Guided tutorials and contextual help were also added to facilitate onboarding support for new users, allowing them to learn banking functions in a step-by-step manner.
The gamification framework was further developed to make sure that all its elements enable a meaningful learning outcome. The Guided Onboarding System, Practice Mode, Confidence Progression Bar and Achievement System remained as they received positive feedback when they were evaluated. Of these, the risk free practice environment proved to be the most successful method of reducing anxiety and user confidence. These last refinements will enhance the design's ability to meet the needs of digital banking elderly users in terms of practicality, emotional satisfaction, and accessibility.

## 5.6 Discussion

To study accessibility of digital banking service for elderly users in Bangladesh, this research explored five research objectives (RO1, RO2, RO3, RO4 and RO5) using 31 semi-structured interviews and iterative prototype validation. The results show that the problems with using digital banking are not individual failures of the user, but systemic failures in the design, institutional support, and policy of digital banking, which is consistent with and builds upon previous digital inclusion research.

### 5.6.1 Addressing the Accessibility Gap in Global South Contexts

The literature search also revealed that currently most work on accessibility focuses on high income contexts. Some design guidelines that focus on readability, simplicity, and consistency were provided by Hernandez et al. [2] and Alsswey et al. [21] but these studies are largely based on western contexts. This study addresses a critical research gap by documenting barriers specific to Bangladesh embodied/physical barriers (such as long waiting times, exploitation by brokers, physical discomfort from standing), cognitive barriers (such as complexity of user interface, information overload), emotional barriers (such as trust anxiety, fear of irreversibility), and structural barriers (such as language requirements, cultural mismatch).
The results build upon the previous work of Alsswey et al. [21] and Ilyas et al. [35] in culturally adaptive design by confirming that barriers are not spread randomly across the population but systematically affect populations already disenfranchised by digital literacy, age, gender, and education. The findings from the research support the findings of Miller et al. [4] and Yaldaie [27] that participatory design techniques, such as intergenerational learning and user-centered design, can be used to enhance the user experience for elderly users of financial services, with 9 out of 10 users satisfied with the prototype's simplified design after multiple iterations.

### 5.6.2 Trust and Human Mediation as Accessibility Infrastructure

One of the key theoretical contributions is the difference between security and trust in digital banking. The participants were not asking for higher levels of technical security measures; they wanted to know that security was happening and that they could trust their own human security with 'human agents', voice confirmation, and transparency. This is an epistemological issue as in face-to-face banking, elderly users depend on their own use of a digital banking system to confirm its integrity, but they are unable to do so in this case.
This discovery is related to recent research on assistive technology and affective computing. In accessible interface design, human intervention and emotional support have been documented by Emmanuel et al. [31] and Cheng et al. [26] but it is not widely used. The term 'assumption', when it comes to elderly users preferring automation, is misleading as frequent requests for confirmation by participants contradict this notion; trust is found to be deeply interpersonal and not technical.
The examples that participants gave of phishing attacks and fraud cases they had encountered are not unusual nor extreme examples, but architectural failures in the distinction between legitimate and fraudulent communications. Now when the participants report messages "exactly copying the dedicated number of my bank", they are indicating a structural flaw in the authentication model. This builds on the work of Kim et al. [3] and of Ahmed [40] for AI solutions for elderly users, and shows that no technical solutions have been found without holding institutional accountability. What is required is a shift from the security-centric design, or technical verification, to the authenticity-centric design, or verifiable institutional authority through the human-in-the-loop systems, voice guidance, and transparency regarding transactions.

### 5.6.3 Language, Culture, and Symbolic Gatekeeping

Research on resistance to English dominant interfaces and western iconography demonstrates the cultural hierarchies and gatekeeping mechanisms embedded within an interface. Though Bangla language is an option for passwords in some applications, the need to enter them in English suggests institutional choices, not technical limitations. This is an extension of the focus of Alsswey et al. [21] and Ilyas et al. [35] on culturally adaptive design, as it shows that cultural exclusion is not only through language but also through issues of belonging and cultural recognition.

> "Symbols were more like signs that Bengali people use" [P13]

This implies that the cultural context needs to be reconsidered in the design of the systems, in their architecture, by design, not added on later. The fact that English-only, or mixed-language, requirements remain in security-critical functions suggests that elderly Bengali-speakers are not seen as legitimate primary users; this is a policy decision based on who 'normal' users are.

### 5.6.4 Embodied Experience and the Physical-Digital Accessibility Paradox

One key finding is that transitioning from physical to digital banking can help to "reconstitute" and not solve exclusion. Physical banking barriers (bodily pain due to queues, broker exploitation and temporal burden) are well documented barriers to access. However, digital banking doesn't eliminate them, it takes the place of another barrier, one that sits in the mind.
The convenience/complex cognition contrast reveals an artificial binary of technology adoption stories. Rather than being technologically averse or conservative due to their generation, elderly users are not, but digital systems require other forms of cognitive labour from older users memory, visual processing, decision-making speed that they are less capable of making easily. People with vision and attention challenges, processing and fear-based decision making problems are not just given an optional upgrade to simplified interfaces to participate in finances, they need it.
This results in a new perspective of accessibility as an ecosystem characteristic and not just a characteristic of one single artifact, but a characteristic of user and system, and institutions. No matter how user-friendly the digital banking application is, it is not easily accessible if they lack responsive helplines, proper onboarding and institutional capabilities to support other authentication methods. Conversely, moderately complex systems are accessible when they are accompanied by complete support structures in which human verification, extended timeouts and transaction information is explicit. It transcends the artifact-centred approach of inclusive design and extends beyond a systemic approach which engages design, institutional support and policy.

### 5.6.5 Intersectionality and Compound Disadvantage

How exclusion works through overlapping systems of documentation of gender, education and early-life experience as shaping experiences in digital banking demonstrates the nature of exclusion.

> "Many women like me were never given the chance to learn" [P5]

This serves as a reminder of the longstanding disparities in educational opportunities that can lead to long-term disadvantages for women over time. The barriers an older woman, with low formal education, who prefers the Bengali language, has had little prior experience with technology, and who has been dependent on family income, are qualitatively different from those of an older man with university education and 20 years of experience with technology.
This discovery is in line with intersectional digital inclusion thinking that sees digital marginalization as a phenomenon that involves multiple and overlapping systems of marginalisation. Inclusive design interventions need to (1) avoid making assumptions about base level literacies; (2) recognise that 'universal' design often reflects majority group assumptions; (3) put the voices of multiply-marginalised users at the heart of the design; and (4) tackle institutional and policy barriers as well as interface design. It is important to note that design-level interventions, as emphasized in current literature [21, 26, 35] can not be the sole solution for meaningful inclusion without addressing system inequities in education, language, and institutional access.

### 5.6.6 Gamification as Engagement and Confidence-Building Mechanism

The prototype incorporated gamification by creating guided tutorials, a risk-free practice mode, tracking of confidence progress and rewards for achievements. This process directly answered a group of factors that were identified as being important for elderly users: emotional reassurance, visible progress indicators, in addition to functional capability. Most importantly, with the irreversibility of digital banking and seniors' concern about making costly errors with money, there is anxiety that can prevent them from trying independently. Gamification helps tackle this with tutorial learning and risk-free practice modes which remove the financial stakes from learning, allowing users to develop skills and confidence in the same subjects without risk to their finances.
Further research [5, 6, 7, 47] showed that gamification features can greatly improve user engagement, perceived enjoyment, and ease of use among the elderly. Chauhan et al. [47] specifically reported on the benefits of game-based learning on cyber trust and scam awareness in vulnerable groups. Critically, these benefits come when game techniques and functions support real goals of learning, not just as a fancy surface coat as supported in this research by participant feedback.
Overall, the gamification framework was well-received, and participants found the tutorial rewards to be encouraging of participation, the practice mode helpful in decreasing the risk of making mistakes, and the confidence progression indicators to be useful in visually lowering the anxiety of making mistakes. Voice confirmation and animated graphics helped to enhance understanding and reinforcement, particularly with first time users. The gamified design was well received, with 9 out of 10 participants stating that they were satisfied with it, and showing a considerable willingness to make transactions on their own.
These findings are supported by real-world impact data from the banks who introduced and implemented gamified systems where within the next few months, the number of daily customers grew significantly, and the engagement in payment, savings and education categories was significant. This research shows that a psychological design approach based on user needs (not just superficial engagement tactics) can positively impact the adoption of technology among the elderly.

### 5.6.7 Iterative Validation and Architectural Requirements

The multi-cycle prototype validation validates that participatory design principles (as mentioned throughout the literature [21, 4, 26]) can be put into practice in regulated banking environments. 90% participants were satisfied with the simplified design, specific feedback led to refining the navigation flows, audio design and onboarding mechanisms. The overlap of these user preferences with accessible design principles from evidence-based design (simplification through personalisation, senior mode, voice guidance, extended timeouts, transaction reversibility and cultural localisation) confirms design patterns found earlier.
However, some obstacles, such as Bangla typography and voice assistance, do not seem to be easily overcome with interface refinement alone, and exist for a long period throughout all of the iterations. These "hard problems" necessitate basic architectural decisions. This supports the results of Ilyas et al. [35] and Ahmed [40] which indicated that accessibility or scalability issues have to be considered from the beginning of system development, not as an afterthought in interface design.
The successful refinement process models a repeatable approach to the evaluation of design interventions with elderly people in regulated industries, that is missing in the participative design implementation reported in the HCI literature.

### 5.6.8 Limitations

The sample includes 31 participants who were diverse in occupation, gender, and geographic location (including those participants from Dhaka, Comilla, and other urban locations in Bangladesh), but may not be representative of rural populations in remote areas, or those individuals with severe physical disabilities. The sample size is small, which precludes the ability to make statistical generalizations, but is small enough to allow for a qualitative thematic analysis for rich contextual understanding. The prototype validation is not a deployment to production scale but rather a design concept, and there may be further challenges when it comes to the architecture of the backend, the regulatory environment, institutional opposition, and resource limitations. While mobile banking applications have been the most popular modality in Bangladesh, they are not the only modality considered, as ATM systems, web banking and agent-based banking each have unique issues of accessibility. Furthermore the salience of identified barriers could change over time due to fast changes in digital infrastructure, authentication technologies and regulatory environment.

### 5.6.9 Practical Recommendations

**5.6.9.1 For Interface Design:**

- Use simpler feature sets, larger typography (min 16pt for body text), and lower information density as basic rules for the mandatory use of the "senior mode"-interface.
- Use voice as primary interaction mode rather than a supplement, support Bengali language, local accents.
- Allow longer timeouts (3-5 minutes for OTP entry for min) by preference.
- Implement security measures for all critical text (passwords, security messages, transactions, etc.) in the language selected by the user.
- Implement transaction reversal/cancellation with grace periods (30 minutes to 1 hour at least).
- Employ Bengali symbols and metaphors instead of western ones.

**5.6.9.2 For Institutional Support Infrastructure:**

- Have helplines that are available around the clock with people who can speak multiple languages and be able to solve technical problems and conversation about building trust.
- Offer extensive training such as tutorials for each function in Bengali including video training.
- Establish 'trusted intermediary' routes for family members or community facilitators to help with transactions, retaining user agency and security.
- Incorporate transparency measures showing the impact of a transaction before it is done (irreversible).
- Document and systematically respond to user feedback, establishing feedback loops for improved interfaces continually.

**5.6.9.3 For Authentication and Security:**

- Discuss biometric authentication systems (fingerprint, iris, facial recognition etc.) to decrease the need for passwords, yet provide security.
- Use multi-step verification confirmation methods (confirm recipient received notification before the transaction is completed, etc.).
- Consider various threat models for users (physical monitoring at agents, remote phishing, sharing of passwords) and secure against them.
- Explain security features in non-technical terms in Bengali.

**5.6.9.4 For Policy and Regulation:**

- Make accessibility checks required for all digital banking services, based on an accessibility criteria established specifically for seniors (not on general disability accessibility standards).
- Set minimum requirements for level of responsiveness to customer support (maximum response time of 24 hours for critical issues).
- Develop financial/regulatory incentives for development and deployment of senior friendly banking interfaces.
- Involve older people in regulatory and standard-setting bodies in financial technology.
- Set up consequence for regular accessibility mistakes or non-responsiveness to customer service.

**5.6.9.5 For Research and Development:**

- Produce region-specific design knowledge by funding participatory design research with elderly users in a variety of settings in the Global South.
- Explore solutions to Bangla typography problems (font rendering of Bangla script).
- Discuss emotion sensing and context aware systems where the emotion of the user is sensed and personalized support is provided based on it.
- Create an open access design system that documents how patterns and solutions are evolving from this and other research.
- Follow-up longitudinal studies, examining technology adoption and financial effects for older users after implementation of accessibility improvements.

### 5.6.10 Research Contributions

This study attempted to answer all five research objectives, and the following contributions can be made:

- **RO1 Analysis of existing frameworks:** Extensive literature review of existing HCI, inclusive design, and digital banking literature was carried out, which highlighted important gaps in the literature in the context of the Global South, specifically the lack of culturally adapted frameworks for Bangladeshi elderly users.
- **RO2 Identifying barriers and enablers:** Semi-structured interviews were conducted with a total of 31 elderly users, with the aim of documenting the key barriers and enablers for elderly users, including cognitive load, visual inaccessibility, language exclusion, fear of irreversible errors and trust anxiety, in addition to voice guidance, human mediation and simplified navigation.
- **RO3 Design patterns and inclusive design principles:** A set of design principles emerged from user findings and solutions specific to each user group: Bengali-first localization, progressive disclosure, forgiving interaction design and trust-through-transparency forming a design criterion for designers, developers, and financial institutions.
- **RO4 Evaluation of the proposed design approach:** The proposed design approach was tested on both low-end Android devices and in low-bandwidth conditions prevalent in Bangladesh, which showed that an accessible and inclusive banking interface is possible within existing infrastructural limitations.
- **RO5 Prototype playtesting and effectiveness assessment:** An iterative prototype was developed and tested multiple times with participants. The gamification framework comprising guided onboarding, risk-free practice mode, confidence measurement, and achievements was found to measurably lower anxiety and boost willingness to transact independently, achieving 90% user satisfaction.

Together, these contributions make clear that the issue of digital financial inclusion for the elderly in Bangladesh is not merely a technical one, but a socio-cultural and institutional one. The insights provide concrete recommendations that can guide researchers, designers, policy-makers, and financial institutions in creating more inclusive and age-friendly digital financial services ecosystems.

---

# 6 Conclusion

This study reflects the much-required 'age-inclusive' digital banking in Bangladesh. Despite significant technological advancements, older people still have difficulties with the interfaces, lack of digital education and low trust that leads to digital exclusion. The study integrates Human Centered Design (HCD) and Technology Acceptance Model (TAM) factors to highlight the importance of culturally adaptive, accessible and user friendly financial technologies.
The results highlight the need for synergies between designers, developers and decision makers in order to start such systems that focus on simplicity, clarity and inclusiveness. This synergy is essential to create a complete chain of policy implementation into policy execution, which supports digital transformation empowers the elderly segment in the financial ecosystem of Bangladesh rather than obstructs.
The outcomes call for interfaces and services that focus on intuitive interconnection, minimum cognitive load and transparency of the process to develop trust and usability. This requires a paradigm shift in the design philosophy one that transcends the functional approach to embrace empathy. For example, a voice assisted navigation, the use of pally cultural symbol, user friendly visual guidance as well as a robust and easily accessible human support can bring the barrier to entry down to a minimum. Moreover, it is essential that such systems are initiated in association with elderly, and that the elderly's feedback is received at every stage to ensure that the solutions are not only academically sound, but also resonate with the elderly on a practical level. Most importantly, this approach enables digital autonomy and transforms the notion of vulnerability into active engagement: it is a way to validate that financial cutting-edge technology is a path to inclusion, rather than exclusion.

---

# Bibliography

[1] "Financial Inclusion of the Elderly: Exploring the Role of Mobile Banking Adoption". In: Prague Economic Papers (2021). URL: https://aip.vse.cz/artkey/aip-202101-0001_financial-inclusion-of-the-elderly-exploring-the-role-of-mobile-banking-adoption.php.

[2] "Design Guidelines of Mobile Apps for Older Adults: Systematic Review and Thematic Analysis". In: PMC (2023). URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC10557006/.

[3] "Designing an Age-Friendly Conversational AI Agent for Mobile Banking". In: International Journal of Human-Computer Studies (2024). URL: https://www.sciencedirect.com/science/article/abs/pii/S1071581924000466.

[4] "Digital Literacy Training for Low-Income Older Adults Through Intergenerational Service Learning". In: JMIR Aging 7.1 (2024), e51675. URL: https://aging.jmir.org/2024/1/e51675/.

[5] "Smartphone Banking Usage in Nigeria: Gamification, TAM Behavioral Outcomes". In: Information Systems Development (2024). URL: https://onlinelibrary.wiley.com/doi/full/10.1002/isd2.12174.

[6] "Gamified Money: Exploring the Effectiveness of Gamification in Financial Services". In: Information Technology & People 35.1 (2022), p. 281. URL: https://www.emerald.com/itp/article-abstract/35/1/281/513973/Gamified-money-exploring-the-effectiveness-of.

[7] "A Gamification Approach for Enhancing Older Adults' Technology Adoption and Knowledge Transfer: A Case Study in Mobile Payments Technology". In: (2024). URL: https://www.scribd.com/document/839157594/.

[8] "Enhancing Caregiver Empowerment Through Story Mosaic System: HCD Approach". In: PMC (2023). URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC10662670/.

[9] "Cyber Security Card Game: Empowering Digital Educators". In: Proceedings of the ACM Conference. 2024. DOI: 10.1145/3706599.3719806. URL: https://dl.acm.org/doi/10.1145/3706599.3719806.

[10] "Financial Inclusion of the Elderly: Exploring Mobile Banking (South Africa)". In: Prague Economic Papers (2021). URL: https://www.researchgate.net/publication/351397029_Financial_Inclusion_of_the_Elderly_Exploring_the_Role_of_Mobile_Banking_Adoption.

[11] "Enablers and Barriers for Mobile Commerce and Banking Services Among the Elderly in Developing Countries: A Systematic Review". In: PMC (2023). URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC7134387/.

[12] World Economic Forum. Why the Accessibility Gap in Financial Services Needs to be Closed. https://www.weforum.org/.

[13] "Financial Inclusion for People with Disability: Scoping Review". In: Global Health Action (2024). DOI: 10.1080/16549716.2024.2342634.

[14] "Investigating Accessibility of Voice Assistants". In: JMIR Publications (2020). DOI: 10.2196/18431.

[15] "Financial Inclusion in Kenya". In: PLOS ONE (2024). DOI: 10.1371/journal.pone.0321493.

[16] Designing Talking ATM System. 2018. URL: https://www.researchgate.net/publication/325117258_Designing_Talking_ATM_System_for_People_with_Visual_Impairments.

[17] "Accessibility of Banking and Finance Systems". In: First Monday 22.3 (2017). DOI: 10.5210/fm.v22i3.7036.

[18] "Study of Changing ATM Accessibility". In: Applied Spatial Analysis and Policy (2025). DOI: 10.1007/s12061-025-09658-2.

[19] "Voice Banking for Speech-Impaired Users". In: International Journal of Language & Communication Disorders (2021). DOI: 10.1111/1460-6984.12588.

[20] "Access to Assistive Technology (Nepal, India, Bangladesh)". In: Disability and Rehabilitation: Assistive Technology (2021). DOI: 10.1080/17483107.2021.1892843.

[21] "Elderly Users' Acceptance of mHealth UI Design-Based Culture". In: Journal on Multimodal User Interfaces (2019). DOI: 10.1007/s12193-019-00307-w.

[22] "Commodification of Mobile Banking Interface for Elderly". In: Mudra Journal of Art and Culture 37.4 (2022). DOI: 10.31091/mudra.v37i4.2035.

[23] Study on Customers' Perception Towards Mobile Banking. 2023. URL: https://www.researchgate.net/publication/373844470_A_Study_of_Customer_Perception_Toward_Mobile_Banking_in_Western_Maharashtra.

[24] "Mobile Banking Adoption StudyEvaluating Mobile Apps for Elderly Based on Guidelines". MA thesis. Trinity College Dublin, School of Computer Science and Statistics, 2018. URL: https://publications.scss.tcd.ie/theses/diss/2018/TCD-SCSS-DISSERTATION-2018-063.pdf.

[25] Study on Digital Banking Problems (Chennai). Tech. rep. Sathyabama Institute of Science and Technology, 2022. URL: https://sist.sathyabama.ac.in/sist_naac/documents/1.3.4/2022-mba-mba-batchno-14.pdf.

[26] User Interface Design for Asia Elderly: Systematic Review. Tech. rep. Universiti Teknologi MARA, 2020. URL: https://ir.uitm.edu.my/46282/1/46282.pdf.

[27] Tatiana Yaldaie. "Issues of UX Design for Elderly with MCI and Dementia". MA thesis. Theseus, 2021. URL: https://www.theseus.fi/bitstream/10024/752455/2/Yaldaie_Tatiana.pdf.

[28] "Usability Design and Evaluation of Smartphone for Elderly". In: Journal of Computer and Biomedical Informatics (2023). URL: https://jcbi.org/index.php/Main/article/download/545/476/1609.

[29] Survey Improving Usability of Smartphones for Elders. Tech. rep. University of the West of England, 2023. URL: https://uwe-repository.worktribe.com/index.php/OutputFile/11615906.

[30] "Usability of Mobile Devices for Elderly Users". MA thesis. Theseus, 2015. URL: https://www.theseus.fi/handle/10024/120286.

[31] "Mobile User Interface for Low-Literacy Users (Rural South Africa)". In: (2023). URL: https://scispace.com/pdf/a-mobile-user-interface-for-low-literacy-users-in-rural-3oul10i193.pdf.

[32] F.C. Gorter. Designing Icon-Based Mobile Applications for Illiterate Users (Rural Africa). 2020. URL: https://w4ra.org/wp-content/uploads/2020/08/gorterfc_44574_2393214_Essay.pdf.

[33] "Exploring Text-Free Interface for Illiterate Users". MA thesis. 2012. URL: http://hdl.handle.net/1956/4843.

[34] Human-Computer UI Design for Semiliterate/Illiterate (SLR). Tech. rep. 2022. URL: https://core.ac.uk/download/539886678.pdf.

[35] "Localized Text-Free User Interfaces". In: IEEE Access (2021). DOI: 10.1109/ACCESS.2021.3139525.

[36] "Text Is Not The Enemy: Natural User Interfaces Workshop". In: 2019. URL: https://vbn.aau.dk/ws/portalfiles/portal/309756266/TextIsNot_The_Enemy-NUI_Workshop.pdf.

[37] "User Interface Design of E-Learning System for Functionally Illiterate People". In: International Journal of Advanced Computer Science and Applications 6.11 (2015). URL: https://thesai.org/Downloads/Volume6No11/Paper-18-User_Interface_Design_of_E_Learning_System_for_Functionally_Illiterate_People.pdf.

[38] "Software Applications for Individuals with Low Literacy". In: Electronic Communications of the EASST 83 (2024). DOI: 10.14279/eceasst.v83.2623.

[39] Fleur Gramkow. "Influence of Age of Acquisition and Frequency on Word Recognition". MA thesis. Utrecht University, 2023. URL: https://studenttheses.uu.nl/bitstream/handle/20.500.12932/44798/.

[40] Design of Mobile Job-Search App for Illiterate (Bangladesh). Tech. rep. Military Institute of Science and Technology, 2022. URL: https://dspace.mist.ac.bd/xmlui/handle/123456789/386.

[41] The Influence of Digital Banking Services on Financial Performance: A Focus on Customer Experience. 2024. URL: https://www.researchgate.net/publication/380511918_The_Influence_of_Digital_Banking_Services_on_Financial_Performance_A_Focus_on_Customer_Experience.

[42] "Comparative Analysis of Digital Banking and Financial Inclusion (US)". In: African Journal of Empirical Research (2024). URL: https://journalajeba.com/index.php/AJEBA/article/view/1722/3728.

[43] Digital Banking Issues Faced by the Elderly and the Optimal Measures to Resolve Them. 2024. URL: https://www.researchgate.net/publication/383859232_DIGITAL_BANKING_ISSUES_FACED_BY_THE_ELDERLY_AND_THE_OPTIMAL_MEASURES_TO_RESOLVE_THEM.

[44] Banking Outside-in: How Design Thinking is Changing The Banking Industry. 2019. URL: https://www.researchgate.net/publication/336666376_Banking-Outside-in_How_Design_Thinking_is_Changing_The_Banking_Industry.

[45] Senior Citizens' Intention to use Digital Banking With Special Reference to Selected Commercial Bank in Sri Lanka. 2019. URL: https://www.researchgate.net/publication/336695046_Senior_Citizens'_Intention_to_use_Digital_Banking-With_special_reference_to_selected_Commercial_Bank_in_Sri_Lanka.

[46] "Enablers and Barriers for Mobile Commerce Among Elderly (Systematic Review)". In: Lecture Notes in Computer Science. 2020. DOI: 10.1007/978-3-030-45002-1-27.

[47] "Gamification in Banking: Review, Synthesis and Research Agenda". In: Young Consumers (2021). DOI: 10.1108/YC-10-2020-1229.

[48] Prothom Alo. Old-age pensioner dies in 5-hour queue. Accessed: June 10, 2026. June 2014. URL: https://en.prothomalo.com/bangladesh/Old-age-pensioner-dies-in-5-hour-queue.

[49] The Daily Star. Towards a cashless Bangladesh. Accessed: June 10, 2026. Aug. 2024. URL: https://www.thedailystar.net/supplements/cashless-shopping-dining-2024/news/towards-cashless-bangladesh-3573676.

[50] M. Loyalty. Gamification in banking: Bonuses for payments, savings, and learning. Case studies 2025. Medium. Accessed: June 10, 2026. Nov. 2025. URL: https://medium.com/@dumouchelantonin/gamification-in-banking-bonuses-for-payments-savings-and-learning-case-studies-2025-edf5c9e19b26.
