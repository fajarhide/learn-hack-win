import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, BookOpen, Target, Trophy, Briefcase, Award, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { getProgress, getLevelTitle } from "@/lib/gamification";

const navItems = [
  { path: "/", label: "Beranda", icon: Shield },
  { path: "/modules", label: "Modul", icon: BookOpen },
  { path: "/challenges", label: "Challenge", icon: Target },
  { path: "/career-switcher", label: "Karier", icon: Briefcase },
  { path: "/certifications", label: "Sertifikasi", icon: Award },
  { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { path: "/profile", label: "Profil", icon: User },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = getProgress();

  return (
    <div className="min-h-screen bg-background terminal-bg">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-mono text-lg font-bold text-primary text-glow">
              CyberSec<span className="text-accent">EDU</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm transition-all ${
                    active
                      ? "bg-primary/10 text-primary box-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* XP badge */}
          <div className="hidden md:flex items-center gap-3">
            {progress.username && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary border border-border font-mono text-xs">
                <span className="text-primary">⚡ {progress.xp} XP</span>
                <span className="text-muted-foreground">Lv.{progress.level}</span>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-6 py-3 font-mono text-sm ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
            {progress.username && (
              <div className="px-6 py-3 border-t border-border font-mono text-xs text-muted-foreground">
                {progress.username} • ⚡ {progress.xp} XP • {getLevelTitle(progress.level)}
              </div>
            )}
          </motion.div>
        )}
      </nav>

      {/* Main content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-4 text-center font-mono text-xs text-muted-foreground">
          <p>
            Materi berdasarkan{" "}
            <a
              href="https://github.com/FaisalYahya/belajar-cybersecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              belajar-cybersecurity
            </a>{" "}
            oleh Faisal Yahya
          </p>
          <p className="mt-1 text-muted-foreground/60">Cybersecurity untuk Semua 🇮🇩</p>
        </div>
      </footer>
    </div>
  );
}
