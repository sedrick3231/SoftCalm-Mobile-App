import React from 'react';
import { Header } from '../components/Header';
import { useSensory } from '../context/SensoryContext';

interface VisualComfortScreenProps {
  onBack: () => void;
}

export function VisualComfortScreen({ onBack }: VisualComfortScreenProps) {
  const { settings, updateBrightness, updateContrast, updateVisualDensity } = useSensory();

  const getSliderRange = (label: string) => {
    if (label === 'Brightness') return { min: 30, max: 60 };
    if (label === 'Contrast') return { min: 40, max: 70 };
    return { min: 0, max: 100 };
  };

  const getSliderProgress = (label: string, value: number) => {
    const range = getSliderRange(label);
    return ((value - range.min) / (range.max - range.min)) * 100;
  };

  const sliders = [
    {
      label: 'Brightness',
      value: settings.brightness,
      onChange: updateBrightness,
      icon: '🌙',
      endIcon: '🌞',
    },
    {
      label: 'Contrast',
      value: settings.contrast,
      onChange: updateContrast,
      icon: '◐',
      endIcon: '●',
    },
    {
      label: 'Visual Density',
      value: settings.visualDensity,
      onChange: updateVisualDensity,
      icon: '▫️',
      endIcon: '▪️',
    },
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
          <div className="text-5xl mb-4">👁️</div>
          <h2 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Visual Comfort
          </h2>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Make your screen feel just right
          </p>
        </div>

        {/* Sliders */}
        <div className="space-y-6">
          {sliders.map((slider, idx) => (
            <div 
              key={idx}
              className="rounded-3xl p-6 border-2 transition-colors duration-300"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <p 
                  className="font-bold transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  {slider.label}
                </p>
                <p 
                  className="font-semibold transition-colors duration-300"
                  style={{ color: `var(--color-accent)` }}
                >
                  {slider.value}%
                </p>
              </div>
              
              <input
                type="range"
                min={getSliderRange(slider.label).min}
                max={getSliderRange(slider.label).max}
                value={slider.value}
                onChange={(e) => slider.onChange(Number(e.target.value))}
                className="w-full h-3 rounded-full appearance-none cursor-pointer transition-all duration-300"
                style={{
                  background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${getSliderProgress(slider.label, slider.value)}%, var(--color-secondary) ${getSliderProgress(slider.label, slider.value)}%, var(--color-secondary) 100%)`,
                  accentColor: `var(--color-primary)`,
                }}
              />
              
              <div className="flex justify-between mt-4 text-sm font-semibold">
                <span style={{ color: `var(--color-primary)` }}>{slider.icon}</span>
                <span style={{ color: `var(--color-primary)` }}>{slider.endIcon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div 
          className="mt-10 rounded-3xl p-6 text-center transition-colors duration-300 border-2"
          style={{
            backgroundColor: `var(--color-secondary)`,
            borderColor: `var(--color-primary)`,
          }}
        >
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            💡 Adjust settings to reduce eye strain and visual overwhelm
          </p>
        </div>
      </div>
    </div>
  );
}
