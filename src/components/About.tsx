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
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-center">

          {/* Col 1: image */}
          <Reveal>
            <Image
              src="/noam-v3.jpg"
              alt="Noam Bukobza"
              width={400}
              height={400}
              className="rounded-full w-44 sm:w-56 lg:w-72 mx-auto lg:mx-0"
            />
          </Reveal>

          {/* Col 2: label + greeting + bio */}
          <Reveal delay={80}>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4 text-center lg:text-start"
              style={{ color: 'var(--color-accent)' }}
            >
              {ab.label}
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-5 text-center lg:text-start"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {ab.greeting}
            </h2>
            <p
              className="text-lg sm:text-xl lg:text-2xl font-medium text-white/85 leading-relaxed text-center lg:text-start"
            >
              {ab.bio}
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
