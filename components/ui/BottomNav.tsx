'use client';

import { useApp } from '@/context/AppContext';
import { FlowStep } from '@/lib/types';

interface NavItem {
  step: FlowStep;
  label: string;
}

const navItems: NavItem[] = [
  { step: 'today', label: 'اليوم' },
  { step: 'journey', label: 'الرحلة' },
  { step: 'body', label: 'الجسم' },
  { step: 'achievements', label: 'إنجازاتي' },
  { step: 'account', label: 'حسابي' },
];

export function BottomNav() {
  const { state, setStep } = useApp();

  return (
    <nav className="flex justify-around items-center py-3 px-2 border-t border-line bg-paper">
      {navItems.map((item) => {
        const isActive = state.currentStep === item.step;
        return (
          <button
            key={item.step}
            onClick={() => setStep(item.step)}
            className={`flex-1 text-center py-2 text-xs transition-opacity ${
              isActive
                ? 'font-semibold opacity-100'
                : 'opacity-50 hover:opacity-80'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
