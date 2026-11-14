import React from 'react';
import { EVENING_ASSETS as A } from './assets';

export const HangingFloralLayer: React.FC<{ reducedMotion?: boolean }> = React.memo(({ reducedMotion = false }) => (
  <div className="evening-layer evening-branches-layer" aria-hidden="true">
    <div className="branch-anchor branch-left" data-fx="branches-left">
      <div className={`branch-sway ${reducedMotion ? 'static' : ''}`}>
        <img src={A.branchesLeftDusk} alt="" className="branch-img" decoding="async" draggable={false} />
        <img src={A.branchesLeftNight} alt="" className="branch-img branch-night" decoding="async" draggable={false} />
        <span className="lantern-glow bell-glow" style={{ left: '34%', top: '46%' }} />
      </div>
    </div>
    <div className="branch-anchor branch-right" data-fx="branches-right">
      <div className={`branch-sway ${reducedMotion ? 'static' : ''}`}>
        <img src={A.branchesRightDusk} alt="" className="branch-img" decoding="async" draggable={false} />
        <img src={A.branchesRightNight} alt="" className="branch-img branch-night" decoding="async" draggable={false} />
      </div>
    </div>
  </div>
));
