import Image from 'next/image';
import { type Translations } from '@/lib/translations';
import PhoneShot from './PhoneShot';
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

        {/* Landing pages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {w.projects.map((p, i) => (
            <Reveal key={p.image} delay={i * 100}>
              {/* Desktop screenshot with the phone version overlapping its corner */}
              <div className="relative pb-8 mb-4">
                <div className="relative w-[85%] aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-border shadow-lg bg-white">
                  <Image
                    src={p.image}
                    alt={`${p.client} — ${p.industry}`}
                    fill
                    sizes="(min-width: 768px) 26vw, 80vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute end-0 bottom-0 w-[24%]">
                  <PhoneShot
                    src={p.mobileImage}
                    alt={`${p.client} — ${p.industry} (mobile)`}
                    sizes="(min-width: 768px) 8vw, 25vw"
                  />
                </div>
              </div>
              <div className="flex items-baseline gap-2 flex-wrap mb-1">
                <h3
                  className="text-lg font-semibold text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {p.client}
                </h3>
                <span className="text-sm text-muted">· {p.industry}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{p.line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="text-sm text-muted text-center mt-10">{w.selfNote}</p>
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
