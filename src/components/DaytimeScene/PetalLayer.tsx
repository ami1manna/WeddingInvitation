import React, { useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';
import type { RigState } from './depthRig';

/**
 * Falling petals and drifting pollen, drawn on a canvas.
 *
 * Two instances are mounted by DaytimeScene:
 *   kind="back"  - small, slow, soft petals + golden pollen, behind the mandap
 *   kind="front" - a few large petals that pass in front of everything
 *
 * Particles share the same inputs as the rest of the scene (see depthRig):
 * scroll shifts them by depth, the pointer / tilt parallaxes them, and wind
 * (scroll speed + idle breeze) pushes them sideways and speeds up the fall.
 */

interface PetalLayerProps {
  kind: 'back' | 'front';
  rig: MutableRefObject<RigState>;
  /** Scene is on screen. When false the loop stops and the canvas is cleared. */
  active: boolean;
  reducedMotion: boolean;
}

interface Petal {
  x: number; y: number; z: number;
  size: number; vy: number; sway: number; freq: number; phase: number;
  rot: number; rotSpeed: number; flip: number; flipSpeed: number;
  alpha: number; sprite: number;
}

interface Mote {
  x: number; y: number; z: number;
  r: number; vy: number; tw: number; phase: number;
}

const PALETTE: Array<[string, string]> = [
  ['#ffbe0b', '#fb5607'], // vibrant marigold orange
  ['#ffea75', '#ffaa00'], // sacred marigold yellow
  ['#c1121f', '#780016'], // deep crimson & maroon rose
  ['#ffffff', '#f4ebd0'], // white jasmine & rajnigandha
  ['#ffe3a8', '#d4982c']  // antique gold petals
];

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

function makePetalSprites(): HTMLCanvasElement[] {
  return PALETTE.map(([c0, c1]) => {
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 64;
    const g = c.getContext('2d');
    if (!g) return c;

    g.beginPath();
    g.moveTo(32, 3);
    g.bezierCurveTo(52, 11, 57, 41, 32, 61);
    g.bezierCurveTo(7, 41, 12, 11, 32, 3);
    g.closePath();

    const fill = g.createLinearGradient(32, 3, 32, 61);
    fill.addColorStop(0, c0);
    fill.addColorStop(1, c1);
    g.fillStyle = fill;
    g.fill();

    // soft rim + centre vein so tumbling petals read as petals, not blobs
    g.lineWidth = 1.4;
    g.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    g.stroke();
    g.beginPath();
    g.moveTo(32, 12);
    g.lineTo(32, 50);
    g.lineWidth = 1;
    g.strokeStyle = 'rgba(120, 20, 30, 0.28)';
    g.stroke();
    return c;
  });
}

function makeGlowSprite(): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = 32;
  c.height = 32;
  const g = c.getContext('2d');
  if (g) {
    const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 248, 210, 1)');
    grad.addColorStop(0.35, 'rgba(255, 195, 75, 0.7)');
    grad.addColorStop(0.7, 'rgba(235, 130, 25, 0.28)');
    grad.addColorStop(1, 'rgba(200, 90, 10, 0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 32, 32);
  }
  return c;
}

export const PetalLayer: React.FC<PetalLayerProps> = ({ kind, rig, active, reducedMotion }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = Math.max(1, Math.round(W * dpr));
      canvas.height = Math.max(1, Math.round(H * dpr));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reducedMotion || !active) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return () => ro.disconnect();
    }

    const sprites = makePetalSprites();
    const glow = makeGlowSprite();
    const isBack = kind === 'back';
    const area = Math.max(1, W * H);

    const petalCount = isBack
      ? clamp(Math.round(area / 52000), 10, 28)
      : clamp(Math.round(area / 150000), 4, 10);
    const moteCount = isBack ? clamp(Math.round(area / 90000), 8, 18) : 0;

    const spawnPetal = (anywhere: boolean): Petal => {
      const z = isBack ? rand(0.15, 0.55) : rand(0.75, 1);
      return {
        x: rand(0, W),
        y: anywhere ? rand(-20, H) : rand(-80, -20),
        z,
        size: (10 + z * 26) * rand(0.75, 1.25),
        vy: (isBack ? 20 : 46) + z * rand(24, 46),
        sway: 14 + z * 26,
        freq: rand(0.6, 1.4),
        phase: rand(0, Math.PI * 2),
        rot: rand(0, Math.PI * 2),
        rotSpeed: rand(-0.8, 0.8),
        flip: rand(0, Math.PI * 2),
        flipSpeed: rand(1.2, 3),
        alpha: isBack ? rand(0.55, 0.85) : rand(0.85, 0.98),
        sprite: Math.floor(Math.random() * sprites.length)
      };
    };

    const petals = Array.from({ length: petalCount }, () => spawnPetal(true));
    const motes: Mote[] = Array.from({ length: moteCount }, () => ({
      x: rand(0, W), y: rand(0, H), z: rand(0.1, 0.6),
      r: rand(3, 8), vy: rand(-6, 10), tw: rand(0.8, 2), phase: rand(0, Math.PI * 2)
    }));

    let live = petals.length; // lowered once if the device can't keep up
    let raf = 0;
    let last = performance.now();
    let frames = 0;
    let slow = 0;
    let trimmed = false;

    const frame = (now: number) => {
      const dt = clamp((now - last) / 1000, 0.001, 0.05);
      last = now;
      const t = now / 1000;
      const r = rig.current;

      // Adaptive quality: if more than ~40% of early frames are slow, halve the count once.
      frames++;
      if (dt > 0.034) slow++;
      if (!trimmed && frames === 120) {
        trimmed = true;
        if (slow / frames > 0.4) live = Math.ceil(petals.length / 2);
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      // pollen (additive glow)
      if (motes.length) {
        ctx.globalCompositeOperation = 'lighter';
        for (const m of motes) {
          m.y += m.vy * dt - r.dp * H * (0.15 + 0.6 * m.z);
          m.x += (r.wind * 14 + Math.sin(t * 0.5 + m.phase) * 6) * (0.4 + m.z) * dt;
          if (m.y > H + 20) m.y = -20;
          if (m.y < -20) m.y = H + 20;
          if (m.x > W + 20) m.x = -20;
          if (m.x < -20) m.x = W + 20;
          const a = 0.18 + 0.4 * (0.5 + 0.5 * Math.sin(t * m.tw + m.phase));
          const size = m.r * 2;
          ctx.globalAlpha = a;
          ctx.drawImage(
            glow,
            m.x - r.px * 18 * m.z - m.r,
            m.y - r.py * 10 * m.z - m.r,
            size, size
          );
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
      }

      // petals
      for (let i = 0; i < live; i++) {
        const p = petals[i];
        p.y += p.vy * (1 + Math.min(1.5, Math.abs(r.vel) * 3)) * dt - r.dp * H * (0.2 + 0.9 * p.z);
        p.x += (r.wind * (30 + 90 * p.z) + Math.sin(t * p.freq + p.phase) * p.sway * 0.6) * dt;
        p.rot += p.rotSpeed * dt + r.wind * 0.6 * dt;
        p.flip += p.flipSpeed * dt;

        const m = p.size * 1.5;
        if (p.y > H + m) { p.y = -m; p.x = rand(0, W); }
        else if (p.y < -m * 3) { p.y = H + m; p.x = rand(0, W); }
        if (p.x > W + m) p.x = -m;
        else if (p.x < -m) p.x = W + m;

        const cs = Math.cos(p.flip);
        const sy = 0.22 + 0.78 * Math.abs(cs); // petal turns edge-on as it tumbles
        ctx.globalAlpha = p.alpha * (0.62 + 0.38 * Math.abs(cs));
        ctx.save();
        ctx.translate(p.x - r.px * 26 * p.z, p.y - r.py * 14 * p.z);
        ctx.rotate(p.rot);
        ctx.scale(1, sy);
        ctx.drawImage(sprites[p.sprite], -p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [kind, rig, active, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`daytime-layer petal-canvas petal-canvas-${kind}`}
      aria-hidden="true"
    />
  );
};
