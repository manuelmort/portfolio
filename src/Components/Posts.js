import React from "react";

export default class Posts extends React.Component {
    render() {
        return(
            <div class= "container mx-auto" style={{maxWidth:"700px"}}>
            <div class="text-xl font-semibold underline text-zinc-300 lg:pb-5">
                <p class = "text-zinc-300 mb-5 ">Youtube Videos</p>
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