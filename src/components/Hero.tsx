import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';
import HeroVisuals from './HeroVisuals';
import ScrollHint from './ScrollHint';

interface Props {
  translations: Translations;
}

export default function Hero({ translations: t }: Props) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-20 sm:pt-24 pb-10 px-[5vw] text-center overflow-hidden">
      <Reveal delay={40}>
        <p
          className="text-[0.7rem] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-4 sm:mb-5"
          style={{ color: 'var(--color-accent)' }}
        >
          {t.hero.eyebrow}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-foreground mb-4 max-w-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t.hero.h1Lead}
          <span style={{ color: 'var(--color-accent)' }}>{t.hero.h1Accent}</span>
        </h1>
      </Reveal>

      <Reveal delay={140}>
        <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
          {t.hero.sub}
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-10 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            {t.hero.cta1}
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-foreground border border-border hover:border-accent transition-colors"
          >
            {t.hero.cta2}
          </a>
        </div>
      </Reveal>

      <Reveal delay={260} className="w-full">
        <HeroVisuals translations={t} />
      </Reveal>

      <ScrollHint label={t.hero.scrollHint} />
    </section>
  );
}
