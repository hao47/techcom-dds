import React from "react";
import MotionBoldp, { MotionRegularp} from "./Component/MotionComponent.jsx";

function Loading() {

    return (
        <div className="bg-black w-full h-screen flex items-end justify-center">


            <div className="w-full h-[55%] grid grid-cols-1 mb-8 content-between ">


                <MotionBoldp title={'UNVEILING INDONESIA'}/>
                <MotionRegularp title={""}/>



            </div>


        </div>
    );
}

export default Loading;