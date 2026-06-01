'use client';

import { useApp } from '@/context/AppContext';
import { WelcomeScreen } from '@/components/screens/WelcomeScreen';
import { AgeCheckScreen } from '@/components/screens/AgeCheckScreen';
import { RejectedScreen } from '@/components/screens/RejectedScreen';
import { AssessmentScreen } from '@/components/screens/AssessmentScreen';
import { ResultScreen } from '@/components/screens/ResultScreen';
import { TodayPlaceholderScreen } from '@/components/screens/TodayPlaceholderScreen';

export default function Home() {
  const { state } = useApp();

  switch (state.currentStep) {
    case 'welcome':
      return <WelcomeScreen />;
    case 'age':
      return <AgeCheckScreen />;
    case 'rejected':
      return <RejectedScreen />;
    case 'assessment':
      return <AssessmentScreen />;
    case 'result':
      return <ResultScreen />;
    case 'today':
      return <TodayPlaceholderScreen />;
    default:
      return <WelcomeScreen />;
  }
}
