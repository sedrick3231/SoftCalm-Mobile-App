import React from 'react';
import { Header } from '../components/Header';
import { useSensory } from '../context/SensoryContext';
import { useBackButton } from '../hooks/useBackButton';

interface SensoryPreferenceSetupScreenProps {
  onBack: () => void;
  onComplete: () => void;
}

export function SensoryPreferenceSetupScreen({ onBack, onComplete }: SensoryPreferenceSetupScreenProps) {
  useBackButton(onBack);
  const { settings, updateComfortLevel } = useSensory();

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <Header onBack={onBack} />
      
      <div className="px-5 py-8 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">⚙️</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Sensory Preferences
          </h2>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Set your comfort level
          </p>
        </div>

        {/* Comfort Level Slider */}
        <div 
          className="rounded-3xl p-8 border-2 transition-colors duration-300 mb-6"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <p 
              className="text-lg font-bold transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Comfort Level
            </p>
            <p 
              className="text-2xl font-bold transition-colors duration-300"
              style={{ color: `var(--color-accent)` }}
            >
              {settings.comfortLevel}%
            </p>
          </div>
          
          <input
            type="range"
            min="0"
            max="100"
            value={settings.comfortLevel}
            onChange={(e) => updateComfortLevel(Number(e.target.value))}
            className="w-full h-4 rounded-full appearance-none cursor-pointer transition-all duration-300"
            style={{
              background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${settings.comfortLevel}%, var(--color-secondary) ${settings.comfortLevel}%, var(--color-secondary) 100%)`,
            }}
          />
          
          <div className="flex justify-between mt-6 text-sm font-semibold">
            <span style={{ color: `var(--color-primary)` }}>Minimal 🌙</span>
            <span style={{ color: `var(--color-primary)` }}>Normal 🌞</span>
          </div>

          {/* Description */}
          <p 
            className="text-sm mt-6 transition-colors duration-300 opacity-70 leading-relaxed"
            style={{ color: `var(--color-primary)` }}
          >
            {settings.comfortLevel < 40 ? (
              "✨ Maximum comfort mode - minimal stimulation"
            ) : settings.comfortLevel < 70 ? (
              "🌤️ Balanced - comfortable and functional"
            ) : (
              "🌞 Full experience - all features enabled"
            )}
          </p>
        </div>

        {/* Tip Card */}
        <div 
          className="rounded-3xl p-6 border-2 transition-colors duration-300 text-center mb-8"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <p 
            className="font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            💡 Quick Tip
          </p>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Lower levels reduce brightness and visual complexity for maximum comfort.
          </p>
        </div>

        {/* Complete Button */}
        <button
          onClick={onComplete}
          className="w-full rounded-3xl p-6 text-white transition-all duration-300 font-bold active:scale-95 hover:shadow-lg"
          style={{
            backgroundColor: `var(--color-primary)`,
          }}
        >
          All Set! 🎉
        </button>
      </div>
    </div>
  );
}
