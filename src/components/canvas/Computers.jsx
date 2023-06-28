import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Loader } from "@react-three/drei";

const Computers = ({ getLoading, isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const onLoadHandler = () => {
    return getLoading(true);
  };
  return (
    <mesh onBeforeRender={onLoadHandler}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} position={[1, 3, 0]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1}
        position={[0, -1.5, -1.5]}
        rotation={[-0.01, -0.2, -0.15]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getLoadingHandler = (bool) => {
    setIsLoading(bool);
  };

  useEffect(() => {
    let actualWidth = window.innerWidth;
    actualWidth <= 500 ? setIsMobile(true) : "";

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    window.addEventListener("resize", function () {
      setIsMobile(mediaQuery.matches);
    });
  }, []);

  return (
    <>
      {!isLoading ? (
        <h1 className="absolute top-[500px] text-[#915eff] text-[90px]">
          Add a spiner later
        </h1>
      ) : (
        ""
      )}
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.1}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers getLoading={getLoadingHandler} isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
      <Loader />
    </>
  );
};

export default ComputerCanvas;
