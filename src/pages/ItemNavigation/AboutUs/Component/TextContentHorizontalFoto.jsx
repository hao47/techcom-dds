import React from "react";

function TextContentHorizontalFoto({title,subtitle,description}) {

    return (
        <div className='w-[50%] flex justify-start  max-[600px]:justify-center items-center  max-[600px]:w-full'>
            <div className='w-[100%]'>
                <p className='font-montserrat text-2xl ml-8 mb-5 max-[600px]:ml-0 text-start text-white max-[600px]:text-center max-[600px]:text-lg'>{title}</p>
                <p  className='font-montserrat text-4xl mb-3 text-white text-start max-[600px]:text-center max-[600px]:text-lg'>{subtitle}</p>

                <p className='font-montserrat font-thin text-1xl mt-3 text-white text-start max-[600px]:text-center max-[600px]:px-10 max-[600px]:text-lg'>{description}</p>

            </div>
        </div>
    )

}


export default TextContentHorizontalFoto