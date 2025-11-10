import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Center } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./pc/scene.gltf");

  return (
    <group>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <group
          rotation={[0, Math.PI / 2 /* adjust to face front */ , 0]}
          position={isMobile ? [-1, -3.8, -2.2] : [-1.2, -4.25, -1.5] /* negative x moves left */}
        >
          {/* Center recenters geometry so rotations happen around the visual center */}
          <Center>
            <primitive
              object={computer.scene}
              scale={isMobile ? 0.35 : 0.3}
              rotation={[0, 0, 0]}
            />
          </Center>
        </group>
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringCanvas, setIsHoveringCanvas] = useState(false);
  const controlsRef = useRef();
  const orbitTarget = isMobile ? [-1, -3.8, -2.2] : [-1.2, -4.25, -1.5];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  if (!initialized) {
    return <div></div>;
  }


  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}
      onMouseEnter={() => setIsHoveringCanvas(true)}
      onMouseLeave={() => setIsHoveringCanvas(false)}
    >
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
        style={{ pointerEvents: isHoveringCanvas ? "auto" : "none" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            minDistance={15}
            maxDistance={25}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            target={orbitTarget}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;