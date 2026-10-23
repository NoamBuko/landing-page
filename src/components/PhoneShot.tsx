import Image from 'next/image';

// A phone frame around a mobile screenshot of a client page.
export default function PhoneShot({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <div className="rounded-[1.1rem] p-[3px] bg-foreground shadow-2xl shadow-black/25">
      <div className="relative aspect-[645/1200] rounded-[0.9rem] overflow-hidden bg-white">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}
