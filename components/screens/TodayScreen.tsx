'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { PersonaId, DialogLine } from '@/lib/types';
import { personas } from '@/content/personas';
import { week1 } from '@/content/week1';

export function TodayScreen() {
  const { state, setPersona, completeDay, startWorkout } = useApp();
  const currentPersona = personas[state.currentPersona];
  const personaList: PersonaId[] = ['khaled', 'yousef', 'abdullah'];

  const todayCard = week1.find(c => c.day === state.currentDay);
  const isCompleted = state.completedDays.includes(state.currentDay);

  if (!todayCard) {
    return (
      <PhoneFrame variant="light" showNav={true}>
        <ScreenContainer>
          <div className="flex-1 flex items-center justify-center">
            <p className="opacity-60">المحتوى لهذا اليوم قادم</p>
          </div>
        </ScreenContainer>
      </PhoneFrame>
    );
  }

  const scenario = todayCard.scenarios[state.currentPersona];
  const isWorkoutDay = todayCard.type === 'workout';

  return (
    <PhoneFrame variant="light" showNav={true}>
      <ScreenContainer>
        {/* Top bar: day indicator + persona switcher */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs uppercase tracking-widest opacity-50">
            اليوم {state.currentDay} {isWorkoutDay ? '— تمرين' : '— راحة'}
          </p>
          <div className="flex gap-1">
            {personaList.map((p) => (
              <button
                key={p}
                onClick={() => setPersona(p)}
                className={`w-2 h-2 rounded-full transition-all ${
                  state.currentPersona === p
                    ? 'bg-ink scale-125'
                    : 'bg-line'
                }`}
                aria-label={`Switch to ${p}`}
              />
            ))}
          </div>
        </div>

        {/* Persona name (subtle) */}
        <p className="text-sm opacity-60 mb-2">
          مرحباً {currentPersona.name.split(' ')[0]}
        </p>

        {/* Card title */}
        <h1 className="text-3xl font-semibold mb-6">
          {todayCard.title}
        </h1>

        {/* Section: Scene */}
        <Card label="المشهد">
          <p className="text-sm leading-relaxed">
            {scenario.scene}
          </p>
        </Card>

        {/* Section: Dialog */}
        <Card label="العقل × الجسم">
          <div className="space-y-2">
            {scenario.dialog.map((line: DialogLine, idx: number) => (
              <div
                key={idx}
                className="flex gap-2 text-sm leading-relaxed"
              >
                <span className="shrink-0">
                  {line.speaker === 'brain' ? '🧠' : '💪'}
                </span>
                <p className={line.speaker === 'brain' ? 'opacity-70' : ''}>
                  {line.text}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Section: Challenge */}
        <div className="bg-ink text-paper p-4 rounded-xl mb-3">
          <p className="text-xs opacity-60 uppercase tracking-wider mb-2">
            تحدي اليوم
          </p>
          <p className="text-sm font-semibold leading-relaxed">
            {scenario.challenge}
          </p>
        </div>

        {/* Section: Workout (only for workout days) */}
        {isWorkoutDay && scenario.workout && (
          <Card label="تمرين اليوم">
            <p className="text-sm leading-relaxed mb-3">
              {scenario.workout}
            </p>
            <Button variant="ghost" fullWidth={false} onClick={startWorkout}>
              ابدأ التمرين
            </Button>
          </Card>
        )}

        <div className="flex-1 min-h-[24px]" />

        {/* Bottom: complete button */}
        <Button
          onClick={() => completeDay(state.currentDay)}
          disabled={isCompleted}
        >
          {isCompleted ? 'أنجزت اليوم — كمل بكرة' : 'أنجزت اليوم'}
        </Button>
      </ScreenContainer>
    </PhoneFrame>
  );
}
