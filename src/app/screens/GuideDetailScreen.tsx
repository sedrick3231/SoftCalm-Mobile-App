import React from 'react';
import { useSensory } from '../context/SensoryContext';
import { ArrowLeft } from 'lucide-react';

interface GuideDetailScreenProps {
  guideId: string;
  onBack?: () => void;
}

export function GuideDetailScreen({ guideId, onBack }: GuideDetailScreenProps) {
  const { settings } = useSensory();

  const guides: Record<string, any> = {
    overwhelmed: {
      title: 'When You\'re Overwhelmed',
      emoji: '😰',
      sections: [
        {
          heading: 'Stop',
          content: 'Take 30 seconds to pause what you\'re doing. It\'s okay.',
          tips: ['Find a safe spot', 'Sit or lay down', 'You are safe']
        },
        {
          heading: 'Notice',
          content: 'What do you feel right now? Name it without judgment.',
          tips: ['Angry?', 'Scared?', 'Just overwhelmed?']
        },
        {
          heading: 'Ground',
          content: 'Use your senses to come back to now.',
          tips: ['See 5 things', 'Touch 4 things', 'Use the grounding tool']
        },
        {
          heading: 'Breathe',
          content: 'Slow, gentle breaths. No performance needed.',
          tips: ['In for 4 counts', 'Out for 4 counts', 'That\'s all']
        }
      ]
    },
    routines: {
      title: 'Daily Routines',
      emoji: '🌅',
      sections: [
        {
          heading: 'Morning Calm (5 min)',
          content: 'Start your day gently.',
          tips: ['3 deep breaths', 'Set an intention', 'Sip warm water']
        },
        {
          heading: 'Midday Reset (2 min)',
          content: 'Pause when energy dips.',
          tips: ['Stand and stretch', 'Look outside', 'Breathe']
        },
        {
          heading: 'Evening Wind Down (10 min)',
          content: 'Prepare for rest.',
          tips: ['Visual calm exercise', 'Calming sounds', 'Reflect on the day']
        }
      ]
    },
    triggers: {
      title: 'Understanding Triggers',
      emoji: '🔔',
      sections: [
        {
          heading: 'What\'s a Trigger?',
          content: 'Anything that makes you feel upset, anxious, or unsafe.',
          tips: ['People', 'Situations', 'Sounds', 'Memories']
        },
        {
          heading: 'Notice Your Triggers',
          content: 'Pay attention to what affects you.',
          tips: ['Keep a simple list', 'Note how you feel', 'No judgment']
        },
        {
          heading: 'Build Your Response Plan',
          content: 'What helps after a trigger?',
          tips: ['Breathing exercise', 'Grounding', 'Safe person to call']
        }
      ]
    },
    support: {
      title: 'Building Support',
      emoji: '🤝',
      sections: [
        {
          heading: 'Personal Practices',
          content: 'What you do alone to feel better.',
          tips: ['Breathing exercises', 'Grounding', 'Calm sounds']
        },
        {
          heading: 'Support Network',
          content: 'People who help you feel safe.',
          tips: ['One trusted friend', 'Family member', 'Professional if available']
        },
        {
          heading: 'Resources',
          content: 'Tools and places to turn to.',
          tips: ['This app', 'Hotlines if in crisis', 'Community groups']
        }
      ]
    }
  };

  const guide = guides[guideId];

  if (!guide) {
    return (
      <div 
        className="min-h-screen transition-colors duration-300 pb-24"
        style={{ backgroundColor: `var(--color-background)` }}
      >
        <div className="px-5 py-8 max-w-2xl mx-auto text-center">
          <p 
            className="transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Guide not found
          </p>
          <button
            onClick={onBack}
            className="mt-6 rounded-3xl px-8 py-5 text-white font-bold transition-all duration-300"
            style={{
              backgroundColor: `var(--color-primary)`,
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

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

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-6xl mb-4">{guide.emoji}</p>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            {guide.title}
          </h2>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Take your time reading this
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-5 mb-10">
          {guide.sections.map((section: any, idx: number) => (
            <div 
              key={idx}
              className="rounded-3xl p-6 border-2 transition-colors duration-300"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              <h3 
                className="text-lg font-bold mb-3 transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                {section.heading}
              </h3>
              <p 
                className="mb-4 transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                {section.content}
              </p>
              <div className="space-y-2">
                {section.tips.map((tip: string, tipIdx: number) => (
                  <div 
                    key={tipIdx}
                    className="text-sm transition-colors duration-300"
                    style={{ color: `var(--color-primary)` }}
                  >
                    ✓ {tip}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className="rounded-3xl p-8 text-center border-2 transition-colors duration-300 mb-6"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <p 
            className="font-bold transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            💚 Remember: You're Doing Great
          </p>
        </div>

        <button
          onClick={onBack}
          className="w-full rounded-3xl px-6 py-5 font-bold transition-all duration-300 border-2 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
            color: `var(--color-primary)`,
          }}
        >
          Done Reading
        </button>
      </div>
    </div>
  );
}
