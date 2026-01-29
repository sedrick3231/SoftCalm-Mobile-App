import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LoginScreenProps {
  onBack: () => void;
  onSuccess: () => void;
  onForgotPassword: () => void;
  onSignUp: () => void;
}

export function LoginScreen({ onBack, onSuccess, onForgotPassword, onSignUp }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    const success = await login(email, password);
    if (success) {
      onSuccess();
    } else {
      setError('Invalid credentials');
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
          <div className="text-6xl mb-4">🔑</div>
          <h2 
            className="text-3xl font-bold mb-3 transition-colors duration-300"
            style={{ color: `var(--color-primary)` }}
          >
            Sign In
          </h2>
          <p 
            className="text-lg transition-colors duration-300 opacity-70"
            style={{ color: `var(--color-primary)` }}
          >
            Welcome back to your peaceful space
          </p>
        </div>

        <div className="space-y-6">
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
              placeholder="Enter your password"
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

          {error && (
            <p 
              className="text-center text-lg font-medium p-3 rounded-2xl"
              style={{
                backgroundColor: `var(--color-secondary)`,
                color: '#dc2626',
                borderColor: '#dc2626',
              }}
            >
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full rounded-3xl px-6 py-5 font-bold text-white transition-all duration-300 border-2 hover:scale-105 active:scale-95 hover:shadow-lg"
            style={{
              backgroundColor: `var(--color-primary)`,
              borderColor: `var(--color-primary)`,
            }}
          >
            Sign In 🌸
          </button>

          <button
            onClick={onForgotPassword}
            className="w-full text-center text-lg font-medium py-3 transition-all duration-300 hover:scale-105"
            style={{ color: `var(--color-primary)` }}
          >
            Forgot Password? 🔄
          </button>

          <div className="pt-4 border-t-2" style={{ borderColor: `var(--color-primary)`, opacity: 0.3 }}>
            <p 
              className="text-lg text-center mb-4 transition-colors duration-300"
              style={{ color: `var(--color-primary)` }}
            >
              Don't have an account?
            </p>
            <button
              onClick={onSignUp}
              className="w-full rounded-3xl px-6 py-5 font-bold border-2 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: `var(--color-secondary)`,
                borderColor: `var(--color-primary)`,
                color: `var(--color-primary)`,
              }}
            >
              Create Account 🌟
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
