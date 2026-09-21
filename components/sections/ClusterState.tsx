"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import type { Group, Mesh } from "three";

function Hexagon({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const ref = useRef<Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (ref.current && hovered) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={ref}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <cylinderGeometry args={[1, 1, 0.5, 6]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 2 : 0.5}
          toneMapped={false}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh position={[0, 0.26, 0]}>
        <cylinderGeometry args={[1, 1, 0.05, 6]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function FloatingLabel({
  position,
  label,
  color,
}: {
  position: [number, number, number];
  label: string;
  color: string;
}) {
  return (
    <Html position={position} center distanceFactor={15} className="pointer-events-none">
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
        />
        <div className="text-xs font-mono font-bold text-white bg-black/50 backdrop-blur-md px-2 py-1 rounded border border-white/10 whitespace-nowrap">
          {label}
        </div>
      </div>
    </Html>
  );
}

function DataStream() {
  const ref = useRef<Group>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[8, 0.05, 16, 100]} />
        <meshBasicMaterial color="#00f3ff" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[12, 0.05, 16, 100]} />
        <meshBasicMaterial color="#bc13fe" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#00f3ff"
            emissiveIntensity={2}
            toneMapped={false}
            wireframe
          />
        </mesh>
        <mesh>
          <octahedronGeometry args={[1.8, 0]} />
          <meshStandardMaterial color="#000000" transparent opacity={0.9} />
        </mesh>
      </Float>
      <FloatingLabel position={[0, -3, 0]} label="CONTROL PLANE" color="#00f3ff" />

      <group position={[4, 0, 0]}>
        <Hexagon position={[0, 0, 0]} color="#0aff00" />
        <FloatingLabel position={[0, 1.5, 0]} label="NODE-01 (Ready)" color="#0aff00" />
      </group>
      <group position={[-4, -1, 2]}>
        <Hexagon position={[0, 0, 0]} color="#bc13fe" />
        <FloatingLabel position={[0, 1.5, 0]} label="NODE-02 (Processing)" color="#bc13fe" />
      </group>
      <group position={[2, 2, -3]}>
        <Hexagon position={[0, 0, 0]} color="#3b82f6" />
        <FloatingLabel position={[0, 1.5, 0]} label="NODE-03 (Scaling)" color="#3b82f6" />
      </group>

      <mesh>
        <bufferGeometry>
          <float32BufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array([
                0, 0, 0, 4, 0, 0, 0, 0, 0, -4, -1, 2, 0, 0, 0, 2, 2, -3,
              ]),
              3,
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>

      <DataStream />
    </group>
  );
}

function CameraController() {
  const { camera } = useThree();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    camera.position.set(20, 20, 40);
    setStarted(true);
  }, [camera]);

  useFrame((state, delta) => {
    if (started) {
      state.camera.position.lerp(new THREE.Vector3(2, 5, 15), delta * 1.5);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return null;
}

export function ClusterState() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => setIsInView(true)}
      className="h-[600px] w-full max-w-full bg-black overflow-hidden relative rounded-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
    >
      <div className="absolute top-4 left-4 z-10 p-4 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 max-w-xs pointer-events-none select-none">
        <h3 className="text-neon-blue font-mono font-bold text-lg mb-1 flex items-center gap-2">
          <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          CLUSTER STATE
        </h3>
        <p className="text-xs text-gray-400 font-mono">
          Live visualization of distributed architecture. Nodes interacting via gRPC mesh.
        </p>
        <div className="mt-3 flex gap-2 text-[10px] font-mono text-gray-500">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-neon-blue rounded-full" /> API
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-neon-green rounded-full" /> WORKER
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-neon-purple rounded-full" /> DB
          </span>
        </div>
      </div>

      <Canvas dpr={[1, 1.5]}>
        <color attach="background" args={["#050505"]} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#bc13fe" />

        <Scene />

        {isInView && <CameraController />}

        <EffectComposer enableNormalPass={false}>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1} />
        </EffectComposer>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.5}
          autoRotate={false}
        />
      </Canvas>
    </motion.div>
  );
}
