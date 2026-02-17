import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, ChevronRight, Zap, Users, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Terminal prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-mono text-sm text-primary">Belajar Cybersecurity dari Nol</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Kuasai </span>
            <span className="text-primary text-glow-strong">Cyber</span>
            <span className="text-accent">Security</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
          >
            Platform edukasi interaktif untuk pemula dan career switcher di Indonesia.
            Belajar dari nol hingga siap kerja — praktis, etis, dan relevan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/modules"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-bold rounded-lg box-glow hover:brightness-110 transition-all"
            >
              Mulai Belajar
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              to="/challenges"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-primary font-mono font-bold rounded-lg hover:bg-primary/10 transition-all"
            >
              <Zap className="h-5 w-5" />
              Challenge
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-8 mt-16"
          >
            {[
              { icon: BookOpen, value: "6", label: "Modul Lengkap" },
              { icon: Zap, value: "30+", label: "Challenge Quiz" },
              { icon: Users, value: "Open Source", label: "Komunitas" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary border border-border">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-mono font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
