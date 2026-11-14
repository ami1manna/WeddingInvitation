import * as THREE from 'three';
import { LayerPlane } from './types';
import { DAYTIME_CONFIG } from './config';
import gardenImg from '../../../assets/daytime/B09_foreground_garden.png';

export class GardenLayer implements LayerPlane {
  public mesh: THREE.Mesh;
  private material: THREE.MeshBasicMaterial;
  private texture: THREE.Texture;
  private geometry: THREE.PlaneGeometry;

  constructor(textureLoader: THREE.TextureLoader) {
    // Sized to stretch across the foreground view at Z: 7
    this.geometry = new THREE.PlaneGeometry(28, 9.5);
    this.texture = textureLoader.load(gardenImg);
    this.texture.colorSpace = THREE.SRGBColorSpace;

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      depthWrite: false,
      depthTest: true
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    // Closest layer at Z: 7
    this.mesh.position.set(0, -3.8, DAYTIME_CONFIG.depths.garden);
  }

  public update(time: number, scrollProgress: number, mouse: { x: number; y: number }, windGrass: number) {
    const parallaxMultiplier = DAYTIME_CONFIG.parallax.garden; // 0.45 (highest)

    // Sweeps downward and out as camera travels into the garden
    const scrollDrop = scrollProgress * 2.8;

    // Movement opposite to camera movement
    const pX = -mouse.x * parallaxMultiplier * 2.4;
    const pY = -mouse.y * parallaxMultiplier * 1.8;

    // Gentle grass and flower sway
    const grassSway = Math.sin(time * 1.8) * 0.015 + windGrass * 0.3;

    this.mesh.position.set(pX, -3.8 - scrollDrop + pY, DAYTIME_CONFIG.depths.garden);
    this.mesh.rotation.z = grassSway;
  }

  public dispose() {
    this.geometry.dispose();
    this.texture.dispose();
    this.material.dispose();
  }
}

