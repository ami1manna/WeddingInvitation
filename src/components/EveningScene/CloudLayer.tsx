import React from 'react';
import { EVENING_ASSETS } from './assets';

const TIERS = ['high', 'mid', 'low'] as const;

/** Dusk-graded cloud banks (violet bodies, amber under-light). They fade as night falls. */
export const CloudLayer: React.FC<{ reducedMotion?: boolean }> = React.memo(({ reducedMotion = false }) => (
  <div className="evening-layer evening-clouds-layer" aria-hidden="true">
    {TIERS.map(tier => (
      <div key={tier} className={`cloud-fx cloud-fx-${tier}`} data-fx={`cloud-${tier}`}>
        <div className={`cloud-tier cloud-tier-${tier} ${reducedMotion ? 'static' : ''}`}>
          <img src={EVENING_ASSETS.cloudsDusk} alt="" className="cloud-img" decoding="async" draggable={false} />
        </div>
      </div>
    ))}
  </div>
));
