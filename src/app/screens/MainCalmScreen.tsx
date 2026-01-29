import React from 'react';
import { Wind, Compass, Music, Eye } from 'lucide-react';
import { useSensory } from '../context/SensoryContext';

interface MainCalmScreenProps {
  onSelectFeature?: (feature: string) => void;
}

export function MainCalmScreen({ onSelectFeature }: MainCalmScreenProps) {
  const { settings } = useSensory();

  const features = [
    {
      id: 'breathing',
      label: 'Breathing Exercise',
      Icon: Wind,
      description: 'Guided breathing patterns to calm your mind',
    },
    {
      id: 'grounding',
      label: 'Grounding Technique',
      Icon: Compass,
      description: '5-4-3-2-1 sensory grounding technique',
    },
    {
      id: 'sounds',
      label: 'Calming Sounds',
      Icon: Music,
      description: 'Gentle ambient sounds for relaxation',
    },
    {
      id: 'visual',
      label: 'Visual Calm',
      Icon: Eye,
      description: 'Soothing visual patterns and animations',
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
            className="text-3xl font-bold transition-colors duration-300 mb-2"
            style={{ color: `var(--color-primary)` }}
          >
            Calm Tools
          </h1>
          <p 
            className="text-sm transition-colors duration-300"
            style={{ color: `var(--color-accent)` }}
          >
            Choose what you need right now
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          {features.map((feature) => {
            const Icon = feature.Icon;
            return (
              <button
                key={feature.id}
                onClick={() => onSelectFeature?.(feature.id)}
                className="w-full rounded-3xl p-6 transition-all duration-300 hover:scale-105 active:scale-95 border-2 hover:shadow-lg group"
                style={{
                  backgroundColor: `var(--color-secondary)`,
                  borderColor: `var(--color-primary)`,
                }}
              >
                <div className="flex items-center gap-5">
                  <div 
                    className="p-3 rounded-2xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `var(--color-primary)`,
                    }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h2 
                      className="font-bold text-lg transition-colors duration-300"
                      style={{ color: `var(--color-primary)` }}
                    >
                      {feature.label}
                    </h2>
                    <p 
                      className="text-xs transition-colors duration-300 mt-1 opacity-70"
                      style={{ color: `var(--color-primary)` }}
                    >
                      {feature.description}
                    </p>
                  </div>
                  <span 
                    className="text-xl transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: `var(--color-primary)` }}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer message */}
        <div 
          className="mt-10 p-5 rounded-2xl text-center text-sm"
          style={{
            backgroundColor: `var(--color-secondary)`,
            color: `var(--color-primary)`,
          }}
        >
          💚 Take your time. There's no rush.
        </div>
      </div>
    </div>
  );
}
