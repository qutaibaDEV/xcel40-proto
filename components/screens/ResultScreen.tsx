'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { onboardingFrames } from '@/content/onboarding';

export function ResultScreen() {
  const { completeOnboarding } = useApp();
  const frame = onboardingFrames.find(f => f.id === 4)!;

  return (
    <PhoneFrame variant="dark">
      <ScreenContainer>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-8">
          نتيجتك
        </p>
        <div className="flex-1 flex items-center">
          <p className="text-2xl font-semibold leading-relaxed">
            {frame.body}
          </p>
        </div>
        <Button onClick={completeOnboarding}>
          {frame.buttonLabel}
        </Button>
      </ScreenContainer>
    </PhoneFrame>
  );
}
