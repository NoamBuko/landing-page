import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

const icons = [
  // Built around your workflow
  <svg key="0" width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M3 5h14M3 10h9M3 15h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  // End-to-end
  <svg key="1" width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M4 10h12M13 7l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Manual work
  <svg key="2" width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 4v6l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6"/></svg>,
  // Admin dashboards
  <svg key="3" width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/></svg>,
  // Fast turnaround
  <svg key="4" width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 5v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M3.5 10a6.5 6.5 0 1 1 .9 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M3.5 14.5V10H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Long-term support
  <svg key="5" width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 17s-7-4.5-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 17 8c0 4.5-7 9-7 9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>,
];

export default function ValueProps({ translations: t }: Props) {
  return (
    <section className="py-24 px-[5vw]" style={{ backgroundColor: 'white' }}>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            {t.valueProps.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-16"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.valueProps.h2a}
            <em className="not-italic" style={{ color: 'var(--color-accent)' }}>
              {t.valueProps.h2b}
            </em>
            {t.valueProps.h2c}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.valueProps.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="p-6 rounded-2xl border border-border hover:border-accent/40 transition-colors group">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-accent/20"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
                >
                  {icons[i]}
                </div>
                <h3
                  className="text-base font-semibold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
