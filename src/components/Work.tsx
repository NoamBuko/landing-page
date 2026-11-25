import Image from 'next/image';
import { type Translations } from '@/lib/translations';
import LoopVideo from './LoopVideo';
import PhoneShot from './PhoneShot';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }}>
    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Work({ translations: t }: Props) {
  const w = t.work;
  const f = w.featured;

  return (
    <section id="work" className="pt-16 sm:pt-20 pb-20 sm:pb-24 px-[5vw]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            {w.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {w.h2}
          </h2>
        </Reveal>

        {/* Featured project: AirCor. Recording of the desktop home page, with the two service pages on phones. */}
        <Reveal delay={100}>
          <div className="rounded-3xl border border-border bg-white p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 lg:gap-12 items-center">
              <div>
                <h3
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {f.name}
                </h3>
                <p className="text-sm font-medium text-muted mt-1 mb-6">{f.tagline}</p>

                <ul className="space-y-3 mb-8">
                  {f.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-base text-foreground/85 leading-relaxed">
                      <CheckIcon />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={f.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {f.liveCta}
                </a>
                <p className="mt-4 text-sm text-muted">
                  {f.pagesLabel}{' '}
                  {f.pages.map((page, i) => (
                    <span key={page.url}>
                      {i > 0 && ' · '}
                      <a
                        href={page.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-current"
                      >
                        {page.label}
                      </a>
                    </span>
                  ))}
                </p>
              </div>

              {/* Visuals come first on mobile, beside the text on desktop */}
              <div className="order-first lg:order-none relative pb-[14%]" dir="ltr">
                <div className="w-[86%] rounded-xl overflow-hidden bg-hero-dark ring-1 ring-border shadow-2xl shadow-black/20">
                  <div className="flex items-center gap-1.5 h-6 px-3 bg-[var(--color-border)]/60">
                    <span className="w-2 h-2 rounded-full bg-foreground/15" />
                    <span className="w-2 h-2 rounded-full bg-foreground/15" />
                    <span className="w-2 h-2 rounded-full bg-foreground/15" />
                  </div>
                  <div className="relative aspect-[1600/836]">
                    <LoopVideo
                      src="/work/aircor/home.mp4"
                      poster="/work/aircor/home-poster.jpg"
                      label={f.videoLabel}
                    />
                  </div>
                </div>
                <div className="absolute right-[19%] bottom-[4%] w-[20%]">
                  <PhoneShot
                    src="/work/aircor/renovations-mobile.jpg"
                    alt={f.renovationsAlt}
                    sizes="(min-width: 1024px) 9vw, 20vw"
                  />
                </div>
                <div className="absolute right-0 bottom-0 w-[20%]">
                  <PhoneShot
                    src="/work/aircor/ac-mobile.jpg"
                    alt={f.acAlt}
                    sizes="(min-width: 1024px) 9vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bigger projects: Pri Hadar */}
        <Reveal delay={120}>
          <div className="mt-16 rounded-3xl bg-[var(--color-accent-light)]/50 border border-border p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,22rem)] gap-8 items-center">
              <div>
                <h3
                  className="text-2xl font-bold tracking-tight text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {w.more.h3}
                </h3>
                <p className="text-base text-muted leading-relaxed mb-6 max-w-md">{w.more.desc}</p>
                <a
                  href={w.more.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {w.more.liveCta}
                </a>
              </div>
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-border shadow-xl bg-white">
                <Image
                  src="/work/dashboard.png"
                  alt={w.more.shotAlt}
                  fill
                  sizes="(min-width: 768px) 22rem, 90vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
