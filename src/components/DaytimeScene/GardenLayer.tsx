import React from 'react';
import { DAYTIME_ASSETS } from './assets';

export const GardenLayer: React.FC = React.memo(() => (
  <div className="daytime-layer daytime-garden-layer evening-garden" aria-hidden="true">
    <div className="garden-container" data-fx="garden">
      <img
        src={DAYTIME_ASSETS.garden}
        alt="Foreground garden bed with blooming flowers illuminated in the evening"
        className="garden-img"
        decoding="async"
        draggable={false}
      />

      {/* Garden Pathway Glowing Brass Diyas */}
      <div className="garden-diya gd-1">
        <div className="diya-flame" />
        <div className="diya-glow" />
      </div>
      <div className="garden-diya gd-2">
        <div className="diya-flame" />
        <div className="diya-glow" />
      </div>
      <div className="garden-diya gd-3">
        <div className="diya-flame" />
        <div className="diya-glow" />
      </div>
      <div className="garden-diya gd-4">
        <div className="diya-flame" />
        <div className="diya-glow" />
      </div>
    </div>

    {/* Photorealistic Articulated Indian Blue Peacock - naturally anchored to garden turf */}
    <div className="realistic-peacock-station" aria-hidden="true">
      <div className="peacock-rig">
        {/* Soft ground contact shadow anchoring claws to grass */}
        <div className="peacock-contact-shadow" />

        {/* Long iridescent tail train trailing naturally on the lawn */}
        <div className="peacock-part-tail">
          <img
            src={DAYTIME_ASSETS.peacockTail}
            alt=""
            className="peacock-part-img"
            draggable={false}
          />
        </div>

        {/* Stable grounded body, chest, wings, and stationary legs/feet */}
        <div className="peacock-part-body">
          <img
            src={DAYTIME_ASSETS.peacockBody}
            alt=""
            className="peacock-part-img"
            draggable={false}
          />
        </div>

        {/* Articulated neck, head & crest with lifelike bird saccades & grazing dips */}
        <div className="peacock-part-head">
          <img
            src={DAYTIME_ASSETS.peacockHead}
            alt="Photorealistic Indian Blue Peacock head with crest"
            className="peacock-part-img"
            draggable={false}
          />
        </div>

        {/* Shimmering iridescence catching evening candlelight and golden twilight */}
        <div className="peacock-sheen-overlay" />
      </div>
    </div>
  </div>
));
