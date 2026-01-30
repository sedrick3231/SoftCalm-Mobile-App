import React from 'react';
import { useSensory } from '../context/SensoryContext';
import { useBackButton } from '../hooks/useBackButton';

interface SensoryComfortModeScreenProps {
  onBack: () => void;
}

export function SensoryComfortModeScreen({ onBack }: SensoryComfortModeScreenProps) {
  useBackButton(onBack);
  const { settings, updateComfortLevel } = useSensory();

  const getComfortDescription = () => {
    if (settings.comfortLevel < 25) return { emoji: '🌙', text: 'Ultra Calm - Minimal stimulation' };
    if (settings.comfortLevel < 50) return { emoji: '✨', text: 'Very Calm - Reduced intensity' };
    if (settings.comfortLevel < 75) return { emoji: '🌸', text: 'Moderate - Balanced comfort' };
    return { emoji: '🌞', text: 'Normal - Full experience' };
  };

  const comfort = getComfortDescription();

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-6 py-8">

        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🎚️</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Sensory Comfort Mode
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            One slider for complete control
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <div 
            className="rounded-3xl p-6 text-center border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="text-7xl mb-4">{comfort.emoji}</div>
            <p 
              className="text-3xl font-bold mb-2 transition-colors duration-300"
              style={{ color: `var(--color-accent)` }}
            >
              {settings.comfortLevel}%
            </p>
            <p 
              className="text-lg transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              {comfort.text}
            </p>
          </div>

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
              Master Comfort Control
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value={settings.comfortLevel}
              onChange={(e) => updateComfortLevel(Number(e.target.value))}
              className="w-full h-4 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${settings.comfortLevel}%, var(--color-secondary) ${settings.comfortLevel}%, var(--color-secondary) 100%)`,
              }}
            />
            <div 
              className="flex justify-between mt-3 text-sm transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>

          <div 
            className="rounded-3xl p-6 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="space-y-3">
              <p 
                className="text-lg font-medium mb-4 transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                ✨ What This Controls:
              </p>
              <div className="space-y-2 text-sm transition-colors duration-300 opacity-70"
                style={{ color: `var(--color-primary)` }}>
                <p>• 🔆 Brightness: {settings.brightness}%</p>
                <p>• ◐ Contrast: {settings.contrast}%</p>
                <p>• ▪️ Visual Density: {settings.visualDensity}%</p>
              </div>
            </div>
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
              💡 Unique Feature
            </p>
            <p 
              className="text-sm leading-relaxed transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              This single slider adjusts all sensory settings at once for instant comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
