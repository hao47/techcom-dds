// ForumToast.jsx
import React from 'react';

export function ForumToast() {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-[#404040] rounded-lg shadow ">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b border-[#555555] rounded-t ">
                            <h3 className="text-lg font-semibold text-white ">
                                Oops!
                            </h3>
                            <button type="button" className="text-white bg-transparent hover:bg-[#555555] rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center ">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 flex flex-col">
                            <p className="text-sm font-normal text-white ">You need to be logged in to access Forum.</p>
                            <img className='rounded-md h-50 w-50' src="src/assets/gifs/login.gif" alt="GIF"/>
                            <div>
                                <a href="#" className="inline-flex items-center text-xs font-normal text-white hover:underline ">
                                    <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    Why do I need to be logged in?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}