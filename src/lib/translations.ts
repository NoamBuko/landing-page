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
      { num: '1–2', label: 'Month delivery' },
      { num: '100%', label: 'Custom-built' },
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
          title: 'End-to-end delivery',
          desc: 'From order forms to payment processing to automated reports — I handle the full stack so you get a complete solution, not just a partial one.',
        },
        {
          title: 'Replaces hours of manual work',
          desc: 'What used to take hours of copy-pasting and manual entry becomes a single click. Your time is better spent growing the business.',
        },
        {
          title: 'Clean admin dashboards',
          desc: 'Every system comes with a simple, intuitive admin panel so anyone on your team can manage it — no technical knowledge needed.',
        },
        {
          title: 'Fast turnaround',
          desc: 'Solo developer means no agency overhead. Most projects are fully delivered in 1–2 months, with progress updates throughout.',
        },
        {
          title: 'Long-term support',
          desc: "I don't disappear after launch. Need a tweak six months later? I'm available, and I know the codebase inside and out.",
        },
      ],
    },
    about: {
      label: 'About me',
      h2Lines: ["Hi, I'm Noam.", 'I build software that', 'saves you hours', 'every week.'],
      p1: "I build software for business owners who are tired of doing things the hard way. If you spend hours every week on something repetitive — tracking orders, chasing payments, organising schedules — there's a good chance I can build something that handles it for you automatically.",
      p2: "You don't need to know anything about technology. Just tell me how your business works and what's slowing you down — I handle the rest and show you something working within weeks.",
      p3: 'You work with me directly, start to finish. No confusion, no runaround.',
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
      { num: '1–2', label: 'חודש אספקה' },
      { num: '100%', label: 'בנוי בהתאמה אישית' },
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
          title: 'פתרון מקצה לקצה',
          desc: 'מטפסי הזמנות ועד עיבוד תשלומים ודוחות אוטומטיים — אני מטפל בהכל כדי שתקבלו פתרון שלם.',
        },
        {
          title: 'מחליף שעות של עבודה ידנית',
          desc: 'מה שנהג לקחת שעות של העתקה-הדבקה הופך ללחיצה אחת. הזמן שלכם שווה יותר.',
        },
        {
          title: 'ממשקי ניהול נקיים',
          desc: 'כל מערכת מגיעה עם פאנל ניהול פשוט ואינטואיטיבי — ללא צורך בידע טכנולוגי.',
        },
        {
          title: 'זמן פיתוח מהיר',
          desc: 'מפתח עצמאי בלי תקורה של סוכנות. רוב הפרויקטים מסופקים תוך 1–2 חודשים עם עדכונים שוטפים.',
        },
        {
          title: 'תמיכה לטווח ארוך',
          desc: 'אני לא נעלם אחרי ההשקה. צריכים שינוי קטן חצי שנה אחרי? אני זמין ומכיר את הקוד מבפנים.',
        },
      ],
    },
    about: {
      label: 'אודותיי',
      h2Lines: ['היי, אני נועם.', 'אני בונה תוכנה', 'שחוסכת לכם', 'שעות בכל שבוע.'],
      p1: 'אני בונה תוכנה לבעלי עסקים שנמאס להם לעשות דברים בדרך הקשה. אם אתם מבלים שעות בכל שבוע על משהו שחוזר על עצמו — מעקב הזמנות, גביית תשלומים, ארגון לוחות זמנים — יש סיכוי טוב שאוכל לבנות משהו שיעשה את זה בשבילכם אוטומטית.',
      p2: 'אתם לא צריכים לדעת כלום על טכנולוגיה. פשוט ספרו לי איך העסק שלכם עובד ומה מעכב אתכם — אני מטפל בשאר ומראה לכם משהו עובד תוך שבועות.',
      p3: 'אתם עובדים איתי ישירות, מהתחלה ועד הסוף. בלי בלבול, בלי ריצות.',
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
