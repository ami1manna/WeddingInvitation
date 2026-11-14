import React, { useEffect, useRef } from 'react';
import { DAYTIME_ASSETS } from './assets';

/**
 * 60fps Physical Fluid Agni Fire Canvas
 * Creates dynamic, non-repeating turbulent flame physics with additive light blending,
 * incandescent white-hot core, ascending turbulent fluid particles, and floating ember sparks.
 */
const RealisticFireCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const NUM_PARTICLES = 36;
    interface FireParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
    }

    const spawnParticle = (p?: FireParticle): FireParticle => {
      const angle = (Math.random() - 0.5) * 0.45;
      const speed = 1.1 + Math.random() * 2.0;
      return {
        x: 70 + (Math.random() - 0.5) * 28,
        y: 132 + (Math.random() - 0.5) * 6,
        vx: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.35,
        vy: -Math.cos(angle) * speed - 0.5,
        size: 13 + Math.random() * 11,
        life: 0,
        maxLife: 28 + Math.random() * 22
      };
    };

    const particles: FireParticle[] = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const p = spawnParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    // Floating Ember Sparks
    const NUM_SPARKS = 14;
    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }

    const sparks: Spark[] = Array.from({ length: NUM_SPARKS }, () => ({
      x: 70 + (Math.random() - 0.5) * 36,
      y: 126,
      vx: (Math.random() - 0.5) * 1.1,
      vy: -(1.4 + Math.random() * 2.2),
      life: Math.random() * 50,
      maxLife: 40 + Math.random() * 30,
      size: 1.2 + Math.random() * 1.8
    }));

    let t = 0;

    const render = () => {
      t += 0.055;
      ctx.clearRect(0, 0, 140, 160);

      // 1. Incandescent Glowing Charcoal Bed in the Kund Pit
      const bedGrad = ctx.createRadialGradient(70, 134, 4, 70, 134, 34);
      bedGrad.addColorStop(0, 'rgba(255, 240, 180, 0.95)');
      bedGrad.addColorStop(0.35, 'rgba(255, 120, 20, 0.88)');
      bedGrad.addColorStop(0.75, 'rgba(180, 30, 0, 0.5)');
      bedGrad.addColorStop(1, 'rgba(40, 10, 0, 0)');
      ctx.fillStyle = bedGrad;
      ctx.beginPath();
      ctx.ellipse(70, 134, 34, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Optical Additive Blending (Real Physical Fire Light)
      ctx.globalCompositeOperation = 'lighter';

      // 3. Realistic Fluid Flame Tongues (Harmonic Waves)
      for (let i = 0; i < 3; i++) {
        const offset = (i - 1) * 11;
        const wave1 = Math.sin(t * 3.6 + i * 2.2) * 6.5;
        const wave2 = Math.cos(t * 5.4 + i * 1.8) * 4.5;
        const tipX = 70 + offset * 0.7 + wave1;
        const tipY = 28 + (i === 1 ? -14 : 4) + wave2;

        const flameGrad = ctx.createRadialGradient(70 + offset * 0.3, 130, 4, tipX, tipY, 46);
        flameGrad.addColorStop(0, 'rgba(255, 248, 195, 0.92)');
        flameGrad.addColorStop(0.35, 'rgba(255, 155, 25, 0.72)');
        flameGrad.addColorStop(0.7, 'rgba(220, 45, 0, 0.45)');
        flameGrad.addColorStop(1, 'rgba(110, 0, 0, 0)');

        ctx.fillStyle = flameGrad;
        ctx.beginPath();
        ctx.moveTo(52 + offset * 0.4, 136);
        ctx.bezierCurveTo(46 + offset + wave1 * 0.5, 96, tipX - 13, 58, tipX, tipY);
        ctx.bezierCurveTo(tipX + 13, 58, 94 + offset - wave1 * 0.5, 96, 88 + offset * 0.4, 136);
        ctx.closePath();
        ctx.fill();
      }

      // 4. Upward Moving Turbulent Fire Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;
        if (p.life >= p.maxLife) {
          particles[i] = spawnParticle(p);
          continue;
        }

        const progress = p.life / p.maxLife;
        p.x += p.vx + Math.sin(t * 2.2 + p.y * 0.05) * 0.4;
        p.y += p.vy;

        const currentRadius = p.size * (1 - progress * 0.62);
        const alpha = Math.sin(progress * Math.PI) * 0.78;

        let r = 255, g, b;
        if (progress < 0.28) {
          g = Math.floor(215 + (1 - progress / 0.28) * 40);
          b = Math.floor(110 + (1 - progress / 0.28) * 115);
        } else if (progress < 0.68) {
          const norm = (progress - 0.28) / 0.4;
          g = Math.floor(215 - norm * 135);
          b = 12;
        } else {
          const norm = (progress - 0.68) / 0.32;
          g = Math.floor(80 - norm * 70);
          b = 0;
        }

        const pGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(1, currentRadius));
        pGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        pGrad.addColorStop(0.5, `rgba(${r}, ${Math.floor(g * 0.6)}, ${b}, ${alpha * 0.5})`);
        pGrad.addColorStop(1, `rgba(${Math.floor(r * 0.5)}, 0, 0, 0)`);

        ctx.fillStyle = pGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Rising Golden Embers & Sparks
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.life++;
        if (s.life >= s.maxLife) {
          s.x = 70 + (Math.random() - 0.5) * 36;
          s.y = 126;
          s.life = 0;
          s.vy = -(1.4 + Math.random() * 2.2);
          s.vx = (Math.random() - 0.5) * 1.1;
          continue;
        }

        const prog = s.life / s.maxLife;
        s.x += s.vx + Math.sin(t * 3.2 + s.y * 0.08) * 0.65;
        s.y += s.vy;

        const sAlpha = (1 - prog) * (0.65 + Math.sin(t * 8.5 + i) * 0.35);
        ctx.fillStyle = `rgba(255, ${Math.floor(225 - prog * 115)}, ${Math.floor(85 - prog * 85)}, ${sAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (1 - prog * 0.4), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="realistic-flame-canvas" width={140} height={160} />;
};

export const MandapLayer: React.FC = React.memo(() => (
  <div className="daytime-layer daytime-mandap-layer evening-mandap" role="region" aria-label="Grand illuminated evening wedding mandap">
    <div className="mandap-container" data-fx="mandap">
      {/* Soft warm glow breathing inside the open mandap canopy */}
      <div className="mandap-glow" aria-hidden="true" />

      {/* Main Mandap Artwork */}
      <img
        src={DAYTIME_ASSETS.mandap}
        alt="Grand Bengali Indian wedding mandap illuminated at night with fairy lights, marigolds, and brass lamps"
        className="mandap-img"
        decoding="async"
        draggable={false}
      />

      {/* Wind-billowing Royal Silk Drapes on Mandap Pillars */}
      <div className="mandap-silk-drape drape-left" aria-hidden="true">
        <svg className="silk-drape-svg" viewBox="0 0 70 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="silk-ivory-l" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 252, 245, 0.92)" />
              <stop offset="50%" stopColor="rgba(248, 235, 215, 0.85)" />
              <stop offset="100%" stopColor="rgba(220, 195, 160, 0.78)" />
            </linearGradient>
          </defs>
          <path
            className="drape-cloth drape-cloth-l"
            d="M10,0 C30,40 5,90 25,140 C35,165 20,185 10,200 L45,200 C55,185 45,155 55,120 C65,75 40,35 50,0 Z"
            fill="url(#silk-ivory-l)"
          />
        </svg>
      </div>
      <div className="mandap-silk-drape drape-right" aria-hidden="true">
        <svg className="silk-drape-svg" viewBox="0 0 70 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="silk-ivory-r" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 252, 245, 0.92)" />
              <stop offset="50%" stopColor="rgba(248, 235, 215, 0.85)" />
              <stop offset="100%" stopColor="rgba(220, 195, 160, 0.78)" />
            </linearGradient>
          </defs>
          <path
            className="drape-cloth drape-cloth-r"
            d="M60,0 C40,40 65,90 45,140 C35,165 50,185 60,200 L25,200 C15,185 25,155 15,120 C5,75 30,35 20,0 Z"
            fill="url(#silk-ivory-r)"
          />
        </svg>
      </div>

      {/* Sacred Havan Kund with Photorealistic Pyre Base & 60fps Fluid Agni Fire */}
      <div className="mandap-havan-kund" aria-hidden="true">
        {/* Hearth Firelight Floor Glow on Mandap Marble */}
        <div className="kund-hearth-glow" />
        <div className="kund-hearth-ambient" />

        {/* 60fps Physical Fluid Agni Fire Simulation */}
        <div className="kund-fire-stage">
          <RealisticFireCanvas />
        </div>

        {/* Photorealistic Stepped Copper & Brass Havan Altar with Glowing Logs */}
        <img
          src={DAYTIME_ASSETS.havanKundReal}
          alt="Sacred stepped copper Havan Kund altar with burning firewood logs"
          className="havan-kund-real-img"
          draggable={false}
        />
      </div>

      {/* Warm Golden Fairy Lights outlining the mandap dome and pillars */}
      <div className="mandap-fairy-lights" aria-hidden="true">
        <span className="fairy-dot fd-1" />
        <span className="fairy-dot fd-2" />
        <span className="fairy-dot fd-3" />
        <span className="fairy-dot fd-4" />
        <span className="fairy-dot fd-5" />
        <span className="fairy-dot fd-6" />
        <span className="fairy-dot fd-7" />
        <span className="fairy-dot fd-8" />
        <span className="fairy-dot fd-9" />
        <span className="fairy-dot fd-10" />
        <span className="fairy-dot fd-11" />
        <span className="fairy-dot fd-12" />
      </div>

      {/* Ornate Hanging Lanterns suspended from the Mandap */}
      <div className="mandap-lantern mandap-lantern-l" aria-hidden="true">
        <div className="lantern-cord" />
        <div className="lantern-body">
          <div className="lantern-glow" />
          <div className="lantern-candle" />
        </div>
      </div>
      <div className="mandap-lantern mandap-lantern-c" aria-hidden="true">
        <div className="lantern-cord" />
        <div className="lantern-body">
          <div className="lantern-glow" />
          <div className="lantern-candle" />
        </div>
      </div>
      <div className="mandap-lantern mandap-lantern-r" aria-hidden="true">
        <div className="lantern-cord" />
        <div className="lantern-body">
          <div className="lantern-glow" />
          <div className="lantern-candle" />
        </div>
      </div>

      {/* Traditional Ornate Brass Lamps (Samai) flanking the mandap steps */}
      <div className="mandap-lamp-flank lamp-left" aria-hidden="true">
        <div className="flame-cluster">
          <div className="lamp-flame f-top" />
          <div className="lamp-flame f-mid" />
          <div className="lamp-flame f-low" />
        </div>
        <div className="lamp-halo" />
        <svg className="ornate-samai-svg" viewBox="0 0 32 80" fill="none">
          <defs>
            <linearGradient id="samai-gold-l" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="30%" stopColor="#fff2a8" />
              <stop offset="70%" stopColor="#c99728" />
              <stop offset="100%" stopColor="#8a5a12" />
            </linearGradient>
          </defs>
          <path d="M16 2 L18 8 L14 8 Z" fill="url(#samai-gold-l)" />
          <path d="M6 14 C10 18 22 18 26 14 C24 20 8 20 6 14 Z" fill="url(#samai-gold-l)" />
          <path d="M15 8 L17 8 L17 70 L15 70 Z" fill="url(#samai-gold-l)" />
          <path d="M4 36 C9 41 23 41 28 36 C26 43 6 43 4 36 Z" fill="url(#samai-gold-l)" />
          <path d="M3 56 C8 62 24 62 29 56 C27 64 5 64 3 56 Z" fill="url(#samai-gold-l)" />
          <path d="M8 72 C12 68 20 68 24 72 L28 78 L4 78 Z" fill="url(#samai-gold-l)" />
        </svg>
      </div>

      <div className="mandap-lamp-flank lamp-right" aria-hidden="true">
        <div className="flame-cluster">
          <div className="lamp-flame f-top" />
          <div className="lamp-flame f-mid" />
          <div className="lamp-flame f-low" />
        </div>
        <div className="lamp-halo" />
        <svg className="ornate-samai-svg" viewBox="0 0 32 80" fill="none">
          <defs>
            <linearGradient id="samai-gold-r" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="30%" stopColor="#fff2a8" />
              <stop offset="70%" stopColor="#c99728" />
              <stop offset="100%" stopColor="#8a5a12" />
            </linearGradient>
          </defs>
          <path d="M16 2 L18 8 L14 8 Z" fill="url(#samai-gold-r)" />
          <path d="M6 14 C10 18 22 18 26 14 C24 20 8 20 6 14 Z" fill="url(#samai-gold-r)" />
          <path d="M15 8 L17 8 L17 70 L15 70 Z" fill="url(#samai-gold-r)" />
          <path d="M4 36 C9 41 23 41 28 36 C26 43 6 43 4 36 Z" fill="url(#samai-gold-r)" />
          <path d="M3 56 C8 62 24 62 29 56 C27 64 5 64 3 56 Z" fill="url(#samai-gold-r)" />
          <path d="M8 72 C12 68 20 68 24 72 L28 78 L4 78 Z" fill="url(#samai-gold-r)" />
        </svg>
      </div>

      {/* Subtle Golden Bokeh Orbs */}
      <div className="mandap-bokeh-container" aria-hidden="true">
        <span className="bokeh-orb b-1" />
        <span className="bokeh-orb b-2" />
        <span className="bokeh-orb b-3" />
        <span className="bokeh-orb b-4" />
        <span className="bokeh-orb b-5" />
        <span className="bokeh-orb b-6" />
      </div>
    </div>
  </div>
));
