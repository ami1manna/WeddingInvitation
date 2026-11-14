import * as THREE from 'three';
import { LayerPlane } from './types';
import { DAYTIME_CONFIG } from './config';
import cloudsImg from '../../../assets/daytime/B02_clouds.png';

interface CloudInstance {
  mesh: THREE.Mesh;
  baseX: number;
  baseY: number;
  baseZ: number;
  speedX: number;
  speedY: number;
  phase: number;
}

export class CloudLayer implements LayerPlane {
  public mesh: THREE.Group;
  private clouds: CloudInstance[] = [];
  private geometry: THREE.PlaneGeometry;
  private texture: THREE.Texture;

  constructor(textureLoader: THREE.TextureLoader) {
    this.mesh = new THREE.Group();
    this.texture = textureLoader.load(cloudsImg);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.geometry = new THREE.PlaneGeometry(36, 14);

    // Three distinct cloud instances with different scale, position, opacity, speed, and depth
    const cloudConfigs = [
      { z: DAYTIME_CONFIG.depths.clouds - 2, scale: 1.15, opacity: 0.55, startX: -14, startY: 6.5, speedX: 0.35, speedY: 0.05, phase: 0 },
      { z: DAYTIME_CONFIG.depths.clouds, scale: 0.95, opacity: 0.85, startX: 8, startY: 4.8, speedX: -0.25, speedY: -0.04, phase: 2.1 },
      { z: DAYTIME_CONFIG.depths.clouds + 2, scale: 1.35, opacity: 0.65, startX: -4, startY: 7.8, speedX: 0.18, speedY: 0.08, phase: 4.2 }
    ];

    cloudConfigs.forEach((cfg) => {
      const mat = new THREE.MeshBasicMaterial({
        map: this.texture,
        transparent: true,
        opacity: cfg.opacity,
        depthWrite: false,
        depthTest: true
      });

      const mesh = new THREE.Mesh(this.geometry, mat);
      mesh.scale.set(cfg.scale, cfg.scale, 1);
      mesh.position.set(cfg.startX, cfg.startY, cfg.z);
      this.mesh.add(mesh);

      this.clouds.push({
        mesh,
        baseX: cfg.startX,
        baseY: cfg.startY,
        baseZ: cfg.z,
        speedX: cfg.speedX,
        speedY: cfg.speedY,
        phase: cfg.phase
      });
    });
  }

  public update(time: number, scrollProgress: number, mouse: { x: number; y: number }) {
    const parallaxMultiplier = DAYTIME_CONFIG.parallax.clouds;

    this.clouds.forEach((c, idx) => {
      // Independent horizontal drift & vertical float looping across wide boundaries
      const driftX = Math.sin((time * c.speedX * 0.15) + c.phase) * 6;
      const driftY = Math.cos((time * c.speedY * 0.25) + c.phase) * 0.4;

      const pX = -mouse.x * parallaxMultiplier * (1 + idx * 0.2) * 2;
      const pY = -mouse.y * parallaxMultiplier * (1 + idx * 0.2) * 1.5;

      c.mesh.position.x = c.baseX + driftX + pX;
      c.mesh.position.y = c.baseY + driftY + pY + (scrollProgress * 0.6);
    });
  }

  public dispose() {
    this.geometry.dispose();
    this.texture.dispose();
    this.clouds.forEach((c) => {
      (c.mesh.material as THREE.Material).dispose();
    });
  }
}

