import React from 'react';
import { useAuth } from '../context/AuthContext';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onLogin: () => void;
  onDemoLogin?: () => void;
}

export function WelcomeScreen({ onGetStarted, onLogin, onDemoLogin }: WelcomeScreenProps) {
  const { login } = useAuth();

  const handleDemoLogin = async () => {
    const success = await login('demo@softcalm.com', 'demo123');
    if (success && onDemoLogin) {
      onDemoLogin();
    }
  };
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-300"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="w-full max-w-sm flex flex-col items-center">
        <div className="text-8xl mb-8">🌸</div>

        <h2 
          className="text-4xl text-center font-bold mb-6 transition-colors duration-300"
          style={{ color: `var(--color-primary)` }}
        >
          Welcome to Soft Calm
        </h2>

        <p 
          className="text-lg text-center mb-12 leading-relaxed transition-colors duration-300 opacity-70"
          style={{ color: `var(--color-primary)` }}
        >
          A gentle, peaceful app designed for sensory comfort and emotional well-being. 
          Take control of your digital experience. 💙
        </p>

        <div className="w-full space-y-4">
          <button
            onClick={onGetStarted}
            className="w-full rounded-3xl px-6 py-5 font-bold text-white transition-all duration-300 border-2 hover:scale-105 active:scale-95 hover:shadow-lg"
            style={{
              backgroundColor: `var(--color-primary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            Get Started 🌟
          </button>

          <button
            onClick={handleDemoLogin}
            className="w-full rounded-3xl px-6 py-5 font-bold transition-all duration-300 border-2 hover:scale-105 active:scale-95 hover:shadow-lg"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
              color: `var(--color-primary)`,
            }}
          >
            Try Demo 🎨
          </button>

          <button
            onClick={onLogin}
            className="w-full rounded-3xl px-6 py-5 font-bold border-2 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
              color: `var(--color-primary)`,
            }}
          >
            I Already Have an Account 🔑
          </button>
        </div>
      </div>
    </div>
  );
}
