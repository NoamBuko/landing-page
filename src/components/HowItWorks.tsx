import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

export default function HowItWorks({ translations: t }: Props) {
  return (
    <section id="work" className="py-24 px-[5vw]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            {t.howItWorks.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-16"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.howItWorks.h2}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {t.howItWorks.steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
              <div>
                                <div
                  className="text-5xl font-bold tracking-tighter mb-4 select-none"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
                >
                  {step.num}
                </div>

                <h3
                  className="text-lg font-semibold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
