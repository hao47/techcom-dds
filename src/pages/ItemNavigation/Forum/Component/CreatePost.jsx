import React, { useRef, useState } from 'react';
import axios from "axios";


export function Back({onClick}){
    return(
        <div className=' bg-[#404040] w-full p-2 mb-2 rounded-md flex flex-col'>
            <img className='rounded-md mb-3' src="src/assets/gifs/create.gif" alt="GIF"/>
            <button
                onClick={onClick}
                className="bg-transparent hover:bg-white text-white font-montserrat hover:text-[#555555] py-2 border border-white rounded-full transition duration-300 ease-in-out">
                Back
            </button>
        </div>
    );
}

export function TextInput({}){

    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState({});
    const [formData, setFormData] = useState({
        desc: '',
        user_id: localStorage.getItem('uuid'),
        hashtag_name: ''
    });

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        const imageFiles = Array.from(files).filter((file) =>
            file.type.startsWith('image/')
        );
        setSelectedFiles({...imageFiles});
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // const handleDelete = (index) => {
    //     const updatedFiles = [...selectedFiles];
    //     updatedFiles.splice(index, 1);
    //     setSelectedFiles(updatedFiles);
    // };


    const submitData = e => {
        e.preventDefault()

        const fData = new FormData()

        fData.append('image', selectedFiles[0])
        fData.append('desc', formData.desc)
        fData.append('user_id', formData.user_id)
        fData.append('hashtag_name', formData.hashtag_name)


        axios.post('http://127.0.0.1:8000/upload-image', fData).then(
            result => console.log(result)
        ).catch(reason => console.log(reason))



        // console.log(imageData)
    }

    return(
        <div>
            <form onSubmit={submitData}>
                <div className="w-full mb-3 rounded-lg bg-gray-700 border-white">
                    <div className="p-2 rounded-t-lg bg-[#555555]">
                        <textarea
                            rows="40"
                            className="w-full text-sm bg-[#555555] text-white placeholder-white no-focus-border"
                            placeholder="Write your thoughts here..."
                            required
                            name={'desc'}
                            value={formData.desc}
                            onChange={handleChange}
                        ></textarea>
                        <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-s-lg bg-gray-600 text-gray-300 ">
                            <h1 className='font-montserrat'>#</h1>
                        </span>
                            <input type="text" name={'hashtag_name'} value={formData.hashtag_name} onChange={handleChange} className="no-focus-border rounded-e-lg w-full text-md p-2.5 bg-gray-700 text-white"/>
                        </div>
                    </div>
                    <div className="flex justify-between p-3">
                        <div className='flex'>

                            <div className='flex'>
                                <button
                                    type="button"
                                    className="inline-flex max-h-10 place-self-start justify-center items-center p-2 rounded cursor-pointer text-white hover:text-white hover:bg-gray-600"
                                    onClick={handleButtonClick}
                                >
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 18"
                                    >
                                        <path
                                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                                        />
                                    </svg>
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className='hidden'
                                    onChange={handleFileChange}
                                    multiple
                                    accept="image/*"
                                />
                                {Object.keys(selectedFiles).length > 0 && (
                                    <div className='flex'>
                                        <div className='bg-[#555555] p-1 flex rounded-md mx-2'>

                                            {console.log(selectedFiles[0])}
                                            <img
                                                className='rounded-md h-20 w-full object-cover'
                                                src={URL.createObjectURL(selectedFiles[0])}
                                                // alt={selectedFiles.name}
                                            />
                                            {/*<button*/}
                                            {/*    type="button"*/}
                                            {/*    onClick={() => handleDelete(0)} // Menggunakan indeks 0 karena hanya ada satu objek*/}
                                            {/*    className='w-7 h-6 hover:bg-red-100 rounded-full flex items-center justify-center transition duration-300 ease-in-out m-1'*/}
                                            {/*>*/}
                                            {/*    <img className='w-3 h-3' src="src/assets/icons/close.png" alt="" />*/}
                                            {/*</button>*/}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <button
                            onSubmit={submitData}
                            type="submit"
                            className="inline-flex items-center py-2.5 max-h-10 place-self-start px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                        >
                            Upload Post
                        </button>
                    </div>
                </div>
            </form>
            <p className="text-xs text-white">Remember, contributions to this topic should follow our <a href="#" className="text-blue-500 hover:underline">Community Guidelines</a>.</p>
        </div>
    )
}