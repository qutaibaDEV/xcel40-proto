'use client';

import { useState } from 'react';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { assessmentQuestions } from '@/content/onboarding';

export function AssessmentScreen() {
  const { state, setAssessmentAnswer, nextAssessmentStep, setStep } = useApp();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestionIndex = state.assessmentStep - 1;
  const question = assessmentQuestions[currentQuestionIndex];
  const totalQuestions = assessmentQuestions.length;

  if (!question) {
    return null;
  }

  const handleContinue = () => {
    if (!selectedOption) return;

    setAssessmentAnswer(question.id, selectedOption);

    if (state.assessmentStep < totalQuestions) {
      nextAssessmentStep();
      setSelectedOption(null);
    } else {
      setStep('result');
    }
  };

  return (
    <PhoneFrame variant="light">
      <ScreenContainer>
        {/* Progress dots */}
        <div className="flex gap-1 mb-8">
          {Array.from({ length: totalQuestions }).map((_, idx) => (
            <div
              key={idx}
              className={`flex-1 h-1 rounded-full ${
                idx < state.assessmentStep ? 'bg-ink' : 'bg-line'
              }`}
            />
          ))}
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold leading-relaxed mb-6">
          {question.question}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3 mb-8">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`text-right border rounded-xl p-4 transition-all ${
                selectedOption === option
                  ? 'border-ink border-2 font-semibold'
                  : 'border-line'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex-1" />

        <Button onClick={handleContinue} disabled={!selectedOption}>
          {state.assessmentStep < totalQuestions ? 'التالي' : 'اعرض النتيجة'}
        </Button>
      </ScreenContainer>
    </PhoneFrame>
  );
}
