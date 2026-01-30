import React from 'react';
import { useBackButton } from '../hooks/useBackButton';

interface RelaxationModeScreenProps {
  onBack: () => void;
}

export function RelaxationModeScreen({ onBack }: RelaxationModeScreenProps) {
  useBackButton(onBack);
  const techniques = [
    { id: 1, title: 'Deep Breathing', description: 'Breathe slowly and deeply', emoji: '🫁' },
    { id: 2, title: 'Progressive Relaxation', description: 'Release muscle tension', emoji: '💆' },
    { id: 3, title: 'Visualization', description: 'Imagine peaceful scenes', emoji: '🌄' },
    { id: 4, title: 'Body Scan', description: 'Notice sensations gently', emoji: '✨' },
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-6 py-8">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🌿</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Relaxation Mode
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Find your peace
          </p>
        </div>
        
        <div className="max-w-md mx-auto space-y-4">
          {techniques.map((technique) => (
            <div 
              key={technique.id}
              className="rounded-3xl p-6 border-2 flex items-start gap-4 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              <span className="text-4xl flex-shrink-0">{technique.emoji}</span>
              <div className="flex-1">
                <h3 
                  className="text-lg font-bold mb-2 transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  {technique.title}
                </h3>
                <p 
                  className="text-base transition-colors duration-300 opacity-70"
                  style={{ color: `var(--color-primary)` }}
                >
                  {technique.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
