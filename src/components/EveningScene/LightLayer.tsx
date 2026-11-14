import React, { useMemo } from 'react';

/* ---------- Fairy lights: bulbs sampled along catenary-style swags ---------- */
type Swag = { p0: [number, number]; c: [number, number]; p1: [number, number]; gap: number };
const SWAGS: Swag[] = [
  { p0: [-30, 30],  c: [800, 250], p1: [1630, 30],  gap: 44 },
  { p0: [-20, 150], c: [420, 330], p1: [640, 120],  gap: 40 },
  { p0: [960, 120], c: [1180, 330], p1: [1620, 150], gap: 40 },
  { p0: [150, 330], c: [370, 450], p1: [600, 300],  gap: 34 },
  { p0: [1000, 300], c: [1230, 450], p1: [1450, 330], gap: 34 }
];

const quad = (s: Swag, t: number): [number, number] => {
  const u = 1 - t;
  return [u * u * s.p0[0] + 2 * u * t * s.c[0] + t * t * s.p1[0],
          u * u * s.p0[1] + 2 * u * t * s.c[1] + t * t * s.p1[1]];
};

export const StringLights: React.FC = React.memo(() => {
  const { paths, bulbs } = useMemo(() => {
    const paths: string[] = [];
    const bulbs: { x: number; y: number; d: number; dur: number; r: number }[] = [];
    let n = 0;
    SWAGS.forEach(s => {
      paths.push(`M${s.p0[0]},${s.p0[1]} Q${s.c[0]},${s.c[1]} ${s.p1[0]},${s.p1[1]}`);
      // approximate length to pick a bulb count
      let len = 0; let prev = quad(s, 0);
      for (let i = 1; i <= 24; i++) { const q = quad(s, i / 24); len += Math.hypot(q[0] - prev[0], q[1] - prev[1]); prev = q; }
      const count = Math.max(4, Math.round(len / s.gap));
      for (let i = 0; i <= count; i++) {
        const [x, y] = quad(s, i / count);
        // bulbs hang slightly below the wire
        bulbs.push({ x, y: y + 7, d: -((n * 0.37) % 3.1), dur: 2.4 + ((n * 0.53) % 2.2), r: 0.8 + ((n * 7) % 5) / 12 });
        n++;
      }
    });
    return { paths, bulbs };
  }, []);

  return (
    <div className="evening-layer evening-lights-layer" aria-hidden="true">
      <div className="lights-fx" data-fx="lights">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMin slice" className="lights-svg">
          <defs>
            <radialGradient id="bulbGlow">
              <stop offset="0" stopColor="#fff0c4" stopOpacity="0.95" />
              <stop offset="0.25" stopColor="#ffd27a" stopOpacity="0.55" />
              <stop offset="1" stopColor="#ff9f3a" stopOpacity="0" />
            </radialGradient>
          </defs>
          {paths.map((d, i) => <path key={i} d={d} className="wire" />)}
          {bulbs.map((b, i) => (
            <g key={i} className="bulb" style={{ animationDelay: `${b.d}s`, animationDuration: `${b.dur}s` }}
               transform={`translate(${b.x.toFixed(1)} ${b.y.toFixed(1)}) scale(${b.r.toFixed(2)})`}>
              <circle r="15" fill="url(#bulbGlow)" />
              <circle r="2.7" fill="#fff4d2" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
});

/* ---------- Hanging lanterns (maroon paper + brass caps) ---------- */
const LANTERNS = [
  { x: 6,  len: 20, size: 7.2, d: 0 },
  { x: 19, len: 11, size: 5.2, d: -1.4 },
  { x: 33, len: 7,  size: 3.4, d: -2.6 },
  { x: 67, len: 7,  size: 3.4, d: -0.9 },
  { x: 81, len: 12, size: 5.4, d: -2.1 },
  { x: 94, len: 22, size: 7.4, d: -0.4 }
];

export const LanternLayer: React.FC = React.memo(() => (
  <div className="evening-layer evening-lanterns-layer" aria-hidden="true">
    <div className="lanterns-fx" data-fx="lanterns">
      {LANTERNS.map((l, i) => (
        <div key={i} className="lantern" style={{ left: `${l.x}%`, ['--len' as string]: `${l.len}vh`, ['--sz' as string]: `${l.size}vmin`, animationDelay: `${l.d}s` } as React.CSSProperties}>
          <i className="lantern-cord" />
          <div className="lantern-body">
            <span className="lantern-halo" />
            <svg viewBox="0 0 60 92" className="lantern-svg">
              <defs>
                <linearGradient id={`lg${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ffcf7a" />
                  <stop offset="0.45" stopColor="#e2742b" />
                  <stop offset="1" stopColor="#7a1d1b" />
                </linearGradient>
                <radialGradient id={`lc${i}`}>
                  <stop offset="0" stopColor="#fff4cf" stopOpacity="0.95" />
                  <stop offset="1" stopColor="#ffb347" stopOpacity="0" />
                </radialGradient>
                <linearGradient id={`lb${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffe9a8" /><stop offset="0.5" stopColor="#c8881f" /><stop offset="1" stopColor="#7a4f0e" />
                </linearGradient>
              </defs>
              <rect x="22" y="2" width="16" height="7" rx="2" fill={`url(#lb${i})`} />
              <path d="M18,12 H42 L47,16 H13 Z" fill={`url(#lb${i})`} />
              <path d="M13,16 H47 C58,34 58,58 47,74 H13 C2,58 2,34 13,16 Z" fill={`url(#lg${i})`} />
              <ellipse cx="30" cy="45" rx="17" ry="24" fill={`url(#lc${i})`} />
              <path d="M30,16 V74 M20,17 C10,36 10,56 20,74 M40,17 C50,36 50,56 40,74" stroke="#5a1210" strokeOpacity="0.45" strokeWidth="1" fill="none" />
              <path d="M13,74 H47 L43,80 H17 Z" fill={`url(#lb${i})`} />
              <path d="M30,80 V90" stroke="#e8b44c" strokeWidth="2" />
              <circle cx="30" cy="90" r="2.4" fill="#e8b44c" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
));

/* ---------- Brass diyas on the ground ---------- */
const DIYAS = [
  { x: 9,  b: 9,  s: 1.5, d: 0 },
  { x: 21, b: 5,  s: 1.05, d: -0.5 },
  { x: 33, b: 2.5, s: 0.8, d: -1.1 },
  { x: 67, b: 2.5, s: 0.8, d: -0.2 },
  { x: 79, b: 5,  s: 1.05, d: -0.9 },
  { x: 91, b: 9,  s: 1.5, d: -0.3 }
];

export const DiyaLayer: React.FC = React.memo(() => (
  <div className="evening-layer evening-diyas-layer" aria-hidden="true">
    <div className="diyas-fx" data-fx="diyas">
      {DIYAS.map((d, i) => (
        <div key={i} className="diya" style={{ left: `${d.x}%`, bottom: `${d.b}vh`, ['--k' as string]: d.s } as React.CSSProperties}>
          <span className="diya-halo" style={{ animationDelay: `${d.d}s` }} />
          <svg viewBox="0 0 80 60" className="diya-svg">
            <defs>
              <linearGradient id={`dg${i}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffe9a8" /><stop offset="0.45" stopColor="#c98a1e" /><stop offset="1" stopColor="#6e460c" />
              </linearGradient>
              <radialGradient id={`df${i}`} cx="0.5" cy="0.7" r="0.6">
                <stop offset="0" stopColor="#fffbe8" /><stop offset="0.45" stopColor="#ffd25e" /><stop offset="1" stopColor="#ff7a1a" />
              </radialGradient>
            </defs>
            <path d="M6,34 C10,52 26,56 40,56 C54,56 70,52 74,34 C60,40 20,40 6,34 Z" fill={`url(#dg${i})`} />
            <ellipse cx="40" cy="34" rx="34" ry="6" fill="#3a2208" />
            <ellipse cx="40" cy="33" rx="27" ry="3.6" fill="#ffb347" opacity="0.55" />
            <g className="diya-flame" style={{ animationDelay: `${d.d}s` }}>
              <path d="M40,6 C47,15 49,24 40,33 C31,24 33,15 40,6 Z" fill={`url(#df${i})`} />
            </g>
          </svg>
        </div>
      ))}
    </div>
  </div>
));

/* ---------- Golden bokeh (CSS only; transform/opacity animation stays on the compositor) ---------- */
const BOKEH = Array.from({ length: 22 }, (_, i) => {
  const r = (n: number) => ((i * 9301 + n * 49297) % 233280) / 233280;
  return { x: r(1) * 100, y: 8 + r(2) * 78, s: 1.4 + r(3) * 4.6, d: -r(4) * 14, dur: 9 + r(5) * 10, o: 0.25 + r(6) * 0.45 };
});

export const BokehLayer: React.FC<{ front?: boolean }> = React.memo(({ front = false }) => (
  <div className={`evening-layer evening-bokeh-layer ${front ? 'bokeh-front' : 'bokeh-back'}`} aria-hidden="true">
    <div className="bokeh-fx" data-fx={front ? 'bokeh-front' : 'bokeh-back'}>
      {BOKEH.filter((_, i) => (i % 2 === 0) === front).map((b, i) => (
        <i key={i} style={{ left: `${b.x}%`, top: `${b.y}%`, width: `${b.s}vmin`, height: `${b.s}vmin`, animationDelay: `${b.d}s`, animationDuration: `${b.dur}s`, ['--o' as string]: b.o } as React.CSSProperties} />
      ))}
    </div>
  </div>
));

/* ---------- Atmosphere: moonlight, warm bloom, shadow vignette ---------- */
export const AtmosphereLayer: React.FC = React.memo(() => (
  <div className="evening-layer evening-atmosphere-layer" aria-hidden="true">
    <div className="atmo-twilight" />
    <div className="atmo-moonlight" />
    <div className="atmo-warm" />
    <div className="atmo-vignette" />
  </div>
));
