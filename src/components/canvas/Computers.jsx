/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState, useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';
import { motion } from "framer-motion";


export const Computers = ({ isMobile }) => {
  const computer = useGLTF('desktop_pc/scene.gltf')
  const meshRef = useRef();
  const [rotationProgress, setRotationProgress] = useState(0);

  // Define the rotation duration in milliseconds (2 seconds)
  const rotationDuration = 5000;

  // Custom rotation update function
  const updateRotation = () => {
    if (rotationProgress < 1) {
      // Calculate the rotation angle based on an ease-out easing function
      const angle = easeOutQuad(rotationProgress) * Math.PI * 2 * 0.02; // Adjust the multiplier for slower rotation
      // meshRef.current.rotation.x = angle;
      meshRef.current.rotation.y = angle;

      // Increment the rotation progress
      setRotationProgress((prevProgress) => prevProgress + (16 / rotationDuration)); // 16ms is roughly 1 frame
    }
  };

  // Ease-out easing function
  const easeOutQuad = (t) => t * (2 - t);

  // Use useFrame to update the rotation
  useFrame(() => {
    updateRotation();
  });

  useEffect(() => {
    // Stop rotation after the specified duration
    const rotationTimeout = setTimeout(() => {
      setRotationProgress(1); // Ensure the rotation stops at its final state
    }, rotationDuration);

    return () => {
      clearTimeout(rotationTimeout);
    };
  }, []);

  return (
    <mesh ref={meshRef}>
      <hemisphereLight
       intensity={2.5}
       groundColor="black"/>
      <pointLight intensity={1}/>
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
       position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.25]}
       rotation={[-0.01, -0.28, -0.1]}
       scale={isMobile ? 0.7 : 0.75}
       />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
      console.log('yelp')
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas frameLoop="demand" shadows camera={{position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>

      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas;
