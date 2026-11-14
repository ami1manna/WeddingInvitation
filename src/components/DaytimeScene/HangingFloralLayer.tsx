import React from 'react';
import { DAYTIME_ASSETS } from './assets';

interface HangingFloralLayerProps {
  reducedMotion?: boolean;
}

export const HangingFloralLayer: React.FC<HangingFloralLayerProps> = React.memo(({ reducedMotion = false }) => (
  <div className="daytime-layer daytime-branches-layer evening-branches" aria-hidden="true">
    <div className="branch-anchor branch-left" data-fx="branches-left">
      <div className={`branch-sway ${reducedMotion ? 'static' : ''}`}>
        <img
          src={DAYTIME_ASSETS.leftBranches}
          alt="Hanging white and marigold floral branches framing the upper left entrance"
          className="branch-img"
          decoding="async"
          draggable={false}
        />
        {/* Micro-fairy lights intertwined in left floral branch */}
        <div className="branch-fairy-lights branch-fairy-left">
          <span className="b-dot bd-1" />
          <span className="b-dot bd-2" />
          <span className="b-dot bd-3" />
          <span className="b-dot bd-4" />
          <span className="b-dot bd-5" />
        </div>
      </div>
    </div>

    <div className="branch-anchor branch-right" data-fx="branches-right">
      <div className={`branch-sway ${reducedMotion ? 'static' : ''}`}>
        <img
          src={DAYTIME_ASSETS.rightBranches}
          alt="Hanging floral garland branches framing the upper right entrance"
          className="branch-img"
          decoding="async"
          draggable={false}
        />
        {/* Micro-fairy lights intertwined in right floral branch */}
        <div className="branch-fairy-lights branch-fairy-right">
          <span className="b-dot bd-1" />
          <span className="b-dot bd-2" />
          <span className="b-dot bd-3" />
          <span className="b-dot bd-4" />
          <span className="b-dot bd-5" />
        </div>
      </div>
    </div>
  </div>
));
