import React from "react"
import testimony from "./assets/review0.mp4";
export function Video()
{
    return ( <div className="video-container" style={{width:"100%", height:"100%"}} >
        <video className="video-itself" src={testimony} autoPlay loop controls ></video>
    </div>)
}