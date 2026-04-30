'use client';
import { useEffect, useState } from 'react';
import { type Lang, type Translations } from '@/lib/translations';

interface Props {
  translations: Translations;
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function Nav({ translations: t, lang, setLang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHe = lang === 'he';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.work, id: 'work' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] h-20 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Logo */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-start">
        <span
          className="text-base font-bold leading-tight text-foreground tracking-tight whitespace-nowrap"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Noam Bukobza
        </span>
        <span className="text-xs font-medium uppercase tracking-widest whitespace-nowrap" style={{ color: 'var(--color-accent)' }}>
          {t.nav.work === 'Work' ? 'Software Developer' : 'מפתח תוכנה'}
        </span>
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-base font-medium text-muted hover:text-foreground transition-colors"
          >
            {link.label}
          </button>
        ))}
        <LangToggle lang={lang} setLang={setLang} />
        <button
          onClick={() => scrollTo('contact')}
          className="text-base font-medium text-white px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          {t.nav.cta}
        </button>
      </div>

      {/* Mobile controls */}
      <div className="flex md:hidden items-center gap-2">
        <LangToggle lang={lang} setLang={setLang} />
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border py-4 flex flex-col items-${isHe ? 'end' : 'start'} px-[5vw] gap-4 md:hidden`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-base font-medium text-foreground"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="text-sm font-medium text-white px-5 py-2.5 rounded-full mt-1"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            {t.nav.cta}
          </button>
        </div>
      )}
    </nav>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const isHe = lang === 'he';
  return (
    <button
      onClick={() => setLang(isHe ? 'en' : 'he')}
      className="flex items-center px-2 py-1.5 rounded-full border border-border hover:border-accent transition-colors"
      aria-label={isHe ? 'Switch to English' : 'עבור לעברית'}
    >
      <span className="text-lg leading-none">{isHe ? '🇺🇸' : '🇮🇱'}</span>
    </button>
  );
}
