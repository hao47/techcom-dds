
import React from "react";
import  videoBG from './bhineka.mp4';
function Intro() {

    return (

        <div className="w-full h-[10vh]">

            <video className="w-full object-contain" src={videoBG} autoPlay loop/>
        </div>
    );
}

export default Intro;