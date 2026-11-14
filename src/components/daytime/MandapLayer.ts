import * as THREE from 'three';
import { LayerPlane } from './types';
import { DAYTIME_CONFIG } from './config';
import mandapImg from '../../../assets/daytime/B06_mandap.png';

export class MandapLayer implements LayerPlane {
  public mesh: THREE.Mesh;
  private material: THREE.MeshBasicMaterial;
  private texture: THREE.Texture;
  private geometry: THREE.PlaneGeometry;

  constructor(textureLoader: THREE.TextureLoader) {
    this.geometry = new THREE.PlaneGeometry(16, 17);
    this.texture = textureLoader.load(mandapImg);
    this.texture.colorSpace = THREE.SRGBColorSpace;

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      depthWrite: false,
      depthTest: true
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, -0.6, DAYTIME_CONFIG.depths.mandap);
  }

  public update(time: number, scrollProgress: number, mouse: { x: number; y: number }) {
    const parallaxMultiplier = DAYTIME_CONFIG.parallax.mandap;

    // Gradual scale increase across scroll: 1.0 to 1.12 as specified
    const targetScale = 1.0 + scrollProgress * 0.12;
    this.mesh.scale.set(targetScale, targetScale, 1);

    // Subtle atmospheric floating breath without tilting or distortion
    const subtleBreath = Math.sin(time * 0.8) * 0.03;

    // Depth parallax
    const pX = -mouse.x * parallaxMultiplier * 2;
    const pY = -mouse.y * parallaxMultiplier * 1.5;

    this.mesh.position.set(pX, -0.6 + subtleBreath + pY + (scrollProgress * 0.25), DAYTIME_CONFIG.depths.mandap);
  }

  public dispose() {
    this.geometry.dispose();
    this.texture.dispose();
    this.material.dispose();
  }
}

