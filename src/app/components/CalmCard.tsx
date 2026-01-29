import React, { ReactNode } from 'react';

interface CalmCardProps {
  children: ReactNode;
  onClick?: () => void;
  color?: 'blue' | 'green' | 'yellow' | 'purple' | 'pink';
}

export function CalmCard({ children, onClick, color = 'blue' }: CalmCardProps) {
  const colors = {
    blue: 'bg-gradient-to-br from-blue-100 to-blue-200 shadow-[0_6px_20px_rgba(191,219,254,0.5)] hover:shadow-[0_8px_24px_rgba(191,219,254,0.7)] active:shadow-[0_2px_8px_rgba(191,219,254,0.3)]',
    green: 'bg-gradient-to-br from-green-100 to-green-200 shadow-[0_6px_20px_rgba(187,247,208,0.5)] hover:shadow-[0_8px_24px_rgba(187,247,208,0.7)] active:shadow-[0_2px_8px_rgba(187,247,208,0.3)]',
    yellow: 'bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-[0_6px_20px_rgba(254,240,138,0.5)] hover:shadow-[0_8px_24px_rgba(254,240,138,0.7)] active:shadow-[0_2px_8px_rgba(254,240,138,0.3)]',
    purple: 'bg-gradient-to-br from-purple-100 to-purple-200 shadow-[0_6px_20px_rgba(233,213,255,0.5)] hover:shadow-[0_8px_24px_rgba(233,213,255,0.7)] active:shadow-[0_2px_8px_rgba(233,213,255,0.3)]',
    pink: 'bg-gradient-to-br from-pink-100 to-pink-200 shadow-[0_6px_20px_rgba(252,231,243,0.5)] hover:shadow-[0_8px_24px_rgba(252,231,243,0.7)] active:shadow-[0_2px_8px_rgba(252,231,243,0.3)]',
  };

  return (
    <div
      onClick={onClick}
      className={`
        ${colors[color]}
        min-h-[56px] p-6 rounded-3xl
        transition-all duration-150 ease-out
        ${onClick ? 'cursor-pointer active:scale-95' : ''}
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400
      `}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </div>
  );
}
