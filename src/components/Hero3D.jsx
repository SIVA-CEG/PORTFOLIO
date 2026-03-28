import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  Bounds,
  useBounds,
} from "@react-three/drei";
import * as THREE from "three";

/* ---------------- Auto-fit camera ---------------- */
function FitModel({ children }) {
  const bounds = useBounds();

  useEffect(() => {
    bounds.refresh().fit();
  }, [bounds]);

  return children;
}

/* ---------------- Mouse-controlled model ---------------- */
function GamingPC({ pointerRef }) {
  const { scene } = useGLTF("/models/gaming_pc.glb");
  const groupRef = useRef();

  /* 🔥 THE CONTROL PANEL 
    Adjust these base values to set the "Idle" position.
    Values are in Radians (Math.PI = 180 degrees).
  */
  const CONTROLS = {
    // ROTATION (Spinning)
    rotateY: Math.PI + 1.57,   // Left / Right spin (Yaw)
    tiltX: 0.5,               // Up / Down tilt (Pitch)
    slantZ: 0,                // Side-to-side lean (Roll)

    // POSITION (Movement)
    offsetX: 1,               // Move model Left (-) or Right (+)
    offsetY: 0.55,             // Move model Up (+) or Down (-)
    offsetZ: -3,               // Move model Closer (+) or Further (-)
    
    // MOUSE SENSITIVITY
    sensitivityX: 0.5,        // How much it follows mouse horizontally
    sensitivityY: 0.3,        // How much it follows mouse vertically
    lerpSpeed: 0.1            // Smoothness (0.1 is fluid, 0.01 is heavy)
  };

  // Smooth refs to prevent jitter
  const smoothX = useRef(CONTROLS.tiltX);
  const smoothY = useRef(CONTROLS.rotateY);
  const smoothZ = useRef(CONTROLS.slantZ);

  useEffect(() => {
    // Set initial static position
    scene.position.set(CONTROLS.offsetX, CONTROLS.offsetY, CONTROLS.offsetZ);
  }, [scene]);

  useFrame(() => {
    if (!groupRef.current) return;

    const { x, y, active } = pointerRef.current;

    // 1. Calculate Targets
    // If mouse is active, add offset to the base. If not, return to base.
    const targetY = active ? CONTROLS.rotateY - (x * CONTROLS.sensitivityX) : CONTROLS.rotateY;
    const targetX = active ? CONTROLS.tiltX + (y * CONTROLS.sensitivityY) : CONTROLS.tiltX;
    const targetZ = active ? CONTROLS.slantZ + (x * 0.1) : CONTROLS.slantZ; // Subtle auto-lean

    // 2. Interpolate (Smoothing)
    smoothY.current = THREE.MathUtils.lerp(smoothY.current, targetY, CONTROLS.lerpSpeed);
    smoothX.current = THREE.MathUtils.lerp(smoothX.current, targetX, CONTROLS.lerpSpeed);
    smoothZ.current = THREE.MathUtils.lerp(smoothZ.current, targetZ, CONTROLS.lerpSpeed);

    // 3. Apply to Group
    groupRef.current.rotation.set(
      smoothX.current, // Up/Down Tilt
      smoothY.current, // Left/Right Rotate
      smoothZ.current  // Slant/Roll
    );
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.8} />
    </group>
  );
}
/* ---------------- Canvas Wrapper ---------------- */
export default function Hero3D() {
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  return (
    <Canvas
      camera={{ fov: 35, position: [0, 0, 10] }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
      onPointerMove={(e) => {
        pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        pointerRef.current.active = true;
      }}
      onPointerLeave={() => {
        pointerRef.current.active = false;
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[6, 6, 6]} intensity={1.3} />
      <directionalLight position={[-6, 4, -6]} intensity={0.6} />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={0.8}>
          <FitModel>
            <GamingPC pointerRef={pointerRef} />
          </FitModel>
        </Bounds>

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/gaming_pc.glb");
