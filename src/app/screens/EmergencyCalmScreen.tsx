import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useBackButton } from '../hooks/useBackButton';

interface EmergencyCalmScreenProps {
  onBack: () => void;
}

export function EmergencyCalmScreen({ onBack }: EmergencyCalmScreenProps) {
  const [breathCount, setBreathCount] = useState(0);
  useBackButton(onBack);

  return (
    <div
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-6 py-8">
        <div className="max-w-md mx-auto space-y-8">
          <div
            className="rounded-3xl text-center py-12 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="text-8xl mb-6">🌙</div>
            <h2
              className="text-3xl font-bold mb-4 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              You are safe
            </h2>
            <p
              className="text-xl leading-relaxed transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              This moment will pass. You've got this.
            </p>
          </div>

          <div
            className="rounded-3xl text-center py-8 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <p
              className="text-2xl font-bold mb-8 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Breathe with me 🫁
            </p>
            <button
              onClick={() => setBreathCount(breathCount + 1)}
              className="w-32 h-32 rounded-full text-4xl font-bold mx-auto transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg border-2"
              style={{
                backgroundColor: `var(--color-primary)`,
                color: 'white',
                borderColor: `var(--color-primary)`,
              }}
            >
              {breathCount}
            </button>
            <p
              className="text-lg mt-8 transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              Tap when you breathe in and out
            </p>
          </div>

          <div
            className="rounded-3xl py-6 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="space-y-4 text-lg leading-relaxed">
              <p style={{ color: `var(--color-primary)` }}>🌸 You are here now</p>
              <p style={{ color: `var(--color-primary)` }}>💙 You are doing your best</p>
              <p style={{ color: `var(--color-primary)` }}>✨ This feeling is temporary</p>
              <p style={{ color: `var(--color-primary)` }}>🌈 You are stronger than you know</p>
            </div>
          </div>

          <div
            className="rounded-3xl text-center py-6 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <p
              className="text-lg font-medium mb-3 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              🆘 Need More Help?
            </p>
            <p
              className="text-sm leading-relaxed transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              If you're in crisis, please reach out to a mental health professional or crisis hotline in your area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
