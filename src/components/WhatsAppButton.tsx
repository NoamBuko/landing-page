'use client';
import { useState } from 'react';
import { type Lang, WHATSAPP_NUMBER } from '@/lib/translations';

interface Props {
  lang: Lang;
}

export default function WhatsAppButton({ lang }: Props) {
  const [hovered, setHovered] = useState(false);
  const label = lang === 'he' ? 'שלחו הודעה בוואטסאפ' : 'Message on WhatsApp';

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-50 flex items-center gap-2.5 shadow-lg shadow-black/10 transition-all duration-200 hover:shadow-xl hover:shadow-black/15"
      style={{
        backgroundColor: '#25D366',
        borderRadius: hovered ? 40 : 50,
        padding: hovered ? '10px 18px 10px 14px' : '14px',
      }}
      aria-label={label}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.54 4.067 1.484 5.787L0 24l6.376-1.453A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.369l-.36-.213-3.727.85.865-3.634-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
      </svg>
      {hovered && (
        <span className="text-white text-xs font-semibold whitespace-nowrap">{label}</span>
      )}
    </a>
  );
}
