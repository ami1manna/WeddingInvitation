import React, { useEffect, useRef, useState } from 'react';
import receptionBg from '../../../assets/reception/reception_bg.jpg';
import { audioEngine } from '../../utils/audio';
import './NightReceptionScene.css';

interface NightReceptionSceneProps {
  progress?: number; // 0 to 1 relative to scene window
  opacity?: number;
  px?: number;
  py?: number;
  reducedMotion?: boolean;
}

interface FireworkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  decay: number;
  gravity: number;
  trail: { x: number; y: number }[];
}

export const NightReceptionScene: React.FC<NightReceptionSceneProps> = ({
  progress = 0,
  opacity = 1,
  px = 0,
  py = 0,
  reducedMotion = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<FireworkParticle[]>([]);
  const [clickNotice, setClickNotice] = useState(true);

  // Fireworks Animation Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let lastBurstTime = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Color palettes for fireworks: Gold, Rose Gold, Royal White, Emerald
    const PALETTES = [
      ['#ffd700', '#ffeb3b', '#fff8e1', '#ffa000'],
      ['#ff4081', '#ff80ab', '#f8bbd0', '#ffffff'],
      ['#00e676', '#69f0ae', '#b9f6ca', '#ffffff'],
      ['#ff9100', '#ffab40', '#ffe0b2', '#ffffff'],
      ['#e040fb', '#ea80fc', '#f3e5f5', '#ffd54f']
    ];

    const createBurst = (x: number, y: number, count = 48) => {
      audioEngine.playFireworkPop();
      const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.2;
        const speed = 2.5 + Math.random() * 5.5;
        const color = palette[Math.floor(Math.random() * palette.length)];

        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
          size: 2 + Math.random() * 2.5,
          decay: 0.012 + Math.random() * 0.018,
          gravity: 0.08,
          trail: []
        });
      }
    };

    let lastTime = performance.now();

    const loop = (now: number) => {
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (opacity > 0.05) {
        // Automatic fireworks bursts when scene is visible
        if (now - lastBurstTime > 1600 && !reducedMotion) {
          lastBurstTime = now;
          const burstX = canvas.width * (0.2 + Math.random() * 0.6);
          const burstY = canvas.height * (0.12 + Math.random() * 0.28);
          createBurst(burstX, burstY, 52);
        }

        // Update and render active particles
        for (let i = particlesRef.current.length - 1; i >= 0; i--) {
          const p = particlesRef.current[i];
          p.trail.push({ x: p.x, y: p.y });
          if (p.trail.length > 5) p.trail.shift();

          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.vx *= 0.985;
          p.vy *= 0.985;
          p.alpha -= p.decay;

          if (p.alpha <= 0) {
            particlesRef.current.splice(i, 1);
            continue;
          }

          // Draw sparkling trail
          if (p.trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(p.trail[0].x, p.trail[0].y);
            for (let t = 1; t < p.trail.length; t++) {
              ctx.lineTo(p.trail[t].x, p.trail[t].y);
            }
            ctx.strokeStyle = p.color;
            ctx.lineWidth = p.size * 0.55;
            ctx.globalAlpha = p.alpha * 0.45 * opacity;
            ctx.stroke();
          }

          // Draw glowing core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * opacity;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, [opacity, reducedMotion]);

  // Handle tap / click to trigger celebratory fireworks
  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    audioEngine.playFireworkPop();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Create a double burst
    const PALETTES = [
      ['#ffd700', '#ffffff', '#ffab00'],
      ['#ff4081', '#ffeb3b', '#ffffff']
    ];
    const pal = PALETTES[Math.floor(Math.random() * PALETTES.length)];
    for (let i = 0; i < 60; i++) {
      const angle = (Math.PI * 2 * i) / 60 + (Math.random() - 0.5) * 0.15;
      const speed = 3.0 + Math.random() * 6.5;
      particlesRef.current.push({
        x: clickX,
        y: clickY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: pal[Math.floor(Math.random() * pal.length)],
        size: 2.2 + Math.random() * 2.8,
        decay: 0.01 + Math.random() * 0.015,
        gravity: 0.08,
        trail: []
      });
    }

    setClickNotice(false);
  };

  // Parallax calculations
  const easeIn = Math.min(1, Math.max(0, progress * 1.3));
  const bgScale = 1.05 - easeIn * 0.03;
  const cardLift = (1 - easeIn) * 60;

  return (
    <section
      ref={containerRef}
      className="reception-stage"
      onClick={handleStageClick}
      style={{
        opacity,
        visibility: opacity > 0 ? 'visible' : 'hidden',
        pointerEvents: opacity > 0.4 ? 'auto' : 'none'
      }}
      aria-label="Evening Reception Celebration and Details"
    >
      {/* Background Starry Palace Courtyard */}
      <div
        className="reception-bg-layer"
        style={{
          transform: `translate3d(${px * -16}px, ${py * -10}px, 0) scale(${bgScale})`
        }}
      >
        <img
          src={receptionBg}
          alt="Palace courtyard at night with illuminated arches and couple Siddharth and Manisha"
          className="reception-bg-img"
          draggable={false}
        />
        <div className="reception-night-tint" />
      </div>

      {/* Twinkling Night Stars */}
      <div className="reception-stars" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${(i * 19) % 55}%`,
              left: `${(i * 23) % 100}%`,
              animationDelay: `${(i * 0.35) % 3}s`,
              transform: `scale(${0.6 + (i % 3) * 0.4})`
            }}
          />
        ))}
      </div>

      {/* Canvas for Fireworks */}
      <canvas ref={canvasRef} className="reception-fireworks-canvas" aria-hidden="true" />

      {/* Floating Reception Announcement Card / Overlay */}
      <div
        className="reception-content-wrap"
        style={{
          transform: `translate3d(${px * -8}px, ${cardLift + py * -6}px, 0)`
        }}
      >
        {/* Date Plaque */}
        <div className="reception-date-badge">
          <span className="sat-text">SAT.</span>
          <span className="day-number">3</span>
          <span className="rd-sup">RD</span>
          <span className="may-script">May</span>
          <span className="year-number">2025</span>
        </div>

        {/* Tagline Heading */}
        <h2 className="reception-title">BLISSFUL BEGINNINGS</h2>
        <p className="reception-tagline">
          LET&apos;S KICK OFF THE FESTIVITIES
          <br />
          WITH RHYTHMS OF ROMANCE
        </p>

        <div className="reception-flourish-divider">
          <span className="flourish-diamond">◆</span>
          <span className="flourish-line" />
          <span className="flourish-diamond">◆</span>
        </div>

        {/* Reception Details */}
        <div className="reception-time-venue">
          <div className="time-badge">
            <h3 className="event-heading">RECEPTION</h3>
            <p className="event-timing">7:00 PM ONWARDS</p>
          </div>

          <div className="venue-badge">
            <span className="venue-at">AT</span>
            <h4 className="venue-name">MARAKATA CHAMARA VAJRA</h4>
            <p className="venue-location">JAYAMAHAL, BENGALURU</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="reception-action-row">
          <a
            href="https://maps.google.com/?q=Marakata+Chamara+Vajra+Jayamahal+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="reception-btn"
            onClick={(e) => e.stopPropagation()}
          >
            <span>📍</span>
            <span>View Venue on Google Maps</span>
          </a>
        </div>
      </div>

      {/* Interactive tap prompt */}
      {clickNotice && (
        <div className="tap-fireworks-prompt" aria-hidden="true">
          <span>✨ Tap anywhere to burst fireworks ✨</span>
        </div>
      )}
    </section>
  );
};
