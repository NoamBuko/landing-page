import { type Translations } from '@/lib/translations';

interface Props {
  translations: Translations;
}

export default function Footer({ translations: t }: Props) {
  return (
    <footer className="py-8 px-[5vw] border-t border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-muted">{t.footer.copyright}</p>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
