import React from 'react';

interface CalmInputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function CalmInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
}: CalmInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-lg text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-4 px-6 rounded-3xl bg-white border-2 border-blue-200 text-lg text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-blue-300 shadow-inner"
      />
    </div>
  );
}
