'use server';
import { FORM_RESPONSE_URL, HONEYPOT_NAME, OTHER_VALUE, intakeFields, isChoiceField } from '@/lib/intakeForm';

export async function submitIntake(formData: FormData): Promise<{ ok: boolean }> {
  // Pretend success so bots that fill the honeypot don't retry.
  if (formData.get(HONEYPOT_NAME)) return { ok: true };

  // Only known questions and options are forwarded to Google.
  const body = new URLSearchParams();
  for (const field of intakeFields) {
    const name = `entry.${field.entry}`;

    if (isChoiceField(field)) {
      for (const value of formData.getAll(name)) {
        if (typeof value === 'string' && field.options.includes(value)) body.append(name, value);
        if (value === OTHER_VALUE && field.allowOther) {
          body.append(name, OTHER_VALUE);
          const otherName = `${name}.other_option_response`;
          body.append(otherName, String(formData.get(otherName) ?? ''));
        }
      }
    } else {
      body.append(name, String(formData.get(name) ?? ''));
    }
  }

  try {
    // Google answers 200 when the response is recorded and 400 when it fails validation.
    const res = await fetch(FORM_RESPONSE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) console.error(`Google Form rejected intake submission: ${res.status}`);
    return { ok: res.ok };
  } catch (error) {
    console.error('Google Form intake submission failed', error);
    return { ok: false };
  }
}
