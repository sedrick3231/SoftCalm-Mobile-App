import React from 'react';
import { useBackButton } from '../hooks/useBackButton';

interface HelpScreenProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
}

export function HelpScreen({ onBack, onNavigate }: HelpScreenProps) {
  useBackButton(onBack);
  const helpTopics = [
    { id: 'tips', title: 'Tips for Hypersensitive Users', emoji: '💡' },
    { id: 'emergency', title: 'Emergency Calm Screen', emoji: '🆘' },
    { id: 'about', title: 'About Soft Calm', emoji: 'ℹ️' },
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-6 py-8">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">📚</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Help & Guidance
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            We're here to support you
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-4">
          {helpTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onNavigate(topic.id)}
              className="w-full rounded-3xl p-6 flex items-center gap-5 border-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              <span className="text-4xl">{topic.emoji}</span>
              <span 
                className="text-lg font-medium transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                {topic.title}
              </span>
            </button>
          ))}

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
              Need Support? 💚
            </p>
            <p 
              className="text-sm leading-relaxed transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              Remember: You can always reach out for help. You're not alone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
