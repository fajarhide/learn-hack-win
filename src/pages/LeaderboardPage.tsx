import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { getLeaderboard, getProgress, updateLeaderboard, type LeaderboardEntry } from "@/lib/gamification";
import { Trophy, Medal, Star } from "lucide-react";

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const progress = getProgress();

  useEffect(() => {
    const lb = progress.username ? updateLeaderboard(progress) : getLeaderboard();
    setEntries(lb);
  }, []);

  const getRankStyle = (index: number) => {
    if (index === 0) return "text-yellow-400";
    if (index === 1) return "text-gray-300";
    if (index === 2) return "text-amber-600";
    return "text-muted-foreground";
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            <Trophy className="inline h-8 w-8 text-primary mr-2" />
            Leaderboard
          </h1>
          <p className="text-muted-foreground mb-10">
            Peringkat berdasarkan total XP. Selesaikan modul dan challenge untuk naik!
          </p>

          <div className="space-y-2">
            {entries.map((entry, i) => {
              const isMe = entry.username === progress.username;
              return (
                <motion.div
                  key={entry.username}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    isMe
                      ? "border-primary/40 bg-primary/5 box-glow"
                      : "border-border bg-card"
                  }`}
                >
                  {/* Rank */}
                  <div className={`w-10 text-center font-mono font-bold text-lg ${getRankStyle(i)}`}>
                    {getRankIcon(i)}
                  </div>

                  {/* User info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold truncate ${isMe ? "text-primary" : "text-foreground"}`}>
                        {entry.username}
                      </span>
                      {isMe && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-mono">
                          KAMU
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                      <span>Lv.{entry.level}</span>
                      <span>{entry.badges} badge</span>
                    </div>
                  </div>

                  {/* XP */}
                  <div className="font-mono font-bold text-primary">
                    ⚡ {entry.xp}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {!progress.username && (
            <div className="mt-8 p-6 rounded-xl border border-border bg-card text-center">
              <p className="text-muted-foreground text-sm">
                Masukkan username di beranda untuk tampil di leaderboard!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
