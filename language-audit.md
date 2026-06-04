# Xcel 40 — Arabic Language Audit Document

## How to use this document
Each row below has:
- **Location**: where the string appears
- **Type**: what kind of string it is
- **Current**: the current Arabic text
- **Verdict**: leave blank — to be filled by Que (✅ / 🟡 / 🔴)
- **Note**: leave blank — to be filled during review

---

## UI Components

### BottomNav.tsx
| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| BottomNav — Tab 1 | nav-label | اليوم |✅ | |
| BottomNav — Tab 2 | nav-label | الرحلة |✅ | |
| BottomNav — Tab 3 | nav-label | الجسم |✅ | |
| BottomNav — Tab 4 | nav-label | إنجازاتي |✅ | |
| BottomNav — Tab 5 | nav-label | حسابي |✅ | |

### Card.tsx
| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| (no Arabic strings — label passed as prop) | | | | |

### Button.tsx / PhoneFrame.tsx / ScreenContainer.tsx
| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| (no Arabic strings — all text passed as children) | | | | |

---

## Screens (in order of user flow)

### WelcomeScreen.tsx
*Strings pulled from onboarding.ts frame id=1*

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| WelcomeScreen — body | heading | عمرك 40 وفوق. وجسمك يحاول يقول لك شي من زمان. جاهز تسمعه؟ |✅ | |
| WelcomeScreen — button | button-label | جاهز |✅ | |

### AgeCheckScreen.tsx
*Strings pulled from onboarding.ts frame id=2*

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| AgeCheckScreen — title | heading | كم عمرك؟ |✅ | |
| AgeCheckScreen — body | body-text | عشان نتأكد إن هذا التطبيق مصمم لك تحديداً. |✅ | |
| AgeCheckScreen — input placeholder | placeholder | 44 |✅ | |
| AgeCheckScreen — button | button-label | كمّل |🟡 | |

### RejectedScreen.tsx

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| RejectedScreen — heading | heading | نعتذر |✅ | |
| RejectedScreen — body line 1 | body-text | هذا التطبيق مصمم خصيصاً لرجال بين 38 و 55 سنة. مو لأنك ما تقدر، بل لأن التخصص أهم من العموم. |🟡 | |
| RejectedScreen — body line 2 | body-text | لاحقاً، راح نطلق نسخ أخرى لفئات مختلفة. ابقَ معنا. |🟡 | |
| RejectedScreen — button | button-label | ابدأ من جديد |✅ | |

### AssessmentScreen.tsx
*Questions and options pulled from onboarding.ts*

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| AssessmentScreen — button (Q1–4) | button-label | التالي |✅ | |
| AssessmentScreen — button (Q5) | button-label | شوف نتيجتك |🟡 | |

### ResultScreen.tsx
*Strings pulled from onboarding.ts frame id=4*

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| ResultScreen — eyebrow | section-label | نتيجتك |🟡 | |
| ResultScreen — body | heading | إنت مو في وضع سيء. إنت في وضع متوقف. جسمك ينتظر إشارة بس. |🟡 | |
| ResultScreen — button | button-label | وش الإشارة؟ |🟡 | |

### TodayScreen.tsx

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| TodayScreen — day bar (workout day) | section-label | اليوم {n} — تمرين |✅ | |
| TodayScreen — day bar (rest day) | section-label | اليوم {n} — راحة |✅ | |
| TodayScreen — greeting | body-text | مرحباً {اسم} |✅ | |
| TodayScreen — no content fallback | body-text | المحتوى لهذا اليوم قادم |✅ | |
| TodayScreen — scene card label | section-label | المشهد |🟡 | |
| TodayScreen — dialog card label | section-label | العقل × الجسم |✅ | |
| TodayScreen — challenge eyebrow | section-label | تحدي اليوم |✅ | |
| TodayScreen — workout card label | section-label | تمرين اليوم |✅ | |
| TodayScreen — start workout button | button-label | ابدأ التمرين |✅ | |
| TodayScreen — complete day button | button-label | أنجزت اليوم |🟡 | |
| TodayScreen — complete day button (done) | button-label | أنجزت اليوم — كمل بكرة |🟡 | |

### WorkoutActiveScreen.tsx

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| WorkoutActiveScreen — eyebrow | section-label | اليوم {n} — تمرين |✅ | |
| WorkoutActiveScreen — workout section label | section-label | التمرين |✅ | |
| WorkoutActiveScreen — reassurance text | body-text | خذ وقتك. ما فيه استعجال. لما تخلص، اضغط الزر تحت. |✅ | |
| WorkoutActiveScreen — done button | button-label | خلصت |🟡 | |
| WorkoutActiveScreen — back button | button-label | رجوع |✅ | |

### WorkoutAfter1Screen.tsx (✓ خلصت)

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| WorkoutAfter1 — main message | heading | خلصت |🟡 | |
| WorkoutAfter1 — body | body-text | دقائق من عمرك استثمرتها في نفسك. هذا اللي يفرق. |🟡 | |
| WorkoutAfter1 — button | button-label | كمّل |🟡 | |

### WorkoutAfter2Screen.tsx (كيف تحس؟)

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| WorkoutAfter2 — heading | heading | كيف تحس بعد التمرين؟ |🟡 | |
| WorkoutAfter2 — subtitle | body-text | ثانية وحدة. هذا يساعدنا نعرف جسمك. |🟡 | |
| WorkoutAfter2 — feeling option 1 | button-label | منهك، كان صعب |🟡 | |
| WorkoutAfter2 — feeling option 2 | button-label | تعبت بس حلو |✅ | |
| WorkoutAfter2 — feeling option 3 | button-label | خفيف، أقدر أزيد |✅ | |
| WorkoutAfter2 — add note toggle | button-label | + أضف ملاحظة (اختياري) |✅ | |
| WorkoutAfter2 — note placeholder | placeholder | وش حسيت؟ وش تعلمت؟ كلمة أو جملة، براحتك... |🟡 | |
| WorkoutAfter2 — continue button | button-label | كمّل |🟡 | |
| WorkoutAfter2 — skip button | button-label | تخطّى |🟡 | |

### WorkoutAfter3Screen.tsx (تقدمك)

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| WorkoutAfter3 — eyebrow | section-label | تقدمك |🟡 | |
| WorkoutAfter3 — this week card label | section-label | هذا الأسبوع |✅ | |
| WorkoutAfter3 — this week unit | body-text | تمارين |✅ | |
| WorkoutAfter3 — all-time card label | section-label | من بداية الرحلة |✅ | |
| WorkoutAfter3 — all-time unit | body-text | جلسة تمرين |✅ | |
| WorkoutAfter3 — reflection text | body-text | كل جلسة بناء. شوي شوي، تتجمع. اللي خلصته اليوم، صار جزء من تاريخك. |🟡 | |
| WorkoutAfter3 — button | button-label | كمّل |🟡 | |

### WorkoutAfter4Screen.tsx (بكرة)

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| WorkoutAfter4 — eyebrow | section-label | بكرة |🟡 | |
| WorkoutAfter4 — tomorrow hint (workout) | body-text | بكرة تمرين جديد. ٢٠ دقيقة بس. |🟡 | |
| WorkoutAfter4 — tomorrow hint (rest) | body-text | بكرة يوم راحة. تحدي صغير ينتظرك. |🟡 | |
| WorkoutAfter4 — tomorrow hint (end) | body-text | بكرة محتوى جديد ينتظرك. |🟡 | |
| WorkoutAfter4 — closing line | body-text | شوفك الصبح. خذ راحتك الليلة، الجسم يبني وأنت نايم. |🟡 | |
| WorkoutAfter4 — button | button-label | أغلق |✅ | |

### JourneyScreen.tsx

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| JourneyScreen — eyebrow | section-label | رحلتك |✅ | |
| JourneyScreen — heading | heading | الـ 12 أسبوع |✅ | |
| JourneyScreen — subtitle | body-text | النجاح رحلة، مو نقطة وصول. |✅ | |
| JourneyScreen — "ما بعد" range label | section-label | ما بعد |🟡 | |
| JourneyScreen — current week indicator | body-text | · أنت هنا |✅ | |
| JourneyScreen — locked phase text | body-text | 🔒 يفتح بعد إكمال الـ 12 أسبوع. |✅ | |
| JourneyScreen — philosophy footer | philosophy | خطوة وحدة في اليوم، أهم من ألف خطوة في الخيال. |✅ | |

### BodyScreen.tsx

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| BodyScreen — eyebrow | section-label | متابعة |🟡 | |
| BodyScreen — heading | heading | جسمك |✅ | |
| BodyScreen — weight card label | section-label | الوزن |✅ | |
| BodyScreen — weight unit | body-text | كيلو |✅ | |
| BodyScreen — weight diff suffix | body-text | كيلو من البداية |✅ | |
| BodyScreen — measurement count suffix | body-text | قياس |✅ | |
| BodyScreen — empty weight state | body-text | ما سجلت وزن بعد. ابدأ بإدخال وزنك الحالي. |✅ | |
| BodyScreen — weight input placeholder | placeholder | مثلاً: 85.5 |✅ | |
| BodyScreen — save button | button-label | حفظ |✅ | |
| BodyScreen — cancel button | button-label | إلغاء |✅ | |
| BodyScreen — add weight button | button-label | + سجّل وزن جديد |✅ | |
| BodyScreen — photos card label | section-label | الصور |✅ | |
| BodyScreen — photos placeholder | placeholder | صور البداية والتقدم. قادم. |🟡 | |
| BodyScreen — measurements card label | section-label | القياسات |✅ | |
| BodyScreen — measurements placeholder | placeholder | الصدر، الخصر، الذراع. قادم. |✅ | |
| BodyScreen — philosophy footer | philosophy | الجسم يتغير ببطء، ودليله مو دائماً في الميزان. |✅ | |

### AchievementsScreen.tsx

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| AchievementsScreen — eyebrow | section-label | إنجازاتك |✅ | |
| AchievementsScreen — heading | heading | ما بنيته |🟡 | |
| AchievementsScreen — stats card label | section-label | أرقامك |🟡 | |
| AchievementsScreen — days unit | body-text | يوم |✅ | |
| AchievementsScreen — days description | body-text | أكملته من رحلتك |✅ | |
| AchievementsScreen — sessions unit | body-text | جلسة |✅ | |
| AchievementsScreen — sessions description | body-text | تمرين كاملة |✅ | |
| AchievementsScreen — streak unit | body-text | يوم متتالي |🟡 | |
| AchievementsScreen — streak description (active) | body-text | انتظام، خطوة خطوة |🟡 | |
| AchievementsScreen — streak description (zero) | body-text | ابدأ من اليوم | | |
| AchievementsScreen — challenges card label | section-label | التحديات الشهرية |✅ | |
| AchievementsScreen — challenges locked text | body-text | 🔒 تفتح بعد إكمال الـ 12 أسبوع. |✅ | |
| AchievementsScreen — challenges description | body-text | 6 تحديات سنوياً، كل تحدي 30 يوم. كل تحدي تكمله يقلل سعر اشتراكك السنوي القادم. |🟡 | |
| AchievementsScreen — discount card label | section-label | خصم التجديد |✅ | |
| AchievementsScreen — discount intro | body-text | يبدأ بعد إكمال الرحلة. |✅ | |
| AchievementsScreen — discount tier 1 | body-text | · خرّيج الرحلة: خصم 10% | ✅| |
| AchievementsScreen — discount tier 2 | body-text | · + تحدي واحد: خصم 20% |✅ | |
| AchievementsScreen — discount tier 3 | body-text | · + تحديين: خصم 30% |✅ | |
| AchievementsScreen — philosophy footer | philosophy | ما تبني يبقى. الباقي يضيع. |🟡 | |

### AccountScreen.tsx

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| AccountScreen — eyebrow | section-label | إعداداتك |✅ | |
| AccountScreen — heading | heading | حسابك |✅ | |
| AccountScreen — profile card label | section-label | ملفك |✅ | |
| AccountScreen — name field label | section-label | الاسم |✅ | |
| AccountScreen — age field label | section-label | العمر |✅ | |
| AccountScreen — age suffix | body-text | {n} سنة |✅ | |
| AccountScreen — journey since label | section-label | في الرحلة منذ |🟡 | |
| AccountScreen — journey since suffix | body-text | يوم |✅ | |
| AccountScreen — subscription card label | section-label | الاشتراك |✅ | |
| AccountScreen — subscription plan name | body-text | النسخة التجريبية |✅ | |
| AccountScreen — subscription intro | body-text | تستخدم النسخة التجريبية حالياً. بعد الإطلاق، تختار من 3 خيارات: |✅ | |
| AccountScreen — plan option 1 | body-text | · سنوي — 120 د.ك (10 د.ك شهرياً) |✅ | |
| AccountScreen — plan option 2 | body-text | · رحلة كاملة — 45 د.ك (مرة وحدة) |✅ | |
| AccountScreen — plan option 3 | body-text | · 3 دفعات — 20 د.ك × 3 |✅ | |
| AccountScreen — subscription footer | body-text | تفاصيل الاشتراك قادمة. |🟡 | |
| AccountScreen — time-off card label | section-label | وقت مستقطع |🟡 | |
| AccountScreen — time-off description | body-text | الحياة تزحم. لو احتجت توقّف الرحلة لأي سبب — سفر، مرض، ظرف — نحفظ تقدمك وترجع متى ما تبي. |🟡 | |
| AccountScreen — time-off button | button-label | أحتاج وقت مستقطع |🟡 | |
| AccountScreen — settings card label | section-label | الإعدادات |✅ | |
| AccountScreen — notifications row | body-text | التنبيهات |✅ | |
| AccountScreen — notifications value | body-text | قادم |✅ | |
| AccountScreen — reminder row | body-text | وقت التذكير اليومي |✅ | |
| AccountScreen — reminder value | body-text | قادم |✅ | |
| AccountScreen — language row | body-text | اللغة |✅ | |
| AccountScreen — language value | body-text | عربي |✅ | |
| AccountScreen — support card label | section-label | الدعم |✅ | |
| AccountScreen — contact label | body-text | تواصل معنا |✅ | |
| AccountScreen — contact email | body-text | support@xcel40.app |✅ | |
| AccountScreen — FAQ label | body-text | الأسئلة الشائعة |✅ | |
| AccountScreen — FAQ value | body-text | قادم |✅ | |
| AccountScreen — prototype card label | section-label | للتجربة فقط |✅ | |
| AccountScreen — prototype description | body-text | هذي النسخة تجريبية. تقدر تعيد كل البيانات وتبدأ من الصفر. |🟡 | |
| AccountScreen — reset link | button-label | مسح كل البيانات والبدء من جديد |✅ | |
| AccountScreen — confirm dialog | body-text | متأكد؟ كل تقدمك راح يمسح. |🟡 | |
| AccountScreen — version footer | body-text | النسخة 0.1 — مرحلة التجربة. |✅ | |

---

## Content Files

### personas.ts

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Khaled — name | body-text | خالد العنزي |✅ | |
| Khaled — occupation | body-text | مدير في وزارة |✅ | |
| Khaled — family | body-text | متزوج، ثلاث عيال |🟡 | |
| Khaled — area | body-text | الجابرية |✅ | |
| Yousef — name | body-text | يوسف الفهد |✅ | |
| Yousef — occupation | body-text | يدير عمله الخاص |✅ | |
| Yousef — family | body-text | أب لأربعة |🟡 | |
| Yousef — area | body-text | السالمية |✅ | |
| Abdullah — name | body-text | عبدالله الصباح |✅ | |
| Abdullah — occupation | body-text | أستاذ جامعي / مستشار |✅ | |
| Abdullah — family | body-text | متزوج، عياله كبار |🟡 | |
| Abdullah — area | body-text | السرة |✅ | |

### onboarding.ts — Frames

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Frame 1 (Welcome) — body | heading | عمرك 40 وفوق. وجسمك يحاول يقول لك شي من زمان. جاهز تسمعه؟ |✅ | |
| Frame 1 (Welcome) — button | button-label | جاهز |✅ | |
| Frame 2 (Age) — title | heading | كم عمرك؟ |✅ | |
| Frame 2 (Age) — body | body-text | عشان نتأكد إن هذا التطبيق مصمم لك تحديداً. |✅ | |
| Frame 2 (Age) — button | button-label | كمّل |🟡 | |
| Frame 4 (Result) — title | section-label | نتيجتك |🟡 | |
| Frame 4 (Result) — body | heading | إنت مو في وضع سيء. إنت في وضع متوقف. جسمك ينتظر إشارة بس. |🟡 | |
| Frame 4 (Result) — button | button-label | وش الإشارة؟ |🟡 | |
| Frame 6 (Post-journey) — body | heading | سويتها. أول يوم خلص. شوفك بكرة. |🟡 | |
| Frame 6 (Post-journey) — button | button-label | تمام |✅ | |

### onboarding.ts — Assessment Questions

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Q1 — question | body-text | تقدر تصعد 3 أدوار درج بدون ما تلهث؟ |🟡 | |
| Q1 — option A | button-label | أيه، عادي |🟡 | |
| Q1 — option B | button-label | أقدر بس ألهث شوي |🟡 | |
| Q1 — option C | button-label | صعب عليّ |🟡 | |
| Q2 — question | body-text | كم ساعة تنام فعلاً في الليل؟ |✅ | |
| Q2 — option A | button-label | 7 ساعات أو أكثر |✅ | |
| Q2 — option B | button-label | بين 5 و 7 ساعات |✅ | |
| Q2 — option C | button-label | أقل من 5 ساعات |✅ | |
| Q3 — question | body-text | آخر مرة حسيت بجسمك خفيف، متى؟ |✅ | |
| Q3 — option A | button-label | قريب، الأسبوع اللي راح |🟡 | |
| Q3 — option B | button-label | من أشهر |🟡 | |
| Q3 — option C | button-label | من سنين |✅ | |
| Q4 — question | body-text | لما تلعب مع عيالك أو تروح مشوار طويل، تلهث بسرعة؟ |🟡 | |
| Q4 — option A | button-label | لا، طبيعي |✅ | |
| Q4 — option B | button-label | شوي |🟡 | |
| Q4 — option C | button-label | نعم، أتعب مرة |🟡 | |
| Q5 — question | body-text | تحس بألم في الظهر أو الركب باستمرار؟ |✅ | |
| Q5 — option A | button-label | لا أبداً |✅ | |
| Q5 — option B | button-label | أحياناً |✅ | |
| Q5 — option C | button-label | دايماً |✅ | |

### journey.ts — Phases

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Phase 1 — name | section-label | البداية |✅ | |
| Phase 1 — description | body-text | الأسابيع الأربعة الأولى. تعرّف على جسمك من جديد. |✅ | |
| Phase 2 — name | section-label | الاستمرار |✅ | |
| Phase 2 — description | body-text | الأسابيع 5 إلى 8. تثبيت العادة. |✅ | |
| Phase 3 — name | section-label | بداية التغيير |✅ | |
| Phase 3 — description | body-text | الأسابيع 9 إلى 12. الجسم يستجيب. |✅ | |
| Phase 4 — name | section-label | ما بعد |🟡 | |
| Phase 4 — description | body-text | بعد إكمال الرحلة. تحديات شهرية وحياة جديدة. |🟡 | |

### journey.ts — Week Titles & Descriptions

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Week 1 — title | section-label | الاعتراف |🟡 | |
| Week 1 — description | body-text | من سنين تأجل البداية. اليوم. |🟡 | |
| Week 2 — title | section-label | لقاء الجسم |🟡 | |
| Week 2 — description | body-text | تعرّف على جسمك من جديد. |🟡 | |
| Week 3 — title | section-label | الحركة الأولى |🟡 | |
| Week 3 — description | body-text | تمرين كامل، 15 دقيقة. |✅ | |
| Week 4 — title | section-label | العادة تبدأ |🟡 | |
| Week 4 — description | body-text | الجسم بدأ يتذكر. |✅ | |
| Week 5 — title | section-label | الانتظام |✅ | |
| Week 5 — description | body-text | مو يومين في الأسبوع، طول الأسبوع. |✅ | |
| Week 6 — title | section-label | الإيقاع |✅ | |
| Week 6 — description | body-text | صار جزء من حياتك. |✅ | |
| Week 7 — title | section-label | التحدي الأول |✅ | |
| Week 7 — description | body-text | كسر التراكم. |🟡 | |
| Week 8 — title | section-label | النقطة الفاصلة |✅ | |
| Week 8 — description | body-text | نصف الرحلة. |✅ | |
| Week 9 — title | section-label | استجابة الجسم |✅ | |
| Week 9 — description | body-text | النتائج بدأت تظهر. |✅ | |
| Week 10 — title | section-label | الثقة |✅ | |
| Week 10 — description | body-text | تعرف إنك تقدر. |🟡 | |
| Week 11 — title | section-label | الذروة |✅ | |
| Week 11 — description | body-text | أعلى نقطة في الرحلة. |✅ | |
| Week 12 — title | section-label | البداية الجديدة |✅ | |
| Week 12 — description | body-text | مو نهاية، بداية. |🟡 | |

### week1.ts — Day 1 (الاعتراف) — Workout Day

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Day 1 — title | heading | الاعتراف |🟡 | |
| Day 1 / Khaled — scene | scene | من سنين وأنت تقول "بكرة أبدأ". بكرة صار اليوم. ما عاد فيه بكرة. عيالك يكبرون، وأنت تنتظر اللحظة المثالية اللي ما راح تجي. |🟡 | |
| Day 1 / Khaled — brain line 1 | dialog-line | اليوم متعب. الدوام كان طويل. خلنا بكرة. |🟡 | |
| Day 1 / Khaled — body line 1 | dialog-line | عشر دقائق فقط. ما تخسر شي. |✅ | |
| Day 1 / Khaled — brain line 2 | dialog-line | وين راح يفرق عشر دقائق؟ |🟡 | |
| Day 1 / Khaled — body line 2 | dialog-line | راح يفرق إنك بدأت. مو في النتيجة، في القرار. |✅ | |
| Day 1 / Khaled — challenge | challenge | اكتب على ورقة: "اليوم بدأت." علقها على المرايا. |🟡 | |
| Day 1 / Khaled — workout | workout-text | المشي في المكان — 10 دقائق فقط. في غرفتك، في الصالة، أمام التلفزيون. بدون معدات. |🟡 | |
| Day 1 / Yousef — scene | scene | طول اليوم تتنقل، تركض على شغلك، تحل مشاكل، تكلم ناس. وفي آخر اليوم، تكتشف إنك ما خصصت دقيقة وحدة لنفسك. لا دقيقة وحدة. |🟡 | |
| Day 1 / Yousef — brain line 1 | dialog-line | عندي شغل. عندي مسؤوليات. لاحقاً. |🟡 | |
| Day 1 / Yousef — body line 1 | dialog-line | 10 دقائق. أنت تضيع 10 دقائق في الواتساب كل ساعة. |🟡 | |
| Day 1 / Yousef — brain line 2 | dialog-line | لكن أنا متعب. |🟡 | |
| Day 1 / Yousef — body line 2 | dialog-line | التعب هذا مو من الجسم. هذا تعب نفسي. الحركة تفكه. |🟡 | |
| Day 1 / Yousef — challenge | challenge | حدد ساعة وحدة في اليوم تكون "ساعتك". اكتبها في تقويمك. |🟡 | |
| Day 1 / Yousef — workout | workout-text | المشي في المكان — 10 دقائق. تقدر تقسمها: 5 دقائق صباح + 5 دقائق ليل. المرونة لك. |🟡 | |
| Day 1 / Abdullah — scene | scene | قرأت عن أهمية الرياضة. شفت الأبحاث. ناقشت الموضوع مع زملاء. ومع هذا، جسمك لا زال على نفس الكرسي، ولا زلت تأجل البداية لأسبوع جاي يمكن. |🟡 | |
| Day 1 / Abdullah — brain line 1 | dialog-line | عمري 51. الوقت فات. |🟡 | |
| Day 1 / Abdullah — body line 1 | dialog-line | بحث في جامعة هارفارد على رجال بعمر 70 بدوا رياضة، ورجعوا 30٪ من كتلتهم العضلية في 6 أشهر. |🟡 | |
| Day 1 / Abdullah — brain line 2 | dialog-line | هذي حالات استثنائية. |✅ | |
| Day 1 / Abdullah — body line 2 | dialog-line | لا، هذي البيولوجيا. جسمك يستجيب، الفرق إنك ما طلبت منه شي. |🟡 | |
| Day 1 / Abdullah — challenge | challenge | اقرأ بحث واحد عن "Sarcopenia" — ضمور العضلات بعد الـ40. افهم العدو. |🟡 | |
| Day 1 / Abdullah — workout | workout-text | المشي في المكان — 10 دقائق. تأمل كل خطوة. لاحظ التنفس، الإيقاع، الإحساس. ابدأ بوعي. |🟡 | |

### week1.ts — Day 2 (لقاء الجسم) — Rest Day

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Day 2 — title | heading | لقاء الجسم |🟡 | |
| Day 2 / Khaled — scene | scene | أمس مشيت 10 دقائق. ربما تحس بشي بسيط في رجولك اليوم. هذا مو ألم، هذا جسمك يقول لك "أها، رجعت تتذكرني؟". |🟡 | |
| Day 2 / Khaled — brain line 1 | dialog-line | تعبت من عشر دقائق؟ يا للعار. |🟡 | |
| Day 2 / Khaled — body line 1 | dialog-line | ما تعبت. أنا تكلمت. أعطيك إشارة إن في عضلات نسيتها. |🟡 | |
| Day 2 / Khaled — brain line 2 | dialog-line | يعني فيه أمل؟ |✅ | |
| Day 2 / Khaled — body line 2 | dialog-line | فيه أكثر مما تتوقع. بس الأمل ما يجي بالحماس، يجي بالاستمرار. |🟡 | |
| Day 2 / Khaled — challenge | challenge | قبل النوم، حط يدك على بطنك وعد 10 أنفاس عميقة. |🟡 | |
| Day 2 / Yousef — scene | scene | في كل مكان تروحه اليوم، انتبه: كم مرة قلت لنفسك "ما عندي وقت"؟ راح تكتشف إنك تقولها لأشياء ثانوية، بينما الأشياء المهمة (زي صحتك) تنتظر "وقت فاضي" اللي ما يجي. |🟡 | |
| Day 2 / Yousef — brain line 1 | dialog-line | ما عندي وقت، صدقني. |🟡 | |
| Day 2 / Yousef — body line 1 | dialog-line | تكلمت في التلفون ساعة أمس مع صاحبك. الوقت موجود، الأولوية مفقودة. |🟡 | |
| Day 2 / Yousef — brain line 2 | dialog-line | لكن هذا ترفيه أحتاجه. |🟡 | |
| Day 2 / Yousef — body line 2 | dialog-line | اللي تحتاجه، أنا. لما أتعب، كل شي ينهار. |🟡 | |
| Day 2 / Yousef — challenge | challenge | شيل تطبيق وحد ضائع وقتك من تلفونك. فقط واحد. اليوم. |🟡 | |
| Day 2 / Abdullah — scene | scene | في عمرك، الجسم ما يطلب نفس اللي كان يطلبه قبل 20 سنة. هو يطلب لطف، انتظام، إصغاء. اليوم، بدل ما تتعبه، اسمعه. |🟡 | |
| Day 2 / Abdullah — brain line 1 | dialog-line | الرياضة المنتظمة تحتاج طاقة ما عندي. |🟡 | |
| Day 2 / Abdullah — body line 1 | dialog-line | الرياضة هي اللي تعطيك الطاقة. مو العكس. هذا "إيقاع دائري" يعرفه الأطباء. |🟡 | |
| Day 2 / Abdullah — brain line 2 | dialog-line | مثل ماذا؟ |✅ | |
| Day 2 / Abdullah — body line 2 | dialog-line | ابحث "Exercise Energy Paradox". راح تجد علم نظيف. |🟡 | |
| Day 2 / Abdullah — challenge | challenge | اقرأ مقال "Exercise Energy Paradox" من Harvard Health. |✅ | |

### week1.ts — Day 3 (تمرين كامل أول) — Workout Day

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Day 3 — title | heading | تمرين كامل أول | | |
| Day 3 / Khaled — scene | scene | عيالك يلعبون كرة في الديوانية، وأنت تتفرج لأن تعبت بسرعة. اليوم تبدأ تعمل اللي يخليك تلعب معاهم في الأسبوع الجاي. | | |
| Day 3 / Khaled — brain line 1 | dialog-line | ما أقدر. ما عمري سويت تمارين بهذا الشكل. | | |
| Day 3 / Khaled — body line 1 | dialog-line | ولا أنا. بس راح نتعلم سوا. | | |
| Day 3 / Khaled — challenge | challenge | سو التمرين قبل ما تفتح التلفون بعد الدوام. | | |
| Day 3 / Khaled — workout | workout-text | 3 جولات × (10 ثانية مشي سريع في المكان + 20 ثانية وقوف وتنفس). ثم 5 جلوس على الكرسي والوقوف. | | |
| Day 3 / Yousef — scene | scene | صحوت اليوم وصدرك يقفل. التعب اللي تحس فيه دائماً مو من الشغل، من جسم ما يتحرك. اليوم، قبل ما تطلع من البيت، عشر دقائق فقط. | | |
| Day 3 / Yousef — brain line 1 | dialog-line | ما عندي وقت الصباح، عندي اجتماع. | | |
| Day 3 / Yousef — body line 1 | dialog-line | تأخر 10 دقائق على الاجتماع. صحتك أهم من الإلتزام بالوقت بدقيقة. | | |
| Day 3 / Yousef — challenge | challenge | سو التمرين في أي وقت، بس قبل الساعة 9 الليل. | | |
| Day 3 / Yousef — workout | workout-text | 3 جولات × (10 ثانية مشي سريع + 20 ثانية تنفس). 5 Squats بكرسي. تقدر تسويه أي مكان. | | |
| Day 3 / Abdullah — scene | scene | قرأت عشرات الكتب عن الصحة. الحين لازم تتحرك. لأن الفرق بين اللي يعرف واللي يتغيّر = الفعل. والفعل اليوم 10 دقائق فقط. | | |
| Day 3 / Abdullah — brain line 1 | dialog-line | هذا التمرين بسيط جداً، ما راح يفرق شي. | | |
| Day 3 / Abdullah — body line 1 | dialog-line | "Hormesis" — الضغط البسيط المتكرر يبني. ما تحتاج تمرين قوي، تحتاج تمرين منتظم. | | |
| Day 3 / Abdullah — challenge | challenge | قبل التمرين، اكتب 3 أسطر: "ليش أنا هنا، اليوم". | | |
| Day 3 / Abdullah — workout | workout-text | 3 جولات × (10 ثانية مشي سريع + 20 ثانية تنفس عميق). 5 Squats مع كرسي. ركز على الشكل أكثر من السرعة. | | |

### week1.ts — Day 4 (الحوار الداخلي) — Rest Day

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Day 4 — title | heading | الحوار الداخلي | | |
| Day 4 / Khaled — scene | scene | في رأسك صوتين: واحد يقول "أنت كبير، اقعد"، وثاني يقول "تقدر، جرّب". الصوت الثاني أضعف، لكنه أصدق. الأسبوع الأول مهمته إنك تسمعه أكثر. | | |
| Day 4 / Khaled — brain line 1 | dialog-line | عمر 44، الشغل ضاغط، عيال، التزامات. كل العذر معاي. | | |
| Day 4 / Khaled — body line 1 | dialog-line | كل اللي قلته صح. ومع هذا، 10 دقائق موجودة. | | |
| Day 4 / Khaled — challenge | challenge | لاحظ كم مرة تقول "ما أقدر" اليوم. عدّها فقط، لا تحكم. | | |
| Day 4 / Yousef — scene | scene | طول حياتك تشتغل، تكافح، تنجز. لكن أعظم استثمار ما هو في البزنس، هو في جسمك. لأن لو الجسم وقع، كل البزنس يقع. | | |
| Day 4 / Yousef — brain line 1 | dialog-line | لما أوصل لمستوى مالي معين، راح أهتم بصحتي. | | |
| Day 4 / Yousef — body line 1 | dialog-line | المستوى المعين هذا ما يجي. كل مرة توصل، تحرك السقف. ابدأ الحين. | | |
| Day 4 / Yousef — challenge | challenge | في اجتماعاتك اليوم، قف بدل ما تجلس لمدة 5 دقائق على الأقل. | | |
| Day 4 / Abdullah — scene | scene | قرأت Marcus Aurelius و Seneca. تعرف فلسفة الستويكية. لكن الفلسفة اليوم ما هي في الكتب، هي في إنك تنفذ اللي تعرفه. | | |
| Day 4 / Abdullah — brain line 1 | dialog-line | المعرفة كافية، التغيير يجي مع الفهم العميق. | | |
| Day 4 / Abdullah — body line 1 | dialog-line | ولا واحد فهم نفسه من قراءة عنها. الفهم العميق يجي من الفعل. | | |
| Day 4 / Abdullah — challenge | challenge | اكتب جملة وحدة: ما هي الحكمة اللي تعرفها لكن ما تنفذها؟ | | |

### week1.ts — Day 5 (التمرين الثاني) — Workout Day

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Day 5 — title | heading | التمرين الثاني | | |
| Day 5 / Khaled — scene | scene | اليوم الثاني تمرين هذا الأسبوع. لو سويته، تكون أكملت 67% من تمارين الأسبوع. هذا أكثر من معظم الناس اللي يحكون عن الرياضة ولا يبدؤونها. | | |
| Day 5 / Khaled — brain line 1 | dialog-line | قعدت يومين بدون تمرين، الموضوع يصير صعب. | | |
| Day 5 / Khaled — body line 1 | dialog-line | الراحة جزء من البرنامج. مو فشل، تصميم. | | |
| Day 5 / Khaled — challenge | challenge | سو التمرين قبل أكل العشا. | | |
| Day 5 / Khaled — workout | workout-text | نفس تمرين اليوم 3، بإضافة: 10 دقائق مشي حقيقي. المجموع 10 دقائق فعلية. | | |
| Day 5 / Yousef — scene | scene | يوم ضاغط، اجتماعات، اتصالات، أزمات صغيرة. وفي وسط كل هذا، التمرين موعد ثابت. ما يلغى، ما يأجل. | | |
| Day 5 / Yousef — brain line 1 | dialog-line | اليوم استثناء. الأمور خرجت عن السيطرة. | | |
| Day 5 / Yousef — body line 1 | dialog-line | الأمور دائماً تخرج عن السيطرة. لو انتظرت اليوم الهادي، ما راح تتمرن أبداً. | | |
| Day 5 / Yousef — challenge | challenge | سو التمرين، ولو اضطريت تقسّمه ثلاث مرات على اليوم. | | |
| Day 5 / Yousef — workout | workout-text | نفس تمرين اليوم 3 + 10 دقائق مشي. تقدر تقسمها كيف ما تبي. | | |
| Day 5 / Abdullah — scene | scene | بدأت تلاحظ التفاصيل: نومك أحسن شوي، صبرك أطول شوي. هذا في 4 أيام فقط. تخيل الفرق بعد 4 شهور. لكن لا تتخيل، فقط استمر. | | |
| Day 5 / Abdullah — brain line 1 | dialog-line | التغيير سريع جداً، يمكن ما هو حقيقي. | | |
| Day 5 / Abdullah — body line 1 | dialog-line | "Acute Effects" — تأثيرات فورية للحركة على المزاج والنوم. علم معروف من الستينات. | | |
| Day 5 / Abdullah — challenge | challenge | اكتب 3 أسطر: ما اللي تغير عندك من بداية الأسبوع؟ | | |
| Day 5 / Abdullah — workout | workout-text | نفس تمرين اليوم 3 + 10 دقائق مشي تأملي. ركز على الحس، مو على العدد. | | |

### week1.ts — Day 6 (مواجهة الانقطاع) — Rest Day

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Day 6 — title | heading | مواجهة الانقطاع | | |
| Day 6 / Khaled — scene | scene | يوم خميس. ديوانية الليلة. كل العزائم اللي تحب. هذا اختبار حقيقي: هل أنت في رحلة، أم في تجربة؟ | | |
| Day 6 / Khaled — brain line 1 | dialog-line | مرة وحدة ما تضر. اليوم خاص. | | |
| Day 6 / Khaled — body line 1 | dialog-line | مرة وحدة تتحول لكل خميس بسرعة. القرار الحين، مو وقت العزيمة. | | |
| Day 6 / Khaled — challenge | challenge | في الديوانية الليلة، اشرب ماء بعد كل كاسة شاي أو قهوة. | | |
| Day 6 / Yousef — scene | scene | عطلة الأسبوع، شغل بزنس، عزائم، أطفال يبغونك. كل أسباب التوقف موجودة. لكن أسبوعك الأول لا يحسب كأسبوع لو سقطت في عطلته. | | |
| Day 6 / Yousef — brain line 1 | dialog-line | العطلة للراحة. أبدأ الجد يوم الأحد. | | |
| Day 6 / Yousef — body line 1 | dialog-line | الأحد ما يأتي. كل أحد فيه عذر جديد. اليوم، حتى لو 5 دقائق. | | |
| Day 6 / Yousef — challenge | challenge | حتى لو اليوم متعب، أمشي 5 دقائق بالليل. | | |
| Day 6 / Abdullah — scene | scene | اليوم السادس، والعقل بدأ يبحث عن أسباب للتوقف. هذي ظاهرة معروفة في علم السلوك. مهمتك مو إنك ما تفكر فيها، مهمتك إنك تعرفها وتمشي. | | |
| Day 6 / Abdullah — brain line 1 | dialog-line | لاحظ، بدأت تجد أعذار. هذا طبيعي؟ | | |
| Day 6 / Abdullah — body line 1 | dialog-line | نعم. اسمها "Quitter's Day". تجي بين اليوم 5 و 10. اللي يعديها يكمل، اللي يصدقها يقف. | | |
| Day 6 / Abdullah — challenge | challenge | اكتب 3 أعذار جاءت لك اليوم. ثم اكتب رد لكل عذر. | | |

### week1.ts — Day 7 (أكملت أول أسبوع) — Workout Day

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| Day 7 — title | heading | أكملت أول أسبوع | | |
| Day 7 / Khaled — scene | scene | سبعة أيام. ما هو رقم كبير، لكنه أكبر من معظم محاولاتك السابقة. الفرق إنك ما حاولت تغيّر حياتك. حاولت تتحرك 10 دقائق. | | |
| Day 7 / Khaled — brain line 1 | dialog-line | أوكي، بس هذا أول أسبوع. الباقي صعب. | | |
| Day 7 / Khaled — body line 1 | dialog-line | ولا الباقي صعب، الصعب اللي خلصته. القرار الأول هو القرار الأصعب. | | |
| Day 7 / Khaled — challenge | challenge | قف أمام المرايا. قل: "أكملت أول أسبوع." مهما كان شعورك. | | |
| Day 7 / Khaled — workout | workout-text | مشي خفيف 10 دقائق + 5 دقائق تنفس عميق. اليوم احتفال، مو إنجاز. | | |
| Day 7 / Yousef — scene | scene | في حياتك المتقلبة، أكملت أسبوع كامل من شي ثابت. هذا الإنجاز ما هو في التمارين، هو في إثبات إنك تقدر تثبّت شي في وسط الفوضى. | | |
| Day 7 / Yousef — brain line 1 | dialog-line | زين، الحين قعدة وأرتاح. | | |
| Day 7 / Yousef — body line 1 | dialog-line | الراحة جزء من البرنامج، بس الراحة الذكية. لا تكسر الإيقاع، طوّره. | | |
| Day 7 / Yousef — challenge | challenge | اكتب على الواتساب لشخص واحد تثق فيه: "بديت رحلة 12 أسبوع." | | |
| Day 7 / Yousef — workout | workout-text | مشي خفيف 10 دقائق في أي مكان مريح لك. احتفل بالاستمرار. | | |
| Day 7 / Abdullah — scene | scene | في عمرك، أسبوع منتظم يساوي شهرين متقطعين عند الشباب. أنت ما عاد تجرب، أنت تبني. والبناء يبدأ بطوبة وحدة. | | |
| Day 7 / Abdullah — brain line 1 | dialog-line | هذا توّه أول 8% من الرحلة. الطريق طويل. | | |
| Day 7 / Abdullah — body line 1 | dialog-line | صح، 8%. لكن أول 8% هي الأصعب نفسياً. الباقي 92% أسهل لأنك ما عاد تبدأ، أنت تستمر. | | |
| Day 7 / Abdullah — challenge | challenge | اكتب فقرة قصيرة: ماذا تعلمت عن نفسي هذا الأسبوع؟ | | |
| Day 7 / Abdullah — workout | workout-text | 10 دقائق مشي تأملي. تأمل إنجازك بدون كبرياء، بدون تواضع زائد. واقع فقط. | | |

### reactions.ts — Negative Case Responses

| Location | Type | Current | Verdict | Note |
|---|---|---|---|---|
| missed-one-day — message | body-text | يوم وحد ما يكسر شي. الرحلة مو سلسلة تنكسر، طريق ترجع له وقت ما تبي. كرت اليوم ينتظرك. | | |
| missed-one-day — primary action | button-label | افتح كرت اليوم | | |
| missed-few-days — message | body-text | صار لك كم يوم. عادي، الحياة تزحم. السؤال مو ليش وقفت، السؤال تبي ترجع؟ لو إيه، خلنا نبدأ من وين وقفت، مو من الصفر. | | |
| missed-few-days — primary action | button-label | أكمل من وين وقفت | | |
| missed-few-days — secondary action | button-label | ابدأ الأسبوع من جديد | | |
| missed-week — message | body-text | صار لك أسبوع. ما راح أزعجك أكثر، بس أبيك تعرف إن مكانك محفوظ. لو حبيت ترجع، التطبيق هنا. | | |
| missed-week — primary action | button-label | رجعت | | |
| failed-workout — message | body-text | ما قدرت تكمل؟ معناها إنك حاولت. الحين تعرف حدّك الحقيقي، وهذي معلومة ذهب. بكرة نبدأ من تحت حدّك بشوي، ونبني. | | |
| failed-workout — primary action | button-label | تمام | | |
| frustrated — message | body-text | تحس إنك ما تقدمت؟ افتح شاشة إنجازاتك. الأسبوع اللي راح، نمت أحسن 3 ليالي، تحركت 5 مرات، وأنفاسك صارت أعمق. النتيجة مو دايم في المرايا، أحياناً في إحساسك. | | |
| frustrated — primary action | button-label | افتح إنجازاتي | | |
| travel — title | heading | مسافر؟ تمام. | | |
| travel — message | body-text | عندك خياران. وضع خفيف يكمل معاك بتمارين 5 دقائق، أو وقفة كاملة ترجع منها لنفس النقطة. | | |
| travel — primary action | button-label | وضع خفيف | | |
| travel — secondary action | button-label | وقفة كاملة | | |
| sick — message | body-text | جسمك يحتاجك تسمعه الحين، مو تجبره. التمارين موقوفة، بس الكروت اليومية تكمل. أحياناً، الراحة هي التمرين. | | |
| sick — primary action | button-label | تمام | | |
| emotional — message | body-text | ما راح أسألك وش صار. الحين، خذ وقتك. التطبيق راح يصمت تماماً. لما تحس إنك جاهز، فقط ارجع. ما فيه عداد، ما فيه ضغط. | | |
| emotional — primary action | button-label | شكراً | | |
| doubt — message | body-text | شاكك إن هذا ينفع؟ سؤال صحي، تستاهل جواب صريح. خلني أوريك وش تغيّر فيك، حتى لو ما لاحظت. | | |
| doubt — primary action | button-label | وريني | | |
| completed-no-sub — title | heading | مبروك | | |
| completed-no-sub — message | body-text | أكملت 12 أسبوع. هذا توّه أول الطريق، مو نهايته. كل اللي تعلمته فيه قيمة، لكن لو وقفت هنا، يضيع. | | |
| completed-no-sub — primary action | button-label | شوف عرض الخرّيج | | |
| completed-no-sub — secondary action | button-label | لاحقاً | | |
| about-to-cancel — message | body-text | قبل ما تروح: إنت بدأت رحلة، ووصلت لمكان. لو حسيت إن هذا مو وقتك، محترمين قرارك. حسابك وتقدمك محفوظ، وراجع لك وقت ما تستعد. الباب مفتوح دايماً. | | |
| about-to-cancel — primary action | button-label | احتفظ بحسابي | | |
| about-to-cancel — secondary action | button-label | ألغ الاشتراك | | |

---

## String Count Summary

**Total Arabic strings: ~270**

### By type
| Type | Count |
|---|---|
| button-label | 52 |
| body-text | 88 |
| heading | 18 |
| section-label | 42 |
| dialog-line | 54 |
| scene | 21 |
| challenge | 21 |
| workout-text | 12 |
| placeholder | 5 |
| philosophy | 3 |
| nav-label | 5 |
| **Total** | **~271** |

### By file
| File | Count |
|---|---|
| week1.ts | ~126 (7 days × 3 personas × scenes/dialogs/challenges/workouts) |
| reactions.ts | 33 |
| onboarding.ts | 16 |
| journey.ts | 28 |
| components/screens/*.tsx (UI strings) | ~50 |
| components/ui/BottomNav.tsx | 5 |
| content/personas.ts | 12 |
