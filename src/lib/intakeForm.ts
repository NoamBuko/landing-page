import type { Lang } from '@/lib/translations';

// Client intake form shown at /he/start and /en/start. Answers are sent to
// Formspree (NEXT_PUBLIC_FORMSPREE_START_ID). `key` is the label you see in the
// Formspree inbox and CSV export; it stays in English for both languages so
// all submissions share the same columns.

type Localized = Record<Lang, string>;

interface BaseField {
  name: string;
  key: string;
  label: Localized;
  hint?: Localized;
  required: boolean;
}

export interface TextField extends BaseField {
  type: 'text' | 'tel' | 'textarea';
  autoComplete?: string;
  placeholder?: Localized;
}

export interface ChoiceField extends BaseField {
  type: 'radio' | 'checkbox';
  options: Localized[];
  allowOther?: boolean;
}

export type IntakeField = TextField | ChoiceField;

export function isChoiceField(field: IntakeField): field is ChoiceField {
  return field.type === 'radio' || field.type === 'checkbox';
}

export const OTHER_VALUE = '__other__';

export const intakeFields: IntakeField[] = [
  {
    name: 'name',
    key: 'Full name',
    type: 'text',
    label: { he: 'שם מלא', en: 'Full name' },
    required: true,
    autoComplete: 'name',
  },
  {
    name: 'phone',
    key: 'Phone',
    type: 'tel',
    label: { he: 'מספר טלפון', en: 'Phone number' },
    placeholder: { he: '050-000-0000', en: '050-000-0000' },
    required: true,
    autoComplete: 'tel',
  },
  {
    name: 'business',
    key: 'Business name',
    type: 'text',
    label: { he: 'שם העסק', en: 'Business name' },
    required: true,
    autoComplete: 'organization',
  },
  {
    name: 'about',
    key: 'What the business does',
    type: 'textarea',
    label: { he: 'מה העסק שלך עושה?', en: 'What does your business do?' },
    hint: { he: 'משפט או שניים זה מספיק', en: 'A sentence or two is enough' },
    required: true,
  },
  {
    name: 'customers',
    key: 'Customers',
    type: 'textarea',
    label: { he: 'מי הלקוחות שלך?', en: 'Who are your customers?' },
    hint: {
      he: 'למשל: בעלי עסקים קטנים, משפחות צעירות, אזור מסוים',
      en: 'For example: small business owners, young families, a specific area',
    },
    required: true,
  },
  {
    name: 'services',
    key: 'Main services / products',
    type: 'textarea',
    label: { he: 'מה 3-4 השירותים / המוצרים העיקריים שלך?', en: 'What are your 3–4 main services or products?' },
    required: true,
  },
  {
    name: 'unique',
    key: 'What sets them apart',
    type: 'textarea',
    label: {
      he: 'מה מייחד אותך מהמתחרים? למה לקוחות בוחרים בך?',
      en: 'What sets you apart from competitors? Why do customers choose you?',
    },
    required: true,
  },
  {
    name: 'goal',
    key: 'Page goal',
    type: 'checkbox',
    label: {
      he: 'מה המטרה העיקרית של הדף? מה תרצה שהגולשים יעשו?',
      en: 'What is the main goal of the page? What should visitors do?',
    },
    hint: { he: 'אפשר לבחור יותר מאחת', en: 'You can pick more than one' },
    options: [
      { he: 'יתקשרו אליי', en: 'Call me' },
      { he: 'ישלחו לי הודעה בוואטסאפ', en: 'Message me on WhatsApp' },
      { he: 'ישאירו פרטים', en: 'Leave their details' },
      { he: 'יקבעו תור / פגישה', en: 'Book an appointment / meeting' },
      { he: 'יקנו מוצר', en: 'Buy a product' },
    ],
    allowOther: true,
    required: true,
  },
  {
    name: 'details',
    key: 'Details to show on the page',
    type: 'textarea',
    label: { he: 'פרטים שיופיעו בדף', en: 'Details to show on the page' },
    hint: {
      he: 'טלפון, כתובת, אימייל, שעות פעילות, אינסטגרם / פייסבוק – מה שרלוונטי',
      en: "Phone, address, email, opening hours, Instagram / Facebook – whatever's relevant",
    },
    required: true,
  },
  {
    name: 'assets',
    key: 'Logo / brand / photos',
    type: 'radio',
    label: {
      he: 'יש לך לוגו, צבעים של המותג או תמונות של העסק?',
      en: 'Do you have a logo, brand colors or photos of the business?',
    },
    options: [
      { he: 'כן, אשלח בוואטסאפ', en: "Yes, I'll send them on WhatsApp" },
      { he: 'חלק', en: 'Some of them' },
      { he: 'לא, אשמח לעזרה', en: "No, I'd love some help" },
    ],
    required: true,
  },
  {
    name: 'pageLanguage',
    key: 'Page language',
    type: 'radio',
    label: { he: 'באיזו שפה הדף צריך להיות?', en: 'Which language should the page be in?' },
    options: [
      { he: 'עברית', en: 'Hebrew' },
      { he: 'אנגלית', en: 'English' },
      { he: 'שתיהן', en: 'Both' },
    ],
    required: false,
  },
  {
    name: 'notes',
    key: 'Anything else',
    type: 'textarea',
    label: { he: 'יש משהו נוסף שחשוב שאדע?', en: 'Anything else I should know?' },
    required: false,
  },
];

export const intakeSteps: { title: Localized; sub: Localized; fields: string[] }[] = [
  {
    title: { he: 'קצת עליך', en: 'About you' },
    sub: { he: 'כדי שאדע איך לחזור אליך', en: 'So I know how to reach you' },
    fields: ['name', 'phone', 'business'],
  },
  {
    title: { he: 'העסק שלך', en: 'Your business' },
    sub: { he: 'מכאן אכתוב את הטקסטים לדף', en: "This is what I'll write the page from" },
    fields: ['about', 'customers', 'services', 'unique'],
  },
  {
    title: { he: 'הדף שלך', en: 'Your page' },
    sub: { he: 'עוד רגע מסיימים', en: 'Almost done' },
    fields: ['goal', 'details', 'assets', 'pageLanguage', 'notes'],
  },
];

export const intakeCopy = {
  he: {
    metaTitle: 'טופס היכרות – דף נחיתה לעסק שלך',
    metaDescription: 'כמה שאלות קצרות (כ-5 דקות) כדי שאוכל להתחיל לבנות את הגרסה הראשונה של דף הנחיתה שלך.',
    brandTag: 'דפי נחיתה',
    eyebrow: 'טופס היכרות',
    h1: 'דף נחיתה לעסק שלך',
    intro: 'היי! כדי שאוכל להתחיל לבנות את הגרסה הראשונה של דף הנחיתה שלך, אשמח שתענו על כמה שאלות קצרות.',
    introNote: 'את הלוגו ותמונות של העסק שלחו לי בוואטסאפ 🙂',
    duration: 'כ-5 דקות',
    switchLabel: 'English',
    stepOf: (n: number, total: number) => `שלב ${n} מתוך ${total}`,
    optional: 'לא חובה',
    other: 'אחר',
    otherPlaceholder: 'פרטו כאן',
    required: 'שדה חובה',
    pickOne: 'יש לבחור לפחות אפשרות אחת',
    fillOther: 'מה הכוונה ב"אחר"?',
    badPhone: 'נראה שחסרות ספרות במספר',
    back: 'חזרה',
    next: 'המשך',
    submit: 'שליחה',
    sending: 'שולח...',
    error: 'משהו השתבש בשליחה. אפשר לנסות שוב או לכתוב לי בוואטסאפ.',
    successTitle: 'תודה, קיבלתי!',
    successMsg: 'עכשיו נשאר רק לשלוח לי את הלוגו והתמונות של העסק בוואטסאפ.',
    successCta: 'שליחה בוואטסאפ',
    whatsappMessage: 'היי, מילאתי את טופס ההיכרות. הנה הלוגו והתמונות של העסק 🙂',
    subject: (business: string) => `טופס היכרות חדש: ${business}`,
  },
  en: {
    metaTitle: 'Getting started – a landing page for your business',
    metaDescription: 'A few short questions (about 5 minutes) so I can start building the first version of your landing page.',
    brandTag: 'Landing pages',
    eyebrow: 'Getting started',
    h1: 'A landing page for your business',
    intro: "Hi! To start building the first version of your landing page, please answer a few short questions.",
    introNote: 'Send me your logo and photos of the business on WhatsApp 🙂',
    duration: 'About 5 minutes',
    switchLabel: 'עברית',
    stepOf: (n: number, total: number) => `Step ${n} of ${total}`,
    optional: 'Optional',
    other: 'Other',
    otherPlaceholder: 'Tell me more',
    required: 'This field is required',
    pickOne: 'Please pick at least one option',
    fillOther: 'What do you mean by "Other"?',
    badPhone: 'This number looks too short',
    back: 'Back',
    next: 'Continue',
    submit: 'Send',
    sending: 'Sending...',
    error: 'Something went wrong. Please try again or message me on WhatsApp.',
    successTitle: 'Thanks, got it!',
    successMsg: 'All that is left is to send me your logo and photos of the business on WhatsApp.',
    successCta: 'Send on WhatsApp',
    whatsappMessage: "Hi, I filled in the intake form. Here's my logo and photos of the business 🙂",
    subject: (business: string) => `New intake form: ${business}`,
  },
};
