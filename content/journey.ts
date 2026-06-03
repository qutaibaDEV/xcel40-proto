export interface JourneyWeek {
  week: number;
  title: string;
  description: string;
  phase: 'beginning' | 'continuation' | 'change' | 'after';
}

export interface JourneyPhase {
  id: 'beginning' | 'continuation' | 'change' | 'after';
  name: string;
  description: string;
  weekRange: [number, number];
}

export const phases: JourneyPhase[] = [
  {
    id: 'beginning',
    name: 'البداية',
    description: 'الأسابيع الأربعة الأولى. تعرّف على جسمك من جديد.',
    weekRange: [1, 4],
  },
  {
    id: 'continuation',
    name: 'الاستمرار',
    description: 'الأسابيع 5 إلى 8. تثبيت العادة.',
    weekRange: [5, 8],
  },
  {
    id: 'change',
    name: 'بداية التغيير',
    description: 'الأسابيع 9 إلى 12. الجسم يستجيب.',
    weekRange: [9, 12],
  },
  {
    id: 'after',
    name: 'ما بعد',
    description: 'بعد إكمال الرحلة. تحديات شهرية وحياة جديدة.',
    weekRange: [13, 13],
  },
];

export const journeyWeeks: JourneyWeek[] = [
  // Phase 1: البداية
  { week: 1, title: 'الاعتراف', description: 'من سنين تأجل البداية. اليوم.', phase: 'beginning' },
  { week: 2, title: 'لقاء الجسم', description: 'تعرّف على جسمك من جديد.', phase: 'beginning' },
  { week: 3, title: 'الحركة الأولى', description: 'تمرين كامل، 15 دقيقة.', phase: 'beginning' },
  { week: 4, title: 'العادة تبدأ', description: 'الجسم بدأ يتذكر.', phase: 'beginning' },
  // Phase 2: الاستمرار
  { week: 5, title: 'الانتظام', description: 'مو يومين في الأسبوع، طول الأسبوع.', phase: 'continuation' },
  { week: 6, title: 'الإيقاع', description: 'صار جزء من حياتك.', phase: 'continuation' },
  { week: 7, title: 'التحدي الأول', description: 'كسر التراكم.', phase: 'continuation' },
  { week: 8, title: 'النقطة الفاصلة', description: 'نصف الرحلة.', phase: 'continuation' },
  // Phase 3: بداية التغيير
  { week: 9, title: 'استجابة الجسم', description: 'النتائج بدأت تظهر.', phase: 'change' },
  { week: 10, title: 'الثقة', description: 'تعرف إنك تقدر.', phase: 'change' },
  { week: 11, title: 'الذروة', description: 'أعلى نقطة في الرحلة.', phase: 'change' },
  { week: 12, title: 'البداية الجديدة', description: 'مو نهاية، بداية.', phase: 'change' },
];
