'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  fullWidth = true,
  className = '',
  ...rest
}: ButtonProps) {
  const base = 'font-semibold text-base py-3 px-6 rounded-xl transition-opacity hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed';
  const widthClass = fullWidth ? 'w-full' : '';

  const variantClass =
    variant === 'primary'
      ? 'bg-ink text-paper'
      : 'bg-transparent text-current border border-current opacity-60';

  return (
    <button className={`${base} ${widthClass} ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
}
