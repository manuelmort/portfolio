import React from "react";

export default class Works extends React.Component {
    
    render() {
        return(
            <div class= "container mx-auto" style={{maxWidth:"700px"}}>
                <p class="text-xl font-semibold underline text-zinc-300 pb-5">Works</p>
                <div class="container mx-auto grid grid-cols-2 gap-4">
                    <div class = "container mx-auto">
                        <a target="_blank" href="https://www.cyberdyne-vespa.org">
                            <div>
                                <img class=" h-40 w-30 mx-auto rounded-lg" style={{minWidth:"300px",maxWidth:"300px"}} src="./vespaSite.png"/>
                            </div>
                            <p class="text-zinc-300 text-center text-lg p-3">CyberDyne Vespa</p>
                            <p class="text-zinc-300 text-center mx-auto" style={{maxWidth:"300px"}}>A brochure website featuring a ECS discord club that unites all 
                                engineering and computer science students</p>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="http://hidefromteamo.herokuapp.com/">
                            <div>
                                <img class="h-40 w-100 mx-auto rounded-lg"  style={{minWidth:"300px",maxWidth:"400px"}} src="./tftSite.png"/>
                            </div>
                            <p class="text-zinc-300  text-center text-lg p-3">TFT Rank LeaderBoard</p>
                            <p class="text-zinc-300 mx-auto text-center" style={{maxWidth:"300px"}}>Displays rank of a group of people 
                            and orders the leaderboard by rank</p>
                        </a>
                    </div>
                    <div>
                        <div class="">
                           <p class="bg-teal-800 bg-opacity-10 text-zinc-300 rounded-lg mx-auto p-5" 
                                style={{minHeight:"150px",maxWidth:"300px"}}>
                                Coming Soon 
                              
                            </p>
                        </div>
                        <p class="text-zinc-300  text-center text-lg p-3">ECS Joint Council Website</p>
                        <p class="text-zinc-300 mx-auto text-center" >
                            A brochure website for the ECS joint Council that links
                        </p>
                    </div>
                </div>
            </div>
        )
    } 
}