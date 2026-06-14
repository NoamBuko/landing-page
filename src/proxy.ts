import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Next.js 16: middleware is now "proxy". This runs only on the bare "/" (see
// matcher) and redirects first-time visitors to their language based on the
// browser's Accept-Language header. /en and /he are served directly.
const DEFAULT_LOCALE = 'en';

function detectLocale(request: NextRequest): string {
  const header = request.headers.get('accept-language') || '';
  const tags = header.split(',').map((part) => part.split(';')[0].trim().toLowerCase());
  for (const tag of tags) {
    if (tag.startsWith('he')) return 'he';
    if (tag.startsWith('en')) return 'en';
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const locale = detectLocale(request);
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: '/',
};
