import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

export default function Hero({ translations: t }: Props) {
  return (
    <section className="relative flex flex-col items-center px-[5vw] pt-32 sm:pt-40 pb-4 sm:pb-8 text-center">
      <Reveal delay={40}>
        <p
          className="font-semibold tracking-[0.22em] uppercase mb-5 sm:mb-7"
          style={{
            color: 'var(--color-accent)',
            fontSize: 'clamp(0.7rem, 0.64rem + 0.3vw, 0.85rem)',
          }}
        >
          {t.hero.eyebrow}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h1
          className="font-bold leading-[1.06] tracking-tight text-foreground mb-5 sm:mb-7 max-w-[18ch]"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.1rem, 1rem + 5vw, 5rem)',
          }}
        >
          {t.hero.h1Lead}
          <span style={{ color: 'var(--color-accent)' }}>{t.hero.h1Accent}</span>
        </h1>
      </Reveal>

      <Reveal delay={140}>
        <p
          className="text-muted leading-relaxed max-w-[38ch] sm:max-w-2xl mx-auto mb-9 sm:mb-11"
          style={{ fontSize: 'clamp(1.05rem, 0.95rem + 0.6vw, 1.5rem)' }}
        >
          {t.hero.sub}
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            {t.hero.cta1}
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-foreground border border-border hover:border-accent transition-colors"
          >
            {t.hero.cta2}
          </a>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-sm font-medium text-muted">
          {t.hero.stats.map((stat) => (
            <li key={stat} className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden style={{ color: 'var(--color-accent)' }}>
                <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {stat}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
