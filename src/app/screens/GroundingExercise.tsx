import React, { useState } from 'react';
import { useSensory } from '../context/SensoryContext';
import { Check } from 'lucide-react';
import { useBackButton } from '../hooks/useBackButton';

interface GroundingExerciseProps {
  onBack?: () => void;
}

export function GroundingExercise({ onBack }: GroundingExerciseProps) {
  useBackButton(onBack);
  const { settings } = useSensory();
  const [currentStep, setCurrentStep] = useState<'intro' | 'exercise' | 'complete'>('intro');
  const [completedSenses, setCompletedSenses] = useState(new Set<number>());

  const senses = [
    { id: 1, sense: 'See', emoji: '👀', instruction: 'Name 5 things you can see' },
    { id: 2, sense: 'Touch', emoji: '✋', instruction: 'Name 4 things you can touch' },
    { id: 3, sense: 'Hear', emoji: '👂', instruction: 'Name 3 things you can hear' },
    { id: 4, sense: 'Smell', emoji: '👃', instruction: 'Name 2 things you can smell' },
    { id: 5, sense: 'Taste', emoji: '👅', instruction: 'Name 1 thing you can taste' },
  ];

  const handleSenseComplete = (id: number) => {
    const newCompleted = new Set(completedSenses);
    newCompleted.add(id);
    setCompletedSenses(newCompleted);

    if (newCompleted.size === 5) {
      setCurrentStep('complete');
    }
  };

  const handleReset = () => {
    setCurrentStep('intro');
    setCompletedSenses(new Set());
  };

  if (currentStep === 'intro') {
    return (
      <div 
        className="min-h-screen transition-colors duration-300 pb-24 flex flex-col"
        style={{ backgroundColor: `var(--color-background)` }}
      >
        <div className="px-5 py-6 flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
          <div className="text-center flex-1 flex flex-col items-center justify-center w-full">
            <h2 
              className="text-4xl font-bold mb-2 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Grounding Technique
            </h2>
            <p 
              className="text-sm mb-10 transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              5-4-3-2-1 Sensory Method
            </p>

            <div className="text-6xl mb-8">🌍</div>

            <p 
              className="text-lg leading-relaxed mb-6 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              This technique anchors you to the present moment by engaging all five senses.
            </p>

            <p 
              className="mb-10 transition-colors duration-300 opacity-70"
              style={{ color: `var(--color-primary)` }}
            >
              Notice and name things in order. Take your time.
            </p>

            <button
              onClick={() => setCurrentStep('exercise')}
              className="rounded-3xl px-8 py-6 text-white font-bold transition-all duration-300 active:scale-95 hover:shadow-lg w-full"
              style={{
                backgroundColor: `var(--color-primary)`,
              }}
            >
              Start Grounding
            </button>

            <div 
              className="mt-12 p-6 rounded-3xl text-center border-2 transition-colors duration-300"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              <p 
                className="text-sm transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                ✓ No time pressure
              </p>
              <p 
                className="text-sm mt-2 transition-colors duration-300 opacity-70"
                style={{ color: `var(--color-primary)` }}
              >
                ✓ Go at your own pace
              </p>
              <p 
                className="text-sm mt-2 transition-colors duration-300 opacity-70"
                style={{ color: `var(--color-primary)` }}
              >
                ✓ Pause anytime you need
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'complete') {
    return (
      <div 
        className="min-h-screen transition-colors duration-300 pb-24 flex flex-col"
        style={{ backgroundColor: `var(--color-background)` }}
      >
        <div className="px-5 py-6 flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
          <div className="text-center flex-1 flex flex-col items-center justify-center w-full">
            <div className="text-6xl mb-6">✨</div>
            <h2 
              className="text-4xl font-bold mb-3 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              You Did It!
            </h2>
            <p 
              className="mb-10 transition-colors duration-300 opacity-70 max-w-sm"
              style={{ color: `var(--color-primary)` }}
            >
              You've successfully grounded yourself in the present moment.
            </p>

            <div 
              className="rounded-3xl p-8 text-center border-2 transition-colors duration-300 mb-8 w-full"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
              }}
            >
              <p 
                className="font-bold transition-colors duration-300 mb-2"
                style={{ color: `var(--color-primary)` }}
              >
                💚 You're More Present Now
              </p>
              <p 
                className="text-sm transition-colors duration-300 opacity-70"
                style={{ color: `var(--color-primary)` }}
              >
                Notice how you feel in this moment
              </p>
            </div>

            <div className="space-y-3 w-full">
              <button
                onClick={handleReset}
                className="w-full rounded-3xl px-6 py-5 font-bold transition-all duration-300 border-2 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: `var(--color-secondary)`,
                  borderColor: `var(--color-primary)`,
                  color: `var(--color-primary)`,
                }}
              >
                Do It Again
              </button>
              <button
                onClick={onBack}
                className="w-full rounded-3xl px-6 py-5 text-white font-bold transition-all duration-300 active:scale-95 hover:shadow-lg"
                style={{
                  backgroundColor: `var(--color-primary)`,
                }}
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen transition-colors duration-300 pb-24"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="px-5 py-6 max-w-2xl mx-auto">
        <h2 
          className="text-3xl font-bold mb-1 transition-colors duration-300"
          style={{ color: `var(--color-primary)` }}
        >
          Grounding Exercise
        </h2>
        <p 
          className="text-sm mb-8 transition-colors duration-300 opacity-70"
          style={{ color: `var(--color-primary)` }}
        >
          Notice each sense one by one
        </p>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex gap-2 mb-3">
            {senses.map((s) => (
              <div
                key={s.id}
                className="flex-1 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: completedSenses.has(s.id) 
                    ? `var(--color-primary)` 
                    : `var(--color-secondary)`,
                }}
              />
            ))}
          </div>
          <p 
            className="text-sm transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            {completedSenses.size} of 5 completed
          </p>
        </div>

        {/* Sense Cards */}
        <div className="space-y-4">
          {senses.map((sense) => (
            <button
              key={sense.id}
              onClick={() => handleSenseComplete(sense.id)}
              className="w-full rounded-3xl p-6 border-2 text-left transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: completedSenses.has(sense.id) 
                  ? `var(--color-secondary)` 
                  : 'transparent',
                borderColor: `var(--color-primary)`,
              }}
            >
              <div className="flex items-start gap-5">
                <span className="text-4xl flex-shrink-0">{sense.emoji}</span>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 
                      className="text-lg font-bold transition-colors duration-300"
                      style={{ color: `var(--color-primary)` }}
                    >
                      {sense.sense}
                    </h3>
                    {completedSenses.has(sense.id) && (
                      <Check size={20} style={{ color: `var(--color-accent)` }} />
                    )}
                  </div>
                  <p 
                    className="text-sm transition-colors duration-300 opacity-70"
                    style={{ color: `var(--color-primary)` }}
                  >
                    {sense.instruction}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
