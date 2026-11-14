import { useEffect, useRef } from 'react';
import type { MutableRefObject, RefObject } from 'react';

/**
 * Depth rig
 * ---------
 * One requestAnimationFrame loop owns the `transform` of every element that
 * carries a `data-fx="<name>"` attribute. Each frame it blends four inputs:
 *
 *   1. scroll travel  - a dolly-in (zoom) plus outward spread, per layer depth
 *   2. entrance       - layers assemble as the scene scrolls into view
 *   3. pointer / tilt - mouse (desktop) or device tilt (mobile), nearer = more
 *   4. wind           - scroll velocity + a gentle idle breeze (swings branches)
 *
 * Ambient CSS animations (sway, drift, float) live on CHILD elements so they
 * never fight this loop over `transform`.
 *
 * All offsets are fractions of the viewport (x of width, y of height) so the
 * composition scales from phones to desktops.
 */

export interface FxConfig {
  /** Horizontal travel over the whole scene, fraction of viewport width (+ = right). */
  x?: number;
  /** Vertical travel over the whole scene, fraction of viewport height (+ = down). */
  y?: number;
  /** Extra scale gained over the whole scene (0.1 = grows 10%). */
  zoom?: number;
  /** Pointer / tilt travel in px at full deflection. Nearer layers use more. */
  pointer?: number;
  /** Degrees of rotation per unit of wind (-1..1). */
  wind?: number;
  /** Starting state of the entrance; layer eases to rest across `window`. */
  from?: { x?: number; y?: number; scale?: number; rotate?: number; opacity?: number };
  /** Scene-progress range (0..1) in which the entrance plays. */
  window?: [number, number];
  /** Also publish the entrance progress (0..1) to this CSS custom property. */
  cssVar?: string;
}

export const FX: Record<string, FxConfig> = {
  sky:            { y: -0.02, zoom: 0.08, pointer: 5 },
  rays:           { y: -0.04, zoom: 0.14, pointer: 12, from: { opacity: 0 }, window: [0.05, 0.50] },

  'cloud-high':   { x:  0.03, y: -0.05, zoom: 0.06, pointer: 9 },
  'cloud-mid':    { x: -0.045, y: -0.08, zoom: 0.09, pointer: 16 },
  'cloud-low':    { x:  0.06, y: -0.12, zoom: 0.12, pointer: 24 },

  'birds-far':    { x:  0.12, y: -0.07, pointer: 16, from: { x: 0.10, opacity: 0 },  window: [0.05, 0.45] },
  birds:          { x:  0.24, y: -0.14, pointer: 32, from: { x: -0.12, opacity: 0 }, window: [0.04, 0.42] },

  'trees-left':   { x: -0.08, zoom: 0.20, pointer: 24, from: { x: -0.22, opacity: 0 }, window: [0.00, 0.38] },
  'trees-right':  { x:  0.08, zoom: 0.20, pointer: 24, from: { x:  0.22, opacity: 0 }, window: [0.00, 0.38] },

  mandap:         { zoom: 0.35, y: 0.05, pointer: 18, from: { y: 0.16, scale: 0.88, opacity: 0 }, window: [0.00, 0.40] },

  'branches-left':  { x: -0.06, y: -0.08, zoom: 0.26, pointer: 30, wind:  2.2, from: { y: -0.30, rotate: -4, opacity: 0 }, window: [0.02, 0.42] },
  'branches-right': { x:  0.06, y: -0.08, zoom: 0.26, pointer: 30, wind: -2.2, from: { y: -0.30, rotate:  4, opacity: 0 }, window: [0.02, 0.42] },

  garden:         { zoom: 0.26, y: 0.16, pointer: 36, from: { y: 0.24, opacity: 0 }, window: [0.00, 0.36] },
  lotus:          { x: 0.06, y: 0.20, zoom: 0.36, pointer: 46, wind: -1.2, from: { y: 0.26, opacity: 0 }, window: [0.06, 0.46] },

  // Invitation card appears gracefully over the illuminated night mandap
  copy:           { y: -0.02, window: [0.50, 0.88], cssVar: '--copy' }
};

export interface RigState {
  /** Scene progress 0..1 (written by the owner each render). */
  progress: number;
  /** Pointer / tilt, smoothed, -1..1. */
  px: number;
  py: number;
  /** Wind, smoothed, -1..1 (scroll velocity + idle breeze). */
  wind: number;
  /** Scroll velocity in progress-units per second (signed). */
  vel: number;
  /** Progress change this frame. */
  dp: number;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

interface Options {
  progress: number;
  /** Run the loop (scene visible and motion allowed). */
  enabled: boolean;
  reducedMotion: boolean;
}

export function useDepthRig(
  rootRef: RefObject<HTMLElement>,
  { progress, enabled, reducedMotion }: Options
): MutableRefObject<RigState> {
  const state = useRef<RigState>({ progress: 0, px: 0, py: 0, wind: 0, vel: 0, dp: 0 });
  state.current.progress = progress;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-fx]'))
      .map(el => ({ el, cfg: FX[el.dataset.fx || ''] }))
      .filter((t): t is { el: HTMLElement; cfg: FxConfig } => !!t.cfg);

    // Reduced motion: show the finished composition, no transforms, no loop.
    if (reducedMotion) {
      targets.forEach(({ el, cfg }) => {
        el.style.transform = '';
        el.style.opacity = '';
        if (cfg.cssVar) el.style.setProperty(cfg.cssVar, '1');
      });
      return;
    }
    if (!enabled) return;

    const s = state.current;
    let vw = root.clientWidth || window.innerWidth;
    let vh = root.clientHeight || window.innerHeight;
    const ro = new ResizeObserver(() => {
      vw = root.clientWidth || window.innerWidth;
      vh = root.clientHeight || window.innerHeight;
    });
    ro.observe(root);

    // --- input: pointer (mouse), touch (mobile), and device tilt ---------
    let tx = 0;
    let ty = 0;
    const onPointer = (e: PointerEvent) => {
      tx = clamp((e.clientX / window.innerWidth) * 2 - 1, -1, 1);
      ty = clamp((e.clientY / window.innerHeight) * 2 - 1, -1, 1);
    };
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        tx = clamp((e.touches[0].clientX / window.innerWidth) * 2 - 1, -1, 1);
        ty = clamp((e.touches[0].clientY / window.innerHeight) * 2 - 1, -1, 1);
      }
    };
    const onLeave = () => { tx = 0; ty = 0; };
    const onTilt = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      tx = clamp(e.gamma / 22, -1, 1);
      ty = clamp((e.beta - 50) / 22, -1, 1);
    };
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    // iOS gates tilt behind a permission prompt; we never prompt, so it simply stays off there.
    const tiltNeedsPermission =
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: unknown }).requestPermission === 'function';
    if (!tiltNeedsPermission && window.matchMedia('(pointer: coarse)').matches) {
      window.addEventListener('deviceorientation', onTilt, { passive: true });
    }

    // --- frame loop -------------------------------------------------------
    let raf = 0;
    let last = performance.now();
    let lastP = s.progress;

    const frame = (now: number) => {
      const dt = clamp((now - last) / 1000, 0.001, 0.05);
      last = now;

      const p = clamp(s.progress, 0, 1);
      s.dp = p - lastP;
      lastP = p;
      s.vel = s.dp / dt;

      // Smooth inputs (frame-rate independent) with organic breathing
      const kPtr = 1 - Math.exp(-dt * 5);
      const kWind = 1 - Math.exp(-dt * 4);
      const t = now / 1000;
      const idlePtrX = Math.sin(t * 0.7) * 0.14;
      const idlePtrY = Math.cos(t * 0.5) * 0.10;
      s.px += (tx + idlePtrX - s.px) * kPtr;
      s.py += (ty + idlePtrY - s.py) * kPtr;
      const idle = Math.sin(t / 1.7) * 0.18 + Math.sin(t / 4.3 + 1) * 0.12;
      s.wind += (clamp(s.vel * 1.6, -1, 1) + idle - s.wind) * kWind;

      for (const { el, cfg } of targets) {
        const [w0, w1] = cfg.window ?? [0, 0.0001];
        const e = easeOutCubic(clamp((p - w0) / (w1 - w0), 0, 1));
        const inv = 1 - e;
        const f = cfg.from;
        const ptr = cfg.pointer ?? 0;

        const x = (cfg.x ?? 0) * vw * p + (f?.x ?? 0) * vw * inv - s.px * ptr;
        const y = (cfg.y ?? 0) * vh * p + (f?.y ?? 0) * vh * inv - s.py * ptr * 0.6;
        const sc = 1 + (cfg.zoom ?? 0) * p + ((f?.scale ?? 1) - 1) * inv;
        const rot = (f?.rotate ?? 0) * inv + s.wind * (cfg.wind ?? 0);

        el.style.transform =
          `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0) rotate(${rot.toFixed(3)}deg) scale(${sc.toFixed(4)})`;
        if (f?.opacity !== undefined) el.style.opacity = (f.opacity + (1 - f.opacity) * e).toFixed(3);
        if (cfg.cssVar) el.style.setProperty(cfg.cssVar, e.toFixed(4));
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onPointer);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('deviceorientation', onTilt);
    };
  }, [rootRef, enabled, reducedMotion]);

  return state;
}
