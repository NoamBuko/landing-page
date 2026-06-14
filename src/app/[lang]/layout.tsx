import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import '../globals.css';
import { t, type Lang } from '@/lib/translations';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

function toLocale(lang: string): Lang | null {
  return lang === 'en' || lang === 'he' ? lang : null;
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'he' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = toLocale(lang);
  if (!locale) return {};

  const m = t[locale].meta;

  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', he: '/he', 'x-default': '/' },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `/${locale}`,
      siteName: 'Noam Bukobza',
      locale: locale === 'he' ? 'he_IL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = toLocale(lang);
  if (!locale) notFound();

  return (
    <html
      lang={locale}
      dir={t[locale].dir}
      className={`${dmSans.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
