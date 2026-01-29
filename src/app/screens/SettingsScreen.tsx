import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SettingsScreenProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
}

export function SettingsScreen({ onBack, onNavigate }: SettingsScreenProps) {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    onNavigate('welcome');
  };

  const settingsOptions = [
    { id: 'sensory-comfort', label: 'Sensory Comfort Mode', emoji: '🎚️' },
    { id: 'visual-comfort', label: 'Visual Comfort', emoji: '👁️' },
    { id: 'sound-control', label: 'Sound Control', emoji: '🔊' },
    { id: 'notifications-control', label: 'Notifications', emoji: '🔔' },
    { id: 'accessibility', label: 'Accessibility Settings', emoji: '♿' },
  ];

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
          <div className="text-6xl mb-4">⚙️</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Settings
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Customize your experience
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-4">
          <div 
            className="rounded-3xl text-center py-4 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <p 
              className="text-lg font-medium mb-2 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              👤 Signed in as
            </p>
            <p 
              className="text-sm transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              {user?.email || 'Guest'}
            </p>
          </div>

          {settingsOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNavigate(option.id)}
              className="w-full rounded-3xl p-6 flex items-center gap-5 border-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              <span className="text-4xl">{option.emoji}</span>
              <span 
                className="text-lg font-medium transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                {option.label}
              </span>
            </button>
          ))}

          <div className="pt-4">
            <button
              onClick={handleLogout}
              className="w-full rounded-3xl px-6 py-5 font-bold text-white transition-all duration-300 border-2 hover:scale-105 active:scale-95 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)`,
                borderColor: `var(--color-accent)`,
              }}
            >
              Sign Out 👋
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
