'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AppState, PersonaId } from '@/lib/types';
import { loadState, saveState } from '@/lib/storage';

interface AppContextValue {
  state: AppState;
  setPersona: (persona: PersonaId) => void;
  completeDay: (day: number) => void;
  setAge: (age: number) => void;
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
    setState(prev => ({ ...prev, age }));
  };

  const reset = () => {
    setState({
      currentPersona: 'khaled',
      currentDay: 1,
      currentWeek: 1,
      completedDays: [],
    });
  };

  return (
    <AppContext.Provider value={{ state, setPersona, completeDay, setAge, reset }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
