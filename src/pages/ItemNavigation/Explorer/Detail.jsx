import React, {useEffect, useRef, useState} from "react";
import gsap  from "gsap";
import * as url from "url";
import {Link, useNavigate} from "react-router-dom";


function Detail() {

    let transisi = useRef();
    let transisi1 = useRef();

    // 1. Tambahkan state
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        gsap.to(".opa", { opacity: 1, duration: 2 });
    }, []);

    // 2. Tambahkan CSS untuk efek blur
    const imageStyle = {
        filter: isHovered ? "blur(5px)" : "none",
        transition: "filter 0.5s ease-in-out",
        cursor:"pointer"
    };
    useEffect(() => {


        gsap.to(".opa",{opacity:1,duration:2})

    }, []);


    return (
        <div className={'w-full h-screen bg-custom-orang-lagi overflow-y-hidden group'}>

            <div className={'mx-auto w-fit pt-20'}>

                <p className={'opa opacity-0  font-bold font-montserrat text-7xl  text-white '}>ISLAND OF JAVA</p>

            </div>


            <div className={'w-[80%] mx-auto h-fit flex justify-evenly mt-20 font-annie text-7xl text-white'}>
                <p className={'-rotate-12'}>WELCOME </p>


                <div className={'py-20'}>

                    <p>TOO </p>
                </div>

                <p >ISLAND </p>

                <div className={'py-20'}>

                    <p>OF </p>
                </div>


                <p>JAVA </p>
            </div>

            <div className={' h-[55%] relative  flex justify-between overflow-hidden'}>

                <img src="/src/assets/images/papan.png" alt=""/>

                <Link to={'/explore/detail/home'}>

                    <img src="/src/assets/images/rumah-jawa.png"  alt="" style={imageStyle}
                         onMouseEnter={() => setIsHovered(true)} // Ubah state ketika mouse masuk
                         onMouseLeave={() => setIsHovered(false)} // Ubah state ketika mouse keluar
                    />
            </Link>

            </div>

        </div>
    )
}

export  default  Detail