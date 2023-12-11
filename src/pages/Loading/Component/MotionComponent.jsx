
import {motion} from 'framer-motion'
import React from "react";


function MotionBoldp({title}) {

    return (
        <motion.p
            initial={{opacity: 0, scale: 1}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1, delay: 1}}
            className=" text-white text-center xl:text-8xl md:text-5xl sm:text-4xl font-montserrat"
        >
            {title}
        </motion.p>
    )
}


function MotionRegularp({title}) {

    return (
        <motion.p
            initial={{opacity: 0, scale: 1}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 2, delay: 2.5}}
            className={'text-white text-center xl:text-2xl md:text-1xl sm:text-1xl font-montserrat'}
        >
            {title}
        </motion.p>
    )
}

export default  MotionBoldp
export {MotionRegularp}