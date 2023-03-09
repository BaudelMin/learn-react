// import { Video } from "react-video-stream";
import React, { useRef, useEffect } from "react";
import videojs from "video.js";
// const path = require('path')

function StreamVideo({ options }){
    const videoRef = useRef(null)
    const playerRef = useRef(null)
    window.HELP_IMPROVE_VIDEOJS = false;
    // const source_path = "source"
    // console.log('file path = ',source_path)
    useEffect(() => {
        const player = playerRef.current;
        if(!player){
            const videoElement = videoRef.current;
            if(!videoElement) return;
            playerRef.current = videojs(videoElement, options);
        };
        return () => {
            if(player){
                player.dispose();
                playerRef.current = null;
            }
        }
    },[])
    return (
        <div  className="w-320 h-240 bg-slate-200" data-vjs-player>
            <p>This is video stream</p>
            <video 
                id="my-video"
                class="video-js vjs-theme-city"
                controls="controls"
                preload="auto"
                width="640"
                height="520"
                data-setup="{}"
            >
                <source src="./files/video/nature.mp4" type="video/mp4"></source>
            </video>
        </div>
    )
}

export default StreamVideo
