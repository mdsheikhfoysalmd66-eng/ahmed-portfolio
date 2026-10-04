import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
} from "@react-three/drei";
import { useRef } from "react";

function Cube() {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.x += delta * 0.25;
    cubeRef.current.rotation.y += delta * 0.45;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    cubeRef.current.rotation.x +=
      (mouseY * 0.4 - cubeRef.current.rotation.x) * 0.01;

    cubeRef.current.rotation.y +=
      (mouseX * 0.4 - cubeRef.current.rotation.y) * 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial
        color="#8b5cf6"
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
}

function Particles() {
  const particlesRef = useRef();

  const positions = new Float32Array(600);

  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state, delta) => {
    if (!particlesRef.current) return;

    particlesRef.current.rotation.y += delta * 0.03;
    particlesRef.current.rotation.x += delta * 0.01;
  });

  return (
    <Points
      ref={particlesRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={1} />

      <directionalLight
        position={[3, 3, 3]}
        intensity={2}
      />

      <Particles />

      <Cube />
    </Canvas>
  );
}