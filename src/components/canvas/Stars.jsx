import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars
            radius={100} // Adjust the radius as needed
            depth={50} // Adjust the depth as needed
            count={500} // Reduce the number of stars for performance
            factor={5} // Adjust the factor for density
            saturation={0} // No color, just white
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
