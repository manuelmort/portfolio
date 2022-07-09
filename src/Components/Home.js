import React from "react";
import { AiOutlineGithub
        ,AiOutlineInstagram
        ,AiOutlineYoutube
       } from "react-icons/ai"
import { GiTechnoHeart } from "react-icons/gi"


export default function Home() {
  return (
    <div class="">
        <div>
            <div class="container mx-auto text-center rounded-full" >
                <p class="text-zinc-300 mx-auto bg-slate-800 bg-opacity-80 rounded-md p-3" style={{maxWidth:"600px"}}>
                    Hi, I'm a student working with web development and robotics
                </p>
            </div>
        
            <div class="mx-auto grid grid-rows-1 grid-flow-col mt-6 " style={{maxWidth:"500px"}}>
                <div class="text-center text-zinc-300">
                    <p class="text-3xl font-semibold">Manuel Morteo</p>
                    <p>Student/Developer/Designer</p>
                </div>
                <div>
                    <img class =" mx-auto w-24 h-24 rounded-full" src="./profilepic.png"></img>
                </div>
            </div>
            <div class="container mx-auto " style={{maxWidth:"600px"}}>
                <p class="text-zinc-300 underline">Work and School</p>
                <p class="text-zinc-300 text-center p-3">Manuel(Manny) is a student pursing a bachelors of science in computer engineering at Sacramento State University with a passion of building, automating and discovering how things work in our tech advancing world.
                </p>
                
            </div>
            <div className="text-center mx-auto">
                    <button class =" bg-teal-400 rounded-md text-zinc-800 p-2">My Portfolio</button>
            </div>
            <div class="container mx-auto " style={{maxWidth:"600px"}}>
                <p class="text-zinc-300 underline pb-3">Bio</p>
                <div class="pb-5">
                <p class="text-zinc-300">
                        <span class ="font-semibold">1998</span> 
                        <p class="">Born in Sacramento, CA</p>
                    </p>
                    <p class="text-zinc-300 pt-3">
                        <span class ="font-semibold">2021-Present</span> 
                        <p class="">Student Tech Services at Visions In Education</p>
                    </p>
                    <p class="text-zinc-300 pt-3">
                        <span class ="font-semibold">2018-2023</span> 
                        <p class="">B.S. Computer Engineering at California State University Sacramento</p>
                    </p>
                </div>
                



            </div>
            <div class="container mx-auto " style={{maxWidth:"600px"}}>
                <p class="flex text-zinc-300 underline">
                    What I love to do <span class="p-1  text-teal-400 bg-transparent"><GiTechnoHeart/>
                    </span></p>
                    
                <p class="text-zinc-300 p-3">Badminton, Exercising, Reading Novels and Playing Guitar</p>



            </div>
            <div class="container mx-auto " style={{maxWidth:"600px"}}>
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
                        <button href = "https://www.instagram.com/manuel.morteo" 
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
