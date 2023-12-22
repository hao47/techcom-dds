import React, {useState} from "react";

export function Create({onClick}) {
    return (
        <div className=' bg-[#404040] w-full p-2 mb-2 rounded-md flex flex-col'>
            <img className='rounded-md mb-3' src="src/assets/gifs/create.gif" alt="GIF"/>
            <button 
            onClick={onClick} 
            className="bg-transparent hover:bg-white text-white font-montserrat hover:text-[#555555] py-2 border border-white rounded-full transition duration-300 ease-in-out">
                Create Post
            </button>
        </div>
    );
}

function timeAgo(dateString) {
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return `${interval} years ago`;
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return `${interval} months ago`;
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return `${interval} days ago`;
    }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return `${interval} hours ago`;
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return `${interval} minutes ago`;
    }

    return `${Math.floor(seconds)} seconds ago`;
}



export function PostItem({ total_like, total_comment,image_url,desc,photo_url,username,created_at}){

    let [like,setLike] = useState(false)



    return(
        <div className='w-full p-2 flex flex-col rounded-md bg-[#555555] my-3'>

            {/* account */}
            <div className='flex mb-4'>
                <img className='w-7 h-7 mr-2 rounded-full' src={photo_url} alt="profile"/>
                <p className='text-white'>{username} | {timeAgo(created_at)}</p>
            </div>

            {/* content */}
            <h1 className= 'font-poppins font-medium text-xs text-white mb-4'>{desc}</h1>
            <img className='h-[35rem] rounded-xl' src={image_url} alt=""/>

            {/* total_like and total_comment */}
            <div className='flex'>
                <p className='text-white my-4 text-sm'>{total_like} likes | {total_comment} comments</p>
            </div>

            {/* like and comment button */}
            <div className='flex mb-4'>

                {
                    like ?

                        <img className=' w-5 h-5 place-self-center mr-1 cursor-pointer' src={'src/assets/images/like.png'} onClick={() => setLike(false)} alt="" />
                        :

                        <img className=' w-5 h-5 place-self-center mr-1 cursor-pointer' src={'src/assets/icons/like.png'} onClick={() => setLike(true)} alt="" />

                }

                <p className='text-white mr-5 place-self-center text-sm'>Like</p>

                <img className=' w-5 h-5 place-self-center mr-1 ' src={'src/assets/icons/comment.png'} alt="" />
                <p className='text-white place-self-center text-sm'>Comment</p>
            </div>

        </div>
    )
}

export function PrevNext({page}){
    return(
        <div className="flex place-content-center my-4 ">
            <div className='flex border border-white rounded-lg'> 
                <button className="bg-transparent hover:bg-white text-white hover:text-[#555555] font-montserrat text-xs border-r border-white p-2 rounded-l-lg  transition duration-300 ease-in-out">
                    Prev
                </button>
                <h1 className='font font-montserrat text-white mx-4 place-self-center text-sm'>{page}</h1>
                <button className="bg-transparent hover:bg-white text-white hover:text-[#555555] font-montserrat text-xs border-l border-white p-2 rounded-r-lg  transition duration-300 ease-in-out">
                    Next
                </button>
            </div>
        </div>
    )
}