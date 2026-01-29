import React, { useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6 transition-colors duration-300"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="text-center">
        <div className="mb-8">
          <div className="text-8xl mb-4">🌸</div>
          <h1 
            className="text-4xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Soft Calm
          </h1>
          <p 
            className="text-xl transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Your peaceful space
          </p>
        </div>
      </div>
    </div>
  );
}
