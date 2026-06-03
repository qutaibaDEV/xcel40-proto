'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { personas } from '@/content/personas';

export function AccountScreen() {
  const { state, reset } = useApp();
  const currentPersona = personas[state.currentPersona];

  return (
    <PhoneFrame variant="light" showNav={true}>
      <ScreenContainer>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-2">
          إعداداتك
        </p>
        <h1 className="text-3xl font-semibold mb-6">
          حسابك
        </h1>

        {/* Profile section — real data */}
        <Card label="ملفك">
          <div className="space-y-3">
            <div>
              <p className="text-xs opacity-50 mb-1">الاسم</p>
              <p className="text-base font-semibold">
                {currentPersona.name}
              </p>
            </div>
            <div>
              <p className="text-xs opacity-50 mb-1">العمر</p>
              <p className="text-base font-semibold">
                {state.age ? `${state.age} سنة` : '—'}
              </p>
            </div>
            <div>
              <p className="text-xs opacity-50 mb-1">في الرحلة منذ</p>
              <p className="text-base font-semibold">
                {state.completedDays.length} يوم
              </p>
            </div>
          </div>
        </Card>

        {/* Subscription section — placeholder */}
        <Card label="الاشتراك">
          <p className="text-sm font-semibold mb-2">
            النسخة التجريبية
          </p>
          <p className="text-xs opacity-60 leading-relaxed mb-3">
            تستخدم النسخة التجريبية حالياً. بعد الإطلاق، تختار من 3 خيارات:
          </p>
          <div className="space-y-1 text-xs opacity-60 mb-3">
            <p>· سنوي — 120 د.ك (10 د.ك شهرياً)</p>
            <p>· رحلة كاملة — 45 د.ك (مرة وحدة)</p>
            <p>· 3 دفعات — 20 د.ك × 3</p>
          </div>
          <p className="text-xs opacity-50">
            تفاصيل الاشتراك قادمة.
          </p>
        </Card>

        {/* Time-off section — gateway to negative cases */}
        <Card label="وقت مستقطع">
          <p className="text-xs opacity-60 leading-relaxed mb-3">
            الحياة تزحم. لو احتجت توقّف الرحلة لأي سبب — سفر، مرض، ظرف — نحفظ تقدمك وترجع متى ما تبي.
          </p>
          <Button variant="ghost" fullWidth={false}>
            أحتاج وقت مستقطع
          </Button>
        </Card>

        {/* Settings section — placeholder */}
        <Card label="الإعدادات">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span>التنبيهات</span>
              <span className="opacity-50 text-xs">قادم</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>وقت التذكير اليومي</span>
              <span className="opacity-50 text-xs">قادم</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>اللغة</span>
              <span className="opacity-50 text-xs">عربي</span>
            </div>
          </div>
        </Card>

        {/* Support section */}
        <Card label="الدعم">
          <div className="space-y-3">
            <div className="text-sm">
              <p className="font-semibold mb-1">تواصل معنا</p>
              <p className="text-xs opacity-60">support@xcel40.app</p>
            </div>
            <div className="text-sm">
              <p className="font-semibold mb-1">الأسئلة الشائعة</p>
              <p className="text-xs opacity-50">قادم</p>
            </div>
          </div>
        </Card>

        {/* Reset section — for prototype testing only */}
        <Card label="للتجربة فقط">
          <p className="text-xs opacity-60 leading-relaxed mb-3">
            هذي النسخة تجريبية. تقدر تعيد كل البيانات وتبدأ من الصفر.
          </p>
          <button
            onClick={() => {
              if (confirm('متأكد؟ كل تقدمك راح يمسح.')) {
                reset();
              }
            }}
            className="text-sm opacity-70 hover:opacity-100 underline"
          >
            مسح كل البيانات والبدء من جديد
          </button>
        </Card>

        <p className="text-xs opacity-50 leading-relaxed text-center mt-4 mb-2">
          النسخة 0.1 — مرحلة التجربة.
        </p>
      </ScreenContainer>
    </PhoneFrame>
  );
}
