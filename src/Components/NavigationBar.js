import React from "react";
import "./Navbar.css"
export default class NavigationBar extends React.Component {

    handleClick() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
        //I've also included this in index.htmlfile
        // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    }
    render() {
        return(
            <div class="mx-auto pt-5 pb-10 ">

            <div class="topnav text-white text-lg text-center  mx-auto " id="myTopnav" style={{maxWidth:"700px"}}>
                <a href="/home" class="active hover:underline-offset-2 mr-52">Manuel Morteo</a>
                <a href="/works" class=" hover:bg-teal-400/30 hover:bg-opacity-30 rounded-md hover:text-pink-200  hover:underline hover:underline-offset-8 p-5">Works</a>
                <a href="/posts" 
                    class="hover:bg-teal-400  hover:bg-opacity-30 rounded-md hover:text-pink-200  hover:underline hover:underline-offset-8 p-5">
                        Posts
                </a>
                <a href="https://github.com/manuelmort" class="hover:bg-teal-400 hover:bg-opacity-30 rounded-md hover:text-pink-300 p-5 hover:underline hover:underline-offset-8">Github</a>
                <a href="javascript:void(0);" class="icon" onClick={this.handleClick}>
                    <i class="fa fa-bars"></i>
            </a>
            </div>
            </div>
        
        )

    }
}