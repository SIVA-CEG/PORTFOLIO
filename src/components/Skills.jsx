import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Decal, useTexture } from "@react-three/drei";
import * as THREE from "three";

/* 🔥 Individual Ball with Mouse Interaction */
function Ball({ icon, position }) {
  const meshRef = useRef();
  const texture = useTexture(icon);

  useFrame((state) => {
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    if (meshRef.current) {
      // Smooth follow effect
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouseX * 0.5,
        0.05
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -mouseY * 0.5,
        0.05
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        
        {/* 🔥 BIG WHITE BALL */}
        <icosahedronGeometry args={[2.8, 3]} />

        <meshStandardMaterial
          color="#ffffff"
          flatShading
          metalness={0.2}
          roughness={0.1}
        />

        {/* 🔥 LOGO FIXED */}
        <Decal
        position={[0, 0, 1.8]}   // slightly outside surface
        rotation={[0, 0, 0]}
        scale={3.8}              // 🔥 BIGGER IMAGE
        map={texture}
        flatShading
      />
      </mesh>
    </Float>
  );
}

/* 🔥 MAIN COMPONENT */
export default function TechBalls() {
  const icons = [
    "/skills/c_cpp.png",
    "/skills/python.png",
    "/skills/java.png",
    "/skills/javascript.png",
    "/skills/typescript.png",
    "/skills/html.png",
    "/skills/css.png",
    "/skills/react.png",
    "/skills/nodejs.png",
    "/skills/springboot.png",
    "/skills/bootstrap.png",
    "/skills/postgres.png",
    "/skills/mongodb.png",
    "/skills/github.png",
    "skills/postman.png",
    "/skills/docker.png",
    "/skills/vscode.png",
    "/skills/pycharm.png",
    "/skills/intellij.png",
    "/skills/msoffice.png",
    
  ];

  return (
    <div style={{ width: "100%", height: "800px" }}>
      <Canvas camera={{ position: [0, 0, 25] }}>
        
        {/* 🔥 LIGHTING (Bright white look) */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <directionalLight position={[-5, -5, -5]} intensity={1.2} />

        <Suspense fallback={null}>
          {icons.map((icon, i) => {
            const cols = 5;
            const rows = Math.ceil(icons.length / cols);

            const spacingX = 8;
            const spacingY = 7;

            const col = i % cols;
            const row = Math.floor(i / cols);

            // 🔥 CENTERING MAGIC
            const x = (col - (cols - 1) / 2) * spacingX;
            const y = ((rows - 1) / 2 - row) * spacingY;

            return (
              <Ball
                key={i}
                icon={icon}
                position={[x, y, 0]}
              />
            );
          })}
        </Suspense>
      </Canvas>
    </div>
  );
}