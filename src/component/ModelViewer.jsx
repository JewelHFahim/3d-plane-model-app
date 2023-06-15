import { OrbitControls } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ModelViewer() {
  const gltf = useLoader(GLTFLoader, './models/plane.glb');
  const modelRef = useRef();
  const swingSpeed = 0.1; // Adjust the swing speed as desired

  let isSwingingRight = true;

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Update the rotation of the model for swinging animation
      if (isSwingingRight) {
        modelRef.current.rotation.z += swingSpeed * delta;
        if (modelRef.current.rotation.z >= Math.PI / 8) {
          isSwingingRight = false;
        }
      } else {
        modelRef.current.rotation.z -= swingSpeed * delta;
        if (modelRef.current.rotation.z <= -Math.PI / 8) {
          isSwingingRight = true;
        }
      }
    }
  });

  return (
    <mesh ref={modelRef} castShadow receiveShadow>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas className='test'>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <ModelViewer />
    </Canvas>
  );
}

export default App;
