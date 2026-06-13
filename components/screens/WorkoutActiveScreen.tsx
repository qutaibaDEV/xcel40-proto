'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { week1 } from '@/content/week1';

export function WorkoutActiveScreen() {
  const { state, finishWorkoutPhysical, setStep } = useApp();

  const todayCard = week1.find(c => c.day === state.currentDay);

  if (!todayCard || todayCard.type !== 'workout') {
    return null;
  }

  const scenario = todayCard.scenarios[state.currentPersona];

  return (
    <PhoneFrame variant="light">
      <ScreenContainer>
        {/* Top: day indicator */}
        <p className="text-xs uppercase tracking-widest opacity-50 mb-2">
          اليوم {state.currentDay} — تمرين
        </p>

        {/* Title */}
        <h1 className="text-3xl font-semibold mb-6">
          {todayCard.title}
        </h1>

        {/* Workout description card */}
        <div className="border border-line rounded-xl p-5 mb-3">
          <p className="text-xs opacity-50 uppercase tracking-wider mb-3">
            التمرين
          </p>
          <p className="leading-relaxed">
            {scenario.workout}
          </p>
        </div>

        {/* Subtle reassurance */}
        <p className="text-sm opacity-60 mt-4 leading-relaxed">
          خذ وقتك. ما فيه استعجال. لما تخلص، اضغط الزر تحت.
        </p>

        <div className="flex-1" />

        {/* Bottom buttons */}
        <div className="space-y-3">
          <Button onClick={finishWorkoutPhysical}>
            انتهيت
          </Button>
          <Button variant="ghost" onClick={() => setStep('today')}>
            رجوع
          </Button>
        </div>
      </ScreenContainer>
    </PhoneFrame>
  );
}
