'use client';
import { useEffect, useRef, useState } from 'react';
import type { Lang } from '@/lib/translations';
import {
  OTHER_VALUE,
  intakeCopy,
  intakeFields,
  intakeSteps,
  isChoiceField,
  type ChoiceField,
  type IntakeField,
  type TextField,
} from '@/lib/intakeForm';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_START_ID;
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

type FormState = 'idle' | 'loading' | 'success' | 'error';
type Copy = (typeof intakeCopy)[Lang];
type Errors = Record<string, string>;

const fieldsByName = new Map(intakeFields.map((f) => [f.name, f]));
const otherName = (name: string) => `${name}__other`;

const inputBase =
  'w-full px-4 py-3.5 rounded-xl border bg-white text-base text-foreground placeholder:text-muted/50 transition-[border-color,box-shadow] focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/15';
const inputClass = (invalid: boolean) =>
  `${inputBase} ${invalid ? 'border-red-400 ring-4 ring-red-500/10' : 'border-border hover:border-muted/40'}`;

// Reads one field's answer from the form, in the submitter's language.
function readAnswer(data: FormData, field: IntakeField): string {
  if (!isChoiceField(field)) return String(data.get(field.name) ?? '').trim();
  return data
    .getAll(field.name)
    .map((v) => (v === OTHER_VALUE ? String(data.get(otherName(field.name)) ?? '').trim() : String(v)))
    .filter(Boolean)
    .join(', ');
}

function validateField(data: FormData, field: IntakeField, c: Copy): string | undefined {
  if (isChoiceField(field)) {
    const values = data.getAll(field.name);
    if (field.required && values.length === 0) return c.pickOne;
    if (values.includes(OTHER_VALUE) && !String(data.get(otherName(field.name)) ?? '').trim()) return c.fillOther;
    return undefined;
  }
  const value = String(data.get(field.name) ?? '').trim();
  if (field.required && !value) return c.required;
  if (field.type === 'tel' && value && value.replace(/\D/g, '').length < 9) return c.badPhone;
  return undefined;
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="flex items-center gap-1.5 text-sm text-red-600 mt-2">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden className="shrink-0">
        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.75 3.5h1.5v4.5h-1.5V4.5Zm0 6h1.5V12h-1.5v-1.5Z" />
      </svg>
      {message}
    </p>
  );
}

function FieldLabel({ field, lang, c, htmlFor, as = 'label' }: { field: IntakeField; lang: Lang; c: Copy; htmlFor?: string; as?: 'label' | 'legend' }) {
  const Tag = as;
  return (
    <Tag htmlFor={as === 'label' ? htmlFor : undefined} className="block text-[0.95rem] font-semibold text-foreground leading-snug">
      {field.label[lang]}
      {!field.required && <span className="ms-2 text-xs font-medium text-muted">({c.optional})</span>}
    </Tag>
  );
}

function TextInput({ field, lang, c, error }: { field: TextField; lang: Lang; c: Copy; error?: string }) {
  const id = `field-${field.name}`;
  const hintId = field.hint ? `${id}-hint` : undefined;
  const errorId = `${id}-error`;
  const describedBy = [hintId, error ? errorId : undefined].filter(Boolean).join(' ') || undefined;
  const common = {
    id,
    name: field.name,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    placeholder: field.placeholder?.[lang],
    className: inputClass(!!error),
  };

  return (
    <div>
      <FieldLabel field={field} lang={lang} c={c} htmlFor={id} />
      {field.hint && (
        <p id={hintId} className="text-sm text-muted mt-1">
          {field.hint[lang]}
        </p>
      )}
      <div className="mt-2.5">
        {field.type === 'textarea' ? (
          <textarea {...common} rows={3} className={`${common.className} resize-y min-h-[6.5rem]`} />
        ) : (
          <input
            {...common}
            type={field.type}
            autoComplete={field.autoComplete}
            inputMode={field.type === 'tel' ? 'tel' : undefined}
            dir={field.type === 'tel' ? 'ltr' : undefined}
            className={`${common.className} ${field.type === 'tel' ? 'rtl:text-right' : ''}`}
          />
        )}
      </div>
      <ErrorText id={errorId} message={error} />
    </div>
  );
}

function Indicator({ type }: { type: 'radio' | 'checkbox' }) {
  return (
    <span
      aria-hidden
      className={`grid place-items-center shrink-0 w-5 h-5 border-2 border-border bg-white transition-colors group-has-[:checked]:border-accent group-has-[:checked]:bg-accent ${type === 'radio' ? 'rounded-full' : 'rounded-md'}`}
    >
      {type === 'radio' ? (
        <span className="w-2 h-2 rounded-full bg-white scale-0 transition-transform group-has-[:checked]:scale-100" />
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-0 transition-opacity group-has-[:checked]:opacity-100">
          <path d="M2.5 6.2 5 8.5l4.5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
}

const optionClass =
  'group relative flex items-center gap-3 min-h-[3.25rem] px-4 py-3 rounded-xl border border-border bg-white text-[0.95rem] text-foreground cursor-pointer select-none transition-[border-color,background-color,box-shadow] hover:border-accent/50 has-[:checked]:border-accent has-[:checked]:bg-accent-light has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-accent/20';

function ChoiceInput({ field, lang, c, error }: { field: ChoiceField; lang: Lang; c: Copy; error?: string }) {
  const [otherChecked, setOtherChecked] = useState(false);
  const otherRef = useRef<HTMLInputElement>(null);
  const id = `field-${field.name}`;
  const errorId = `${id}-error`;
  const inputProps = { type: field.type, name: field.name, className: 'sr-only' };

  return (
    <fieldset id={id} aria-describedby={error ? errorId : undefined} className="scroll-mt-28">
      <FieldLabel field={field} lang={lang} c={c} as="legend" />
      {field.hint && <p className="text-sm text-muted mt-1">{field.hint[lang]}</p>}
      <div className={`mt-2.5 grid gap-2 ${field.options.length <= 3 && !field.allowOther ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
        {field.options.map((option) => (
          <label key={option.en} className={optionClass}>
            <input
              {...inputProps}
              value={option[lang]}
              onChange={field.type === 'radio' ? () => setOtherChecked(false) : undefined}
            />
            <Indicator type={field.type} />
            <span>{option[lang]}</span>
          </label>
        ))}
        {field.allowOther && (
          <label className={`${optionClass} ${otherChecked ? 'sm:col-span-2' : ''}`}>
            <input
              {...inputProps}
              value={OTHER_VALUE}
              checked={otherChecked}
              onChange={(e) => {
                setOtherChecked(e.target.checked);
                if (e.target.checked) requestAnimationFrame(() => otherRef.current?.focus());
              }}
            />
            <Indicator type={field.type} />
            <span className="shrink-0">{c.other}</span>
            {otherChecked && (
              <input
                ref={otherRef}
                type="text"
                name={otherName(field.name)}
                aria-label={c.other}
                placeholder={c.otherPlaceholder}
                className="min-w-0 flex-1 bg-transparent text-base border-b border-accent/40 py-0.5 placeholder:text-muted/60 focus:outline-none focus:border-accent"
              />
            )}
          </label>
        )}
      </div>
      <ErrorText id={errorId} message={error} />
    </fieldset>
  );
}

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="rtl:rotate-180">
    <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.54 4.067 1.484 5.787L0 24l6.376-1.453A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.369l-.36-.213-3.727.85.865-3.634-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
  </svg>
);

export default function IntakeForm({ lang }: { lang: Lang }) {
  const c = intakeCopy[lang];
  const [state, setState] = useState<FormState>('idle');
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const total = intakeSteps.length;
  const isLast = step === total - 1;

  // On step change (or success), bring the top of the card back into view.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step, state]);

  const validateStep = (index: number): boolean => {
    const data = new FormData(formRef.current!);
    const next: Errors = {};
    for (const name of intakeSteps[index].fields) {
      const message = validateField(data, fieldsByName.get(name)!, c);
      if (message) next[name] = message;
    }
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      const el = document.getElementById(`field-${first}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) el.focus({ preventScroll: true });
      return false;
    }
    return true;
  };

  const goTo = (index: number) => {
    setErrors({});
    setStep(index);
  };

  // Clears a field's error as soon as the user touches it.
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const name = (e.target as HTMLInputElement).name?.replace(/__other$/, '');
    if (name && errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep(step)) return;
    if (!isLast) {
      setStep(step + 1);
      return;
    }

    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = {
      _subject: c.subject(readAnswer(data, fieldsByName.get('business')!)),
      _gotcha: String(data.get('_gotcha') ?? ''),
      'Form language': lang === 'he' ? 'Hebrew' : 'English',
    };
    for (const field of intakeFields) payload[field.key] = readAnswer(data, field) || '—';

    setState('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      });
      setState(res.ok ? 'success' : 'error');
    } catch {
      setState('error');
    }
  };


  const done = state === 'success';
  const cardClass =
    'scroll-mt-6 rounded-3xl bg-white border border-border shadow-[0_24px_60px_-32px_rgb(16_41_31/0.3)]';

  const card = done ? (
    <div ref={topRef} className={`${cardClass} p-8 sm:p-12 text-center`}>
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-accent ring-8 ring-accent-light">
        <svg width="26" height="26" fill="none" viewBox="0 0 22 22" aria-hidden>
          <path d="M4 11l5 5 9-9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
        {c.successTitle}
      </h2>
      <p className="text-muted mb-8 max-w-[34ch] mx-auto leading-relaxed">{c.successMsg}</p>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(c.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-[0.95rem] font-semibold text-white bg-accent transition-opacity hover:opacity-90"
      >
        <WhatsAppIcon />
        {c.successCta}
      </a>
    </div>
  ) : (
    <div ref={topRef} className={cardClass}>
      <div className="px-6 sm:px-10 pt-7 sm:pt-9">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{c.stepOf(step + 1, total)}</p>
          <p className="text-xs text-muted lg:hidden">{c.duration}</p>
        </div>
        {/* On desktop the side panel shows progress, so the bar is mobile only. */}
        <div className="flex gap-1.5 mt-3 lg:hidden" aria-hidden>
          {intakeSteps.map((s, i) => (
            <div key={s.title.en} className="h-1.5 flex-1 rounded-full bg-border overflow-hidden">
              <div className={`h-full rounded-full bg-accent transition-[width] duration-500 ease-out ${i <= step ? 'w-full' : 'w-0'}`} />
            </div>
          ))}
        </div>
        <h2 className="mt-6 lg:mt-3 text-2xl sm:text-[1.75rem] font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          {intakeSteps[step].title[lang]}
        </h2>
        <p className="text-muted mt-1">{intakeSteps[step].sub[lang]}</p>
      </div>

      <form ref={formRef} noValidate onSubmit={handleSubmit} onChange={handleChange} className="px-6 sm:px-10 pt-8 pb-7 sm:pb-9">
        {/* Honeypot: hidden from real users, Formspree drops submissions that fill it */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 opacity-0 [clip:rect(0,0,0,0)]"
        />

        {/* Every step stays mounted so earlier answers are still in the form on submit. */}
        {intakeSteps.map((s, i) => (
          <div key={s.title.en} hidden={i !== step} className="space-y-8 animate-[intake-in_0.35s_ease-out]">
            {s.fields.map((name) => {
              const field = fieldsByName.get(name)!;
              return isChoiceField(field) ? (
                <ChoiceInput key={name} field={field} lang={lang} c={c} error={errors[name]} />
              ) : (
                <TextInput key={name} field={field} lang={lang} c={c} error={errors[name]} />
              );
            })}
          </div>
        ))}

        {state === 'error' && (
          <p role="alert" className="mt-8 px-4 py-3 rounded-xl bg-red-50 text-sm text-red-700">
            {c.error}
          </p>
        )}

        <div className="mt-10 pt-6 border-t border-border flex items-center gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={() => goTo(step - 1)}
              className="px-5 py-3.5 rounded-full text-[0.95rem] font-semibold text-foreground border border-border transition-colors hover:border-accent"
            >
              {c.back}
            </button>
          )}
          <button
            type="submit"
            disabled={state === 'loading'}
            className="ms-auto inline-flex items-center justify-center gap-2 flex-1 sm:flex-none px-8 py-3.5 rounded-full text-[0.95rem] font-semibold text-white bg-accent transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {state === 'loading' ? c.sending : isLast ? c.submit : c.next}
            {state !== 'loading' && <Arrow />}
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="grid gap-5 lg:gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
      <aside className="relative isolate overflow-hidden rounded-3xl bg-hero-dark text-white p-7 sm:p-10 lg:sticky lg:top-6">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-dots absolute inset-0" />
          <div className="hero-glow absolute left-1/2 -top-1/4 h-[28rem] w-[36rem] -translate-x-1/2" />
        </div>

        <p className="font-semibold tracking-[0.22em] uppercase mb-4 text-mint text-xs">{c.eyebrow}</p>
        <h1
          className="font-bold tracking-tight mb-4"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 1.35rem + 1.6vw, 2.6rem)', lineHeight: 1.15 }}
        >
          {c.h1}
        </h1>
        <p className="text-white/75 leading-relaxed">{c.intro}</p>

        {/* Step list, desktop only: mobile uses the progress bar in the card. */}
        <ol className="hidden lg:block mt-10 space-y-2">
          {intakeSteps.map((s, i) => {
            const complete = done || i < step;
            const current = !done && i === step;
            const content = (
              <>
                <span
                  className={`grid place-items-center shrink-0 w-9 h-9 rounded-full text-sm font-bold transition-colors ${
                    complete ? 'bg-mint text-hero-dark' : current ? 'bg-white text-hero-dark' : 'ring-1 ring-white/25 text-white/50'
                  }`}
                >
                  {complete ? (
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2.5 6.2 5 8.5l4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </span>
                <span className="flex flex-col text-start">
                  <span className={`font-semibold ${current || complete ? 'text-white' : 'text-white/50'}`}>{s.title[lang]}</span>
                  <span className={`text-sm ${current ? 'text-white/70' : 'text-white/40'}`}>{s.sub[lang]}</span>
                </span>
              </>
            );
            const rowClass = `flex items-center gap-4 w-full p-3 -mx-3 rounded-2xl transition-colors ${current ? 'bg-white/[0.07]' : ''}`;
            return (
              <li key={s.title.en} aria-current={current ? 'step' : undefined}>
                {/* Finished steps can be reopened; going forward still runs validation. */}
                {complete && !done ? (
                  <button type="button" onClick={() => goTo(i)} className={`${rowClass} hover:bg-white/[0.05]`}>
                    {content}
                  </button>
                ) : (
                  <div className={rowClass}>{content}</div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-8 lg:mt-10 flex items-start gap-3 p-4 rounded-2xl bg-white/[0.06] ring-1 ring-white/10 text-sm text-white/80 leading-relaxed">
          <span className="text-mint mt-0.5">
            <WhatsAppIcon />
          </span>
          <span>
            {c.introNote}
            <span className="hidden lg:block text-white/50 mt-1">{c.duration}</span>
          </span>
        </div>
      </aside>

      {card}
    </div>
  );
}
