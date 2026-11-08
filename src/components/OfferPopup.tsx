'use client';
import { useEffect, useRef } from 'react';
import { t, type Lang } from '@/lib/translations';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const SEEN_KEY = 'offer-popup-seen';

interface Props {
  lang: Lang;
}

export default function OfferPopup({ lang }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const promo = t[lang].promo;
  const pillRef = useRef<HTMLButtonElement>(null);
  const closingRef = useRef(false);

  // Shrinks the popup into the floating pill, so it's clear where to reopen it.
  const close = () => {
    const dialog = dialogRef.current;
    const pill = pillRef.current;
    if (!dialog?.open || closingRef.current) return;
    if (!pill || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialog.close();
      return;
    }

    closingRef.current = true;
    const from = dialog.getBoundingClientRect();
    const to = pill.getBoundingClientRect();
    const dx = to.left + to.width / 2 - (from.left + from.width / 2);
    const dy = to.top + to.height / 2 - (from.top + from.height / 2);
    const timing = { duration: 450, easing: 'cubic-bezier(0.55, 0, 0.8, 0.3)', fill: 'forwards' } as const;

    const swallow = dialog.animate(
      [
        { transform: 'none', opacity: 1 },
        { opacity: 1, offset: 0.75 },
        { transform: `translate(${dx}px, ${dy}px) scale(${to.height / from.height})`, opacity: 0 },
      ],
      timing,
    );
    const backdrop = dialog.animate({ opacity: [1, 0] }, { ...timing, pseudoElement: '::backdrop' });

    swallow.onfinish = () => {
      dialog.close();
      swallow.cancel();
      backdrop.cancel();
      closingRef.current = false;
      pill.animate({ transform: ['scale(1)', 'scale(1.18)', 'scale(1)'] }, { duration: 350, easing: 'ease-out' });
    };
  };

  // Opens by itself once per browser session, as soon as the page loads.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      // Storage can be blocked; the popup still works, it just isn't remembered.
    }
    dialogRef.current?.showModal();
  }, []);

  return (
    <>
    <dialog
      ref={dialogRef}
      aria-labelledby="offer-popup-title"
      // The inner panel fills the dialog, so a click landing on the dialog itself is the backdrop.
      onClick={(e) => e.target === dialogRef.current && close()}
      // Esc: run the same closing animation instead of vanishing.
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      className="offer-popup m-auto w-[min(26rem,calc(100vw-2rem))] max-w-none rounded-3xl bg-hero-dark p-0 text-center text-white shadow-2xl backdrop:bg-black/60"
    >
      <div className="relative isolate overflow-hidden rounded-3xl px-6 py-9 sm:px-8">
        <div aria-hidden className="hero-dots absolute inset-0 -z-10" />

        <p className="mb-4 inline-block rounded-full border border-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {promo.eyebrow}
        </p>
        <h2
          id="offer-popup-title"
          className="mb-5 text-2xl font-bold leading-tight sm:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {promo.title}
        </h2>

        <p className="mb-4 flex items-baseline justify-center gap-3">
          <s className="text-lg font-medium text-white/55">{promo.oldPrice}</s>
          <span className="text-5xl font-bold text-mint" style={{ fontFamily: 'var(--font-display)' }}>
            {promo.newPrice}
          </span>
        </p>

        <p className="mx-auto mb-7 max-w-[32ch] leading-relaxed text-white/75">{promo.body}</p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(promo.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-hero-dark transition-opacity hover:opacity-90"
        >
          {promo.cta}
        </a>

        <button
          type="button"
          onClick={close}
          aria-label={promo.close}
          className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </dialog>

    {/* Always rendered: while the popup is open it just sits behind the backdrop. */}
    <button
      ref={pillRef}
      type="button"
      onClick={() => dialogRef.current?.showModal()}
      className="fixed bottom-6 left-6 rtl:left-auto rtl:right-6 z-50 h-[50px] whitespace-nowrap rounded-full border border-gold bg-hero-dark px-5 text-sm font-semibold text-gold shadow-lg shadow-black/10 transition-colors hover:bg-gold hover:text-hero-dark"
    >
      {t[lang].promo.pill}
    </button>
    </>
  );
}
