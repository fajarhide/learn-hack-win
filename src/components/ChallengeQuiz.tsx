import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, ChevronRight, Zap } from "lucide-react";
import type { Challenge } from "@/data/challenges";
import { completeChallenge, getProgress } from "@/lib/gamification";

interface Props {
  challenges: Challenge[];
  onComplete?: () => void;
}

export default function ChallengeQuiz({ challenges, onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = challenges[currentIndex];
  const progress = getProgress();
  const alreadyCompleted = progress.completedChallenges.includes(current?.id);

  const handleAnswer = useCallback((index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === current.correctAnswer) {
      setScore((s) => s + 1);
      if (!alreadyCompleted) {
        completeChallenge(current.id, current.xpReward);
      }
    }
  }, [showResult, current, alreadyCompleted]);

  const handleNext = () => {
    if (currentIndex < challenges.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setFinished(true);
      onComplete?.();
    }
  };

  if (!current) return null;

  if (finished) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 rounded-xl border border-border bg-card"
      >
        <div className="text-6xl mb-4">
          {score === challenges.length ? "🏆" : score >= challenges.length / 2 ? "⭐" : "💪"}
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Challenge Selesai!</h3>
        <p className="font-mono text-primary text-lg mb-2">
          {score}/{challenges.length} Benar
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          {score === challenges.length
            ? "Sempurna! Kamu menguasai materi ini."
            : score >= challenges.length / 2
            ? "Bagus! Terus tingkatkan pemahamanmu."
            : "Jangan menyerah! Review materinya dan coba lagi."}
        </p>
        <button
          onClick={() => {
            setCurrentIndex(0);
            setSelectedAnswer(null);
            setShowResult(false);
            setScore(0);
            setFinished(false);
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-bold rounded-lg box-glow"
        >
          Ulangi Challenge
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-muted-foreground">
          {currentIndex + 1} / {challenges.length}
        </span>
        <span className={`inline-flex items-center gap-1 font-mono text-xs px-2 py-1 rounded ${
          current.difficulty === "easy" ? "bg-primary/10 text-primary" :
          current.difficulty === "medium" ? "bg-accent/10 text-accent" :
          "bg-destructive/10 text-destructive"
        }`}>
          {current.difficulty === "easy" ? "Mudah" : current.difficulty === "medium" ? "Sedang" : "Sulit"}
        </span>
      </div>
      <div className="h-1 rounded-full bg-secondary mb-6">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${((currentIndex + 1) / challenges.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <h3 className="text-lg font-bold text-foreground mb-6">{current.question}</h3>

          <div className="space-y-3">
            {current.options.map((option, i) => {
              const isCorrect = i === current.correctAnswer;
              const isSelected = i === selectedAnswer;
              let classes = "block w-full text-left p-4 rounded-lg border font-mono text-sm transition-all ";

              if (showResult) {
                if (isCorrect) classes += "border-primary bg-primary/10 text-primary";
                else if (isSelected) classes += "border-destructive bg-destructive/10 text-destructive";
                else classes += "border-border/50 bg-card/50 text-muted-foreground";
              } else {
                classes += "border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5 cursor-pointer";
              }

              return (
                <button key={i} onClick={() => handleAnswer(i)} className={classes} disabled={showResult}>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-md bg-secondary flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{option}</span>
                    {showResult && isCorrect && <CheckCircle className="ml-auto h-5 w-5 flex-shrink-0" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="ml-auto h-5 w-5 flex-shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <div className="p-4 rounded-lg border border-border bg-secondary/50 mb-4">
                <p className="text-sm text-muted-foreground">{current.explanation}</p>
                {!alreadyCompleted && selectedAnswer === current.correctAnswer && (
                  <p className="mt-2 font-mono text-xs text-primary flex items-center gap-1">
                    <Zap className="h-3 w-3" /> +{current.xpReward} XP
                  </p>
                )}
              </div>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-bold rounded-lg box-glow"
              >
                {currentIndex < challenges.length - 1 ? "Lanjut" : "Lihat Hasil"}
                <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
