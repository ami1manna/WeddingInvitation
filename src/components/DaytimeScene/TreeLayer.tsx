import React from 'react';
import { DAYTIME_ASSETS } from './assets';

export const TreeLayer: React.FC = React.memo(() => (
  <div className="daytime-layer daytime-trees-layer evening-trees" aria-hidden="true">
    {/* Left Tree Cluster with Fairy Lights & Hanging Lanterns */}
    <div className="trees-cluster trees-left" data-fx="trees-left">
      <div className="tree-sway-wrapper tree-sway-left">
        <img
          src={DAYTIME_ASSETS.leftTrees}
          alt="Evening garden trees framing the left side of the illuminated wedding mandap"
          className="trees-img"
          decoding="async"
          draggable={false}
        />
        {/* Warm Fairy Lights on Left Trees */}
        <div className="tree-fairy-lights tree-fairy-lights-left" />

        {/* Hanging Glass & Brass Lanterns */}
        <div className="tree-lantern tree-lantern-left-1">
          <div className="lantern-cord" />
          <div className="lantern-cage">
            <div className="lantern-glow" />
            <div className="lantern-flame" />
          </div>
        </div>
        <div className="tree-lantern tree-lantern-left-2">
          <div className="lantern-cord" />
          <div className="lantern-cage">
            <div className="lantern-glow" />
            <div className="lantern-flame" />
          </div>
        </div>
      </div>
    </div>

    {/* Right Tree Cluster with Fairy Lights & Hanging Lanterns */}
    <div className="trees-cluster trees-right" data-fx="trees-right">
      <div className="tree-sway-wrapper tree-sway-right">
        <img
          src={DAYTIME_ASSETS.rightTrees}
          alt="Evening garden trees framing the right side of the illuminated wedding mandap"
          className="trees-img"
          decoding="async"
          draggable={false}
        />
        {/* Warm Fairy Lights on Right Trees */}
        <div className="tree-fairy-lights tree-fairy-lights-right" />

        {/* Hanging Glass & Brass Lanterns */}
        <div className="tree-lantern tree-lantern-right-1">
          <div className="lantern-cord" />
          <div className="lantern-cage">
            <div className="lantern-glow" />
            <div className="lantern-flame" />
          </div>
        </div>
        <div className="tree-lantern tree-lantern-right-2">
          <div className="lantern-cord" />
          <div className="lantern-cage">
            <div className="lantern-glow" />
            <div className="lantern-flame" />
          </div>
        </div>
      </div>
    </div>
  </div>
));
