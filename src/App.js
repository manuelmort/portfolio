import React from "react";
import Home from "./Components/Home";
import Works from "./Components/Works";
import Posts from "./Components/Posts";
import NavigationBar from "./Components/NavigationBar";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";

const Model = () => {
  var gltf = useLoader(GLTFLoader, "./MannyObject.glb");

  gltf.scene.position.y = -0.2;//jesus christ this moves the object's position within <Canvas/> 

  return (
    <>
      <primitive object={gltf.scene} scale={0.5} />
    </>
  );
};

function App() {
  return (
    <div className="">
      <NavigationBar />

      <div>
        <div>
        </div>
        <div className="lg:container border-4 border-teal-200/90  mb-10 rounded-xl text-center mx-auto" style={{ position: "relative", maxWidth: 500, height: 400 }}>
          <Canvas 
            camera={{ fov:0.6, far: 200, near: 0.1, position: [30, 50, 30] }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.7} />
              <Model />
              <OrbitControls autoRotate minPolarAngle={Math.PI / 2.6} maxPolarAngle={Math.PI / 2.6} />
            </Suspense>
          </Canvas>
        </div>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/works' exact element={<Works />} />
          <Route path='/posts' exact element={<Posts />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
