import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';
import RotatingHeadline from './RotatingHeadline';

interface Props {
  translations: Translations;
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="text-mint">
    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Hero({ translations: t }: Props) {
  return (
    <section className="relative isolate overflow-hidden flex flex-col items-center px-[5vw] pt-32 sm:pt-40 pb-16 sm:pb-24 text-center bg-hero-dark rounded-b-[2rem] sm:rounded-b-[3rem]">
      {/* Background: a faint dot grid plus a soft green glow behind the headline (see globals.css) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-dots absolute inset-0" />
        <div className="hero-glow absolute left-1/2 top-[10%] h-[min(32rem,90vw)] w-[min(60rem,150vw)] -translate-x-1/2" />
      </div>

      <Reveal delay={40}>
        <p
          className="font-semibold tracking-[0.22em] uppercase mb-5 sm:mb-7 text-mint"
          style={{ fontSize: 'clamp(0.7rem, 0.64rem + 0.3vw, 0.85rem)' }}
        >
          {t.hero.eyebrow}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <RotatingHeadline lead={t.hero.h1Lead} phrases={[t.hero.h1Accent, ...t.hero.h1Rotating]} />
      </Reveal>

      <Reveal delay={140}>
        <p
          className="text-white/75 leading-relaxed max-w-[38ch] sm:max-w-2xl mx-auto mb-9 sm:mb-11"
          style={{ fontSize: 'clamp(1.05rem, 0.95rem + 0.6vw, 1.5rem)' }}
        >
          {t.hero.sub}
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-white text-hero-dark transition-opacity hover:opacity-90"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#work"
            className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white border border-white/30 hover:border-white transition-colors"
          >
            <span aria-hidden className="cta-comet" />
            {t.hero.cta2}
          </a>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-sm font-medium text-white/75">
          <li className="flex items-center gap-1.5">
            <CheckIcon />
            <s className="text-white/50">{t.hero.price.old}</s>
            <span className="font-semibold text-white">{t.hero.price.now}</span>
          </li>
          {t.hero.stats.map((stat) => (
            <li key={stat} className="flex items-center gap-1.5">
              <CheckIcon />
              {stat}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
