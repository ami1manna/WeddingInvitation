import React from 'react';
import { DAYTIME_ASSETS } from './assets';

interface CloudLayerProps {
  reducedMotion?: boolean;
}

const TIERS = ['high', 'mid', 'low'] as const;

/**
 * Three cloud banks at different depths. Each bank is wrapped twice:
 *   .cloud-fx    -> owned by the depth rig (scroll / pointer parallax)
 *   .cloud-tier  -> owned by CSS (slow horizontal drift)
 */
export const CloudLayer: React.FC<CloudLayerProps> = React.memo(({ reducedMotion = false }) => (
  <div className="daytime-layer daytime-clouds-layer" aria-hidden="true">
    {TIERS.map(tier => (
      <div key={tier} className={`cloud-fx cloud-fx-${tier}`} data-fx={`cloud-${tier}`}>
        <div className={`cloud-tier cloud-tier-${tier} ${reducedMotion ? 'static' : ''}`}>
          <img
            src={DAYTIME_ASSETS.clouds}
            alt=""
            className="cloud-img"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    ))}
  </div>
));
