export interface Challenge {
  id: string;
  moduleId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  xpReward: number;
  difficulty: "easy" | "medium" | "hard";
}

export const challenges: Challenge[] = [
  // Modul 1 - Dasar IT
  {
    id: "c1-1", moduleId: "modul-01-dasar-it",
    question: "Apa kepanjangan dari CIA Triad dalam keamanan informasi?",
    options: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Computer Information Access", "Cyber Intelligence Analysis"],
    correctAnswer: 1, explanation: "CIA Triad adalah prinsip dasar keamanan: Confidentiality (kerahasiaan), Integrity (integritas), Availability (ketersediaan).", xpReward: 10, difficulty: "easy"
  },
  {
    id: "c1-2", moduleId: "modul-01-dasar-it",
    question: "Apa perbedaan utama antara Blue Team dan Red Team?",
    options: ["Blue Team menyerang, Red Team bertahan", "Blue Team bertahan, Red Team menyerang", "Keduanya sama saja", "Blue Team untuk cloud, Red Team untuk on-premise"],
    correctAnswer: 1, explanation: "Blue Team fokus pada pertahanan (monitoring, incident response, hardening), sedangkan Red Team fokus pada serangan (penetration testing, adversary emulation).", xpReward: 10, difficulty: "easy"
  },
  {
    id: "c1-3", moduleId: "modul-01-dasar-it",
    question: "Fungsi dari hypervisor tipe 1 (bare-metal) adalah?",
    options: ["Menjalankan OS di atas OS lain", "Menjalankan VM langsung di hardware", "Mengenkripsi hard drive", "Mengelola jaringan virtual"],
    correctAnswer: 1, explanation: "Hypervisor tipe 1 berjalan langsung di hardware tanpa OS host, memberikan performa lebih baik untuk virtualisasi.", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c1-4", moduleId: "modul-01-dasar-it",
    question: "Apa perbedaan hashing dan encryption?",
    options: ["Tidak ada perbedaan", "Hashing bisa di-reverse, encryption tidak", "Hashing satu arah, encryption dua arah", "Encryption lebih cepat dari hashing"],
    correctAnswer: 2, explanation: "Hashing adalah fungsi satu arah (one-way) yang tidak bisa dikembalikan, sedangkan encryption bisa didekripsi dengan kunci yang tepat.", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c1-5", moduleId: "modul-01-dasar-it",
    question: "Alat mana yang digunakan untuk analisis paket jaringan?",
    options: ["Metasploit", "Wireshark", "Burp Suite", "CyberChef"],
    correctAnswer: 1, explanation: "Wireshark adalah tool untuk capture dan analisis paket jaringan secara detail.", xpReward: 10, difficulty: "easy"
  },

  // Modul 2 - Dasar Jaringan
  {
    id: "c2-1", moduleId: "modul-02-dasar-jaringan",
    question: "Berapa jumlah layer pada model OSI?",
    options: ["4 layer", "5 layer", "7 layer", "6 layer"],
    correctAnswer: 2, explanation: "Model OSI memiliki 7 layer: Physical, Data Link, Network, Transport, Session, Presentation, Application.", xpReward: 10, difficulty: "easy"
  },
  {
    id: "c2-2", moduleId: "modul-02-dasar-jaringan",
    question: "Port default untuk SSH adalah?",
    options: ["21", "22", "23", "25"],
    correctAnswer: 1, explanation: "SSH menggunakan port 22 secara default. Port 21 untuk FTP, 23 untuk Telnet, 25 untuk SMTP.", xpReward: 10, difficulty: "easy"
  },
  {
    id: "c2-3", moduleId: "modul-02-dasar-jaringan",
    question: "Apa fungsi dari VLAN?",
    options: ["Menghubungkan jaringan WAN", "Segmentasi logis di satu switch", "Enkripsi traffic jaringan", "Monitoring bandwidth"],
    correctAnswer: 1, explanation: "VLAN (Virtual LAN) memungkinkan segmentasi logis jaringan dalam satu switch fisik.", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c2-4", moduleId: "modul-02-dasar-jaringan",
    question: "Subnet mask /24 menyediakan berapa host yang bisa digunakan?",
    options: ["256", "254", "255", "128"],
    correctAnswer: 1, explanation: "/24 = 256 alamat total, dikurangi network address dan broadcast address = 254 host yang bisa digunakan.", xpReward: 20, difficulty: "hard"
  },
  {
    id: "c2-5", moduleId: "modul-02-dasar-jaringan",
    question: "Perbedaan utama TCP dan UDP adalah?",
    options: ["TCP lebih cepat", "UDP menjamin pengiriman", "TCP connection-oriented, UDP connectionless", "Keduanya sama"],
    correctAnswer: 2, explanation: "TCP bersifat connection-oriented dengan three-way handshake dan jaminan pengiriman, sedangkan UDP connectionless dan lebih cepat tapi tanpa jaminan.", xpReward: 10, difficulty: "easy"
  },

  // Modul 3 - Linux Dasar
  {
    id: "c3-1", moduleId: "modul-03-linux-dasar",
    question: "Perintah untuk melihat direktori saat ini di Linux?",
    options: ["ls", "cd", "pwd", "dir"],
    correctAnswer: 2, explanation: "pwd (print working directory) menampilkan path direktori kerja saat ini.", xpReward: 10, difficulty: "easy"
  },
  {
    id: "c3-2", moduleId: "modul-03-linux-dasar",
    question: "Apa arti permission 755 dalam octal?",
    options: ["rwxr-xr-x", "rwxrwxrwx", "rw-r--r--", "rwx------"],
    correctAnswer: 0, explanation: "755 = rwx (7=owner), r-x (5=group), r-x (5=other). Owner bisa baca/tulis/eksekusi, yang lain hanya baca dan eksekusi.", xpReward: 20, difficulty: "hard"
  },
  {
    id: "c3-3", moduleId: "modul-03-linux-dasar",
    question: "Direktori /etc di Linux berisi?",
    options: ["File temporary", "Binary program", "Konfigurasi sistem", "Log sistem"],
    correctAnswer: 2, explanation: "/etc berisi file konfigurasi sistem seperti passwd, fstab, hosts, dan konfigurasi layanan.", xpReward: 10, difficulty: "easy"
  },
  {
    id: "c3-4", moduleId: "modul-03-linux-dasar",
    question: "Perintah untuk melihat port yang sedang listening?",
    options: ["ls -la", "ps aux", "ss -tlnp", "chmod 777"],
    correctAnswer: 2, explanation: "ss -tlnp menampilkan socket TCP yang listening (-l) dengan nomor port (-n) dan info proses (-p).", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c3-5", moduleId: "modul-03-linux-dasar",
    question: "Apa fungsi SUID bit pada file di Linux?",
    options: ["Menghapus file otomatis", "Menjalankan file sebagai pemilik file", "Mengenkripsi file", "Membuat file read-only"],
    correctAnswer: 1, explanation: "SUID (Set User ID) bit memungkinkan file dijalankan dengan privilege pemilik file, bukan user yang menjalankan.", xpReward: 20, difficulty: "hard"
  },

  // Modul 4 - Pengenalan Security
  {
    id: "c4-1", moduleId: "modul-04-pengenalan-security",
    question: "Prinsip 'Least Privilege' berarti?",
    options: ["Memberikan akses penuh ke semua user", "Hak akses minimum yang dibutuhkan", "Tidak memberikan akses sama sekali", "Akses hanya untuk admin"],
    correctAnswer: 1, explanation: "Least Privilege adalah prinsip memberikan hak akses minimum yang diperlukan untuk menjalankan tugas.", xpReward: 10, difficulty: "easy"
  },
  {
    id: "c4-2", moduleId: "modul-04-pengenalan-security",
    question: "Urutan fase Incident Response yang benar?",
    options: [
      "Identification → Recovery → Containment",
      "Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned",
      "Detection → Elimination → Restoration",
      "Analysis → Repair → Reporting"
    ],
    correctAnswer: 1, explanation: "Siklus IR: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned.", xpReward: 20, difficulty: "hard"
  },
  {
    id: "c4-3", moduleId: "modul-04-pengenalan-security",
    question: "NIST Cybersecurity Framework terdiri dari fungsi apa saja?",
    options: [
      "Scan, Detect, Respond",
      "Plan, Build, Run",
      "Identify, Protect, Detect, Respond, Recover",
      "Prevent, Monitor, Report"
    ],
    correctAnswer: 2, explanation: "NIST CSF memiliki 5 fungsi: Identify, Protect, Detect, Respond, Recover.", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c4-4", moduleId: "modul-04-pengenalan-security",
    question: "Apa itu Zero Trust?",
    options: ["Tidak mempercayai siapapun, selalu verifikasi", "Menonaktifkan semua firewall", "Trust but verify", "Hanya trust internal network"],
    correctAnswer: 0, explanation: "Zero Trust adalah prinsip 'never trust, always verify' - tidak pernah mempercayai entitas manapun secara otomatis.", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c4-5", moduleId: "modul-04-pengenalan-security",
    question: "Kontrol tipe 'Detective' berfungsi untuk?",
    options: ["Mencegah serangan", "Mendeteksi insiden yang terjadi", "Memperbaiki kerusakan", "Menakut-nakuti penyerang"],
    correctAnswer: 1, explanation: "Kontrol Detective berfungsi untuk mendeteksi insiden yang sedang atau telah terjadi, contohnya SIEM, IDS, log review.", xpReward: 10, difficulty: "easy"
  },

  // Modul 5 - Web Security
  {
    id: "c5-1", moduleId: "modul-05-web-security-dasar",
    question: "Apa itu SQL Injection?",
    options: ["Menyuntikkan CSS ke halaman", "Manipulasi query database melalui input", "Mengubah DNS record", "Mengirim email spam"],
    correctAnswer: 1, explanation: "SQL Injection adalah teknik menyuntikkan perintah SQL berbahaya melalui input user untuk memanipulasi database.", xpReward: 10, difficulty: "easy"
  },
  {
    id: "c5-2", moduleId: "modul-05-web-security-dasar",
    question: "Flag HttpOnly pada cookie berfungsi untuk?",
    options: ["Mengenkripsi cookie", "Mencegah akses cookie via JavaScript", "Menghapus cookie otomatis", "Membuat cookie permanen"],
    correctAnswer: 1, explanation: "HttpOnly flag mencegah cookie diakses oleh JavaScript (document.cookie), melindungi dari XSS cookie theft.", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c5-3", moduleId: "modul-05-web-security-dasar",
    question: "Apa perbedaan Reflected XSS dan Stored XSS?",
    options: [
      "Tidak ada perbedaan",
      "Reflected: payload di URL; Stored: tersimpan di server",
      "Reflected lebih berbahaya",
      "Stored hanya di mobile app"
    ],
    correctAnswer: 1, explanation: "Reflected XSS: payload ada di URL dan dieksekusi saat korban mengklik link. Stored XSS: payload tersimpan di server dan dieksekusi untuk semua pengunjung.", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c5-4", moduleId: "modul-05-web-security-dasar",
    question: "A01 dalam OWASP Top 10 adalah?",
    options: ["Injection", "Broken Access Control", "Cryptographic Failures", "Security Misconfiguration"],
    correctAnswer: 1, explanation: "A01:2021 Broken Access Control adalah kerentanan #1 di OWASP Top 10 terbaru.", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c5-5", moduleId: "modul-05-web-security-dasar",
    question: "Mitigasi utama untuk SQL Injection adalah?",
    options: ["Firewall", "Parameterized queries", "HTTPS", "Strong passwords"],
    correctAnswer: 1, explanation: "Parameterized queries (prepared statements) adalah cara paling efektif mencegah SQL Injection karena memisahkan data dari kode SQL.", xpReward: 10, difficulty: "easy"
  },

  // Modul 6 - Cloud Security
  {
    id: "c6-1", moduleId: "modul-06-cloud-security-dasar",
    question: "Dalam Shared Responsibility Model, siapa yang bertanggung jawab atas keamanan data di IaaS?",
    options: ["Cloud provider sepenuhnya", "Pelanggan", "Keduanya sama rata", "Tidak ada yang bertanggung jawab"],
    correctAnswer: 1, explanation: "Dalam IaaS, pelanggan bertanggung jawab atas keamanan IN the cloud (OS, data, aplikasi), provider bertanggung jawab atas keamanan OF the cloud (hardware, jaringan fisik).", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c6-2", moduleId: "modul-06-cloud-security-dasar",
    question: "Apa itu VPC dalam cloud computing?",
    options: ["Virtual Private Computer", "Virtual Private Cloud - jaringan virtual terisolasi", "Very Protected Connection", "Virtual Processing Center"],
    correctAnswer: 1, explanation: "VPC (Virtual Private Cloud) adalah jaringan virtual terisolasi di dalam cloud yang memungkinkan Anda mengontrol konfigurasi jaringan.", xpReward: 10, difficulty: "easy"
  },
  {
    id: "c6-3", moduleId: "modul-06-cloud-security-dasar",
    question: "Ancaman cloud yang paling umum adalah?",
    options: ["DDoS attack", "Misconfiguration", "Physical theft", "Power outage"],
    correctAnswer: 1, explanation: "Misconfiguration (S3 bucket public, open security group) adalah ancaman paling umum di cloud karena kelalaian konfigurasi.", xpReward: 10, difficulty: "easy"
  },
  {
    id: "c6-4", moduleId: "modul-06-cloud-security-dasar",
    question: "Apa fungsi KMS (Key Management Service)?",
    options: ["Monitoring jaringan", "Mengelola kunci enkripsi", "Load balancing", "DNS management"],
    correctAnswer: 1, explanation: "KMS digunakan untuk membuat, mengelola, dan mengontrol kunci kriptografi yang digunakan untuk mengenkripsi data.", xpReward: 15, difficulty: "medium"
  },
  {
    id: "c6-5", moduleId: "modul-06-cloud-security-dasar",
    question: "Prinsip 'Shift-Left' dalam DevSecOps berarti?",
    options: ["Pindahkan server ke kiri", "Integrasikan security lebih awal di development", "Deploy lebih cepat", "Gunakan left-hand rule"],
    correctAnswer: 1, explanation: "Shift-Left berarti mengintegrasikan praktik keamanan sedini mungkin dalam siklus development, bukan di akhir.", xpReward: 20, difficulty: "hard"
  },
];
