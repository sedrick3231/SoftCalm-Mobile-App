import React from 'react';
import { useBackButton } from '../hooks/useBackButton';

interface QuietSpaceScreenProps {
  onBack: () => void;
}

export function QuietSpaceScreen({ onBack }: QuietSpaceScreenProps) {
  useBackButton(onBack);
  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-6 py-8">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🏠</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Quiet Space
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Your personal sanctuary
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <div 
            className="rounded-3xl p-8 text-center border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="text-8xl mb-6">🌙</div>
            <p 
              className="text-2xl font-bold mb-4 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              You are safe here
            </p>
            <p 
              className="text-base leading-relaxed transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              Take all the time you need. This is your peaceful space.
            </p>
          </div>

          <div 
            className="rounded-3xl p-6 text-center border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <p 
              className="text-lg font-medium mb-3 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              🫂 Breathing Exercise
            </p>
            <p 
              className="text-sm leading-relaxed transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              Breathe in slowly for 4 counts, hold for 4, breathe out for 4. Repeat gently.
            </p>
          </div>

          <div 
            className="rounded-3xl p-6 text-center border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <p 
              className="text-lg font-medium mb-3 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              💙 Gentle Reminder
            </p>
            <p 
              className="text-sm leading-relaxed transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              You're doing great. One moment at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
