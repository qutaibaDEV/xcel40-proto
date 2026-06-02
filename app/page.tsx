'use client';

import { useApp } from '@/context/AppContext';
import { WelcomeScreen } from '@/components/screens/WelcomeScreen';
import { AgeCheckScreen } from '@/components/screens/AgeCheckScreen';
import { RejectedScreen } from '@/components/screens/RejectedScreen';
import { AssessmentScreen } from '@/components/screens/AssessmentScreen';
import { ResultScreen } from '@/components/screens/ResultScreen';
import { TodayScreen } from '@/components/screens/TodayScreen';
import { WorkoutActiveScreen } from '@/components/screens/WorkoutActiveScreen';
import { WorkoutAfter1Screen } from '@/components/screens/WorkoutAfter1Screen';
import { WorkoutAfter2Screen } from '@/components/screens/WorkoutAfter2Screen';
import { WorkoutAfter3Screen } from '@/components/screens/WorkoutAfter3Screen';
import { WorkoutAfter4Screen } from '@/components/screens/WorkoutAfter4Screen';

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
    case 'workout-active':
      return <WorkoutActiveScreen />;
    case 'workout-after-1':
      return <WorkoutAfter1Screen />;
    case 'workout-after-2':
      return <WorkoutAfter2Screen />;
    case 'workout-after-3':
      return <WorkoutAfter3Screen />;
    case 'workout-after-4':
      return <WorkoutAfter4Screen />;
    default:
      return <WelcomeScreen />;
  }
}
