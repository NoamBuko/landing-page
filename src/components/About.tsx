import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

export default function About({ translations: t }: Props) {
  const ab = t.about;

  return (
    <section id="about" className="py-24 px-[5vw]" style={{ backgroundColor: 'white' }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            {ab.label}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Heading */}
          <Reveal delay={60}>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {ab.h2Lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          {/* Content */}
          <Reveal delay={120}>
            <div className="space-y-4">
              <p className="text-muted leading-relaxed">{ab.p1}</p>
              <p className="text-muted leading-relaxed">{ab.p2}</p>
              <p className="text-muted leading-relaxed">{ab.p3}</p>

              <div className="pt-4">
                <span
                  className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ color: 'var(--color-accent)', backgroundColor: 'var(--color-accent-light)' }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                  {ab.badge}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
