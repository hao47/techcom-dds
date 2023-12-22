import React from "react";

function TextContentHorizontalFoto({title,subtitle,description}) {

    return (
        <div className=' mt-3 w-[70%] flex justify-start max-[600px]:justify-center items-center  max-[600px]:w-full'>
            <div className='w-[100%]'>
                <p className='font-montserrat mb-6 max-[600px]:ml-0 text-start text-white max-[600px]:text-center text-2xl lg:text-3xl '>{title}</p>
                <p  className='font-montserrat mb-3 text-white text-start max-[600px]:text-center text-2xl lg:text-3xl'>{subtitle}</p>
                <p className='font-montserrat font-extralight text-white text-start max-[600px]:text-center max-[600px]:px-10 max-[600px]:text-sm lg:text-lg xl:text-xl'>{description}</p>

            </div>
        </div>
    )

}


export default TextContentHorizontalFoto