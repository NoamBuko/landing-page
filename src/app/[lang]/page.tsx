import { notFound } from 'next/navigation';
import { t, type Lang } from '@/lib/translations';
import { SITE_URL, PROFILES } from '@/lib/site';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Work from '@/components/Work';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'he' }];
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== 'en' && lang !== 'he') notFound();
  const locale = lang as Lang;
  const tr = t[locale];

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const url = `${SITE_URL}/${locale}`;

  const address = {
    '@type': 'PostalAddress',
    addressLocality: locale === 'he' ? 'בית שמש' : 'Beit Shemesh',
    addressRegion: locale === 'he' ? 'מחוז ירושלים' : 'Jerusalem District',
    addressCountry: 'IL',
  };
  const contact = {
    ...(email ? { email } : {}),
    ...(phone ? { telephone: `+${phone}` } : {}),
  };
  const sameAs = PROFILES.length > 0 ? { sameAs: PROFILES } : {};

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: locale === 'he' ? 'נועם בוקובזה' : 'Noam Bukobza',
        jobTitle: locale === 'he' ? 'מפתח תוכנה' : 'Software Developer',
        description: tr.meta.description,
        url,
        image: `${SITE_URL}/noam-v3.jpg`,
        address,
        ...contact,
        ...sameAs,
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#business`,
        name: 'Noam Bukobza',
        description: tr.meta.description,
        url,
        image: `${SITE_URL}/noam-v3.jpg`,
        address,
        geo: { '@type': 'GeoCoordinates', latitude: 31.7497, longitude: 34.9886 },
        areaServed: [
          { '@type': 'City', name: locale === 'he' ? 'בית שמש' : 'Beit Shemesh' },
          { '@type': 'Country', name: locale === 'he' ? 'ישראל' : 'Israel' },
        ],
        availableLanguage: ['en', 'he'],
        founder: { '@id': `${SITE_URL}/#person` },
        ...contact,
        ...sameAs,
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
