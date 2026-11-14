import * as THREE from 'three';

export interface SceneDimensions {
  width: number;
  height: number;
  aspect: number;
  isMobile: boolean;
}

export interface LayerPlane {
  mesh: THREE.Mesh | THREE.Group;
  update?: (...args: any[]) => void;
  dispose?: () => void;
}

export interface WindState {
  globalIntensity: number;
  branchesLeft: number;
  branchesRight: number;
  lotus: number;
  trees: number;
  grass: number;
}

export interface CameraTimelinePhase {
  name: string;
  start: number;
  end: number;
}
