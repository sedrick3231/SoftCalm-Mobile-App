import React from 'react';
import { Home, Wind, BookOpen, Settings } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: 'home' | 'calm' | 'guides' | 'settings';
  onNavigate: (tab: 'home' | 'calm' | 'guides' | 'settings') => void;
}

export function BottomNavigation({ activeTab, onNavigate }: BottomNavigationProps) {
  const tabs = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'calm' as const, label: 'Calm', icon: Wind },
    { id: 'guides' as const, label: 'Guides', icon: BookOpen },
    { id: 'settings' as const, label: 'Settings', icon: Settings },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 w-full px-4 py-3 z-50 border-t transition-colors duration-300"
      role="navigation"
      aria-label="Main navigation"
      style={{
        backgroundColor: `var(--color-background)`,
        borderColor: `var(--color-primary)`,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
      }}
    >
      <div className="flex justify-around items-center gap-1 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`
                flex flex-col items-center justify-center
                min-h-[64px] min-w-[64px] rounded-2xl
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${isActive
                  ? 'scale-105'
                  : 'opacity-60 hover:opacity-80'
                }
              `}
              style={{
                color: isActive ? `var(--color-primary)` : `var(--color-primary)`,
                backgroundColor: isActive ? `var(--color-secondary)` : 'transparent',
                focusRingColor: `var(--color-primary)`,
              }}
              aria-current={isActive ? 'page' : undefined}
              aria-label={tab.label}
            >
              <Icon size={28} strokeWidth={1.5} className="mb-1" />
              <span className="text-xs font-semibold tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
