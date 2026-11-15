import React, { useState, useEffect } from 'react';
import { DAYTIME_ASSETS } from '../DaytimeScene/assets';
import facadeImg from '../../../assets/facade.webp';
import doorLeftImg from '../../../assets/door-left.webp';
import doorRightImg from '../../../assets/door-right.webp';
import interiorImg from '../../../assets/interior.webp';
import coupleImg from '../../../assets/couple.webp';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoaded: () => void;
}

const ALL_ASSETS: string[] = [
  facadeImg,
  doorLeftImg,
  doorRightImg,
  interiorImg,
  coupleImg,
  DAYTIME_ASSETS.sky,
  DAYTIME_ASSETS.clouds,
  DAYTIME_ASSETS.birds,
  DAYTIME_ASSETS.leftBranches,
  DAYTIME_ASSETS.rightBranches,
  DAYTIME_ASSETS.mandap,
  DAYTIME_ASSETS.leftTrees,
  DAYTIME_ASSETS.rightTrees,
  DAYTIME_ASSETS.garden,
  DAYTIME_ASSETS.lotus,
  DAYTIME_ASSETS.havanKundReal,
  DAYTIME_ASSETS.peacockBody,
  DAYTIME_ASSETS.peacockHead,
  DAYTIME_ASSETS.peacockTail
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [percent, setPercent] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    const total = ALL_ASSETS.length;

    const finishLoading = () => {
      if (!mounted) return;
      setPercent(100);
      setTimeout(() => {
        if (!mounted) return;
        setFadeOut(true);
        setTimeout(() => {
          if (mounted) onLoaded();
        }, 400);
      }, 200);
    };

    const updateProgress = () => {
      if (!mounted) return;
      loadedCount++;
      const targetPercent = Math.min(100, Math.round((loadedCount / total) * 100));
      setPercent(prev => Math.max(prev, targetPercent));

      if (loadedCount >= total) {
        finishLoading();
      }
    };

    // Preload & GPU-decode assets
    ALL_ASSETS.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if ('decode' in img && typeof img.decode === 'function') {
          img.decode().then(updateProgress).catch(updateProgress);
        } else {
          updateProgress();
        }
      };
      img.onerror = updateProgress;
    });

    // Fallback timer: Never block if an asset hangs
    const safetyTimer = setTimeout(() => {
      if (mounted) {
        finishLoading();
      }
    }, 5000);

    return () => {
      mounted = false;
      clearTimeout(safetyTimer);
    };
  }, [onLoaded]);

  return (
    <div
      className={`wedding-loader-overlay ${fadeOut ? 'loader-fade-out' : ''}`}
      aria-live="polite"
      aria-label="Loading wedding invitation"
    >
      <div className="loader-backdrop-glow" />

      <div className="loader-simple-content">
        <h1 className="loader-simple-names">Swaroop &amp; Pampa</h1>
        <p className="loader-simple-subtitle">Wedding Celebration</p>

        <div className="loader-simple-progress-container">
          <div className="loader-simple-track">
            <div
              className="loader-simple-bar"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="loader-simple-percent">{percent}%</span>
        </div>
      </div>
    </div>
  );
};
