'use client';
import { useState } from 'react';
import { type Lang, type Translations } from '@/lib/translations';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
import Reveal from './Reveal';

interface Props {
  translations: Translations;
  lang: Lang;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function Contact({ translations: t, lang }: Props) {
  const ct = t.contact;
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', biz: '', msg: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');

    if (!FORMSPREE_ID) {
      window.location.href = `mailto:noambuko10@gmail.com?subject=New inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Business: ${form.biz}\n\n${form.msg}`)}`;
      setState('idle');
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, business: form.biz, message: form.msg }),
      });
      if (res.ok) {
        setState('success');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors';
  const labelClass = 'block text-xs font-medium text-foreground mb-1.5';

  return (
    <section id="contact" className="py-24 px-[5vw]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: heading */}
          <Reveal>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              {ct.label}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {ct.h2}
            </h2>
            <p className="text-muted leading-relaxed mb-8">{ct.sub}</p>

            {/* WhatsApp option */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-medium px-5 py-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.54 4.067 1.484 5.787L0 24l6.376-1.453A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.369l-.36-.213-3.727.85.865-3.634-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
              </svg>
              {ct.orWhatsapp}
            </a>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={100}>
            {state === 'success' ? (
              <div
                className="p-8 rounded-2xl border text-center"
                style={{ borderColor: 'var(--color-accent-light)', backgroundColor: 'var(--color-accent-light)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                    <path d="M4 11l5 5 9-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="text-xl font-bold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {ct.successTitle}
                </h3>
                <p className="text-sm text-muted">{ct.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{ct.nameLabel}</label>
                    <input
                      type="text"
                      required
                      placeholder={ct.namePlaceholder}
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{ct.emailLabel}</label>
                    <input
                      type="email"
                      required
                      placeholder={ct.emailPlaceholder}
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{ct.bizLabel}</label>
                  <input
                    type="text"
                    required
                    placeholder={ct.bizPlaceholder}
                    value={form.biz}
                    onChange={(e) => setForm((f) => ({ ...f, biz: e.target.value }))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>{ct.msgLabel}</label>
                  <textarea
                    required
                    rows={4}
                    placeholder={ct.msgPlaceholder}
                    value={form.msg}
                    onChange={(e) => setForm((f) => ({ ...f, msg: e.target.value }))}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {state === 'error' && (
                  <p className="text-sm text-red-500">{ct.errorMsg}</p>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    {state === 'loading' ? '...' : ct.submitBtn}
                  </button>
                  <p className="text-base font-medium text-muted">{ct.noCommit}</p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
