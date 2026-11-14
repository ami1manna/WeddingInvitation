import React, { useEffect, useRef } from 'react';

import { DAYTIME_ASSETS } from './assets';
import { useDepthRig } from './depthRig';
import { SkyLayer } from './SkyLayer';
import { CloudLayer } from './CloudLayer';
import { BirdLayer } from './BirdLayer';
import { TreeLayer } from './TreeLayer';
import { MandapLayer } from './MandapLayer';
import { HangingFloralLayer } from './HangingFloralLayer';
import { LotusLayer } from './LotusLayer';
import { GardenLayer } from './GardenLayer';
import { LightLayer, HazeLayer } from './LightLayer';
import { PetalLayer } from './PetalLayer';
import { InvitationCopy } from './InvitationCopy';

import './DaytimeScene.css';

interface DaytimeSceneProps {
  progress?: number;
  opacity?: number;
  reducedMotion?: boolean;
}

/**
 * Layer stack, far to near (z-index is set in DaytimeScene.css):
 *
 *   B01 sky ........ B02 clouds (3 banks) .... sun rays
 *   B03 birds (2 flocks) .... B07/B08 trees .... horizon haze
 *   back petals + pollen .... B06 mandap .... B04/B05 hanging branches
 *   B09 garden ........ B10 lotus ........ front petals .... invitation copy
 *
 * Motion is driven by useDepthRig; see depthRig.ts for the per-layer tuning table.
 */
export const DaytimeScene: React.FC<DaytimeSceneProps> = ({
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

  // The scene is ~20 MB of artwork and only appears late in the scroll.
  // Warm the cache while the browser is idle so the entrance never pops in.
  useEffect(() => {
    const urls = Object.values(DAYTIME_ASSETS);
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
      className={`daytime-viewport ${active ? 'active' : ''}`}
      style={{
        opacity,
        visibility: opacity > 0 ? 'visible' : 'hidden'
      }}
      aria-label="Evening wedding garden scene with grand illuminated night mandap and floral decorations"
    >
      <div className="daytime-canvas-stage">
        <SkyLayer />
        <CloudLayer reducedMotion={reducedMotion} />
        <LightLayer />
        <BirdLayer reducedMotion={reducedMotion} />
        <TreeLayer />
        <HazeLayer />
        <PetalLayer kind="back" rig={rig} active={active} reducedMotion={reducedMotion} />
        <MandapLayer />
        <HangingFloralLayer reducedMotion={reducedMotion} />
        <GardenLayer />
        <LotusLayer reducedMotion={reducedMotion} />
        <PetalLayer kind="front" rig={rig} active={active} reducedMotion={reducedMotion} />
        <InvitationCopy />
      </div>
    </div>
  );
};

export const EveningScene = DaytimeScene;
