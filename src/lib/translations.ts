export type Lang = 'en' | 'he';


export const t = {
  en: {
    dir: 'ltr' as const,
    nav: {
      work: 'My work',
      about: 'About me',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      eyebrow: 'Custom software',
      h1Lead: 'One system that ',
      h1Accent: 'runs your business.',
      sub: 'Whether you currently manage your business using WhatsApp, spreadsheets or a notebook — there is a better way.',
      cta1: "Let's build something →",
      cta2: 'See my work',
      scrollHint: 'Scroll to see more',
    },
    howItWorks: {
      label: 'How it works',
      h2: 'From your first message to a running system.',
      steps: [
        {
          num: '01',
          title: 'Show me how you work',
          desc: "I learn how your business operates — what you do manually, what's slowing you down, and what's worth automating.",
        },
        {
          num: '02',
          title: 'You get a clear quote',
          desc: 'I send you a fixed price and exactly what your system will include — full scope, no surprises — before any work begins.',
        },
        {
          num: '03',
          title: 'I build it',
          desc: 'I design and build a system that fits exactly how you work. You see real progress every week.',
        },
        {
          num: '04',
          title: 'You run it',
          desc: 'You get a clean, simple system your whole team can use from day one. I stay available for changes long after launch.',
        },
      ],
    },
    work: {
      label: 'My latest work',
      client: 'Pri Hadar',
      tagline: 'Fruit & vegetable platters',
      h2: 'Online ordering & operations system.',
      desc: 'Replaced a paper order book with a complete online ordering experience and an admin system that runs the whole operation.',
      features: [
        'Online ordering & payment',
        'Admin dashboard',
        'Orders management',
        'Delivery calendar',
      ],
      impact: [
        { label: 'Hours saved every week' },
        { label: 'No more forgotten orders' },
      ],
      bilingual: 'Customer-facing site in English & Hebrew',
      liveCta: 'Visit the live site →',
      liveUrl: 'https://order.prihadar.co.il',
      shotDashboardAlt: 'Admin dashboard',
      shotCalendarAlt: 'Delivery calendar',
    },
    about: {
      label: 'About me',
      greeting: "Hi, I'm Noam.",
      bio: 'I spent two years building software at startups, then moved on to building custom software to save my mom hours of work every week running her business. Now let me build the software your business needs.',
    },
    faq: {
      label: 'FAQ',
      h2: 'Questions, answered.',
      items: [
        {
          q: 'What kind of systems do you build?',
          a: 'Whatever your business actually needs. I build fully custom systems designed around how you work — online ordering, scheduling, payments, admin dashboards, internal tools and more. If a manual process is slowing you down, it can probably be built into something better.',
        },
        {
          q: 'Do I need to be technical to use it?',
          a: 'Not at all. I build everything to be simple enough that you and your team can use it from day one — and I’ll walk you through it so nothing feels unfamiliar.',
        },
        {
          q: 'What if I’m not sure exactly what I need?',
          a: 'That’s completely normal — most people aren’t. Figuring it out together is exactly what the first step is for. You just tell me about your business, and we’ll shape the solution from there.',
        },
        {
          q: 'How much does it cost?',
          a: 'Every project gets a fixed price upfront. Before any work begins, I send you a clear quote with exactly what your system will include — so you know the full cost from the start, with no surprises.',
        },
        {
          q: 'How long does it take?',
          a: 'It depends on what you need — a simple scheduling tool and a full ordering system are very different projects. You get a clear timeline together with your quote, before we start.',
        },
        {
          q: 'What happens after launch?',
          a: 'You’re never left on your own. I stand behind everything I build, so anything on me I’ll take care of, no charge — and when you’re ready to add new features down the line, I’m one message away.',
        },
        {
          q: 'Do I own the system?',
          a: 'Completely. The code, the website, and every account it runs on are in your name — never mine. It’s yours to keep, no strings attached.',
        },
      ],
    },
    contact: {
      label: 'Get in touch',
      h2: 'Tell me about your business.',
      sub: "Tell me what's slowing you down. I'll reach out to learn more.",
      nameLabel: 'Your name',
      namePlaceholder: '',
      phoneLabel: 'Phone number',
      phonePlaceholder: '',
      msgLabel: 'Anything you want to add or ask? (optional)',
      msgPlaceholder: "A question, a detail, or whatever's on your mind...",
      submitBtn: 'Send message',
      orWhatsapp: 'Message me on WhatsApp',
      whatsappMessage: 'Hi Noam, I came from your website and I\'d love to hear more.',
      noCommit: 'No commitment. Just a conversation.',
      successTitle: 'Message sent!',
      successMsg: "Thanks for reaching out. I'll get back to you shortly.",
      errorMsg: 'Something went wrong. Please try again or message me on WhatsApp.',
    },
    footer: {
      copyright: '© 2025 Noam Bukobza',
    },
  },
  he: {
    dir: 'rtl' as const,
    nav: {
      work: 'העבודות שלי',
      about: 'אודותיי',
      faq: 'שאלות נפוצות',
      contact: 'צור קשר',
      cta: 'בואו נדבר',
    },
    hero: {
      eyebrow: 'תוכנה מותאמת אישית',
      h1Lead: 'מערכת אחת ',
      h1Accent: 'שמנהלת את העסק שלכם.',
      sub: 'בין אם אתם מנהלים את העסק שלכם דרך וואטסאפ, אקסל או פנקס — יש דרך טובה יותר.',
      cta1: 'בואו נבנה משהו ←',
      cta2: 'ראו את העבודות שלי',
      scrollHint: 'גללו כדי לראות עוד',
    },
    howItWorks: {
      label: 'איך זה עובד',
      h2: 'מההודעה הראשונה שלכם למערכת עובדת.',
      steps: [
        {
          num: '01',
          title: 'הראו לי איך אתם עובדים',
          desc: "אני מבין איך העסק שלכם פועל — מה אתם עושים ידנית, מה מאט אתכם, ומה ניתן לשפר.",
        },
        {
          num: '02',
          title: 'מקבלים הצעת מחיר ברורה',
          desc: 'אני שולח לכם מחיר סגור ובדיוק מה שהמערכת תכלול — כל הפרטים, בלי הפתעות — לפני שמתחילים לעבוד.',
        },
        {
          num: '03',
          title: 'אני בונה',
          desc: 'אני מתכנן ובונה מערכת שמתאימה בדיוק לאיך שאתם עובדים. אתם רואים התקדמות אמיתית בכל שבוע.',
        },
        {
          num: '04',
          title: 'אתם מנהלים',
          desc: 'אתם מקבלים מערכת פשוטה שכל הצוות יכול להשתמש בה מהיום הראשון. אני זמין לשינויים גם אחרי ההשקה.',
        },
      ],
    },
    work: {
      label: 'הפרויקט האחרון שלי',
      client: 'פרי הדר',
      tagline: 'מגשי פירות וירקות',
      h2: 'מערכת הזמנות וניהול אונליין.',
      desc: 'החלפנו פנקס הזמנות ידני בחוויית הזמנה מקוונת מלאה ובמערכת ניהול שמפעילה את כל העסק.',
      features: [
        'הזמנות ותשלום אונליין',
        'דשבורד ניהול',
        'ניהול הזמנות',
        'יומן משלוחים',
      ],
      impact: [
        { label: 'חיסכון של שעות עבודה בכל שבוע' },
        { label: 'אין יותר הזמנות שנשכחות' },
      ],
      bilingual: 'אתר ההזמנות זמין באנגלית ובעברית',
      liveCta: 'בקרו באתר ←',
      liveUrl: 'https://order.prihadar.co.il',
      shotDashboardAlt: 'דשבורד ניהול',
      shotCalendarAlt: 'יומן משלוחים',
    },
    about: {
      label: 'אודותיי',
      greeting: 'היי, אני נועם.',
      bio: 'במשך שנתיים בניתי תוכנה בסטארטאפים, ואז עברתי לבנות תוכנה מותאמת אישית כדי לחסוך לאמא שלי שעות של עבודה בכל שבוע בניהול העסק שלה. עכשיו תנו לי לבנות את התוכנה שהעסק שלכם צריך.',
    },
    faq: {
      label: 'שאלות נפוצות',
      h2: 'שאלות? יש לי תשובות.',
      items: [
        {
          q: 'אילו מערכות אתה בונה?',
          a: 'מה שהעסק שלכם באמת צריך. אני בונה מערכות מותאמות אישית לחלוטין, מתוכננות סביב איך שאתם עובדים — הזמנות אונליין, ניהול תורים, תשלומים, דשבורד ניהול, כלים פנימיים ועוד. אם תהליך ידני מעכב אתכם, כנראה אפשר לבנות לו פתרון טוב יותר.',
        },
        {
          q: 'צריך ידע טכני כדי להשתמש במערכת?',
          a: 'ממש לא. אני בונה הכל כך שיהיה פשוט מספיק שאתם והצוות שלכם תוכלו להשתמש בו מהיום הראשון — ואני אעבור איתכם על הכל לפני ההשקה.',
        },
        {
          q: 'מה אם אני לא בטוח מה בדיוק אני צריך?',
          a: 'זה לגמרי נורמלי. אני אעזור לכם להבין. אתם פשוט מספרים לי על העסק שלכם, ומשם נעצב את הפתרון.',
        },
        {
          q: 'כמה זה עולה?',
          a: 'כל פרויקט מקבל מחיר סגור מראש. לפני שמתחילים לעבוד, אני שולח לכם הצעת מחיר ברורה עם בדיוק מה שהמערכת תכלול — כך שאתם יודעים את העלות המלאה כבר מההתחלה, בלי הפתעות.',
        },
        {
          q: 'כמה זמן זה לוקח?',
          a: 'זה תלוי במה שאתם צריכים — אפליקציית תורים פשוטה ומערכת הזמנות מלאה הן פרויקטים שונים לגמרי. אתם מקבלים לוח זמנים ברור יחד עם הצעת המחיר, לפני שמתחילים.',
        },
        {
          q: 'מה קורה אחרי ההשקה?',
          a: 'אתם אף פעם לא לבד. אני עומד מאחורי כל מה שאני בונה, וכל דבר שתלוי בי אני מטפל בו ללא תשלום — וכשתרצו להוסיף יכולות בהמשך, אני במרחק הודעה.',
        },
        {
          q: 'האם המערכת בבעלותי?',
          a: 'לחלוטין. הקוד, האתר וכל חשבון שהמערכת רצה עליו רשומים על שמכם — אף פעם לא על שמי. הכל שלכם, בלי שום מחויבות.',
        },
      ],
    },
    contact: {
      label: 'צרו קשר',
      h2: 'ספרו לי על העסק שלכם.',
      sub: 'ספרו לי מה עוצר אתכם. אפנה אליכם לשמוע עוד.',
      nameLabel: 'שמכם',
      namePlaceholder: '',
      phoneLabel: 'מספר טלפון',
      phonePlaceholder: '',
      msgLabel: 'רוצים להוסיף או לשאול משהו? (אופציונלי)',
      msgPlaceholder: 'שאלה, פרט קטן, או כל מה שעולה לכם בראש...',
      submitBtn: 'שלחו הודעה',
      orWhatsapp: 'שלחו הודעה בוואטסאפ',
      whatsappMessage: 'היי נועם, הגעתי מהאתר ואשמח לשמוע עוד.',
      noCommit: 'ללא התחייבות. רק שיחה.',
      successTitle: 'ההודעה נשלחה!',
      successMsg: 'תודה על הפנייה. אחזור אליכם בהקדם.',
      errorMsg: 'משהו השתבש. נסו שוב או שלחו הודעה בוואטסאפ.',
    },
    footer: {
      copyright: '© 2025 נועם בוקובזה',
    },
  },
} as const;

export type Translations = (typeof t)[Lang];
