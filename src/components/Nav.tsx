'use client';
import { useEffect, useState } from 'react';
import { type Lang, type Translations } from '@/lib/translations';
import { PHONE_TEL } from '@/lib/site';

interface Props {
  translations: Translations;
  lang: Lang;
}

export default function Nav({ translations: t, lang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHe = lang === 'he';
  // While the transparent nav sits over the dark hero, it switches to light text.
  const onDark = !scrolled && !menuOpen;

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
    { label: t.nav.process, id: 'process' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.faq, id: 'faq' },
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
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
        {/* NB logo — desktop only */}
        <img
          src="/logo.svg"
          alt="Noam Bukobza"
          width={40}
          height={40}
          className={`hidden md:block w-10 h-10 shrink-0 rounded-[0.6rem] ${onDark ? 'ring-1 ring-white/25' : ''}`}
        />
        <span className="flex flex-col items-start">
          <span
            className={`text-base font-bold leading-tight tracking-tight whitespace-nowrap ${onDark ? 'text-white' : 'text-foreground'}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Noam Bukobza
          </span>
          <span className={`text-xs font-medium uppercase tracking-widest whitespace-nowrap ${onDark ? 'text-mint' : 'text-accent'}`}>
            {isHe ? 'דפי נחיתה' : 'Landing Pages'}
          </span>
        </span>
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-5 lg:gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`text-base font-medium transition-colors ${onDark ? 'text-white/75 hover:text-white' : 'text-muted hover:text-foreground'}`}
          >
            {link.label}
          </button>
        ))}
        <LangToggle lang={lang} onDark={onDark} />
        <button
          onClick={() => scrollTo('contact')}
          className={`text-base font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-90 ${onDark ? 'bg-white text-hero-dark' : 'bg-accent text-white'}`}
        >
          {t.nav.cta}
        </button>
      </div>

      {/* Mobile controls */}
      <div className="flex md:hidden items-center gap-2">
        {PHONE_TEL && (
          <a
            href={`tel:${PHONE_TEL}`}
            className={`p-2 rounded-full ${onDark ? 'bg-white text-hero-dark' : 'bg-accent text-white'}`}
            aria-label={t.footer.callAria}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        )}
        <LangToggle lang={lang} onDark={onDark} />
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className={`p-2 ${onDark ? 'text-white' : 'text-foreground'}`}
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
          className={`absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border py-4 flex flex-col items-start px-[5vw] gap-4 md:hidden`}
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

function LangToggle({ lang, onDark }: { lang: Lang; onDark: boolean }) {
  const isHe = lang === 'he';
  return (
    <a
      href={isHe ? '/en' : '/he'}
      className={`flex items-center gap-1.5 px-2 md:px-3 py-1.5 rounded-full border text-xs font-medium transition-colors ${
        onDark ? 'border-white/25 text-white/80 hover:border-white hover:text-white' : 'border-border text-muted hover:border-accent hover:text-foreground'
      }`}
      aria-label={isHe ? 'Switch to English' : 'עבור לעברית'}
    >
      <span className="text-lg md:text-sm leading-none">{isHe ? '🇺🇸' : '🇮🇱'}</span>
      <span className="hidden md:inline">{isHe ? 'EN' : 'עב'}</span>
    </a>
  );
}
