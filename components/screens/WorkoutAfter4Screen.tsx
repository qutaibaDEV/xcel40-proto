'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { week1 } from '@/content/week1';

export function WorkoutAfter4Screen() {
  const { state, nextStep } = useApp();

  const tomorrowDay = state.currentDay + 1;
  const tomorrowCard = week1.find(c => c.day === tomorrowDay);

  const tomorrowHint = tomorrowCard
    ? tomorrowCard.type === 'workout'
      ? 'بكرة تمرين جديد. ٢٠ دقيقة بس.'
      : 'بكرة يوم راحة. تحدي صغير ينتظرك.'
    : 'بكرة محتوى جديد ينتظرك.';

  return (
    <PhoneFrame variant="dark">
      <ScreenContainer>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-6">
          بكرة
        </p>

        <div className="flex-1 flex items-center">
          <div>
            <p className="text-2xl font-semibold leading-relaxed mb-4">
              {tomorrowHint}
            </p>
            <p className="text-base opacity-70 leading-relaxed">
              شوفك الصبح. خذ راحتك الليلة، الجسم يبني وأنت نايم.
            </p>
          </div>
        </div>

        <Button onClick={nextStep}>
          أغلق
        </Button>
      </ScreenContainer>
    </PhoneFrame>
  );
}
