import { DAYTIME_CONFIG } from './config';

export class ParallaxController {
  // Returns layer-specific [dx, dy] offsets based on normalized mouse coords [-1..1]
  public getLayerOffset(
    layerName: keyof typeof DAYTIME_CONFIG.parallax,
    mouse: { x: number; y: number },
    reducedMotion: boolean = false
  ): { x: number; y: number } {
    if (reducedMotion) return { x: 0, y: 0 };

    const multiplier = DAYTIME_CONFIG.parallax[layerName] ?? 0.1;
    return {
      x: -mouse.x * multiplier * 1.8,
      y: -mouse.y * multiplier * 1.2
    };
  }
}

