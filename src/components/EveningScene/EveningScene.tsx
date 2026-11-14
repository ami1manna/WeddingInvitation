import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { EVENING_ASSETS } from './assets';
import { useDepthRig } from './depthRig';
import { SkyLayer } from './SkyLayer';
import { CloudLayer } from './CloudLayer';
import { TreeLayer } from './TreeLayer';
import { MandapLayer } from './MandapLayer';
import { HangingFloralLayer } from './HangingFloralLayer';
import { LotusLayer } from './LotusLayer';
import { GardenLayer } from './GardenLayer';
import { StringLights, LanternLayer, DiyaLayer, BokehLayer, AtmosphereLayer } from './LightLayer';
import { PetalLayer } from './PetalLayer';
import { InvitationCopy } from './InvitationCopy';
import './EveningScene.css';

interface EveningSceneProps {
  progress?: number;
  opacity?: number;
  reducedMotion?: boolean;
}

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const smooth = (t: number) => t * t * (3 - 2 * t);

/**
 * The lighting script. Everything that changes between sunset and night is a function of the
 * scene progress p (0..1) and is published as a CSS variable on the scene root:
 *
 *   p 0.00  sunset amber sky, twilight-graded garden, mandap a dim silhouette
 *   p 0.20  dusky violet, first stars, lanterns begin to glow
 *   p 0.45  midnight navy, moon up, fairy lights twinkling, mandap emerging
 *   p 0.60  mandap fully lit, spotlight on, invitation starts writing itself in
 */
export function atmosphere(p: number): Record<string, string> {
  const amber = 1 - smooth(seg(p, 0.0, 0.24));
  const violet = 1 - smooth(seg(p, 0.14, 0.46));
  return {
    '--sky-amber': amber.toFixed(3),
    '--sky-violet': violet.toFixed(3),
    '--night': smooth(seg(p, 0.08, 0.46)).toFixed(3),
    '--stars': smooth(seg(p, 0.16, 0.5)).toFixed(3),
    '--moon': smooth(seg(p, 0.22, 0.52)).toFixed(3),
    '--lit': smooth(seg(p, 0.18, 0.56)).toFixed(3),
    '--spot': smooth(seg(p, 0.38, 0.7)).toFixed(3),
    '--veil': smooth(seg(p, 0.56, 0.84)).toFixed(3),
    '--cloud': (1 - 0.65 * smooth(seg(p, 0.1, 0.5))).toFixed(3)
  };
}

export const EveningScene: React.FC<EveningSceneProps> = ({
  progress = 0,
  opacity = 1,
  reducedMotion = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const active = opacity > 0.02;
  const rig = useDepthRig(containerRef, {
    progress,
    enabled: active && !reducedMotion,
    reducedMotion
  });

  // Publish the lighting variables whenever progress changes (works with reduced motion too).
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const vars = atmosphere(progress);
    for (const k in vars) el.style.setProperty(k, vars[k]);
  }, [progress]);

  // ~6 MB of artwork that only appears late in the scroll: warm the cache while idle.
  useEffect(() => {
    const urls = Object.values(EVENING_ASSETS);
    const warm = () => urls.forEach(src => { const i = new Image(); i.decoding = 'async'; i.src = src; });
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(warm, { timeout: 4000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(warm, 2000);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`evening-viewport ${active ? 'active' : ''}`}
      style={{ opacity, visibility: opacity > 0 ? 'visible' : 'hidden' }}
      aria-label="Twilight garden deepening into an illuminated night-time wedding mandap"
    >
      <div className="evening-canvas-stage">
        <SkyLayer active={active} reducedMotion={reducedMotion} />
        <CloudLayer reducedMotion={reducedMotion} />
        <BokehLayer />
        <TreeLayer />
        <PetalLayer kind="back" rig={rig} active={active} reducedMotion={reducedMotion} />
        <MandapLayer />
        <StringLights />
        <HangingFloralLayer reducedMotion={reducedMotion} />
        <LanternLayer />
        <GardenLayer />
        <DiyaLayer />
        <LotusLayer reducedMotion={reducedMotion} />
        <PetalLayer kind="front" rig={rig} active={active} reducedMotion={reducedMotion} />
        <BokehLayer front />
        <AtmosphereLayer />
        <div className="evening-veil" aria-hidden="true" />
        <InvitationCopy />
      </div>
    </div>
  );
};

export default EveningScene;
