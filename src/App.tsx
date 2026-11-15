import React, { useState, useEffect, useRef } from 'react';
import { TempleScene } from './components/TempleScene/TempleScene';
import { DaytimeScene } from './components/DaytimeScene/DaytimeScene';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';
import './App.css';

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [templeActive, setTempleActive] = useState(true);
  const [eveningActive, setEveningActive] = useState(false);

  const templeActiveRef = useRef(true);
  const eveningActiveRef = useRef(false);

  const stableVhRef = useRef(typeof window !== 'undefined' ? window.innerHeight : 800);

  const templeProgressRef = useRef(0);
  const eveningProgressRef = useRef(0);

  const templeWrapperRef = useRef<HTMLDivElement>(null);
  const eveningWrapperRef = useRef<HTMLDivElement>(null);

  const isAutoScrollingRef = useRef(true);
  const userInteractingRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const scrollPosRef = useRef(0);

  // Lock stage and scroll maths to a stable viewport height (prevent mobile URL bar jump)
  useEffect(() => {
    const updateStableVh = () => {
      const vh = window.innerHeight;
      stableVhRef.current = vh;
      document.documentElement.style.setProperty('--stable-vh', `${vh}px`);
    };
    updateStableVh();
    window.addEventListener('orientationchange', updateStableVh);
    const onResize = () => {
      if (Math.abs(window.innerHeight - stableVhRef.current) > 150 || window.innerWidth > 600) {
        updateStableVh();
      }
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('orientationchange', updateStableVh);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Detect accessibility preference for reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Natural interaction handler: Pause auto-scroll while user touches or scrolls manually
  useEffect(() => {
    if (!isLoaded) return;

    // Start auto-scroll shortly after load
    const startTimer = window.setTimeout(() => {
      isAutoScrollingRef.current = true;
      scrollPosRef.current = window.scrollY;
    }, 800);

    const onUserInteraction = () => {
      isAutoScrollingRef.current = false;
      userInteractingRef.current = true;
      scrollPosRef.current = window.scrollY;

      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }

      // Resume auto-scroll 2.5s after user stops touching or scrolling
      resumeTimerRef.current = window.setTimeout(() => {
        userInteractingRef.current = false;
        scrollPosRef.current = window.scrollY;
        const maxS = Math.max(1, document.documentElement.scrollHeight - stableVhRef.current);
        if (window.scrollY < maxS * 0.98) {
          isAutoScrollingRef.current = true;
        }
      }, 2500);
    };

    window.addEventListener('wheel', onUserInteraction, { passive: true });
    window.addEventListener('touchstart', onUserInteraction, { passive: true });
    window.addEventListener('pointerdown', onUserInteraction, { passive: true });
    window.addEventListener('keydown', (e) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space'].includes(e.code)) {
        onUserInteraction();
      }
    }, { passive: true });

    return () => {
      window.clearTimeout(startTimer);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      window.removeEventListener('wheel', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('pointerdown', onUserInteraction);
    };
  }, [isLoaded]);

  // Butter-smooth frame-rate independent physics engine with auto-scroll
  useEffect(() => {
    let animId: number;
    let target = 0;
    let current = 0;
    let lastTime = performance.now();

    const maxScroll = () => Math.max(1, document.documentElement.scrollHeight - stableVhRef.current);

    const onScroll = () => {
      if (userInteractingRef.current) {
        scrollPosRef.current = window.scrollY;
      }
      target = Math.min(1, Math.max(0, window.scrollY / maxScroll()));
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      const maxS = maxScroll();

      // Fluid, continuous subpixel auto-scroll (~30s cinematic full walkthrough)
      if (isAutoScrollingRef.current && isLoaded && !userInteractingRef.current) {
        if (scrollPosRef.current < maxS * 0.985) {
          const scrollSpeed = maxS / 30;
          scrollPosRef.current += scrollSpeed * dt;
          if (scrollPosRef.current >= maxS * 0.985) {
            scrollPosRef.current = maxS * 0.985;
            isAutoScrollingRef.current = false;
          }
          window.scrollTo(0, scrollPosRef.current);
          target = scrollPosRef.current / maxS;
        } else {
          isAutoScrollingRef.current = false;
        }
      }

      // Responsive tracking with silky-smooth damping
      const k = reducedMotion ? 1 : 1 - Math.exp(-dt * 15.0);
      current += (target - current) * k;
      if (Math.abs(target - current) < 1e-5) current = target;

      // Temple scene progress runs across current: 0.00 to 0.50
      const tProg = Math.min(1, current / 0.50);

      // Evening Mandap progress runs across current: 0.45 to 1.00
      const eProg = Math.max(0, Math.min(1, (current - 0.45) / 0.55));

      templeProgressRef.current = tProg;
      eveningProgressRef.current = eProg;

      // Pause hidden scene's animation loops and effects by updating active flags at boundary
      const isTemple = current < 0.55;
      const isEvening = current > 0.45;
      if (isTemple !== templeActiveRef.current) {
        templeActiveRef.current = isTemple;
        setTempleActive(isTemple);
      }
      if (isEvening !== eveningActiveRef.current) {
        eveningActiveRef.current = isEvening;
        setEveningActive(isEvening);
      }

      // Continuous, smooth crossfade between 0.45 and 0.55 without sudden cuts
      let tOp = 1;
      let eOp = 0;

      if (current <= 0.45) {
        tOp = 1;
        eOp = 0;
      } else if (current >= 0.55) {
        tOp = 0;
        eOp = 1;
      } else {
        const t = (current - 0.45) / 0.10;
        const s = t * t * (3 - 2 * t);
        tOp = 1 - s;
        eOp = s;
      }

      if (templeWrapperRef.current) {
        templeWrapperRef.current.style.opacity = tOp.toFixed(3);
        templeWrapperRef.current.style.visibility = tOp > 0.005 ? 'visible' : 'hidden';
      }
      if (eveningWrapperRef.current) {
        eveningWrapperRef.current.style.opacity = eOp.toFixed(3);
        eveningWrapperRef.current.style.visibility = eOp > 0.005 ? 'visible' : 'hidden';
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, [reducedMotion, isLoaded]);

  return (
    <>
      {/* Auspicious Initial Preloader: Preloads & GPU-decodes ALL 19 assets before reveal */}
      {!isLoaded && <LoadingScreen onLoaded={() => setIsLoaded(true)} />}

      {/* Scroll track height drives the camera */}
      <div id="scroll-track" aria-hidden="true" />

      <main className="app-container">
        {/* Preceding Golden-Hour Temple Scene (decoupled from React re-renders) */}
        <div
          ref={templeWrapperRef}
          className={`scene-stage-wrapper ${templeActive ? '' : 'scene-hidden'}`}
        >
          <TempleScene
            progressRef={templeProgressRef}
            reducedMotion={reducedMotion}
            active={templeActive}
          />
        </div>

        {/* Evening-to-Night Wedding Garden & Illuminated Mandap Scene */}
        <div
          ref={eveningWrapperRef}
          className={`scene-stage-wrapper ${eveningActive ? '' : 'scene-hidden'}`}
          style={{ opacity: 0, visibility: 'hidden' }}
        >
          <DaytimeScene
            progressRef={eveningProgressRef}
            reducedMotion={reducedMotion}
            active={eveningActive}
            opacity={eveningActive ? 1 : 0}
          />
        </div>
      </main>
    </>
  );
};

export default App;
