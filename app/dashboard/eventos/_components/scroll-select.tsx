'use client';

import { useState } from 'react';

interface ScrollSelectProps {
  options: Date[];
  value: Date | null;
  onChange: (value: Date) => void;
  formatOption: (value: Date) => string;
}

export function ScrollSelect({ options, value, onChange, formatOption }: ScrollSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? formatOption(value) : 'Selecione o horário'}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 opacity-50"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80">
          <div className="max-h-48 overflow-y-auto p-1">
            {options.map((option, index) => (
              <div
                key={index}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {formatOption(option)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
