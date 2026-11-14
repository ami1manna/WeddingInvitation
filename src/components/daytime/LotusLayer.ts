import * as THREE from 'three';
import { LayerPlane } from './types';
import { DAYTIME_CONFIG } from './config';
import lotusImg from '../../../assets/daytime/B10_lotus.png';

export class LotusLayer implements LayerPlane {
  public mesh: THREE.Group;
  private lotusMesh: THREE.Mesh;
  private rippleMesh: THREE.Mesh;
  private material: THREE.MeshBasicMaterial;
  private rippleMat: THREE.MeshBasicMaterial;
  private texture: THREE.Texture;
  private geometry: THREE.PlaneGeometry;

  constructor(textureLoader: THREE.TextureLoader) {
    this.mesh = new THREE.Group();
    this.geometry = new THREE.PlaneGeometry(6.5, 4.2);
    this.texture = textureLoader.load(lotusImg);
    this.texture.colorSpace = THREE.SRGBColorSpace;

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      depthWrite: false,
      depthTest: true
    });

    this.lotusMesh = new THREE.Mesh(this.geometry, this.material);

    // Subtle pond water reflection ripple underneath
    const rippleGeo = new THREE.PlaneGeometry(8, 2.5);
    this.rippleMat = new THREE.MeshBasicMaterial({
      color: 0xa8d5f2,
      transparent: true,
      opacity: 0.28,
      depthWrite: false
    });
    this.rippleMesh = new THREE.Mesh(rippleGeo, this.rippleMat);
    this.rippleMesh.position.set(0, -1.8, -0.1);
    this.mesh.add(this.rippleMesh);

    this.mesh.add(this.lotusMesh);
    // Positioned near lower foreground (right side pond edge) at Z: 4
    this.mesh.position.set(4.8, -3.2, DAYTIME_CONFIG.depths.lotus);
  }

  public update(time: number, scrollProgress: number, mouse: { x: number; y: number }, windLotus: number) {
    const parallaxMultiplier = DAYTIME_CONFIG.parallax.lotus;

    // Gentle floating bobbing & water ripple rotation (-3° to +3°)
    const waterBob = Math.sin(time * 1.6) * 0.12;
    const waterRipple = Math.cos(time * 1.2) * (Math.PI / 60);

    const pX = -mouse.x * parallaxMultiplier * 2;
    const pY = -mouse.y * parallaxMultiplier * 1.5;

    this.lotusMesh.rotation.z = windLotus + waterRipple;
    this.mesh.position.set(4.8 + pX, -3.2 + waterBob + pY - (scrollProgress * 0.6), DAYTIME_CONFIG.depths.lotus);

    // Dynamic water reflection pulse
    this.rippleMesh.scale.x = 1.0 + Math.sin(time * 2) * 0.12;
    this.rippleMesh.scale.y = 1.0 + Math.cos(time * 1.8) * 0.08;
  }

  public dispose() {
    this.geometry.dispose();
    this.texture.dispose();
    this.material.dispose();
    this.rippleMat.dispose();
  }
}

