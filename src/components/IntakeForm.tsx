'use client';
import { useEffect, useRef, useState } from 'react';
import { submitIntake } from '@/app/[lang]/start/actions';
import {
  HONEYPOT_NAME,
  OTHER_VALUE,
  intakeFields,
  isChoiceField,
  type ChoiceField,
  type IntakeField,
} from '@/lib/intakeForm';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const WHATSAPP_MESSAGE = 'היי, מילאתי את טופס ההיכרות. הנה הלוגו והתמונות של העסק 🙂';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors';
const labelClass = 'block text-sm font-medium text-foreground';
const hintClass = 'text-xs text-muted mt-1';
const optionClass =
  'flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-white text-sm text-foreground cursor-pointer transition-colors hover:border-accent has-[:checked]:border-accent has-[:checked]:bg-accent-light';

const RequiredMark = () => (
  <span aria-hidden className="text-accent">
    {' '}
    *
  </span>
);

function FieldHeading({ field }: { field: IntakeField }) {
  return (
    <>
      {field.label}
      {field.required && <RequiredMark />}
    </>
  );
}

function ChoiceInput({ field, showMissing }: { field: ChoiceField; showMissing: boolean }) {
  const [otherChecked, setOtherChecked] = useState(false);
  const name = `entry.${field.entry}`;
  // A required checkbox group can't use the native `required`, that would force every box.
  const nativeRequired = field.type === 'radio' && field.required;

  return (
    <fieldset id={`field-${field.entry}`} className="scroll-mt-24">
      <legend className={labelClass}>
        <FieldHeading field={field} />
      </legend>
      <div className="mt-2 space-y-2">
        {field.options.map((option) => (
          <label key={option} className={optionClass}>
            <input type={field.type} name={name} value={option} required={nativeRequired} className="accent-accent" />
            {option}
          </label>
        ))}
        {field.allowOther && (
          <label className={optionClass}>
            <input
              type={field.type}
              name={name}
              value={OTHER_VALUE}
              checked={otherChecked}
              onChange={(e) => setOtherChecked(e.target.checked)}
              className="accent-accent"
            />
            <span className="shrink-0">אחר:</span>
            <input
              type="text"
              name={`${name}.other_option_response`}
              required={otherChecked}
              aria-label="אחר"
              onChange={(e) => {
                if (e.target.value) setOtherChecked(true);
              }}
              className="min-w-0 flex-1 bg-transparent border-b border-border focus:outline-none focus:border-accent transition-colors"
            />
          </label>
        )}
      </div>
      {showMissing && (
        <p role="alert" className="text-sm text-red-500 mt-2">
          יש לבחור לפחות אפשרות אחת
        </p>
      )}
    </fieldset>
  );
}

export default function IntakeForm() {
  const [state, setState] = useState<FormState>('idle');
  const [missingEntry, setMissingEntry] = useState<string | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // The form collapses into a short panel, so bring that panel into view.
  useEffect(() => {
    if (state === 'success') successRef.current?.scrollIntoView({ block: 'center' });
  }, [state]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Not using <form action>: React resets the form after an action, which
    // would wipe a long set of answers if Google rejects the submission.
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const missing = intakeFields.find(
      (f) => f.type === 'checkbox' && f.required && data.getAll(`entry.${f.entry}`).length === 0,
    );
    if (missing) {
      setMissingEntry(missing.entry);
      document.getElementById(`field-${missing.entry}`)?.scrollIntoView({ block: 'center' });
      return;
    }

    setState('loading');
    try {
      const { ok } = await submitIntake(data);
      setState(ok ? 'success' : 'error');
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div ref={successRef} className="p-8 rounded-2xl text-center bg-accent-light">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-accent">
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22" aria-hidden>
            <path d="M4 11l5 5 9-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          תודה, קיבלתי!
        </h2>
        <p className="text-sm text-muted mb-6">עכשיו נשאר רק לשלוח לי את הלוגו והתמונות של העסק בוואטסאפ.</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-accent transition-opacity hover:opacity-90"
        >
          שליחה בוואטסאפ
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onChange={() => setMissingEntry(null)} className="space-y-7">
      {/* Honeypot: hidden from real users, bots fill it and the submission is dropped */}
      <input
        type="text"
        name={HONEYPOT_NAME}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 opacity-0 [clip:rect(0,0,0,0)]"
      />

      {intakeFields.map((field) => {
        if (isChoiceField(field)) {
          return <ChoiceInput key={field.entry} field={field} showMissing={missingEntry === field.entry} />;
        }

        const id = `field-${field.entry}`;
        const name = `entry.${field.entry}`;
        const hintId = field.hint ? `${id}-hint` : undefined;

        return (
          <div key={field.entry}>
            <label htmlFor={id} className={labelClass}>
              <FieldHeading field={field} />
            </label>
            {field.hint && (
              <p id={hintId} className={hintClass}>
                {field.hint}
              </p>
            )}
            <div className="mt-2">
              {field.type === 'textarea' ? (
                <textarea
                  id={id}
                  name={name}
                  rows={3}
                  required={field.required}
                  aria-describedby={hintId}
                  className={`${inputClass} resize-none`}
                />
              ) : (
                <input
                  id={id}
                  name={name}
                  type={field.type}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  aria-describedby={hintId}
                  className={inputClass}
                />
              )}
            </div>
          </div>
        );
      })}

      {state === 'error' && (
        <p role="alert" className="text-sm text-red-500">
          משהו השתבש בשליחה. אפשר לנסות שוב או לכתוב לי בוואטסאפ.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-semibold text-white bg-accent transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {state === 'loading' ? 'שולח...' : 'שליחה'}
      </button>
    </form>
  );
}
