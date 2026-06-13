'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { week1 } from '@/content/week1';

export function WorkoutAfter3Screen() {
  const { state, nextStep } = useApp();

  const totalWorkoutSessions = state.workoutSessions.length + 1;
  const workoutDaysInWeek1 = week1
    .filter(c => c.type === 'workout')
    .map(c => c.day);

  const workoutsThisWeekDone = state.completedDays.filter(d =>
    workoutDaysInWeek1.includes(d)
  ).length + 1;

  const totalWorkoutsThisWeek = workoutDaysInWeek1.length;

  return (
    <PhoneFrame variant="light">
      <ScreenContainer>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-6">
          التطور
        </p>

        <div className="mb-6">
          <Card label="هذا الأسبوع">
            <p className="text-3xl font-semibold">
              {workoutsThisWeekDone} / {totalWorkoutsThisWeek}
              <span className="text-sm opacity-60 mr-2">تمارين</span>
            </p>
          </Card>

          <Card label="من بداية الرحلة">
            <p className="text-3xl font-semibold">
              {totalWorkoutSessions}
              <span className="text-sm opacity-60 mr-2">جلسة تمرين</span>
            </p>
          </Card>
        </div>

        <p className="text-sm opacity-80 leading-relaxed mt-2">
          كل جلسة بناء. شوي شوي، تتجمع. اللي خلصته اليوم، صار جزء من تاريخك.
        </p>

        <div className="flex-1 min-h-[24px]" />

        <Button onClick={nextStep}>
          التالي
        </Button>
      </ScreenContainer>
    </PhoneFrame>
  );
}
