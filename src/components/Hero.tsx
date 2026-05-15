import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

export default function Hero({ translations: t }: Props) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-[5vw] text-center">
      <div className="max-w-3xl w-full mx-auto">
        <Reveal delay={80}>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.hero.h1.map((line) =>
              line === t.hero.accentLine ? (
                <span key={line} className="block" style={{ color: 'var(--color-accent)' }}>
                  {line}
                </span>
              ) : (
                <span key={line} className="block">
                  {line}
                </span>
              ),
            )}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-lg text-muted leading-relaxed max-w-xl mx-auto mb-10">{t.hero.sub}</p>
        </Reveal>

        <Reveal delay={220}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              {t.hero.cta1}
            </a>
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-foreground border border-border hover:border-accent transition-colors"
            >
              {t.hero.cta2}
            </a>
          </div>
        </Reveal>
      </div>

      <a
        href="#process"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-foreground transition-colors animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
