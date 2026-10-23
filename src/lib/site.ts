// Base URL used for canonical links, hreflang, OpenGraph/Twitter images and
// JSON-LD. Resolution order:
//   1. NEXT_PUBLIC_SITE_URL — set this to the real domain in production.
//   2. Vercel's production domain (stable across deploys).
//   3. Vercel's per-deployment URL (preview deploys, before a domain is set).
//   4. localhost for local dev.
// These VERCEL_* vars are provided automatically by Vercel at build/runtime.
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
}

export const SITE_URL = resolveSiteUrl();

// Public profiles used for JSON-LD `sameAs` — these tie the site to Noam's
// online identity, a strong signal for a personal brand. Add full URLs as
// they go live (e.g. 'https://www.linkedin.com/in/...', 'https://github.com/...').
export const PROFILES: string[] = [];

// Phone number, reused from the WhatsApp number (international format, no +,
// e.g. 972501234567). PHONE_TEL feeds tel: links; PHONE_DISPLAY is the local
// Israeli format shown on the page (050-123-4567).
const PHONE_INTL = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export const PHONE_TEL = PHONE_INTL ? `+${PHONE_INTL}` : undefined;

export const PHONE_DISPLAY = PHONE_INTL
  ? PHONE_INTL.replace(/^972(\d{2})(\d{3})(\d{4})$/, '0$1-$2-$3')
  : undefined;
