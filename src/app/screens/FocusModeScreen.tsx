import React, { useState } from 'react';
import { useBackButton } from '../hooks/useBackButton';

interface FocusModeScreenProps {
  onBack: () => void;
}

export function FocusModeScreen({ onBack }: FocusModeScreenProps) {
  useBackButton(onBack);
  const [isActive, setIsActive] = useState(false);
  const [duration, setDuration] = useState(25);

  const durations = [
    { value: 15, label: '15 min', emoji: '⏱️' },
    { value: 25, label: '25 min', emoji: '⏰' },
    { value: 45, label: '45 min', emoji: '🕐' },
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-6 py-8">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🎯</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Focus Mode
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Stay focused, gently
          </p>
        </div>
        
        <div className="max-w-md mx-auto space-y-6">
          {!isActive ? (
            <>
              <div 
                className="rounded-3xl p-6 border-2 transition-colors duration-300"
                style={{
                  backgroundColor: `var(--color-secondary)`,
                  borderColor: `var(--color-primary)`,
                }}
              >
                <p 
                  className="text-lg font-medium mb-5 text-center transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  Choose your focus duration:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {durations.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setDuration(d.value)}
                      className="py-4 rounded-2xl text-center border-2 transition-all duration-300 hover:scale-105 active:scale-95"
                      style={{
                        backgroundColor: duration === d.value 
                          ? 'var(--color-primary)' 
                          : 'var(--color-background)',
                        borderColor: `var(--color-primary)`,
                        color: duration === d.value 
                          ? 'var(--color-background)' 
                          : 'var(--color-primary)',
                      }}
                    >
                      <div className="text-2xl mb-1">{d.emoji}</div>
                      <div className="text-sm font-medium">{d.label}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setIsActive(true)}
                className="w-full rounded-3xl px-6 py-5 font-bold text-white transition-all duration-300 border-2 hover:scale-105 active:scale-95 hover:shadow-lg"
                style={{
                  backgroundColor: `var(--color-primary)`,
                  borderColor: `var(--color-primary)`,
                }}
              >
                Start Focus Session 🌟
              </button>
            </>
          ) : (
            <>
              <div 
                className="rounded-3xl p-8 border-2 text-center transition-colors duration-300"
                style={{
                  backgroundColor: `var(--color-secondary)`,
                  borderColor: `var(--color-primary)`,
                }}
              >
                <div className="text-7xl mb-6">✨</div>
                <p 
                  className="text-5xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: `var(--color-accent)` }}
                >
                  {duration}:00
                </p>
                <p 
                  className="text-xl transition-colors duration-300 opacity-70"
                  style={{ color: `var(--color-primary)` }}
                >
                  Focus in progress...
                </p>
              </div>
              
              <button 
                onClick={() => setIsActive(false)}
                className="w-full rounded-3xl px-6 py-5 font-bold transition-all duration-300 border-2 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: `var(--color-secondary)`,
                  borderColor: `var(--color-primary)`,
                  color: `var(--color-primary)`,
                }}
              >
                End Session 🛑
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
