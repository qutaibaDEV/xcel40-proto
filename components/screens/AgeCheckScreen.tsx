'use client';

import { useState } from 'react';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { onboardingFrames } from '@/content/onboarding';

export function AgeCheckScreen() {
  const { setAge } = useApp();
  const [ageInput, setAgeInput] = useState('');
  const frame = onboardingFrames.find(f => f.id === 2)!;

  const handleContinue = () => {
    const age = parseInt(ageInput, 10);
    if (!isNaN(age) && age > 0) {
      setAge(age);
    }
  };

  const isValid = ageInput !== '' && !isNaN(parseInt(ageInput, 10));

  return (
    <PhoneFrame variant="light">
      <ScreenContainer>
        <h1 className="text-3xl font-semibold mb-3">
          {frame.title}
        </h1>
        <p className="opacity-70 mb-8">
          {frame.body}
        </p>
        <div className="flex-1 flex items-center justify-center">
          <input
            type="number"
            inputMode="numeric"
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
            placeholder="44"
            className="w-32 text-5xl font-semibold text-center bg-transparent border-b-2 border-ink focus:outline-none"
            dir="ltr"
          />
        </div>
        <Button onClick={handleContinue} disabled={!isValid}>
          {frame.buttonLabel}
        </Button>
      </ScreenContainer>
    </PhoneFrame>
  );
}
