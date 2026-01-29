import React from 'react';
import { Header } from '../components/Header';
import { useSensory } from '../context/SensoryContext';
import { Volume2, VolumeX } from 'lucide-react';

interface SoundControlScreenProps {
  onBack: () => void;
}

export function SoundControlScreen({ onBack }: SoundControlScreenProps) {
  const { settings, toggleSound } = useSensory();

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <Header onBack={onBack} />
      
      <div className="px-5 py-8 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🔊</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Sound Control
          </h2>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Manage your audio experience
          </p>
        </div>

        {/* Toggle Card */}
        <button
          onClick={toggleSound}
          className="w-full rounded-3xl p-6 border-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-left">
              <div 
                className="rounded-2xl p-4 transition-colors duration-300"
                style={{ backgroundColor: `var(--color-primary)` }}
              >
                {settings.soundEnabled ? (
                  <Volume2 size={28} className="text-white" />
                ) : (
                  <VolumeX size={28} className="text-white" />
                )}
              </div>
              <div>
                <p 
                  className="font-bold transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  Sound Feedback
                </p>
                <p 
                  className="text-sm transition-colors duration-300 opacity-70 mt-1"
                  style={{ color: `var(--color-primary)` }}
                >
                  {settings.soundEnabled ? 'Gentle sounds enabled' : 'Silent mode active'}
                </p>
              </div>
            </div>
            
            {/* Toggle Switch */}
            <div
              className="relative w-14 h-8 rounded-full transition-all duration-300"
              style={{ backgroundColor: `var(--color-accent)` }}
            >
              <div
                className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 transform"
                style={{
                  left: settings.soundEnabled ? '1.75rem' : '0.25rem',
                }}
              />
            </div>
          </div>
        </button>

        {/* Status Cards */}
        <div className="mt-6 space-y-4">
          {/* Tips */}
          <div 
            className="rounded-3xl p-6 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <p 
              className="font-bold mb-2 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              💡 Sound Tips
            </p>
            <p 
              className="text-sm transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              All sounds in this app are optional and gentle. You have complete control.
            </p>
          </div>

          {/* Current Status */}
          <div 
            className="rounded-3xl p-6 border-2 transition-colors duration-300 text-center"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <p 
              className="text-lg font-bold transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              {settings.soundEnabled ? '🔊 Sounds On' : '🔇 Silent Mode'}
            </p>
            <p 
              className="text-sm mt-2 transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              {settings.soundEnabled 
                ? 'Gentle audio feedback is enabled'
                : 'Complete silence - no sounds'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
