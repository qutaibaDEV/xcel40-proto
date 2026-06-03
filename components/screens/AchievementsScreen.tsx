'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Card } from '@/components/ui/Card';
import { useApp } from '@/context/AppContext';

export function AchievementsScreen() {
  const { state } = useApp();

  const totalWorkouts = state.workoutSessions.length;
  const totalDays = state.completedDays.length;

  let currentStreak = 0;
  for (let day = 1; day <= state.completedDays.length + 1; day++) {
    if (state.completedDays.includes(day)) {
      currentStreak++;
    } else {
      break;
    }
  }

  return (
    <PhoneFrame variant="light" showNav={true}>
      <ScreenContainer>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-2">
          إنجازاتك
        </p>
        <h1 className="text-3xl font-semibold mb-6">
          ما بنيته
        </h1>

        {/* Stats — real data */}
        <Card label="أرقامك">
          <div className="space-y-4">
            <div>
              <p className="text-3xl font-semibold">
                {totalDays}
                <span className="text-sm opacity-60 mr-2">يوم</span>
              </p>
              <p className="text-xs opacity-60">أكملته من رحلتك</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">
                {totalWorkouts}
                <span className="text-sm opacity-60 mr-2">جلسة</span>
              </p>
              <p className="text-xs opacity-60">تمرين كاملة</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">
                {currentStreak}
                <span className="text-sm opacity-60 mr-2">يوم متتالي</span>
              </p>
              <p className="text-xs opacity-60">
                {currentStreak > 0 ? 'انتظام، خطوة خطوة' : 'ابدأ من اليوم'}
              </p>
            </div>
          </div>
        </Card>

        {/* Challenges — placeholder */}
        <Card label="التحديات الشهرية">
          <p className="text-sm opacity-60 leading-relaxed mb-2">
            🔒 تفتح بعد إكمال الـ 12 أسبوع.
          </p>
          <p className="text-xs opacity-50 leading-relaxed">
            6 تحديات سنوياً، كل تحدي 30 يوم. كل تحدي تكمله يقلل سعر اشتراكك السنوي القادم.
          </p>
        </Card>

        {/* Discounts — placeholder */}
        <Card label="خصم التجديد">
          <p className="text-sm opacity-60 leading-relaxed mb-2">
            يبدأ بعد إكمال الرحلة.
          </p>
          <div className="space-y-1 text-xs opacity-60">
            <p>· خرّيج الرحلة: خصم 10%</p>
            <p>· + تحدي واحد: خصم 20%</p>
            <p>· + تحديين: خصم 30%</p>
          </div>
        </Card>

        <div className="flex-1" />

        <p className="text-xs opacity-50 leading-relaxed text-center mt-4 mb-2">
          ما تبني يبقى. الباقي يضيع.
        </p>
      </ScreenContainer>
    </PhoneFrame>
  );
}
