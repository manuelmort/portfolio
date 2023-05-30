import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

export default class Posts extends React.Component {

    componentDidMount() {
   
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
    render() {
        return(
            <div class= "container mx-auto revealUp" style={{maxWidth:"700px"}}>
            <div class="text-xl font-semibold  text-zinc-300 lg:pb-5 revealUp">
            <p class = "text-zinc-300 underline mb-5 ">Blog</p>
                <div class="container mx-auto grid lg:grid-cols-2 gap-4 mb-20 ">
                    <div class="">
                        <Link to="https://medium.com/@manuelmort/inverse-kinematics-of-two-link-planar-arm-geometric-approach-5f3ffdfde16d">
                        <img class= "rounded-lg h-52 w-72 Inverse Kinematics of Two Link Planar Arm (Geometric Approach)" src="./twolinkplanar/twolinkplanarthumb.webp"/>
                        </Link>
                        <div class="mt-5">

                            <a href="https://medium.com/@manuelmort/inverse-kinematics-of-two-link-planar-arm-geometric-approach-5f3ffdfde16d" class=" hover:underline mt-10  text-sm">Inverse Kinematics of Two Link Planar Arm (Geometric Approach)</a>
                        </div>

                    </div>
              
                </div>
                <p class = "text-zinc-300 mb-5 underline ">Youtube Videos</p>
                <div class="container mx-auto grid lg:grid-cols-2 gap-4 ">
                    <div class="">
                        <iframe class="rounded-md mx-auto" src="https://www.youtube.com/embed/vcI766hefGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                        style={{minWidth:"350px", minHeight:"200px"}}></iframe>
                    </div>
                    <div class="">
                        <div>
                            <iframe class="rounded-md mx-auto" src="https://www.youtube.com/embed/Ovt-W3ZO9oU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                            style={{minWidth:"350px", minHeight:"200px"}}></iframe>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        )
    }
}