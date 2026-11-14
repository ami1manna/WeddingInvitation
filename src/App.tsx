import React, { useState, useEffect, useRef } from 'react';
import { TempleScene } from './components/TempleScene/TempleScene';
import { DaytimeScene } from './components/daytime/DaytimeScene';
import { InvitationCardScene } from './components/InvitationCardScene/InvitationCardScene';
import { NightReceptionScene } from './components/NightReceptionScene/NightReceptionScene';
import { audioEngine } from './utils/audio';
import './App.css';

interface Chapter {
  at: number;
  label: string;
}

const CHAPTERS: Chapter[] = [
  { at: 0.0, label: 'Temple Entrance' },
  { at: 0.18, label: 'Ganesha Sanctum' },
  { at: 0.38, label: 'Daytime Mandap' },
  { at: 0.62, label: 'Wedding Invitation' },
  { at: 0.88, label: 'Evening Reception' }
];

export const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pointer, setPointer] = useState({ px: 0, py: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isAutoTouring, setIsAutoTouring] = useState(false);

  const pointerRef = useRef({ mx: 0, my: 0, tmx: 0, tmy: 0 });
  const autoTourRef = useRef(false);

  // Detect accessibility preference for reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Global Pointer & Device Orientation tracking for rich 3D parallax
  useEffect(() => {
    if (reducedMotion) return;

    const onPointerMove = (e: PointerEvent) => {
      pointerRef.current.tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointerRef.current.tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        pointerRef.current.tmx = Math.max(-1, Math.min(1, e.gamma / 22));
        pointerRef.current.tmy = Math.max(-1, Math.min(1, (e.beta - 45) / 22));
      }
    };

    let touchStartX = 0;
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const dx = (e.touches[0].clientX - touchStartX) / window.innerWidth;
        const dy = (e.touches[0].clientY - touchStartY) / window.innerHeight;
        pointerRef.current.tmx = Math.max(-1, Math.min(1, dx * 2.5));
        pointerRef.current.tmy = Math.max(-1, Math.min(1, dy * 2.5));
      }
    };
    const onTouchEnd = () => {
      pointerRef.current.tmx = 0;
      pointerRef.current.tmy = 0;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', onOrientation, { passive: true });
    }

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', onOrientation);
      }
    };
  }, [reducedMotion]);

  // Unified RequestAnimationFrame loop for silky-smooth scroll, auto-tour, and parallax
  useEffect(() => {
    let animId: number;
    let target = 0;
    let current = 0;

    const maxScroll = () => Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    const onScroll = () => {
      if (!autoTourRef.current) {
        target = Math.min(1, Math.max(0, window.scrollY / maxScroll()));
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const loop = () => {
      const maxS = maxScroll();

      // Handle cinematic auto-tour
      if (autoTourRef.current) {
        const nextScroll = window.scrollY + 2.4;
        if (nextScroll >= maxS) {
          autoTourRef.current = false;
          setIsAutoTouring(false);
        } else {
          window.scrollTo(0, nextScroll);
          target = Math.min(1, nextScroll / maxS);
        }
      }

      const k = reducedMotion ? 1 : 0.085;
      current += (target - current) * k;
      if (Math.abs(target - current) < 1e-4) current = target;

      // Pointer spring easing
      const pk = reducedMotion ? 1 : 0.09;
      pointerRef.current.mx += (pointerRef.current.tmx - pointerRef.current.mx) * pk;
      pointerRef.current.my += (pointerRef.current.tmy - pointerRef.current.my) * pk;

      setScrollProgress(current);
      setPointer({
        px: pointerRef.current.mx,
        py: pointerRef.current.my
      });

      // Update procedural soundscape
      audioEngine.updateProgress(current);

      // Active chapter calculation
      let closestIdx = 0;
      let minDiff = 999;
      CHAPTERS.forEach((ch, idx) => {
        const diff = Math.abs(ch.at - current);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setActiveChapter(closestIdx);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, [reducedMotion]);

  const scrollToChapter = (at: number) => {
    autoTourRef.current = false;
    setIsAutoTouring(false);
    const maxS = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: at * maxS,
      behavior: reducedMotion ? 'auto' : 'smooth'
    });
  };

  const toggleAudio = () => {
    const isPlaying = audioEngine.toggleMute();
    setIsAudioActive(isPlaying);
  };

  const toggleAutoTour = () => {
    const nextState = !isAutoTouring;
    setIsAutoTouring(nextState);
    autoTourRef.current = nextState;
  };

  // Cinematic 4-Act Stage Mapping:
  // Act 1 (0.00..0.28): Temple Facade, 3D Door opening & Sacred Ganesha Sanctum
  const templeProgress = Math.min(1, scrollProgress / 0.24);
  const templeOpacity = scrollProgress < 0.22 ? 1 : Math.max(0, 1 - (scrollProgress - 0.22) / 0.06);

  // Act 2 (0.24..0.54): Daytime Mandap 3D Environment (B01-B10)
  const daytimeProgress = Math.min(1, Math.max(0, (scrollProgress - 0.24) / 0.24));
  const daytimeOpacity =
    scrollProgress < 0.24
      ? 0
      : scrollProgress < 0.46
      ? Math.min(1, (scrollProgress - 0.24) / 0.05)
      : Math.max(0, 1 - (scrollProgress - 0.46) / 0.07);

  // Act 3 (0.48..0.76): Formal Wedding Invitation with Peacocks & Jasmine Garlands
  const invitationProgress = Math.min(1, Math.max(0, (scrollProgress - 0.48) / 0.22));
  const invitationOpacity =
    scrollProgress < 0.48
      ? 0
      : scrollProgress < 0.70
      ? Math.min(1, (scrollProgress - 0.48) / 0.05)
      : Math.max(0, 1 - (scrollProgress - 0.70) / 0.06);

  // Act 4 (0.72..1.00): Evening Reception under Starry Night with Animated Fireworks
  const receptionProgress = Math.min(1, Math.max(0, (scrollProgress - 0.72) / 0.28));
  const receptionOpacity =
    scrollProgress < 0.72 ? 0 : Math.min(1, (scrollProgress - 0.72) / 0.06);

  // Light/Dark UI accent theme based on daytime vs nocturnal palace
  const isLightMode = scrollProgress >= 0.24 && scrollProgress < 0.72;

  return (
    <>
      {/* Scroll track height drives the camera timeline */}
      <div id="scroll-track" aria-hidden="true" />

      {/* Header Quick Controls */}
      <header className={`app-controls-bar ${isLightMode ? 'light-mode' : ''}`}>
        <button
          type="button"
          className={`app-ctrl-btn ${isAutoTouring ? 'active' : ''}`}
          onClick={toggleAutoTour}
          aria-label={isAutoTouring ? 'Pause cinematic tour' : 'Start cinematic tour'}
        >
          <span>{isAutoTouring ? '❚❚' : '▶'}</span>
          <span>{isAutoTouring ? 'Pause' : 'Tour'}</span>
        </button>

        <button
          type="button"
          className={`app-ctrl-btn ${isAudioActive ? 'active' : ''}`}
          onClick={toggleAudio}
          aria-label={isAudioActive ? 'Mute ambient soundscape' : 'Play ambient soundscape'}
        >
          <span>{isAudioActive ? '♪' : '♫'}</span>
          <span>{isAudioActive ? 'Sound On' : 'Music'}</span>
        </button>
      </header>

      <main className="app-container">
        {/* Act 1: Temple Scene with 3D Carved Doors & Sacred Ganesha Sanctum */}
        <TempleScene
          progress={templeProgress}
          opacity={templeOpacity}
          px={pointer.px}
          py={pointer.py}
          reducedMotion={reducedMotion}
        />

        {/* Act 2: Daytime Garden Mandap (B01–B10) with 13-plane Three.js 3D Parallax */}
        <DaytimeScene
          progress={daytimeProgress}
          opacity={daytimeOpacity}
          px={pointer.px}
          py={pointer.py}
          reducedMotion={reducedMotion}
        />

        {/* Act 3: Formal Wedding Invitation with Royal Peacocks, Garlands & Floral Borders */}
        <InvitationCardScene
          progress={invitationProgress}
          opacity={invitationOpacity}
          px={pointer.px}
          py={pointer.py}
          reducedMotion={reducedMotion}
        />

        {/* Act 4: Evening Palace Reception with Starry Sky & Interactive Fireworks */}
        <NightReceptionScene
          progress={receptionProgress}
          opacity={receptionOpacity}
          px={pointer.px}
          py={pointer.py}
          reducedMotion={reducedMotion}
        />

        {/* Floating Chapter Navigation */}
        <nav
          className={`app-chapters ${isLightMode ? 'light-mode' : ''}`}
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
      </main>
    </>
  );
};

export default App;
