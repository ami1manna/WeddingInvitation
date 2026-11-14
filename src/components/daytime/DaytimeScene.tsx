import React, { useRef } from 'react';
import { DaytimeCanvas } from './DaytimeCanvas';
import { useReducedMotion } from './useReducedMotion';
import './DaytimeScene.css';

interface DaytimeSceneProps {
  progress?: number;
  opacity?: number;
  px?: number;
  py?: number;
  reducedMotion?: boolean;
}

export const DaytimeScene: React.FC<DaytimeSceneProps> = ({
  progress = 0,
  opacity = 1,
  px = 0,
  py = 0,
  reducedMotion: propReducedMotion
}) => {
  const systemReducedMotion = useReducedMotion();
  const reducedMotion = propReducedMotion ?? systemReducedMotion;
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coords normalized for Three.js camera & layer parallax
  const mouse = { x: px, y: py };

  // Phase 4 & 5 Invitation text opacity reveal (60% to 100%)
  const copyOpacity = Math.min(1, Math.max(0, (progress - 0.55) / 0.35));

  return (
    <div
      ref={containerRef}
      className={`daytime-viewport ${opacity > 0.02 ? 'active' : ''}`}
      style={{
        opacity,
        visibility: opacity > 0 ? 'visible' : 'hidden'
      }}
      aria-label="Daytime 3D garden wedding scene with ivory mandap"
    >
      {/* Three.js 3D Environment Canvas */}
      <DaytimeCanvas
        scrollProgress={progress}
        mouse={mouse}
        opacity={opacity}
        reducedMotion={reducedMotion}
      />

      {/* Subtle Ceremony Badge */}
      <div
        className="daytime-intro-badge"
        style={{
          opacity: copyOpacity,
          transform: `translate3d(${(-px * 12).toFixed(2)}px, ${(-py * 8).toFixed(2)}px, 0)`
        }}
        aria-hidden="true"
      >
        <div className="mandap-intro-chip">
          <span className="chip-accent">❖</span>
          <span>Daytime Mandap Ceremony</span>
          <span className="chip-accent">❖</span>
        </div>
      </div>
    </div>
  );
};

