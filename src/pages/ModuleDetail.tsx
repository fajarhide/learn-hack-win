import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ChallengeQuiz from "@/components/ChallengeQuiz";
import { modules } from "@/data/modules";
import { challenges } from "@/data/challenges";
import { completeModule, getProgress, updateLeaderboard } from "@/lib/gamification";
import { ArrowLeft, CheckCircle, Target, BookOpen, Lightbulb } from "lucide-react";

import { Helmet } from "react-helmet-async";

export default function ModuleDetail() {
  const { id } = useParams();
  const mod = modules.find((m) => m.id === id);
  const [progress, setProgress] = useState(getProgress());
  const [showQuiz, setShowQuiz] = useState(false);
  const [expandedTopic, setExpandedTopic] = useState<number | null>(0);

  if (!mod) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Modul tidak ditemukan</h1>
          <Link to="/modules" className="mt-4 inline-block text-primary font-mono hover:underline">
            Kembali ke Modul
          </Link>
        </div>
      </Layout>
    );
  }

  const moduleChallenges = challenges.filter((c) => c.moduleId === mod.id);
  const completed = progress.completedModules.includes(mod.id);

  const handleComplete = () => {
    const p = completeModule(mod.id, mod.xpReward);
    updateLeaderboard(p);
    setProgress(p);
  };

  return (
    <Layout>
      <Helmet>
        <title>{mod.title} | Belajar Cybersecurity</title>
        <meta name="description" content={mod.description} />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        {/* Back nav */}
        <Link to="/modules" className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4" /> Kembali
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-4xl box-glow">
              {mod.icon}
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground">MODUL {String(mod.number).padStart(2, "0")}</div>
              <h1 className="text-3xl font-bold text-foreground">{mod.title}</h1>
            </div>
            {completed && <CheckCircle className="h-6 w-6 text-primary ml-auto" />}
          </div>
          <p className="text-muted-foreground max-w-2xl">{mod.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Tips */}
            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                <span className="font-mono text-sm font-bold text-primary">Tips</span>
              </div>
              {mod.tips.map((tip, i) => (
                <p key={i} className="text-sm text-foreground/80 font-mono">• {tip}</p>
              ))}
            </div>

            {/* Topics */}
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" /> Materi
            </h2>
            {mod.topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setExpandedTopic(expandedTopic === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center font-mono text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-bold text-foreground">{topic.title}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">{expandedTopic === i ? "▲" : "▼"}</span>
                </button>
                {expandedTopic === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="border-t border-border"
                  >
                    <ul className="p-4 space-y-2">
                      {topic.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-card-foreground">
                          <span className="text-primary mt-0.5 flex-shrink-0">›</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Complete button */}
            {!completed && (
              <div className="pt-6">
                <button
                  onClick={handleComplete}
                  className="w-full py-4 bg-primary text-primary-foreground font-mono font-bold rounded-xl box-glow hover:brightness-110 transition-all text-lg"
                >
                  ✓ Tandai Selesai (+{mod.xpReward} XP)
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Objectives */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <h3 className="font-mono text-sm font-bold text-foreground mb-3">🎯 Tujuan Belajar</h3>
              <ul className="space-y-2">
                {mod.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <h3 className="font-mono text-sm font-bold text-foreground mb-3">📋 Prasyarat</h3>
              <ul className="space-y-2">
                {mod.prerequisites.map((pre, i) => (
                  <li key={i} className="text-sm text-muted-foreground">• {pre}</li>
                ))}
              </ul>
            </div>

            {/* Module quiz */}
            <div className="p-5 rounded-xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-accent" />
                <h3 className="font-mono text-sm font-bold text-foreground">Challenge Quiz</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {moduleChallenges.length} soal untuk menguji pemahamanmu.
              </p>
              <button
                onClick={() => setShowQuiz(!showQuiz)}
                className="w-full py-2.5 border border-accent/30 text-accent font-mono text-sm font-bold rounded-lg hover:bg-accent/10 transition-all"
              >
                {showQuiz ? "Tutup Quiz" : "Mulai Quiz"}
              </button>
            </div>
          </div>
        </div>

        {/* Quiz section */}
        {showQuiz && moduleChallenges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-accent" /> Challenge: {mod.title}
            </h2>
            <ChallengeQuiz
              challenges={moduleChallenges}
              onComplete={() => setProgress(getProgress())}
            />
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
