'use client';

import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { useApp } from '@/context/AppContext';
import { phases, journeyWeeks } from '@/content/journey';

export function JourneyScreen() {
  const { state } = useApp();
  const currentWeek = state.currentWeek;

  const getWeekStatus = (week: number): 'completed' | 'current' | 'future' => {
    if (week < currentWeek) return 'completed';
    if (week === currentWeek) return 'current';
    return 'future';
  };

  return (
    <PhoneFrame variant="light" showNav={true}>
      <ScreenContainer>
        {/* Header */}
        <p className="text-xs uppercase tracking-widest opacity-50 mb-2">
          رحلتك
        </p>
        <h1 className="text-3xl font-semibold mb-2">
          الـ 12 أسبوع
        </h1>
        <p className="text-sm opacity-60 mb-8 leading-relaxed">
          النجاح رحلة، مو نقطة وصول.
        </p>

        {/* Phases */}
        {phases.map((phase) => {
          const isAfterPhase = phase.id === 'after';
          const phaseWeeks = isAfterPhase
            ? []
            : journeyWeeks.filter(w => w.phase === phase.id);

          let phaseStatus: 'completed' | 'current' | 'future' | 'locked';
          if (isAfterPhase) {
            phaseStatus = 'locked';
          } else if (currentWeek > phase.weekRange[1]) {
            phaseStatus = 'completed';
          } else if (currentWeek >= phase.weekRange[0]) {
            phaseStatus = 'current';
          } else {
            phaseStatus = 'future';
          }

          return (
            <div key={phase.id} className="mb-8">
              {/* Phase header */}
              <div className="flex items-baseline gap-3 mb-3">
                <p className="text-xs opacity-40 uppercase tracking-wider">
                  {phase.weekRange[0]}-{phase.weekRange[1] === 13 ? 'ما بعد' : phase.weekRange[1]}
                </p>
                <h2 className={`text-xl font-semibold ${
                  phaseStatus === 'future' || phaseStatus === 'locked' ? 'opacity-50' : ''
                }`}>
                  {phase.name}
                </h2>
              </div>
              <p className={`text-xs leading-relaxed mb-4 ${
                phaseStatus === 'future' || phaseStatus === 'locked' ? 'opacity-40' : 'opacity-60'
              }`}>
                {phase.description}
              </p>

              {isAfterPhase ? (
                <div className="border border-line rounded-xl p-4 opacity-50">
                  <p className="text-sm leading-relaxed">
                    🔒 يفتح بعد إكمال الـ 12 أسبوع.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {phaseWeeks.map((week) => {
                    const status = getWeekStatus(week.week);
                    return (
                      <div
                        key={week.week}
                        className={`flex items-start gap-3 p-3 rounded-xl ${
                          status === 'current'
                            ? 'border-2 border-ink bg-ink/5'
                            : 'border border-line'
                        }`}
                      >
                        <div
                          className={`shrink-0 w-6 h-6 rounded-full mt-0.5 flex items-center justify-center text-xs ${
                            status === 'completed'
                              ? 'bg-ink text-paper'
                              : status === 'current'
                              ? 'border-2 border-ink'
                              : 'border border-line'
                          }`}
                        >
                          {status === 'completed' ? '✓' : ''}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2">
                            <p className={`text-xs opacity-50 ${
                              status === 'future' ? 'opacity-30' : ''
                            }`}>
                              الأسبوع {week.week}
                            </p>
                            {status === 'current' && (
                              <span className="text-xs font-semibold">
                                · أنت هنا
                              </span>
                            )}
                          </div>
                          <p className={`text-sm font-semibold mt-0.5 ${
                            status === 'future' ? 'opacity-50' : ''
                          }`}>
                            {week.title}
                          </p>
                          <p className={`text-xs leading-relaxed mt-1 ${
                            status === 'future' ? 'opacity-40' : 'opacity-60'
                          }`}>
                            {week.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <p className="text-sm opacity-50 mt-2 mb-4 leading-relaxed text-center">
          خطوة وحدة في اليوم، أهم من ألف خطوة في الخيال.
        </p>
      </ScreenContainer>
    </PhoneFrame>
  );
}
