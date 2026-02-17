import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Lock, ChevronRight } from "lucide-react";
import type { Module } from "@/data/modules";
import { getProgress } from "@/lib/gamification";

interface Props {
  module: Module;
  index: number;
  locked?: boolean;
}

export default function ModuleCard({ module, index, locked }: Props) {
  const progress = getProgress();
  const completed = progress.completedModules.includes(module.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={locked ? "#" : `/modules/${module.id}`}
        className={`block group relative p-6 rounded-xl border transition-all ${
          completed
            ? "border-primary/40 bg-primary/5"
            : locked
            ? "border-border/50 bg-card/50 opacity-60 cursor-not-allowed"
            : "border-border bg-card hover:border-primary/30 hover:bg-card/80"
        }`}
      >
        {/* Status indicator */}
        <div className="absolute top-4 right-4">
          {completed ? (
            <CheckCircle className="h-5 w-5 text-primary" />
          ) : locked ? (
            <Lock className="h-5 w-5 text-muted-foreground/50" />
          ) : null}
        </div>

        {/* Module number + icon */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-lg text-2xl ${
              completed
                ? "bg-primary/20 box-glow"
                : "bg-secondary"
            }`}
          >
            {module.icon}
          </div>
          <div>
            <div className="font-mono text-xs text-muted-foreground">
              MODUL {String(module.number).padStart(2, "0")}
            </div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
              {module.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {module.subtitle}
        </p>

        {/* XP and topics count */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-mono text-xs text-primary">
              ⚡ {module.xpReward} XP
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {module.topics.length} topik
            </span>
          </div>
          {!locked && (
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </div>
      </Link>
    </motion.div>
  );
}
