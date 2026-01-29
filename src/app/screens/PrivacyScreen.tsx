import React from 'react';
import { Header } from '../components/Header';
import { CalmCard } from '../components/CalmCard';

interface PrivacyScreenProps {
  onBack: () => void;
}

export function PrivacyScreen({ onBack }: PrivacyScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header onBack={onBack} />
      
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-3xl text-gray-700 mb-2">Your Privacy & Safety</h2>
          <p className="text-lg text-gray-600">Complete transparency about your data</p>
        </div>
        
        <div className="max-w-md mx-auto space-y-6">
          {/* Core Privacy Promise */}
          <CalmCard color="purple">
            <div className="space-y-4">
              <p className="text-xl text-gray-700 mb-3">🛡️ Our Promise to You</p>
              <div className="space-y-3 text-base text-gray-600">
                <p>✓ Your data belongs to you, always</p>
                <p>✓ No ads, tracking, or third-party sharing</p>
                <p>✓ No social features or public profiles</p>
                <p>✓ No notifications without your permission</p>
              </div>
            </div>
          </CalmCard>

          {/* What We Store */}
          <CalmCard color="blue">
            <div className="space-y-4">
              <p className="text-xl text-gray-700 mb-3">📦 What We Store Locally</p>
              <div className="space-y-3 text-base text-gray-600">
                <p>• Your sensory comfort preferences</p>
                <p>• Your mood tracking history (optional)</p>
                <p>• Your personalized settings</p>
                <p className="mt-4 italic">This data stays on your device unless you choose to sync.</p>
              </div>
            </div>
          </CalmCard>

          {/* Optional Cloud Sync */}
          <CalmCard color="green">
            <div className="space-y-4">
              <p className="text-xl text-gray-700 mb-3">☁️ Optional Cloud Sync</p>
              <div className="space-y-3 text-base text-gray-600">
                <p>If you create an account, you can:</p>
                <p>• Access settings across devices</p>
                <p>• Backup your mood history securely</p>
                <p>• Recover data if you lose your device</p>
                <p className="mt-4 italic">You can use Soft Calm fully offline without an account.</p>
              </div>
            </div>
          </CalmCard>

          {/* Data Control */}
          <CalmCard color="yellow">
            <div className="space-y-4">
              <p className="text-xl text-gray-700 mb-3">🎛️ You're In Control</p>
              <div className="space-y-3 text-base text-gray-600">
                <p>✓ Export your data anytime</p>
                <p>✓ Delete your account instantly</p>
                <p>✓ No questions, no delays</p>
                <p>✓ Clear confirmation before any changes</p>
              </div>
            </div>
          </CalmCard>

          {/* Trauma-Informed Design */}
          <CalmCard color="pink">
            <div className="space-y-4">
              <p className="text-xl text-gray-700 mb-3">💗 Designed for Safety</p>
              <div className="space-y-3 text-base text-gray-600">
                <p>This app is built with trauma-informed design principles:</p>
                <p>• No surprises or unexpected changes</p>
                <p>• Clear warnings before any action</p>
                <p>• Always a way to go back</p>
                <p>• Your autonomy is respected</p>
              </div>
            </div>
          </CalmCard>

          {/* Not for PII */}
          <CalmCard color="purple">
            <div className="space-y-4">
              <p className="text-xl text-gray-700 mb-3">⚠️ Important Note</p>
              <div className="space-y-3 text-base text-gray-600">
                <p>Soft Calm is designed for wellness support, not clinical use.</p>
                <p>We do not collect sensitive personal information.</p>
                <p>For professional mental health support, please consult a licensed therapist.</p>
              </div>
            </div>
          </CalmCard>

          {/* Offline First */}
          <CalmCard color="green">
            <div className="text-center py-4">
              <div className="text-5xl mb-3">📱</div>
              <p className="text-lg text-gray-700 mb-3">Works Offline</p>
              <p className="text-base text-gray-600">
                Core features work without internet. Your calm is never dependent on connectivity.
              </p>
            </div>
          </CalmCard>
        </div>
      </div>
    </div>
  );
}
