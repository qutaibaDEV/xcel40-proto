import { OnboardingFrame, AssessmentQuestion } from '@/lib/types';

export const onboardingFrames: OnboardingFrame[] = [
  {
    id: 1,
    title: '',
    body: 'عمرك 40 وفوق. وجسمك يحاول يقول لك شي من زمان. جاهز تسمعه؟',
    buttonLabel: 'جاهز',
    variant: 'dark',
  },
  {
    id: 2,
    title: 'كم عمرك؟',
    body: 'عشان نتأكد إن هذا التطبيق مصمم لك تحديداً.',
    buttonLabel: 'كمّل',
    variant: 'light',
  },
  {
    id: 4,
    title: 'نتيجتك',
    body: 'إنت مو في وضع سيء. إنت في وضع متوقف. جسمك ينتظر إشارة بس.',
    buttonLabel: 'وش الإشارة؟',
    variant: 'dark',
  },
  {
    id: 6,
    title: '',
    body: 'سويتها. أول يوم خلص. شوفك بكرة.',
    buttonLabel: 'تمام',
    variant: 'dark',
  },
];

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    question: 'تقدر تصعد 3 أدوار درج بدون ما تلهث؟',
    options: ['أيه، عادي', 'أقدر بس ألهث شوي', 'صعب عليّ'],
  },
  {
    id: 2,
    question: 'كم ساعة تنام فعلاً في الليل؟',
    options: ['7 ساعات أو أكثر', 'بين 5 و 7 ساعات', 'أقل من 5 ساعات'],
  },
  {
    id: 3,
    question: 'آخر مرة حسيت بجسمك خفيف، متى؟',
    options: ['قريب، الأسبوع اللي راح', 'من أشهر', 'من سنين'],
  },
  {
    id: 4,
    question: 'لما تلعب مع عيالك أو تروح مشوار طويل، تلهث بسرعة؟',
    options: ['لا، طبيعي', 'شوي', 'نعم، أتعب مرة'],
  },
  {
    id: 5,
    question: 'تحس بألم في الظهر أو الركب باستمرار؟',
    options: ['لا أبداً', 'أحياناً', 'دايماً'],
  },
];
