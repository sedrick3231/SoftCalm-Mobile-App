import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface AboutScreenProps {
  onBack: () => void;
}

export function AboutScreen({ onBack }: AboutScreenProps) {
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
          <div className="text-6xl mb-4">ℹ️</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            About Soft Calm
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Our mission and vision
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <div 
            className="rounded-3xl text-center py-6 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <div className="text-7xl mb-4">🌸</div>
            <h3 
              className="text-2xl font-bold mb-2 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Soft Calm
            </h3>
            <p 
              className="text-lg transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              Version 1.0.0
            </p>
          </div>

          <div 
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
              💙 Our Mission
            </h3>
            <p 
              className="text-sm leading-relaxed transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              To create a calm, safe digital space for people with sensory hypersensitivity. 
              We believe technology should adapt to you, not the other way around.
            </p>
          </div>

          <div 
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
              ✨ Design Principles
            </h3>
            <div className="space-y-2 text-sm transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}>
              <p>• No intrusive ads or pop-ups</p>
              <p>• No flashing or sudden changes</p>
              <p>• Complete user control</p>
              <p>• Gentle, predictable interactions</p>
              <p>• Minimal cognitive load</p>
            </div>
          </div>

          <div 
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
              🌟 Unique Features
            </h3>
            <p 
              className="text-sm leading-relaxed transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              Our Sensory Comfort Mode slider is a one-of-a-kind feature that 
              adjusts brightness, contrast, and visual density with a single control.
            </p>
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
              💚 Thank You
            </p>
            <p 
              className="text-sm leading-relaxed transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              For trusting us with your digital well-being. You matter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
