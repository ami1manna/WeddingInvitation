import React, { useEffect, useRef } from 'react';
import peacockImg from '../../../assets/invitation/Ornate Peacock on Floral Pedestal.png';
import garlandImg from '../../../assets/invitation/Ornate Pink and Jasmine Wedding Garland.png';
import floralLeftImg from '../../../assets/invitation/Lush Floral Corner Border.png';
import floralRightImg from '../../../assets/invitation/Elegant Pink Floral Corner Border.png';
import './InvitationCardScene.css';

interface InvitationCardSceneProps {
  progress?: number; // 0 to 1 relative to scene window
  opacity?: number;
  px?: number;
  py?: number;
  reducedMotion?: boolean;
}

export const InvitationCardScene: React.FC<InvitationCardSceneProps> = ({
  progress = 0,
  opacity = 1,
  px = 0,
  py = 0,
  reducedMotion = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const garlandRef = useRef<HTMLDivElement>(null);
  const peacockLRef = useRef<HTMLDivElement>(null);
  const peacockRRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Floating petals animation on 2D canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const PETAL_COUNT = 24;

    const petals = Array.from({ length: PETAL_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 7 + Math.random() * 9,
      speedY: 0.6 + Math.random() * 1.2,
      speedX: (Math.random() - 0.5) * 0.8,
      angle: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      alpha: 0.4 + Math.random() * 0.5,
      color: Math.random() > 0.45 ? 'rgba(240, 110, 140,' : 'rgba(255, 230, 210,'
    }));

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (opacity > 0.02) {
        petals.forEach((p) => {
          p.y += p.speedY * (1 + progress * 0.5);
          p.x += p.speedX + Math.sin(p.y * 0.015) * 0.6;
          p.angle += p.rotSpeed;

          if (p.y > canvas.height + 20) {
            p.y = -20;
            p.x = Math.random() * canvas.width;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.fillStyle = `${p.color} ${(p.alpha * opacity).toFixed(3)})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, [opacity, progress]);

  // Dynamic parallax transforms driven by scroll progress and pointer
  const easeIn = Math.min(1, Math.max(0, progress * 1.5));
  const cardScale = 0.94 + easeIn * 0.06;
  const peacockLift = (1 - easeIn) * 80;

  // Sway values
  const swayGarland = !reducedMotion ? px * 8 : 0;
  const peacockTiltL = !reducedMotion ? px * 14 : 0;
  const peacockTiltR = !reducedMotion ? px * -14 : 0;

  return (
    <section
      className="invitation-stage"
      style={{
        opacity,
        visibility: opacity > 0 ? 'visible' : 'hidden',
        pointerEvents: opacity > 0.4 ? 'auto' : 'none'
      }}
      aria-label="Wedding Invitation Announcement"
    >
      {/* Background Soft Aura & Glow */}
      <div className="invitation-bg-glow" aria-hidden="true" />

      {/* Hanging Top Garland with subtle wind sway */}
      <div
        ref={garlandRef}
        className="invitation-garland-wrap"
        style={{
          transform: `translate3d(${swayGarland}px, ${py * -4}px, 0)`
        }}
      >
        <img
          src={garlandImg}
          alt="Ornate pink and jasmine wedding garland with bells"
          className="invitation-garland-img"
          draggable={false}
        />
      </div>

      {/* Lush Corner Floral Borders */}
      <div
        className="invitation-corner corner-top-left"
        style={{
          transform: `translate3d(${px * -10}px, ${py * -8}px, 0)`
        }}
      >
        <img
          src={floralLeftImg}
          alt="Lush pink hibiscus corner border"
          className="corner-img"
          draggable={false}
        />
      </div>

      <div
        className="invitation-corner corner-top-right"
        style={{
          transform: `translate3d(${px * 10}px, ${py * -8}px, 0)`
        }}
      >
        <img
          src={floralRightImg}
          alt="Elegant floral corner border"
          className="corner-img"
          draggable={false}
        />
      </div>

      {/* Central Invitation Card */}
      <div
        ref={cardRef}
        className="invitation-card-container"
        style={{
          transform: `translate3d(${px * -6}px, ${py * -6}px, 0) scale(${cardScale})`
        }}
      >
        <div className="invitation-card-inner">
          <header className="invitation-header">
            <h3 className="invitation-hosts">
              Smt. Saraswati Devi
              <br />
              &amp; Utsavlal Ji Bagrecha
            </h3>
            <p className="invitation-pleasure">
              requests the pleasure of your company at the
            </p>
            <div className="invitation-event-badge">
              <span className="badge-flourish">✦</span>
              <h2 className="invitation-main-heading">W E D D I N G</h2>
              <span className="badge-flourish">✦</span>
            </div>
            <p className="invitation-relation">of her grandson</p>
          </header>

          <main className="invitation-couple">
            <div className="couple-name-box groom-box">
              <h1 className="couple-name groom-name">Siddharth</h1>
              <p className="couple-parents">S/o Sangeetha &amp; Mukesh Bagrecha</p>
            </div>

            <div className="couple-connector">
              <span className="connector-line" />
              <span className="connector-text">with</span>
              <span className="connector-line" />
            </div>

            <div className="couple-name-box bride-box">
              <h1 className="couple-name bride-name">Manisha</h1>
              <p className="couple-parents">
                Gd/o Smt. Madan Bai &amp; Parasmal Bohara
                <br />
                D/o Chandra Ji &amp; Anand Kumar Ji Bohara
              </p>
            </div>
          </main>

          <footer className="invitation-card-footer">
            <div className="auspicious-mantra">
              || Mangalam Bhagwan Vishnu, Mangalam Garudadhwaja ||
            </div>
          </footer>
        </div>
      </div>

      {/* Foreground Ornate Peacocks on Pedestals */}
      <aside
        ref={peacockLRef}
        className="invitation-peacock peacock-left"
        style={{
          transform: `translate3d(${px * -24}px, ${peacockLift + py * -12}px, 0) rotate(${peacockTiltL * 0.08}deg)`
        }}
      >
        <img
          src={peacockImg}
          alt="Royal ornate peacock on floral sandstone pedestal"
          className="peacock-img"
          draggable={false}
        />
      </aside>

      <aside
        ref={peacockRRef}
        className="invitation-peacock peacock-right"
        style={{
          transform: `translate3d(${px * 24}px, ${peacockLift + py * -12}px, 0) scaleX(-1) rotate(${peacockTiltR * 0.08}deg)`
        }}
      >
        <img
          src={peacockImg}
          alt="Royal ornate peacock on floral pedestal"
          className="peacock-img"
          draggable={false}
        />
      </aside>

      {/* Floating Canvas Petals Layer */}
      <canvas ref={canvasRef} className="invitation-petals-canvas" aria-hidden="true" />
    </section>
  );
};

