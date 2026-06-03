'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AppState, FeelingOption, FlowStep, PersonaId, WorkoutSession, WeightEntry } from '@/lib/types';

export const MAIN_TABS: FlowStep[] = ['today', 'journey', 'body', 'achievements', 'account'];
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
  startWorkout: () => void;
  finishWorkoutPhysical: () => void;
  setFeeling: (feeling: FeelingOption) => void;
  setNote: (note: string) => void;
  saveWorkoutSession: () => void;
  isMainTab: () => boolean;
  addWeightEntry: (weight: number) => void;
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
      if (prev.currentStep === 'workout-after-4') {
        const session: WorkoutSession = {
          day: prev.currentDay,
          persona: prev.currentPersona,
          completedAt: new Date().toISOString(),
          feeling: prev.currentSessionFeeling,
          note: prev.currentSessionNote,
        };
        return {
          ...prev,
          currentStep: 'today' as FlowStep,
          workoutSessions: [...prev.workoutSessions, session],
          completedDays: Array.from(new Set([...prev.completedDays, prev.currentDay])),
          currentDay: Math.max(prev.currentDay, prev.currentDay + 1),
          currentSessionFeeling: undefined,
          currentSessionNote: undefined,
        };
      }

      const stepMap: Partial<Record<FlowStep, FlowStep>> = {
        welcome: 'age',
        age: 'assessment',
        assessment: 'result',
        result: 'today',
        'workout-after-1': 'workout-after-2',
        'workout-after-2': 'workout-after-3',
        'workout-after-3': 'workout-after-4',
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

  const startWorkout = () => {
    setState(prev => ({ ...prev, currentStep: 'workout-active' }));
  };

  const finishWorkoutPhysical = () => {
    setState(prev => ({ ...prev, currentStep: 'workout-after-1' }));
  };

  const setFeeling = (feeling: FeelingOption) => {
    setState(prev => ({ ...prev, currentSessionFeeling: feeling }));
  };

  const setNote = (note: string) => {
    setState(prev => ({ ...prev, currentSessionNote: note }));
  };

  const saveWorkoutSession = () => {
    setState(prev => {
      const session: WorkoutSession = {
        day: prev.currentDay,
        persona: prev.currentPersona,
        completedAt: new Date().toISOString(),
        feeling: prev.currentSessionFeeling,
        note: prev.currentSessionNote,
      };
      return {
        ...prev,
        workoutSessions: [...prev.workoutSessions, session],
        currentSessionFeeling: undefined,
        currentSessionNote: undefined,
      };
    });
  };

  const isMainTab = () => MAIN_TABS.includes(state.currentStep);

  const addWeightEntry = (weight: number) => {
    setState(prev => ({
      ...prev,
      weightEntries: [
        ...prev.weightEntries,
        { date: new Date().toISOString(), weight },
      ],
    }));
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
      workoutSessions: [],
      weightEntries: [],
    });
  };

  return (
    <AppContext.Provider value={{ state, setPersona, completeDay, setAge, setStep, nextStep, setAssessmentAnswer, nextAssessmentStep, completeOnboarding, reset, startWorkout, finishWorkoutPhysical, setFeeling, setNote, saveWorkoutSession, isMainTab, addWeightEntry }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
