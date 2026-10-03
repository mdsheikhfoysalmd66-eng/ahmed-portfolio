import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cube() {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta * 0.5;
    cubeRef.current.rotation.y += delta * 0.7;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
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

      <Cube />
    </Canvas>
  );
}