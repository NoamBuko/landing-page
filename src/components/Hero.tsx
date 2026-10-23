import Image from 'next/image';
import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';
import ScrollHint from './ScrollHint';

interface Props {
  translations: Translations;
}

// A browser-window frame around a client page screenshot.
function BrowserShot({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  return (
    <div className="rounded-xl overflow-hidden bg-white ring-1 ring-border shadow-2xl shadow-black/15">
      <div className="flex items-center gap-1.5 h-6 px-3 bg-[var(--color-border)]/60" dir="ltr">
        <span className="w-2 h-2 rounded-full bg-foreground/15" />
        <span className="w-2 h-2 rounded-full bg-foreground/15" />
        <span className="w-2 h-2 rounded-full bg-foreground/15" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

// A phone frame around a mobile screenshot of a client page.
function PhoneShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-[1.1rem] p-[3px] bg-foreground shadow-2xl shadow-black/25">
      <div className="relative aspect-[645/1200] rounded-[0.9rem] overflow-hidden bg-white">
        <Image src={src} alt={alt} fill sizes="30vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

export default function Hero({ translations: t }: Props) {
  const [left, center, right] = t.work.projects;

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-[5vw] py-24 sm:py-28 text-center overflow-hidden">
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

      {/* Client pages, fanned out */}
      <Reveal delay={300} className="w-full">
        {/* Mobile: browser in the middle, phones overlapping its sides */}
        <div className="sm:hidden relative w-full mt-14 pb-6" dir="ltr">
          <div className="mx-auto w-[82%]">
            <BrowserShot src={center.image} alt={`${center.client} — ${center.industry}`} eager />
          </div>
          <div className="absolute left-0 top-10 w-[27%] -rotate-6 z-10">
            <PhoneShot src="/work/sharar-mobile.jpg" alt={`${left.client} — ${left.industry}`} />
          </div>
          <div className="absolute right-0 top-10 w-[27%] rotate-6 z-10">
            <PhoneShot src="/work/mega-afar-mobile.jpg" alt={`${right.client} — ${right.industry}`} />
          </div>
        </div>

        {/* Desktop: three browser windows, fanned out */}
        <div className="hidden sm:block relative w-full max-w-5xl mx-auto mt-20" dir="ltr">
          <div className="absolute left-0 top-10 w-[46%] -rotate-3">
            <BrowserShot src={left.image} alt={`${left.client} — ${left.industry}`} />
          </div>
          <div className="absolute right-0 top-10 w-[46%] rotate-3">
            <BrowserShot src={right.image} alt={`${right.client} — ${right.industry}`} />
          </div>
          <div className="relative z-10 mx-auto w-[60%]">
            <BrowserShot src={center.image} alt={`${center.client} — ${center.industry}`} eager />
          </div>
        </div>
      </Reveal>

      <ScrollHint label={t.hero.scrollHint} />
    </section>
  );
}
