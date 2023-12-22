import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {gsap} from "gsap";
import * as url from "url";
import Footer from "../../../Component/Footer.jsx";
import DiagramAnimation from "./Component/DiagramAnimation.jsx";
import {Link} from "react-router-dom";
import TimeLineAnimation from "./Component/TimeLineAnimation.jsx";
import BackgroundChanger from "./Component/BackgroundChanger.jsx";

gsap.registerPlugin(ScrollTrigger);

function Home() {

    let bg = useRef()
    let animatedElementRef = useRef();
    let titleUnveling = useRef();
    let titlePresent = useRef();
    let titleUnearthing = useRef();
    let titleDesctiption = useRef();


    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const images = [
            '/src/assets/bromo.png'
        ]; // Ganti dengan nama gambar yang Anda miliki

        const changeImage = () => {
            gsap.to('#image-container img', {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                    const nextIndex = (currentIndex + 1) % images.length;
                    setCurrentIndex(nextIndex);
                    const nextImage = images[nextIndex];
                    document.querySelector('#image-container img').src = nextImage;
                    gsap.to('#image-container img', {
                        opacity: 1,
                        duration: 1,
                    });
                },
            });
        };

        const changeBackgroundColor = () => {
            gsap.to('body', {
                backgroundColor: 'black',
                duration: 1,
                onComplete: changeImage,
            });
        };

        const initAnimation = () => {
            gsap.to('#image-container img', {opacity: 1, duration: 1});
            setInterval(changeBackgroundColor, 3000); // Ganti durasi transisi di sini (dalam milidetik)
        };

        initAnimation();

        // gsap.to(bg, {opacity: 0, duration: 1.5, delay: 0.8, display: 'none'});


        gsap.to(animatedElementRef, {

            x: 10,
            duration: 2,
            scrollTrigger: {
                trigger: animatedElementRef, // class yang akan menjadi pemicu animasi
                start: "top bottom", // ketika,
                scrub: true,

            }
        });


        let tl = gsap.timeline()


        tl.fromTo(titleUnveling, {
            y: -100,
            duration: 1
        }, {y: 0, duration: 1})
            .fromTo(titlePresent, {
                y: -50,
                duration: 1,
                opacity: 0
            }, {
                y: 0, duration: 1,
                opacity: 1
            }).fromTo(titleUnearthing, {
            y: -50,
            duration: 0.5,
            opacity: 0
        }, {
            y: 0, duration: 0.5,
            opacity: 1
        }).fromTo(titleDesctiption, {

            duration: 2,
            opacity: 0
        }, {
            y: 0, duration: 2,
            opacity: 1
        })


    }, []);

    return (
        <div className={'w-full h-screen '}>

            {/*<div ref={el => bg = el} className={'bg-black w-full h-screen absolute z-50'}>z</div>*/}


            <div className={'w-full h-screen bg-black'}>
                <div className={'absolute w-full h-screen justify-center flex items-center z-40'}>

                    <div className={'w-[85%] h-[75%]  flex justify-start items-center'}>

                        <div className={'overflow-hidden'}>
                            <p ref={el => titleUnveling = el}
                               className={'overflow-hidden text-6xl whitespace-nowrap text-white stroke-class italic font-montserrat max-[600px]:text-4xl'}
                               style={{
                                   WebkitTextStroke: '1px white',
                                   textStroke: '1px white',
                                   color: 'transparent'
                               }}>UNVEILING INDONESIA</p>
                            <p ref={el => titlePresent = el}
                               className={'text-white font-bold font-montserrat mt-3 max-[600px]:text-2xl  text-4xl'}>PRESENTS TO YOU</p>
                            <p ref={el => titleUnearthing = el}
                               className={' font-poppins text-white text-4xl max-[600px]:text-2xl mt-3'}>&#x201F;Unearthing Indonesia's
                                Cultural Riches through Web Design&#x201F;</p>

                            <p ref={el => titleDesctiption = el}
                               className={'w-[1000px] max-[600px]:w-full max-[600px]:line-clamp-4 text-white font-poppins text-start mt-3'}>Indonesia is a country
                                rich in culture and diverse cultural heritage. However, as time goes by and in the
                                rapidly developing digital era, many aspects of Indonesia's rich culture are starting to
                                fade and be forgotten. Today's young generation has an important role in preserving and
                                expressing this cultural heritage to the wider community. In this context, the "Web
                                Design Techcomfest 2024" competition chose the theme "Digital Cultural Exploration:
                                Unearthing Indonesia's Cultural Riches through Web Design" to encourage the younger
                                generation to become pioneers in preserving and promoting Indonesia's cultural
                                heritage.</p>

                            <div
                                className="border-2 py-2 px-5 rounded-full border-white hover:bg-white hover:text-black group w-fit mt-5 cursor-pointer">

                                <Link to={'/explore'}
                                ><p className="text-white  group-hover:text-black  font-poppins text-[1rem] ">Explore
                                    More </p></Link>



                            </div>


                        </div>

                    </div>
                </div>


                <div className={'bg-black w-full h-screen absolute z-30 opacity-50'}>z</div>


                {/*<img src="/src/assets/images/pemandangan.png" className={' max-[600px]: w-full h-screen bg-no-repeat bg-cover -z-50 max-[600px]:bg-cover'}*/}
                {/*     alt=""/>*/}

                <BackgroundChanger/>


            </div>
            <div
                className={'w-full h-32 bg-[#161616] overflow-hidden  font-bold font-montserrat xl:text-6xl md:text-4xl  '}>
                <div ref={el => animatedElementRef = el}
                     className={'text-center h-full w-screen flex items-center  xl:-translate-x-[430px] md:-translate-x-[200px]'}>
                    <p className={'whitespace-nowrap text-white text-stroke text-fill-transparent pr-5 stroke-class'}
                       style={{WebkitTextStroke: '1px white', textStroke: '1px white', color: 'transparent'}}>OUR
                        PURPOSE</p>
                    <p className={'whitespace-nowrap text-white text-stroke text-fill-transparent pr-5 stroke-class'}
                       style={{WebkitTextStroke: '1px white', textStroke: '1px white', color: 'transparent'}}>OUR
                        PURPOSE</p>
                    <p className={'whitespace-nowrap text-white pr-5'}>OUR PURPOSE</p>
                    <p className={'whitespace-nowrap text-white text-stroke text-fill-transparent pr-5 stroke-class'}
                       style={{WebkitTextStroke: '1px white', textStroke: '1px white', color: 'transparent'}}>OUR
                        PURPOSE</p>
                    <p className={'whitespace-nowrap text-white text-stroke text-fill-transparent pr-5 stroke-class'}
                       style={{WebkitTextStroke: '1px white', textStroke: '1px white', color: 'transparent'}}>OUR
                        PURPOSE</p>
                </div>


            </div>


            <DiagramAnimation/>
<TimeLineAnimation/>
            {/*<Footer  f1={"Home"} f2={"Forum"} f3={"About Us"}/>*/}


        </div>
    );
}

export default Home;
