import React, {useState} from "react";


import {motion, AnimatePresence} from 'framer-motion';

function MotionBoldp({title}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleAnimationComplete = () => {

        setTimeout(function () {
            setIsVisible(false)
        }, 4200)
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="modal"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 1, delay: 1}}
                    className="text-white text-center xl:text-8xl md:text-5xl sm:text-4xl font-montserrat"
                    onAnimationComplete={handleAnimationComplete}
                >
                    {title}
                </motion.div>
            )}
        </AnimatePresence>
    );
}


function MotionRegularp({title}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleAnimationComplete = () => {
        setIsVisible(false);
    };
    return (

        <AnimatePresence>
            {
                isVisible && (
                    <motion.p
                        initial={{opacity: 0, scale: 1}}
                        animate={{opacity: 1, scale: 1}}

                        exit={{opacity: 0}}
                        onAnimationComplete={handleAnimationComplete}
                        transition={{duration: 2, delay: 2.5}}
                        className={'text-white text-center xl:text-2xl md:text-1xl sm:text-1xl font-montserrat'}
                    >
                        {title}
                    </motion.p>
                )
            }

</AnimatePresence>
    )
}

export default MotionBoldp
export {MotionRegularp}