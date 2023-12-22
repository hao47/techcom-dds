import React, {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import TextContentHorizontalFoto from "../../AboutUs/Component/TextContentHorizontalFoto.jsx";

gsap.registerPlugin(ScrollTrigger)


export default function TimeLineAnimation() {

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
                    scrub: 2,
                    // snap: 1 / (panels.length - 1),
                    end: () => "+=" + slider.current.offsetWidth,
                    // markers: true
                }
            });
        }, component);
        return () => ctx.revert();
    });
    return (
        <div className="App overflow-hidden" ref={component}>
            <div ref={slider} className="containerss bg=[#191919] overflow-hidden">

                <div className={'panel'}>
                    <div className={' w-full p-6 h-fit'}>
                        <p className={'font-montserrat font-bold italic text-white text-lg sm:text-xl lg:text-2xl 2xl:text-4xl'}>
                            OBJECTIVE OF OURS
                        </p>
                    </div>
                    <div className="bg-black flex">
                        <div className='mr-28 h-screen bg-custom-lagi flex items-center'>
                            <div className={'ml-10'}>
                                <h1 className={'font-bold text-white text-lg sm:text-xl lg:text-2xl 2xl:text-4xl'}>WHAT IS UNVEILING INDONESIA ?</h1>
                                <h1 className={'font-bold text-white mt-5 pr-44 text-lg lg:text-xl 2xl:text-2xl'}>Introducing "Unveiling Indonesia" a distinguished website  proudly brought to you by DDS. Our primary objective is to facilitate a comprehensive understanding of Indonesian culture for both national and international audiences through  innovative and interactive web design.</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel bg-black ">
                    <div className={'w-full flex'}>
                        <div className={'w-[100%] h-screen bg-custom-lagi-bang bg-no-repeat bg-cover flex justify-end'} >
                            <div className={'w-[60%]'}>
                                <div className={'h-screen w-full bg-white bg-opacity-40'}>
                                    <div className={'w-full h-[28%] flex justify-end items-end'}>
                                        <p className={'font-bold font-montserrat text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'}>0</p>
                                    </div>
                                    <div className={'w-full h-[65%] flex justify-end items-end'}>
                                        <p className={'font-bold font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'}>Preserving <br/>Heritage</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'w-[35%] h-screen'} >
                                <div className={'w-full h-[28%]  flex justify-start items-end pl-5 '}>
                                    <p className={'font-bold text-white font-montserrat text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'}>1</p>
                                </div>
                                <div className={'w-[170%] h-[25%]  flex justify-start items-end pl-20'}>
                                    <p className={'font-bold text-white font-montserrat text-1xl lg:text-2xl 2xl:text-3xl'}>
                                        The main goal of this competition is to preserve and showcase Indonesia's rich and diverse cultural heritage through creative and innovative web design. This will aid in maintaining the unique and valuable cultural identity of Indonesia.
                                    </p>
                                </div>
                                <div className={'w-full h-[40%] flex items-end pb-[2rem] sm:pb-[2rem] md:pb-[2.2rem] lg:pb-[2.8rem] xl:pb-[3.4rem] 2xl:pb-[4rem]'}>
                                    <p className={'font-bold font-poppins text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'}>Cultural</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="panel  relative -z-50 flex ">
                    <div className={'bg-black h-screen w-1/2 absolute -z-50'}></div>
                    <div className={'bg-white h-screen w-1/2 absolute -z-50 top-0 right-0'}></div>
                    <div className={'w-full   flex justify-center  '}>
                        <div className={'w-[700px] mt-20 rounded-2xl h-[400px]  bg-custom-lagi flex justify-end'}>
                            <p className={'font-bold font-montserrat text-white my-5 mx-5 text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'}>0</p>
                        </div>
                        <div className={'w-fit mt-20 rounded-2xl h-[400px] flex justify-start'}>
                            <p className={'font-bold font-montserrat my-5 mx-5 text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'}>2</p>
                        </div>
                    </div>
                </div>

                <div className="panel w-full  flex ">
                    <div className={'bg-white h-screen w-[75%]'}>
                        <div className={'h-[20%] w-full  flex justify-end items-end'}>
                            <p className={'font-bold font-montserrat italic mr-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'}>Educating the</p>
                        </div>
                        <div className={'h-[30%]  w-[70%]  flex justify-start items-center'}>

                            <p className={'font-bold font-montserrat italic text-start text-1xl lg:text-2xl 2xl:text-3xl'}>
                                Educating the Public: This competition aims to provide greater knowledge and understanding of Indonesian culture to the general public, both domestically and internationally. Therefore, web design will serve as an effective educational tool
                            </p>
                        </div>
                        <div className={'h-[50%] w-full flex justify-start items-center'}>
                            <div className={'w-fit h-fit border-2 border-black rounded-2xl ml-20 shadow-2xl'}>
                                    <img src="/src/assets/images/gunung.png" className={'h-[350px w-[650px] rounded-2xl -translate-y-5 -translate-x-5 transition ease-in-out delay-150 duration-300 hover:-translate-y-0 hover:-translate-x-0'} alt=""/>
                                </div>
                        </div>
                    </div>
                    <div className={'bg-white h-screen w-max'}>
                        <div className={'bg-custom-lagi-banga bg-no-repeat h-screen w-[500%]'}>
                            <div className={'h-[20%] flex justify-start  items-end'}>
                                <p className={'font-bold font-montserrat italic mr-2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'}>Public</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel w-full flex justify-end items-center">
                    <div className={'h-[300px] z-10 top-0 right-0 left-52 bottom-0 relative bg-custom-lagiii rounded-2xl flex justify-end items-center pl-[20rem] sm:h-[380px] md:pl-[23rem] xl:pl-[25rem] 2xl:pl-[30rem]'}>
                        <p className={'font-montserrat text-white font-bold italic flex items-center text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl pr-3'}>0</p>
                    </div>
                    <div className={'w-max h-screen bg-custom-lagii flex'}>
                        <div className={'flex ml-[15rem] w-100% h-screen justify-start items-center'}>
                            <p className={'font-montserrat font-bold italic flex text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'}>3</p>
                            <div className={' h-[40%] w-[100%] '}>
                                <p className={'text-white font-bold italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'}>Introducing Interactive <br/> Creativity</p>
                                <p className={'w-[80%] mt-10 text-white font-bold italic text-1xl lg:text-2xl 2xl:text-3xl'}>Educating the Public: This competition aims to provide greater knowledge and understanding of Indonesian culture to the general public, both domestically and internationally. Therefore, web design will serve as an effective educational tool</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}