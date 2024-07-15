import { createRoot } from 'react-dom/client';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree  } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import ScifiDrone from "../3dObjects/Dron.glb"
function HomeBox() {
    const ref = useRef();
    const gltf = useGLTF(ScifiDrone);
    const CameraControl=()=>{

        const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(65, 53, 2); // Set the camera position
    camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene

    
  }, [camera]);

  return null;
    }
       const Helper =()=>{
        useFrame(()=>{
            ref.current.rotation.y += 0.008; 
        })
       }
    
  useEffect(() => {
    const container = document.getElementById('canvas-container');
    // camera.position.set(2, 2, 5); // Set the camera position
    // camera.lookAt(0, 0, 0);
    if (container) {
      createRoot(container).render(

        <Canvas>
         <Helper/>   

            
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} />
        <CameraControl/>
 
        <OrbitControls />
       <primitive object={gltf.scene} ref={ref} scale={[6, 6, 6]} />;
      </Canvas>
      );
    }
  }, [gltf]);

  return (
    <div className="homebox">
      <div className="homebox-internal">
        <div className="textHomeBox">
          <p className="headTextHome">Hello, I am Muhammad Ahsan Ali, </p>
          <p className="subTextHome">
            a Computer Science graduate from the Institute of Space Technology. 
            I have a keen interest in developing web and mobile applications and am passionate about Artificial
            Intelligence. My expertise includes dynamic UI development with React and Material-UI, efficient backend
            services with Node.js and Express.js, and cross-platform mobile development with React Native and Flutter.
          </p>
        </div>
        <div id="canvas-container" />
        <Canvas />
      </div>
    </div>
  );
}

export default HomeBox;
