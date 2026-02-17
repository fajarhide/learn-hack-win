import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ChallengeQuiz from "@/components/ChallengeQuiz";
import { challenges } from "@/data/challenges";
import { modules } from "@/data/modules";
import { getProgress } from "@/lib/gamification";
import { Target, Zap } from "lucide-react";

export default function Challenges() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const progress = getProgress();

  const filteredChallenges = selectedModule
    ? challenges.filter((c) => c.moduleId === selectedModule)
    : challenges;

  const completedCount = filteredChallenges.filter((c) =>
    progress.completedChallenges.includes(c.id)
  ).length;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            <Target className="inline h-8 w-8 text-accent mr-2" />
            Challenge Quiz
          </h1>
          <p className="text-muted-foreground mb-8">
            Uji pemahamanmu dan kumpulkan XP. Pilih modul atau coba semua sekaligus!
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="px-4 py-2 rounded-lg bg-card border border-border font-mono text-sm">
              <span className="text-muted-foreground">Total: </span>
              <span className="text-foreground font-bold">{challenges.length} soal</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-card border border-border font-mono text-sm">
              <span className="text-muted-foreground">Selesai: </span>
              <span className="text-primary font-bold">{progress.completedChallenges.length}</span>
            </div>
          </div>

          {/* Module filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setSelectedModule(null)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                !selectedModule
                  ? "bg-primary text-primary-foreground box-glow"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              Semua ({challenges.length})
            </button>
            {modules.map((mod) => {
              const count = challenges.filter((c) => c.moduleId === mod.id).length;
              const done = challenges.filter(
                (c) => c.moduleId === mod.id && progress.completedChallenges.includes(c.id)
              ).length;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModule(mod.id)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                    selectedModule === mod.id
                      ? "bg-primary text-primary-foreground box-glow"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {mod.icon} {mod.title} ({done}/{count})
                </button>
              );
            })}
          </div>

          {/* Quiz */}
          <div className="max-w-2xl mx-auto">
            {filteredChallenges.length > 0 ? (
              <ChallengeQuiz
                key={selectedModule || "all"}
                challenges={filteredChallenges}
              />
            ) : (
              <p className="text-center text-muted-foreground">Tidak ada challenge untuk modul ini.</p>
            )}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
