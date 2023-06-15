import { OrbitControls } from '@react-three/drei';
import React, { startTransition, useEffect } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function  ModelViewer() {
  const gltf = useLoader(GLTFLoader, './models/plane.glb');


  useEffect(() => {
    startTransition(() => {
      // Existing code within the useEffect callback
    });
  }, []);



  return (
    <Canvas className='test'>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {gltf && <primitive object={gltf.scene} />}
    </Canvas>
  );
}

export default ModelViewer;
