import React from 'react';
import { WEDDING as W } from '../../config';

// Each line reads its reveal amount from --copy (0..1, written by the depth rig) offset by its index,
// so the invitation writes itself in, top to bottom, as you scroll.
const line = (i: number): React.CSSProperties => ({ ['--i' as string]: i } as React.CSSProperties);

const Ornament: React.FC<{ i: number }> = ({ i }) => (
  <div className="inv-ornament reveal-line" style={line(i)} aria-hidden="true">
    <svg viewBox="0 0 240 20" width="100%" height="100%">
      <defs>
        <linearGradient id={`og${i}`} x1="0" x2="1">
          <stop offset="0" stopColor="#d9b46a" stopOpacity="0" />
          <stop offset="0.5" stopColor="#f3dca0" />
          <stop offset="1" stopColor="#d9b46a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M4,10 H98 M142,10 H236" stroke={`url(#og${i})`} strokeWidth="1" />
      <path d="M120,2 L128,10 L120,18 L112,10 Z" fill="none" stroke="#e8c97c" strokeWidth="1.1" />
      <circle cx="120" cy="10" r="2" fill="#f3dca0" />
      <circle cx="102" cy="10" r="1.6" fill="#e8c97c" />
      <circle cx="138" cy="10" r="1.6" fill="#e8c97c" />
    </svg>
  </div>
);

export const InvitationCopy: React.FC = React.memo(() => (
  <section className="evening-invitation" data-fx="copy" aria-label="Wedding invitation">
    <div className="inv-card">
      <i className="inv-corner tl" /><i className="inv-corner tr" /><i className="inv-corner bl" /><i className="inv-corner br" />

      <p className="inv-eyebrow reveal-line" style={line(0)}>{W.eyebrow}</p>
      <Ornament i={1} />

      <div className="inv-couple-sequence">
        <div className="inv-person-block reveal-line reveal-blur" style={line(2)}>
          <h2 className="inv-name">{W.groom}</h2>
          <span className="inv-relation">S/o</span>
          <p className="inv-parent">Nobin Samanta</p>
          <p className="inv-parent">Dipali Samanta</p>
        </div>

        <div className="inv-amp-wrap reveal-line" style={line(3)} aria-hidden="true">
          <span className="inv-amp">&amp;</span>
        </div>

        <div className="inv-person-block reveal-line reveal-blur" style={line(4)}>
          <h2 className="inv-name">{W.bride}</h2>
          <span className="inv-relation">D/o</span>
          <p className="inv-parent">Dipali Manna</p>
          <p className="inv-parent">Samir Manna</p>
        </div>
      </div>

      <Ornament i={7} />

      <time className="inv-date reveal-line" style={line(8)}>{W.date}</time>

      <div className="inv-events">
        <div className="inv-event reveal-line" style={line(9)}>
          <h3>{W.shaadi.title}</h3>
          <p>{W.shaadi.time}</p>
        </div>
        <i className="inv-divider" aria-hidden="true" />
        <div className="inv-event reveal-line" style={line(10)}>
          <h3>{W.reception.title}</h3>
          <p>{W.reception.time}</p>
        </div>
      </div>

      <a className="inv-cta reveal-line" style={line(11)} href={W.venueUrl} target="_blank" rel="noopener noreferrer">
        {W.cta}
      </a>
    </div>
  </section>
));
