import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);


let DiagramAnimation = () => {


    let diagraAnimation = useRef()
    let diagraAnimation1 = useRef()
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                pin: ".right",
                scrub: true,
                // markers: true
            })

        }, this);
        return () => ctx.revert();
    });

    useEffect(() => {

        let tl = gsap.timeline()

        tl.to(diagraAnimation,
            {
                y: -innerHeight,
                duration: 5,
                scrollTrigger: {
                    trigger: ".dd",
                    scrub: 2,
                    // markers: true,
                    start: "center center",
                    end: "center center",
                },
                onComplete: () => {
console.log(-innerHeight /2)
                }
            },
        )

        .to(diagraAnimation1,
            {
                y: -innerHeight /2.7,
                duration: 5,
                scrollTrigger: {
                    trigger: ".dd",
                    scrub: 2,
                    // markers: true,
                    start: "center center",
                    end: "center center",

                },
                onComplete: () => {
                    console.log(innerHeight)
                }
            }
        )

            // .from(diagraAnimation1,
            //     {
            //         y: -innerHeight,
            //         duration: 5,
            //         scrollTrigger: {
            //             trigger: ".dd1",
            //             scrub: 2,
            //             markers: true,
            //             start: "center center",
            //             end: "center center",
            //
            //         },
            //         onComplete: () => {
            //             console.log(innerHeight)
            //         }
            //     }
            // )

        gsap.to(".right",
            {
                x: 0,
                duration: 5,
                scrollTrigger: {
                    trigger: ".gallery",
                    scrub: 2,
                    // markers:true,
                    start: "top center",
                    end: "top 10%",
                }
            }
        )
    }, []);


    return (
        <div className="gallery flex max-[600px]:block   bg-[#D7D7D7]">

            <div
                className="right w-1/2 h-[100vh]  flex-col justify-between flex  items-center bg-black -translate-x-[100%] max-[600px]:w-full max-[600px]:h-[440px]">

                <div className={'text-white'}>
                    <img src="/src/assets/images/logo.png" className={'h-20'} alt=""/>

                </div>

                <div className={'w-fit group bg overflow-hidden h-96 '}>
                    <div ref={el => diagraAnimation = el}>

                        <div
                            className={'text-white font-poppins mx-52 mb-24 max-[600px]:w-full max-[600px]:mx-4  max-[600px]:hidden max-[600px]:my-4 flex-col  justify-start'}>
                            <p className={'font-bold'}>01</p>
                            <p className={'font-medium mt-3 '}>If there was a website for learning culture that was
                                interactive
                                and easy to use, would you be interested in visiting it?</p>
                        </div>

                        <div
                            className={'flex justify-evenly  max-[600px]:mx-10  max-[600px]:justify-between  items-center mt-10 mx-40'}>
                            <img src="/src/assets/images/diagram.png" className={'w-52'} alt=""/>

                            <div className={'text-white'}>
                                <ul className={'flex-col space-y-6'}>
                                    <li className={'flex font-poppins items-center'}>
                                        <div
                                            className={"w-9 h-9 text-[12px] mr-5 bg-[#B6BBC4] before:content-['54%'] before:opacity-0 group-hover:before:opacity-100 rounded-full flex justify-center items-center"}>

                                        </div>
                                        Very Interested
                                    </li>


                                    <li className={'flex font-poppins items-center'}>
                                        <div
                                            className={"w-9 h-9 text-[12px] mr-5 bg-[#535353] before:content-['44%'] before:opacity-0 group-hover:before:opacity-100 rounded-full flex justify-center items-center"}>

                                        </div>
                                        Very Interested
                                    </li>

                                    <li className={'flex font-poppins items-center'}>
                                        <div
                                            className={"w-9 h-9 text-[12px] mr-5 bg-[#202020] before:content-['2%'] before:opacity-0 group-hover:before:opacity-100 rounded-full flex justify-center items-center"}>

                                        </div>
                                        Very Interested
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>

                    <div ref={el => diagraAnimation1 = el}>

                        <div
                            className={'text-white font-poppins mx-52  max-[600px]:hidden max-[600px]:w-full max-[600px]:mx-4 max-[600px]:my-4 flex-col  justify-start'}>
                            <p className={'font-bold'}>02</p>
                            <p className={'font-medium mt-3 '}>If there was a website for learning culture that was
                                interactive
                                and easy to use, would you be interested in visiting it?</p>
                        </div>

                        <div
                            className={'flex justify-evenly  max-[600px]:mx-10  max-[600px]:justify-between  items-center mt-10 mx-40'}>
                            <img src="/src/assets/images/diagram.png" className={'w-52'} alt=""/>

                            <div className={'text-white'}>
                                <ul className={'flex-col space-y-6'}>
                                    <li className={'flex font-poppins items-center'}>
                                        <div
                                            className={"w-9 h-9 text-[12px] mr-5 bg-[#B6BBC4] before:content-['54%'] before:opacity-0 group-hover:before:opacity-100 rounded-full flex justify-center items-center"}>

                                        </div>
                                        Very Interested
                                    </li>


                                    <li className={'flex font-poppins items-center'}>
                                        <div
                                            className={"w-9 h-9 text-[12px] mr-5 bg-[#535353] before:content-['44%'] before:opacity-0 group-hover:before:opacity-100 rounded-full flex justify-center items-center"}>

                                        </div>
                                        Very Interested
                                    </li>

                                    <li className={'flex font-poppins items-center'}>
                                        <div
                                            className={"w-9 h-9 text-[12px] mr-5 bg-[#202020] before:content-['2%'] before:opacity-0 group-hover:before:opacity-100 rounded-full flex justify-center items-center"}>

                                        </div>
                                        Very Interested
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={'text-white'}>
                    <img src="/src/assets/images/logo.png" className={'h-20'} alt=""/>
                </div>
            </div>

            <div className="left w-1/2 max-[600px]:w-full bg">
                <div className="detailsWrapper m-auto w-[80%]">
                    <div className="details ">

                        <div className="text-black">
                            <p className={'font-montserrat font-bold italic text-2xl'}>01</p>
                            <p className={'font-montserrat font-bold italic text-2xl'}>If there was a website for
                                learning culture that was interactive and easy to use, would you be interested in
                                visiting it?</p>
                        </div>

                    </div>


                    <div className="details dd">

                        <div className="text-black">
                            <p className={'font-montserrat font-bold italic text-2xl'}>02</p>
                            <p className={'font-montserrat font-bold italic text-2xl'}>If there was a website for
                                learning culture that was interactive and easy to use, would you be interested in
                                visiting it?</p>
                        </div>

                    </div>

                    {/*<div className="details dd1">*/}

                    {/*    <div className="text-black">*/}
                    {/*        <p className={'font-montserrat font-bold italic text-2xl'}>03</p>*/}
                    {/*        <p className={'font-montserrat font-bold italic text-2xl'}>If there was a website for*/}
                    {/*            learning culture that was interactive and easy to use, would you be interested in*/}
                    {/*            visiting it?</p>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                    {/*<div className="details ">*/}

                    {/*    <div className="text-black">*/}
                    {/*        <p className={'font-montserrat font-bold italic text-2xl'}>04</p>*/}
                    {/*        <p className={'font-montserrat font-bold italic text-2xl'}>If there was a website for*/}
                    {/*            learning culture that was interactive and easy to use, would you be interested in*/}
                    {/*            visiting it?</p>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                </div>
            </div>


        </div>
    )
}


export default DiagramAnimation