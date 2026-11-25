import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="text-mint">
    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Hero({ translations: t }: Props) {
  // The hero fills exactly one screen (min-h-svh) with its content centered. Below it, a tall
  // gradient fades the green softly into the page background as you scroll.
  return (
    <>
    <section className="relative isolate overflow-hidden min-h-svh flex flex-col items-center justify-center px-[5vw] pt-24 pb-12 sm:pt-[max(6rem,11vh)] sm:pb-[max(2.5rem,6vh)] text-center bg-hero-dark">
      {/* Background: a faint dot grid plus a soft green glow behind the headline (see globals.css) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-dots absolute inset-0" />
        <div className="hero-glow absolute left-1/2 top-[10%] h-[min(32rem,90vw)] w-[min(60rem,150vw)] -translate-x-1/2" />
      </div>

      <Reveal delay={40}>
        <p
          className="font-semibold tracking-[0.22em] uppercase mb-5 text-mint"
          style={{ fontSize: 'clamp(0.7rem, min(0.6rem + 0.4vw, 0.4rem + 0.9vh), 1rem)' }}
        >
          {t.hero.eyebrow}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h1
          className="font-bold leading-[1.04] tracking-tight text-white text-balance mb-[max(1rem,2.5vh)] max-w-[24ch]"
          style={{
            fontFamily: 'var(--font-display)',
            // As big as the screen allows: limited by both width and height, so the whole hero
            // (buttons included) still fits in one screen on short laptops and tall monitors alike.
            fontSize: 'clamp(2.25rem, min(1rem + 6vw, 0.5rem + 10vh), 7rem)',
          }}
        >
          {t.hero.h1Lead}
          <span className="text-mint">{t.hero.h1Accent}</span>
        </h1>
      </Reveal>

      <Reveal delay={140}>
        <p
          className="text-white/75 leading-relaxed text-balance max-w-[38ch] sm:max-w-[48ch] mx-auto mb-[max(1.75rem,4vh)]"
          style={{ fontSize: 'clamp(1.05rem, min(0.9rem + 0.9vw, 0.5rem + 2.3vh), 1.9rem)' }}
        >
          {t.hero.sub}
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 lg:px-9 lg:py-4 rounded-full text-sm lg:text-lg font-semibold bg-white text-hero-dark transition-opacity hover:opacity-90"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#work"
            className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 lg:px-9 lg:py-4 rounded-full text-sm lg:text-lg font-semibold text-white border border-white/30 hover:border-white transition-colors"
          >
            <span aria-hidden className="cta-comet" />
            {t.hero.cta2}
          </a>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-[max(1.25rem,3vh)] text-sm lg:text-base font-medium text-white/75">
          {t.hero.stats.map((stat) => (
            <li key={stat} className="flex items-center gap-1.5">
              <CheckIcon />
              {stat}
            </li>
          ))}
        </ul>
      </Reveal>
      {/* Scroll cue: desktop and tablet only, hidden on short windows where it could crowd the badges */}
      <a
        href="#services"
        aria-label={t.hero.scrollCue}
        className="hidden md:flex [@media(max-height:640px)]:hidden absolute bottom-[max(1.25rem,3vh)] left-1/2 -translate-x-1/2 items-center justify-center w-11 h-11 rounded-full border border-white/25 text-white/70 hover:text-white hover:border-white/60 transition-colors"
      >
        <svg className="scroll-cue" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
    <div aria-hidden className="hero-fade h-40 sm:h-56 lg:h-64 -mt-px" />
    </>
  );
}
