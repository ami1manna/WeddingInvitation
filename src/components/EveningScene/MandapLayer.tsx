import React from 'react';
import { EVENING_ASSETS as A } from './assets';

/**
 * The focal point. Two baked grades of the same artwork:
 *   dim  - blue twilight silhouette, what you first see through the dusk
 *   lit  - warm champagne-gold, as if the fairy lights just came on
 * --lit cross-fades them, and the spotlight / floor pool / diya flames ride the same variable.
 */
export const MandapLayer: React.FC = React.memo(() => (
  <div className="evening-layer evening-mandap-layer" role="region"
       aria-label="Illuminated floral wedding mandap glowing against the night sky">
    <div className="mandap-container" data-fx="mandap">
      <div className="mandap-spot" aria-hidden="true"><i /></div>
      <div className="mandap-shadow" aria-hidden="true" />
      <div className="mandap-glow" aria-hidden="true" />
      <img src={A.mandapDim} alt="" className="mandap-img" decoding="async" draggable={false} />
      <img src={A.mandapLit} alt="Wedding mandap" className="mandap-img mandap-lit" decoding="async" draggable={false} />
      <span className="mandap-flame" style={{ left: '13.4%', top: '81%' }} aria-hidden="true" />
      <span className="mandap-flame" style={{ left: '86.2%', top: '81%', animationDelay: '-0.7s' }} aria-hidden="true" />
      <div className="mandap-pool" aria-hidden="true" />
    </div>
  </div>
));
