const STORAGE_KEY = "cybersec-edu";

export interface UserProgress {
  username: string;
  xp: number;
  level: number;
  completedModules: string[];
  completedChallenges: string[];
  streak: number;
  lastActivity: string;
  badges: string[];
}

const defaultProgress: UserProgress = {
  username: "",
  xp: 0,
  level: 1,
  completedModules: [],
  completedChallenges: [],
  streak: 0,
  lastActivity: "",
  badges: [],
};

export function getProgress(): UserProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...defaultProgress, ...JSON.parse(stored) };
  } catch {}
  return { ...defaultProgress };
}

export function saveProgress(progress: UserProgress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function setUsername(name: string): UserProgress {
  const p = getProgress();
  p.username = name;
  saveProgress(p);
  return p;
}

export function addXP(amount: number): UserProgress {
  const p = getProgress();
  p.xp += amount;
  p.level = Math.floor(p.xp / 200) + 1;
  p.lastActivity = new Date().toISOString();
  saveProgress(p);
  return p;
}

export function completeModule(moduleId: string, xpReward: number): UserProgress {
  const p = getProgress();
  if (!p.completedModules.includes(moduleId)) {
    p.completedModules.push(moduleId);
    p.xp += xpReward;
    p.level = Math.floor(p.xp / 200) + 1;
    p.lastActivity = new Date().toISOString();
    checkBadges(p);
    saveProgress(p);
  }
  return p;
}

export function completeChallenge(challengeId: string, xpReward: number): UserProgress {
  const p = getProgress();
  if (!p.completedChallenges.includes(challengeId)) {
    p.completedChallenges.push(challengeId);
    p.xp += xpReward;
    p.level = Math.floor(p.xp / 200) + 1;
    p.lastActivity = new Date().toISOString();
    checkBadges(p);
    saveProgress(p);
  }
  return p;
}

function checkBadges(p: UserProgress) {
  if (p.completedModules.length >= 1 && !p.badges.includes("first-module")) p.badges.push("first-module");
  if (p.completedModules.length >= 3 && !p.badges.includes("halfway")) p.badges.push("halfway");
  if (p.completedModules.length >= 6 && !p.badges.includes("all-modules")) p.badges.push("all-modules");
  if (p.completedChallenges.length >= 5 && !p.badges.includes("quiz-starter")) p.badges.push("quiz-starter");
  if (p.completedChallenges.length >= 15 && !p.badges.includes("quiz-pro")) p.badges.push("quiz-pro");
  if (p.completedChallenges.length >= 30 && !p.badges.includes("quiz-master")) p.badges.push("quiz-master");
  if (p.xp >= 500 && !p.badges.includes("xp-500")) p.badges.push("xp-500");
  if (p.xp >= 1000 && !p.badges.includes("xp-1000")) p.badges.push("xp-1000");
}

export const BADGE_INFO: Record<string, { name: string; icon: string; description: string }> = {
  "first-module": { name: "Pemula", icon: "🌱", description: "Selesaikan modul pertama" },
  "halfway": { name: "Setengah Jalan", icon: "⚡", description: "Selesaikan 3 modul" },
  "all-modules": { name: "Completionist", icon: "🏆", description: "Selesaikan semua modul" },
  "quiz-starter": { name: "Quiz Starter", icon: "🎯", description: "Jawab 5 challenge" },
  "quiz-pro": { name: "Quiz Pro", icon: "🔥", description: "Jawab 15 challenge" },
  "quiz-master": { name: "Quiz Master", icon: "💎", description: "Jawab 30 challenge" },
  "xp-500": { name: "500 XP", icon: "⭐", description: "Kumpulkan 500 XP" },
  "xp-1000": { name: "1000 XP", icon: "🌟", description: "Kumpulkan 1000 XP" },
};

// Leaderboard (localStorage-based mock)
const LB_KEY = "cybersec-leaderboard";

export interface LeaderboardEntry {
  username: string;
  xp: number;
  level: number;
  badges: number;
}

export function getLeaderboard(): LeaderboardEntry[] {
  try {
    const stored = localStorage.getItem(LB_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return getDefaultLeaderboard();
}

function getDefaultLeaderboard(): LeaderboardEntry[] {
  return [
    { username: "H4ck3rPro", xp: 1250, level: 7, badges: 6 },
    { username: "CyberNinja", xp: 980, level: 5, badges: 5 },
    { username: "SecOps_ID", xp: 820, level: 5, badges: 4 },
    { username: "BugHunter99", xp: 650, level: 4, badges: 3 },
    { username: "NetDefender", xp: 540, level: 3, badges: 3 },
    { username: "LinuxWizard", xp: 430, level: 3, badges: 2 },
    { username: "CloudGuard", xp: 320, level: 2, badges: 2 },
    { username: "WebShield", xp: 210, level: 2, badges: 1 },
    { username: "CryptoKid", xp: 150, level: 1, badges: 1 },
    { username: "Newbie_01", xp: 50, level: 1, badges: 0 },
  ];
}

export function updateLeaderboard(progress: UserProgress): LeaderboardEntry[] {
  if (!progress.username) return getLeaderboard();
  const lb = getLeaderboard();
  const existing = lb.findIndex(e => e.username === progress.username);
  const entry: LeaderboardEntry = {
    username: progress.username,
    xp: progress.xp,
    level: progress.level,
    badges: progress.badges.length,
  };
  if (existing >= 0) lb[existing] = entry;
  else lb.push(entry);
  lb.sort((a, b) => b.xp - a.xp);
  const top = lb.slice(0, 20);
  localStorage.setItem(LB_KEY, JSON.stringify(top));
  return top;
}

export function getLevelTitle(level: number): string {
  if (level <= 1) return "Script Kiddie";
  if (level <= 2) return "Newbie Hacker";
  if (level <= 3) return "Junior Analyst";
  if (level <= 4) return "Security Enthusiast";
  if (level <= 5) return "Cyber Defender";
  if (level <= 6) return "Threat Hunter";
  if (level <= 7) return "Security Engineer";
  if (level <= 9) return "Senior Analyst";
  return "Cyber Master";
}
