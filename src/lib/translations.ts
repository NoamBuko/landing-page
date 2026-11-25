export type Lang = 'en' | 'he';


export const t = {
  en: {
    dir: 'ltr' as const,
    meta: {
      title: 'Websites & Google Business Setup for Local Businesses | Noam Bukobza',
      description:
        'Get found on Google and get more calls. I build your website, set up your Google Business profile and handle the basic SEO, all for a fixed 3,000₪. Live in 1–2 weeks. Based in Beit Shemesh, working across Israel.',
    },
    nav: {
      work: 'My work',
      process: 'How it works',
      about: 'About me',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      eyebrow: 'Website · Google Business · SEO',
      h1Lead: 'When people search for what you do, ',
      h1Accent: 'they find you.',
      sub: 'I build your website, set up your Google Business profile and take care of the basic SEO, so customers find you, trust you, and call.',
      cta1: 'Get your business found →',
      cta2: 'See my work',
      stats: ['3,000₪, everything included', 'Live in 1–2 weeks', 'No monthly fees'],
    },
    services: {
      label: 'What you get',
      h2: 'Everything your business needs to get found online.',
      items: [
        {
          icon: 'site',
          title: 'A website that sells',
          desc: 'A fast, mobile-friendly site with your services, your work and a clear way to call or message you. I write the text, design it and host it.',
        },
        {
          icon: 'maps',
          title: 'Your business on Google Maps',
          desc: 'I create your Google Business profile or improve the one you have: categories, service area, hours, photos and a link to your site. This is what people see when they search for a business near them.',
        },
        {
          icon: 'seo',
          title: 'Built for Google',
          desc: 'Basic SEO done right: the words your customers search for in the text, fast loading, and everything Google needs to read and understand your site.',
        },
      ],
      note: 'All for a fixed 3,000₪, with hosting included and no monthly fees.',
    },
    howItWorks: {
      label: 'How it works',
      h2: 'From one message to customers finding you.',
      steps: [
        {
          num: '01',
          title: 'Tell me about your business',
          desc: 'What you do, who your customers are, and what makes you different. A short chat is enough.',
        },
        {
          num: '02',
          title: 'I build everything',
          desc: "I write and design your website and set up your Google Business profile. You don't need to prepare anything.",
        },
        {
          num: '03',
          title: 'You give feedback',
          desc: 'You see everything before it goes live and tell me what to change until you love it.',
        },
        {
          num: '04',
          title: 'You go live',
          desc: "Your site goes online, your business shows up on Google, and people start reaching out. I'm here if you need anything later.",
        },
      ],
    },
    work: {
      label: 'My work',
      h2: "Websites I've built.",
      projects: [
        {
          industry: 'Construction management',
          image: '/work/sharar.jpg',
          mobileImage: '/work/sharar-mobile.jpg',
        },
        {
          industry: 'Air conditioning',
          image: '/work/aircor.jpg',
          mobileImage: '/work/aircor-mobile.jpg',
        },
        {
          industry: 'Earthworks & infrastructure',
          image: '/work/mega-afar.jpg',
          mobileImage: '/work/mega-afar-mobile.jpg',
        },
      ],
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
      bio: "I'm a software developer who loves building things that actually help businesses. I've built products at startups and for small businesses, and now I make sure local businesses get found on Google, with a website and business profile that make people want to call you.",
    },
    faq: {
      label: 'FAQ',
      h2: 'Questions, answered.',
      items: [
        {
          q: "How much does it cost?",
          a: "Everything costs 3,000₪: your website, your Google Business profile and the basic SEO. It's a fixed price agreed before we start, so there are no surprises.",
        },
        {
          q: "How long does it take?",
          a: "Usually 1–2 weeks, from our first chat until your site is live. Google sometimes takes a few extra days to verify a new business profile.",
        },
        {
          q: "What do I need to prepare?",
          a: "Nothing. I write the text and take care of everything. If you have a logo or photos of your work, great. If not, that's fine too.",
        },
        {
          q: "What if I want changes?",
          a: "You see everything before it goes live and tell me what to change until you're happy with it. After launch, small changes are just one message away.",
        },
        {
          q: "Are there any monthly costs?",
          a: "No monthly fees. The only cost is your domain name (like yourbusiness.co.il), which is about 60–100₪ a year.",
        },
        {
          q: "Will people find me on Google?",
          a: "That's the whole point. I set up your Google Business profile, which is what shows up on Google Maps and in \"near me\" searches, and I build your site so Google can read and understand it. Getting to the top takes time, and reviews from happy customers help a lot, so many businesses also run ads to start getting customers right away.",
        },
        {
          q: "I already have a Google Business profile. Is that a problem?",
          a: "Not at all. I'll improve the one you have: fix the details, add photos and services, and connect it to your new site.",
        },
        {
          q: "Do I own the site?",
          a: "Yes. The site, the domain and your Google Business profile are all yours. I host the site for you at no monthly cost, and if you ever want to move it, I'll hand everything over.",
        },
        {
          q: "Can't I just build it myself with AI or Wix?",
          a: "You can. But you'd still need to write the text, design it, buy and connect a domain, set up hosting, create a Google Business profile and make sure Google can find you. With me you have one short chat and I handle everything. You also get a real person to call when you want a change.",
        },
      ],
    },
    contact: {
      label: 'Get in touch',
      h2: "Let's get your business found.",
      sub: "Leave your details and I'll call you back to hear about your business.",
      nameLabel: 'Your name',
      namePlaceholder: '',
      phoneLabel: 'Phone number',
      phonePlaceholder: '',
      msgLabel: 'Anything you want to add or ask? (optional)',
      msgPlaceholder: "A question, a detail, or whatever's on your mind...",
      submitBtn: 'Send message',
      orWhatsapp: 'Message me on WhatsApp',
      orCall: 'Call me',
      emailPrefix: 'Prefer email?',
      whatsappMessage: "Hi Noam, I came from your website and I'd like to hear more.",
      noCommit: 'No commitment. Just a conversation.',
      successTitle: 'Message sent!',
      successMsg: "Thanks for reaching out. I'll get back to you shortly.",
      errorMsg: 'Something went wrong. Please try again or message me on WhatsApp.',
    },
    footer: {
      copyright: '© 2026 Noam Bukobza',
      location: 'Beit Shemesh, Israel',
      tagline: 'Websites and Google Business for local businesses in Israel.',
      contactHeading: 'Contact',
      callAria: 'Call Noam',
    },
  },
  he: {
    dir: 'rtl' as const,
    meta: {
      title: 'בניית אתר לעסק + פרופיל עסקי בגוגל | נועם בוקובזה',
      description:
        'שימצאו אותך בגוגל ויתקשרו. אני בונה לך אתר, מקים או משפר את הפרופיל העסקי שלך בגוגל ודואג לקידום הבסיסי, הכל במחיר קבוע של 3,000₪. באוויר תוך שבוע–שבועיים. מבית שמש, לכל הארץ.',
    },
    nav: {
      work: 'העבודות שלי',
      process: 'איך זה עובד',
      about: 'אודותיי',
      faq: 'שאלות נפוצות',
      contact: 'צור קשר',
      cta: 'בוא נדבר',
    },
    hero: {
      eyebrow: 'אתר · פרופיל בגוגל · קידום בסיסי',
      h1Lead: 'כשמחפשים את מה שאתה עושה, ',
      h1Accent: 'מוצאים אותך.',
      sub: 'אני בונה לך אתר, מקים או משפר את הפרופיל העסקי שלך בגוגל ודואג לקידום הבסיסי, כדי שלקוחות ימצאו אותך, יסמכו עליך ויתקשרו.',
      cta1: 'אני רוצה שימצאו אותי ←',
      cta2: 'לעבודות שלי',
      stats: ['3,000₪, הכל כלול', 'באוויר תוך שבוע–שבועיים', 'בלי תשלום חודשי'],
    },
    services: {
      label: 'מה מקבלים',
      h2: 'כל מה שהעסק שלך צריך כדי שימצאו אותו באינטרנט.',
      items: [
        {
          icon: 'site',
          title: 'אתר שמביא לקוחות',
          desc: 'אתר מהיר ונוח בנייד, עם השירותים שלך, העבודות שלך ודרך ברורה להתקשר או לשלוח הודעה. אני כותב, מעצב ומאחסן.',
        },
        {
          icon: 'maps',
          title: 'העסק שלך בגוגל מפות',
          desc: 'אני מקים לך פרופיל עסקי בגוגל או משפר את הקיים: קטגוריות, אזור שירות, שעות פעילות, תמונות וקישור לאתר. זה מה שאנשים רואים כשהם מחפשים עסק באזור שלהם.',
        },
        {
          icon: 'seo',
          title: 'בנוי בשביל גוגל',
          desc: 'קידום בסיסי שעשוי נכון: המילים שהלקוחות שלך מחפשים, טעינה מהירה וכל מה שגוגל צריך כדי לקרוא ולהבין את האתר שלך.',
        },
      ],
      note: 'הכל במחיר קבוע של 3,000₪, כולל אחסון ובלי תשלום חודשי.',
    },
    howItWorks: {
      label: 'איך זה עובד',
      h2: 'מהודעה אחת ללקוחות שמוצאים אותך.',
      steps: [
        {
          num: '01',
          title: 'ספר לי על העסק שלך',
          desc: 'מה אתה עושה, מי הלקוחות שלך ומה מייחד אותך. שיחה קצרה מספיקה.',
        },
        {
          num: '02',
          title: 'אני בונה הכל',
          desc: 'אני כותב ומעצב את האתר ומקים את הפרופיל העסקי שלך בגוגל. אתה לא צריך להכין כלום.',
        },
        {
          num: '03',
          title: 'אתה נותן פידבק',
          desc: 'אתה רואה הכל לפני שזה עולה לאוויר ואומר לי מה לשנות, עד שאתה אוהב את זה.',
        },
        {
          num: '04',
          title: 'עולים לאוויר',
          desc: 'האתר שלך עולה לאוויר, העסק שלך מופיע בגוגל ואנשים מתחילים לפנות אליך. אני כאן אם תצטרך משהו בהמשך.',
        },
      ],
    },
    work: {
      label: 'העבודות שלי',
      h2: 'אתרים שבניתי.',
      projects: [
        {
          industry: 'ניהול ופיקוח בנייה',
          image: '/work/sharar.jpg',
          mobileImage: '/work/sharar-mobile.jpg',
        },
        {
          industry: 'מיזוג אוויר',
          image: '/work/aircor.jpg',
          mobileImage: '/work/aircor-mobile.jpg',
        },
        {
          industry: 'עבודות עפר ותשתיות',
          image: '/work/mega-afar.jpg',
          mobileImage: '/work/mega-afar-mobile.jpg',
        },
      ],
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
      bio: 'אני מפתח תוכנה שאוהב לבנות דברים שבאמת עוזרים לעסקים. בניתי מוצרים בסטארטאפים ולעסקים קטנים, ועכשיו אני דואג שעסקים מקומיים יימצאו בגוגל, עם אתר ופרופיל עסקי שגורמים לאנשים לרצות להתקשר.',
    },
    faq: {
      label: 'שאלות נפוצות',
      h2: 'שאלות? יש לי תשובות.',
      items: [
        {
          q: "כמה זה עולה?",
          a: "הכל עולה 3,000₪: האתר, הפרופיל העסקי בגוגל והקידום הבסיסי. זה מחיר סגור שמסכמים לפני שמתחילים, בלי הפתעות.",
        },
        {
          q: "כמה זמן זה לוקח?",
          a: "בדרך כלל שבוע עד שבועיים, מהשיחה הראשונה ועד שהאתר שלך באוויר. לפעמים גוגל לוקח עוד כמה ימים לאמת פרופיל עסקי חדש.",
        },
        {
          q: "מה אני צריך להכין?",
          a: "כלום. אני כותב את הטקסטים ודואג להכל. אם יש לך לוגו או תמונות מהעבודה שלך, מצוין. אם לא, גם זה בסדר.",
        },
        {
          q: "מה אם אני רוצה שינויים?",
          a: "אתה רואה הכל לפני שזה עולה לאוויר ואומר לי מה לשנות, עד שאתה מרוצה. אחרי ההשקה, שינויים קטנים הם במרחק הודעה.",
        },
        {
          q: "יש עלויות חודשיות?",
          a: "אין תשלום חודשי. העלות היחידה היא שם הדומיין שלך (כמו yourbusiness.co.il), בערך 60–100₪ לשנה.",
        },
        {
          q: "אנשים ימצאו אותי בגוגל?",
          a: "זו בדיוק המטרה. אני מקים לך פרופיל עסקי בגוגל, שזה מה שמופיע בגוגל מפות ובחיפושים כמו \"חשמלאי באזור שלי\", ובונה את האתר כך שגוגל יוכל לקרוא ולהבין אותו. להגיע לראש התוצאות לוקח זמן, וביקורות מלקוחות מרוצים עוזרות מאוד, ולכן הרבה עסקים מריצים גם פרסום כדי להתחיל לקבל לקוחות מיד.",
        },
        {
          q: "כבר יש לי פרופיל בגוגל. זו בעיה?",
          a: "בכלל לא. אני אשפר את הקיים: אעדכן את הפרטים, אוסיף תמונות ושירותים ואחבר אותו לאתר החדש.",
        },
        {
          q: "האתר בבעלותי?",
          a: "כן. האתר, הדומיין והפרופיל העסקי בגוגל שלך. אני מארח את האתר בשבילך בלי עלות חודשית, ואם תרצה להעביר אותו למקום אחר, אעביר לך הכל.",
        },
        {
          q: "אני לא יכול פשוט לבנות את זה לבד עם AI או Wix?",
          a: "אפשר. אבל עדיין תצטרך לכתוב את הטקסטים, לעצב, לקנות ולחבר דומיין, לדאוג לאחסון, להקים פרופיל עסקי בגוגל ולוודא שגוגל מוצא אותך. איתי זו שיחה קצרה אחת ואני דואג להכל. ויש לך גם בן אדם אמיתי להתקשר אליו כשתרצה שינוי.",
        },
      ],
    },
    contact: {
      label: 'צור קשר',
      h2: 'בוא נדאג שימצאו אותך.',
      sub: 'השאר פרטים ואחזור אליך כדי לשמוע על העסק שלך.',
      nameLabel: 'השם שלך',
      namePlaceholder: '',
      phoneLabel: 'מספר טלפון',
      phonePlaceholder: '',
      msgLabel: 'רוצה להוסיף או לשאול משהו? (אופציונלי)',
      msgPlaceholder: 'שאלה, פרט קטן, או כל מה שעולה לך בראש...',
      submitBtn: 'שלח הודעה',
      orWhatsapp: 'שלח הודעה בוואטסאפ',
      orCall: 'התקשר אליי',
      emailPrefix: 'מעדיף מייל?',
      whatsappMessage: 'היי נועם, הגעתי מהאתר ואשמח לשמוע עוד.',
      noCommit: 'ללא התחייבות. רק שיחה.',
      successTitle: 'ההודעה נשלחה!',
      successMsg: 'תודה על הפנייה. אחזור אליך בהקדם.',
      errorMsg: 'משהו השתבש. נסה שוב או שלח הודעה בוואטסאפ.',
    },
    footer: {
      copyright: '© 2026 נועם בוקובזה',
      location: 'בית שמש, ישראל',
      tagline: 'אתרים ופרופיל עסקי בגוגל לעסקים בישראל.',
      contactHeading: 'יצירת קשר',
      callAria: 'התקשר לנועם',
    },
  },
} as const;

export type Translations = (typeof t)[Lang];
