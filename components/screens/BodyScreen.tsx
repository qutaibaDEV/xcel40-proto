'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';

export function BodyScreen() {
  return (
    <PhoneFrame variant="light" showNav={true}>
      <ScreenContainer>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-2">
          متابعة
        </p>
        <h1 className="text-3xl font-semibold mb-6">
          جسمك
        </h1>
        <p className="opacity-60 text-sm">
          الوزن، الصور، القياسات. قادم.
        </p>
        <div className="flex-1" />
      </ScreenContainer>
    </PhoneFrame>
  );
}
