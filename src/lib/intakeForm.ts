// Mirrors the Google Form "טופס היכרות – דף נחיתה לעסק שלך". Answers are still
// stored by Google; only the UI is ours. If a question or option changes in the
// Google Form, change it here too: entry IDs and option text must match exactly
// or Google rejects the submission.
export const FORM_RESPONSE_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdGBzxuh0wvUr1QQHzRS44eX86NhnacBkquz5akyGkRip93CQ/formResponse';

// Google's reserved value for a checked "Other" option. The free text goes in
// a sibling `entry.<id>.other_option_response` param.
export const OTHER_VALUE = '__other_option__';

export const HONEYPOT_NAME = 'company_website';

interface BaseField {
  entry: string;
  label: string;
  hint?: string;
  required: boolean;
}

export interface TextField extends BaseField {
  type: 'text' | 'tel' | 'textarea';
  autoComplete?: string;
}

export interface ChoiceField extends BaseField {
  type: 'radio' | 'checkbox';
  options: string[];
  allowOther?: boolean;
}

export type IntakeField = TextField | ChoiceField;

export function isChoiceField(field: IntakeField): field is ChoiceField {
  return field.type === 'radio' || field.type === 'checkbox';
}

export const intakeFields: IntakeField[] = [
  { entry: '1789917383', type: 'text', label: 'שם מלא', required: true, autoComplete: 'name' },
  { entry: '1203396692', type: 'tel', label: 'מספר טלפון', required: true, autoComplete: 'tel' },
  { entry: '1662398868', type: 'text', label: 'שם העסק', required: true, autoComplete: 'organization' },
  { entry: '1181272673', type: 'textarea', label: 'מה העסק שלך עושה? (משפט–שניים)', required: true },
  {
    entry: '118416764',
    type: 'textarea',
    label: 'מי הלקוחות שלך?',
    hint: 'למשל: בעלי עסקים קטנים, משפחות צעירות, אזור מסוים',
    required: true,
  },
  {
    entry: '1922326396',
    type: 'checkbox',
    label: 'מה המטרה העיקרית של הדף? מה תרצה שהגולשים יעשו?',
    options: ['יתקשרו אליי', 'ישלחו לי הודעה בוואטסאפ', 'ישאירו פרטים', 'יקבעו תור / פגישה', 'יקנו מוצר'],
    allowOther: true,
    required: true,
  },
  { entry: '1091448012', type: 'textarea', label: 'מה 3-4 השירותים / המוצרים העיקריים שלך?', required: true },
  { entry: '1197748994', type: 'textarea', label: 'מה מייחד אותך מהמתחרים? למה לקוחות בוחרים בך?', required: true },
  {
    entry: '1672988812',
    type: 'textarea',
    label: 'פרטים שיופיעו בדף',
    hint: 'טלפון, כתובת, אימייל, שעות פעילות, אינסטגרם / פייסבוק – מה שרלוונטי',
    required: true,
  },
  {
    entry: '696334634',
    type: 'radio',
    label: 'יש לך לוגו, צבעים של המותג או תמונות של העסק?',
    options: ['כן, אשלח בואצאפ', 'חלק', 'לא, אשמח לעזרה'],
    required: true,
  },
  {
    entry: '213181448',
    type: 'radio',
    label: 'באיזו שפה הדף צריך להיות?',
    options: ['אנגלית', 'עברית', 'שתיהם'],
    required: false,
  },
  { entry: '1693193780', type: 'textarea', label: 'יש משהו נוסף שחשוב שאדע?', required: false },
];
