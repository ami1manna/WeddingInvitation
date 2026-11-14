import * as THREE from 'three';
import { LayerPlane } from './types';
import { DAYTIME_CONFIG } from './config';
import leftTreesImg from '../../../assets/daytime/B07_left_trees.png';
import rightTreesImg from '../../../assets/daytime/B08_right_trees.png';

export class TreeLayer implements LayerPlane {
  public mesh: THREE.Group;
  private leftTree: THREE.Mesh;
  private rightTree: THREE.Mesh;
  private leftMat: THREE.MeshBasicMaterial;
  private rightMat: THREE.MeshBasicMaterial;
  private leftTex: THREE.Texture;
  private rightTex: THREE.Texture;
  private geometry: THREE.PlaneGeometry;

  constructor(textureLoader: THREE.TextureLoader) {
    this.mesh = new THREE.Group();
    this.geometry = new THREE.PlaneGeometry(16.5, 20);

    this.leftTex = textureLoader.load(leftTreesImg);
    this.leftTex.colorSpace = THREE.SRGBColorSpace;
    this.leftMat = new THREE.MeshBasicMaterial({
      map: this.leftTex,
      transparent: true,
      depthWrite: false,
      depthTest: true
    });
    this.leftTree = new THREE.Mesh(this.geometry, this.leftMat);
    this.leftTree.position.set(-10.2, -1.2, DAYTIME_CONFIG.depths.trees);
    this.mesh.add(this.leftTree);

    this.rightTex = textureLoader.load(rightTreesImg);
    this.rightTex.colorSpace = THREE.SRGBColorSpace;
    this.rightMat = new THREE.MeshBasicMaterial({
      map: this.rightTex,
      transparent: true,
      depthWrite: false,
      depthTest: true
    });
    this.rightTree = new THREE.Mesh(this.geometry, this.rightMat);
    this.rightTree.position.set(10.2, -1.2, DAYTIME_CONFIG.depths.trees);
    this.mesh.add(this.rightTree);
  }

  public update(time: number, scrollProgress: number, mouse: { x: number; y: number }, wind: number) {
    const parallaxMultiplier = DAYTIME_CONFIG.parallax.trees;

    // As user scrolls, trees part slightly to frame the approaching mandap
    const parting = scrollProgress * 1.5;

    // Left tree independent foliage sway and horizontal parallax
    const pX = -mouse.x * parallaxMultiplier * 2;
    const pY = -mouse.y * parallaxMultiplier * 1.5;
    const leftSway = Math.sin(time * 0.95) * 0.015 + wind * 0.2;
    this.leftTree.position.x = -10.2 - parting + pX;
    this.leftTree.position.y = -1.2 + pY + (scrollProgress * 0.4);
    this.leftTree.rotation.z = leftSway;

    // Right tree independent animation timing & wind response
    const rightSway = Math.cos(time * 1.1 + 0.7) * 0.018 - wind * 0.25;
    this.rightTree.position.x = 10.2 + parting + pX;
    this.rightTree.position.y = -1.2 + pY + (scrollProgress * 0.4);
    this.rightTree.rotation.z = rightSway;
  }

  public dispose() {
    this.geometry.dispose();
    this.leftTex.dispose();
    this.rightTex.dispose();
    this.leftMat.dispose();
    this.rightMat.dispose();
  }
}

