'use client';

import { ReactNode } from 'react';

interface ScreenContainerProps {
  children: ReactNode;
  className?: string;
}

export function ScreenContainer({ children, className = '' }: ScreenContainerProps) {
  return (
    <div className={`flex-1 flex flex-col px-6 py-8 ${className}`}>
      {children}
    </div>
  );
}
