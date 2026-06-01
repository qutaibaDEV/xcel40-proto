import { ReactionResponse } from '@/lib/types';

export const reactions: Record<string, ReactionResponse> = {
  'missed-one-day': {
    trigger: 'missed-one-day',
    title: '',
    message: 'يوم وحد ما يكسر شي. الرحلة مو سلسلة تنكسر، طريق ترجع له وقت ما تبي. كرت اليوم ينتظرك.',
    primaryAction: 'افتح كرت اليوم',
  },
  'missed-few-days': {
    trigger: 'missed-few-days',
    title: '',
    message: 'صار لك كم يوم. عادي، الحياة تزحم. السؤال مو ليش وقفت، السؤال تبي ترجع؟ لو إيه، خلنا نبدأ من وين وقفت، مو من الصفر.',
    primaryAction: 'أكمل من وين وقفت',
    secondaryAction: 'ابدأ الأسبوع من جديد',
  },
  'missed-week': {
    trigger: 'missed-week',
    title: '',
    message: 'صار لك أسبوع. ما راح أزعجك أكثر، بس أبيك تعرف إن مكانك محفوظ. لو حبيت ترجع، التطبيق هنا.',
    primaryAction: 'رجعت',
  },
  'failed-workout': {
    trigger: 'failed-workout',
    title: '',
    message: 'ما قدرت تكمل؟ معناها إنك حاولت. الحين تعرف حدّك الحقيقي، وهذي معلومة ذهب. بكرة نبدأ من تحت حدّك بشوي، ونبني.',
    primaryAction: 'تمام',
  },
  'frustrated': {
    trigger: 'frustrated',
    title: '',
    message: 'تحس إنك ما تقدمت؟ افتح شاشة إنجازاتك. الأسبوع اللي راح، نمت أحسن 3 ليالي، تحركت 5 مرات، وأنفاسك صارت أعمق. النتيجة مو دايم في المرايا، أحياناً في إحساسك.',
    primaryAction: 'افتح إنجازاتي',
  },
  'travel': {
    trigger: 'travel',
    title: 'مسافر؟ تمام.',
    message: 'عندك خياران. وضع خفيف يكمل معاك بتمارين 5 دقائق، أو وقفة كاملة ترجع منها لنفس النقطة.',
    primaryAction: 'وضع خفيف',
    secondaryAction: 'وقفة كاملة',
  },
  'sick': {
    trigger: 'sick',
    title: '',
    message: 'جسمك يحتاجك تسمعه الحين، مو تجبره. التمارين موقوفة، بس الكروت اليومية تكمل. أحياناً، الراحة هي التمرين.',
    primaryAction: 'تمام',
  },
  'emotional': {
    trigger: 'emotional',
    title: '',
    message: 'ما راح أسألك وش صار. الحين، خذ وقتك. التطبيق راح يصمت تماماً. لما تحس إنك جاهز، فقط ارجع. ما فيه عداد، ما فيه ضغط.',
    primaryAction: 'شكراً',
  },
  'doubt': {
    trigger: 'doubt',
    title: '',
    message: 'شاكك إن هذا ينفع؟ سؤال صحي، تستاهل جواب صريح. خلني أوريك وش تغيّر فيك، حتى لو ما لاحظت.',
    primaryAction: 'وريني',
  },
  'completed-no-sub': {
    trigger: 'completed-no-sub',
    title: 'مبروك',
    message: 'أكملت 12 أسبوع. هذا توّه أول الطريق، مو نهايته. كل اللي تعلمته فيه قيمة، لكن لو وقفت هنا، يضيع.',
    primaryAction: 'شوف عرض الخرّيج',
    secondaryAction: 'لاحقاً',
  },
  'about-to-cancel': {
    trigger: 'about-to-cancel',
    title: '',
    message: 'قبل ما تروح: إنت بدأت رحلة، ووصلت لمكان. لو حسيت إن هذا مو وقتك، محترمين قرارك. حسابك وتقدمك محفوظ، وراجع لك وقت ما تستعد. الباب مفتوح دايماً.',
    primaryAction: 'احتفظ بحسابي',
    secondaryAction: 'ألغ الاشتراك',
  },
};
