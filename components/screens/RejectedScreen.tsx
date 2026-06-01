'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';

export function RejectedScreen() {
  const { reset } = useApp();

  return (
    <PhoneFrame variant="light">
      <ScreenContainer>
        <div className="flex-1 flex items-center">
          <div>
            <h1 className="text-3xl font-semibold mb-4">
              نعتذر
            </h1>
            <p className="leading-relaxed opacity-80">
              هذا التطبيق مصمم خصيصاً لرجال بين 38 و 55 سنة. مو لأنك ما تقدر، بل لأن التخصص أهم من العموم.
            </p>
            <p className="leading-relaxed opacity-80 mt-4">
              لاحقاً، راح نطلق نسخ أخرى لفئات مختلفة. ابقَ معنا.
            </p>
          </div>
        </div>
        <Button variant="ghost" onClick={reset}>
          ابدأ من جديد
        </Button>
      </ScreenContainer>
    </PhoneFrame>
  );
}
