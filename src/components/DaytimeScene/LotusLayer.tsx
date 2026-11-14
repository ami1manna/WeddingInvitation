import React from 'react';
import { DAYTIME_ASSETS } from './assets';

interface LotusLayerProps {
  reducedMotion?: boolean;
}

export const LotusLayer: React.FC<LotusLayerProps> = React.memo(({ reducedMotion = false }) => (
  <div className="daytime-layer daytime-lotus-layer evening-lotus" aria-hidden="true">
    <div className="lotus-fx" data-fx="lotus">
      <div className={`lotus-container ${reducedMotion ? 'static' : ''}`}>
        <img
          src={DAYTIME_ASSETS.lotus}
          alt="Auspicious blooming pink lotus cluster floating gracefully in the garden pond"
          className="lotus-img"
          decoding="async"
          draggable={false}
        />
        {/* Floating illuminated water diya near lotus */}
        <div className="water-diya wd-1">
          <div className="diya-flame" />
          <div className="diya-glow" />
          <div className="water-ripple" />
        </div>
      </div>
    </div>
  </div>
));
