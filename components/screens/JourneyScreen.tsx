'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';

export function JourneyScreen() {
  return (
    <PhoneFrame variant="light" showNav={true}>
      <ScreenContainer>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-2">
          رحلتك
        </p>
        <h1 className="text-3xl font-semibold mb-6">
          الـ 12 أسبوع
        </h1>
        <p className="opacity-60 text-sm">
          محتوى الرحلة بيبني قريب.
        </p>
        <div className="flex-1" />
      </ScreenContainer>
    </PhoneFrame>
  );
}
