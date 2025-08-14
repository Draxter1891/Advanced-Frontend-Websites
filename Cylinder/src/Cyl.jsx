import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import * as THREE from "three";

export const Cyl = () => {
  let tex = useTexture("./src/assets/scene.png");
  let cyl = useRef(null);

  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <group rotation={[0, 1.4, 0.55]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};
