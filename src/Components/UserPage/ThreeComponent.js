import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function ThreeMountain(props) {
  const { nodes, materials } = useGLTF("/untitled.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={[9.1, 0.35, 9.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/untitled.glb");

export default function ThreeComponent() {
  return (
    <div className="h-[100%] w-[100%] z-1">
      <Canvas className="grayscale-0" camera={{ position: [11, 16, 12] }}>
        <Suspense fallback={null}>
          <ThreeMountain />
          <OrbitControls />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
