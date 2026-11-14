import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { DaytimeCamera } from './DaytimeCamera';
import { WindController } from './WindController';
import { SkyLayer } from './SkyLayer';
import { CloudLayer } from './CloudLayer';
import { BirdLayer } from './BirdLayer';
import { TreeLayer } from './TreeLayer';
import { MandapLayer } from './MandapLayer';
import { FloralBranchLayer } from './FloralBranchLayer';
import { LotusLayer } from './LotusLayer';
import { GardenLayer } from './GardenLayer';

interface DaytimeCanvasProps {
  scrollProgress: number;
  mouse: { x: number; y: number };
  opacity: number;
  reducedMotion: boolean;
}

export const DaytimeCanvas: React.FC<DaytimeCanvasProps> = ({
  scrollProgress,
  mouse,
  opacity,
  reducedMotion
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    scrollProgress,
    mouse,
    opacity,
    reducedMotion
  });

  // Keep latest props in ref for continuous RAF loop without re-instantiating scene
  useEffect(() => {
    stateRef.current = { scrollProgress, mouse, opacity, reducedMotion };
  }, [scrollProgress, mouse, opacity, reducedMotion]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Renderer Setup with DPR cap for mobile performance
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const aspect = width / height;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 2. Camera Setup
    const daytimeCamera = new DaytimeCamera(aspect);

    // 3. Texture Loading Manager
    const loadingManager = new THREE.LoadingManager();
    const textureLoader = new THREE.TextureLoader(loadingManager);

    // 4. Instantiate all Layer Planes with correct Z-depths
    const skyLayer = new SkyLayer(textureLoader);
    scene.add(skyLayer.mesh);

    const cloudLayer = new CloudLayer(textureLoader);
    scene.add(cloudLayer.mesh);

    const birdLayer = new BirdLayer(textureLoader);
    scene.add(birdLayer.mesh);

    const treeLayer = new TreeLayer(textureLoader);
    scene.add(treeLayer.mesh);

    const mandapLayer = new MandapLayer(textureLoader);
    scene.add(mandapLayer.mesh);

    const branchLayer = new FloralBranchLayer(textureLoader);
    scene.add(branchLayer.mesh);

    const lotusLayer = new LotusLayer(textureLoader);
    scene.add(lotusLayer.mesh);

    const gardenLayer = new GardenLayer(textureLoader);
    scene.add(gardenLayer.mesh);

    // 5. Procedural Wind Controller
    const windController = new WindController();

    // 6. Handle Window Resizing
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      daytimeCamera.updateAspect(w / h);
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 7. Render Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Skip heavy rendering if scene is completely invisible
      if (stateRef.current.opacity <= 0.005) return;

      const time = clock.getElapsedTime();
      const { scrollProgress: sp, mouse: m, reducedMotion: rm } = stateRef.current;

      // Update 3D Camera motion across 5 phases
      daytimeCamera.update(sp, m, rm);

      // Compute procedural wind state
      const wind = windController.getWind(time, rm);

      // Update all layer planes
      skyLayer.update(time, sp, m);
      cloudLayer.update(time, sp, m);
      birdLayer.update(time, sp, m);
      treeLayer.update(time, sp, m, wind.trees);
      mandapLayer.update(time, sp, m);
      branchLayer.update(time, sp, m, wind.branchesLeft, wind.branchesRight);
      lotusLayer.update(time, sp, m, wind.lotus);
      gardenLayer.update(time, sp, m, wind.grass);

      renderer.render(scene, daytimeCamera.camera);
    };

    animId = requestAnimationFrame(animate);

    // 8. Disposal & Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);

      skyLayer.dispose();
      cloudLayer.dispose();
      birdLayer.dispose();
      treeLayer.dispose();
      mandapLayer.dispose();
      branchLayer.dispose();
      lotusLayer.dispose();
      gardenLayer.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="daytime-three-canvas-container"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}
    />
  );
};

