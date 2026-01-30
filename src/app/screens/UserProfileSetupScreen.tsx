import React, { useState } from 'react';
import { useBackButton } from '../hooks/useBackButton';

interface UserProfileSetupScreenProps {
  onBack: () => void;
  onNext: () => void;
}

export function UserProfileSetupScreen({ onBack, onNext }: UserProfileSetupScreenProps) {
  useBackButton(onBack);
  const [displayName, setDisplayName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-300"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">👤</div>
          <h2 
            className="text-3xl font-bold mb-3 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Tell us about you
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Help us personalize your experience
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label 
              className="block text-sm font-medium mb-2 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Display Name (Optional)
            </label>
            <input
              type="text"
              placeholder="How should we call you?"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full rounded-2xl px-5 py-4 border-2 transition-all duration-300 focus:outline-none focus:scale-105"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
                color: `var(--color-primary)`,
              }}
            />
          </div>

          <div>
            <label 
              className="block text-sm font-medium mb-2 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Age (Optional)
            </label>
            <input
              type="number"
              placeholder="Your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-2xl px-5 py-4 border-2 transition-all duration-300 focus:outline-none focus:scale-105"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
                color: `var(--color-primary)`,
              }}
            />
          </div>

          <div className="pt-4">
            <button
              onClick={onNext}
              className="w-full rounded-3xl px-6 py-5 font-bold text-white transition-all duration-300 border-2 hover:scale-105 active:scale-95 hover:shadow-lg"
              style={{
                backgroundColor: `var(--color-primary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              Continue 🌸
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
