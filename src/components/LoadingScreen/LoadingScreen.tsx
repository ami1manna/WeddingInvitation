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
  // Temple Scene
  facadeImg,
  doorLeftImg,
  doorRightImg,
  interiorImg,
  coupleImg,
  // Evening Mandap & Garden Scene
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
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    const total = ALL_ASSETS.length;

    const updateProgress = () => {
      if (!mounted) return;
      loadedCount++;
      const targetPercent = Math.min(100, Math.round((loadedCount / total) * 100));
      setPercent(prev => Math.max(prev, targetPercent));

      if (loadedCount >= total) {
        setPercent(100);
        setTimeout(() => {
          if (mounted) {
            setIsComplete(true);
            setTimeout(() => {
              if (mounted) {
                setFadeOut(true);
                setTimeout(() => {
                  if (mounted) onLoaded();
                }, 850);
              }
            }, 500);
          }
        }, 300);
      }
    };

    // Preload & GPU-decode every asset simultaneously
    ALL_ASSETS.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if ('decode' in img && typeof img.decode === 'function') {
          img.decode()
            .then(updateProgress)
            .catch(updateProgress);
        } else {
          updateProgress();
        }
      };
      img.onerror = updateProgress;
    });

    // Safety fallback: Ensure entrance is never blocked if an asset hangs
    const safetyTimer = setTimeout(() => {
      if (mounted && loadedCount < total) {
        setPercent(100);
        setIsComplete(true);
        setFadeOut(true);
        setTimeout(onLoaded, 850);
      }
    }, 9000);

    return () => {
      mounted = false;
      clearTimeout(safetyTimer);
    };
  }, [onLoaded]);

  // Contextual traditional message
  const getStatusText = () => {
    if (percent < 25) return 'Welcoming Auspicious Beginnings...';
    if (percent < 55) return 'Illuminating Temple Sanctum & Sacred Bells...';
    if (percent < 85) return 'Adorning Royal Mandap & Fragrant Flowers...';
    if (percent < 100) return 'Kindling Sacred Agni & Evening Diyas...';
    return 'Entering the Wedding Celebration...';
  };

  return (
    <div
      className={`wedding-loader-overlay ${fadeOut ? 'loader-fade-out' : ''}`}
      aria-live="polite"
      aria-label="Loading wedding celebration experience"
    >
      <div className="loader-backdrop-glow" />

      {/* Floating Golden Sparks */}
      <div className="loader-sparks" aria-hidden="true">
        <span className="ls-dot ls-1" />
        <span className="ls-dot ls-2" />
        <span className="ls-dot ls-3" />
        <span className="ls-dot ls-4" />
        <span className="ls-dot ls-5" />
        <span className="ls-dot ls-6" />
      </div>

      <div className="loader-content">
        {/* Sacred Sanskrit Invocation */}
        <div className="loader-invocation" aria-hidden="true">
          <span className="loader-om-motif">ॐ</span>
          <p className="loader-sanskrit">॥ श्री गणेशाय नमः ॥</p>
        </div>

        {/* Couple & Date Header */}
        <h1 className="loader-couple-title">
          <span className="loader-groom">Swaroop Samanta</span>
          <span className="loader-ampersand">&amp;</span>
          <span className="loader-bride">Pampa Manna</span>
        </h1>
        <p className="loader-wedding-date">22 FEBRUARY 2027</p>

        {/* Auspicious Diya with Flickering Agni Flame */}
        <div className="loader-diya-stage" aria-hidden="true">
          <div className="loader-diya-glow" />
          <div className="loader-diya-flame" />
          <div className="loader-diya-bowl" />
        </div>

        {/* Luxury Gold Filigree Progress Bar */}
        <div className="loader-progress-card">
          <div className="loader-bar-track">
            <div
              className="loader-bar-fill"
              style={{ width: `${percent}%` }}
            />
            <div
              className="loader-bar-shimmer"
              style={{ left: `${Math.max(0, percent - 15)}%` }}
            />
          </div>

          <div className="loader-progress-meta">
            <span className="loader-status-msg">{getStatusText()}</span>
            <span className="loader-percent-num">{percent}%</span>
          </div>
        </div>

        {isComplete && (
          <p className="loader-enter-hint animate-fade-in">
            Scroll to begin the journey
          </p>
        )}
      </div>
    </div>
  );
};
