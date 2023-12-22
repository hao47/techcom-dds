import  {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {useNavigate} from "react-router-dom";

function Loading()  {

    const navigate = useNavigate()


    let bg = useRef(null);


    let title = useRef(null)
    let footer = useRef(null)
    const playIntro = () => {

        const tlTitle = gsap.timeline({ repeat: 0});
        const tlfooter = gsap.timeline({ repeat: 0});
        tlTitle.fromTo(
            title,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 2.5,
                delay: 0.5,
            }
        ).to(

            title,
            {
                opacity: 0,
                duration: 1.5,
                delay: 0.5,
            }
        )

        tlfooter.fromTo(
            footer,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 2.5,
                delay: 1.5, // Penundaan sebelum animasi dimulai
            }
        ).to(
            footer,
            {
                opacity: 0,
                duration: 1.5,
                onComplete: function () {
                    navigate('/home')
                }
            }
        )


    };




    useEffect(() => {

        // gsap.to(bg, { opacity: 0, duration: 1.5, delay: 0.8, display: 'none' });


        playIntro()
    }, []);

    return (
        <div className="bg-black w-full h-screen flex items-end justify-center">

            {/*<div  ref={el => bg = el}  className={'bg-black w-full h-full absolute z-50'}></div>*/}

            <div className="w-full h-[55%] grid grid-cols-1 mb-8 content-between ">




                <div
                    ref={el => title = el}
                    className="text-white text-center xl:text-8xl md:text-5xl sm:text-4xl font-montserrat"

                >
                    UNVEILING INDONESIA
                </div>

                <p

                    ref={el => footer = el}
                    className={'text-white text-center xl:text-2xl md:text-1xl sm:text-1xl font-montserrat'}
                >
                    a project by DDS.
                </p>




            </div>
        </div>
    );
}

export default Loading;