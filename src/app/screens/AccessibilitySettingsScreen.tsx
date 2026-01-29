import React, { useState } from 'react';
import { Header } from '../components/Header';
import { useSensory } from '../context/SensoryContext';

interface AccessibilitySettingsScreenProps {
  onBack: () => void;
}

export function AccessibilitySettingsScreen({ onBack }: AccessibilitySettingsScreenProps) {
  const [textSize, setTextSize] = useState(100);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const { settings } = useSensory();

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <Header onBack={onBack} />
      
      <div className="px-5 py-8 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">♿</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Accessibility Settings
          </h2>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Personalize your experience
          </p>
        </div>

        {/* Settings */}
        <div className="space-y-4">
          {/* Text Size */}
          <div 
            className="rounded-3xl p-6 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <p 
                className="font-bold transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                Text Size
              </p>
              <p 
                className="font-semibold transition-colors duration-300"
                style={{ color: `var(--color-accent)` }}
              >
                {textSize}%
              </p>
            </div>
            
            <input
              type="range"
              min="80"
              max="150"
              value={textSize}
              onChange={(e) => setTextSize(Number(e.target.value))}
              className="w-full h-3 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${(textSize - 80) / 0.7}%, var(--color-secondary) ${(textSize - 80) / 0.7}%, var(--color-secondary) 100%)`,
              }}
            />
            
            <div className="flex justify-between mt-4 text-xs font-semibold">
              <span style={{ color: `var(--color-primary)` }}>Smaller</span>
              <span style={{ color: `var(--color-primary)` }}>Larger</span>
            </div>
          </div>

          {/* Reduced Motion */}
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            className="w-full rounded-3xl p-6 border-2 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p 
                  className="font-bold transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  Reduced Motion
                </p>
                <p 
                  className="text-sm transition-colors duration-300 opacity-70 mt-1"
                  style={{ color: `var(--color-primary)` }}
                >
                  Minimize animations
                </p>
              </div>
              
              <div
                className="relative w-14 h-8 rounded-full transition-all duration-300"
                style={{ backgroundColor: `var(--color-accent)` }}
              >
                <div
                  className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 transform"
                  style={{
                    left: reducedMotion ? '1.75rem' : '0.25rem',
                  }}
                />
              </div>
            </div>
          </button>

          {/* High Contrast */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className="w-full rounded-3xl p-6 border-2 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p 
                  className="font-bold transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  High Contrast
                </p>
                <p 
                  className="text-sm transition-colors duration-300 opacity-70 mt-1"
                  style={{ color: `var(--color-primary)` }}
                >
                  Increase visibility
                </p>
              </div>
              
              <div
                className="relative w-14 h-8 rounded-full transition-all duration-300"
                style={{ backgroundColor: `var(--color-accent)` }}
              >
                <div
                  className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 transform"
                  style={{
                    left: highContrast ? '1.75rem' : '0.25rem',
                  }}
                />
              </div>
            </div>
          </button>
        </div>

        {/* Footer Message */}
        <div 
          className="mt-10 rounded-3xl p-6 text-center border-2 transition-colors duration-300"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <p 
            className="font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            💙 Built for Everyone
          </p>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            These settings help make Soft Calm accessible and comfortable for all users.
          </p>
        </div>
      </div>
    </div>
  );
}
