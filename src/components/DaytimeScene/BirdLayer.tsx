import React from 'react';
import { DAYTIME_ASSETS } from './assets';

interface BirdLayerProps {
  reducedMotion?: boolean;
}

/** Two flocks at different depths flying in opposite directions. */
export const BirdLayer: React.FC<BirdLayerProps> = React.memo(({ reducedMotion = false }) => (
  <div className="daytime-layer daytime-birds-layer" aria-hidden="true">
    {/* Distant flock: smaller, softer, flies right-to-left */}
    <div className="birds-fx" data-fx="birds-far">
      <div className={`birds-flight-wrapper flock-far ${reducedMotion ? 'static' : ''}`}>
        <div className="flock-flip">
          <img src={DAYTIME_ASSETS.birds} alt="" className="birds-img" decoding="async" draggable={false} />
        </div>
      </div>
    </div>

    {/* Near flock: the original left-to-right flight */}
    <div className="birds-fx" data-fx="birds">
      <div className={`birds-flight-wrapper flock-near ${reducedMotion ? 'static' : ''}`}>
        <img
          src={DAYTIME_ASSETS.birds}
          alt="Flock of birds gracefully soaring across the morning sky"
          className="birds-img"
          decoding="async"
          draggable={false}
        />
      </div>
    </div>
  </div>
));
