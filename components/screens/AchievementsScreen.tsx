'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';

export function AchievementsScreen() {
  return (
    <PhoneFrame variant="light" showNav={true}>
      <ScreenContainer>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-2">
          إنجازاتك
        </p>
        <h1 className="text-3xl font-semibold mb-6">
          ما بنيته
        </h1>
        <p className="opacity-60 text-sm">
          التحديات، الإنجازات، الخصومات. قادم.
        </p>
        <div className="flex-1" />
      </ScreenContainer>
    </PhoneFrame>
  );
}
