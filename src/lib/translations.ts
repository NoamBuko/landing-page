export type Lang = 'en' | 'he';


export const t = {
  en: {
    dir: 'ltr' as const,
    meta: {
      title: 'Landing Pages for Businesses in Israel | Noam Bukobza',
      description:
        'A custom landing page that brings you customers, for a fixed 2,000₪. Written, designed and live in 1–2 weeks. Based in Beit Shemesh, working across Israel.',
    },
    nav: {
      work: 'My work',
      about: 'About me',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      eyebrow: 'Custom-built for your business',
      h1Lead: 'A landing page that ',
      h1Accent: 'brings you customers.',
      sub: 'People find you, like what they see, and reach out. Simple as that.',
      cta1: 'Get your landing page →',
      cta2: 'See my work',
      stats: ['2,000₪ fixed price', 'Live in 1–2 weeks', 'No monthly fees'],
      scrollHint: 'Scroll to see more',
    },
    howItWorks: {
      label: 'How it works',
      h2: 'From one message to a page that brings customers.',
      steps: [
        {
          num: '01',
          title: 'Tell me about your business',
          desc: 'What you do, who your customers are, and what makes you different. A short chat is enough.',
        },
        {
          num: '02',
          title: 'I build your page',
          desc: "I write, design and build everything. You don't need to prepare anything.",
        },
        {
          num: '03',
          title: 'You give feedback',
          desc: 'You see the page before it goes live and tell me what to change until you love it.',
        },
        {
          num: '04',
          title: 'You go live',
          desc: "Your page goes online and people start reaching out. I'm here if you need anything later.",
        },
      ],
    },
    work: {
      label: 'My work',
      h2: "Landing pages I've built.",
      projects: [
        {
          client: 'Israel Sharar',
          industry: 'Construction management',
          line: 'Builds trust before the first call.',
          image: '/work/sharar.jpg',
        },
        {
          client: 'Aircor',
          industry: 'Air conditioning',
          line: 'One tap to call or WhatsApp.',
          image: '/work/aircor.jpg',
        },
        {
          client: 'Mega Afar',
          industry: 'Earthworks & infrastructure',
          line: 'Bold, confident and built for quote requests.',
          image: '/work/mega-afar.jpg',
        },
      ],
      selfNote: "And you're looking at one right now.",
      more: {
        h3: 'Need more than a page?',
        desc: "I also build full systems, like Pri Hadar's online ordering and delivery management.",
        liveCta: 'Visit the live site →',
        liveUrl: 'https://prihadar.co.il',
        shotAlt: 'Pri Hadar admin dashboard',
      },
    },
    about: {
      label: 'About me',
      greeting: "Hi, I'm Noam.",
      bio: "I'm a software developer who loves building things that actually help businesses. I've built products at startups and for small businesses, and now I build landing pages that make people want to call you.",
    },
    faq: {
      label: 'FAQ',
      h2: 'Questions, answered.',
      items: [
        {
          q: "How much does it cost?",
          a: "A landing page costs 2,000₪. That's a fixed price agreed before we start, so there are no surprises.",
        },
        {
          q: "How long does it take?",
          a: "Usually 1–2 weeks, from our first chat until your page is live.",
        },
        {
          q: "What do I need to prepare?",
          a: "Nothing. I write the text and take care of everything. If you have a logo or photos of your work, great. If not, that's fine too.",
        },
        {
          q: "What if I want changes?",
          a: "You see the page before it goes live and tell me what to change until you're happy with it. After launch, small changes are just one message away.",
        },
        {
          q: "Are there any monthly costs?",
          a: "No monthly fees. The only cost is your domain name (like yourbusiness.co.il), which is about 60–100₪ a year.",
        },
        {
          q: "Will people find me on Google?",
          a: "Your page is built so Google can read and understand it. Getting to the top of Google takes time, so many businesses also run ads to start getting customers right away.",
        },
        {
          q: "Do I own the page?",
          a: "Yes. The page and the domain are yours. I host it for you at no monthly cost, and if you ever want to move it, I'll hand everything over.",
        },
        {
          q: "Do you also build bigger systems?",
          a: "Yes. If your business needs more than a page, like online ordering, scheduling or a management system, I build those too.",
        },
      ],
    },
    contact: {
      label: 'Get in touch',
      h2: "Let's build your landing page.",
      sub: "Leave your details and I'll call you back to hear about your business.",
      nameLabel: 'Your name',
      namePlaceholder: '',
      phoneLabel: 'Phone number',
      phonePlaceholder: '',
      msgLabel: 'Anything you want to add or ask? (optional)',
      msgPlaceholder: "A question, a detail, or whatever's on your mind...",
      submitBtn: 'Send message',
      orWhatsapp: 'Message me on WhatsApp',
      emailPrefix: 'Prefer email?',
      whatsappMessage: "Hi Noam, I came from your website and I'm interested in a landing page.",
      noCommit: 'No commitment. Just a conversation.',
      successTitle: 'Message sent!',
      successMsg: "Thanks for reaching out. I'll get back to you shortly.",
      errorMsg: 'Something went wrong. Please try again or message me on WhatsApp.',
    },
    footer: {
      copyright: '© 2026 Noam Bukobza',
      location: 'Beit Shemesh, Israel',
    },
  },
  he: {
    dir: 'rtl' as const,
    meta: {
      title: 'בניית דפי נחיתה לעסקים | נועם בוקובזה',
      description:
        'דף נחיתה מותאם אישית שמביא לך לקוחות, במחיר קבוע של 2,000₪. כתיבה, עיצוב ועלייה לאוויר תוך שבוע–שבועיים. מבית שמש, לכל הארץ.',
    },
    nav: {
      work: 'העבודות שלי',
      about: 'אודותיי',
      faq: 'שאלות נפוצות',
      contact: 'צור קשר',
      cta: 'בוא נדבר',
    },
    hero: {
      eyebrow: 'מותאם אישית לעסק שלך',
      h1Lead: 'דף נחיתה ',
      h1Accent: 'שמביא לך לקוחות.',
      sub: 'אנשים מוצאים אותך, אוהבים את מה שהם רואים ופונים אליך. ככה פשוט.',
      cta1: 'אני רוצה דף נחיתה ←',
      cta2: 'לעבודות שלי',
      stats: ['מחיר קבוע 2,000₪', 'באוויר תוך שבוע–שבועיים', 'בלי תשלום חודשי'],
      scrollHint: 'גלול כדי לראות עוד',
    },
    howItWorks: {
      label: 'איך זה עובד',
      h2: 'מהודעה אחת לדף שמביא לקוחות.',
      steps: [
        {
          num: '01',
          title: 'ספר לי על העסק שלך',
          desc: 'מה אתה עושה, מי הלקוחות שלך ומה מייחד אותך. שיחה קצרה מספיקה.',
        },
        {
          num: '02',
          title: 'אני בונה את הדף שלך',
          desc: 'אני כותב, מעצב ובונה הכל. אתה לא צריך להכין כלום.',
        },
        {
          num: '03',
          title: 'אתה נותן פידבק',
          desc: 'אתה רואה את הדף לפני שהוא עולה לאוויר ואומר לי מה לשנות, עד שאתה אוהב אותו.',
        },
        {
          num: '04',
          title: 'עולים לאוויר',
          desc: 'הדף שלך עולה לאוויר ואנשים מתחילים לפנות אליך. אני כאן אם תצטרך משהו בהמשך.',
        },
      ],
    },
    work: {
      label: 'העבודות שלי',
      h2: 'דפי נחיתה שבניתי.',
      projects: [
        {
          client: 'ישראל שרר',
          industry: 'ניהול ופיקוח בנייה',
          line: 'בונה אמון עוד לפני השיחה הראשונה.',
          image: '/work/sharar.jpg',
        },
        {
          client: 'איירקור',
          industry: 'מיזוג אוויר',
          line: 'לחיצה אחת לשיחה או לוואטסאפ.',
          image: '/work/aircor.jpg',
        },
        {
          client: 'מגה עפר',
          industry: 'עבודות עפר ותשתיות',
          line: 'עיצוב נועז שבנוי להביא בקשות להצעת מחיר.',
          image: '/work/mega-afar.jpg',
        },
      ],
      selfNote: 'ואתה מסתכל על אחד מהם ממש עכשיו.',
      more: {
        h3: 'צריך יותר מדף?',
        desc: 'אני בונה גם מערכות מלאות, כמו מערכת ההזמנות וניהול המשלוחים של פרי הדר.',
        liveCta: 'בקר באתר ←',
        liveUrl: 'https://prihadar.co.il',
        shotAlt: 'דשבורד הניהול של פרי הדר',
      },
    },
    about: {
      label: 'אודותיי',
      greeting: 'היי, אני נועם.',
      bio: 'אני מפתח תוכנה שאוהב לבנות דברים שבאמת עוזרים לעסקים. בניתי מוצרים בסטארטאפים ולעסקים קטנים, ועכשיו אני בונה דפי נחיתה שגורמים לאנשים לרצות להתקשר אליך.',
    },
    faq: {
      label: 'שאלות נפוצות',
      h2: 'שאלות? יש לי תשובות.',
      items: [
        {
          q: "כמה זה עולה?",
          a: "דף נחיתה עולה 2,000₪. זה מחיר סגור שמסכמים לפני שמתחילים, בלי הפתעות.",
        },
        {
          q: "כמה זמן זה לוקח?",
          a: "בדרך כלל שבוע עד שבועיים, מהשיחה הראשונה ועד שהדף שלך באוויר.",
        },
        {
          q: "מה אני צריך להכין?",
          a: "כלום. אני כותב את הטקסטים ודואג להכל. אם יש לך לוגו או תמונות מהעבודה שלך, מצוין. אם לא, גם זה בסדר.",
        },
        {
          q: "מה אם אני רוצה שינויים?",
          a: "אתה רואה את הדף לפני שהוא עולה לאוויר ואומר לי מה לשנות, עד שאתה מרוצה. אחרי ההשקה, שינויים קטנים הם במרחק הודעה.",
        },
        {
          q: "יש עלויות חודשיות?",
          a: "אין תשלום חודשי. העלות היחידה היא שם הדומיין שלך (כמו yourbusiness.co.il), בערך 60–100₪ לשנה.",
        },
        {
          q: "אנשים ימצאו אותי בגוגל?",
          a: "הדף שלך בנוי כך שגוגל יוכל לקרוא ולהבין אותו. להגיע לראש תוצאות החיפוש לוקח זמן, ולכן הרבה עסקים מריצים גם פרסום כדי להתחיל לקבל לקוחות מיד.",
        },
        {
          q: "הדף בבעלותי?",
          a: "כן. הדף והדומיין שלך. אני מארח אותו בשבילך בלי עלות חודשית, ואם תרצה להעביר אותו למקום אחר, אעביר לך הכל.",
        },
        {
          q: "אתה בונה גם מערכות גדולות יותר?",
          a: "כן. אם העסק שלך צריך יותר מדף, כמו הזמנות אונליין, ניהול תורים או מערכת ניהול, אני בונה גם את זה.",
        },
      ],
    },
    contact: {
      label: 'צור קשר',
      h2: 'בוא נבנה את דף הנחיתה שלך.',
      sub: 'השאר פרטים ואחזור אליך כדי לשמוע על העסק שלך.',
      nameLabel: 'השם שלך',
      namePlaceholder: '',
      phoneLabel: 'מספר טלפון',
      phonePlaceholder: '',
      msgLabel: 'רוצה להוסיף או לשאול משהו? (אופציונלי)',
      msgPlaceholder: 'שאלה, פרט קטן, או כל מה שעולה לך בראש...',
      submitBtn: 'שלח הודעה',
      orWhatsapp: 'שלח הודעה בוואטסאפ',
      emailPrefix: 'מעדיף מייל?',
      whatsappMessage: 'היי נועם, הגעתי מהאתר ואני מתעניין בדף נחיתה.',
      noCommit: 'ללא התחייבות. רק שיחה.',
      successTitle: 'ההודעה נשלחה!',
      successMsg: 'תודה על הפנייה. אחזור אליך בהקדם.',
      errorMsg: 'משהו השתבש. נסה שוב או שלח הודעה בוואטסאפ.',
    },
    footer: {
      copyright: '© 2026 נועם בוקובזה',
      location: 'בית שמש, ישראל',
    },
  },
} as const;

export type Translations = (typeof t)[Lang];
