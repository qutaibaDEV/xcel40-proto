'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AppState, FlowStep, PersonaId } from '@/lib/types';
import { loadState, saveState } from '@/lib/storage';

interface AppContextValue {
  state: AppState;
  setPersona: (persona: PersonaId) => void;
  completeDay: (day: number) => void;
  setAge: (age: number) => void;
  setStep: (step: FlowStep) => void;
  nextStep: () => void;
  setAssessmentAnswer: (questionId: number, answer: string) => void;
  nextAssessmentStep: () => void;
  completeOnboarding: () => void;
  reset: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => loadState());

  useEffect(() => {
    saveState(state);
  }, [state]);

  const setPersona = (persona: PersonaId) => {
    setState(prev => ({ ...prev, currentPersona: persona }));
  };

  const completeDay = (day: number) => {
    setState(prev => ({
      ...prev,
      completedDays: Array.from(new Set([...prev.completedDays, day])),
      currentDay: Math.max(prev.currentDay, day + 1),
    }));
  };

  const setAge = (age: number) => {
    const inRange = age >= 38 && age <= 55;
    setState(prev => ({
      ...prev,
      age,
      currentStep: inRange ? 'assessment' : 'rejected',
      assessmentStep: inRange ? 1 : prev.assessmentStep,
    }));
  };

  const setStep = (step: FlowStep) => {
    setState(prev => ({ ...prev, currentStep: step }));
  };

  const nextStep = () => {
    setState(prev => {
      const stepMap: Partial<Record<FlowStep, FlowStep>> = {
        welcome: 'age',
        age: 'assessment',
        assessment: 'result',
        result: 'today',
      };
      const next = stepMap[prev.currentStep];
      if (!next) return prev;
      if (prev.currentStep === 'age' && (prev.age === undefined || prev.age < 38 || prev.age > 55)) return prev;
      if (prev.currentStep === 'assessment' && prev.assessmentStep < 5) return prev;
      return { ...prev, currentStep: next };
    });
  };

  const setAssessmentAnswer = (questionId: number, answer: string) => {
    setState(prev => ({
      ...prev,
      assessmentAnswers: { ...prev.assessmentAnswers, [questionId]: answer },
    }));
  };

  const nextAssessmentStep = () => {
    setState(prev => ({
      ...prev,
      assessmentStep: Math.min(prev.assessmentStep + 1, 5),
    }));
  };

  const completeOnboarding = () => {
    setState(prev => ({ ...prev, hasCompletedOnboarding: true, currentStep: 'today' }));
  };

  const reset = () => {
    setState({
      currentPersona: 'khaled',
      currentDay: 1,
      currentWeek: 1,
      completedDays: [],
      currentStep: 'welcome',
      assessmentStep: 1,
      hasCompletedOnboarding: false,
    });
  };

  return (
    <AppContext.Provider value={{ state, setPersona, completeDay, setAge, setStep, nextStep, setAssessmentAnswer, nextAssessmentStep, completeOnboarding, reset }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
