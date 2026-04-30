import Image from 'next/image';
import { type Translations } from '@/lib/translations';
import Reveal from './Reveal';

interface Props {
  translations: Translations;
}

export default function About({ translations: t }: Props) {
  const ab = t.about;

  return (
    <section id="about" className="py-24 px-[5vw] bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Col 1: image */}
          <Reveal>
            <Image
              src="/noam.png"
              alt="Noam Bukobza"
              width={400}
              height={400}
              className="rounded-full w-44 lg:w-64 mx-auto lg:mx-0"
            />
          </Reveal>

          {/* Col 2: label + bio */}
          <Reveal delay={80}>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {ab.label}
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-white leading-snug whitespace-pre-line" style={{ fontFamily: 'var(--font-display)' }}>
              {ab.bio.split(ab.accentPhrase).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span style={{ color: 'var(--color-accent)' }}>{ab.accentPhrase}</span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
