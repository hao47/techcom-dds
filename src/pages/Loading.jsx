import {useEffect} from 'react';
import AOS from 'aos';
import {motion} from 'framer-motion'

function Loading() {

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, []);
    return (
        <div className="bg-black w-full h-screen flex items-end justify-center">


            <div className="w-full h-[55%] grid grid-cols-1 mb-8 content-between ">
                <motion.p
                    initial={{opacity: 0, scale: 1}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1.5, delay: 1}}
                    className=" text-white text-center xl:text-8xl md:text-6xl sm:text-4xl font-montserrat"
                >
                    UNVEILING INDONESIA
                </motion.p>
                <motion.p
                    initial={{opacity: 0, scale: 1}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 2, delay: 2}}
                    className={'text-white text-center xl:text-2xl md:text-1xl sm:text-1xl .example-style font-montserrat'}
                >
                    a project by DDS.
                </motion.p>


            </div>


        </div>
    );
}

export default Loading;