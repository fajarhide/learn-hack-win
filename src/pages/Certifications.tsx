import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { certifications, type Certification } from "@/data/certifications";
import { ChevronDown, ExternalLink, ArrowLeft } from "lucide-react";

const levelColors: Record<string, string> = {
  Entry: "bg-primary/20 text-primary",
  Intermediate: "bg-accent/20 text-accent",
  Advanced: "bg-yellow-500/20 text-yellow-400",
  Expert: "bg-red-500/20 text-red-400",
};

function CertCard({ cert, onClick }: { cert: Certification; onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="text-left w-full p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all group"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-2xl">
          {cert.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
              {cert.name}
            </h3>
            {cert.isFree && (
              <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-mono">GRATIS</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground font-mono">{cert.provider}</p>
        </div>
        <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${levelColors[cert.level]}`}>
          {cert.level}
        </span>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">{cert.description}</p>
      <div className="flex items-center gap-4 mt-3 text-xs font-mono text-muted-foreground">
        <span>⏱ {cert.duration}</span>
        <span>📝 {cert.questions}</span>
        <span>💰 {cert.price}</span>
      </div>
    </motion.button>
  );
}

function CertDetail({ cert, onBack }: { cert: Certification; onBack: () => void }) {
  const [domainsOpen, setDomainsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-mono text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" /> Kembali ke daftar
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-3xl box-glow">
          {cert.icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-foreground">{cert.name}</h1>
            {cert.isFree && (
              <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-mono">GRATIS</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{cert.fullName}</p>
          <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-mono ${levelColors[cert.level]}`}>
            {cert.level} • {cert.provider}
          </span>
        </div>
      </div>

      <p className="text-muted-foreground mb-8">{cert.description}</p>

      {/* Exam Facts */}
      <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Kode Ujian", value: cert.examCode },
          { label: "Durasi", value: cert.duration },
          { label: "Soal", value: cert.questions },
          { label: "Skor Lulus", value: cert.passingScore },
          { label: "Biaya", value: cert.price },
          { label: "Rencana Belajar", value: cert.studyPlan },
          { label: "Bahasa", value: cert.languages.join(", ") },
        ].map((f) => (
          <div key={f.label} className="p-3 rounded-lg bg-secondary border border-border">
            <div className="text-xs font-mono text-muted-foreground mb-1">{f.label}</div>
            <div className="text-sm font-medium text-foreground">{f.value}</div>
          </div>
        ))}
      </div>

      {/* Prerequisites */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-foreground mb-3">
          <span className="text-primary">&gt;</span> Prasyarat
        </h2>
        <div className="space-y-1.5">
          {cert.prerequisites.map((p, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-0.5">•</span>
              <span className="text-muted-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Domains */}
      <div className="mb-8">
        <button
          onClick={() => setDomainsOpen(!domainsOpen)}
          className="flex items-center justify-between w-full mb-3"
        >
          <h2 className="text-lg font-bold text-foreground">
            <span className="text-primary">&gt;</span> Domain & Bobot Ujian
          </h2>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${domainsOpen ? "rotate-180" : ""}`} />
        </button>
        {domainsOpen && (
          <div className="space-y-2">
            {cert.domains.map((d) => (
              <div key={d.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary border border-border">
                <span className="text-sm text-foreground">{d.name}</span>
                <span className="text-sm font-mono text-primary font-bold">{d.weight}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-foreground mb-3">
          <span className="text-primary">&gt;</span> Resources
        </h2>
        <div className="grid gap-2">
          {cert.resources.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/30 transition-colors text-sm"
            >
              <ExternalLink className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-foreground">{r.name}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

import { Helmet } from "react-helmet-async";

export default function CertificationsPage() {
  const [selected, setSelected] = useState<Certification | null>(null);
  const [filterLevel, setFilterLevel] = useState<string>("all");

  const filtered = filterLevel === "all"
    ? certifications
    : certifications.filter((c) => c.level === filterLevel);

  return (
    <Layout>
      <Helmet>
        <title>Sertifikasi Cybersecurity Terlengkap | Persiapan Karir Keamanan Informasi</title>
        <meta name="description" content="Kumpulan panduan sertifikasi cybersecurity terpopuler mulai dari CompTIA Security+, CEH, hingga OSCP. Temukan kurikulum, harga, dan roadmap belajar." />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {selected ? (
            <CertDetail key={selected.id} cert={selected} onBack={() => setSelected(null)} />
          ) : (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-10">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  <span className="text-primary">&gt;</span> Sertifikasi Cybersecurity
                </h1>
                <p className="text-muted-foreground">
                  Panduan lengkap sertifikasi cybersecurity dari entry-level hingga expert.
                </p>
              </div>

              {/* Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["all", "Entry", "Intermediate", "Advanced", "Expert"].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setFilterLevel(lvl)}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                      filterLevel === lvl
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lvl === "all" ? "Semua" : lvl}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map((cert) => (
                  <CertCard key={cert.id} cert={cert} onClick={() => setSelected(cert)} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
