import React from "react";

function TextContentHorizontal({title,subtitle,description}) {

    return (
        <div className='w-[50%] flex justify-center items-center'>
            <div className='w-[74%]'>
                <p className='font-montserrat text-2xl ml-7 mb-5 text-white'>{title}</p>
                <p  className='font-montserrat text-5xl mb-3 text-white'>{subtitle}</p>

                <p className='font-montserrat text-1xl text-white text-start'>{description}</p>

            </div>
        </div>
    )

}


export default TextContentHorizontal