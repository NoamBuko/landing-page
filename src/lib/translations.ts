export type Lang = 'en' | 'he';


export const t = {
  en: {
    dir: 'ltr' as const,
    nav: {
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      h1: ['Custom software', 'built for your business.'],
      accentLine: 'built for your business.',
      sub: 'I build custom software that eliminates manual work — orders, payments, scheduling, reporting — so you can focus on running your business.',
      cta1: "Let's build something →",
      cta2: 'See my work',
    },
    stats: [
      { num: '100%', label: 'Custom-built' },
      { num: '0→100', label: 'Idea to launch' },
      { num: 'EN+HE', label: 'Bilingual' },
      { num: '24/6', label: 'Long-term support' },
    ],
    howItWorks: {
      label: 'How it works',
      h2: 'From your first message to a running system.',
      steps: [
        {
          num: '01',
          title: 'Show me how you work',
          desc: "I learn exactly how your business operates — what you do manually, what's slowing you down, and what's worth automating.",
        },
        {
          num: '02',
          title: 'I build it',
          desc: 'I design and build a system that fits exactly how you work — not a generic tool you have to adapt to. You see real progress every week.',
        },
        {
          num: '03',
          title: 'You run it',
          desc: 'You get a clean, simple system your whole team can use from day one. I stay available for changes long after launch.',
        },
      ],
    },
    about: {
      label: 'About me',
      bio: "Hi, I'm Noam.\nI'm a full-stack developer who builds custom tools for small and medium businesses. I build software that saves you hours of work every week.",
      accentPhrase: 'hours of work every week',
    },
    contact: {
      label: 'Get in touch',
      h2: 'Tell me about your business.',
      sub: "Tell me what's slowing you down. I'll reach out to learn more.",
      nameLabel: 'Your name',
      namePlaceholder: 'Jane Smith',
      emailLabel: 'Email address',
      emailPlaceholder: 'jane@business.com',
      bizLabel: 'Your business',
      bizPlaceholder: 'e.g. Bakery, salon, logistics company...',
      msgLabel: 'Anything to add? (optional)',
      msgPlaceholder: 'What does a typical workday look like? What takes up most of your time?',
      submitBtn: 'Send message',
      orWhatsapp: 'Message me on WhatsApp',
      noCommit: 'No commitment. Just a conversation.',
      successTitle: 'Message sent!',
      successMsg: "Thanks for reaching out. I'll get back to you within 24 hours.",
      errorMsg: 'Something went wrong. Please try again or message me on WhatsApp.',
    },
    footer: {
      copyright: '© 2025 Noam Bukobza',
    },
  },
  he: {
    dir: 'rtl' as const,
    nav: {
      work: 'עבודות',
      about: 'אודות',
      contact: 'צור קשר',
      cta: 'בואו נדבר',
    },
    hero: {
      h1: ['תוכנה מותאמת אישית', 'בנויה בשביל העסק שלך.'],
      accentLine: 'בנויה בשביל העסק שלך.',
      sub: 'אני בונה תוכנה מותאמת שמבטלת עבודה ידנית — הזמנות, תשלומים, לוחות זמנים, דוחות — כדי שתוכלו להתמקד בניהול העסק.',
      cta1: '← בואו נבנה משהו',
      cta2: 'ראו את העבודות שלי',
    },
    stats: [
      { num: '100%', label: 'בהתאמה אישית' },
      { num: '0→100', label: 'מרעיון עד השקה' },
      { num: 'EN+HE', label: 'דו-לשוני' },
      { num: '24/6', label: 'תמיכה לטווח ארוך' },
    ],
    howItWorks: {
      label: 'איך זה עובד',
      h2: 'מההודעה הראשונה שלכם למערכת עובדת.',
      steps: [
        {
          num: '01',
          title: 'הראו לי איך אתם עובדים',
          desc: "אני לומד בדיוק איך העסק שלכם פועל — מה אתם עושים ידנית, מה מאט אתכם, ומה שווה לאוטמט.",
        },
        {
          num: '02',
          title: 'אני בונה',
          desc: 'אני מתכנן ובונה מערכת שמתאימה בדיוק לאיך שאתם עובדים — לא כלי גנרי שאתם צריכים להתאים את עצמכם אליו. אתם רואים התקדמות אמיתית בכל שבוע.',
        },
        {
          num: '03',
          title: 'אתם מנהלים',
          desc: 'אתם מקבלים מערכת פשוטה שכל הצוות יכול להשתמש בה מהיום הראשון. אני זמין לשינויים גם אחרי ההשקה.',
        },
      ],
    },
    about: {
      label: 'אודותיי',
      bio: 'היי, אני נועם. אני מפתח פול-סטאק שבונה כלים מותאמים לעסקים קטנים ובינוניים. אני בונה תוכנה שחוסכת לכם שעות עבודה בכל שבוע.',
      accentPhrase: 'שעות עבודה בכל שבוע',
    },
    contact: {
      label: 'צרו קשר',
      h2: 'ספרו לי על העסק שלכם.',
      sub: 'ספרו לי מה עוצר אתכם. אפנה אליכם לשמוע עוד.',
      nameLabel: 'שמכם',
      namePlaceholder: 'ישראל ישראלי',
      emailLabel: 'כתובת מייל',
      emailPlaceholder: 'israel@business.co.il',
      bizLabel: 'העסק שלכם',
      bizPlaceholder: 'למשל: מאפייה, מספרה, חברת לוגיסטיקה...',
      msgLabel: 'רוצים להוסיף משהו? (אופציונלי)',
      msgPlaceholder: 'איך נראה יום עבודה רגיל? מה לוקח לכם הכי הרבה זמן?',
      submitBtn: 'שלחו הודעה',
      orWhatsapp: 'שלחו הודעה בוואטסאפ',
      noCommit: 'ללא התחייבות. רק שיחה.',
      successTitle: 'ההודעה נשלחה!',
      successMsg: 'תודה על הפנייה. אחזור אליכם תוך 24 שעות.',
      errorMsg: 'משהו השתבש. נסו שוב או שלחו הודעה בוואטסאפ.',
    },
    footer: {
      copyright: '© 2025 נועם בוקובזה',
    },
  },
} as const;

export type Translations = (typeof t)[Lang];
