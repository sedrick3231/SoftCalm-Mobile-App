import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSensory } from '../context/SensoryContext';
import { Bell, Lock, Zap } from 'lucide-react';

interface MainSettingsScreenProps {
    onNavigate?: (screen: any) => void;
    onBack?: () => void;
}

export function MainSettingsScreen({ onNavigate, onBack }: MainSettingsScreenProps) {
    const { logout, user } = useAuth();
    const {
        settings,
        updateBrightness,
        updateContrast,
        updateTextSize,
        setTheme,
        toggleSound,
        toggleNotifications,
    } = useSensory();
    const [animationSpeed, setAnimationSpeed] = useState(50);

    const handleLogout = () => {
        logout();
        onNavigate?.('welcome');
    };

    const themes = [
        { id: 'light', name: '☀️ Light', color: '#ffffff' },
        { id: 'soft-green', name: 'Green', color: '#10b981' },
        { id: 'lavender', name: 'Lavender', color: '#a78bfa' },
        { id: 'muted-blue', name: 'Blue', color: '#3b82f6' },
        { id: 'warm-neutral', name: 'Neutral', color: '#d97706' },
        { id: 'serene-sky', name: 'Sky', color: '#0ea5e9' },
        { id: 'warm-peach', name: 'Peach', color: '#f97316' },
        { id: 'deep-forest', name: 'Forest', color: '#16a34a' },
        { id: 'rose-gold', name: 'Rose', color: '#ec4899' },
    ];

    return (
        <div
            className="min-h-screen transition-colors duration-300 pb-24"
            style={{
                backgroundColor: `var(--color-background)`,
            }}
        >
            <div className="max-w-2xl mx-auto px-5 py-10">
                {/* Header */}
                <div className="mb-10">
                    <h1
                        className="text-3xl font-bold transition-colors duration-300"
                        style={{ color: `var(--color-primary)` }}
                    >
                        Settings
                    </h1>
                    <p
                        className="text-sm mt-2 transition-colors duration-300 opacity-70"
                        style={{ color: `var(--color-primary)` }}
                    >
                        Make the app feel right for you
                    </p>
                </div>

                {/* Sensory Comfort */}
                <div className="mb-8">
                    <p
                        className="text-xs font-bold uppercase tracking-wider mb-4 transition-colors duration-300"
                        style={{ color: `var(--color-accent)` }}
                    >
                        Sensory Comfort
                    </p>

                    <div className="space-y-6">
                        {/* Theme Selection */}
                        <div>
                            <p
                                className="text-xs font-bold uppercase tracking-wider mb-3 transition-colors duration-300"
                                style={{ color: `var(--color-primary)` }}
                            >
                                Color Theme
                            </p>
                            <div className="grid grid-cols-5 gap-2">
                                {themes.map((theme) => (
                                    <button
                                        key={theme.id}
                                        onClick={() => setTheme(theme.id as any)}
                                        className={`rounded-2xl p-3 text-center text-xs font-semibold transition-all duration-300 ${settings.theme === theme.id ? 'ring-4 ring-offset-2 scale-110' : 'opacity-70 hover:opacity-90'
                                            }`}
                                        style={{
                                            backgroundColor: theme.color,
                                            color: theme.id === 'light' ? '#000' : '#fff',
                                            border: '1px solid black',
                                        }}
                                        title={theme.name}
                                    >
                                        <div className="text-lg">{theme.name.substring(0, 1)}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Brightness */}
                        <div
                            className="rounded-3xl p-6 border-2 transition-colors duration-300"
                            style={{
                                backgroundColor: `var(--color-secondary)`,
                                borderColor: `var(--color-primary)`,
                            }}
                        >
                            <label className="flex items-center justify-between mb-4">
                                <span
                                    className="text-sm font-bold transition-colors duration-300"
                                    style={{ color: `var(--color-primary)` }}
                                >
                                    Brightness
                                </span>
                                <span
                                    className="text-sm font-semibold transition-colors duration-300"
                                    style={{ color: `var(--color-accent)` }}
                                >
                                    {settings.brightness}%
                                </span>
                            </label>
                            <input
                                type="range"
                                min="30"
                                max="60"
                                value={settings.brightness}
                                onChange={(e) => updateBrightness(Number(e.target.value))}
                                className="w-full h-3 rounded-full cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${((settings.brightness - 30) / 30) * 100}%, var(--color-secondary) ${((settings.brightness - 30) / 30) * 100}%, var(--color-secondary) 100%)`,
                                }}
                            />
                        </div>

                        {/* Contrast */}
                        <div
                            className="rounded-3xl p-6 border-2 transition-colors duration-300"
                            style={{
                                backgroundColor: `var(--color-secondary)`,
                                borderColor: `var(--color-primary)`,
                            }}
                        >
                            <label className="flex items-center justify-between mb-4">
                                <span
                                    className="text-sm font-bold transition-colors duration-300"
                                    style={{ color: `var(--color-primary)` }}
                                >
                                    Contrast
                                </span>
                                <span
                                    className="text-sm font-semibold transition-colors duration-300"
                                    style={{ color: `var(--color-accent)` }}
                                >
                                    {settings.contrast}%
                                </span>
                            </label>
                            <input
                                type="range"
                                min="40"
                                max="70"
                                value={settings.contrast}
                                onChange={(e) => updateContrast(Number(e.target.value))}
                                className="w-full h-3 rounded-full cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${((settings.contrast - 40) / 30) * 100}%, var(--color-secondary) ${((settings.contrast - 40) / 30) * 100}%, var(--color-secondary) 100%)`,
                                }}
                            />
                        </div>

                        {/* Text Size */}
                        <div
                            className="rounded-3xl p-6 border-2 transition-colors duration-300"
                            style={{
                                backgroundColor: `var(--color-secondary)`,
                                borderColor: `var(--color-primary)`,
                            }}
                        >
                            <label className="flex items-center justify-between mb-4">
                                <span
                                    className="text-sm font-bold transition-colors duration-300"
                                    style={{ color: `var(--color-primary)` }}
                                >
                                    Text Size
                                </span>
                                <span
                                    className="text-sm font-semibold transition-colors duration-300"
                                    style={{ color: `var(--color-accent)` }}
                                >
                                    {((settings.textSize / 100) * 0.8 + 0.8).toFixed(1)}x
                                </span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={settings.textSize}
                                onChange={(e) => updateTextSize(Number(e.target.value))}
                                className="w-full h-3 rounded-full cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${settings.textSize}%, var(--color-secondary) ${settings.textSize}%, var(--color-secondary) 100%)`,
                                }}
                            />
                            <p
                                className="text-sm mt-4 text-center font-semibold transition-colors duration-300"
                                style={{
                                    color: `var(--color-primary)`,
                                    fontSize: `var(--text-scale)`
                                }}
                            >
                                Preview text
                            </p>
                        </div>
                    </div>
                </div>

                {/* Preferences */}
                <div className="mb-8">
                    <p
                        className="text-xs font-bold uppercase tracking-wider mb-4 transition-colors duration-300"
                        style={{ color: `var(--color-accent)` }}
                    >
                        Preferences
                    </p>

                    <div className="space-y-4">
                        {/* Notification Sound */}
                        <button
                            onClick={toggleSound}
                            className="w-full rounded-3xl p-6 border-2 transition-all duration-300 flex items-center justify-between hover:scale-105 active:scale-95"
                            style={{
                                backgroundColor: `var(--color-secondary)`,
                                borderColor: `var(--color-primary)`,
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <Bell size={24} style={{ color: `var(--color-primary)` }} />
                                <div className="text-left">
                                    <p
                                        className="text-sm font-bold transition-colors duration-300"
                                        style={{ color: `var(--color-primary)` }}
                                    >
                                        Sound Enabled
                                    </p>
                                    <p
                                        className="text-xs transition-colors duration-300 opacity-70"
                                        style={{ color: `var(--color-primary)` }}
                                    >
                                        Gentle notification sounds
                                    </p>
                                </div>
                            </div>
                            <div
                                className="relative w-12 h-7 rounded-full transition-all duration-300"
                                style={{ backgroundColor: `var(--color-accent)` }}
                            >
                                <div
                                    className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 transform"
                                    style={{
                                        left: settings.soundEnabled ? '1.5rem' : '0.25rem',
                                    }}
                                />
                            </div>
                        </button>

                        {/* Notifications */}
                        <button
                            onClick={toggleNotifications}
                            className="w-full rounded-3xl p-6 border-2 transition-all duration-300 flex items-center justify-between hover:scale-105 active:scale-95"
                            style={{
                                backgroundColor: `var(--color-secondary)`,
                                borderColor: `var(--color-primary)`,
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <Zap size={24} style={{ color: `var(--color-primary)` }} />
                                <div className="text-left">
                                    <p
                                        className="text-sm font-bold transition-colors duration-300"
                                        style={{ color: `var(--color-primary)` }}
                                    >
                                        Notifications
                                    </p>
                                    <p
                                        className="text-xs transition-colors duration-300 opacity-70"
                                        style={{ color: `var(--color-primary)` }}
                                    >
                                        Daily reminders for calm
                                    </p>
                                </div>
                            </div>
                            <div
                                className="relative w-12 h-7 rounded-full transition-all duration-300"
                                style={{ backgroundColor: `var(--color-accent)` }}
                            >
                                <div
                                    className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 transform"
                                    style={{
                                        left: settings.notificationsEnabled ? '1.5rem' : '0.25rem',
                                    }}
                                />
                            </div>
                        </button>

                        {/* Animation Speed */}
                        <div
                            className="rounded-3xl p-6 border-2 transition-colors duration-300"
                            style={{
                                backgroundColor: `var(--color-secondary)`,
                                borderColor: `var(--color-primary)`,
                            }}
                        >
                            <label className="flex items-center justify-between mb-4">
                                <span
                                    className="text-sm font-bold transition-colors duration-300"
                                    style={{ color: `var(--color-primary)` }}
                                >
                                    Animation Speed
                                </span>
                                <span
                                    className="text-sm font-semibold transition-colors duration-300"
                                    style={{ color: `var(--color-accent)` }}
                                >
                                    {animationSpeed}%
                                </span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={animationSpeed}
                                onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                                className="w-full h-3 rounded-full cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${animationSpeed}%, var(--color-secondary) ${animationSpeed}%, var(--color-secondary) 100%)`,
                                }}
                            />
                            <p
                                className="text-xs transition-colors duration-300 opacity-70 mt-3"
                                style={{ color: `var(--color-primary)` }}
                            >
                                0% = No animations, 100% = Full animations
                            </p>
                        </div>
                    </div>
                </div>

                {/* Support */}
                <div className="mb-8">
                    <p
                        className="text-xs font-bold uppercase tracking-wider mb-3 transition-colors duration-300"
                        style={{ color: `var(--color-accent)` }}
                    >
                        Support
                    </p>
                    <div className="space-y-3">
                        <button
                            className="w-full rounded-3xl p-6 border-2 transition-all duration-300 flex items-center justify-between hover:scale-105 active:scale-95"
                            style={{
                                backgroundColor: `var(--color-secondary)`,
                                borderColor: `var(--color-primary)`,
                            }}
                        >
                            <span
                                className="text-sm font-bold transition-colors duration-300"
                                style={{ color: `var(--color-primary)` }}
                            >
                                📚 Help & Resources
                            </span>
                            <span
                                className="text-xl transition-colors duration-300"
                                style={{ color: `var(--color-primary)` }}
                            >
                                →
                            </span>
                        </button>
                        <button
                            className="w-full rounded-3xl p-6 border-2 transition-all duration-300 flex items-center justify-between hover:scale-105 active:scale-95"
                            style={{
                                backgroundColor: `var(--color-secondary)`,
                                borderColor: `var(--color-primary)`,
                            }}
                        >
                            <span
                                className="text-sm font-bold transition-colors duration-300"
                                style={{ color: `var(--color-primary)` }}
                            >
                                ℹ️ About Soft Calm
                            </span>
                            <span
                                className="text-xl transition-colors duration-300"
                                style={{ color: `var(--color-primary)` }}
                            >
                                →
                            </span>
                        </button>
                    </div>
                </div>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="w-full rounded-3xl p-6 font-bold transition-all duration-300 hover:scale-105 active:scale-95 border-2"
                    style={{
                        backgroundColor: `var(--color-secondary)`,
                        borderColor: `var(--color-accent)`,
                        color: `var(--color-accent)`,
                    }}
                >
                    Sign Out
                </button>

            </div>
        </div>
    );
}
