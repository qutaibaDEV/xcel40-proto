'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { onboardingFrames } from '@/content/onboarding';

export function WelcomeScreen() {
  const { nextStep } = useApp();
  const frame = onboardingFrames.find(f => f.id === 1)!;

  return (
    <PhoneFrame variant="dark">
      <ScreenContainer>
        <div className="flex-1 flex items-center">
          <p className="text-2xl font-semibold leading-relaxed">
            {frame.body}
          </p>
        </div>
        <Button onClick={nextStep}>
          {frame.buttonLabel}
        </Button>
      </ScreenContainer>
    </PhoneFrame>
  );
}
