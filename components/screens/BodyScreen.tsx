'use client';

import { useState } from 'react';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';

export function BodyScreen() {
  const { state, addWeightEntry } = useApp();
  const [weightInput, setWeightInput] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleSave = () => {
    const weight = parseFloat(weightInput);
    if (!isNaN(weight) && weight > 0) {
      addWeightEntry(weight);
      setWeightInput('');
      setShowInput(false);
    }
  };

  const latestWeight = state.weightEntries.length > 0
    ? state.weightEntries[state.weightEntries.length - 1]
    : null;

  const firstWeight = state.weightEntries.length > 0
    ? state.weightEntries[0]
    : null;

  const weightChange = latestWeight && firstWeight
    ? latestWeight.weight - firstWeight.weight
    : 0;

  return (
    <PhoneFrame variant="light" showNav={true}>
      <ScreenContainer>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-2">
          متابعة
        </p>
        <h1 className="text-3xl font-semibold mb-6">
          جسمك
        </h1>

        {/* Weight section */}
        <Card label="الوزن">
          {latestWeight ? (
            <>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-3xl font-semibold">
                  {latestWeight.weight}
                </p>
                <p className="text-sm opacity-60">كيلو</p>
              </div>
              {state.weightEntries.length > 1 && (
                <p className="text-xs opacity-60">
                  {weightChange > 0 ? '+' : ''}{weightChange.toFixed(1)} كيلو من البداية
                </p>
              )}
              <p className="text-xs opacity-40 mt-2">
                {state.weightEntries.length} قياس
              </p>
            </>
          ) : (
            <p className="text-sm opacity-60">
              ما سجلت وزن بعد. ابدأ بإدخال وزنك الحالي.
            </p>
          )}

          {showInput ? (
            <div className="mt-4 space-y-3">
              <input
                type="number"
                inputMode="decimal"
                step="0.1"
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
                placeholder="مثلاً: 85.5"
                className="w-full border border-line rounded-xl p-3 text-base focus:outline-none focus:border-ink"
                dir="ltr"
              />
              <div className="flex gap-2">
                <Button onClick={handleSave} disabled={!weightInput}>
                  حفظ
                </Button>
                <Button
                  variant="ghost"
                  fullWidth={false}
                  onClick={() => {
                    setShowInput(false);
                    setWeightInput('');
                  }}
                >
                  إلغاء
                </Button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowInput(true)}
              className="text-sm font-semibold mt-3 opacity-80 hover:opacity-100"
            >
              + سجّل وزن جديد
            </button>
          )}
        </Card>

        {/* Photos section - placeholder */}
        <Card label="الصور">
          <p className="text-sm opacity-60 leading-relaxed">
            صور البداية والتقدم. قادم.
          </p>
        </Card>

        {/* Measurements section - placeholder */}
        <Card label="القياسات">
          <p className="text-sm opacity-60 leading-relaxed">
            الصدر، الخصر، الذراع. قادم.
          </p>
        </Card>

        <div className="flex-1" />

        <p className="text-xs opacity-50 leading-relaxed text-center mt-4 mb-2">
          الجسم يتغير ببطء، ودليله مو دائماً في الميزان.
        </p>
      </ScreenContainer>
    </PhoneFrame>
  );
}
