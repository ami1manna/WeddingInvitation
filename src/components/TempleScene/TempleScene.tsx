import React, { useEffect, useRef } from 'react';
import coupleImg from '../../../assets/couple.webp';
import interiorImg from '../../../assets/evening/interior_maroon.webp';
import facadeImg from '../../../assets/evening/facade_golden.webp';
import doorLeftImg from '../../../assets/evening/door-left_golden.webp';
import doorRightImg from '../../../assets/evening/door-right_golden.webp';
import './TempleScene.css';

interface TempleSceneProps {
  progress?: number;
  opacity?: number;
  reducedMotion?: boolean;
}

export const TempleScene: React.FC<TempleSceneProps> = ({
  progress = 0,
  opacity = 1,
  reducedMotion = false
}) => {
  const worldRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const doorLRef = useRef<HTMLDivElement>(null);
  const doorRRef = useRef<HTMLDivElement>(null);
  const doorSpillRef = useRef<HTMLDivElement>(null);
  const facadeRef = useRef<HTMLDivElement>(null);
  const interiorRef = useRef<HTMLDivElement>(null);
  const deepRef = useRef<HTMLDivElement>(null);
  const coupleRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const godraysRef = useRef<HTMLDivElement>(null);
  const bloomRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const bellLRef = useRef<SVGGElement>(null);
  const bellRRef = useRef<SVGGElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const blessingRef = useRef<HTMLParagraphElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);

  // Responsive stage scaling (1920x1080 canvas fit)
  useEffect(() => {
    const handleResize = () => {
      if (!worldRef.current) return;
      const s = Math.max(window.innerWidth / 1920, window.innerHeight / 1080);
      worldRef.current.style.setProperty('--s', s.toString());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pointer & Device Orientation tracking for smooth 3D parallax
  const coordsRef = useRef({ mx: 0, my: 0, tmx: 0, tmy: 0 });

  useEffect(() => {
    if (reducedMotion) return;

    const onPointerMove = (e: PointerEvent) => {
      coordsRef.current.tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      coordsRef.current.tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        coordsRef.current.tmx = Math.max(-1, Math.min(1, e.gamma / 22));
        coordsRef.current.tmy = Math.max(-1, Math.min(1, (e.beta - 45) / 22));
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', onOrientation, { passive: true });
    }

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', onOrientation);
      }
    };
  }, [reducedMotion]);

  // Particle System setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const NUM_PARTICLES = 55;
    const particles = Array.from({ length: NUM_PARTICLES }, () => {
      const z = 0.25 + Math.random() * 1.95;
      return {
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        z,
        baseZ: z,
        radius: z > 1.7 ? 4.5 + Math.random() * 3.5 : (z > 0.9 ? 2.5 + Math.random() * 2 : 1.2 + Math.random() * 1.4),
        speedY: -(0.18 + Math.random() * 0.42),
        speedX: (Math.random() - 0.5) * 0.22,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: 1.6 + Math.random() * 2.4,
        isPetal: Math.random() < 0.25,
        isSaffron: Math.random() < 0.35,
        petalAngle: Math.random() * Math.PI,
        petalRotSpeed: (Math.random() - 0.5) * 0.025
      };
    });

    let animId: number;
    let lastTime = performance.now();

    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
    const smooth = (t: number) => t * t * (3 - 2 * t);
    const inOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      const time = now / 1000;

      // Inertia easing
      const pk = reducedMotion ? 1 : 1 - Math.exp(-dt * 5);
      coordsRef.current.mx += (coordsRef.current.tmx - coordsRef.current.mx) * pk;
      coordsRef.current.my += (coordsRef.current.tmy - coordsRef.current.my) * pk;

      const px = coordsRef.current.mx;
      const py = coordsRef.current.my;
      const p = progress;

      // 1. Camera Tilt
      if (worldRef.current && !reducedMotion) {
        const rotX = (-py * 2.5).toFixed(2);
        const rotY = (px * 3.5).toFixed(2);
        worldRef.current.style.transform = `scale(var(--s,1)) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      // 2. Foreground entrance (Bells & Garland)
      const fgVis = p < 0.45;
      if (foregroundRef.current) {
        foregroundRef.current.style.visibility = fgVis ? 'visible' : 'hidden';
        if (fgVis) {
          const fgScale = 1 + 1.55 * smooth(seg(p, 0, 0.35));
          const fgLift = -140 * smooth(seg(p, 0.05, 0.35));
          const fgTx = -px * 44;
          const fgTy = -py * 28 + fgLift;
          const fgOp = 1 - smooth(seg(p, 0.20, 0.38));
          foregroundRef.current.style.transform = `translate(${fgTx.toFixed(2)}px,${fgTy.toFixed(2)}px) scale(${fgScale.toFixed(4)})`;
          foregroundRef.current.style.opacity = fgOp.toFixed(3);

          if (bellLRef.current && bellRRef.current) {
            const sway = Math.sin(time * 2.6) * 1.8;
            bellLRef.current.style.transform = `rotate(${(px * 6 + sway).toFixed(2)}deg)`;
            bellRRef.current.style.transform = `rotate(${(px * 6 + Math.sin(time * 2.6 + 1.2) * 1.8).toFixed(2)}deg)`;
          }
        }
      }

      // 3. Facade & 3D Doors
      const fv = p < 0.52;
      if (facadeRef.current) {
        facadeRef.current.style.visibility = fv ? 'visible' : 'hidden';
        if (fv) {
          const F = 1 + smooth(seg(p, 0, 0.5)) * 3.9;
          const fade = 1 - seg(p, 0.28, 0.44);
          facadeRef.current.style.transform = `translate(${(-px * 24 * fade).toFixed(2)}px,${(-py * 16 * fade).toFixed(2)}px) scale(${F.toFixed(4)})`;

          const a = 84 * inOut(seg(p, 0.10, 0.30));
          if (doorLRef.current) doorLRef.current.style.transform = `rotateY(${a.toFixed(2)}deg)`;
          if (doorRRef.current) doorRRef.current.style.transform = `rotateY(${(-a).toFixed(2)}deg)`;

          if (doorSpillRef.current) {
            const spill = inOut(seg(p, 0.10, 0.30));
            doorSpillRef.current.style.transform = `scale(${spill.toFixed(3)})`;
            doorSpillRef.current.style.opacity = (spill * (1 - seg(p, 0.34, 0.48)) * 0.9).toFixed(3);
          }
        }
      }

      // 4. Hall Interior & Sanctum Deep
      const si = 0.82 + smooth(seg(p, 0.08, 0.86)) * 2.4;
      const lift = -53 * smooth(seg(p, 0.5, 0.9));
      if (interiorRef.current) {
        interiorRef.current.style.transform = `translate(${(-px * 13).toFixed(2)}px,${(-py * 8 + lift).toFixed(2)}px) scale(${si.toFixed(4)})`;
      }
      if (deepRef.current) {
        const dScale = (si * (0.94 + 0.06 * smooth(seg(p, 0.25, 0.85)))).toFixed(4);
        deepRef.current.style.transform = `translate(${(-px * 6).toFixed(2)}px,${(-py * 4 + lift * 0.88).toFixed(2)}px) scale(${dScale})`;
      }

      // 5. Couple & Sanctum Light
      if (coupleRef.current) {
        const kc = 0.96 + smooth(seg(p, 0.56, 1)) * 0.54;
        const co = 1 - smooth(seg(p, 0.88, 0.98));
        const hover = Math.sin(time * 1.7) * 3;
        coupleRef.current.style.transform = `translate(${(-px * 4).toFixed(2)}px,${(-py * 2.5 + hover).toFixed(2)}px) scale(${kc.toFixed(4)})`;
        coupleRef.current.style.opacity = co.toFixed(3);
      }

      if (godraysRef.current) {
        const rayRot = (time * 2.8 + px * 2).toFixed(2);
        godraysRef.current.style.transform = `translate(${(-px * 2.2).toFixed(2)}px,${(-py * 1.6).toFixed(2)}px) rotate(${rayRot}deg) scale(1.2)`;
        godraysRef.current.style.opacity = (smooth(seg(p, 0.08, 0.28)) * (1 - smooth(seg(p, 0.86, 0.98))) * 0.5).toFixed(3);
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${(-px * 2).toFixed(2)}px,${(-py * 1.5).toFixed(2)}px) scale(${(1 + 0.7 * smooth(seg(p, 0.6, 1))).toFixed(3)})`;
        glowRef.current.style.opacity = (0.5 + 0.2 * seg(p, 0.55, 0.9)).toFixed(3);
      }

      if (bloomRef.current) {
        bloomRef.current.style.opacity = smooth(seg(p, 0.82, 0.98)).toFixed(3);
      }

      // Captions
      if (hintRef.current) hintRef.current.style.opacity = (1 - seg(p, 0, 0.05)).toFixed(3);
      const bo = smooth(seg(p, 0.64, 0.72)) * (1 - smooth(seg(p, 0.80, 0.86)));
      if (blessingRef.current) blessingRef.current.style.opacity = bo.toFixed(3);
      if (scrimRef.current) scrimRef.current.style.opacity = Math.max(bo, 1 - seg(p, 0, 0.05)).toFixed(3);

      // Render 3D Canvas Particles
      ctx.clearRect(0, 0, 1920, 1080);
      const camZ = p * 1.6;

      for (let i = 0; i < NUM_PARTICLES; i++) {
        const pt = particles[i];
        let effZ = (pt.baseZ - camZ) % 2.0;
        if (effZ < 0.15) effZ += 2.0;

        const scale = 1.0 / Math.max(0.2, effZ);
        const pxShift = -px * (effZ * 20);
        const pyShift = -py * (effZ * 14);

        const driftX = Math.sin(time * 0.8 + pt.phase) * 14 + (pt.speedX * time * 25) % 1920;
        const driftY = Math.cos(time * 0.7 + pt.phase) * 10 + (pt.speedY * time * 28) % 1080;

        const curX = ((pt.x + driftX) % 1920 + 1920) % 1920;
        const curY = ((pt.y + driftY) % 1080 + 1080) % 1080;

        const sx = 960 + (curX - 960 + pxShift) * (scale * 0.48 + 0.52);
        const sy = 540 + (curY - 540 + pyShift) * (scale * 0.48 + 0.52);

        if (sx < -40 || sx > 1960 || sy < -40 || sy > 1120) continue;

        const tw = 0.65 + 0.35 * Math.sin(time * pt.twinkleSpeed + pt.phase);
        const alpha = tw * clamp((effZ - 0.15) / 0.4) * (1 - smooth(seg(p, 0.91, 0.99)));
        if (alpha <= 0.02) continue;

        const r = pt.radius * (scale * 0.5 + 0.5);

        if (pt.isPetal) {
          pt.petalAngle += pt.petalRotSpeed;
          ctx.save();
          ctx.translate(sx, sy);
          ctx.rotate(pt.petalAngle);
          ctx.fillStyle = pt.isSaffron ? `rgba(255, 150, 40, ${alpha.toFixed(3)})` : `rgba(255, 195, 70, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, r * 1.8, r * 0.85, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 2.2);
          const colCore = pt.isSaffron ? `rgba(255, 230, 160, ${alpha.toFixed(3)})` : `rgba(255, 250, 210, ${alpha.toFixed(3)})`;
          const colAura = pt.isSaffron ? `rgba(255, 140, 30, ${(alpha * 0.35).toFixed(3)})` : `rgba(255, 195, 60, ${(alpha * 0.35).toFixed(3)})`;
          grad.addColorStop(0, colCore);
          grad.addColorStop(0.45, colAura);
          grad.addColorStop(1, 'rgba(255, 170, 50, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(sx, sy, r * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [progress, reducedMotion]);

  return (
    <div
      className="temple-stage"
      style={{
        opacity,
        visibility: opacity > 0 ? 'visible' : 'hidden'
      }}
      aria-label="Temple entrance leading to the sacred sanctum"
    >
      <div className="temple-viewport">
        <div ref={worldRef} className="temple-world">
          {/* Deep Sanctum Layer */}
          <div ref={deepRef} id="deep" className="temple-layer">
            <div ref={godraysRef} id="godrays" />
            <div ref={glowRef} id="glow" />
            <div ref={coupleRef} id="couple">
              <img src={coupleImg} alt="Shiva and Parvati seated together" draggable={false} />
            </div>
          </div>

          {/* Temple Hall Interior */}
          <div ref={interiorRef} id="interior" className="temple-layer">
            <img src={interiorImg} alt="Temple hall with carved pillars and lamps" draggable={false} />
          </div>

          {/* Facade & Carved Doors */}
          <div ref={facadeRef} id="facade" className="temple-layer">
            <div ref={doorSpillRef} id="door-spill" />
            <img id="wall" src={facadeImg} alt="Temple entrance with carved wooden doors" draggable={false} />
            <div ref={doorLRef} id="door-l" className="door">
              <img src={doorLeftImg} alt="" draggable={false} />
            </div>
            <div ref={doorRRef} id="door-r" className="door">
              <img src={doorRightImg} alt="" draggable={false} />
            </div>
          </div>

          {/* 3D Floating Particles Canvas */}
          <canvas ref={canvasRef} id="particles-canvas" className="temple-layer" width={1920} height={1080} />

          {/* Foreground Entrance Framing (Toran Garland & Bells) */}
          <div ref={foregroundRef} id="foreground" className="temple-layer">
            <svg id="toran-svg" viewBox="0 0 1920 1080" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="brass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff1c4" />
                  <stop offset="35%" stopColor="#d4982c" />
                  <stop offset="70%" stopColor="#9a6012" />
                  <stop offset="100%" stopColor="#f5d47a" />
                </linearGradient>
                <linearGradient id="marigold-orange" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffb703" />
                  <stop offset="60%" stopColor="#fb8500" />
                  <stop offset="100%" stopColor="#d45b00" />
                </linearGradient>
                <linearGradient id="marigold-yellow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fff07c" />
                  <stop offset="60%" stopColor="#ffbe0b" />
                  <stop offset="100%" stopColor="#e08e00" />
                </linearGradient>
                <linearGradient id="mango-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#588157" />
                  <stop offset="100%" stopColor="#284b25" />
                </linearGradient>
                <radialGradient id="diya-glow">
                  <stop offset="0" stopColor="#ffd27a" stopOpacity="0.85" />
                  <stop offset="0.35" stopColor="#ff9a3a" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#ff7a1a" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="flame-grad" cx="0.5" cy="0.75" r="0.6">
                  <stop offset="0" stopColor="#fffbe8" />
                  <stop offset="0.45" stopColor="#ffd25e" />
                  <stop offset="1" stopColor="#ff7a1a" />
                </radialGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#140602" floodOpacity="0.75" />
                </filter>
              </defs>

              <g filter="url(#shadow)">
                <path d="M0,0 L1920,0 L1920,18 L0,18 Z" fill="url(#brass-grad)" />
                <path d="M0,18 Q240,95 480,22 Q720,105 960,25 Q1200,105 1440,22 Q1680,95 1920,18" fill="none" stroke="url(#marigold-orange)" strokeWidth="22" strokeLinecap="round" strokeDasharray="1 14" />
                <path d="M0,18 Q240,95 480,22 Q720,105 960,25 Q1200,105 1440,22 Q1680,95 1920,18" fill="none" stroke="url(#marigold-yellow)" strokeWidth="14" strokeLinecap="round" strokeDasharray="1 14" />
                <path d="M120,18 Q360,118 600,24 Q960,135 1320,24 Q1560,118 1800,18" fill="none" stroke="url(#marigold-orange)" strokeWidth="18" strokeLinecap="round" strokeDasharray="1 13" />
                <path d="M120,18 Q360,118 600,24 Q960,135 1320,24 Q1560,118 1800,18" fill="none" stroke="url(#marigold-yellow)" strokeWidth="10" strokeLinecap="round" strokeDasharray="1 13" />
              </g>

              <g id="bell-assembly-l" filter="url(#shadow)">
                <path d="M310,0 L310,180" stroke="url(#brass-grad)" strokeWidth="6" strokeDasharray="12 4" strokeLinecap="round" />
                <g ref={bellLRef} id="bell-l" style={{ transformOrigin: '310px 180px' }}>
                  <circle cx="310" cy="184" r="9" fill="none" stroke="url(#brass-grad)" strokeWidth="4" />
                  <path d="M292,204 C292,188 300,185 310,185 C320,185 328,188 328,204 C328,228 340,240 344,248 L276,248 C280,240 292,228 292,204 Z" fill="url(#brass-grad)" />
                  <ellipse cx="310" cy="248" rx="35" ry="8" fill="url(#brass-grad)" />
                  <ellipse cx="310" cy="249" rx="27" ry="5" fill="#422206" />
                  <circle cx="310" cy="260" r="7" fill="url(#brass-grad)" />
                </g>
              </g>

              <g id="bell-assembly-r" filter="url(#shadow)">
                <path d="M1610,0 L1610,180" stroke="url(#brass-grad)" strokeWidth="6" strokeDasharray="12 4" strokeLinecap="round" />
                <g ref={bellRRef} id="bell-r" style={{ transformOrigin: '1610px 180px' }}>
                  <circle cx="1610" cy="184" r="9" fill="none" stroke="url(#brass-grad)" strokeWidth="4" />
                  <path d="M1592,204 C1592,188 1600,185 1610,185 C1620,185 1628,188 1628,204 C1628,228 1640,240 1644,248 L1576,248 C1580,240 1592,228 1592,204 Z" fill="url(#brass-grad)" />
                  <ellipse cx="1610" cy="248" rx="35" ry="8" fill="url(#brass-grad)" />
                  <ellipse cx="1610" cy="249" rx="27" ry="5" fill="#422206" />
                  <circle cx="1610" cy="260" r="7" fill="url(#brass-grad)" />
                </g>
              </g>
              <g filter="url(#shadow)">
              <g className="t-diya" transform="translate(250 1012) scale(1.0)">
                <circle className="t-diya-halo" cx="0" cy="-26" r="90" fill="url(#diya-glow)" style={{ animationDelay: '0s' }} />
                <path d="M-34,-14 C-30,6 -14,12 0,12 C14,12 30,6 34,-14 C20,-8 -20,-8 -34,-14 Z" fill="url(#brass-grad)" />
                <ellipse cx="0" cy="-14" rx="34" ry="6" fill="#3a2208" />
                <ellipse cx="0" cy="-15" rx="26" ry="3.4" fill="#ffb347" opacity="0.6" />
                <path className="t-flame" d="M0,-52 C8,-42 10,-30 0,-18 C-10,-30 -8,-42 0,-52 Z" fill="url(#flame-grad)" style={{ animationDelay: '0s' }} />
              </g>
              <g className="t-diya" transform="translate(560 1040) scale(0.8)">
                <circle className="t-diya-halo" cx="0" cy="-26" r="90" fill="url(#diya-glow)" style={{ animationDelay: '-0.6s' }} />
                <path d="M-34,-14 C-30,6 -14,12 0,12 C14,12 30,6 34,-14 C20,-8 -20,-8 -34,-14 Z" fill="url(#brass-grad)" />
                <ellipse cx="0" cy="-14" rx="34" ry="6" fill="#3a2208" />
                <ellipse cx="0" cy="-15" rx="26" ry="3.4" fill="#ffb347" opacity="0.6" />
                <path className="t-flame" d="M0,-52 C8,-42 10,-30 0,-18 C-10,-30 -8,-42 0,-52 Z" fill="url(#flame-grad)" style={{ animationDelay: '-0.6s' }} />
              </g>
              <g className="t-diya" transform="translate(1360 1040) scale(0.8)">
                <circle className="t-diya-halo" cx="0" cy="-26" r="90" fill="url(#diya-glow)" style={{ animationDelay: '-0.3s' }} />
                <path d="M-34,-14 C-30,6 -14,12 0,12 C14,12 30,6 34,-14 C20,-8 -20,-8 -34,-14 Z" fill="url(#brass-grad)" />
                <ellipse cx="0" cy="-14" rx="34" ry="6" fill="#3a2208" />
                <ellipse cx="0" cy="-15" rx="26" ry="3.4" fill="#ffb347" opacity="0.6" />
                <path className="t-flame" d="M0,-52 C8,-42 10,-30 0,-18 C-10,-30 -8,-42 0,-52 Z" fill="url(#flame-grad)" style={{ animationDelay: '-0.3s' }} />
              </g>
              <g className="t-diya" transform="translate(1670 1012) scale(1.0)">
                <circle className="t-diya-halo" cx="0" cy="-26" r="90" fill="url(#diya-glow)" style={{ animationDelay: '-0.9s' }} />
                <path d="M-34,-14 C-30,6 -14,12 0,12 C14,12 30,6 34,-14 C20,-8 -20,-8 -34,-14 Z" fill="url(#brass-grad)" />
                <ellipse cx="0" cy="-14" rx="34" ry="6" fill="#3a2208" />
                <ellipse cx="0" cy="-15" rx="26" ry="3.4" fill="#ffb347" opacity="0.6" />
                <path className="t-flame" d="M0,-52 C8,-42 10,-30 0,-18 C-10,-30 -8,-42 0,-52 Z" fill="url(#flame-grad)" style={{ animationDelay: '-0.9s' }} />
              </g>
              </g>
            </svg>
          </div>

          <div ref={bloomRef} id="bloom" className="temple-layer" />
        </div>
      </div>

      <div id="dusk-wash" />
      <div id="vignette" />
      <div ref={scrimRef} id="scrim" />

      <p ref={hintRef} id="temple-hint" className="temple-caption">
        <span>Scroll to enter the temple</span>
        <b className="line" />
      </p>

      <p ref={blessingRef} id="temple-blessing" className="temple-caption">
        With the blessings of Shiva & Parvati
      </p>
    </div>
  );
};
