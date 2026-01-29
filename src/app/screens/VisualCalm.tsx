import React, { useState, useEffect } from 'react';
import { useSensory } from '../context/SensoryContext';
import { ArrowLeft } from 'lucide-react';

interface VisualCalmProps {
  onBack?: () => void;
}

export function VisualCalm({ onBack }: VisualCalmProps) {
  const { settings } = useSensory();
  const [isAnimating, setIsAnimating] = useState(false);
  const [duration, setDuration] = useState(300);
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (!isAnimating || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsAnimating(false);
          return duration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isAnimating, duration]);

  const handleStart = () => {
    setIsAnimating(true);
    setTimeLeft(duration);
  };

  const handleStop = () => {
    setIsAnimating(false);
    setTimeLeft(duration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scenes = [
    { id: 'ocean', name: 'Ocean Sunset', emoji: '🌅' },
    { id: 'forest', name: 'Forest Path', emoji: '🌲' },
    { id: 'sky', name: 'Night Sky', emoji: '⭐' },
    { id: 'field', name: 'Flower Field', emoji: '🌸' },
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-5 py-6 max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 min-h-[48px] px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ color: `var(--color-primary)` }}
        >
          <ArrowLeft size={24} />
        </button>

        <div className="text-center mb-10">
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Visual Calm
          </h2>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Watch a soothing visual journey
          </p>
        </div>

        {/* Visual Display Area */}
        {isAnimating ? (
          <div
            className="mb-8 h-72 rounded-3xl border-4 flex items-center justify-center transition-all duration-1000 relative overflow-hidden"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-40 h-40 rounded-full opacity-30 animate-pulse transition-transform duration-1000"
                style={{
                  backgroundColor: `var(--color-primary)`,
                  transform: Math.floor(timeLeft / 10) % 2 === 0 ? 'scale(1)' : 'scale(1.1)',
                }}
              />
            </div>
            <div className="text-9xl relative z-10 animate-bounce">{scenes[0].emoji}</div>
          </div>
        ) : (
          <div 
            className="mb-8 h-72 rounded-3xl border-4 flex items-center justify-center transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="text-center">
              <div className="text-8xl mb-4">✨</div>
              <p 
                className="transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                Ready to relax?
              </p>
            </div>
          </div>
        )}

        {/* Timer Display */}
        <div 
          className="rounded-3xl p-8 text-center mb-8 border-2 transition-colors duration-300"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <p 
            className="text-sm mb-3 transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            ⏱️ Time Remaining
          </p>
          <p 
            className="text-6xl font-bold font-mono transition-colors duration-300"
            style={{ color: `var(--color-accent)` }}
          >
            {formatTime(timeLeft)}
          </p>
        </div>

        {/* Duration Selector */}
        <div className="mb-8">
          <label 
            className="block text-sm font-bold mb-3 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Duration
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[60, 180, 300, 600].map((d) => (
              <button
                key={d}
                onClick={() => {
                  setDuration(d);
                  setTimeLeft(d);
                }}
                disabled={isAnimating}
                className="py-3 px-2 rounded-2xl text-sm font-bold transition-all duration-300 border-2"
                style={{
                  backgroundColor: duration === d ? `var(--color-primary)` : `var(--color-secondary)`,
                  borderColor: `var(--color-primary)`,
                  color: duration === d ? 'white' : `var(--color-primary)`,
                  opacity: isAnimating ? 0.5 : 1,
                  cursor: isAnimating ? 'not-allowed' : 'pointer',
                }}
              >
                {d === 60 ? '1m' : d === 180 ? '3m' : d === 300 ? '5m' : '10m'}
              </button>
            ))}
          </div>
        </div>

        {/* Scene Selector */}
        <div className="mb-8">
          <p 
            className="text-sm font-bold mb-4 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Scenes
          </p>
          <div className="space-y-3">
            {scenes.map((scene) => (
              <button
                key={scene.id}
                className="w-full rounded-3xl p-5 border-2 transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: `var(--color-secondary)`,
                  borderColor: `var(--color-primary)`,
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{scene.emoji}</span>
                  <p 
                    className="font-bold flex-1 text-left transition-colors duration-300"
                    style={{ color: `var(--color-primary)` }}
                  >
                    {scene.name}
                  </p>
                  {isAnimating && <span className="text-xl animate-pulse">●</span>}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={isAnimating ? handleStop : handleStart}
          className="w-full rounded-3xl px-6 py-6 text-white font-bold transition-all duration-300 active:scale-95 hover:shadow-lg mb-6"
          style={{
            backgroundColor: `var(--color-primary)`,
          }}
        >
          {isAnimating ? 'Stop' : 'Start Visual Calm'}
        </button>

        {/* Guidance */}
        <div 
          className="rounded-3xl p-6 text-center border-2 transition-colors duration-300"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <p 
            className="text-sm transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            🌸 Watch without pressure
          </p>
          <p 
            className="text-sm transition-colors duration-300 opacity-70 mt-2"
            style={{ color: `var(--color-primary)` }}
          >
            Let your mind rest
          </p>
        </div>
      </div>
    </div>
  );
}
