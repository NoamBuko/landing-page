'use client';
import { useState } from 'react';
import Image from 'next/image';
import { type Translations } from '@/lib/translations';

interface Props {
  translations: Translations;
}

export default function HeroVisuals({ translations: t }: Props) {
  const [active, setActive] = useState<'before' | 'after'>('before');
  const isRtl = t.dir === 'rtl';

  return (
    <div className="relative isolate w-full max-w-6xl mx-auto">
      {/* Asymmetric accent splash behind images */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            insetInlineEnd: '4%',
            width: '72%',
            height: '115%',
            background: 'var(--color-accent)',
            borderRadius: '63% 37% 56% 44% / 49% 41% 59% 51%',
            opacity: 0.18,
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* Mobile tab switcher */}
      <div
        role="tablist"
        aria-label={t.hero.eyebrow}
        className="md:hidden mx-auto mb-5 flex items-center gap-1 p-1 rounded-full border border-border bg-background max-w-sm"
      >
        <button
          role="tab"
          aria-selected={active === 'before'}
          onClick={() => setActive('before')}
          className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === 'before' ? 'bg-white text-foreground shadow-sm' : 'text-muted'
          }`}
        >
          {t.hero.beforeTab}
        </button>
        <button
          role="tab"
          aria-selected={active === 'after'}
          onClick={() => setActive('after')}
          className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === 'after' ? 'bg-white text-foreground shadow-sm' : 'text-muted'
          }`}
        >
          {t.hero.afterTab}
        </button>
      </div>

      {/* Desktop: 3-col grid (before / arrow / after). Mobile: only active image shown. */}
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 lg:gap-5 items-center">
        <div
          className={`${active === 'before' ? 'block' : 'hidden'} md:block`}
          aria-hidden={active !== 'before' ? 'true' : undefined}
        >
          <p className="hidden md:block text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-3">
            {t.hero.beforeTab}
          </p>
          <Image
            src="/hero/before.png"
            alt={t.hero.beforeAlt}
            width={1620}
            height={1086}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Arrow — desktop only */}
        <div
          className="hidden md:flex items-center justify-center md:mt-3"
          aria-hidden="true"
        >
          <svg
            width="56"
            height="24"
            viewBox="0 0 56 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isRtl ? 'rotate-180' : ''}
            style={{ color: 'var(--color-accent)' }}
          >
            <path d="M2 12h50" />
            <path d="M42 3l11 9-11 9" />
          </svg>
        </div>

        <div
          className={`${active === 'after' ? 'block' : 'hidden'} md:block`}
          aria-hidden={active !== 'after' ? 'true' : undefined}
        >
          <p
            className="hidden md:block text-center text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            {t.hero.afterTab}
          </p>
          <Image
            src="/hero/after.png"
            alt={t.hero.afterAlt}
            width={1614}
            height={1086}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
