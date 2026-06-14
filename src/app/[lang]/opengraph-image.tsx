import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Noam Bukobza — Software Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'he' }];
}

// On-brand share card reproducing the site's nav brand lockup at full
// resolution: the green "NB" monogram + "Noam Bukobza" / "SOFTWARE DEVELOPER".
// Uses the site's own fonts — Space Grotesk (display) for the name and DM Sans
// for the subtitle. Kept in Latin so it renders without a Hebrew font, while
// the per-locale og:title/description carry the language.
export default async function Image() {
  const [spaceGrotesk, dmSans] = await Promise.all([
    readFile(join(process.cwd(), 'assets/fonts/SpaceGrotesk-Bold.ttf')),
    readFile(join(process.cwd(), 'assets/fonts/DMSans-Medium.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '44px',
          background: '#f9f8f6',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '160px',
            height: '160px',
            borderRadius: '40px',
            background: '#2d6a4f',
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontSize: '82px',
            fontWeight: 700,
          }}
        >
          NB
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Space Grotesk',
              fontSize: '96px',
              fontWeight: 700,
              color: '#111210',
              lineHeight: 1.1,
            }}
          >
            Noam Bukobza
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'DM Sans',
              fontSize: '40px',
              letterSpacing: '8px',
              color: '#2d6a4f',
              fontWeight: 500,
            }}
          >
            SOFTWARE DEVELOPER
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Space Grotesk', data: spaceGrotesk, style: 'normal', weight: 700 },
        { name: 'DM Sans', data: dmSans, style: 'normal', weight: 500 },
      ],
    },
  );
}
