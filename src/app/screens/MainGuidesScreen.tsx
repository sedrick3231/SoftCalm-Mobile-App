import React from 'react';
import { BookOpen, AlertCircle, Clock, Users } from 'lucide-react';
import { useSensory } from '../context/SensoryContext';

interface MainGuidesScreenProps {
  onSelectGuide?: (guide: string) => void;
}

export function MainGuidesScreen({ onSelectGuide }: MainGuidesScreenProps) {
  const { settings } = useSensory();

  const guides = [
    {
      id: 'overwhelmed',
      icon: AlertCircle,
      title: 'When Overwhelmed',
      preview: 'Calm techniques for intense feelings',
    },
    {
      id: 'routines',
      icon: Clock,
      title: 'Daily Routines',
      preview: 'Build calm into your day',
    },
    {
      id: 'triggers',
      icon: BookOpen,
      title: 'Understanding Triggers',
      preview: 'Recognize what affects you',
    },
    {
      id: 'support',
      icon: Users,
      title: 'Building Support',
      preview: 'Create calm practices',
    },
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-5 py-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 
            className="text-3xl font-bold transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Guides
          </h1>
          <p 
            className="text-sm mt-2 transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Learn calm techniques at your own pace
          </p>
        </div>

        {/* Guides List */}
        <div className="space-y-3">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <button
                key={guide.id}
                onClick={() => onSelectGuide?.(guide.id)}
                className="w-full rounded-3xl p-6 border-2 transition-all duration-300 text-left hover:scale-105 hover:shadow-lg active:scale-95"
                style={{
                  backgroundColor: `var(--color-secondary)`,
                  borderColor: `var(--color-primary)`,
                }}
              >
                <div className="flex items-center gap-5">
                  <div 
                    className="rounded-2xl p-4 flex-shrink-0 transition-colors duration-300"
                    style={{ backgroundColor: `var(--color-primary)` }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="font-bold text-lg transition-colors duration-300"
                      style={{ color: `var(--color-primary)` }}
                    >
                      {guide.title}
                    </h3>
                    <p 
                      className="text-sm mt-1 transition-colors duration-300 opacity-70"
                      style={{ color: `var(--color-primary)` }}
                    >
                      {guide.preview}
                    </p>
                  </div>
                  <span 
                    className="text-xl transition-colors duration-300"
                    style={{ color: `var(--color-primary)` }}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer Message */}
        <div 
          className="mt-10 p-5 rounded-2xl text-center text-sm transition-colors duration-300"
          style={{
            backgroundColor: `var(--color-secondary)`,
            color: `var(--color-primary)`,
          }}
        >
          💡 Tips and guidance to support your journey
        </div>

      </div>
    </div>
  );
}
