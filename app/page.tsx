'use client';

import { useApp } from '@/context/AppContext';
import { WelcomeScreen } from '@/components/screens/WelcomeScreen';
import { AgeCheckScreen } from '@/components/screens/AgeCheckScreen';
import { RejectedScreen } from '@/components/screens/RejectedScreen';
import { AssessmentScreen } from '@/components/screens/AssessmentScreen';
import { ResultScreen } from '@/components/screens/ResultScreen';
import { TodayScreen } from '@/components/screens/TodayScreen';

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
      return <TodayScreen />;
    default:
      return <WelcomeScreen />;
  }
}
