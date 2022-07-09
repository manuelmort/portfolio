import React from "react";

export default class NavigationBar extends React.Component {
    render() {
        return(
            <div class="container mx-auto">
            <nav class="flex justify-between mx-auto flex-wrap m-30 p-6" style={{maxWidth:"700px"}}>
                <div class="flex items-center  text-white">
                    <a  
                        href="/" class="font-semibold text-xl tracking-tight 
                        hover:underline underline-offset-4">
                        Manuel Morteo</a>
                </div>
                <div class="  lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <a href="/works" class="block mt-4 p-2 rounded-md lg:inline-block hover:text-pink-300 hover:bg-opacity-10 hover:bg-teal-300 lg:mt-0 text-white">
                            Works
                        </a>
                        <a href="/posts" class="block mt-4 p-2 rounded-md lg:inline-block hover:text-pink-300 hover:bg-opacity-10 hover:bg-teal-300 lg:mt-0 text-white">
                            Posts
                        </a>
                        <a target="_blank" href="https://github.com/manuelmort" 
                            class="block mt-4 p-2 rounded-md lg:inline-block hover:text-pink-300 hover:bg-opacity-10 hover:bg-teal-300 lg:mt-0 text-white">
                            Github 
                        </a>
                    </div>
                    
                </div>
                </nav> 
            </div>
        
        )

    }
}