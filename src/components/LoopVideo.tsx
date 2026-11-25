'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  src: string;
  poster: string;
  label: string;
}

// A short, silent, looping screen recording that behaves like a moving screenshot.
// The poster image shows first; the video file only loads once it scrolls near the
// screen, and it pauses while off screen. Visitors who ask for reduced motion only
// ever see the poster.
export default function LoopVideo({ src, poster, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '200px 0px' },
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      autoPlay={load}
      preload="none"
      className="absolute inset-0 h-full w-full object-cover object-top"
    />
  );
}
