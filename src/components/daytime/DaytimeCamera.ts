import * as THREE from 'three';
import { DAYTIME_CONFIG } from './config';

export class DaytimeCamera {
  public camera: THREE.PerspectiveCamera;
  private targetPosition: THREE.Vector3;
  private currentPosition: THREE.Vector3;
  private targetLookAt: THREE.Vector3;
  private currentLookAt: THREE.Vector3;

  constructor(aspect: number) {
    const isMobile = aspect < 0.9;
    const fov = isMobile ? 58 : DAYTIME_CONFIG.camera.fov;

    this.camera = new THREE.PerspectiveCamera(
      fov,
      aspect,
      DAYTIME_CONFIG.camera.near,
      DAYTIME_CONFIG.camera.far
    );

    const init = DAYTIME_CONFIG.camera.initialPos;
    this.currentPosition = new THREE.Vector3(init.x, init.y, isMobile ? init.z + 2.5 : init.z);
    this.targetPosition = this.currentPosition.clone();

    this.currentLookAt = new THREE.Vector3(
      DAYTIME_CONFIG.camera.lookAt.x,
      DAYTIME_CONFIG.camera.lookAt.y,
      DAYTIME_CONFIG.camera.lookAt.z
    );
    this.targetLookAt = this.currentLookAt.clone();

    this.camera.position.copy(this.currentPosition);
    this.camera.lookAt(this.currentLookAt);
  }

  public updateAspect(aspect: number) {
    const isMobile = aspect < 0.9;
    this.camera.fov = isMobile ? 58 : DAYTIME_CONFIG.camera.fov;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  // 5-Phase Scroll Trajectory + Mouse Parallax
  public update(
    scrollProgress: number,
    mouse: { x: number; y: number },
    reducedMotion: boolean = false
  ) {
    const p = Math.max(0, Math.min(1, scrollProgress));
    const isMobile = this.camera.aspect < 0.9;
    const zOffset = isMobile ? 2.5 : 0;

    // Calculate 5-phase camera path across scroll
    let posX = 0;
    let posY = 0.6;
    let posZ = 12.5 + zOffset;
    let lookY = 0;

    if (p <= 0.20) {
      // Phase 1 – Environment Reveal (0–20%)
      const t = p / 0.20;
      posX = Math.sin(t * Math.PI * 0.5) * -0.15;
      posY = 0.6 - t * 0.08;
      posZ = (12.5 - t * 1.2) + zOffset;
      lookY = 0.1 * (1 - t);
    } else if (p <= 0.40) {
      // Phase 2 – Garden Entrance (20–40%)
      const t = (p - 0.20) / 0.20;
      posX = -0.15 + t * 0.35; // lateral camera movement
      posY = 0.52 - t * 0.14;  // downward movement to reveal foreground garden
      posZ = (11.3 - t * 1.5) + zOffset;
      lookY = -0.1 * t;
    } else if (p <= 0.60) {
      // Phase 3 – Mandap Reveal (40–60%)
      const t = (p - 0.40) / 0.20;
      posX = 0.20 - t * 0.20;  // centering back
      posY = 0.38 + t * 0.12;  // gradual upward movement to focus on mandap
      posZ = (9.8 - t * 1.8) + zOffset;
      lookY = 0.05 * t;
    } else if (p <= 0.80) {
      // Phase 4 – Invitation Decoration Reveal (60–80%)
      const t = (p - 0.60) / 0.20;
      posX = Math.sin(t * Math.PI) * 0.12;
      posY = 0.50 - t * 0.18;
      posZ = (8.0 - t * 1.4) + zOffset;
      lookY = 0.08 * (1 - t);
    } else {
      // Phase 5 – Final Composition (80–100%)
      const t = (p - 0.80) / 0.20;
      const smoothT = t * t * (3 - 2 * t);
      posX = 0;
      posY = 0.32 - smoothT * 0.12;
      posZ = (6.6 - smoothT * 0.8) + zOffset;
      lookY = 0;
    }

    // Add pointer parallax to target position & lookAt
    if (!reducedMotion) {
      posX += mouse.x * 0.35;
      posY += mouse.y * 0.22;
    }

    this.targetPosition.set(posX, posY, posZ);
    this.targetLookAt.set(
      reducedMotion ? 0 : mouse.x * 0.15,
      lookY + (reducedMotion ? 0 : mouse.y * 0.1),
      -5
    );

    // Damped interpolation for fluid camera gliding
    const lerpFactor = reducedMotion ? 1 : 0.085;
    this.currentPosition.lerp(this.targetPosition, lerpFactor);
    this.currentLookAt.lerp(this.targetLookAt, lerpFactor);

    this.camera.position.copy(this.currentPosition);
    this.camera.lookAt(this.currentLookAt);
  }
}

