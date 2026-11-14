import React, { useEffect, useRef } from 'react';

/**
 * Procedural evening sky. Three gradients are stacked and cross-faded by CSS variables
 * written from EveningScene (see atmosphere()):
 *   night (always under)  <-  violet twilight (--sky-violet)  <-  sunset amber (--sky-amber)
 * Stars twinkle on a small canvas; the moon fades in with --moon.
 */
export const SkyLayer: React.FC<{ active: boolean; reducedMotion: boolean }> = React.memo(({ active, reducedMotion }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let W = 0, H = 0;
    const stars = Array.from({ length: 190 }, () => ({
      x: Math.random(),
      y: Math.pow(Math.random(), 1.35) * 0.7,
      r: 0.4 + Math.random() * 1.3,
      tw: 0.6 + Math.random() * 2.2,
      ph: Math.random() * 6.28,
      warm: Math.random() < 0.3
    }));
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.max(1, Math.round(W * dpr));
      canvas.height = Math.max(1, Math.round(H * dpr));
    };
    resize();
    const ro = new ResizeObserver(() => { resize(); draw(0); });
    ro.observe(canvas);

    function draw(t: number) {
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        const a = reducedMotion ? 0.8 : 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.tw + s.ph));
        ctx.globalAlpha = a;
        ctx.fillStyle = s.warm ? '#ffe7b8' : '#e8eeff';
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, 6.2832);
        ctx.fill();
        if (s.r > 1.3) {
          ctx.globalAlpha = a * 0.35;
          ctx.fillRect(s.x * W - s.r * 3, s.y * H - 0.4, s.r * 6, 0.8);
          ctx.fillRect(s.x * W - 0.4, s.y * H - s.r * 3, 0.8, s.r * 6);
        }
      }
      ctx.globalAlpha = 1;
    }

    draw(0);
    if (!active || reducedMotion) return () => ro.disconnect();
    let raf = 0;
    const loop = (now: number) => { draw(now / 1000); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [active, reducedMotion]);

  return (
    <div className="evening-layer evening-sky-layer" data-fx="sky" role="img"
         aria-label="Sunset sky deepening into a starry midnight-blue night with a rising moon">
      <div className="sky-night" />
      <div className="sky-violet" />
      <div className="sky-amber" />
      <div className="sky-horizon-glow" />
      <canvas ref={ref} className="sky-stars" />
      <div className="sky-moon"><i /><i /><i /></div>
    </div>
  );
});
