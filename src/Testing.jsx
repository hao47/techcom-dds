import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Testing() {

    useLayoutEffect(() => {


        gsap.set(".photo:not(:first-child)", {opacity:0, scale:0.5})

        const animation = gsap.to(".photo:not(:first-child)", {
            opacity:1, scale:1, duration:1, stagger:1
        })




        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger:".gallery",
                start:"top top",
                end:"bottom bottom",
                pin:".right",
                animation: animation,
                scrub:true,
                markers:true
            })

        }, this);
        return () => ctx.revert();
    });

    return (
        <>


            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
        </>
    );
}
