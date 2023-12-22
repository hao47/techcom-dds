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

                    <div className={' w-full flex justify-between p-6 h-fit'}>

                        <p className={'font-montserrat font-bold italic text-4xl text-white'}>OBJECTIVE OF OURS</p>
                        <div className={'w-44 mr-20'}>
                            <hr />
                            <br/>
                            <hr/>
                            <br/>
                            <hr/>
                        </div>
                    </div>

                    <div className=" bg-black  flex">

                        <div className='w-[75%] h-screen  bg-sky-400 bg-custom-lagi flex items-center'>

                            <div className={'mx-20'}>
                                <h1 className={'font-bold text-4xl text-white'}>WHAT IS UNVEILING INDONESIA ?</h1>
                                <h1 className={'font-bold text-2xl text-white mt-5 pr-44'}>Introducing "Unveiling Indonesia" a distinguished website  proudly brought to you by DDS. Our primary objective is to facilitate a comprehensive understanding of Indonesian culture for both national and international audiences through  innovative and interactive web design.</h1>
                            </div>

                        </div>



                    </div>
                </div>

                <div className="panel bg-black ">

                    <div className={'w-full flex'}>
                        <div className={'w-[65%] h-screen bg-custom-lagi-bang bg-no-repeat bg-cover flex justify-end'} >
                            <div className={' w-[60%] '}>

                                <div className={'h-screen w-full bg-white bg-opacity-40'}>
                                    <div className={'w-full h-[28%]  flex justify-end items-end'}>
                                        <p className={'font-bold font-montserrat text-9xl '}>0</p>

                                    </div>
                                    <div className={'w-full h-[65%] flex justify-end items-center mt-20'}>
                                        <p className={'font-bold font-poppins  text-7xl '}>Preserving <br/>Heritage</p>

                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className={'w-[35%] h-screen'} >
                            {/*<div>*/}
                                <div className={'w-full h-[28%]  flex justify-start items-end pl-5 '}>
                                    <p className={'font-bold text-white font-montserrat text-9xl '}>1</p>

                                </div>
                                <div className={'w-[150%] h-[25%]  flex justify-start items-end    pl-20'}>
                                    <p className={'font-bold text-white font-montserrat text-2xl '}>
                                        The main goal of this competition is to preserve and showcase Indonesia's rich and diverse cultural heritage through creative and innovative web design. This will aid in maintaining the unique and valuable cultural identity of Indonesia.

                                    </p>

                                </div>
                                <div className={'w-full h-[40%]  flex justify-start items-start pl-5 mt-20 '}>
                                    <p className={'font-bold font-poppins  text-7xl text-white '}>Cultural</p>

                                </div>
                            {/*</div>*/}
                        </div>

                    </div>
                </div>
                <div className="panel  relative -z-50 flex ">


                    <div className={'bg-black h-screen w-1/2 absolute -z-50'}></div>
                    <div className={'bg-white h-screen w-1/2 absolute -z-50 top-0 right-0'}></div>

                    <div className={'w-full   flex justify-center  '}>

                        <div className={'w-[700px] mt-20 rounded-2xl h-[400px]  bg-custom-lagi flex justify-end'}>

                            <p className={'font-bold font-montserrat text-9xl text-white my-5 mx-5'}>0</p>

                        </div>

                        <div className={'w-fit mt-20 rounded-2xl     h-[400px] flex justify-start'}>
                            <p className={'font-bold font-montserrat  text-9xl  my-5 mx-5'}>2</p>

                        </div>



                    </div>


                </div>


                <div className="panel w-full  flex ">


                    {/*<div className={'bg-black h-screen w-1/2 absolute -z-50'}></div>*/}
                    <div className={'bg-white h-screen w-[75%]'}>

                        <div className={'h-[20%] w-full  flex justify-end items-end'}>

                            <p className={'font-bold font-montserrat italic  text-7xl mr-2'}>Educating the</p>

                        </div>
                        <div className={'h-[30%]  w-[70%]  flex justify-start items-center'}>

                            <p className={'font-bold font-montserrat italic  text-start  text-2xl '}>
                                Educating the Public: This competition aims to provide greater knowledge and understanding of Indonesian culture to the general public, both domestically and internationally. Therefore, web design will serve as an effective educational tool

                            </p>

                        </div>
                        <div className={'h-[50%] w-full flex justify-start items-center'}>
                            {/*mt-20  h-fit border-2 border-black flex items-start justify-center*/}

                            <div className={'w-fit h-fit border-2 border-black rounded-2xl ml-20 shadow-2xl'}>


                                {/*<div className={' mt-20   bg-custom-lagi rounded-2xl   shadow-2xl flex items-start justify-center'}>*/}

                                    <img src="/src/assets/images/gunung.png" className={'h-[350px w-[650px] rounded-2xl -translate-y-5 -translate-x-5 transition ease-in-out delay-150 duration-300 hover:-translate-y-0 hover:-translate-x-0'} alt=""/>

                                </div>

                        </div>

                    </div>

                    <div className={'bg-white h-screen w-[25%] '}>

                        <div className={'bg-custom-lagi-banga bg-no-repeat h-screen w-[250%]'}>
                            <div className={'h-[20%]   flex justify-start  items-end'}>

                                <p className={'font-bold font-montserrat italic  text-7xl mr-2 text-white'}>Public</p>

                            </div>

                        </div>

                    </div>


                </div>

                <div className="panel w-full flex justify-end items-center relative">
                    <div className={'h-[380px] w-[680px] z-50 top-0 right-0 left-96 relative bottom-0 bg-custom-lagiii rounded-2xl flex justify-end items-center'}>

                        <p className={'text-9xl font-montserrat text-white font-bold italic flex items-center '}>0</p>

                    </div>

                    <div className={'w-[80%] h-screen relative z-0 bg-custom-lagii flex justify-end'}>

                        <div className={'flex w-[70%] h-screen justify-start items-center'}>
                            <p className={'text-9xl font-montserrat font-bold italic flex items-center '}>3</p>
                            <div className={'h-[40%] pl-10 my-auto w-full '}>
                                <p className={'text-6xl text-white font-bold italic'}>Introducing Interactive <br/> Creativity</p>
                                <p className={'text-2xl mt-20 w-[70%] text-white font-bold italic'}>Educating the Public: This competition aims to provide greater knowledge and understanding of Indonesian culture to the general public, both domestically and internationally. Therefore, web design will serve as an effective educational tool</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}