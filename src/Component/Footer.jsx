import React from "react";


function Footer({f1,f2,f3}) {

    return (
        <>
            <footer className={'w-full h-1/2 bg-[#191919]'}>

                <div className={'w-full h-full p-9'}>

                    <div className={'w-full h-fit flex'}>
                        <div className={'w-[55%]  font-montserrat'}>
                            <p className={'font-bold italic text-white text-4xl max-[600px]:text-2xl cursor-pointer transition ease-in-out delay-150 hover:scale-105 duration-300'} onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}>{f1}</p>

                            <div className={'flex mt-6 w-[18%] max-[600px]:w-[70%] justify-between font-thin italic text-white'}>
                                <p>{f2}</p>
                                <p className={'font-poppins font-thin'}>/</p>
                                <p>{f3}</p>

                            </div>

                        </div>
                        <div className={'w-[45%]  text-white grid grid-cols-2 gap-6 max-[600px]:hidden font-poppins'}>
                            <div>
                                <p>location</p>
                                <p className={'mt-7'}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                            </div>
                            <div>
                                <p>Contact us</p>
                                <p className={'mt-7'}>+1 (406) 555-0120</p>
                                <p className={'mt-2'}>dds@unveilingindonesia.com</p>
                            </div>
                            <div >
                                <p>Follow us</p>
                                <div className={'flex flex-row mt-3'}>

                                    <div
                                        className={'border hover:bg-black cursor-pointer p-4 rounded-full mr-4'}>

                                        <img src="/src/assets/SocialMedia/Vector.png" alt=""/>

                                    </div>

                                    <div
                                        className={'border hover:bg-black cursor-pointer p-4 rounded-full mr-4'}>

                                        <img src="/src/assets/SocialMedia/Vector-1.png" alt=""/>

                                    </div>

                                    <div
                                        className={'border hover:bg-black cursor-pointer p-4 rounded-full mr-4'}>

                                        <img src="/src/assets/SocialMedia/Vector-2.png" alt=""/>

                                    </div>

                                    <div
                                        className={'border hover:bg-black cursor-pointer p-4 rounded-full mr-4'}>

                                        <img src="/src/assets/SocialMedia/youtube.png" alt=""/>

                                    </div>



                                </div>
                            </div>
                            <div>
                                <p>Let’s chat</p>
                                <div className={'flex flex-row mt-3'}>

                                    <div
                                        className={'border hover:bg-black cursor-pointer p-4 rounded-full mr-4'}>

                                        <img src="/src/assets/SocialMedia/Vector-3.png" alt=""/>

                                    </div>

                                    <div
                                        className={'border hover:bg-black cursor-pointer p-4 rounded-full mr-4'}>

                                        <img src="/src/assets/SocialMedia/telegram.png" alt=""/>

                                    </div>

                                    <div
                                        className={'border hover:bg-black cursor-pointer p-4 rounded-full mr-4'}>

                                        <img src="/src/assets/SocialMedia/whatsapp.png" alt=""/>

                                    </div>


                                </div>
                            </div>


                        </div>

                    </div>


                    <div className={' max-[600px]:h-full  max-[600px]:flex max-[600px]:items-end    max-[600px]:justify-center '}>

                     <div className={'w-full'}>
                         <div className={'w-full h-fit flex justify-between  text-white max-[600px]:text-[13px] font-poppins  '}>
                             <p>© 2023 — Copyright</p>
                             <p>Privacy</p>

                         </div>
                         <div className={'w-full h-fit bg-gray-600 rounded-lg mt-4 flex justify-between items-center p-4 bg-custom bg-center grayscale' }>

                             <div className={'font-montserrat font-bold text-[18px] text-white '}

                             >

                                 <p className={'leading-4'}>BACK</p>
                                 <p>to Top</p>

                             </div>

                             <button onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}>

                                 <img src="/src/assets/images/panah.png" className={'w-4 m-3 cursor-pointer transition ease-in-out delay-150 hover:scale-150 duration-300'} alt=""  />

                             </button>

                         </div>

                     </div>
                    </div>

                </div>

            </footer>
        </>
    )
}


export  default Footer