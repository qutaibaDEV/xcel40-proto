'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Card } from '@/components/ui/Card';
import { useApp } from '@/context/AppContext';

export function TodayPlaceholderScreen() {
  const { state } = useApp();

  return (
    <PhoneFrame variant="light">
      <ScreenContainer>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-4">
          اليوم 1 — البداية
        </p>
        <h1 className="text-3xl font-semibold mb-6">
          أهلاً بك
        </h1>
        <p className="leading-relaxed opacity-80 mb-6">
          أكملت اختبار البداية. غداً يبدأ كل شي. شوف كرت أول يوم.
        </p>

        <Card label="حالتك">
          <p className="text-sm opacity-80">
            عمرك: {state.age} سنة
          </p>
          <p className="text-sm opacity-80 mt-1">
            أجبت على {Object.keys(state.assessmentAnswers || {}).length} أسئلة
          </p>
        </Card>

        <div className="mt-6 p-4 bg-ink/5 rounded-xl">
          <p className="text-sm opacity-70 leading-relaxed">
            هذه شاشة مؤقتة. كرت اليوم الكامل بيظهر هنا في الإصدار القادم.
          </p>
        </div>

        <div className="flex-1" />
      </ScreenContainer>
    </PhoneFrame>
  );
}
