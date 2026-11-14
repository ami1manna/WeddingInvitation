import React from 'react';
import { EVENING_ASSETS as A } from './assets';

export const LotusLayer: React.FC<{ reducedMotion?: boolean }> = React.memo(({ reducedMotion = false }) => (
  <div className="evening-layer evening-lotus-layer" aria-hidden="true">
    <div className="lotus-fx" data-fx="lotus">
      <div className={`lotus-container ${reducedMotion ? 'static' : ''}`}>
        <img src={A.lotusDusk} alt="" className="lotus-img" decoding="async" draggable={false} />
        <img src={A.lotusNight} alt="" className="lotus-img lotus-night" decoding="async" draggable={false} />
      </div>
    </div>
  </div>
));
