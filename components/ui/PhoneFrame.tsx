'use client';

import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  variant?: 'light' | 'dark';
}

export function PhoneFrame({ children, variant = 'light' }: PhoneFrameProps) {
  const isDark = variant === 'dark';
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-paper py-0 md:py-8">
      <div className="w-full md:w-[390px] md:rounded-[40px] md:border-2 md:border-ink md:overflow-hidden md:shadow-2xl">
        <div
          className={`min-h-screen md:min-h-[780px] flex flex-col ${
            isDark ? 'bg-ink text-paper' : 'bg-paper text-ink'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
