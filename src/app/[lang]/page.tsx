import { notFound } from 'next/navigation';
import { t, type Lang } from '@/lib/translations';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Work from '@/components/Work';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'he' }];
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== 'en' && lang !== 'he') notFound();
  const locale = lang as Lang;
  const tr = t[locale];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: locale === 'he' ? 'נועם בוקובזה' : 'Noam Bukobza',
        jobTitle: locale === 'he' ? 'מפתח תוכנה' : 'Software Developer',
        description: tr.meta.description,
        url: `${SITE_URL}/${locale}`,
      },
      {
        '@type': 'ProfessionalService',
        name: 'Noam Bukobza',
        description: tr.meta.description,
        url: `${SITE_URL}/${locale}`,
        areaServed: 'IL',
      },
      {
        '@type': 'FAQPage',
        mainEntity: tr.faq.items.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Nav translations={tr} lang={locale} />
      <main>
        <Hero translations={tr} />
        <HowItWorks translations={tr} />
        <Work translations={tr} />
        <About translations={tr} />
        <FAQ translations={tr} />
        <Contact translations={tr} lang={locale} />
      </main>
      <Footer translations={tr} />
      <WhatsAppButton lang={locale} />
    </>
  );
}
