import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { t, type Lang } from '@/lib/translations';
import { intakeCopy } from '@/lib/intakeForm';
import Footer from '@/components/Footer';
import IntakeForm from '@/components/IntakeForm';
import WhatsAppButton from '@/components/WhatsAppButton';

function toLang(lang: string): Lang | null {
  return lang === 'en' || lang === 'he' ? lang : null;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = toLang((await params).lang);
  if (!lang) return {};
  const { metaTitle: title, metaDescription: description } = intakeCopy[lang];
  const url = `/${lang}/start`;

  // A link sent to clients, not a marketing page, so it stays out of search.
  return {
    title,
    description,
    robots: { index: false, follow: false },
    alternates: { canonical: url, languages: { en: '/en/start', he: '/he/start' } },
    // Setting openGraph here drops the image inherited from the [lang] segment.
    openGraph: { title, description, url, images: `/${lang}/opengraph-image` },
    twitter: { title, description, images: `/${lang}/opengraph-image` },
  };
}

export default async function StartPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = toLang((await params).lang);
  if (!lang) notFound();
  const c = intakeCopy[lang];
  const otherLang = lang === 'he' ? 'en' : 'he';

  return (
    <div className="min-h-dvh flex flex-col">
      <header className="px-4 sm:px-[5vw] py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <Link href={`/${lang}`} className="inline-flex items-center gap-2.5">
            <img src="/logo.svg" alt="" width={40} height={40} className="w-10 h-10 shrink-0 rounded-[0.6rem]" />
            <span className="flex flex-col items-start">
              <span className="text-base font-bold leading-tight tracking-tight text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                Noam Bukobza
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-accent">{c.brandTag}</span>
            </span>
          </Link>
          <Link
            href={`/${otherLang}/start`}
            hrefLang={otherLang}
            className="text-sm font-medium text-foreground px-4 py-2 rounded-full border border-border bg-white transition-colors hover:border-accent"
          >
            {c.switchLabel}
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-[5vw] pt-2 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <IntakeForm lang={lang} />
        </div>
      </main>

      <Footer translations={t[lang]} />
      <WhatsAppButton lang={lang} />
    </div>
  );
}
