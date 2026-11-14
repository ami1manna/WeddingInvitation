import React from 'react';
import { EVENING_ASSETS as A } from './assets';

export const GardenLayer: React.FC = React.memo(() => (
  <div className="evening-layer evening-garden-layer" aria-hidden="true">
    <div className="garden-container" data-fx="garden">
      <img src={A.gardenDusk} alt="" className="garden-img" decoding="async" draggable={false} />
      <img src={A.gardenNight} alt="" className="garden-img garden-night" decoding="async" draggable={false} />
    </div>
  </div>
));
