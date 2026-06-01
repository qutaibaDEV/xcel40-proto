import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <PhoneFrame variant="light">
      <ScreenContainer>
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h1 className="text-title font-semibold">Xcel 40</h1>
            <p className="text-heading opacity-60 mt-1">أول تطبيق عربي لرجل الأربعين</p>
          </div>

          <Card label="اختبار">
            <p className="text-base">
              هذا المكوّن يُستخدم لتجميع المحتوى بصرياً. الخط إنجليزي ولكن المحتوى عربي بالكامل.
            </p>
          </Card>

          <div className="flex flex-col gap-3 mt-auto">
            <Button variant="primary">زر أساسي</Button>
            <Button variant="ghost">زر ثانوي</Button>
          </div>
        </div>
      </ScreenContainer>
    </PhoneFrame>
  );
}
