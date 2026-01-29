import React from 'react';
import { Header } from '../components/Header';
import { useSensory } from '../context/SensoryContext';
import { Bell, BellOff } from 'lucide-react';

interface NotificationsControlScreenProps {
  onBack: () => void;
}

export function NotificationsControlScreen({ onBack }: NotificationsControlScreenProps) {
  const { settings, toggleNotifications } = useSensory();

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <Header onBack={onBack} />
      
      <div className="px-5 py-8 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🔔</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Notifications Control
          </h2>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Stay in control of what you receive
          </p>
        </div>

        {/* Toggle Card */}
        <button
          onClick={toggleNotifications}
          className="w-full rounded-3xl p-6 border-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg mb-6"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-left">
              <div 
                className="rounded-2xl p-4 transition-colors duration-300"
                style={{ backgroundColor: `var(--color-primary)` }}
              >
                {settings.notificationsEnabled ? (
                  <Bell size={28} className="text-white" />
                ) : (
                  <BellOff size={28} className="text-white" />
                )}
              </div>
              <div>
                <p 
                  className="font-bold transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  Notifications
                </p>
                <p 
                  className="text-sm transition-colors duration-300 opacity-70 mt-1"
                  style={{ color: `var(--color-primary)` }}
                >
                  Gentle reminders
                </p>
              </div>
            </div>
            
            {/* Toggle Switch */}
            <div
              className="relative w-14 h-8 rounded-full transition-all duration-300"
              style={{ backgroundColor: `var(--color-accent)` }}
            >
              <div
                className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 transform"
                style={{
                  left: settings.notificationsEnabled ? '1.75rem' : '0.25rem',
                }}
              />
            </div>
          </div>
        </button>

        {/* Status Card */}
        <div 
          className="rounded-3xl p-8 text-center border-2 transition-colors duration-300 mb-6"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <p 
            className="text-5xl mb-4"
            style={{}}
          >
            {settings.notificationsEnabled ? '🔔' : '🔕'}
          </p>
          <p 
            className="text-lg font-bold transition-colors duration-300 mb-2"
            style={{ color: `var(--color-primary)` }}
          >
            {settings.notificationsEnabled ? 'Notifications On' : 'Do Not Disturb'}
          </p>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            {settings.notificationsEnabled 
              ? 'Gentle notifications enabled'
              : 'Complete silence - no notifications'}
          </p>
        </div>

        {/* Info Card */}
        <div 
          className="rounded-3xl p-6 border-2 transition-colors duration-300 text-center"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <p 
            className="font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            💙 Your Comfort First
          </p>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            We never send urgent or loud notifications. Everything is calm and optional.
          </p>
        </div>
      </div>
    </div>
  );
}
