import * as THREE from 'three';
import { LayerPlane } from './types';
import { DAYTIME_CONFIG } from './config';
import skyImg from '../../../assets/daytime/B01_sky.jpg';

export class SkyLayer implements LayerPlane {
  public mesh: THREE.Mesh;
  private material: THREE.MeshBasicMaterial;

  constructor(textureLoader: THREE.TextureLoader) {
    // Sized to comfortably fill the viewport at Z: -30
    const geometry = new THREE.PlaneGeometry(68, 42);
    const texture = textureLoader.load(skyImg);
    texture.colorSpace = THREE.SRGBColorSpace;

    this.material = new THREE.MeshBasicMaterial({
      map: texture,
      depthWrite: false,
      depthTest: true
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.position.set(0, 1.5, DAYTIME_CONFIG.depths.sky);
  }

  public update(time: number, scrollProgress: number, mouse: { x: number; y: number }) {
    // Farthest layer: very slow horizontal drift + extremely subtle camera-relative movement (0.03)
    const driftX = Math.sin(time * 0.05) * 0.4;
    const parallaxX = -mouse.x * DAYTIME_CONFIG.parallax.sky * 2;
    const parallaxY = -mouse.y * DAYTIME_CONFIG.parallax.sky * 1.5;

    this.mesh.position.x = driftX + parallaxX;
    this.mesh.position.y = 1.5 + parallaxY + (scrollProgress * 0.3);
  }

  public dispose() {
    this.mesh.geometry.dispose();
    if (this.material.map) this.material.map.dispose();
    this.material.dispose();
  }
}

