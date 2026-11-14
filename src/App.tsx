import React, { useState, useEffect, useRef } from 'react';
import { TempleScene } from './components/TempleScene/TempleScene';
import { DaytimeScene } from './components/DaytimeScene/DaytimeScene';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';
import './App.css';

interface Chapter {
  at: number;
  label: string;
}

const CHAPTERS: Chapter[] = [
  { at: 0.00, label: 'Temple Entrance' },
  { at: 0.20, label: 'Carved Doors' },
  { at: 0.45, label: 'Divine Blessings' },
  { at: 0.72, label: 'Twilight Mandap' },
  { at: 0.98, label: 'Wedding Invitation' }
];

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const isAutoScrollingRef = useRef(true);
  const templeProgressRef = useRef(0);
  const eveningProgressRef = useRef(0);
  const activeChapterRef = useRef(0);

  const templeWrapperRef = useRef<HTMLDivElement>(null);
  const eveningWrapperRef = useRef<HTMLDivElement>(null);

  // Detect accessibility preference for reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Activate default auto-scroll after initial load
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        isAutoScrollingRef.current = true;
        setIsAutoScrolling(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  // Pause auto-scroll on direct manual user interaction (wheel, touch, drag)
  useEffect(() => {
    const pauseOnInteraction = (e?: Event) => {
      if (e && e.target) {
        const targetEl = e.target as HTMLElement;
        if (
          targetEl.closest('.autoscroll-control') ||
          targetEl.closest('.app-chapters') ||
          targetEl.closest('.venue-modal-overlay') ||
          targetEl.closest('.btn-venue-directions')
        ) {
          return;
        }
      }
      if (isAutoScrollingRef.current) {
        isAutoScrollingRef.current = false;
        setIsAutoScrolling(false);
      }
    };

    window.addEventListener('wheel', pauseOnInteraction, { passive: true });
    window.addEventListener('touchstart', pauseOnInteraction, { passive: true });
    window.addEventListener('pointerdown', pauseOnInteraction, { passive: true });
    window.addEventListener('keydown', (e) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space'].includes(e.code)) {
        pauseOnInteraction();
      }
    }, { passive: true });

    return () => {
      window.removeEventListener('wheel', pauseOnInteraction);
      window.removeEventListener('touchstart', pauseOnInteraction);
      window.removeEventListener('pointerdown', pauseOnInteraction);
    };
  }, []);

  // Butter-smooth frame-rate independent physics engine with default auto-scroll
  useEffect(() => {
    let animId: number;
    let target = 0;
    let current = 0;
    let lastTime = performance.now();

    const maxScroll = () => Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    const onScroll = () => {
      target = Math.min(1, Math.max(0, window.scrollY / maxScroll()));
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      // Cinematic Default Auto-Scroll (faster, brisk cinematic pace: ~26 seconds total)
      if (isAutoScrollingRef.current && isLoaded) {
        const maxS = maxScroll();
        if (window.scrollY < maxS * 0.985) {
          const scrollSpeed = maxS / 26;
          const nextY = Math.min(maxS * 0.985, window.scrollY + scrollSpeed * dt);
          window.scrollTo(0, nextY);
          target = nextY / maxS;
        } else {
          // Reached final wedding invitation section - pause smoothly
          isAutoScrollingRef.current = false;
          setIsAutoScrolling(false);
        }
      }

      // Exponential smoothing normalized to time delta
      // Faster, responsive tracking with silky-smooth damping
      const k = reducedMotion ? 1 : 1 - Math.exp(-dt * 15.0);
      current += (target - current) * k;
      if (Math.abs(target - current) < 1e-5) current = target;

      // Temple scene progress runs across current: 0.00 to 0.52
      const tProg = Math.min(1, current / 0.48);

      // Evening Mandap progress runs across current: 0.46 to 1.00
      const eProg = Math.max(0, Math.min(1, (current - 0.46) / 0.54));

      templeProgressRef.current = tProg;
      eveningProgressRef.current = eProg;

      // Equal-power smooth Hermite crossfade between 0.46 and 0.56
      // Snappy and fluid transition with continuous combined opacity
      let tOp = 1;
      let eOp = 0;

      if (current <= 0.46) {
        tOp = 1;
        eOp = 0;
      } else if (current >= 0.56) {
        tOp = 0;
        eOp = 1;
      } else {
        const t = (current - 0.46) / 0.10;
        const s = t * t * (3 - 2 * t);
        tOp = 1 - s;
        eOp = s;
      }

      if (templeWrapperRef.current) {
        templeWrapperRef.current.style.opacity = tOp.toFixed(3);
        templeWrapperRef.current.style.visibility = tOp > 0 ? 'visible' : 'hidden';
      }
      if (eveningWrapperRef.current) {
        eveningWrapperRef.current.style.opacity = eOp.toFixed(3);
        eveningWrapperRef.current.style.visibility = eOp > 0 ? 'visible' : 'hidden';
      }

      // Identify active chapter ONLY when index changes (0 virtual DOM overhead during scroll)
      let closestIdx = 0;
      let minDiff = 999;
      CHAPTERS.forEach((ch, idx) => {
        const diff = Math.abs(ch.at - current);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      if (closestIdx !== activeChapterRef.current) {
        activeChapterRef.current = closestIdx;
        setActiveChapter(closestIdx);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, [reducedMotion, isLoaded]);

  const scrollToChapter = (at: number) => {
    isAutoScrollingRef.current = false;
    setIsAutoScrolling(false);
    const maxS = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: at * maxS,
      behavior: reducedMotion ? 'auto' : 'smooth'
    });
  };

  const toggleAutoScroll = () => {
    const maxS = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (!isAutoScrolling) {
      if (window.scrollY >= maxS * 0.92) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          isAutoScrollingRef.current = true;
          setIsAutoScrolling(true);
        }, 800);
      } else {
        isAutoScrollingRef.current = true;
        setIsAutoScrolling(true);
      }
    } else {
      isAutoScrollingRef.current = false;
      setIsAutoScrolling(false);
    }
  };

  return (
    <>
      {/* Auspicious Initial Preloader: Preloads & GPU-decodes ALL 19 assets before reveal */}
      {!isLoaded && <LoadingScreen onLoaded={() => setIsLoaded(true)} />}

      {/* Scroll track height drives the camera */}
      <div id="scroll-track" aria-hidden="true" />

      <main className="app-container">
        {/* Preceding Golden-Hour Temple Scene (decoupled from React re-renders) */}
        <div ref={templeWrapperRef} className="scene-stage-wrapper">
          <TempleScene
            progressRef={templeProgressRef}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* Evening-to-Night Wedding Garden & Illuminated Mandap Scene */}
        <div
          ref={eveningWrapperRef}
          className="scene-stage-wrapper"
          style={{ opacity: 0, visibility: 'hidden' }}
        >
          <DaytimeScene
            progressRef={eveningProgressRef}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* Floating Chapter Navigation */}
        <nav
          className="app-chapters"
          aria-label="Wedding Invitation Scene Chapters"
        >
          {CHAPTERS.map((ch, idx) => (
            <button
              key={ch.label}
              type="button"
              className={activeChapter === idx ? 'active' : ''}
              onClick={() => scrollToChapter(ch.at)}
              aria-label={ch.label}
            >
              <span>{ch.label}</span>
              <i />
            </button>
          ))}
        </nav>

        {/* Floating Cinematic Auto-Scroll Control Pill */}
        {isLoaded && (
          <button
            type="button"
            className={`autoscroll-control ${isAutoScrolling ? 'active' : ''}`}
            onClick={toggleAutoScroll}
            aria-label={isAutoScrolling ? 'Pause auto scroll' : 'Resume auto scroll'}
          >
            <span className="autoscroll-icon-badge" aria-hidden="true">
              {isAutoScrolling ? '❚❚' : '▶'}
            </span>
            <span className="autoscroll-label">
              {isAutoScrolling ? 'Auto Scrolling' : 'Auto Scroll'}
            </span>
          </button>
        )}
      </main>
    </>
  );
};

export default App;
