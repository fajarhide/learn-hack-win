import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/data/modules";
import { getProgress, setUsername, getLevelTitle, BADGE_INFO } from "@/lib/gamification";
import { Shield, Target, Trophy, Briefcase, Award, ArrowRight } from "lucide-react";

export default function Index() {
  const [progress, setProgress] = useState(getProgress());
  const [nameInput, setNameInput] = useState("");
  const [showNameModal, setShowNameModal] = useState(false);

  useEffect(() => {
    const p = getProgress();
    setProgress(p);
    if (!p.username) setShowNameModal(true);
  }, []);

  const handleSetName = () => {
    if (nameInput.trim()) {
      const p = setUsername(nameInput.trim());
      setProgress(p);
      setShowNameModal(false);
    }
  };

  return (
    <Layout>
      {/* Name modal */}
      {showNameModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md mx-4 p-8 rounded-xl border border-primary/30 bg-card box-glow"
          >
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Selamat Datang, Cadet!</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Masukkan username untuk memulai perjalanan cybersecurity-mu.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSetName()}
                placeholder="Username..."
                maxLength={20}
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-secondary font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleSetName}
                disabled={!nameInput.trim()}
                className="px-6 py-3 bg-primary text-primary-foreground font-mono font-bold rounded-lg box-glow disabled:opacity-50"
              >
                Mulai
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <HeroSection />

      {/* User progress card */}
      {progress.username && (
        <section className="container mx-auto px-4 -mt-8 mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl border border-primary/20 bg-card/80 backdrop-blur-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-mono text-sm text-muted-foreground">Halo,</h3>
                <p className="text-xl font-bold text-foreground">{progress.username}</p>
                <p className="font-mono text-xs text-primary">{getLevelTitle(progress.level)}</p>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="font-mono text-2xl font-bold text-primary">⚡ {progress.xp}</div>
                  <div className="text-xs text-muted-foreground">Total XP</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-2xl font-bold text-foreground">Lv.{progress.level}</div>
                  <div className="text-xs text-muted-foreground">Level</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-2xl font-bold text-accent">{progress.completedModules.length}/6</div>
                  <div className="text-xs text-muted-foreground">Modul</div>
                </div>
              </div>
            </div>
            {/* Badges */}
            {progress.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                {progress.badges.map((b) => (
                  <span key={b} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-xs font-mono" title={BADGE_INFO[b]?.description}>
                    {BADGE_INFO[b]?.icon} {BADGE_INFO[b]?.name}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      )}

      {/* Modules preview */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            <span className="text-primary">&gt;</span> Learning Path
          </h2>
          <Link to="/modules" className="inline-flex items-center gap-1 text-sm font-mono text-primary hover:underline">
            Lihat Semua <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.slice(0, 3).map((mod, i) => (
            <ModuleCard key={mod.id} module={mod} index={i} />
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/challenges" className="group p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-all">
            <Target className="h-8 w-8 text-accent mb-3" />
            <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Challenge Quiz</h3>
            <p className="text-sm text-muted-foreground mt-1">Uji pemahamanmu dengan quiz interaktif dan dapatkan XP.</p>
          </Link>
          <Link to="/career-switcher" className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all">
            <Briefcase className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Career Switcher</h3>
            <p className="text-sm text-muted-foreground mt-1">Panduan switch karier ke cybersecurity dari berbagai latar belakang.</p>
          </Link>
          <Link to="/certifications" className="group p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-all">
            <Award className="h-8 w-8 text-accent mb-3" />
            <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Sertifikasi</h3>
            <p className="text-sm text-muted-foreground mt-1">Panduan lengkap sertifikasi dari entry hingga expert level.</p>
          </Link>
          <Link to="/leaderboard" className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all">
            <Trophy className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Leaderboard</h3>
            <p className="text-sm text-muted-foreground mt-1">Lihat peringkatmu dan bersaing dengan learner lainnya.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
