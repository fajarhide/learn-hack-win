export interface ModuleTopic {
  title: string;
  points: string[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  xpReward: number;
  topics: ModuleTopic[];
  tips: string[];
  prerequisites: string[];
  objectives: string[];
}

export const modules: Module[] = [
  {
    id: "modul-01-dasar-it",
    number: 1,
    title: "Dasar IT",
    subtitle: "Fondasi IT untuk jalur cybersecurity",
    description: "Konsep inti, alat, dan praktik dasar IT sebagai peta belajar awal. Fokus pada konsep inti sebelum alat canggih.",
    icon: "💻",
    xpReward: 100,
    tips: [
      "Belajar perlahan atau sedikit-sedikit, tapi konsisten.",
      "Latih konsep di lab pribadi Anda."
    ],
    prerequisites: [
      "Rasa ingin tahu tinggi",
      "Akses komputer pribadi",
      "Koneksi internet stabil",
      "Waktu belajar konsisten setiap minggu"
    ],
    objectives: [
      "Memahami fondasi IT untuk keamanan siber",
      "Menyiapkan lingkungan lab yang aman",
      "Mengetahui jalur peran keamanan",
      "Menentukan rencana belajar realistis"
    ],
    topics: [
      {
        title: "Peta Jalur Karier",
        points: [
          "Blue Team: monitoring, incident response, hardening",
          "Red Team: penetration testing, adversary emulation",
          "Purple Team: kolaborasi serangan dan pertahanan",
          "GRC: governance, risk, compliance",
          "AppSec: keamanan aplikasi dari desain hingga deploy",
          "Cloud Security: lindungi infrastruktur dan data cloud"
        ]
      },
      {
        title: "Konsep Inti IT",
        points: [
          "Hardware: CPU, RAM, storage, NIC, bus, firmware",
          "Data diproses oleh CPU, disimpan di RAM sementara",
          "Storage persisten: HDD, SSD, NVMe",
          "Firmware: instruksi level rendah pada chip",
          "BIOS/UEFI: antarmuka firmware pertama saat boot",
          "Virtualisasi: menjalankan banyak OS di satu mesin",
          "Hypervisor tipe 1 (bare-metal) dan tipe 2 (hosted)"
        ]
      },
      {
        title: "Jaringan Komputer",
        points: [
          "IP address: identitas host di jaringan (IPv4 dan IPv6)",
          "MAC address: identitas perangkat di layer 2",
          "Subnet: membagi jaringan besar menjadi segmen kecil",
          "DNS: menerjemahkan nama domain ke IP",
          "DHCP: memberikan IP otomatis ke host baru",
          "Firewall: mengontrol traffic berdasarkan aturan",
          "NAT: memetakan IP privat ke IP publik"
        ]
      },
      {
        title: "Sistem Operasi",
        points: [
          "Kernel: inti yang mengelola hardware dan resource",
          "Proses: program yang sedang berjalan",
          "Thread: unit eksekusi dalam proses",
          "File system: cara OS menyimpan dan mengorganisir data",
          "Permissions: mengontrol siapa boleh akses apa",
          "Service/daemon: proses latar yang berjalan terus",
          "Registry (Windows) atau config files (Linux)"
        ]
      },
      {
        title: "Baris Perintah (CLI)",
        points: [
          "Shell: antarmuka teks untuk interaksi dengan OS",
          "Bash, Zsh (Linux/macOS), PowerShell, CMD (Windows)",
          "Perintah dasar: ls, cd, pwd, cat, grep, chmod",
          "Pipe (|) dan redirect (>, >>): menghubungkan perintah",
          "Variabel environment: PATH, HOME, USER",
          "Script: automasi tugas berulang"
        ]
      },
      {
        title: "Pemrograman Dasar",
        points: [
          "Python: scripting, automasi, tool keamanan",
          "Bash: automasi Linux dan pipeline",
          "SQL: query database untuk investigasi",
          "Variabel, loop, kondisi, fungsi: konsep universal",
          "Input/output: membaca file, mengirim request",
          "Library: modul siap pakai untuk tugas umum"
        ]
      },
      {
        title: "Web Fundamentals",
        points: [
          "HTTP/HTTPS: protokol komunikasi web",
          "Request: method (GET, POST), header, body",
          "Response: status code (200, 301, 404, 500)",
          "HTML: struktur halaman, CSS: tampilan, JS: logika",
          "Cookie: penyimpan sesi di browser",
          "API: antarmuka program untuk bertukar data"
        ]
      },
      {
        title: "Dasar Keamanan",
        points: [
          "CIA triad: Confidentiality, Integrity, Availability",
          "Authentication vs Authorization",
          "Encryption: data at rest dan in transit",
          "Hashing: memetakan data ke nilai tetap (one-way)",
          "Vulnerability: kelemahan yang bisa dieksploitasi",
          "Threat: potensi serangan terhadap aset",
          "Risk = Threat × Vulnerability × Impact"
        ]
      },
      {
        title: "Kriptografi",
        points: [
          "Symmetric: satu kunci untuk encrypt dan decrypt (AES)",
          "Asymmetric: sepasang kunci publik-privat (RSA, ECC)",
          "Hash function: SHA-256, MD5 (usang)",
          "Digital signature: verifikasi keaslian dan integritas",
          "TLS/SSL: enkripsi koneksi jaringan",
          "PKI: infrastruktur sertifikat digital"
        ]
      },
      {
        title: "Identitas dan Akses",
        points: [
          "IAM: Identity and Access Management",
          "MFA: Multi-Factor Authentication",
          "SSO: Single Sign-On lintas aplikasi",
          "RBAC: Role-Based Access Control",
          "Least privilege: hak akses minimum yang dibutuhkan",
          "PAM: Privileged Access Management"
        ]
      },
      {
        title: "Cloud dan Container",
        points: [
          "IaaS, PaaS, SaaS: model layanan cloud",
          "Shared Responsibility Model: batas tanggung jawab",
          "Container: isolasi ringan (Docker)",
          "Orchestration: mengelola container (Kubernetes)",
          "Serverless: kode tanpa kelola server",
          "Keamanan cloud: IAM, enkripsi, logging, compliance"
        ]
      },
      {
        title: "Alat Penting",
        points: [
          "Wireshark: analisis paket jaringan",
          "Nmap: pemindaian port dan layanan",
          "Burp Suite: pengujian keamanan web",
          "Metasploit: framework eksploitasi",
          "CyberChef: konversi dan decode data",
          "SIEM: korelasi log (Splunk, ELK)"
        ]
      },
      {
        title: "Lingkungan Lab",
        points: [
          "VirtualBox/VMware: virtualisasi desktop",
          "Kali Linux: distro untuk pengujian keamanan",
          "Metasploitable: target latihan eksploitasi",
          "DVWA: lab kerentanan web",
          "TryHackMe dan HackTheBox: lab online guided"
        ]
      },
      {
        title: "Etika dan Legal",
        points: [
          "Izin tertulis wajib sebelum uji sistem orang lain",
          "UU ITE Indonesia: aturan hukum siber lokal",
          "Responsible disclosure: laporkan kerentanan dengan etis",
          "Bug bounty: program resmi untuk penemu celah",
          "NDA: perjanjian kerahasiaan saat proyek klien"
        ]
      }
    ]
  },
  {
    id: "modul-02-dasar-jaringan",
    number: 2,
    title: "Dasar Jaringan",
    subtitle: "OSI, TCP/IP, subnetting, VLAN, routing, NAT, DNS",
    description: "Dasar jaringan untuk jalur cybersecurity. Fokus pada konsep yang sering diuji dan diperlukan di lapangan.",
    icon: "🌐",
    xpReward: 150,
    tips: [
      "Visualkan paket data saat belajar.",
      "Gunakan lab untuk eksperimen aman."
    ],
    prerequisites: [
      "Menguasai materi modul dasar IT",
      "Terbiasa memakai command line dasar",
      "Memiliki lab virtual sederhana"
    ],
    objectives: [
      "Memahami model jaringan dan alur data",
      "Menguasai subnetting dan pengalamatan IP",
      "Mengerti switching, routing, dan VLAN",
      "Mengenali protokol penting dan port umum",
      "Mempraktikkan troubleshooting yang sistematis"
    ],
    topics: [
      {
        title: "Model OSI dan TCP/IP",
        points: [
          "OSI 7 layer: Physical, Data Link, Network, Transport, Session, Presentation, Application",
          "TCP/IP 4 layer: Network Access, Internet, Transport, Application",
          "PDU tiap layer: bit, frame, packet, segment/datagram",
          "Encapsulation: data dibungkus header tiap layer turun",
          "De-encapsulation: header dilepas tiap layer naik"
        ]
      },
      {
        title: "Perangkat Jaringan",
        points: [
          "Hub: broadcast semua port (layer 1)",
          "Switch: forward berdasarkan MAC (layer 2)",
          "Router: forward berdasarkan IP (layer 3)",
          "Firewall: filter traffic berdasarkan rule",
          "Access Point: jembatan wireless ke wired",
          "Load Balancer: distribusi traffic ke banyak server"
        ]
      },
      {
        title: "IP dan Subnetting",
        points: [
          "IPv4: 32-bit, notasi desimal bertitik",
          "IPv6: 128-bit, notasi heksadesimal",
          "CIDR: notasi prefix (/24 = 256 host)",
          "Subnet mask menentukan porsi network dan host",
          "Kelas IP: A (1-126), B (128-191), C (192-223)",
          "IP privat: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
          "Broadcast: paket dikirim ke semua host di subnet"
        ]
      },
      {
        title: "Port dan Protokol",
        points: [
          "Well-known ports: 0-1023 (HTTP 80, HTTPS 443, SSH 22, DNS 53)",
          "TCP: connection-oriented, reliable, three-way handshake",
          "UDP: connectionless, faster, no guaranteed delivery",
          "FTP (20/21), SMTP (25), POP3 (110), IMAP (143)",
          "RDP (3389), Telnet (23), SNMP (161/162)",
          "Ephemeral ports: 49152-65535 untuk koneksi keluar"
        ]
      },
      {
        title: "DNS",
        points: [
          "Menerjemahkan nama domain ke IP address",
          "Record types: A (IPv4), AAAA (IPv6), CNAME, MX, NS, TXT, PTR",
          "Recursive vs iterative query",
          "DNS caching di client dan resolver",
          "DNS over HTTPS (DoH) dan DNS over TLS (DoT)",
          "Serangan: DNS spoofing, cache poisoning, tunneling"
        ]
      },
      {
        title: "Switching dan VLAN",
        points: [
          "MAC address table: peta port ke MAC",
          "VLAN: segmentasi logis di satu switch",
          "Trunk port: membawa banyak VLAN antar switch",
          "802.1Q: standar tagging VLAN",
          "STP: mencegah loop di jaringan layer 2",
          "Serangan: MAC flooding, VLAN hopping, ARP spoofing"
        ]
      },
      {
        title: "Routing dan NAT",
        points: [
          "Static routing: rute dikonfigurasi manual",
          "Dynamic routing: protokol menghitung rute (OSPF, BGP)",
          "Default gateway: router untuk traffic keluar subnet",
          "NAT: memetakan IP privat ke publik",
          "PAT (Port Address Translation): banyak host satu IP publik",
          "Routing table: daftar network dan next hop"
        ]
      },
      {
        title: "Keamanan Jaringan",
        points: [
          "Firewall rules: allow/deny berdasarkan IP, port, protokol",
          "IDS: mendeteksi anomali (Snort, Suricata)",
          "IPS: mendeteksi dan memblokir traffic berbahaya",
          "VPN: enkripsi koneksi melalui jaringan publik",
          "802.1X: autentikasi perangkat di port jaringan",
          "Network segmentation: pisahkan zona trust"
        ]
      },
      {
        title: "Monitoring dan Troubleshooting",
        points: [
          "ping: uji konektivitas ICMP",
          "traceroute/tracert: lacak jalur paket",
          "nslookup/dig: query DNS manual",
          "netstat/ss: lihat koneksi aktif",
          "tcpdump: capture paket di CLI",
          "Wireshark: analisis paket dengan GUI",
          "Pendekatan: bottom-up (Physical → Application)"
        ]
      }
    ]
  },
  {
    id: "modul-03-linux-dasar",
    number: 3,
    title: "Linux Dasar",
    subtitle: "CLI, filesystem, permission, proses, dan networking",
    description: "Pengantar Linux untuk pemula cybersecurity. Fokus praktik dengan perintah, skrip, dan kebiasaan kerja.",
    icon: "🐧",
    xpReward: 150,
    tips: [
      "Ketik perintah langsung di terminal.",
      "Baca `man` sebelum googling."
    ],
    prerequisites: [
      "Terbiasa dengan command line dasar",
      "VM Linux siap untuk latihan",
      "Koneksi internet untuk repositori",
      "Akses hak sudo di lab"
    ],
    objectives: [
      "Memahami fondasi Linux untuk operasi dan keamanan",
      "Menguasai perintah inti terminal",
      "Menulis skrip shell sederhana",
      "Melakukan troubleshooting sistem dasar"
    ],
    topics: [
      {
        title: "Ekosistem Linux",
        points: [
          "Kernel Linux adalah inti sistem",
          "Distribution mengemas kernel dan userspace",
          "Debian/Ubuntu: APT, stabil untuk server",
          "RHEL/CentOS/Fedora: DNF/YUM, enterprise",
          "Arch: rolling release, custom setup",
          "Kali: distro khusus penetration testing"
        ]
      },
      {
        title: "Navigasi Shell",
        points: [
          "pwd: tampilkan direktori saat ini",
          "ls -la: daftar file dengan detail",
          "cd: berpindah direktori",
          "cat, less, head, tail: baca file",
          "cp, mv, rm, mkdir: kelola file dan direktori",
          "find: cari file berdasarkan kriteria",
          "which, type: lokasi program"
        ]
      },
      {
        title: "Filesystem dan FHS",
        points: [
          "/bin, /sbin: binary sistem esensial",
          "/etc: konfigurasi sistem",
          "/home: direktori pengguna",
          "/var: data variabel (log, cache, mail)",
          "/tmp: file sementara",
          "/proc, /sys: filesystem virtual untuk info kernel",
          "/dev: file perangkat"
        ]
      },
      {
        title: "Permission dan Kepemilikan",
        points: [
          "rwx: read, write, execute untuk user, group, other",
          "chmod: ubah permission (symbolic atau octal)",
          "chown: ubah pemilik file",
          "chgrp: ubah grup file",
          "SUID (4000): jalankan sebagai pemilik file",
          "SGID (2000): jalankan sebagai grup file",
          "Sticky bit (1000): cegah hapus file orang lain"
        ]
      },
      {
        title: "Proses dan Layanan",
        points: [
          "ps aux: daftar semua proses",
          "top/htop: monitoring proses real-time",
          "kill, killall: terminasi proses",
          "systemctl: kelola layanan systemd",
          "journalctl: baca log systemd",
          "bg, fg, &: kelola job background/foreground",
          "cron: penjadwalan tugas berulang"
        ]
      },
      {
        title: "Jaringan di Linux",
        points: [
          "ip addr: lihat konfigurasi IP",
          "ip route: lihat tabel routing",
          "ss -tlnp: lihat port yang listening",
          "iptables/nftables: firewall Linux",
          "curl, wget: request HTTP dari CLI",
          "scp, rsync: transfer file aman",
          "SSH: remote access terenkripsi"
        ]
      },
      {
        title: "Shell Scripting",
        points: [
          "Shebang: #!/bin/bash di baris pertama",
          "Variabel: nama=value, akses $nama",
          "Kondisi: if, elif, else, fi",
          "Loop: for, while, until",
          "Fungsi: function nama() { ... }",
          "Exit code: 0 sukses, non-0 error",
          "Pipe dan redirect: |, >, >>, 2>&1"
        ]
      },
      {
        title: "Keamanan Dasar Linux",
        points: [
          "Prinsip least privilege untuk user",
          "Nonaktifkan root login SSH",
          "Gunakan key-based auth, bukan password",
          "Update paket secara rutin",
          "Audit log: /var/log/auth.log, /var/log/syslog",
          "Firewall: aktifkan dan konfigurasi ufw/iptables",
          "File integrity: tripwire, aide"
        ]
      }
    ]
  },
  {
    id: "modul-04-pengenalan-security",
    number: 4,
    title: "Pengenalan Security",
    subtitle: "Cybersecurity vs InfoSec, prinsip, kontrol, incident response",
    description: "Dasar cybersecurity dan information security. Fokus pada konsep, peran, dan praktik awal.",
    icon: "🛡️",
    xpReward: 200,
    tips: [
      "Mulai dari risiko, bukan dari alat.",
      "Dokumentasikan keputusan keamanan sejak awal."
    ],
    prerequisites: [
      "Menguasai dasar IT dan jaringan",
      "Mampu memakai Linux dan CLI",
      "Punya repo catatan belajar"
    ],
    objectives: [
      "Memahami perbedaan cybersecurity dan information security",
      "Mengenali prinsip dan kontrol keamanan inti",
      "Menilai risiko sederhana secara terstruktur",
      "Mengetahui siklus incident response dasar"
    ],
    topics: [
      {
        title: "Definisi Inti",
        points: [
          "Information Security: lindungi informasi dalam segala bentuk",
          "Cybersecurity: lindungi sistem digital dan jaringan",
          "InfoSec lebih luas: mencakup dokumen fisik juga",
          "Cybersecurity fokus: ancaman digital dan teknis",
          "Keduanya saling melengkapi, bukan saling mengganti"
        ]
      },
      {
        title: "Prinsip Keamanan",
        points: [
          "CIA Triad: Confidentiality, Integrity, Availability",
          "AAA: Authentication, Authorization, Accounting",
          "Non-repudiation: tak bisa menyangkal aksi",
          "Defense in depth: pertahanan berlapis",
          "Least privilege: hak akses minimum",
          "Zero Trust: jangan percaya, selalu verifikasi"
        ]
      },
      {
        title: "Jenis Kontrol Keamanan",
        points: [
          "Preventive: mencegah insiden (firewall, MFA)",
          "Detective: mendeteksi insiden (SIEM, IDS, log review)",
          "Corrective: memperbaiki setelah insiden (patch, restore)",
          "Deterrent: menakut-nakuti (banner peringatan, CCTV)",
          "Compensating: alternatif saat kontrol utama tidak bisa",
          "Kategori: Technical, Administrative, Physical"
        ]
      },
      {
        title: "GRC Ringkas",
        points: [
          "Governance: kebijakan dan arahan dari atas",
          "Risk Management: identifikasi, nilai, mitigasi risiko",
          "Compliance: patuh pada regulasi dan standar",
          "Kebijakan → Standar → Prosedur → Guideline",
          "Contoh regulasi: GDPR, PCI DSS, UU PDP Indonesia"
        ]
      },
      {
        title: "Manajemen Risiko",
        points: [
          "Risiko = Ancaman × Kerentanan × Dampak",
          "Identifikasi aset dan nilainya",
          "Identifikasi ancaman dan kerentanan",
          "Hitung probabilitas dan dampak",
          "Strategi: mitigate, accept, transfer, avoid",
          "Risk register: dokumentasi semua risiko"
        ]
      },
      {
        title: "Kerangka Kerja Populer",
        points: [
          "NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover",
          "ISO 27001: ISMS berbasis standar internasional",
          "CIS Controls: prioritas kontrol praktikal",
          "MITRE ATT&CK: taksonomi teknik serangan",
          "OWASP: keamanan aplikasi web"
        ]
      },
      {
        title: "Incident Response Dasar",
        points: [
          "Preparation: rencana, tim, dan alat siap",
          "Identification: deteksi dan validasi insiden",
          "Containment: batasi dampak penyebaran",
          "Eradication: hapus akar penyebab",
          "Recovery: kembalikan sistem ke normal",
          "Lessons Learned: evaluasi dan perbaiki proses"
        ]
      },
      {
        title: "Threat Intelligence dan ATT&CK",
        points: [
          "Threat intelligence: data tentang ancaman yang relevan",
          "IoC (Indicators of Compromise): tanda kompromi",
          "TTP (Tactics, Techniques, Procedures): perilaku aktor",
          "MITRE ATT&CK matrix: peta teknik serangan",
          "Kill chain: tahapan serangan dari rekognisi ke aksi",
          "Threat hunting: proaktif mencari ancaman tersembunyi"
        ]
      }
    ]
  },
  {
    id: "modul-05-web-security-dasar",
    number: 5,
    title: "Web Security Dasar",
    subtitle: "HTTP, auth, XSS, injection, CORS, CSP, dan WAF",
    description: "Dasar keamanan web. Fokus pada serangan umum dan mitigasinya. Utamakan prinsip, bukan trik semata.",
    icon: "🕸️",
    xpReward: 200,
    tips: [
      "Latih di lab aman seperti Web Security Academy.",
      "Dokumentasikan temuan dan perbaikannya."
    ],
    prerequisites: [
      "Menguasai HTTP dan dasar web",
      "Familiar dengan developer tools browser",
      "Punya lab keamanan web (DVWA/WebGoat)"
    ],
    objectives: [
      "Memahami cara kerja web secara aman",
      "Mengenali kerentanan web paling umum",
      "Menguji dan melaporkan temuan secara etis",
      "Menerapkan mitigasi dasar"
    ],
    topics: [
      {
        title: "Dasar HTTP dan Web",
        points: [
          "HTTP: stateless, text-based protocol",
          "Request methods: GET, POST, PUT, DELETE, PATCH",
          "Status codes: 2xx sukses, 3xx redirect, 4xx client error, 5xx server error",
          "Headers penting: Host, Content-Type, Authorization, Cookie",
          "HTTPS: HTTP + TLS encryption",
          "HTTP/2 dan HTTP/3: performa lebih baik"
        ]
      },
      {
        title: "Sesi, Cookie, dan State",
        points: [
          "Cookie: key=value yang disimpan browser",
          "Session ID: identifier unik untuk sesi pengguna",
          "Cookie flags: HttpOnly, Secure, SameSite",
          "JWT (JSON Web Token): token stateless",
          "Session hijacking: mencuri sesi pengguna",
          "Session fixation: memaksa sesi tertentu"
        ]
      },
      {
        title: "Authentication dan Authorization",
        points: [
          "Authentication: buktikan identitas (siapa kamu?)",
          "Authorization: tentukan hak akses (boleh apa?)",
          "Basic Auth: username:password di header (base64)",
          "Token-based: JWT, OAuth 2.0, OIDC",
          "MFA: lapisan tambahan selain password",
          "Broken authentication: brute force, credential stuffing"
        ]
      },
      {
        title: "OWASP Top 10 Ringkas",
        points: [
          "A01 Broken Access Control: akses tanpa izin",
          "A02 Cryptographic Failures: enkripsi lemah/salah",
          "A03 Injection: SQL, NoSQL, OS command injection",
          "A04 Insecure Design: arsitektur tanpa security",
          "A05 Security Misconfiguration: default config, debug on",
          "A06 Vulnerable Components: library usang",
          "A07 Auth Failures: kelemahan login/session"
        ]
      },
      {
        title: "XSS (Cross-Site Scripting)",
        points: [
          "Reflected XSS: payload di URL, dieksekusi korban",
          "Stored XSS: payload tersimpan di server",
          "DOM-based XSS: manipulasi DOM di client",
          "Dampak: curi cookie, redirect, deface",
          "Mitigasi: escape output, CSP, HttpOnly cookie",
          "Testing: inject <script>alert(1)</script>"
        ]
      },
      {
        title: "Injection (SQL, NoSQL, OS)",
        points: [
          "SQL injection: manipulasi query database",
          "' OR 1=1 --: bypass login klasik",
          "Union-based: gabung hasil query",
          "Blind SQLi: inferensi dari response time/behavior",
          "NoSQL injection: manipulasi query MongoDB/dsb",
          "Mitigasi: parameterized queries, input validation, WAF"
        ]
      },
      {
        title: "Same-Origin Policy dan CORS",
        points: [
          "SOP: browser batasi akses cross-origin",
          "Origin = scheme + host + port",
          "CORS: header untuk izinkan cross-origin",
          "Access-Control-Allow-Origin: domain yang diizinkan",
          "Preflight request: OPTIONS sebelum request utama",
          "Misconfigured CORS: wildcard + credentials = bahaya"
        ]
      },
      {
        title: "API Security Dasar",
        points: [
          "API key: token akses sederhana",
          "Rate limiting: batasi request per waktu",
          "Input validation: validasi semua input API",
          "BOLA (Broken Object Level Auth): akses objek lain",
          "Mass assignment: kirim field berlebih",
          "Logging: catat semua request API"
        ]
      }
    ]
  },
  {
    id: "modul-06-cloud-security-dasar",
    number: 6,
    title: "Cloud Security Dasar",
    subtitle: "IAM, jaringan virtual, KMS, logging, IaC, guardrails",
    description: "Dasar cloud computing dan keamanan. Fokus pada konsep lintas vendor. Gunakan lab aman untuk eksperimen.",
    icon: "☁️",
    xpReward: 250,
    tips: [
      "Pahami Shared Responsibility Model terlebih dahulu.",
      "Tanpa itu, kontrol sering salah tempat."
    ],
    prerequisites: [
      "Menguasai jaringan dan Linux dasar",
      "Punya akun cloud latihan atau sandbox",
      "Terbiasa dengan terminal dan Git"
    ],
    objectives: [
      "Memahami konsep cloud lintas penyedia",
      "Menetapkan kontrol keamanan prioritas",
      "Menggunakan identitas dengan prinsip least privilege",
      "Menangani insiden dasar pada lingkungan cloud"
    ],
    topics: [
      {
        title: "Model Layanan dan Deployment",
        points: [
          "IaaS: Anda kelola OS ke atas (EC2, Compute Engine)",
          "PaaS: Anda kelola aplikasi dan data (Heroku, App Engine)",
          "SaaS: vendor kelola semua (Gmail, Office 365)",
          "Public cloud: resource bersama, multi-tenant",
          "Private cloud: infrastruktur khusus organisasi",
          "Hybrid cloud: gabungan public dan private"
        ]
      },
      {
        title: "Shared Responsibility Model",
        points: [
          "Vendor bertanggung jawab: keamanan OF the cloud",
          "Pelanggan bertanggung jawab: keamanan IN the cloud",
          "IaaS: pelanggan kelola OS, network config, data",
          "PaaS: pelanggan kelola kode dan data",
          "SaaS: pelanggan kelola akses dan data",
          "Kesalahpahaman model = celah keamanan"
        ]
      },
      {
        title: "Identitas dan IAM",
        points: [
          "IAM: kelola user, group, role, policy",
          "Principle of least privilege: hak akses minimum",
          "MFA wajib untuk semua user, terutama admin",
          "Service account: identitas untuk layanan",
          "Temporary credentials: hindari long-term keys",
          "Cross-account access: gunakan assume role"
        ]
      },
      {
        title: "Jaringan Cloud",
        points: [
          "VPC: jaringan virtual terisolasi",
          "Subnet: public (internet) dan private (internal)",
          "Security Group: firewall stateful per instance",
          "NACL: firewall stateless per subnet",
          "Internet Gateway: akses internet untuk VPC",
          "VPN dan Direct Connect: koneksi hybrid"
        ]
      },
      {
        title: "Enkripsi dan KMS",
        points: [
          "Encryption at rest: data disimpan terenkripsi",
          "Encryption in transit: TLS untuk data bergerak",
          "KMS (Key Management Service): kelola kunci",
          "CMK (Customer Managed Key): kunci milik pelanggan",
          "Envelope encryption: data key dibungkus master key",
          "HSM: hardware khusus untuk kunci kritis"
        ]
      },
      {
        title: "Logging dan Monitoring",
        points: [
          "CloudTrail (AWS) / Activity Log (Azure): log aktivitas API",
          "CloudWatch / Azure Monitor: metrik dan alert",
          "VPC Flow Logs: log traffic jaringan",
          "SIEM integration: kirim log ke platform analisis",
          "Alert rules: notifikasi untuk anomali",
          "Retention policy: simpan log sesuai regulasi"
        ]
      },
      {
        title: "DevSecOps dan IaC",
        points: [
          "IaC (Infrastructure as Code): Terraform, CloudFormation",
          "Keuntungan: repeatable, version-controlled, auditable",
          "Security scanning: checkov, tfsec, KICS",
          "CI/CD pipeline: integrasi security check",
          "Policy as Code: OPA, Sentinel",
          "Shift-left: security lebih awal di development"
        ]
      },
      {
        title: "Ancaman Umum di Cloud",
        points: [
          "Misconfiguration: S3 bucket public, open security group",
          "Over-permissioned IAM: hak akses berlebihan",
          "Exposed credentials: API key di repo publik",
          "Data leakage: data sensitif tanpa enkripsi",
          "Account hijacking: credential compromise",
          "Insider threat: penyalahgunaan akses internal"
        ]
      }
    ]
  }
];
