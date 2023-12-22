import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, {useEffect, useLayoutEffect, useRef} from "react";
import Footer from "../../../Component/Footer.jsx";

import makan from '/src/assets/Video/makan.gif'
import TextContentHorizontalFoto from "./Component/TextContentHorizontalFoto.jsx";
import TextContentHorizontal from "./Component/TextContentHorizontal.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {


    let Title1 = useRef(null)
    let Desc1 = useRef(null)
    let Title2 = useRef(null)

    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + slider.current.offsetWidth,
                    // markers: true
                }
            });
        }, component);
        return () => ctx.revert();
    });

    useEffect(() => {
        let tl = gsap.timeline()
        tl.fromTo(Title1, {y: -60}, {y: 0, duration: 0.7}).fromTo(Desc1, {opacity: 0}, {opacity: 1, duration: 0.7})


    }, [])

    return (
        <>
            <div className='w-full h-screen bg-[#191919] flex flex-row overflow-hidden max-[600px]:block '>
                <div className='w-[50%] flex justify-center items-center overflow-hidden  max-[600px]:hidden'>
                    <div className='w-1/2 overflow-hidden'>
                        <p ref={e => Title1 = e} className='font-montserrat mb-3 text-white text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-7xl'>
                            nice to meet you
                        </p>
                        <p ref={e => Desc1 = e} className='font-montserrat text-white w-full text-xs sm:text-xs md:text-sm lg:text-lg 2xl:text-xl'>
                            We are DDS, founders of Unveiling Indonesia. Our journey began when we (Daffa, Deka, Sinsin) 
                            united to to face a problem that occurs in
                            our beloved country Indonesia.
                        </p>
                    </div>
                </div>
                <div className='w-[50%] flex justify-center items-center overflow-hidden max-[600px]:mt-10 max-[600px]:w-full max-[600px]:px-7'>
                    <div className={'overflow-hidden'}>
                        <img src="/src/assets/images/canvas.png" 
                        className={'mt-28 overflow-hidden w-full max-[600px]:w-full max-[600px]:h-[270px] sm:h-[300px] lg:h-[450px] xl:h-[550px] 2xl:h-[670px] rounded-md'} 
                        alt="Canvas"/>
                    </div>
                </div>
                <div className='w-[50%]  justify-center items-center  max-[600px]:mt-20  hidden overflow-hidden max-[600px]:w-full  max-[600px]:flex'>
                    <div className='w-[75%] overflow-hidden '>
                        <p ref={e => Title1 = e} className='font-montserrat max-[600px]:text-2xl text-5xl mb-3 text-white'>
                            nice to meet you
                        </p>
                        <p ref={e => Desc1 = e} className='font-montserrat  max-[600px]:text-sm  text-1xl text-white w-3/4'>
                            We are DDS, founders of Unveiling Indonesia. Our journey began when we (Daffa, Deka, Sinsin)
                            united to to face a problem that occurs in
                            our beloved country Indonesia.
                        </p>
                    </div>
                </div>
            </div>

            <div className="App overflow-hidden" ref={component}>
                <div ref={slider} className="containerss bg=[#191919] overflow-hidden">
                    <div className="panel bg-[#191919] flex w-full max-[600px]:block">
                        <div className='w-[50%] items-center flex justify-center max-[600px]:items-center max-[600px]:h-max max-[600px]:w-full max-[600px]:mt-20'>
                            <img src="/src/assets/images/grayscaleImage.png"
                            className="h-[200px] max-[600px]:h-[300px] sm:h-[300px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] rounded-md"
                            alt=""/>
                        </div>
                        <div className='w-[50%] h-screen flex justify-start items-center max-[600px]:w-full  max-[600px]:h-1/2'>
                            <TextContentHorizontalFoto 
                            title={'THE PROBLEM'} 
                            subtitle={'the cultural fade of Indonesia'}
                            description={'Technology in Indonesia is developing every day, and globalization cannot be avoided. Without realizing it, the younger generation in Indonesia is starting to forget the traditional culture that define our Nation. This cannot persist unattended,our cultural legacy must be preserved, we need new heroes.'}/>
                        </div>
                    </div>
                    <div className="panel bg-[#191919] overflow-hidden">
                        <div className={'flex w-full max-[600px]:block'}>
                            <div className='w-[50%] h-[95vh] flex justify-end items-center  max-[600px]:hidden'>
                                <div className='w-[70%] flex justify-end  items-center'>
                                    <div className='w-[100%]'>
                                        <p className='font-montserrat  mb-6 max-[600px]:ml-0 text-end text-white max-[600px]:text-center text-2xl lg:text-3xl'>
                                            THE HEROES
                                        </p>
                                        <p className='font-montserrat mb-3 text-white text-end max-[600px]:text-center text-2xl lg:text-3xl'>
                                            programmers,<br/>suit up
                                        </p>
                                        <p className='font-montserrat font-extralight text-white text-end max-[600px]:text-center max-[600px]:px-10 max-[600px]:text-sm lg:text-lg xl:text-xl'>
                                            When your back is against the wall, the only way forward is to roll up your
                                            sleeves and get to work. Our mission is clear – a dedicated team determined
                                            to revive and preserve traditional Indonesian culture. As we launch this
                                            website, we invite you to join us in this final chapter, where the vibrant
                                            threads of our heritage weave a story that echoes through generations.
                                            Until then, see you at the final.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[50%] items-center flex justify-center max-[600px]:items-center max-[600px]:h-max max-[600px]:w-full max-[600px]:mt-20'>
                                <img src="/src/assets/images/studiophoto.png" 
                                className={'h-[200px] max-[600px]:h-[300px] sm:h-[300px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] rounded-md'} 
                                alt=""/>
                            </div>
                            <div className='w-[50%] mt-2 h-screen hidden  justify-center items-center  max-[600px]:flex max-[600px]:w-full  max-[600px]:h-1/2'>
                                <div className='w-fit  '>
                                    <p className='font-montserrat  mb-6 text-center text-white max-[600px]:text-center text-2xl lg:text-3xl '>
                                        THE HEROES
                                    </p>
                                    <p className='font-montserrat mb-3 text-white text-start max-[600px]:text-center text-2xl lg:text-3xl'>
                                        programmers, suit up
                                    </p>
                                    <p className='font-montserrat font-thin text-1xl text-white text-center  max-[600px]:px-20 line-clamp-6 max-[600px]:text-sm lg:text-lg xl:text-xl'>
                                        When your back is against the wall, the only way forward is to roll up your
                                        sleeves and get to work. Our mission is clear, a dedicated team determined
                                        to revive and preserve traditional Indonesian culture. As we launch this
                                        website, we invite you to join us in this final chapter, where the vibrant
                                        threads of our heritage weave a story that echoes through generations.
                                        Until then, see you at the final.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className={'w-full h-[5vh] flex justify-center items-center cursor-pointer max-[600px]:items-end'} onClick={() => document.body.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})}>
                            <img src="/src/assets/images/panah_bawah.png" 
                            className={'animate-bounce'} 
                            alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-screen bg-[#181818] flex justify-center items-center">
                <div>
                    <p className={'text-white text-center font-montserrat text-2xl max-[600px]:text-sm'}>THE FINAL</p>
                    <p className={'text-white text-center font-montserrat text-4xl max-[600px]:text-sm mt-10'}>Unveiling Indonesia is completed</p>
                    <p className={' mx-auto text-white text-center font-montserrat mt-10 max-[600px]:text-sm max-[600px]:px-7 max-[600px]:w-full w-[30%]'}>After weeks of work, finally the Unveiling Indonesia website has been completed. We hope that this website can convey the importance and value of Indonesia's traditional culture, and with the completion of the Unveiling Indonesia project, DDS is officially dismissed.</p>
                    <p className={'text-white text-center text-4xl mt-32 max-[600px]:text-md font-dela'}>fin</p>
                </div>
            </div>
        </>
    );
}
