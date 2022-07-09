import React from "react";

export default class Works extends React.Component {
    
    render() {
        return(
            <div class= "container mx-auto p-5 lg:p-0" style={{maxWidth:"700px"}}>
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
                    <div>
                        <div class="">
                           <p class="bg-teal-800 bg-opacity-10 text-zinc-300 rounded-lg text-center mx-auto p-5" 
                                style={{minHeight:"150px",maxWidth:"300px"}}>
                                Coming Soon 
                              
                            </p>
                        </div>
                        <p class="text-zinc-300 text-center text-lg p-3">ECS Joint Council Website</p>
                        <p class="text-zinc-300 mx-auto text-center" >
                            A brochure website for the ECS joint Council that links
                        </p>
                    </div>
                </div>
            </div>
        )
    } 
}