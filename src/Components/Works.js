import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
export default class Works extends React.Component {
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
    
    render() {
        return(
            <div class= "container mx-auto p-5 lg:p-0 revealUp" style={{maxWidth:"700px"}}>
                <p class="text-xl font-semibold underline text-zinc-300 pb-5">Works</p>
                <div class="container mx-auto grid lg:grid-cols-2 ga-4">
                    <div class = "container mx-auto">
                        <a target="_blank" rel="noreferrer" href="https://www.cyberdyne-vespa.org">
                            <div>
                                <img alt="vespa logo" class=" mx-auto rounded-lg" src="./csusvespa.png" style={{minHeight:"160px",maxWidth:"300px"}}/>
                            </div>
                            <p class="text-zinc-300 text-center text-lg p-3">CyberDyne Vespa</p>
                            <p class="text-zinc-300 text-center mx-auto" style={{maxWidth:"300px"}}>A brochure website featuring a ECS discord club that unites all 
                                engineering and computer science students at Sacramento State</p>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" rel="noreferrer"  href="http://hidefromteamo.herokuapp.com/">
                            <div>
                                <img class="mx-auto rounded-lg" alt="hidefromteamo app" src="./tftSite.png" style={{maxHeight:"160px", minWidth:"300px",maxWidth:"300px"}}/>
                            </div>
                            <p class="text-zinc-300  text-center text-lg p-3">TFT Rank LeaderBoard</p>
                            <p class="text-zinc-300 mx-auto text-center" style={{maxWidth:"300px"}}>Displays rank of a group of people 
                            and orders the leaderboard by rank</p>
                        </a>
                    </div>
                    <div class="mt-5">
                        <a target="_blank" rel="noreferrer"  href="https://ecsjc.org">
                            <div>
                                <img class="mx-auto rounded-lg" alt="hidefromteamo app" src="./ECSJC.png" style={{maxHeight:"160px", minWidth:"300px",maxWidth:"300px"}}/>
                            </div>
                            <p class="text-zinc-300  text-center text-lg p-3">ECSJC</p>
                            <p class="text-zinc-300 mx-auto text-left" style={{maxWidth:"300px"}}>Sac State Computer and Engineering Joint Council Website</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    } 
}