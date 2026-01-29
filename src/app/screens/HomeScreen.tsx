import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  onBack?: () => void;
}

export function HomeScreen({ onNavigate, onBack }: HomeScreenProps) {
  const { user } = useAuth();

  const menuItems = [
    { id: 'calm-activities', label: 'Daily Calm Activities', emoji: '💖' },
    { id: 'focus-mode', label: 'Focus Mode', emoji: '🎯' },
    { id: 'relaxation-mode', label: 'Relaxation Mode', emoji: '🌿' },
    { id: 'quiet-space', label: 'Quiet Space', emoji: '🏠' },
    { id: 'visual-comfort', label: 'Visual Comfort', emoji: '👁️' },
    { id: 'sound-control', label: 'Sound Control', emoji: '🔊' },
    { id: 'mood-tracker', label: 'Mood Tracker', emoji: '📊' },
    { id: 'help', label: 'Help & Guidance', emoji: '📚' },
    { id: 'settings', label: 'Settings', emoji: '⚙️' },
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-6 left-5 min-h-[48px] px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95 z-10"
          style={{ color: `var(--color-primary)` }}
        >
          <ArrowLeft size={24} />
        </button>
      )}
      
      <div className="px-6 py-8">
        <div className="mb-12 text-center mt-4">
          <h2 
            className="text-3xl font-bold mb-3 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Welcome back, {user?.name || 'Friend'} 🌸
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            How can we help you today?
          </p>
        </div>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="w-full rounded-3xl p-6 flex items-center gap-5 border-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              <span className="text-4xl">{item.emoji}</span>
              <span 
                className="text-lg font-medium transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
