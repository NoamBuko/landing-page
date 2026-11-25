'use client';
import { useEffect, useState } from 'react';

interface Props {
  // The fixed start of the headline ("A landing page that ").
  lead: string;
  // phrases[0] is the main phrase: shown first, and the only one screen readers and Google see.
  phrases: string[];
  // How long each phrase stays before the next one comes in.
  interval?: number;
}

// The hero headline with a rotating ending, plus dots showing how many phrases there are and
// which one is showing. It loops through the phrases continuously. Clicking a dot jumps to that
// phrase, and the rotation carries on from there.
export default function RotatingHeadline({ lead, phrases, interval = 1800 }: Props) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState(-1);

  const show = (i: number) => {
    if (i === active) return;
    setPrevious(active);
    setActive(i);
  };

  // Each time the phrase changes (automatically or by a click), the countdown to the next one restarts.
  useEffect(() => {
    if (phrases.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = setTimeout(() => {
      setPrevious(active);
      setActive((active + 1) % phrases.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [active, phrases.length, interval]);

  return (
    <>
      <h1
        className="font-bold leading-[1.06] tracking-tight text-white mb-5 sm:mb-6 max-w-[18ch]"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.1rem, 1rem + 5vw, 5rem)',
        }}
      >
        {lead}
        {/* All phrases sit stacked in the same grid cell, so the box is always sized to the longest
            phrase and the headline never jumps when the text changes. */}
        <span className="inline-grid align-top text-mint">
          {/* Screen readers and search engines get the main phrase only */}
          <span className="sr-only">{phrases[0]}</span>
          {phrases.map((phrase, i) => (
            <span
              key={phrase}
              aria-hidden
              className="col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out"
              style={{
                opacity: i === active ? 1 : 0,
                // The incoming phrase rises from below; the outgoing one drifts up and away.
                transform:
                  i === active ? 'translateY(0)' : i === previous ? 'translateY(-0.3em)' : 'translateY(0.3em)',
              }}
            >
              {phrase}
            </span>
          ))}
        </span>
      </h1>

      {phrases.length > 1 && (
        <div aria-hidden className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          {phrases.map((phrase, i) => (
            <button
              key={phrase}
              type="button"
              tabIndex={-1}
              onClick={() => show(i)}
              // Generous invisible padding makes the small dots easy to tap.
              className="group p-1.5 -m-1.5"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-mint' : 'w-1.5 bg-white/30 group-hover:bg-white/60'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
