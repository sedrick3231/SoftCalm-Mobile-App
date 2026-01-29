import React, { ReactNode } from 'react';

interface CalmButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export function CalmButton({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  type = 'button',
}: CalmButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-br from-blue-200 to-blue-300 text-blue-900 shadow-[0_4px_12px_rgba(191,219,254,0.6)] hover:shadow-[0_6px_16px_rgba(191,219,254,0.8)] active:shadow-[0_2px_8px_rgba(191,219,254,0.4)]',
    secondary: 'bg-gradient-to-br from-purple-200 to-purple-300 text-purple-900 shadow-[0_4px_12px_rgba(233,213,255,0.6)] hover:shadow-[0_6px_16px_rgba(233,213,255,0.8)] active:shadow-[0_2px_8px_rgba(233,213,255,0.4)]',
    success: 'bg-gradient-to-br from-green-200 to-green-300 text-green-900 shadow-[0_4px_12px_rgba(187,247,208,0.6)] hover:shadow-[0_6px_16px_rgba(187,247,208,0.8)] active:shadow-[0_2px_8px_rgba(187,247,208,0.4)]',
    warning: 'bg-gradient-to-br from-yellow-200 to-yellow-300 text-yellow-900 shadow-[0_4px_12px_rgba(254,240,138,0.6)] hover:shadow-[0_6px_16px_rgba(254,240,138,0.8)] active:shadow-[0_2px_8px_rgba(254,240,138,0.4)]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        min-h-[48px] py-4 px-8 rounded-3xl
        transition-all duration-150 ease-out
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
        active:scale-95
      `}
      aria-disabled={disabled}
    >
      <span className="text-lg font-medium">{children}</span>
    </button>
  );
}
