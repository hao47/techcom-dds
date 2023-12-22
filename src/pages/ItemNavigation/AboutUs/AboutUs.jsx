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
                        <p ref={e => Title1 = e} className='font-montserrat text-5xl mb-3 text-white'>nice to meet
                            you</p>
                        <p ref={e => Desc1 = e} className='font-montserrat text-1xl text-white w-3/4'>We are DDS,
                            founders of Unveiling Indonesia. Our journey began when we (Daffa, Deka, Sinsin) united to
                            to face a problem that occurs in
                            our beloved country Indonesia.</p>
                    </div>
                </div>

                <div className='w-[50%] [#191919] flex justify-center items-end overflow-hidden  max-[600px]:mt-24 max-[600px]:w-full max-[600px]:px-7'>

                    <div className={'h-[69%] overflow-hidden'}>

                        <img src="/src/assets/images/board.png" className={'h-[79%] overflow-hidden'} alt="pessi"/>

                        <img src={makan} alt="GIF"
                             className={'w-[550px] max-[600px]:top-1 max-[600px]:right-0 max-[600px]:mt-24 max-[600px]:px-10 max-[600px]:rounded-lg  rounded-lg absolute top-[297px] right-[205px] overflow-hidden'}/>

                    </div>

                </div>

                <div className='w-[50%]  justify-center items-center  max-[600px]:mt-20  hidden overflow-hidden max-[600px]:w-full  max-[600px]:flex'>
                    <div className='w-[75%] overflow-hidden '>
                        <p ref={e => Title1 = e} className='font-montserrat max-[600px]:text-2xl text-5xl mb-3 text-white'>nice to meet
                            you</p>
                        <p ref={e => Desc1 = e} className='font-montserrat  max-[600px]:text-sm  text-1xl text-white w-3/4'>We are DDS,
                            founders of Unveiling Indonesia. Our journey began when we (Daffa, Deka, Sinsin) united to
                            to face a problem that occurs in
                            our beloved country Indonesia.</p>
                    </div>
                </div>

            </div>

            <div className="App overflow-hidden" ref={component}>

                <div ref={slider} className="containerss bg=[#191919] overflow-hidden">

                    <div className="panel bg-[#191919] flex  max-[600px]:block">
                        <div className='w-[50%] h-screen  max-[600px]:w-full  max-[600px]:h-1/2 '>

                            <div>
                                <img src="/src/assets/images/dayak.png"
                                     className={'grayscale hover:scale-110 delay-300 ease-in hover:grayscale-0 transition duration-300  h-80 absolute top-[150px] left-44 -rotate-12 border-8 border-b-[50px]'}
                                     alt=""/>
                                <img src="/src/assets/images/sunda.png"
                                     className={'grayscale hover:scale-110 delay-300 ease-in hover:grayscale-0 transition duration-300  h-80 absolute top-[190px] left-[500px] rotate-12 border-8 border-b-[50px]'}
                                     alt=""/>
                                <img src="/src/assets/images/ngaben.png"
                                     className={'grayscale hover:scale-110 delay-300 ease-in hover:grayscale-0 transition duration-300  h-80 absolute top-[150px] left-[320px] -rotate-2 border-8 border-b-[50px]'}
                                     alt=""/>


                                <img src="/src/assets/images/music.png"
                                     className={'grayscale hover:scale-110 delay-300 ease-in hover:grayscale-0 transition duration-300  h-[340px] absolute top-[460px] left-[205px] -rotate-6 border-8 border-b-[50px]'}
                                     alt=""/>
                                <img src="/src/assets/images/piring.png"
                                     className={'grayscale hover:scale-110 delay-300 ease-in hover:grayscale-0 transition duration-300  h-[340px] absolute top-[460px] left-[450px] rotate-6 border-8 border-b-[50px]'}
                                     alt=""/>

                            </div>

                        </div>

                        <div className='w-[50%] h-screen flex justify-start items-center  max-[600px]:w-full  max-[600px]:h-1/2 '>


                            <TextContentHorizontalFoto title={'THE PROBLEM'} subtitle={'the cultural fade of Indonesia'}
                                                       description={'Technology in Indonesia is developing every day, and globalization cannot be avoided. Without realizing it, the younger generation in Indonesia is starting to forget the traditional culture that define our Nation. This cannot persist unattended,our cultural legacy must be preserved, we need new heroes.'}/>


                        </div>

                    </div>
                    <div className="panel bg-[#191919] overflow-hidden">

                        <div className={'flex w-full max-[600px]:block'}>
                            <div className='w-[50%] h-[95vh] flex justify-end items-center  max-[600px]:hidden'>
                                <div className='w-[50%] flex justify-end  items-center'>
                                    <div className='w-[100%]'>
                                        <p className='font-montserrat text-2xl mr-7 mb-5 text-end text-white '>THE
                                            HEROES</p>
                                        <p className='font-montserrat text-4xl mb-3 text-white text-end'>programmers,<br/>
                                            suit up</p>

                                        <p className='font-montserrat font-thin text-1xl mt-3 text-white text-end'>When
                                            your back is against the wall, the only way forward is to roll up your
                                            sleeves and get to work. Our mission is clear – a dedicated team determined
                                            to revive and preserve traditional Indonesian culture. As we launch this
                                            website, we invite you to join us in this final chapter, where the vibrant
                                            threads of our heritage weave a story that echoes through generations.
                                            Until then, see you at the final.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='w-[50%] h-[95vh] flex justify-center items-end  max-[600px]:items-center max-[600px]:mt-20 max-[600px]:h-1/2 max-[600px]:w-full'>
                                <img src="/src/assets/images/founder.jpg" className={'h-[700px] max-[600px]:h-[300px] mb-4'} alt=""/>
                            </div>


                            <div className='w-[50%] h-[95vh] hidden  justify-center items-center  max-[600px]:flex max-[600px]:h-1/2    max-[600px]:w-full'>
                                {/*<div className='w-[50%] flex justify-end  items-center'>*/}
                                    <div className='w-fit'>
                                        <p className='font-montserrat text-2xl mr-7 mb-5  text-white max-[600px]:text-lg text-center mx-auto'>THE
                                            HEROES</p>
                                        <p className='font-montserrat text-4xl mb-3 text-white text-center max-[600px]:text-lg'>programmers,
                                            suit up</p>

                                        <p className='font-montserrat font-thin text-1xl mt-3 text-white text-center  max-[600px]:px-20 max-[600px]:text-lg line-clamp-6'>When
                                            your back is against the wall, the only way forward is to roll up your
                                            sleeves and get to work. Our mission is clear – a dedicated team determined
                                            to revive and preserve traditional Indonesian culture. As we launch this
                                            website, we invite you to join us in this final chapter, where the vibrant
                                            threads of our heritage weave a story that echoes through generations.
                                            Until then, see you at the final.</p>

                                    </div>
                                {/*</div>*/}
                            </div>

                        </div>

                        <div className={'w-full h-[5vh] flex justify-center items-center cursor-pointer'} onClick={() =>// Menggulir ke elemen paling bawah dengan efek smooth
                            document.body.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})}>


                            <img src="/src/assets/images/panah_bawah.png" className={'animate-bounce'} alt=""/>
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
