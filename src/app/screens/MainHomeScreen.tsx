import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useSensory } from '../context/SensoryContext';
import { Wind, Compass, Music, Eye, Heart } from 'lucide-react';
import { useBackButton } from '../hooks/useBackButton';

interface MainHomeScreenProps {
  onNavigateToCalmNow?: () => void;
  onNavigateToMoodTracker?: () => void;
  onNavigateToGrounding?: () => void;
  onNavigateToSounds?: () => void;
  onBack?: () => void;
  onTabChange?: (tab: 'home' | 'calm' | 'guides' | 'settings') => void;
}

export function MainHomeScreen({ onNavigateToCalmNow, onNavigateToMoodTracker, onNavigateToGrounding, onNavigateToSounds, onBack, onTabChange }: MainHomeScreenProps) {
  useBackButton(onBack);
  React.useEffect(() => {
    onTabChange?.('home');
  }, [onTabChange]);
  const { user } = useAuth();
  const { settings } = useSensory();

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-5 py-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 
            className="text-3xl font-bold transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Hello, {user?.name?.split(' ')[0] || 'Friend'}
          </h1>
          <p 
            className="text-sm mt-2 transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            How are you feeling today?
          </p>
        </div>

        {/* Main CTA Button */}
        <button
          onClick={onNavigateToCalmNow}
          className="w-full rounded-3xl p-8 text-white transition-all duration-300 transform active:scale-95 hover:shadow-xl shadow-lg mb-8 border-2 border-transparent"
          style={{
            background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)`,
          }}
        >
          <div className="text-center">
            <Wind size={40} className="mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-2">Take a Breath</h2>
            <p className="text-sm opacity-90">Find calm in just 2 minutes</p>
          </div>
        </button>

        {/* Quick Tools */}
        <div className="mb-8">
          <p 
            className="text-xs font-bold uppercase tracking-widest mb-3 transition-colors duration-300"
            style={{ color: `var(--color-accent)` }}
          >
            Quick Access
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { Icon: Wind, label: 'Breathe', handler: onNavigateToCalmNow },
              { Icon: Compass, label: 'Ground', handler: onNavigateToGrounding },
              { Icon: Music, label: 'Sounds', handler: onNavigateToSounds },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={item.handler}
                className="rounded-2xl p-5 transition-all duration-300 active:scale-95 hover:scale-105 border-2"
                style={{
                  backgroundColor: `var(--color-secondary)`,
                  borderColor: `var(--color-primary)`,
                }}
              >
                <item.Icon size={28} style={{ color: `var(--color-primary)` }} className="mx-auto mb-2" />
                <p 
                  className="text-xs font-semibold transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  {item.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Mood Check-in */}
        <button
          onClick={onNavigateToMoodTracker}
          className="w-full rounded-3xl p-6 border-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-left">
              <Heart size={28} style={{ color: `var(--color-primary)` }} />
              <div>
                <p 
                  className="font-bold transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  Check Your Mood
                </p>
                <p 
                  className="text-xs transition-colors duration-300 opacity-70 mt-1"
                  style={{ color: `var(--color-primary)` }}
                >
                  How are you right now?
                </p>
              </div>
            </div>
            <span 
              className="text-xl transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              →
            </span>
          </div>
        </button>

        {/* Supportive Footer */}
        <div 
          className="mt-10 p-5 rounded-2xl text-center text-sm transition-colors duration-300"
          style={{
            backgroundColor: `var(--color-secondary)`,
            color: `var(--color-primary)`,
          }}
        >
          💚 You're safe here. Take your time.
        </div>
      </div>
    </div>
  );
}
