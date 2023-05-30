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

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/works' exact element={<Works />} />
          <Route path='/posts' exact element={<Posts />} />
          <Route path='/twolinkplanar' exact element={<Posts />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
