import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Decal,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.1]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff421"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.2}
          flatShading
        />
      </mesh>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }} dpr={1}>
      <Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Float speed={5} rotationIntensity={1} floatIntensity={3}>
          <Ball imgUrl={icon} />
        </Float>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
