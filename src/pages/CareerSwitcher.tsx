import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { careerPaths, type CareerPath } from "@/data/career-switcher";
import { ChevronRight, ChevronDown, ExternalLink, ArrowLeft } from "lucide-react";

function CareerCard({ path, onClick }: { path: CareerPath; onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="text-left w-full p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all group"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-2xl">
          {path.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
            {path.title}
          </h3>
          <p className="text-xs text-muted-foreground font-mono">{path.subtitle}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">{path.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {path.roles.slice(0, 3).map((r) => (
          <span key={r.role} className="px-2 py-0.5 rounded-full bg-secondary text-xs font-mono text-muted-foreground">
            {r.role}
          </span>
        ))}
        {path.roles.length > 3 && (
          <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-mono text-primary">
            +{path.roles.length - 3} lainnya
          </span>
        )}
      </div>
    </motion.button>
  );
}

function CareerDetail({ path, onBack }: { path: CareerPath; onBack: () => void }) {
  const [openStep, setOpenStep] = useState<number | null>(0);

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
          {path.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">{path.title}</h1>
          <p className="text-sm text-muted-foreground">{path.subtitle}</p>
        </div>
      </div>

      <p className="text-muted-foreground mb-8">{path.description}</p>

      {/* Why fit */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-foreground mb-4">
          <span className="text-primary">&gt;</span> Kenapa Cocok?
        </h2>
        <div className="grid gap-2">
          {path.whyFit.map((w, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-0.5">✓</span>
              <span className="text-muted-foreground">{w}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Target Roles */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-foreground mb-4">
          <span className="text-primary">&gt;</span> Role Target
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-mono text-xs text-muted-foreground">Role</th>
                <th className="text-left py-2 pr-4 font-mono text-xs text-muted-foreground">Level</th>
                <th className="text-left py-2 font-mono text-xs text-muted-foreground">Fokus</th>
              </tr>
            </thead>
            <tbody>
              {path.roles.map((r) => (
                <tr key={r.role} className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">{r.role}</td>
                  <td className="py-2 pr-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                      r.level === "Entry" ? "bg-primary/20 text-primary" :
                      r.level === "Mid" ? "bg-accent/20 text-accent" :
                      "bg-secondary text-muted-foreground"
                    }`}>{r.level}</span>
                  </td>
                  <td className="py-2 text-muted-foreground">{r.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Roadmap */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-foreground mb-4">
          <span className="text-primary">&gt;</span> Roadmap
        </h2>
        <div className="space-y-2">
          {path.roadmap.map((step, i) => (
            <div key={i} className="rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => setOpenStep(openStep === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-mono text-sm font-medium text-foreground">{step.step}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${openStep === i ? "rotate-180" : ""}`} />
              </button>
              {openStep === i && (
                <div className="px-4 pb-4 space-y-1.5">
                  {step.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5 font-mono text-xs">{j + 1}.</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-foreground mb-4">
          <span className="text-primary">&gt;</span> Sertifikasi yang Direkomendasikan
        </h2>
        <div className="flex flex-wrap gap-2">
          {path.certifications.map((c) => (
            <span key={c} className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-sm font-mono text-primary">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-foreground mb-4">
          <span className="text-primary">&gt;</span> Resources
        </h2>
        <div className="grid gap-2">
          {path.resources.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/30 transition-colors text-sm"
            >
              <ExternalLink className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-foreground">{r.name}</span>
              <span className="text-xs text-muted-foreground ml-auto font-mono truncate max-w-[200px]">{r.url}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CareerSwitcher() {
  const [selected, setSelected] = useState<CareerPath | null>(null);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {selected ? (
            <CareerDetail key={selected.id} path={selected} onBack={() => setSelected(null)} />
          ) : (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-10">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  <span className="text-primary">&gt;</span> Panduan Switch Karir Cybersecurity
                </h1>
                <p className="text-muted-foreground">
                  Cara beralih profesi menjadi SOC Analyst, Penetration Tester, atau Security Engineer dari latar belakang Non-IT, Software Developer, QA, hingga Data Analyst.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {careerPaths.map((path) => (
                  <CareerCard key={path.id} path={path} onClick={() => setSelected(path)} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
