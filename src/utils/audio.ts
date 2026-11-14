// Procedural Web Audio API soundscape for the wedding invitation
// Generates warm ambient tanpura drone, auspicious temple bell chimes, morning breeze, and festive celebration pops

class WeddingAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private isInitialized: boolean = false;
  private masterGain: GainNode | null = null;
  private droneGain: GainNode | null = null;
  private bellCooldown: number = 0;
  private fireworkCooldown: number = 0;

  public init() {
    if (this.isInitialized) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Create warm ambient root chord (Tanpura drone - C3, G3, C4 harmonics)
      this.setupTanpuraDrone();

      this.isInitialized = true;
      this.isMuted = false;
      this.masterGain.gain.linearRampToValueAtTime(0.35, this.ctx.currentTime + 1.5);
    } catch (e) {
      console.warn('Web Audio API not supported or blocked:', e);
    }
  }

  private setupTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.2, this.ctx.currentTime);

    // Warm low-pass filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, this.ctx.currentTime);

    // Fundamental frequencies (Sa & Pa: C3 = 130.81Hz, G3 = 196.00Hz, C4 = 261.63Hz)
    const freqs = [130.81, 131.2, 196.0, 261.63, 392.0];
    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.droneGain) return;
      const osc = this.ctx.createOscillator();
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const oscGain = this.ctx.createGain();
      // Gentle breathing pulsation
      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.15 + idx * 0.08, this.ctx.currentTime);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      lfo.connect(lfoGain.gain);

      oscGain.gain.setValueAtTime(0.08 / (idx + 1), this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(filter);

      osc.start();
      lfo.start();
    });

    filter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);
  }

  // Auspicious Temple Brass Bell Chime (Ghanti)
  public playTempleBell() {
    if (!this.ctx || this.isMuted || !this.masterGain) return;
    const now = performance.now();
    if (now - this.bellCooldown < 2500) return; // prevent spamming
    this.bellCooldown = now;

    const t = this.ctx.currentTime;
    // Bell harmonic frequencies (high resonant brass ring)
    const bellFreqs = [880, 1760, 2640, 3520];

    bellFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 6, t);

      const decay = 2.5 / (idx * 0.6 + 1);
      gain.gain.setValueAtTime(0.08 / (idx + 1), t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + decay);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + decay);
    });
  }

  // Festive Firework Pop & Shimmer Sparkle
  public playFireworkPop() {
    if (!this.ctx || this.isMuted || !this.masterGain) return;
    const now = performance.now();
    if (now - this.fireworkCooldown < 350) return;
    this.fireworkCooldown = now;

    const t = this.ctx.currentTime;

    // Bass thud / pop
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(35, t + 0.18);

    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.22);

    // High shimmer sparkles
    for (let i = 0; i < 3; i++) {
      const sparkleOsc = this.ctx.createOscillator();
      const sparkleGain = this.ctx.createGain();
      sparkleOsc.type = 'triangle';
      sparkleOsc.frequency.setValueAtTime(1200 + Math.random() * 1800, t + 0.08 + i * 0.04);
      sparkleGain.gain.setValueAtTime(0.03, t + 0.08 + i * 0.04);
      sparkleGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.25 + i * 0.05);

      sparkleOsc.connect(sparkleGain);
      sparkleGain.connect(this.masterGain);
      sparkleOsc.start(t + 0.08 + i * 0.04);
      sparkleOsc.stop(t + 0.35);
    }
  }

  // Update soundscape depending on scene progress
  public updateProgress(progress: number) {
    if (!this.ctx || !this.droneGain) return;

    // Trigger bell chime when doors open (around progress 0.08 - 0.18)
    if (progress > 0.08 && progress < 0.20) {
      this.playTempleBell();
    }
  }

  public toggleMute(): boolean {
    if (!this.isInitialized) {
      this.init();
      return true;
    }
    if (!this.ctx || !this.masterGain) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isMuted) {
      this.masterGain.gain.linearRampToValueAtTime(0.35, this.ctx.currentTime + 0.4);
      this.isMuted = false;
    } else {
      this.masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.4);
      this.isMuted = true;
    }
    return !this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }
}

export const audioEngine = new WeddingAudioEngine();
