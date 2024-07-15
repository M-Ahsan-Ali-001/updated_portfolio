import { createRoot } from "react-dom/client";
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Earth from "../3dObjects/uploads_files_2989156_Moon.glb";

export default function GlobeSect() {
  const gltf = useGLTF(Earth);
  const ref = useRef();

  const CamerControl = () => {
    const { camera } = useThree();
    useEffect(() => {
      camera.position.set(45, 1, 1);
      camera.lookAt(0, 0, 0);
    }, [camera]);
    return null;
  };

  const Helper = () => {
    useFrame(() => {
      ref.current.rotation.y += 0.01;
    });
    return null;
  };

  useEffect(() => {
    const holdEarthCanvas = document.getElementById("canvas-earth");
    if (holdEarthCanvas) {
      createRoot(holdEarthCanvas).render(
        <Canvas>
          <Helper />
          <ambientLight intensity={0.9} />
          <pointLight position={[10, 10, 10]} />
          <CamerControl />
          <OrbitControls />
          <hemisphereLight color={"0xffffbb"}/>
          <primitive object={gltf.scene} ref={ref} scale={[5, 5, 5]} />
        </Canvas>
      );
    }
  }, [gltf]);

  return (
    <div className="Globe">
      <div id="canvas-earth"></div>
      <div className="textGlobe">
        Are you looking for a reliable developer to create a stunning website or
        mobile application? I'm Muhammad Ahsan Ali, a Computer Science graduate
        and experienced developer, ready to bring your ideas to life. Let's work
        together to build something amazing!
      </div>
    </div>
  );
}
