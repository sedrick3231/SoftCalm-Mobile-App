import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TipsScreenProps {
  onBack: () => void;
}

export function TipsScreen({ onBack }: TipsScreenProps) {
  const tips = [
    { 
      id: 1, 
      title: 'Take Breaks', 
      description: 'Step away from screens regularly. Your comfort matters.',
      emoji: '⏸️'
    },
    { 
      id: 2, 
      title: 'Control Your Environment', 
      description: 'Adjust lighting, sounds, and temperature to your needs.',
      emoji: '🌡️'
    },
    { 
      id: 3, 
      title: 'Use Comfort Mode', 
      description: 'Our sensory comfort slider helps reduce stimulation instantly.',
      emoji: '🎚️'
    },
    { 
      id: 4, 
      title: 'Practice Grounding', 
      description: '5-4-3-2-1: Name 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste.',
      emoji: '🧘'
    },
    { 
      id: 5, 
      title: 'Be Patient With Yourself', 
      description: 'Your sensitivity is valid. Progress is not linear.',
      emoji: '💙'
    },
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-6 py-8">
        <button
          onClick={onBack}
          className="mb-8 min-h-[48px] px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ color: `var(--color-primary)` }}
        >
          <ArrowLeft size={24} />
        </button>

        <div className="text-center mb-10">
          <div className="text-6xl mb-4">💡</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Tips for You
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Gentle guidance for daily life
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-4">
          {tips.map((tip) => (
            <div 
              key={tip.id}
              className="rounded-3xl p-6 flex items-start gap-4 border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              <span className="text-4xl flex-shrink-0">{tip.emoji}</span>
              <div className="flex-1">
                <h3 
                  className="text-lg font-bold mb-2 transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  {tip.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed transition-colors duration-300 opacity-70"
                  style={{ color: `var(--color-primary)` }}
                >
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
