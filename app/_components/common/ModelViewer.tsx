import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface ModelProps {
  modelPath: string;
  position?: number[];
  rotation?: number[];
}

function Model({
  modelPath,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: ModelProps) {
  const modelRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF(modelPath);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1}
      position={position}
      rotation={rotation}
    />
  );
}

interface ModelViewerProps {
  modelPath: string;
  className?: string;
  position?: number[];
  rotation?: number[];
}

export default function ModelViewer({
  modelPath,
  className = "",
  position,
  rotation,
}: ModelViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <directionalLight position={[10, 10, 5]} intensity={5} />
        <directionalLight position={[-10, -10, -5]} intensity={5} />
        <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
          <Model
            modelPath={modelPath}
            position={position}
            rotation={rotation}
          />
        </Float>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
