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
