import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

// One icon per service card, picked by the `icon` key in translations.
const ICONS: Record<string, React.ReactNode> = {
  // A browser window
  site: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M6.5 6.5h.01M9 6.5h.01" />
    </>
  ),
  // A map pin
  maps: (
    <>
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  // A magnifying glass
  seo: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
    </>
  ),
};

// "What you get": the three things included in the package.
export default function Services({ translations: t }: Props) {
  const s = t.services;

  return (
    <section id="services" className="pt-4 sm:pt-6 pb-4 px-[5vw]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            {s.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-12 max-w-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {s.h2}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {s.items.map((item, i) => (
            <Reveal key={item.icon} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 sm:p-7">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {ICONS[item.icon]}
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-8 text-base font-semibold text-foreground text-center">{s.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
