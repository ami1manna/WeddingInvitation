export const DAYTIME_CONFIG = {
  // Recommended Z-depth values from specification
  depths: {
    sky: -30,
    clouds: -24,
    birds: -20,
    trees: -10,
    mandap: -5,
    branches: 0,
    lotus: 4,
    garden: 7
  },

  // Layer-specific movement multipliers for mouse/device parallax
  parallax: {
    sky: 0.03,
    clouds: 0.12,
    birds: 0.18,
    trees: 0.22,
    mandap: 0.08,
    branches: 0.35,
    lotus: 0.38,
    garden: 0.45
  },

  // 5 Scroll Animation Phases (0-20%, 20-40%, 40-60%, 60-80%, 80-100%)
  phases: {
    phase1: { start: 0.0, end: 0.20, label: 'Environment Reveal' },
    phase2: { start: 0.20, end: 0.40, label: 'Garden Entrance' },
    phase3: { start: 0.40, end: 0.60, label: 'Mandap Reveal' },
    phase4: { start: 0.60, end: 0.80, label: 'Invitation Decoration Reveal' },
    phase5: { start: 0.80, end: 1.0, label: 'Final Composition' }
  },

  // Camera settings
  camera: {
    fov: 48,
    near: 0.1,
    far: 100,
    initialPos: { x: 0, y: 0.6, z: 12.5 },
    finalPos: { x: 0, y: 0.15, z: 5.8 },
    lookAt: { x: 0, y: 0, z: -5 }
  },

  // Wind settings (multi-frequency procedural parameters)
  wind: {
    baseFrequency: 0.85,
    gustFrequency: 0.22,
    swayBranchLeft: { min: -2.0, max: 2.0 },
    swayBranchRight: { min: -1.5, max: 2.5 },
    lotusRot: { min: -3.0, max: 3.0 }
  }
};

