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
      sub: 'I build tailored management systems that replace manual work — orders, payments, scheduling, reporting — so you can focus on running your business.',
      cta1: "Let's build something →",
      cta2: 'See my work',
    },
    stats: [
      { num: '100%', label: 'Custom-built' },
      { num: '0→100', label: 'Design to deployment' },
      { num: 'EN+HE', label: 'Bilingual' },
      { num: '24/6', label: 'Long-term support' },
    ],
    howItWorks: {
      label: 'How it works',
      h2: 'From conversation to working system.',
      steps: [
        {
          num: '01',
          title: 'Tell me how you work',
          desc: "We hop on a free call or meet in person. You walk me through your business and what's eating your time.",
        },
        {
          num: '02',
          title: 'I build it',
          desc: 'I design and build a system that fits exactly how you work — not a generic tool adapted to fit. You see real progress every week.',
        },
        {
          num: '03',
          title: 'You run it',
          desc: 'You get a clean, simple system your whole team can use from day one. I stay available for changes long after launch.',
        },
      ],
    },
    valueProps: {
      label: 'What you get',
      h2a: 'Software that works the way ',
      h2b: 'you',
      h2c: ' work.',
      items: [
        {
          title: 'Built around your workflow',
          desc: 'No generic off-the-shelf tools. I learn how your business works and build software that fits it exactly — not the other way around.',
        },
        {
          title: 'Replaces hours of manual work',
          desc: 'What used to take hours of copy-pasting and manual entry becomes a single click. Your time is better spent growing the business.',
        },
        {
          title: 'Clean admin dashboards',
          desc: 'Every system comes with a simple, intuitive admin panel so anyone on your team can manage it — no technical knowledge needed.',
        },
      ],
    },
    about: {
      label: 'About me',
      bio: "Hi, I'm Noam.\nI'm a software developer with years of experience. I build software that saves you hours every week.",
      accentPhrase: 'hours every week',
    },
    contact: {
      label: 'Get in touch',
      h2: 'Tell me about your business.',
      sub: "Describe what's currently slowing you down. I'll reply within 24 hours to set up a free call.",
      nameLabel: 'Your name',
      namePlaceholder: 'Jane Smith',
      emailLabel: 'Email address',
      emailPlaceholder: 'jane@business.com',
      bizLabel: 'Your business',
      bizPlaceholder: 'e.g. Bakery, salon, logistics company...',
      msgLabel: "What's slowing you down?",
      msgPlaceholder: "Describe the manual work or process you'd love to automate...",
      submitBtn: 'Send message →',
      orWhatsapp: 'Or message me on WhatsApp →',
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
      sub: 'אני בונה מערכות ניהול מותאמות שמחליפות עבודה ידנית — הזמנות, תשלומים, לוחות זמנים, דוחות — כדי שתוכלו להתמקד בניהול העסק.',
      cta1: '← בואו נבנה משהו',
      cta2: 'ראו את העבודות שלי',
    },
    stats: [
      { num: '100%', label: 'בהתאמה אישית' },
      { num: '0→100', label: 'מעיצוב עד השקה' },
      { num: 'EN+HE', label: 'דו-לשוני' },
      { num: '24/6', label: 'תמיכה לטווח ארוך' },
    ],
    howItWorks: {
      label: 'איך זה עובד',
      h2: 'משיחה למערכת עובדת.',
      steps: [
        {
          num: '01',
          title: 'ספרו לי על העסק',
          desc: "שיחה חינמית או פגישה פנים אל פנים. אתם מסבירים לי מה עוצר אתכם בעבודה היומיומית.",
        },
        {
          num: '02',
          title: 'אני בונה',
          desc: 'אני מתכנן ובונה מערכת שמתאימה בדיוק לאיך שאתם עובדים — לא כלי גנרי. אתם רואים התקדמות אמיתית בכל שבוע.',
        },
        {
          num: '03',
          title: 'אתם מנהלים',
          desc: 'אתם מקבלים מערכת פשוטה שכל הצוות יכול להשתמש בה מהיום הראשון. אני זמין לשינויים גם אחרי ההשקה.',
        },
      ],
    },
    valueProps: {
      label: 'מה תקבלו',
      h2a: 'תוכנה שעובדת בדיוק כמו ש',
      h2b: 'אתם',
      h2c: ' עובדים.',
      items: [
        {
          title: 'בנוי סביב תהליך העבודה שלכם',
          desc: 'אין כלים גנריים. אני לומד איך העסק שלכם עובד ובונה תוכנה שמתאימה בדיוק — לא להיפך.',
        },
        {
          title: 'מחליף שעות של עבודה ידנית',
          desc: 'מה שנהג לקחת שעות של העתקה-הדבקה הופך ללחיצה אחת. הזמן שלכם שווה יותר.',
        },
        {
          title: 'ממשקי ניהול נקיים',
          desc: 'כל מערכת מגיעה עם פאנל ניהול פשוט ואינטואיטיבי — ללא צורך בידע טכנולוגי.',
        },
      ],
    },
    about: {
      label: 'אודותיי',
      bio: 'היי, אני נועם. מפתח תוכנה עם שנים של ניסיון. אני בונה תוכנה שחוסכת לכם שעות בכל שבוע.',
      accentPhrase: 'שעות בכל שבוע',
    },
    contact: {
      label: 'צרו קשר',
      h2: 'ספרו לי על העסק שלכם.',
      sub: 'תארו מה עוצר אתכם עכשיו. אחזור אליכם תוך 24 שעות לשיחה ראשונית.',
      nameLabel: 'שמכם',
      namePlaceholder: 'ישראל ישראלי',
      emailLabel: 'כתובת מייל',
      emailPlaceholder: 'israel@business.co.il',
      bizLabel: 'העסק שלכם',
      bizPlaceholder: 'למשל: מאפייה, מספרה, חברת לוגיסטיקה...',
      msgLabel: 'מה עוצר אתכם?',
      msgPlaceholder: 'תארו את העבודה הידנית שהייתם רוצים לאוטמט...',
      submitBtn: '← שלחו הודעה',
      orWhatsapp: '← שלחו הודעה בוואטסאפ',
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
