import { WindState } from './types';
import { DAYTIME_CONFIG } from './config';

export class WindController {
  private baseFreq: number;
  private gustFreq: number;

  constructor() {
    this.baseFreq = DAYTIME_CONFIG.wind.baseFrequency;
    this.gustFreq = DAYTIME_CONFIG.wind.gustFrequency;
  }

  // Calculate procedural multi-frequency unsynchronized wind offsets
  public getWind(time: number, reducedMotion: boolean = false): WindState {
    if (reducedMotion) {
      return {
        globalIntensity: 0,
        branchesLeft: 0,
        branchesRight: 0,
        lotus: 0,
        trees: 0,
        grass: 0
      };
    }

    // Compound irregular wind gust simulation (overlapping sine and cosine waves)
    const primary = Math.sin(time * this.baseFreq);
    const secondary = Math.cos(time * this.baseFreq * 1.62 + 0.4);
    const gust = Math.sin(time * this.gustFreq) * 0.45;
    const globalIntensity = (primary * 0.55 + secondary * 0.35 + gust * 0.25);

    // Left branches (-2° to +2° with subtle secondary flutter)
    const bL = Math.sin(time * 1.25) * 1.4 + Math.cos(time * 2.3 + 0.8) * 0.6;

    // Right branches (-1.5° to +2.5° with independent phase and vertical pulse)
    const bR = Math.sin(time * 1.05 + 1.2) * 1.6 + Math.sin(time * 2.1) * 0.5 + 0.4;

    // Lotus flowers (-3° to +3° water ripple tilt)
    const lotus = Math.sin(time * 1.4 + 2.1) * 2.2 + Math.cos(time * 0.7) * 0.8;

    // Tree foliage sway
    const trees = Math.sin(time * 0.9 + 0.5) * 0.04;

    // Foreground grass sway
    const grass = Math.sin(time * 1.8) * 0.05 + Math.cos(time * 3.1) * 0.02;

    return {
      globalIntensity,
      branchesLeft: bL * (Math.PI / 180),
      branchesRight: bR * (Math.PI / 180),
      lotus: lotus * (Math.PI / 180),
      trees,
      grass
    };
  }
}

