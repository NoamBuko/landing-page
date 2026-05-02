'use client';
import { useEffect, useState } from 'react';
import { t, type Lang } from '@/lib/translations';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const translations = t[lang];

  useEffect(() => {
    document.documentElement.dir = translations.dir;
    document.documentElement.lang = lang;
  }, [lang, translations.dir]);

  return (
    <>
      <Nav translations={translations} lang={lang} setLang={setLang} />
      <main>
        <Hero translations={translations} />
        <HowItWorks translations={translations} />
        <About translations={translations} />
        <Contact translations={translations} lang={lang} />
      </main>
      <Footer translations={translations} />
      <WhatsAppButton lang={lang} />
    </>
  );
}
