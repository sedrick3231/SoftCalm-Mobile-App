import React, { useState, useEffect } from 'react';
import { useSensory } from '../context/SensoryContext';
import { useBackButton } from '../hooks/useBackButton';

interface BreathingExerciseProps {
  onComplete?: () => void;
  onBack?: () => void;
}

export function BreathingExercise({ onComplete, onBack }: BreathingExerciseProps) {
  useBackButton(onBack);
  const { settings } = useSensory();
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(4);
  const [completedCycles, setCompletedCycles] = useState(0);
  const [prefersReducedMotion] = useState(
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
  );

  useEffect(() => {
    if (!isBreathing) return;

    const timings = {
      inhale: 4,
      hold: 4,
      exhale: 4,
    };

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        if (breathPhase === 'inhale') {
          setBreathPhase('hold');
          return timings.hold;
        } else if (breathPhase === 'hold') {
          setBreathPhase('exhale');
          return timings.exhale;
        } else {
          setBreathPhase('inhale');
          setCompletedCycles((c) => c + 1);
          return timings.inhale;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreathing, breathPhase]);

  const handleStart = () => {
    setIsBreathing(true);
    setBreathPhase('inhale');
    setCount(4);
    setCompletedCycles(0);
  };

  const handleStop = () => {
    setIsBreathing(false);
  };

  const getPhaseEmoji = () => {
    if (breathPhase === 'inhale') return '💨';
    if (breathPhase === 'hold') return '⏸️';
    return '🌬️';
  };

  const getPhaseText = () => {
    if (breathPhase === 'inhale') return 'Breathe in';
    if (breathPhase === 'hold') return 'Hold';
    return 'Breathe out';
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24 flex flex-col"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-5 py-6 flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
        <div className="text-center flex-1 flex flex-col items-center justify-center w-full">
          {/* Title */}
          <h2 
            className="text-4xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Breathing Exercise
          </h2>
          <p 
            className="text-sm mb-10 transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            4-4-4 Calm Breathing Technique
          </p>

          {/* Breathing Circle */}
          <div className="mb-12 w-full">
            {!isBreathing ? (
              <div className="text-center">
                <div className="text-6xl mb-6">💨</div>
                <p 
                  className="text-lg mb-8 transition-colors duration-300 opacity-70"
                  style={{ color: `var(--color-primary)` }}
                >
                  Ready to breathe calmly?
                </p>
                <button
                  onClick={handleStart}
                  className="rounded-3xl px-8 py-6 text-white font-bold transition-all duration-300 active:scale-95 hover:shadow-lg"
                  style={{
                    backgroundColor: `var(--color-primary)`,
                  }}
                >
                  Start Breathing
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                {/* Animated Circle */}
                <div
                  className={`
                    w-40 h-40 rounded-full
                    flex items-center justify-center
                    text-6xl
                    border-4 border-opacity-50
                    ${prefersReducedMotion ? '' : 'transition-all duration-1000'}
                    ${
                      breathPhase === 'inhale'
                        ? 'scale-100'
                        : breathPhase === 'hold'
                        ? 'scale-110'
                        : 'scale-90'
                    }
                  `}
                  style={{
                    backgroundColor: `var(--color-secondary)`,
                    borderColor: `var(--color-primary)`,
                  }}
                >
                  {getPhaseEmoji()}
                </div>
                
                <p 
                  className="text-2xl font-bold mt-10 mb-4 transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  {getPhaseText()}
                </p>
                
                <p 
                  className="text-6xl font-bold transition-colors duration-300"
                  style={{ color: `var(--color-accent)` }}
                >
                  {count}
                </p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div 
            className="w-full rounded-3xl p-8 mb-8 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="text-center">
              <p 
                className="text-sm mb-3 transition-colors duration-300 opacity-70"
                style={{ color: `var(--color-primary)` }}
              >
                Cycles Completed
              </p>
              <p 
                className="text-5xl font-bold transition-colors duration-300"
                style={{ color: `var(--color-accent)` }}
              >
                {completedCycles}
              </p>
            </div>
          </div>

          {/* Controls */}
          {isBreathing && (
            <button
              onClick={handleStop}
              className="w-full rounded-3xl px-6 py-5 font-bold transition-all duration-300 border-2 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-accent)`,
                color: `var(--color-accent)`,
              }}
            >
              Stop
            </button>
          )}

          {/* Guidance */}
          <div 
            className="mt-12 p-6 rounded-3xl text-center border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <p 
              className="text-sm transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              💚 Breathe at your own pace
            </p>
            <p 
              className="text-sm mt-2 transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              No pressure - pause whenever you need to
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
