import * as THREE from 'three';
import { LayerPlane } from './types';
import { DAYTIME_CONFIG } from './config';
import leftBranchesImg from '../../../assets/daytime/B04_left_branches.png';
import rightBranchesImg from '../../../assets/daytime/B05_right_branches.png';

export class FloralBranchLayer implements LayerPlane {
  public mesh: THREE.Group;
  private leftPivot: THREE.Group;
  private rightPivot: THREE.Group;
  private leftMesh: THREE.Mesh;
  private rightMesh: THREE.Mesh;
  private leftMat: THREE.MeshBasicMaterial;
  private rightMat: THREE.MeshBasicMaterial;
  private leftTex: THREE.Texture;
  private rightTex: THREE.Texture;
  private geometry: THREE.PlaneGeometry;

  constructor(textureLoader: THREE.TextureLoader) {
    this.mesh = new THREE.Group();
    const width = 11.5;
    const height = 13.5;
    this.geometry = new THREE.PlaneGeometry(width, height);

    // 1. Left Branches with upper-left attachment point pivot
    this.leftTex = textureLoader.load(leftBranchesImg);
    this.leftTex.colorSpace = THREE.SRGBColorSpace;
    this.leftMat = new THREE.MeshBasicMaterial({
      map: this.leftTex,
      transparent: true,
      depthWrite: false,
      depthTest: true
    });
    this.leftMesh = new THREE.Mesh(this.geometry, this.leftMat);
    // Offset mesh so top-left corner is at (0, 0) of the pivot
    this.leftMesh.position.set(width * 0.42, -height * 0.48, 0);

    this.leftPivot = new THREE.Group();
    this.leftPivot.position.set(-8.8, 5.8, DAYTIME_CONFIG.depths.branches);
    this.leftPivot.add(this.leftMesh);
    this.mesh.add(this.leftPivot);

    // 2. Right Branches with upper-right attachment point pivot
    this.rightTex = textureLoader.load(rightBranchesImg);
    this.rightTex.colorSpace = THREE.SRGBColorSpace;
    this.rightMat = new THREE.MeshBasicMaterial({
      map: this.rightTex,
      transparent: true,
      depthWrite: false,
      depthTest: true
    });
    this.rightMesh = new THREE.Mesh(this.geometry, this.rightMat);
    // Offset mesh so top-right corner is at (0, 0) of the pivot
    this.rightMesh.position.set(-width * 0.42, -height * 0.48, 0);

    this.rightPivot = new THREE.Group();
    this.rightPivot.position.set(8.8, 5.8, DAYTIME_CONFIG.depths.branches);
    this.rightPivot.add(this.rightMesh);
    this.mesh.add(this.rightPivot);
  }

  public update(
    time: number,
    scrollProgress: number,
    mouse: { x: number; y: number },
    windBranchesLeft: number,
    windBranchesRight: number
  ) {
    const parallaxMultiplier = DAYTIME_CONFIG.parallax.branches;

    // Branches gently sweep outward as user approaches the mandap
    const parting = scrollProgress * 1.8;

    const pX = -mouse.x * parallaxMultiplier * 2;
    const pY = -mouse.y * parallaxMultiplier * 1.5;

    // Left branch pivot rotation: -2° to +2°
    this.leftPivot.rotation.z = windBranchesLeft;
    this.leftPivot.position.set(-8.8 - parting + pX, 5.8 + pY + (scrollProgress * 0.3), DAYTIME_CONFIG.depths.branches);

    // Right branch pivot rotation: -1.5° to +2.5° (asymmetrical, independent timing)
    this.rightPivot.rotation.z = -windBranchesRight;
    this.rightPivot.position.set(8.8 + parting + pX, 5.8 + pY + (scrollProgress * 0.3), DAYTIME_CONFIG.depths.branches);
  }

  public dispose() {
    this.geometry.dispose();
    this.leftTex.dispose();
    this.rightTex.dispose();
    this.leftMat.dispose();
    this.rightMat.dispose();
  }
}

