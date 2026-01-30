import React, { useState } from 'react';
import { useSensory } from '../context/SensoryContext';
import { Play, Pause } from 'lucide-react';
import { useBackButton } from '../hooks/useBackButton';

interface CalmingSoundsProps {
  onBack?: () => void;
}

export function CalmingSounds({ onBack }: CalmingSoundsProps) {
  useBackButton(onBack);
  const { settings } = useSensory();
  const [playingSound, setPlayingSound] = useState<string | null>(null);
  const [volume, setVolume] = useState(50);

  const sounds = [
    { id: 'rain', name: 'Gentle Rain', emoji: '🌧️', description: 'Soft patter of raindrops' },
    { id: 'forest', name: 'Forest Ambience', emoji: '🌲', description: 'Birds and rustling leaves' },
    { id: 'ocean', name: 'Ocean Waves', emoji: '🌊', description: 'Rhythmic ocean sounds' },
    { id: 'stream', name: 'Flowing Stream', emoji: '💧', description: 'Gentle water flowing' },
    { id: 'meditation', name: 'Meditation Bell', emoji: '🔔', description: 'Peaceful bell tones' },
  ];

  const handlePlaySound = (soundId: string) => {
    if (playingSound === soundId) {
      setPlayingSound(null);
    } else {
      setPlayingSound(soundId);
      console.log(`Playing sound: ${soundId}`);
    }
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-5 py-6 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Calming Sounds
          </h2>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Choose what soothes you
          </p>
        </div>

        {/* Volume Control */}
        <div 
          className="mb-8 rounded-3xl p-6 border-2 transition-colors duration-300"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <label 
            className="block text-sm font-bold mb-4 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            🔊 Volume
          </label>
          <div className="flex gap-4 items-center">
            <span 
              className="text-xs font-semibold transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Quiet
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="flex-1 h-3 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${volume}%, var(--color-secondary) ${volume}%, var(--color-secondary) 100%)`,
              }}
            />
            <span 
              className="text-xs font-semibold transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Loud
            </span>
          </div>
          <p 
            className="text-center text-sm mt-4 font-semibold transition-colors duration-300"
            style={{ color: `var(--color-accent)` }}
          >
            {volume}%
          </p>
        </div>

        {/* Sound Selection */}
        <div className="space-y-4 mb-8">
          {sounds.map((sound) => (
            <button
              key={sound.id}
              onClick={() => handlePlaySound(sound.id)}
              className="w-full rounded-3xl p-6 border-2 text-left transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: playingSound === sound.id 
                  ? `var(--color-secondary)` 
                  : 'transparent',
                borderColor: `var(--color-primary)`,
              }}
            >
              <div className="flex items-center gap-5">
                <span 
                  className={`text-4xl flex-shrink-0 transition-transform duration-300 ${
                    playingSound === sound.id ? 'scale-125' : ''
                  }`}
                >
                  {sound.emoji}
                </span>
                <div className="flex-1 text-left">
                  <h3 
                    className="font-bold transition-colors duration-300"
                    style={{ color: `var(--color-primary)` }}
                  >
                    {sound.name}
                  </h3>
                  <p 
                    className="text-sm transition-colors duration-300 opacity-70 mt-1"
                    style={{ color: `var(--color-primary)` }}
                  >
                    {sound.description}
                  </p>
                </div>
                {playingSound === sound.id ? (
                  <Pause size={24} style={{ color: `var(--color-primary)` }} />
                ) : (
                  <Play size={24} style={{ color: `var(--color-primary)` }} />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Now Playing */}
        {playingSound && (
          <div 
            className="rounded-3xl p-6 text-center mb-6 border-2 transition-colors duration-300"
            style={{
              backgroundColor: `var(--color-secondary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            <p 
              className="text-sm transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              🎵 Playing now
            </p>
            <p 
              className="font-bold transition-colors duration-300 mt-2"
              style={{ color: `var(--color-primary)` }}
            >
              {sounds.find((s) => s.id === playingSound)?.name}
            </p>
          </div>
        )}

        {/* Info Card */}
        <div 
          className="rounded-3xl p-6 text-center border-2 transition-colors duration-300"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <p 
            className="text-sm transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            ⏱️ Let it play
          </p>
          <p 
            className="text-sm transition-colors duration-300 opacity-70 mt-2"
            style={{ color: `var(--color-primary)` }}
          >
            Sounds will play as long as you need them
          </p>
        </div>
      </div>
    </div>
  );
}
