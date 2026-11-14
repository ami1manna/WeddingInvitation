import React from 'react';
import { EVENING_ASSETS as A } from './assets';

/** Each tree is two baked grades (twilight / night) cross-faded by --night, plus a lantern glow. */
export const TreeLayer: React.FC = React.memo(() => (
  <div className="evening-layer evening-trees-layer" aria-hidden="true">
    <div className="trees-cluster trees-left" data-fx="trees-left">
      <img src={A.treesLeftDusk} alt="" className="trees-img" decoding="async" draggable={false} />
      <img src={A.treesLeftNight} alt="" className="trees-img trees-night" decoding="async" draggable={false} />
      <span className="lantern-glow" style={{ left: '13.5%', top: '60%' }} />
    </div>
    <div className="trees-cluster trees-right" data-fx="trees-right">
      <img src={A.treesRightDusk} alt="" className="trees-img" decoding="async" draggable={false} />
      <img src={A.treesRightNight} alt="" className="trees-img trees-night" decoding="async" draggable={false} />
      <span className="lantern-glow" style={{ left: '86%', top: '57%' }} />
    </div>
  </div>
));
