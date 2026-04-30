import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

export default function CaseStudy({ translations: t }: Props) {
  const cs = t.caseStudy;

  return (
    <section id="case-study" className="py-24 px-[5vw]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            {cs.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {cs.h2}
          </h2>
          <span
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-10"
            style={{ color: 'var(--color-accent)', backgroundColor: 'var(--color-accent-light)' }}
          >
            {cs.badge}
          </span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: story */}
          <Reveal delay={80}>
            <div className="space-y-4">
              <p className="text-muted leading-relaxed">{cs.intro}</p>
              <p className="text-muted leading-relaxed">{cs.result}</p>
            </div>
          </Reveal>

          {/* Right: transformation chips */}
          <Reveal delay={160}>
            <div className="space-y-3">
              {cs.chips.map((chip) => (
                <div
                  key={chip.before}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-white"
                >
                  {/* Before */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                      <span className="text-xs text-muted line-through truncate">{chip.before}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0 text-border rtl:rotate-180"
                  >
                    <path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  {/* After */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: 'var(--color-accent-light)' }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3" stroke="#2d6a4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span
                        className="text-xs font-medium truncate"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        {chip.after}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
