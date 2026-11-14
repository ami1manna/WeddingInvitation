import * as THREE from 'three';
import { LayerPlane } from './types';
import { DAYTIME_CONFIG } from './config';
import birdsImg from '../../../assets/daytime/B03_birds.png';

interface BirdFlock {
  mesh: THREE.Mesh;
  speed: number;
  yOffset: number;
  zPos: number;
  flightPath: number; // 0 or 1
  baseScale: number;
}

export class BirdLayer implements LayerPlane {
  public mesh: THREE.Group;
  private flocks: BirdFlock[] = [];
  private geometry: THREE.PlaneGeometry;
  private texture: THREE.Texture;

  constructor(textureLoader: THREE.TextureLoader) {
    this.mesh = new THREE.Group();
    this.texture = textureLoader.load(birdsImg);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.geometry = new THREE.PlaneGeometry(5.5, 3.2);

    // Two distinct flight paths and distances
    const flockConfigs = [
      { z: DAYTIME_CONFIG.depths.birds - 1.5, scale: 0.9, speed: 0.22, yOffset: 6.2, path: 0 },
      { z: DAYTIME_CONFIG.depths.birds + 1.2, scale: 1.15, speed: 0.28, yOffset: 4.8, path: 1 }
    ];

    flockConfigs.forEach((cfg) => {
      const mat = new THREE.MeshBasicMaterial({
        map: this.texture,
        transparent: true,
        opacity: 0.92,
        depthWrite: false,
        depthTest: true
      });

      const mesh = new THREE.Mesh(this.geometry, mat);
      mesh.scale.set(cfg.scale, cfg.scale, 1);
      this.mesh.add(mesh);

      this.flocks.push({
        mesh,
        speed: cfg.speed,
        yOffset: cfg.yOffset,
        zPos: cfg.z,
        flightPath: cfg.path,
        baseScale: cfg.scale
      });
    });
  }

  public update(time: number, scrollProgress: number, mouse: { x: number; y: number }) {
    const parallaxMultiplier = DAYTIME_CONFIG.parallax.birds;

    this.flocks.forEach((f, idx) => {
      // Loop flight path seamlessly across wide coordinate span (-25 to +25)
      const flightDuration = 18 / f.speed;
      const progress = ((time + idx * 8) % flightDuration) / flightDuration; // 0..1 loop

      // X: enters from left (-22), flies across to right (+22)
      const posX = -22 + progress * 44;

      // Vertical sinusoidal flight path variation
      const waveFreq = f.flightPath === 0 ? 2.2 : 1.7;
      const posY = f.yOffset + Math.sin(progress * Math.PI * waveFreq) * 0.9;

      // Subtle rotation during flight (tilting up and down slightly along wave slope)
      const rotZ = Math.cos(progress * Math.PI * waveFreq) * 0.05;

      const pX = -mouse.x * parallaxMultiplier * 2;
      const pY = -mouse.y * parallaxMultiplier * 1.5;

      f.mesh.position.set(posX + pX, posY + pY + (scrollProgress * 0.5), f.zPos);
      f.mesh.rotation.z = rotZ;

      // Smooth fade-in at start and fade-out at end of flight path to avoid abrupt pop
      const edgeFade = Math.sin(progress * Math.PI);
      (f.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, Math.min(1, edgeFade * 1.4));
    });
  }

  public dispose() {
    this.geometry.dispose();
    this.texture.dispose();
    this.flocks.forEach((f) => {
      (f.mesh.material as THREE.Material).dispose();
    });
  }
}

