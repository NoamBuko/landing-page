import { type Translations } from '@/lib/translations';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

interface Props {
  translations: Translations;
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

export default function Footer({ translations: t }: Props) {
  const f = t.footer;
  const linkClass = 'text-sm text-muted hover:text-foreground transition-colors';

  return (
    <footer className="pt-12 pb-24 sm:pb-10 px-[5vw] border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <p
              className="text-base font-bold text-foreground tracking-tight mb-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Noam Bukobza
            </p>
            <p className="text-sm text-muted">{f.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-accent)' }}>
              {f.contactHeading}
            </p>
            <ul className="flex flex-col gap-2">
              {PHONE_TEL && (
                <li>
                  <a href={`tel:${PHONE_TEL}`} className={linkClass} dir="ltr">
                    {PHONE_DISPLAY}
                  </a>
                </li>
              )}
              {WHATSAPP_NUMBER && (
                <li>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.contact.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {EMAIL && (
                <li>
                  <a href={`mailto:${EMAIL}`} className={linkClass}>
                    {EMAIL}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap pt-6 border-t border-border">
          <p className="text-xs text-muted">{f.copyright}</p>
          <p className="text-xs text-muted">{f.location}</p>
        </div>
      </div>
    </footer>
  );
}
