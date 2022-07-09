import React from "react";
import Home from "./Components/Home";
import Works from "./Components/Works";
import Posts from "./Components/Posts";
import NavigationBar from "./Components/NavigationBar";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import {Routes, Route} from 'react-router-dom'
import Footer from "./Components/Footer";



const Model = () => {
  var gltf = useLoader(GLTFLoader, "./MannyObject.glb");


  return (
    <>
      <primitive object={gltf.scene} scale={1.2} />
    </>
  );
};

function App() {
  return (
    <div className="">
      <NavigationBar/>
      
      <div>
        <div>
        </div>
        <div class="lg:container  text-center  mx-auto" style={{ position: "relative",maxWidth: 500, height: 350 }}>
            <Canvas  
                camera={{fov:1.5,far:200,near:2,position: [50, 10, 50]}}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.7} />
                    <Model />
                    <OrbitControls autoRotate minPolarAngle={Math.PI / 2.6} maxPolarAngle={Math.PI / 2.6} />
                </Suspense> 
            </Canvas>
      </div>
      <Routes>
        <Route path ='/' exact element={<Home/>}/>
        <Route path ='home' exact element={<Home/>}/>
        <Route path ='/works' exact element={<Works/>}/>
        <Route path = '/posts' exact element={<Posts/>}/>

      </Routes>
    </div>
    <Footer/>
    
    
      
    </div>
  );
}

export default App;
