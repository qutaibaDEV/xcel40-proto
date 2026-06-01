// Persona types
export type PersonaId = 'khaled' | 'yousef' | 'abdullah';

export interface Persona {
  id: PersonaId;
  name: string;
  age: number;
  occupation: string;
  family: string;
  area: string;
  lifestyle: string;
  obstacle: string;
  physicalState: string;
  mentalState: string;
}

// Daily card types
export type CardType = 'workout' | 'rest';

export interface DialogLine {
  speaker: 'brain' | 'body';
  text: string;
}

export interface ScenarioContent {
  scene: string;
  dialog: DialogLine[];
  challenge: string;
  workout?: string;
}

export interface DailyCard {
  day: number;
  week: number;
  title: string;
  type: CardType;
  scenarios: {
    khaled: ScenarioContent;
    yousef: ScenarioContent;
    abdullah: ScenarioContent;
  };
}

// Onboarding frame types
export interface OnboardingFrame {
  id: number;
  title: string;
  body: string;
  buttonLabel: string;
  variant: 'dark' | 'light';
}

// Assessment types
export interface AssessmentQuestion {
  id: number;
  question: string;
  options: string[];
}

// Negative reaction types
export type ReactionTrigger =
  | 'missed-one-day'
  | 'missed-few-days'
  | 'missed-week'
  | 'failed-workout'
  | 'frustrated'
  | 'travel'
  | 'sick'
  | 'emotional'
  | 'doubt'
  | 'completed-no-sub'
  | 'about-to-cancel';

export interface ReactionResponse {
  trigger: ReactionTrigger;
  title: string;
  message: string;
  primaryAction?: string;
  secondaryAction?: string;
}

// Onboarding flow step type
export type FlowStep =
  | 'welcome'
  | 'age'
  | 'rejected'
  | 'assessment'
  | 'result'
  | 'today';

// App state types
export interface AppState {
  currentPersona: PersonaId;
  currentDay: number;
  currentWeek: number;
  completedDays: number[];
  age?: number;
  assessmentAnswers?: Record<number, string>;
  reminderTime?: string;
  currentStep: FlowStep;
  assessmentStep: number;
  hasCompletedOnboarding: boolean;
}
