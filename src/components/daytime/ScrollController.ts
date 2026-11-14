export class ScrollController {
  // Helpers to calculate phase progress and smooth hermite interpolation
  public static clamp(val: number, min: number = 0, max: number = 1): number {
    return Math.min(max, Math.max(min, val));
  }

  public static getPhaseProgress(progress: number, start: number, end: number): number {
    return this.clamp((progress - start) / (end - start));
  }

  public static smooth(t: number): number {
    return t * t * (3 - 2 * t);
  }

  // Returns opacity and scale multipliers for a layer given current scroll progress
  public static getLayerReveal(progress: number, startReveal: number, fullReveal: number): number {
    if (progress < startReveal) return 0;
    if (progress >= fullReveal) return 1;
    const t = (progress - startReveal) / (fullReveal - startReveal);
    return this.smooth(t);
  }
}

