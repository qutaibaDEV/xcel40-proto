'use client';

import { ReactNode } from 'react';
import { useApp } from '@/context/AppContext';

interface PhoneFrameProps {
  children: ReactNode;
  variant?: 'light' | 'dark';
  showResetButton?: boolean;
}

export function PhoneFrame({ children, variant = 'light', showResetButton = true }: PhoneFrameProps) {
  const isDark = variant === 'dark';
  const { reset } = useApp();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-paper py-0 md:py-8">
      <div className="w-full md:w-[390px] md:rounded-[40px] md:border-2 md:border-ink md:overflow-hidden md:shadow-2xl">
        <div
          className={`min-h-screen md:min-h-[780px] flex flex-col ${
            isDark ? 'bg-ink text-paper' : 'bg-paper text-ink'
          }`}
        >
          {children}
        </div>
      </div>
      {showResetButton && (
        <button
          onClick={reset}
          className="mt-3 text-xs text-ink opacity-30 hover:opacity-60 transition-opacity"
        >
          reset
        </button>
      )}
    </div>
  );
}
