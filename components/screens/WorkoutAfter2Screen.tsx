'use client';

import { useState } from 'react';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { FeelingOption } from '@/lib/types';

const feelingOptions: { id: FeelingOption; label: string }[] = [
  { id: 'exhausted', label: 'مرهق، كان صعب' },
  { id: 'tired-but-good', label: 'تعبت بس حلو' },
  { id: 'light-want-more', label: 'خفيف، أقدر أزيد' },
];

export function WorkoutAfter2Screen() {
  const { state, setFeeling, setNote, nextStep } = useApp();
  const [selectedFeeling, setSelectedFeeling] = useState<FeelingOption | null>(
    state.currentSessionFeeling || null
  );
  const [noteText, setNoteText] = useState(state.currentSessionNote || '');
  const [showNoteField, setShowNoteField] = useState(false);

  const handleContinue = () => {
    if (selectedFeeling) {
      setFeeling(selectedFeeling);
    }
    if (noteText.trim()) {
      setNote(noteText.trim());
    }
    nextStep();
  };

  return (
    <PhoneFrame variant="light">
      <ScreenContainer>
        {/* Heading */}
        <h2 className="text-xl font-semibold leading-relaxed mb-2">
          كيف تشعر بعد التمرين؟
        </h2>
        <p className="text-sm opacity-60 mb-6">
          ثانية وحدة. هذا يساعدنا نعرف جسمك.
        </p>

        {/* Feeling options */}
        <div className="flex flex-col gap-3 mb-6">
          {feelingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedFeeling(option.id)}
              className={`text-right border rounded-xl p-4 transition-all ${
                selectedFeeling === option.id
                  ? 'border-ink border-2 font-semibold'
                  : 'border-line'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Note section */}
        {!showNoteField ? (
          <button
            onClick={() => setShowNoteField(true)}
            className="text-sm opacity-60 self-start"
          >
            + أضف ملاحظة (اختياري)
          </button>
        ) : (
          <div className="mt-2">
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="ماذا شعرت؟ ماذا تعلّمت؟ كلمة أو جملة، كما تشاء..."
              className="w-full border border-line rounded-xl p-4 text-sm leading-relaxed resize-none focus:outline-none focus:border-ink"
              rows={3}
              maxLength={500}
            />
            <p className="text-xs opacity-40 mt-1">
              {noteText.length} / 500
            </p>
          </div>
        )}

        <div className="flex-1 min-h-[24px]" />

        {/* Continue button */}
        <Button onClick={handleContinue} disabled={!selectedFeeling}>
          التالي
        </Button>

        {/* Skip option (small, subtle) */}
        <button
          onClick={nextStep}
          className="text-sm opacity-40 mt-3 mx-auto"
        >
          تخطّي
        </button>
      </ScreenContainer>
    </PhoneFrame>
  );
}
