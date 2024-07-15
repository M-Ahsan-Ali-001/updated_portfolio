import React, { useRef, useEffect, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import ScifiDrone from "../3dObjects/Dron.glb";

function HomeBox() {
  const ref = useRef();
  const gltf = useGLTF(ScifiDrone);
  const memoizedGltf = useMemo(() => gltf, [gltf]);

  const CameraControl = () => {
    const { camera } = useThree();

    useEffect(() => {
      camera.position.set(62, 60, 20); // Set the camera position
      camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene
    }, [camera]);

    return null;
  };

  const Helper = () => {
    useFrame(() => {
      ref.current.rotation.y += 0.008;
    });
    return null;
  };

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
        <div id="canvas-container">
          <Canvas>
            <Suspense fallback={null}>
              <Helper />
              <ambientLight intensity={0.9} />
              <pointLight position={[10, 10, 10]} />
              <CameraControl />
              <OrbitControls />
              <primitive object={gltf.scene} ref={ref} scale={[6, 6, 6]} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default HomeBox;
