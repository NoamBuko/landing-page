import Image from 'next/image';
import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

export default function Work({ translations: t }: Props) {
  const w = t.work;

  return (
    <section id="work" className="py-20 sm:py-24 px-[5vw]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: 'var(--color-accent)' }}
          >
            {w.label}
          </p>
        </Reveal>

        <div className="rounded-3xl bg-[var(--color-accent-light)]/50 border border-border p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Copy */}
            <div>
              <Reveal delay={60}>
                <div className="flex items-baseline gap-2 sm:gap-3 mb-2 flex-wrap">
                  <h3
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {w.client}
                  </h3>
                  <span className="text-sm text-muted">· {w.tagline}</span>
                </div>
                <h2
                  className="text-xl sm:text-2xl font-semibold leading-snug mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
                >
                  {w.h2}
                </h2>
                <p className="text-base text-muted leading-relaxed mb-6 max-w-md">{w.desc}</p>
              </Reveal>

              <Reveal delay={120}>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 max-w-md">
                  {w.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={180}>
                <div className="flex flex-col gap-2 mb-6 pt-5 border-t border-border/70">
                  {w.impact.map((it) => (
                    <div key={it.label} className="flex items-center gap-2.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                        className="shrink-0"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        <path
                          d="M3 8l3.5 3.5L13 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm font-medium text-foreground">{it.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={240}>
                <p className="text-xs text-muted mb-5">{w.bilingual}</p>
                <a
                  href={w.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {w.liveCta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Reveal>
            </div>

            {/* Visuals */}
            <Reveal delay={140}>
              <div className="relative">
                {/* Main: admin dashboard */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-border shadow-xl bg-white">
                  <Image
                    src="/work/dashboard.png"
                    alt={w.shotDashboardAlt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                {/* Secondary: calendar
                    mobile: smaller card stacked below, pushed to end
                    desktop: absolute, overlapping bottom-end corner */}
                <div className="mt-4 w-full relative aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-border shadow-2xl bg-white lg:mt-0 lg:absolute lg:bottom-[-14%] lg:end-[-6%] lg:w-[55%]">
                  <Image
                    src="/work/calendar.png"
                    alt={w.shotCalendarAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 55vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
