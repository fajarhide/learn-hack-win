export interface CertDomain {
  name: string;
  weight: string;
}

export interface Certification {
  id: string;
  name: string;
  fullName: string;
  provider: string;
  level: "Entry" | "Intermediate" | "Advanced" | "Expert";
  icon: string;
  description: string;
  examCode: string;
  duration: string;
  questions: string;
  passingScore: string;
  price: string;
  languages: string[];
  domains: CertDomain[];
  studyPlan: string;
  prerequisites: string[];
  resources: { name: string; url: string }[];
  isFree?: boolean;
}

export const certifications: Certification[] = [
  {
    id: "isc2-cc",
    name: "ISC2 CC",
    fullName: "ISC2 Certified in Cybersecurity",
    provider: "ISC2",
    level: "Entry",
    icon: "🎓",
    description: "Validasi konsep keamanan tingkat pemula. Cocok untuk entry-level, mahasiswa, dan career switcher. Tidak butuh pengalaman kerja.",
    examCode: "CC",
    duration: "2 jam",
    questions: "100–125 soal (CAT adaptif)",
    passingScore: "700/1000",
    price: "Gratis via One Million CC program",
    languages: ["EN", "ZH", "JA", "DE", "ES"],
    domains: [
      { name: "Security Principles", weight: "26%" },
      { name: "Business Continuity, Disaster Recovery & Incident Response", weight: "10%" },
      { name: "Access Controls Concepts", weight: "22%" },
      { name: "Network Security", weight: "24%" },
      { name: "Security Operations", weight: "18%" }
    ],
    studyPlan: "4 minggu",
    prerequisites: ["Tidak ada pengalaman minimum"],
    resources: [
      { name: "ISC2 One Million CC", url: "https://www.isc2.org/landing/1mcc" },
      { name: "ISC2 CC Exam Outline", url: "https://www.isc2.org/certifications/cc/cc-certification-exam-outline" }
    ],
    isFree: true
  },
  {
    id: "comptia-security-plus",
    name: "CompTIA Security+",
    fullName: "CompTIA Security+ (SY0-701)",
    provider: "CompTIA",
    level: "Entry",
    icon: "🔒",
    description: "Memvalidasi keterampilan inti keamanan siber tingkat entry-level. Direkomendasikan memiliki Network+ dan pengalaman 2 tahun admin IT/security.",
    examCode: "SY0-701",
    duration: "90 menit",
    questions: "Maksimum 90 (MCQ + performance-based)",
    passingScore: "750 (skala 100–900)",
    price: "~US$404",
    languages: ["EN", "JA", "PT", "ES", "TH"],
    domains: [
      { name: "General Security Concepts", weight: "12%" },
      { name: "Threats, Vulnerabilities & Mitigations", weight: "22%" },
      { name: "Security Architecture", weight: "18%" },
      { name: "Security Operations", weight: "28%" },
      { name: "Security Program Management & Oversight", weight: "20%" }
    ],
    studyPlan: "6 minggu",
    prerequisites: ["CompTIA Network+ (rekomendasi)", "2 tahun pengalaman IT/security"],
    resources: [
      { name: "CompTIA Security+", url: "https://www.comptia.org/en-us/certifications/security/" },
      { name: "Professor Messer", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/" }
    ]
  },
  {
    id: "comptia-network-plus",
    name: "CompTIA Network+",
    fullName: "CompTIA Network+ (N10-009)",
    provider: "CompTIA",
    level: "Entry",
    icon: "🌐",
    description: "Memvalidasi keterampilan jaringan tingkat entry-to-associate. Direkomendasikan CompTIA A+ dan 9-12 bulan pengalaman jaringan.",
    examCode: "N10-009 (V9)",
    duration: "90 menit",
    questions: "Maksimum 90 (MCQ + performance-based)",
    passingScore: "720 (skala 100–900)",
    price: "~US$369",
    languages: ["EN", "DE", "JA", "PT", "ES"],
    domains: [
      { name: "Networking Concepts", weight: "23%" },
      { name: "Network Implementation", weight: "20%" },
      { name: "Network Operations", weight: "19%" },
      { name: "Network Security", weight: "17%" },
      { name: "Network Troubleshooting", weight: "21%" }
    ],
    studyPlan: "6 minggu",
    prerequisites: ["CompTIA A+ (rekomendasi)", "9-12 bulan pengalaman jaringan"],
    resources: [
      { name: "CompTIA Network+", url: "https://www.comptia.org/en-us/certifications/network/" },
      { name: "Professor Messer Network+", url: "https://www.professormesser.com/network-plus/n10-009/" }
    ]
  },
  {
    id: "comptia-cysa-plus",
    name: "CompTIA CySA+",
    fullName: "CompTIA CySA+ (CS0-003)",
    provider: "CompTIA",
    level: "Intermediate",
    icon: "🔎",
    description: "Memvalidasi keterampilan analisis keamanan tingkat menengah. Direkomendasikan Network+, Security+, dan ≥4 tahun pengalaman IR/SOC.",
    examCode: "CS0-003 (V3)",
    duration: "165 menit",
    questions: "Maksimum 85 (MCQ + performance-based)",
    passingScore: "750 (skala 100–900)",
    price: "~US$404",
    languages: ["EN", "JA", "PT", "ES"],
    domains: [
      { name: "Security Operations", weight: "33%" },
      { name: "Vulnerability Management", weight: "30%" },
      { name: "Incident Response & Management", weight: "20%" },
      { name: "Reporting & Communication", weight: "17%" }
    ],
    studyPlan: "6 minggu",
    prerequisites: ["Network+ dan Security+", "≥4 tahun pengalaman IR/SOC"],
    resources: [
      { name: "CompTIA CySA+", url: "https://www.comptia.org/en-us/certifications/cybersecurity-analyst/" }
    ]
  },
  {
    id: "comptia-securityx",
    name: "CompTIA SecurityX",
    fullName: "CompTIA SecurityX (CAS-005)",
    provider: "CompTIA",
    level: "Expert",
    icon: "🏆",
    description: "Sertifikasi advanced untuk security architect dan senior security engineer. Bukti kemampuan desain, implementasi, dan operasi keamanan enterprise.",
    examCode: "CAS-005 (V5)",
    duration: "165 menit",
    questions: "Maksimum 90 (MCQ + performance-based)",
    passingScore: "Pass/Fail",
    price: "~US$509",
    languages: ["EN"],
    domains: [
      { name: "Governance, Risk & Compliance", weight: "23%" },
      { name: "Security Architecture", weight: "23%" },
      { name: "Security Engineering", weight: "20%" },
      { name: "Security Operations", weight: "23%" },
      { name: "Security Leadership", weight: "11%" }
    ],
    studyPlan: "8 minggu",
    prerequisites: ["10 tahun pengalaman IT", "5 tahun pengalaman security"],
    resources: [
      { name: "CompTIA SecurityX", url: "https://www.comptia.org/en-us/certifications/securityx/" }
    ]
  },
  {
    id: "eccouncil-ceh",
    name: "EC-Council CEH",
    fullName: "EC-Council Certified Ethical Hacker (CEH AI v13)",
    provider: "EC-Council",
    level: "Intermediate",
    icon: "🎯",
    description: "20 modul, 221 lab, 550+ teknik serangan. Jalur lanjutan: CEH Practical → CEH Master.",
    examCode: "312-50 (ECC/VUE)",
    duration: "4 jam (MCQ) / 6 jam (Practical)",
    questions: "125 soal MCQ + 20 tantangan practical",
    passingScore: "Variabel 60%–85% per form",
    price: "~US$1,199 (training + exam)",
    languages: ["EN"],
    domains: [
      { name: "Information Security & Ethical Hacking", weight: "6%" },
      { name: "Reconnaissance Techniques", weight: "21%" },
      { name: "System Hacking Phases & Attack Techniques", weight: "17%" },
      { name: "Network & Perimeter Hacking", weight: "14%" },
      { name: "Web Application Hacking", weight: "16%" },
      { name: "IoT, OT & Cloud Hacking", weight: "12%" },
      { name: "Cryptography & AI", weight: "7%" },
      { name: "Incident Response & Digital Forensics", weight: "7%" }
    ],
    studyPlan: "6 minggu",
    prerequisites: ["2 tahun pengalaman IT security (rekomendasi)"],
    resources: [
      { name: "EC-Council CEH", url: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/" }
    ]
  },
  {
    id: "isc2-cissp",
    name: "ISC2 CISSP",
    fullName: "ISC2 Certified Information Systems Security Professional",
    provider: "ISC2",
    level: "Advanced",
    icon: "👑",
    description: "Sertifikasi gold standard untuk security professionals. Memvalidasi keahlian manajemen keamanan informasi tingkat lanjut.",
    examCode: "CISSP",
    duration: "3 jam",
    questions: "100–150 soal (CAT adaptif)",
    passingScore: "700/1000",
    price: "~US$749",
    languages: ["EN", "ZH", "DE", "JA", "ES"],
    domains: [
      { name: "Security & Risk Management", weight: "16%" },
      { name: "Asset Security", weight: "10%" },
      { name: "Security Architecture & Engineering", weight: "13%" },
      { name: "Communication & Network Security", weight: "13%" },
      { name: "Identity & Access Management", weight: "13%" },
      { name: "Security Assessment & Testing", weight: "12%" },
      { name: "Security Operations", weight: "13%" },
      { name: "Software Development Security", weight: "10%" }
    ],
    studyPlan: "8 minggu",
    prerequisites: ["5 tahun pengalaman di ≥2 domain CISSP"],
    resources: [
      { name: "ISC2 CISSP", url: "https://www.isc2.org/certifications/cissp" },
      { name: "CISSP Exam Outline", url: "https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline" }
    ]
  },
  {
    id: "isc2-ccsp",
    name: "ISC2 CCSP",
    fullName: "ISC2 Certified Cloud Security Professional",
    provider: "ISC2",
    level: "Advanced",
    icon: "☁️",
    description: "Sertifikasi cloud security tingkat lanjut. Fokus pada kemampuan mendesain, mengelola, dan mengamankan data & infrastruktur di cloud.",
    examCode: "CCSP",
    duration: "3 jam",
    questions: "100–150 soal (CAT adaptif)",
    passingScore: "700/1000",
    price: "~US$599",
    languages: ["EN", "ZH", "JA", "DE"],
    domains: [
      { name: "Cloud Concepts, Architecture & Design", weight: "17%" },
      { name: "Cloud Data Security", weight: "20%" },
      { name: "Cloud Platform & Infrastructure Security", weight: "17%" },
      { name: "Cloud Application Security", weight: "17%" },
      { name: "Cloud Security Operations", weight: "16%" },
      { name: "Legal, Risk & Compliance", weight: "13%" }
    ],
    studyPlan: "16 minggu",
    prerequisites: ["5 tahun IT (3 tahun information security, 1 tahun cloud security)"],
    resources: [
      { name: "ISC2 CCSP", url: "https://www.isc2.org/certifications/ccsp" },
      { name: "CCSP Exam Outline", url: "https://www.isc2.org/certifications/ccsp/ccsp-certification-exam-outline" }
    ]
  },
  {
    id: "csa-ccsk",
    name: "CSA CCSK v5",
    fullName: "Cloud Security Alliance Certificate of Cloud Security Knowledge v5",
    provider: "CSA",
    level: "Intermediate",
    icon: "🌤️",
    description: "Sertifikasi vendor-neutral dari CSA yang menguji pemahaman dasar-menengah tentang konsep dan best practice keamanan cloud.",
    examCode: "CCSK v5",
    duration: "120 menit",
    questions: "60 soal multiple-choice",
    passingScore: "80% (48/60)",
    price: "~US$445 (termasuk 2 attempt)",
    languages: ["EN"],
    domains: [
      { name: "Cloud Architecture & Design", weight: "17%" },
      { name: "Cloud Data Security", weight: "15%" },
      { name: "Cloud Platform & Infrastructure", weight: "15%" },
      { name: "Cloud Application Security", weight: "13%" },
      { name: "Cloud Security Operations", weight: "13%" },
      { name: "Legal & Compliance", weight: "10%" },
      { name: "Zero Trust & AI", weight: "17%" }
    ],
    studyPlan: "8 minggu",
    prerequisites: ["Tidak ada (tapi pemahaman cloud dasar sangat membantu)"],
    resources: [
      { name: "CSA CCSK", url: "https://cloudsecurityalliance.org/education/ccsk/" },
      { name: "CSA Guidance v5", url: "https://cloudsecurityalliance.org/research/guidance/" }
    ]
  },
  {
    id: "isaca-crisc",
    name: "ISACA CRISC",
    fullName: "ISACA Certified in Risk and Information Systems Control",
    provider: "ISACA",
    level: "Advanced",
    icon: "⚖️",
    description: "Memvalidasi keahlian dalam manajemen risiko TI dan desain pengendalian. Sangat relevan untuk Risk Manager, Security Officer, dan Compliance Manager.",
    examCode: "CRISC",
    duration: "240 menit (4 jam)",
    questions: "150 soal Multiple Choice",
    passingScore: "450 (skala 200–800)",
    price: "~US$575 (member) / ~US$760 (non-member)",
    languages: ["EN", "ZH", "JA", "ES"],
    domains: [
      { name: "Governance", weight: "26%" },
      { name: "IT Risk Assessment", weight: "20%" },
      { name: "Risk Response & Reporting", weight: "32%" },
      { name: "Information Technology & Security", weight: "22%" }
    ],
    studyPlan: "6 minggu",
    prerequisites: ["3 tahun pengalaman manajemen risiko (min. 2 domain)"],
    resources: [
      { name: "ISACA CRISC", url: "https://www.isaca.org/credentialing/crisc" }
    ]
  },
  {
    id: "free-certs",
    name: "Sertifikasi Gratis",
    fullName: "Kumpulan Sertifikasi & Course Gratis",
    provider: "Berbagai",
    level: "Entry",
    icon: "🆓",
    description: "Kumpulan opsi sertifikasi dan sertifikat gratis untuk cybersecurity. Bangun portofolio tanpa biaya ujian.",
    examCode: "Berbagai",
    duration: "Bervariasi",
    questions: "Bervariasi",
    passingScore: "Bervariasi",
    price: "Gratis",
    languages: ["EN", "ID"],
    domains: [
      { name: "ISC2 CC (One Million CC)", weight: "Gratis" },
      { name: "Fortinet NSE 1–3", weight: "Gratis" },
      { name: "Palo Alto Cybersecurity Fundamentals", weight: "Gratis" },
      { name: "Microsoft SC-900 (learning path gratis)", weight: "Gratis" },
      { name: "Google Cybersecurity Certificate", weight: "~US$49/bulan" },
      { name: "TryHackMe badges", weight: "Freemium" },
      { name: "AWS Cloud Practitioner (learning path)", weight: "Gratis" }
    ],
    studyPlan: "30 hari",
    prerequisites: ["Tidak ada"],
    resources: [
      { name: "ISC2 One Million CC", url: "https://www.isc2.org/landing/1mcc" },
      { name: "Fortinet NSE", url: "https://www.fortinet.com/nse-training" },
      { name: "Palo Alto Education", url: "https://www.paloaltonetworks.com/services/education" },
      { name: "Microsoft Learn", url: "https://learn.microsoft.com" },
      { name: "Google Cybersecurity", url: "https://www.coursera.org/professional-certificates/google-cybersecurity" }
    ],
    isFree: true
  }
];
