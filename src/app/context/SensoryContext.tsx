import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type ThemeType = 'soft-green' | 'lavender' | 'muted-blue' | 'warm-neutral' | 'serene-sky' | 'warm-peach' | 'deep-forest' | 'rose-gold' | 'light';

interface SensorySettings {
  comfortLevel: number; // 0-100
  brightness: number; // 0-100
  contrast: number; // 0-100
  textSize: number; // 0-100 (default 50)
  visualDensity: number; // 0-100
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  theme: ThemeType;
}

interface SensoryContextType {
  settings: SensorySettings;
  updateComfortLevel: (level: number) => void;
  updateBrightness: (level: number) => void;
  updateContrast: (level: number) => void;
  updateTextSize: (level: number) => void;
  updateVisualDensity: (level: number) => void;
  toggleSound: () => void;
  toggleNotifications: () => void;
  setTheme: (theme: ThemeType) => void;
}

const SensoryContext = createContext<SensoryContextType | undefined>(undefined);

// Theme color definitions
const themes: Record<ThemeType, { primary: string; secondary: string; accent: string; background: string }> = {
  'soft-green': {
    primary: '#10b981',
    secondary: '#d1fae5',
    accent: '#059669',
    background: '#f0fdf4',
  },
  'lavender': {
    primary: '#a78bfa',
    secondary: '#ede9fe',
    accent: '#7c3aed',
    background: '#faf5ff',
  },
  'muted-blue': {
    primary: '#3b82f6',
    secondary: '#dbeafe',
    accent: '#1d4ed8',
    background: '#f0f9ff',
  },
  'warm-neutral': {
    primary: '#d97706',
    secondary: '#fef3c7',
    accent: '#b45309',
    background: '#fffbeb',
  },
  'serene-sky': {
    primary: '#0ea5e9',
    secondary: '#cffafe',
    accent: '#0284c7',
    background: '#f0f9ff',
  },
  'warm-peach': {
    primary: '#f97316',
    secondary: '#fed7aa',
    accent: '#ea580c',
    background: '#fff7ed',
  },
  'deep-forest': {
    primary: '#16a34a',
    secondary: '#bbf7d0',
    accent: '#15803d',
    background: '#f0fdf4',
  },
  'rose-gold': {
    primary: '#ec4899',
    secondary: '#fbcfe8',
    accent: '#be185d',
    background: '#fdf2f8',
  },
  'light': {
    primary: '#1f2937',
    secondary: '#f3f4f6',
    accent: '#4b5563',
    background: '#ffffff',
  },
};

export function SensoryProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SensorySettings>({
    comfortLevel: 50,
    brightness: 45,
    contrast: 55,
    textSize: 50,
    visualDensity: 50,
    soundEnabled: false,
    notificationsEnabled: false,
    theme: 'soft-green',
  });

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('sensorySettings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load sensory settings:', e);
      }
    }
  }, []);

  // Save settings to localStorage and apply theme
  useEffect(() => {
    localStorage.setItem('sensorySettings', JSON.stringify(settings));
    applyThemeStyles(settings);
  }, [settings]);

  const applyThemeStyles = (newSettings: SensorySettings) => {
    const theme = themes[newSettings.theme];
    const root = document.documentElement;

    // Set CSS variables for theme colors
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-background', theme.background);

    // Apply brightness filter (30-60 range maps to 0.5-2.0)
    const brightnessValue = (newSettings.brightness - 30) / 30 + 0.5; // 30->0.5, 45->1.0, 60->1.5
    root.style.setProperty('--brightness', brightnessValue.toString());

    // Apply contrast filter (40-70 range maps to 0.5-1.5)
    const contrastValue = (newSettings.contrast - 40) / 30 + 0.5; // 40->0.5, 55->1.0, 70->1.5
    root.style.setProperty('--contrast', contrastValue.toString());

    // Apply text size
    const fontScaleValue = 0.8 + (newSettings.textSize / 100) * 0.8; // 0.8x to 1.6x
    root.style.setProperty('--text-scale', fontScaleValue.toString());

    // Apply filters
    const filterString = `brightness(${brightnessValue}) contrast(${contrastValue})`;
    root.style.setProperty('--filter-string', filterString);
  };

  const updateComfortLevel = (level: number) => {
    setSettings(prev => ({
      ...prev,
      comfortLevel: level,
      brightness: level,
      contrast: level,
      visualDensity: level,
    }));
  };

  const updateBrightness = (level: number) => {
    setSettings(prev => ({ ...prev, brightness: level }));
  };

  const updateContrast = (level: number) => {
    setSettings(prev => ({ ...prev, contrast: level }));
  };

  const updateTextSize = (level: number) => {
    setSettings(prev => ({ ...prev, textSize: level }));
  };

  const updateVisualDensity = (level: number) => {
    setSettings(prev => ({ ...prev, visualDensity: level }));
  };

  const toggleSound = () => {
    setSettings(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }));
  };

  const toggleNotifications = () => {
    setSettings(prev => ({ ...prev, notificationsEnabled: !prev.notificationsEnabled }));
  };

  const setTheme = (theme: ThemeType) => {
    setSettings(prev => ({ ...prev, theme }));
  };

  return (
    <SensoryContext.Provider
      value={{
        settings,
        updateComfortLevel,
        updateBrightness,
        updateContrast,
        updateTextSize,
        updateVisualDensity,
        toggleSound,
        toggleNotifications,
        setTheme,
      }}
    >
      {children}
    </SensoryContext.Provider>
  );
}

export function useSensory() {
  const context = useContext(SensoryContext);
  if (!context) {
    throw new Error('useSensory must be used within SensoryProvider');
  }
  return context;
}
