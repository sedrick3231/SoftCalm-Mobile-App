import React from 'react';
import { Header } from '../components/Header';
import { useSensory } from '../context/SensoryContext';

interface DailyCalmActivitiesScreenProps {
  onBack: () => void;
}

export function DailyCalmActivitiesScreen({ onBack }: DailyCalmActivitiesScreenProps) {
  const { settings } = useSensory();

  const activities = [
    { id: 1, title: 'Morning Breathing', duration: '5 min', emoji: '🌅' },
    { id: 2, title: 'Gentle Stretching', duration: '10 min', emoji: '🧘' },
    { id: 3, title: 'Gratitude Journal', duration: '5 min', emoji: '📝' },
    { id: 4, title: 'Mindful Walk', duration: '15 min', emoji: '🚶' },
    { id: 5, title: 'Evening Reflection', duration: '10 min', emoji: '🌙' },
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <Header onBack={onBack} />
      
      <div className="px-5 py-8 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">💖</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Daily Calm Activities
          </h2>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Choose an activity for today
          </p>
        </div>

        {/* Activities List */}
        <div className="space-y-4">
          {activities.map((activity) => (
            <button
              key={activity.id}
              className="w-full rounded-3xl p-6 border-2 transition-all duration-300 text-left hover:scale-105 hover:shadow-lg active:scale-95"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              <div className="flex items-center gap-5">
                <span className="text-4xl flex-shrink-0">{activity.emoji}</span>
                <div className="flex-1">
                  <h3 
                    className="font-bold text-lg transition-colors duration-300"
                    style={{ color: `var(--color-primary)` }}
                  >
                    {activity.title}
                  </h3>
                  <p 
                    className="text-sm transition-colors duration-300 opacity-70 mt-1"
                    style={{ color: `var(--color-primary)` }}
                  >
                    {activity.duration}
                  </p>
                </div>
                <span 
                  className="text-xl transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer Message */}
        <div 
          className="mt-10 rounded-3xl p-6 text-center border-2 transition-colors duration-300"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            ✨ Each activity takes just a few minutes and brings calm to your day
          </p>
        </div>
      </div>
    </div>
  );
}
