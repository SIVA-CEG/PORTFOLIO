// src/components/ThreeScene.jsx
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Sparkles } from "@react-three/drei";

/*
Features:
- Renders Sun and Moon as lively spheres
- Clicking a body calls onToggle(kind) to set theme
- Only the active body is highlighted (scale + emissive), the other fades out
- Small orbiting particle (sparkle) around the active body
*/

function AnimatedBody({ kind = "sun", active = false, onToggle, position = [0, 0, 0] }) {
  const ref = useRef();
  const mat = useRef();
  // per-body params
  const isSun = kind === "sun";
  const baseColor = isSun ? "#ffd166" : "#cfe8ff";
  const emissiveColor = isSun ? "#ffb703" : "#6ea8ff";

  useFrame((state, delta) => {
    // gentle rotation
    if (ref.current) {
      ref.current.rotation.y += 0.14 * delta;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * (isSun ? 0.26 : 0.2)) * 0.05;
      // animate scale toward 1.0 (active) or 0.85 (inactive)
      const targetScale = active ? (isSun ? 1.02 : 0.98) : 0.68;
      ref.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.08);
    }
    // animate emissive intensity
    if (mat.current) {
      const targetEmissive = active ? (isSun ? 1.4 : 0.9) : 0.06;
      mat.current.emissiveIntensity = THREE.MathUtils.lerp(mat.current.emissiveIntensity || 0, targetEmissive, 0.06);
    }
  });

  // keyboard accessibility: Enter toggles
  useEffect(() => {
    const handler = (e) => {
      // space or Enter when this body is focused
      if ((e.key === "Enter" || e.key === " ") && document.activeElement === ref.current?.userData?.domElement) {
        onToggle(kind);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onToggle, kind]);

  return (
    <group position={position}>
      <mesh
        ref={ref}
        onClick={() => onToggle(kind)}
        onPointerOver={(e) => (e.stopPropagation(), (document.body.style.cursor = "pointer"))}
        onPointerOut={() => (document.body.style.cursor = "")}
        role="button"
        tabIndex={0}
        userData={{ domElement: null }}
        aria-label={`${kind} toggle`}
      >
        <sphereGeometry args={[0.95, 64, 64]} />
        <meshStandardMaterial
          ref={mat}
          color={baseColor}
          emissive={emissiveColor}
          emissiveIntensity={active ? (isSun ? 1.4 : 0.9) : 0.06}
          metalness={0.16}
          roughness={0.5}
        />
      </mesh>

      {/* soft atmosphere / glow using an extra transparent sphere */}
      <mesh position={position}>
        <sphereGeometry args={[1.08, 32, 32]} />
        <meshBasicMaterial
          transparent
          opacity={active ? (isSun ? 0.18 : 0.12) : 0.03}
          color={isSun ? "#ffd88a" : "#cfe8ff"}
        />
      </mesh>

      {/* optional subtle sparkles around active body */}
      {active && (
        <Sparkles
          count={30}
          scale={isSun ? 1.6 : 1.2}
          size={isSun ? 6 : 4}
          noise={0.4}
          speed={isSun ? 0.6 : 0.3}
        />
      )}
    </group>
  );
}

export default function ThreeScene({ theme, setTheme }) {
  // handler called when user toggles via clicking the body
  const handleToggle = (kind) => {
    const next = kind === "sun" ? "sun" : "moon";
    setTheme(next);
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 14 }}>
      <div
        style={{
          width: 520,
          maxWidth: "92vw",
          height: 160,
          borderRadius: 12,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
          boxShadow: "0 12px 32px rgba(2,6,23,0.45)",
          border: "1px solid rgba(255,255,255,0.03)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(0,0,0,0.02))"
        }}
      >
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          {/* sky ambient changes depending on theme */}
          <ambientLight intensity={theme === "sun" ? 0.9 : 0.18} />
          <directionalLight position={[6, 6, 6]} intensity={theme === "sun" ? 1.05 : 0.32} />

          {/* show stars if moon is active — these are 3D stars inside canvas */
          /* but we'll also add a page-wide StarsOverlay for full-screen stars (see next component) */}
          {theme === "moon" && null}

          {/* Sun left, Moon right */}
          <AnimatedBody kind="sun" active={theme === "sun"} position={[-1.15, 0, 0]} onToggle={handleToggle} />
          <AnimatedBody kind="moon" active={theme === "moon"} position={[1.15, 0, 0]} onToggle={handleToggle} />

          {/* tiny non-interactive controls to keep it tidy on mobile */}
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>

        {/* small hint overlay using Html (accessible) */}
        <div style={{ position: "absolute", left: 12, bottom: 8, fontSize: 12, color: "var(--muted)" }}>
          Click Sun or Moon — toggle theme
        </div>
      </div>
    </div>
  );
}
