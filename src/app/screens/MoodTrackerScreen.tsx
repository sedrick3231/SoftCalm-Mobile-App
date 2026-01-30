import React, { useState } from 'react';
import { Header } from '../components/Header';
import { useSensory } from '../context/SensoryContext';
import { useBackButton } from '../hooks/useBackButton';

interface MoodTrackerScreenProps {
  onBack: () => void;
}

export function MoodTrackerScreen({ onBack }: MoodTrackerScreenProps) {
  useBackButton(onBack);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const { settings } = useSensory();

  const moods = [
    { id: 'great', emoji: '😊', label: 'Great' },
    { id: 'good', emoji: '🙂', label: 'Good' },
    { id: 'okay', emoji: '😐', label: 'Okay' },
    { id: 'low', emoji: '😔', label: 'Low' },
    { id: 'difficult', emoji: '😢', label: 'Difficult' },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setSelectedMood(null);
    }, 2000);
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      
      <div className="px-5 py-8 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            How Are You Feeling?
          </h2>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            No judgment. Just you and us.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {!saved ? (
            <>
              {/* Mood Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood.id)}
                    className={`rounded-3xl p-6 transition-all duration-300 border-2 transform ${
                      selectedMood === mood.id ? 'scale-105 shadow-lg' : 'hover:scale-105'
                    } active:scale-95`}
                    style={{
                      backgroundColor: selectedMood === mood.id 
                        ? `var(--color-secondary)` 
                        : 'transparent',
                      borderColor: `var(--color-primary)`,
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{mood.emoji}</div>
                      <p 
                        className="font-semibold transition-colors duration-300"
                        style={{ color: `var(--color-primary)` }}
                      >
                        {mood.label}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Save Button */}
              {selectedMood && (
                <button
                  onClick={handleSave}
                  className="w-full rounded-3xl p-6 text-white transition-all duration-300 font-bold active:scale-95 hover:shadow-lg"
                  style={{
                    backgroundColor: `var(--color-primary)`,
                  }}
                >
                  Save Mood 💾
                </button>
              )}
            </>
          ) : (
            /* Success State */
            <div 
              className="rounded-3xl p-10 text-center transition-colors duration-300"
              style={{
                backgroundColor: `var(--color-secondary)`,
              }}
            >
              <div className="text-6xl mb-6">✅</div>
              <p 
                className="text-2xl font-bold mb-3 transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                Saved!
              </p>
              <p 
                className="transition-colors duration-300 opacity-70"
                style={{ color: `var(--color-primary)` }}
              >
                Thank you for sharing. We're here for you.
              </p>
            </div>
          )}
          
          {/* Supportive Message */}
          <div 
            className="mt-8 rounded-3xl p-6 text-center transition-colors duration-300 border-2"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <p 
              className="text-base font-semibold transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              💙 All Feelings Are Valid
            </p>
            <p 
              className="text-sm mt-2 transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              You're doing your best, and that's enough.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
