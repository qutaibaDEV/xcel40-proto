'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

export function Card({ children, label, className = '' }: CardProps) {
  return (
    <div className={`border border-line rounded-xl p-4 mb-3 ${className}`}>
      {label && (
        <div className="text-xs opacity-50 uppercase tracking-wider mb-2">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
