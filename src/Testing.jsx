import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Testing = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, });

        tl.to(textRef.current, {
            duration: 0.5,
            rotate: 5,
            y: -10,
            x:100,
            opacity: 0.8,
            ease: 'power3.inOut',
        })
            .to(textRef.current, {
                duration: 0.5,
                rotate: -5,
                y: 10,
                x:200,
                opacity: 1,
                ease: 'power3.inOut',
            })
            .to(textRef.current, {
                duration: 0.5,
                rotate: 0,
                y: 0,

                x:300,
                opacity: 0.8,
                ease: 'power3.inOut',
            });
    }, []);

    return (
        <h1 ref={textRef} className={'inline-block text-white font-montserrat font-bold text-6xl'}>
            Scrapbook Animation
        </h1>
    );
}

export default Testing;
