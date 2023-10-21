import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Loader } from "@react-three/drei";

const Computer = ({ isMobile }) => {
  const computerModel = useGLTF("./desktop_pc/scene.glb");

  return (
    <mesh>
      <pointLight intensity={1} position={[1, 2, 0]} />
      <directionalLight intensity={1} color={"#b68fff"} />
      <primitive
        object={computerModel.scene}
        scale={isMobile ? 0.7 : 1}
        position={[0, -1.5, -1.5]}
        rotation={[-0.01, -0.2, -0.15]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      <Canvas camera={{ position: [20, 3, 5], fov: 25 }}>
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.1}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computer isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
      <Loader />
    </>
  );
};

export default ComputerCanvas;
