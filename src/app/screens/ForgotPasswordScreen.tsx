import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface ForgotPasswordScreenProps {
  onBack: () => void;
}

export function ForgotPasswordScreen({ onBack }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const { resetPassword } = useAuth();

  const handleReset = async () => {
    setError('');
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    const success = await resetPassword(email);
    if (success) {
      setSent(true);
    } else {
      setError('Failed to send reset email');
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-300"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <button
        onClick={onBack}
        className="absolute top-6 left-5 min-h-[48px] px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ color: `var(--color-primary)` }}
      >
        <ArrowLeft size={24} />
      </button>

      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🔄</div>
          <h2 
            className="text-3xl font-bold mb-3 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Reset Password
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            We'll send you a reset link
          </p>
        </div>

        <div className="space-y-6">
          {!sent ? (
            <>
              <div>
                <label 
                  className="block text-sm font-medium mb-2 transition-colors duration-300"
                  style={{ color: `var(--color-primary)` }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl px-5 py-4 border-2 transition-all duration-300 focus:outline-none focus:scale-105"
                  style={{
                    backgroundColor: `var(--color-secondary)`,
                    borderColor: `var(--color-primary)`,
                    color: `var(--color-primary)`,
                  }}
                />
              </div>

              {error && (
                <p 
                  className="text-center text-lg font-medium p-3 rounded-2xl"
                  style={{
                    backgroundColor: `var(--color-secondary)`,
                    color: '#dc2626',
                  }}
                >
                  {error}
                </p>
              )}

              <button
                onClick={handleReset}
                className="w-full rounded-3xl px-6 py-5 font-bold text-white transition-all duration-300 border-2 hover:scale-105 active:scale-95 hover:shadow-lg"
                style={{
                  backgroundColor: `var(--color-primary)`,
                  borderColor: `var(--color-primary)`,
                }}
              >
                Send Reset Link 📧
              </button>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">✅</div>
              <p 
                className="text-2xl font-bold mb-6 transition-colors duration-300"
                style={{ color: `var(--color-primary)` }}
              >
                Reset link sent!
              </p>
              <p 
                className="text-lg mb-8 leading-relaxed transition-colors duration-300 opacity-70"
                style={{ color: `var(--color-primary)` }}
              >
                Please check your email for instructions to reset your password.
              </p>
              <button
                onClick={onBack}
                className="w-full rounded-3xl px-6 py-5 font-bold text-white transition-all duration-300 border-2 hover:scale-105 active:scale-95 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)`,
                  borderColor: `var(--color-accent)`,
                }}
              >
                Back to Sign In 🔑
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
