import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { t } from '@/lib/translations';
import Footer from '@/components/Footer';
import IntakeForm from '@/components/IntakeForm';
import WhatsAppButton from '@/components/WhatsAppButton';

const TITLE = 'טופס היכרות – דף נחיתה לעסק שלך';
const DESCRIPTION = 'כמה שאלות קצרות (כ-5 דקות) כדי שאוכל להתחיל לבנות את הגרסה הראשונה של דף הנחיתה שלך.';

// A link sent to clients, not a marketing page, so it stays out of search.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  alternates: { canonical: '/he/start' },
  // Setting openGraph here drops the image inherited from the [lang] segment.
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/he/start', images: '/he/opengraph-image' },
  twitter: { title: TITLE, description: DESCRIPTION, images: '/he/opengraph-image' },
};

export default async function StartPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== 'he') notFound();

  return (
    <>
      <header className="relative isolate overflow-hidden px-[5vw] pt-6 pb-14 sm:pb-20 bg-hero-dark rounded-b-[2rem] sm:rounded-b-[3rem]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-dots absolute inset-0" />
          <div className="hero-glow absolute left-1/2 top-[10%] h-[min(24rem,90vw)] w-[min(48rem,150vw)] -translate-x-1/2" />
        </div>

        <Link href="/he" className="inline-flex items-center gap-2.5">
          <img src="/logo.svg" alt="" width={40} height={40} className="w-10 h-10 shrink-0 rounded-[0.6rem] ring-1 ring-white/25" />
          <span className="flex flex-col items-start">
            <span className="text-base font-bold leading-tight tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Noam Bukobza
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-mint">דפי נחיתה</span>
          </span>
        </Link>

        <div className="text-center mt-12 sm:mt-16">
          <p className="font-semibold tracking-[0.22em] uppercase mb-4 text-mint text-xs sm:text-sm">טופס היכרות</p>
          <h1
            className="font-bold tracking-tight text-white mb-5"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 1.6rem + 2vw, 3.25rem)', lineHeight: 1.15 }}
          >
            דף נחיתה לעסק שלך
          </h1>
          <p className="text-white/75 leading-relaxed max-w-[38ch] sm:max-w-2xl mx-auto">
            היי! כדי שאוכל להתחיל לבנות את הגרסה הראשונה של דף הנחיתה שלך, אשמח שתענו על כמה שאלות קצרות (כ-5 דקות).
          </p>
          <p className="text-white/75 leading-relaxed mt-2">את הלוגו ותמונות של העסק שלחו לי בוואטסאפ 🙂</p>
        </div>
      </header>

      <main className="py-14 sm:py-20 px-[5vw]">
        <div className="max-w-xl mx-auto">
          <IntakeForm />
        </div>
      </main>

      <Footer translations={t.he} />
      <WhatsAppButton lang="he" />
    </>
  );
}
