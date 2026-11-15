import React, { useState, useEffect } from 'react';
import { TempleScene } from './components/TempleScene/TempleScene';
import { EveningScene } from './components/EveningScene/EveningScene';
import './App.css';

interface Chapter {
  at: number;
  label: string;
}

const CHAPTERS: Chapter[] = [
  { at: 0.0, label: 'Golden Hour Entrance' },
  { at: 0.14, label: 'Doors Opening' },
  { at: 0.54, label: 'Shiva & Parvati Blessings' },
  { at: 0.76, label: 'Twilight Garden' },
  { at: 0.88, label: 'Illuminated Mandap' },
  { at: 1.0, label: 'Wedding Invitation' }
];

export const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  // Detect accessibility preference for reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Drive scroll progress smoothly
  useEffect(() => {
    let animId: number;
    let target = 0;
    let current = 0;

    const maxScroll = () => Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    const onScroll = () => {
      target = Math.min(1, Math.max(0, window.scrollY / maxScroll()));
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const loop = () => {
      const k = reducedMotion ? 1 : 0.085;
      current += (target - current) * k;
      if (Math.abs(target - current) < 1e-4) current = target;

      setScrollProgress(current);

      // Identify active chapter
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
    const maxS = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: at * maxS,
      behavior: reducedMotion ? 'auto' : 'smooth'
    });
  };

  // Map global scrollProgress (0..1) into two seamless, crossfading stages:
  // Phase 1 (0..0.72): Temple Entrance & Walkthrough
  // Transition (0.68..0.78): Soft Opacity & Scale Reveal
  // Phase 2 (0.70..1.0): Evening garden -> illuminated night mandap -> invitation
  const templeProgress = Math.min(1, scrollProgress / 0.72);
  const templeOpacity = scrollProgress < 0.68 ? 1 : Math.max(0, 1 - (scrollProgress - 0.68) / 0.08);

  const eveningProgress = Math.max(0, (scrollProgress - 0.70) / 0.30);
  const eveningOpacity = scrollProgress < 0.70 ? 0 : Math.min(1, (scrollProgress - 0.70) / 0.07);


  return (
    <>
      {/* Scroll track height drives the camera */}
      <div id="scroll-track" aria-hidden="true" />

      <main className="app-container">
        {/* Preceding Temple Scene */}
        <TempleScene
          progress={templeProgress}
          opacity={templeOpacity}
          reducedMotion={reducedMotion}
        />

        {/* Twilight garden -> night mandap -> invitation */}
        <EveningScene
          progress={eveningProgress}
          opacity={eveningOpacity}
          reducedMotion={reducedMotion}
        />

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
      </main>
    </>
  );
};

export default App;

