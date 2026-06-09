import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

export default function FAQ({ translations: t }: Props) {
  const f = t.faq;

  return (
    <section id="faq" className="py-24 px-[5vw]">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            {f.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-10"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {f.h2}
          </h2>
        </Reveal>

        <div className="border-t border-border">
          {f.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="group border-b border-border py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span
                    className="text-base sm:text-lg font-semibold text-foreground"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 transition-transform duration-200 group-open:rotate-45"
                    style={{ color: 'var(--color-accent)' }}
                    aria-hidden
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 4v12M4 10h12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-sm sm:text-base text-muted leading-relaxed mt-3 max-w-2xl">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
