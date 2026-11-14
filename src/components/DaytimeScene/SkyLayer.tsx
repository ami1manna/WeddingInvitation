import React from 'react';

/**
 * Evening to Night Sky Layer
 * Seamless progression from dusky sunset amber along the horizon
 * to dusky violet and deep midnight navy with delicate twinkling stars and soft moonlight.
 */

// Generate a set of static stars with varied positions, sizes, and animation delays
const STARS = Array.from({ length: 48 }, (_, i) => {
  const x = (i * 37) % 100;
  const y = (i * 23) % 46; // top 46% of sky
  const size = 1 + (i % 3) * 0.8;
  const delay = (i * 0.4) % 4;
  const dur = 2.5 + (i % 5) * 0.7;
  return { id: i, x, y, size, delay, dur };
});

export const SkyLayer: React.FC = React.memo(() => (
  <div
    className="daytime-layer daytime-sky-layer evening-sky"
    data-fx="sky"
    role="img"
    aria-label="Dusky violet and deep midnight navy evening sky with stars and soft moonlight"
  >
    {/* Atmospheric Twilight-to-Midnight Sky Gradient */}
    <div className="sky-gradient-base" />

    {/* Soft Golden Sunset Horizon Haze (fades into twilight) */}
    <div className="sky-sunset-horizon" />

    {/* Delicate Stars */}
    <div className="sky-stars-container" aria-hidden="true">
      {STARS.map(s => (
        <span
          key={s.id}
          className="sky-star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`
          }}
        />
      ))}
    </div>

    {/* Luminous Silver-Gold Crescent Moon */}
    <div className="sky-moon-container" aria-hidden="true">
      <div className="sky-moon-halo" />
      <svg className="sky-moon-svg" viewBox="0 0 60 60" fill="none">
        <defs>
          <radialGradient id="moon-glow" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fffcee" />
            <stop offset="60%" stopColor="#f5e6b8" />
            <stop offset="100%" stopColor="#dfca8b" />
          </radialGradient>
        </defs>
        {/* Crescent Moon path */}
        <path
          d="M36 6 C20 6 10 20 10 34 C10 48 22 56 36 56 C26 52 20 42 20 31 C20 18 28 9 36 6 Z"
          fill="url(#moon-glow)"
          filter="drop-shadow(0 0 10px rgba(255, 248, 220, 0.8))"
        />
      </svg>
    </div>
  </div>
));
