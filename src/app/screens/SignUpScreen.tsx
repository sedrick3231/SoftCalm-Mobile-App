import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useBackButton } from '../hooks/useBackButton';

interface SignUpScreenProps {
  onBack: () => void;
  onSuccess: () => void;
}

export function SignUpScreen({ onBack, onSuccess }: SignUpScreenProps) {
  useBackButton(onBack);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();

  const handleSignUp = async () => {
    setError('');
    
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    const success = await signup(email, password, name);
    if (success) {
      onSuccess();
    } else {
      setError('Sign up failed. Please try again.');
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-300"
      style={{ backgroundColor: `var(--color-background)` }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🌟</div>
          <h2 
            className="text-3xl font-bold mb-3 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Create Account
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Join your peaceful community
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label 
              className="block text-sm font-medium mb-2 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl px-5 py-4 border-2 transition-all duration-300 focus:outline-none focus:scale-105"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
                color: `var(--color-primary)`,
              }}
            />
          </div>

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

          <div>
            <label 
              className="block text-sm font-medium mb-2 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl px-5 py-4 border-2 transition-all duration-300 focus:outline-none focus:scale-105"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
                color: `var(--color-primary)`,
              }}
            />
          </div>

          <div>
            <label 
              className="block text-sm font-medium mb-2 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            onClick={handleSignUp}
            className="w-full rounded-3xl px-6 py-5 font-bold text-white transition-all duration-300 border-2 hover:scale-105 active:scale-95 hover:shadow-lg"
            style={{
              backgroundColor: `var(--color-primary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            Create Account 🌸
          </button>
        </div>
      </div>
    </div>
  );
}
