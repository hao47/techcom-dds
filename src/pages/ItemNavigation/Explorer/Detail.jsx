import React, {useEffect, useRef} from "react";
import gsap  from "gsap";


function Detail() {

    let transisi = useRef()
    let transisi1 = useRef()


    useEffect(() => {

        // gsap.to(transisi.current,{opacity:0,duration:5})

        gsap.to(transisi.current,{x:-innerWidth,duration:5})
        gsap.to(transisi1.current,{x:innerWidth,duration:5})
    }, []);


    return (
        <div className={'w-full h-screen bg-amber-200 flex overflow-x-hidden'}>

            <div ref={transisi} className={'bg-black w-1/2 h-screen'}></div>
            <div ref={transisi1} className={'bg-black w-1/2 h-screen'}></div>

            {/*<div>*/}
            {/*    <p className={'text-6xl text-white font-bold italic '}>Detail</p>*/}
            {/*</div>*/}

        </div>
    )
}

export  default  Detail