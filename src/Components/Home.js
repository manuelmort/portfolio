import React from "react";
import { AiOutlineGithub
        ,AiOutlineInstagram
        ,AiOutlineYoutube
       } from "react-icons/ai"
import { GiTechnoHeart } from "react-icons/gi"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
    var gltf = useLoader(GLTFLoader, "./MannyObject.glb");
  
    gltf.scene.position.y = -0.2;//jesus christ this moves the object's position within <Canvas/> 
  
    return (
      <>
        <primitive object={gltf.scene} scale={0.5} />
      </>
    );
  };

export default class Home extends React.Component {
    componentDidMount() {
   


        //gsap is fucking amazing!
        gsap.registerPlugin(ScrollTrigger);
        //reveal
        gsap.utils.toArray(".revealUp").forEach(function (elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            end: "bottom 10%",
            markers: false,
            onEnter: function () {
            gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto"
                }
            );
            },
            onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            },
            onEnterBack: function () {
            gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0 },
                {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto"
                }
            );
            },
            onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            }
        });
        });

    }
    render(){
    return (
        <div class="">
            <div>
            <div className="lg:container   mb-10 rounded-xl text-center mx-auto" style={{ position: "relative", maxWidth: 500, height: 400 }}>
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
                <div class="container lg:mx-auto lg:text-center lg:rounded-full revealUp" >
                    <p class="text-zinc-300 mx-auto bg-slate-800 bg-opacity-80 text-center rounded-md p-3" style={{maxWidth:"600px"}}>
                        Hi, I'm a student working with Embedded Systems and Robotics
                    </p>
                </div>
            
                <div class="mx-auto grid grid-rows-1 grid-flow-col mt-6 revealUp" style={{maxWidth:"500px"}}>
                    <div class="text-center text-zinc-300">
                        <p class="text-3xl font-semibold">Manuel Morteo</p>
                        <p>Student/Crafter/Interstellar Advocate</p>
                    </div>
                    <div>
                        <img alt="Manuel Morteo" class =" mx-auto w-24 h-24 rounded-full" src="./profilepic.png"></img>
                    </div>
                </div>
                <div class="container lg:mx-auto p-5 lg:p-0 revealUp" style={{maxWidth:"600px"}} >
                    <p class="text-zinc-300 underline">Work and School</p>
                    <p class="text-zinc-300 text-left p-3">Manny is a student pursing a bachelors of science in computer engineering at Sacramento State University with a passion of building, automating and discovering how things work in our tech advancing world.
                    </p>
                    
                </div>
                <div className="text-center mx-auto ">
                        <button class =" bg-teal-400 rounded-md text-zinc-800 p-2">My Portfolio</button>
                </div>
                <div class="container mx-auto " style={{maxWidth:"600px"}}>
                    <p class="text-zinc-300 underline pb-3 p-5 lg:p-0">Bio</p>
                    <div class="pb-5 p-5 lg:p-0">
                    <p class="text-zinc-300">
                            <span class ="font-semibold">1998</span> 
                            <p class="">Born in Sacramento, CA</p>
                        </p>
                        <p class="text-zinc-300 pt-3">
                            <span class ="font-semibold">2021 - Present</span> 
                            <p class="">Student Tech Services at Visions In Education</p>
                        </p>
                        <p class="text-zinc-300 pt-3">
                            <span class ="font-semibold">Summer 2023</span> 
                            <p class="">Intern at Ebara Technologies</p>
                        </p>
                        <p class="text-zinc-300 pt-3">
                            <span class ="font-semibold">2019- Spring 2024</span> 
                            <p class="">B.S. Computer Engineering at California State University Sacramento</p>
                        </p>
                    </div>
                    



                </div>
                <div class="container mx-auto p-5 mt-10 lg:p-0 " style={{maxWidth:"600px"}}>
                    <p class="flex text-zinc-300 underline">
                        What I love to do <span class="p-1  text-teal-400 bg-transparent"><GiTechnoHeart/>
                        </span></p>
                        
                    <p class="text-zinc-300 p-3">Badminton, Exercising, Reading Novels and Playing Guitar</p>



                </div>
                <div class="container mx-auto p-5 lg:p-0  " style={{maxWidth:"600px"}}>
                    <p class="text-zinc-300 underline">On the web</p>
                    <ul class="list-none ml-3 m-3">

                        <li class=" text-pink-300 ">
                            <button href = "https://github.com/manuelmort" 
                            class="flex hover:bg-teal-400 hover:bg-opacity-30 hover:text-pink-300 rounded-md p-1">
                                <span class="p-1  text-zing-300 bg-transparent">
                                    <AiOutlineGithub class="bg-transparent"/>
                                </span>@manuelmort
                            </button>
                        </li>
                        <li class=" text-pink-300 ">
                            <button href = "https://www.instagram.com/manuel.morteo" 
                            class="flex hover:bg-teal-400 hover:bg-opacity-30 hover:text-pink-300 rounded-md p-1">
                                <span class="p-1  text-zing-300 bg-transparent">
                                    <AiOutlineInstagram class="bg-transparent"/>
                                </span>@manuel.morteo
                            </button>
                        </li>
                        <li class=" text-pink-300 ">
                            <button href = "https://www.instagram.com/manuel.morteo" rel="noreferrer"
                            class="flex hover:bg-teal-400 hover:bg-opacity-30 hover:text-pink-300 rounded-md p-1">
                                <span class="p-1  text-zing-300 bg-transparent">
                                    <AiOutlineYoutube class="bg-transparent"/>
                                </span>@Bluerare
                            </button>
                        </li>
                        

                    </ul>



                </div>
            </div>
            
        </div>
        );
    }
}
