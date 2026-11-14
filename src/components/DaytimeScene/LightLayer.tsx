import React from 'react';

/**
 * Evening & Night Atmosphere Layer
 * - moonlight-beam : soft, cool silver moonlight ray piercing through the trees
 * - night-ambient : deep indigo and dusky violet atmospheric glow
 * - evening-bokeh : delicate out-of-focus golden bokeh circles
 */
export const LightLayer: React.FC = React.memo(() => (
  <div className="daytime-layer daytime-light-layer evening-light" aria-hidden="true">
    {/* Soft Moonbeam Shaft */}
    <div className="moonlight-rays" data-fx="rays">
      <div className="moonlight-beam-spin" />
    </div>

    {/* Subtle Atmospheric Night Bloom */}
    <div className="night-ambient-glow" />

    {/* Floating Golden Bokeh Discs */}
    <div className="atmosphere-bokeh">
      <span className="atmo-disc ad-1" />
      <span className="atmo-disc ad-2" />
      <span className="atmo-disc ad-3" />
      <span className="atmo-disc ad-4" />
      <span className="atmo-disc ad-5" />
      <span className="atmo-disc ad-6" />
    </div>
  </div>
));

/** Low dusky twilight mist that sits between the trees and the mandap. */
export const HazeLayer: React.FC = React.memo(() => (
  <div className="daytime-layer daytime-haze-layer evening-haze" aria-hidden="true">
    <div className="haze-band evening-haze-band" />
  </div>
));
