import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Progress } from "@/components/ui/progress";
import {
  getProgress,
  getLevelTitle,
  BADGE_INFO,
  UserProgress,
} from "@/lib/gamification";
import { modules } from "@/data/modules";
import { challenges } from "@/data/challenges";
import {
  User,
  Zap,
  BookOpen,
  Target,
  Award,
  TrendingUp,
  BarChart3,
  Star,
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const ALL_BADGES = Object.entries(BADGE_INFO);

export default function Profile() {
  const [progress, setProgress] = useState<UserProgress>(getProgress());

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const xpToNext = 200;
  const currentLevelXp = progress.xp % xpToNext;
  const xpPercent = (currentLevelXp / xpToNext) * 100;

  // Radar chart data — skill areas based on completed modules
  const moduleMap: Record<string, string> = {
    "dasar-it": "IT Basics",
    "jaringan-komputer": "Networking",
    "linux": "Linux",
    "pengantar-keamanan": "Security",
    "web-security": "Web Sec",
    "cloud-security": "Cloud",
  };

  const radarData = modules.map((m) => ({
    subject: moduleMap[m.id] || m.title,
    score: progress.completedModules.includes(m.id) ? 100 : 0,
    fullMark: 100,
  }));

  // Challenge stats per category
  const categoryStats = challenges.reduce(
    (acc, ch) => {
      const mod = modules.find((m) => m.id === ch.moduleId);
      const cat = mod ? (moduleMap[mod.id] || mod.title) : "Umum";
      if (!acc[cat]) acc[cat] = { total: 0, completed: 0 };
      acc[cat].total++;
      if (progress.completedChallenges.includes(ch.id)) acc[cat].completed++;
      return acc;
    },
    {} as Record<string, { total: number; completed: number }>
  );

  const barData = Object.entries(categoryStats).map(([name, v]) => ({
    name: name.length > 12 ? name.slice(0, 12) + "…" : name,
    completed: v.completed,
    total: v.total,
  }));

  // Pie chart — overall completion
  const totalModules = modules.length;
  const totalChallenges = challenges.length;
  const doneModules = progress.completedModules.length;
  const doneChallenges = progress.completedChallenges.length;

  const pieData = [
    { name: "Modul Selesai", value: doneModules, fill: "hsl(140 100% 50%)" },
    { name: "Modul Tersisa", value: totalModules - doneModules, fill: "hsl(220 20% 18%)" },
  ];

  const challengePieData = [
    { name: "Challenge Selesai", value: doneChallenges, fill: "hsl(180 100% 45%)" },
    { name: "Challenge Tersisa", value: totalChallenges - doneChallenges, fill: "hsl(220 20% 18%)" },
  ];

  const chartConfig = {
    completed: { label: "Selesai", color: "hsl(140 100% 50%)" },
    total: { label: "Total", color: "hsl(220 20% 25%)" },
    score: { label: "Skor", color: "hsl(140 100% 50%)" },
  };

  const stats = [
    { icon: Zap, label: "Total XP", value: progress.xp, color: "text-primary" },
    { icon: TrendingUp, label: "Level", value: `Lv.${progress.level}`, color: "text-foreground" },
    { icon: BookOpen, label: "Modul", value: `${doneModules}/${totalModules}`, color: "text-accent" },
    { icon: Target, label: "Challenge", value: `${doneChallenges}/${totalChallenges}`, color: "text-primary" },
    { icon: Award, label: "Badge", value: `${progress.badges.length}/${ALL_BADGES.length}`, color: "text-accent" },
    { icon: Star, label: "Rank", value: getLevelTitle(progress.level), color: "text-primary" },
  ];

  if (!progress.username) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Belum Ada Profil</h2>
          <p className="text-muted-foreground font-mono text-sm">
            Kembali ke halaman utama dan masukkan username untuk memulai.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-16 w-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center box-glow">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{progress.username}</h1>
              <p className="font-mono text-sm text-primary text-glow">{getLevelTitle(progress.level)}</p>
            </div>
          </div>
          {/* XP progress bar */}
          <div className="mt-4 max-w-md">
            <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1">
              <span>Level {progress.level}</span>
              <span>{currentLevelXp}/{xpToNext} XP</span>
            </div>
            <Progress value={xpPercent} className="h-2 bg-secondary" />
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-xl border border-border bg-card text-center"
            >
              <s.icon className={`h-5 w-5 mx-auto mb-2 ${s.color}`} />
              <div className={`font-mono text-lg font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Radar — skill coverage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <h3 className="font-mono text-sm text-muted-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" /> Skill Coverage
            </h3>
            <ChartContainer config={chartConfig} className="h-[280px] w-full">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="hsl(220 15% 18%)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "hsl(220 10% 55%)", fontSize: 11, fontFamily: "JetBrains Mono" }}
                />
                <Radar
                  name="Skor"
                  dataKey="score"
                  stroke="hsl(140 100% 50%)"
                  fill="hsl(140 100% 50%)"
                  fillOpacity={0.25}
                  strokeWidth={2}
                />
              </RadarChart>
            </ChartContainer>
          </motion.div>

          {/* Bar — challenge per category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <h3 className="font-mono text-sm text-muted-foreground mb-4 flex items-center gap-2">
              <Target className="h-4 w-4 text-accent" /> Challenge per Kategori
            </h3>
            <ChartContainer config={chartConfig} className="h-[280px] w-full">
              <BarChart data={barData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 18%)" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "hsl(220 10% 55%)", fontSize: 10, fontFamily: "JetBrains Mono" }}
                  axisLine={{ stroke: "hsl(220 15% 18%)" }}
                />
                <YAxis
                  tick={{ fill: "hsl(220 10% 55%)", fontSize: 10 }}
                  axisLine={{ stroke: "hsl(220 15% 18%)" }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="total" fill="hsl(220 20% 25%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="completed" fill="hsl(140 100% 50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </motion.div>
        </div>

        {/* Pie charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl border border-border bg-card text-center"
          >
            <h3 className="font-mono text-sm text-muted-foreground mb-4">Progress Modul</h3>
            <div className="h-[180px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {pieData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="font-mono text-lg font-bold text-primary">{doneModules}/{totalModules}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="p-6 rounded-xl border border-border bg-card text-center"
          >
            <h3 className="font-mono text-sm text-muted-foreground mb-4">Progress Challenge</h3>
            <div className="h-[180px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={challengePieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {challengePieData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="font-mono text-lg font-bold text-accent">{doneChallenges}/{totalChallenges}</p>
          </motion.div>
        </div>

        {/* Badges collection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-xl border border-border bg-card"
        >
          <h3 className="font-mono text-sm text-muted-foreground mb-4 flex items-center gap-2">
            <Award className="h-4 w-4 text-accent" /> Koleksi Badge
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_BADGES.map(([key, badge]) => {
              const earned = progress.badges.includes(key);
              return (
                <div
                  key={key}
                  className={`p-4 rounded-lg border text-center transition-all ${
                    earned
                      ? "border-primary/30 bg-primary/5 box-glow"
                      : "border-border bg-secondary/30 opacity-40"
                  }`}
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className={`font-mono text-xs font-bold ${earned ? "text-primary" : "text-muted-foreground"}`}>
                    {badge.name}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1">{badge.description}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
