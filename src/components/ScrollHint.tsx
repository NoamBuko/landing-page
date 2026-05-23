'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  label: string;
}

export default function ScrollHint({ label }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [href, setHref] = useState('#');

  useEffect(() => {
    const section = ref.current?.closest('section');
    const next = section?.nextElementSibling;
    if (next instanceof HTMLElement && next.id) {
      setHref(`#${next.id}`);
    }

    const check = () => {
      if (!section) return;
      const fits = section.getBoundingClientRect().bottom <= window.innerHeight + 1;
      setVisible(fits);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const section = ref.current?.closest('section');
    const next = section?.nextElementSibling;
    if (next instanceof HTMLElement) {
      e.preventDefault();
      next.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      ref={ref}
      href={href}
      onClick={handleClick}
      aria-label={label}
      aria-hidden={visible ? undefined : 'true'}
      tabIndex={visible ? 0 : -1}
      className={`hidden sm:inline-flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full border border-border bg-background/70 backdrop-blur text-muted hover:text-foreground hover:border-accent transition-[opacity,color,border-color] duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <svg
        className="animate-hint-bounce"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </a>
  );
}
