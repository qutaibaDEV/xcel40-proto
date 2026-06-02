'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';

export function WorkoutAfter1Screen() {
  const { nextStep } = useApp();

  return (
    <PhoneFrame variant="dark">
      <ScreenContainer>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Checkmark */}
          <div className="text-5xl mb-8 opacity-90">
            ✓
          </div>

          {/* Main message */}
          <p className="text-2xl font-semibold leading-relaxed mb-4">
            خلصت
          </p>

          <p className="text-lg leading-relaxed opacity-80 max-w-xs">
            دقائق من عمرك استثمرتها في نفسك. هذا اللي يفرق.
          </p>
        </div>

        <Button onClick={nextStep}>
          كمّل
        </Button>
      </ScreenContainer>
    </PhoneFrame>
  );
}
