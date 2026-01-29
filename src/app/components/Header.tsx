import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  onBack?: () => void;
  showBack?: boolean;
}

export function Header({ onBack, showBack = true }: HeaderProps) {
  return (
    <div className="relative flex items-center justify-center py-6 px-4">
      {showBack && onBack && (
        <button
          onClick={onBack}
          className="absolute left-4 p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-md hover:shadow-lg"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-blue-700" />
        </button>
      )}
      <h1 className="text-2xl text-center text-gray-700">
        Soft Calm 🌸
      </h1>
    </div>
  );
}
