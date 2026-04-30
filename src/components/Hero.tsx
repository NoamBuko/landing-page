import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

export default function Hero({ translations: t }: Props) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-28 md:pt-16 px-[5vw] text-center">
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

        <Reveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-bold tracking-tight text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.num}
                </div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
