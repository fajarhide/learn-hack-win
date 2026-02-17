export interface CareerRole {
  role: string;
  level: string;
  focus: string;
}

export interface CareerPath {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  whyFit: string[];
  roles: CareerRole[];
  roadmap: { step: string; items: string[] }[];
  certifications: string[];
  resources: { name: string; url: string }[];
}

export const careerPaths: CareerPath[] = [
  {
    id: "from-non-it",
    title: "Non-IT / Fresh Switcher",
    subtitle: "Jalur entry-level tanpa background IT",
    icon: "🌱",
    description: "Panduan untuk pemula total, non-IT, atau profesional dari bidang non-teknis yang ingin masuk ke dunia Cybersecurity.",
    whyFit: [
      "Tidak perlu background IT atau coding",
      "Banyak role fokus pada analisis, dokumentasi, dan pemahaman risiko",
      "Analytical thinking yang dimiliki banyak non-IT roles",
      "Problem solving dan research & documentation",
      "Attention to detail"
    ],
    roles: [
      { role: "SOC Analyst (Tier 1)", level: "Entry", focus: "Monitoring alert, log analysis" },
      { role: "Cybersecurity Analyst (Entry)", level: "Entry", focus: "SIEM, scanning, documentation" },
      { role: "GRC Analyst (Entry)", level: "Entry", focus: "Governance, policy, compliance" },
      { role: "Cybersecurity Support Technician", level: "Entry", focus: "Ticket handling, triage basic" },
      { role: "Incident Response Technician (Junior)", level: "Entry", focus: "Basic investigation" },
      { role: "Security Awareness Officer", level: "Entry", focus: "Training & human risk" },
      { role: "Vendor Risk Analyst (Entry)", level: "Entry", focus: "Questionnaire & risk scoring" },
      { role: "IT Security Coordinator", level: "Entry", focus: "Documentation & security ops" }
    ],
    roadmap: [
      { step: "Step 1 — IT & Networking Fundamentals", items: ["Pahami hardware dasar, OS, IP address, DNS, DHCP", "Belajar Windows/Linux dasar", "Pelajari jaringan: OSI, TCP/IP, port, protokol"] },
      { step: "Step 2 — Security Fundamentals", items: ["CIA Triad, Zero Trust, threats & vulnerabilities", "Malware basics, firewall, endpoint security", "Identity & Access Management (IAM)"] },
      { step: "Step 3 — SOC Skillset", items: ["SIEM (Splunk, ELK, Wazuh)", "Log reading (Windows Event Logs, Sysmon)", "MITRE ATT&CK, triage workflow"] },
      { step: "Step 4 — Hands-on Practice", items: ["TryHackMe SOC Level 1 path", "LetsDefend free tier", "Blue Team Labs Online"] }
    ],
    certifications: ["ISC2 CC (gratis via One Million CC)", "Google Cybersecurity Certificate", "CompTIA Security+", "SC-900 (Microsoft Security Fundamentals)"],
    resources: [
      { name: "TryHackMe", url: "https://tryhackme.com" },
      { name: "LetsDefend", url: "https://letsdefend.io" },
      { name: "Cybrary", url: "https://www.cybrary.it" }
    ]
  },
  {
    id: "from-it-support",
    title: "IT Support / Helpdesk",
    subtitle: "Transisi dari IT Support ke Cybersecurity",
    icon: "🖥️",
    description: "Panduan untuk profesional IT Support/Helpdesk yang ingin beralih ke cybersecurity.",
    whyFit: [
      "Sudah paham Windows/Linux basics",
      "Networking (DNS, DHCP, TCP/IP)",
      "Troubleshooting mindset",
      "Endpoint management",
      "Ticketing system"
    ],
    roles: [
      { role: "SOC Analyst (Tier 1)", level: "Entry", focus: "Monitoring alert, log analysis" },
      { role: "Cybersecurity Analyst", level: "Entry", focus: "SIEM, vulnerability, security ops" },
      { role: "Incident Response Technician", level: "Entry", focus: "Investigasi insiden, malware dasar" },
      { role: "Vulnerability Analyst", level: "Entry", focus: "Scanning & Reporting" },
      { role: "IAM Analyst", level: "Entry", focus: "Identity, access, provisioning" },
      { role: "GRC Analyst", level: "Entry", focus: "Governance, policy, compliance" }
    ],
    roadmap: [
      { step: "Step 1 — Security & IT Foundations", items: ["Windows AD, GPO", "Linux permissions", "Networking: OSI, TCP/IP, DNS, DHCP", "CIA Triad, Zero Trust"] },
      { step: "Step 2 — Security Fundamentals", items: ["Threats & vulnerabilities, malware basics", "Identity & Access Management", "Firewalls & endpoint security"] },
      { step: "Step 3 — SOC Skillset", items: ["SIEM (Splunk, ELK, Wazuh, Sentinel)", "Log reading (Windows Event Logs & Sysmon)", "MITRE ATT&CK, triage workflow"] },
      { step: "Step 4 — Hands-on Labs", items: ["TryHackMe SOC Level 1", "LetsDefend free tier", "Blue Team Labs Online"] }
    ],
    certifications: ["CompTIA Security+", "ISC2 CC", "Google Cybersecurity Certificate", "SC-900"],
    resources: [
      { name: "Microsoft Learn", url: "https://learn.microsoft.com" },
      { name: "Linux Journey", url: "https://linuxjourney.com" },
      { name: "Practical Networking", url: "https://www.practicalnetworking.net" }
    ]
  },
  {
    id: "from-software-developer",
    title: "Software Developer",
    subtitle: "Dari developer ke AppSec / DevSecOps",
    icon: "👨‍💻",
    description: "Panduan untuk software developer yang ingin beralih ke Application Security (AppSec), DevSecOps, atau Security Engineering.",
    whyFit: [
      "Paham software lifecycle (SDLC)",
      "Paham code behavior & architecture",
      "Paham API, database, backend/frontend",
      "Paham automation & CI/CD",
      "Terbiasa debugging & tracing issues",
      "Familiar dengan Git & version control"
    ],
    roles: [
      { role: "Application Security Engineer (AppSec)", level: "Mid", focus: "Secure code review, threat modeling, SAST/DAST" },
      { role: "DevSecOps Engineer", level: "Mid", focus: "CI/CD security, dependency scanning, IaC security" },
      { role: "Security Automation Engineer", level: "Mid", focus: "Security tooling, scripting, integration" },
      { role: "Cloud Security Engineer", level: "Mid", focus: "Secure cloud apps, serverless, API security" },
      { role: "Product Security Engineer", level: "Mid", focus: "Secure design, architecture review" },
      { role: "Bug Bounty Researcher", level: "Any", focus: "Web security & exploitation" }
    ],
    roadmap: [
      { step: "Step 1 — Strengthen Security Foundations", items: ["CIA Triad, OWASP Top 10", "Secure SDLC", "Threat modeling (STRIDE, PASTA)"] },
      { step: "Step 2 — AppSec Deep Dive", items: ["SAST: Semgrep, SonarQube, CodeQL", "DAST: OWASP ZAP, Burp Suite", "SCA: dependency scanning (Snyk, Dependabot)"] },
      { step: "Step 3 — DevSecOps Pipeline", items: ["Integrate SAST/DAST ke CI/CD", "Secret scanning (GitLeaks, TruffleHog)", "Container security (Trivy, Grype)"] },
      { step: "Step 4 — Bug Bounty & Practice", items: ["PortSwigger Web Security Academy", "HackerOne, Bugcrowd programs", "OWASP Juice Shop, WebGoat"] }
    ],
    certifications: ["CompTIA Security+", "GIAC GWEB", "CEH (Practical)", "OSCP (advanced)"],
    resources: [
      { name: "PortSwigger Academy", url: "https://portswigger.net/web-security" },
      { name: "OWASP", url: "https://owasp.org" },
      { name: "Snyk Learn", url: "https://learn.snyk.io" }
    ]
  },
  {
    id: "from-network-admin",
    title: "Network Admin / Engineer",
    subtitle: "Dari jaringan ke Network Security",
    icon: "🌐",
    description: "Panduan untuk Network Admin/Engineer yang ingin beralih ke cybersecurity, terutama network security, SOC, dan threat detection.",
    whyFit: [
      "Paham routing, switching, firewall, NAT, VLAN",
      "Paham monitoring traffic",
      "Terbiasa dengan CLI devices (Cisco, Mikrotik, Juniper)",
      "Paham network troubleshooting",
      "Paham protocol-level behavior (TCP/IP, DNS, DHCP, BGP)"
    ],
    roles: [
      { role: "Network Security Engineer", level: "Mid", focus: "Firewall, IPS/IDS, segmentation, secure routing" },
      { role: "SOC Analyst (Tier 1–2)", level: "Entry/Mid", focus: "Network logs, IDS events, traffic analysis" },
      { role: "Security Engineer", level: "Mid", focus: "Infra security, hardening, network defense" },
      { role: "Threat Detection Engineer", level: "Mid", focus: "Network-based detection, SIEM rules" },
      { role: "Cloud Security Engineer", level: "Mid", focus: "Securing VPC, SG, NACL, cloud networking" },
      { role: "Zero Trust Engineer", level: "Mid", focus: "Micro-segmentation & identity-based networking" }
    ],
    roadmap: [
      { step: "Step 1 — Security Foundations", items: ["CIA Triad, Zero Trust architecture", "Network segmentation & micro-segmentation", "IDS/IPS (Snort, Suricata)"] },
      { step: "Step 2 — SIEM & Detection", items: ["SIEM (Splunk, ELK, Sentinel)", "MITRE ATT&CK for network", "Packet analysis (Wireshark, tcpdump)"] },
      { step: "Step 3 — Cloud Network Security", items: ["VPC, Security Groups, NACL", "Cloud firewall & WAF", "Zero Trust networking"] },
      { step: "Step 4 — Hands-on", items: ["TryHackMe Network Security path", "Blue Team Labs Online", "SecurityOnion lab"] }
    ],
    certifications: ["CompTIA Security+", "CompTIA CySA+", "Cisco CyberOps Associate", "CCNP Security"],
    resources: [
      { name: "Security Onion", url: "https://securityonionsolutions.com" },
      { name: "Wireshark Docs", url: "https://www.wireshark.org/docs/" },
      { name: "SANS Reading Room", url: "https://www.sans.org/white-papers/" }
    ]
  },
  {
    id: "from-sysadmin-devops-cloud",
    title: "SysAdmin / DevOps / Cloud Engineer",
    subtitle: "Dari infrastruktur ke Cloud Security",
    icon: "⚙️",
    description: "Panduan untuk SysAdmin, DevOps, dan Cloud Engineer yang ingin beralih ke cybersecurity.",
    whyFit: [
      "Paham infra (server, storage, virtualization)",
      "Paham automation & CI/CD (DevOps)",
      "Paham cloud architecture (VPC, SG, IAM)",
      "Paham systems hardening",
      "Paham scripting (Bash, PowerShell, Python)",
      "Paham monitoring & logging"
    ],
    roles: [
      { role: "Cloud Security Engineer", level: "Mid", focus: "Secure AWS/Azure/GCP infra" },
      { role: "Security Engineer (Infra/Platform)", level: "Mid", focus: "Hardening, secure configuration" },
      { role: "DevSecOps Engineer", level: "Mid", focus: "CI/CD security, SAST/DAST, pipeline hardening" },
      { role: "IAM Engineer", level: "Mid", focus: "Identity, access, policies, SSO" },
      { role: "Detection Engineer", level: "Mid", focus: "SIEM rules, detection logic" },
      { role: "Incident Response Engineer", level: "Mid", focus: "IR automation, cloud IR" }
    ],
    roadmap: [
      { step: "Step 1 — System & Platform Security", items: ["OS Hardening (Windows/Linux)", "File integrity monitoring", "Patch & config management", "Sysmon / auditd logging"] },
      { step: "Step 2 — Cloud Security", items: ["AWS/Azure/GCP security services", "IAM policies & least privilege", "Encryption (KMS, key rotation)"] },
      { step: "Step 3 — DevSecOps", items: ["SAST/DAST integration ke CI/CD", "Container security (Trivy, Falco)", "IaC scanning (checkov, tfsec)"] },
      { step: "Step 4 — Detection & Response", items: ["SIEM (Splunk, Sentinel, ELK)", "Cloud-native detection (GuardDuty, Defender)", "IR playbooks automation"] }
    ],
    certifications: ["AWS Security Specialty", "AZ-500 (Azure Security Engineer)", "CompTIA Security+", "CSA CCSK"],
    resources: [
      { name: "AWS Security Hub Docs", url: "https://docs.aws.amazon.com/securityhub/" },
      { name: "Azure Security Docs", url: "https://learn.microsoft.com/en-us/azure/security/" },
      { name: "Aqua Security Blog", url: "https://blog.aquasec.com" }
    ]
  },
  {
    id: "from-qa-tester",
    title: "QA / Tester / Automation QA",
    subtitle: "Dari testing ke Pentest / AppSec",
    icon: "🔍",
    description: "Panduan untuk QA professionals yang ingin berpindah ke Penetration Testing, AppSec, atau Vulnerability Analysis.",
    whyFit: [
      "Terbiasa membuat test case → mudah beralih ke exploit chain",
      "Terbiasa melakukan exploratory testing → mirip vulnerability discovery",
      "Memahami bagaimana aplikasi bekerja → modal besar untuk AppSec",
      "Automation QA dapat menulis script → berguna untuk automation exploitation",
      "Familiar dengan API testing → cocok untuk API security testing"
    ],
    roles: [
      { role: "Junior Penetration Tester", level: "Entry", focus: "Web/API exploitation" },
      { role: "Vulnerability Analyst", level: "Entry", focus: "Scanning, triage, reporting" },
      { role: "AppSec Analyst", level: "Mid", focus: "Secure code review + security testing" },
      { role: "Security QA Engineer", level: "Mid", focus: "Security test cases, fuzzing" },
      { role: "Bug Bounty Hunter", level: "Any", focus: "Web/API/Cloud security research" },
      { role: "DevSecOps Tester", level: "Mid", focus: "SAST/DAST, dependency scanning" }
    ],
    roadmap: [
      { step: "Step 1 — Security Testing Foundations", items: ["OWASP Top 10, OWASP Testing Guide", "HTTP/HTTPS deep dive", "Burp Suite basics"] },
      { step: "Step 2 — Web & API Pentesting", items: ["SQL injection, XSS, CSRF, SSRF", "API security testing (Postman + Burp)", "Authentication & authorization testing"] },
      { step: "Step 3 — Automation & Tools", items: ["SAST: Semgrep, SonarQube", "DAST: OWASP ZAP, Nuclei", "Fuzzing tools & techniques"] },
      { step: "Step 4 — Bug Bounty & CTF", items: ["PortSwigger Web Security Academy", "HackerOne, Bugcrowd", "CTF: PicoCTF, OverTheWire"] }
    ],
    certifications: ["CompTIA Security+", "CEH (Practical)", "eJPT (INE)", "OSCP (advanced)"],
    resources: [
      { name: "PortSwigger Academy", url: "https://portswigger.net/web-security" },
      { name: "HackTheBox", url: "https://www.hackthebox.com" },
      { name: "OWASP Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/" }
    ]
  },
  {
    id: "from-compliance-risk-legal",
    title: "Compliance / Audit / Risk / Legal",
    subtitle: "Dari compliance ke GRC Cybersecurity",
    icon: "📋",
    description: "Panduan untuk profesional Compliance, Auditor, Risk Officer, dan Legal yang ingin masuk ke Cybersecurity GRC.",
    whyFit: [
      "Memahami regulasi, kebijakan, dan standar",
      "Terbiasa membuat policy & SOP",
      "Paham audit, kontrol, risk assessment",
      "Familiar dengan kerangka kepatuhan (ISO 27001, SOC 2, GDPR, PCI-DSS)",
      "Mampu dokumentasi formal & komunikasi"
    ],
    roles: [
      { role: "GRC Analyst", level: "Entry", focus: "Governance, policies, security controls" },
      { role: "Cybersecurity Compliance Analyst", level: "Entry", focus: "ISO27001, SOC2, regulatory alignment" },
      { role: "Cyber Risk Analyst", level: "Entry", focus: "Risk assessment, risk treatment" },
      { role: "Policy & Governance Specialist", level: "Entry", focus: "Kebijakan keamanan, standardisasi" },
      { role: "Third-Party Risk Analyst", level: "Entry", focus: "Vendor risk assessment" },
      { role: "Privacy & Data Protection Officer", level: "Mid", focus: "GDPR, PDPA, UU PDP" }
    ],
    roadmap: [
      { step: "Step 1 — Cyber GRC Foundations", items: ["CIA Triad, security controls", "ISO 27001 overview", "NIST CSF framework"] },
      { step: "Step 2 — Risk Management", items: ["Risk assessment methodology", "Risk register & treatment plan", "Third-party risk management (TPRM)"] },
      { step: "Step 3 — Compliance Frameworks", items: ["SOC 2 Type II audit", "PCI-DSS requirements", "GDPR / UU PDP Indonesia"] },
      { step: "Step 4 — GRC Tools & Practice", items: ["GRC platforms (ServiceNow, Archer)", "Audit documentation & evidence collection", "Security awareness program design"] }
    ],
    certifications: ["ISC2 CC", "CompTIA Security+", "ISACA CISA", "ISACA CRISC"],
    resources: [
      { name: "NIST CSF", url: "https://www.nist.gov/cyberframework" },
      { name: "ISO 27001 Guide", url: "https://www.iso.org/isoiec-27001-information-security.html" },
      { name: "ISACA", url: "https://www.isaca.org" }
    ]
  },
  {
    id: "from-data-analyst-business-analyst",
    title: "Data Analyst / Business Analyst",
    subtitle: "Dari data & bisnis ke Threat Intel / SOC",
    icon: "📊",
    description: "Panduan untuk Data Analyst dan Business Analyst yang ingin beralih ke Threat Intelligence, SOC, atau GRC Cybersecurity.",
    whyFit: [
      "Terbiasa mencari pola → cocok untuk threat hunting",
      "Terbiasa membaca data → cocok membaca log & alert",
      "Ahli dashboarding → cocok untuk SOC reporting",
      "Menguasai Excel/BI → cocok risk & governance analytics",
      "Familiar SQL/Python → cocok untuk automation & detection",
      "Mampu bridging technical & non-technical stakeholder"
    ],
    roles: [
      { role: "Threat Intelligence Analyst", level: "Entry", focus: "Pattern analysis, threat actor analysis" },
      { role: "Cybersecurity Analyst", level: "Entry", focus: "Monitoring, SIEM analysis, reporting" },
      { role: "SOC Analyst (Tier 1)", level: "Entry", focus: "Log triage, alert analysis" },
      { role: "Security Data Analyst", level: "Mid", focus: "Dashboarding, threat data pipelines" },
      { role: "GRC Analyst", level: "Entry", focus: "Risk scoring, compliance analytics" },
      { role: "Cyber Risk Analyst", level: "Entry", focus: "Risk assessment & quantification" }
    ],
    roadmap: [
      { step: "Step 1 — Security Fundamentals", items: ["CIA Triad, threats & vulnerabilities", "MITRE ATT&CK framework", "Cyber kill chain"] },
      { step: "Step 2 — SIEM & Log Analysis", items: ["SIEM platforms (Splunk, ELK)", "Log parsing & correlation", "Dashboard creation untuk security metrics"] },
      { step: "Step 3 — Threat Intelligence", items: ["OSINT techniques & tools", "IoC (Indicators of Compromise)", "Threat actor profiling & TTP analysis"] },
      { step: "Step 4 — Hands-on Practice", items: ["TryHackMe Cyber Defense path", "LetsDefend SOC scenarios", "Boss of the SOC (BOTS) dataset"] }
    ],
    certifications: ["ISC2 CC", "CompTIA Security+", "CompTIA CySA+", "GIAC GCTI"],
    resources: [
      { name: "MITRE ATT&CK", url: "https://attack.mitre.org" },
      { name: "AlienVault OTX", url: "https://otx.alienvault.com" },
      { name: "Splunk Free", url: "https://www.splunk.com/en_us/download.html" }
    ]
  }
];
