import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Create, PostItem, PrevNext } from './Component/ViewPost';
import { Back, TextInput } from './Component/CreatePost';
import ViewPostContainer from "./Component/ViewPostContainer.jsx";
import { GetForum, GetHastags } from "./utils/config.js";

function Forum() {
    const [showCreate, setShowCreate] = useState(false);
    const [selectedHashtagId, setSelectedHashtagId] = useState(null);

    const handleCreateClick = () => setShowCreate(true);
    const handleBackClick = () => setShowCreate(false);

    const handleHastagClick = (id) => setSelectedHashtagId(id);

    return (
        <div className='w-full h-full bg-[#191919] flex flex-row scrollbar-hide'>
            <SideBar onCreateClick={handleCreateClick} onHastagsClick={handleHastagClick} onBackClick={handleBackClick} showCreate={showCreate} />
            <Body showCreate={showCreate} selectedHashtagId={selectedHashtagId} />
        </div>
    );
}

function SideBar({ onCreateClick, onBackClick, showCreate, onHastagsClick }) {
    return (
        <div className='w-max p-4 flex flex-col'>
            <Category />
            <Hashtag showCreate={showCreate} onHastagsClick={onHastagsClick} />
            {showCreate ? (<Back onClick={onBackClick} />) : (<Create onClick={onCreateClick} />)}
        </div>
    );
}

function Body({ showCreate, selectedHashtagId }) {
    return (
        <div className='w-[95%] p-4 flex flex-col h-screen'>
            <ViewPostContainer showCreate={showCreate} selectedHashtagId={selectedHashtagId} />
        </div>
    );
}

function Category() {
    return (
        <div className=' bg-[#404040] w-full p-2 mb-2 rounded-md flex flex-col'>
            <h1 className='font-montserrat text-white mb-2 text-xs sm:text-sm lg:text-base xl:text-lg'>Category</h1>
            <CategoryItem
                title={"Trending"}
                img={'src/assets/icons/trending.png'}
            />
        </div>
    );
}

function CategoryItem({title, img}) {
    return (
        <div className='w-full p-2 flex flex-row rounded-md hover:bg-[#555555] transition duration-200 ease-in-out'>
            <img className='mr-1 h-fit place-self-center w-3 sm:w-4 lg:w-5 xl:w-5 2xl:w-fit' src={img} alt="icon"/>
            <h1 className='font-poppins font-medium text-white text-xs lg:text-sm xl:text-base'>{title}</h1>
        </div>
    )
}

function Hashtag({showcreate,onHastagsClick}) {

    let [value, setValue] = useState([]);

    useEffect(() => {
        GetHastags().then(result => {
            setValue(result.data.hastag || []);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }, [showcreate]);


    return (
        <div className=' bg-[#404040] w-full p-2 mb-2 rounded-md flex flex-col'>
            <h1 className='font-montserrat text-white mb-2 text-xs sm:text-sm lg:text-base xl:text-lg '>Hashtag</h1>


            {
                value.map((news) => (
                        <HashtagItem title={news.hastag} key={news.id} id={news.id} onHastagsClick={onHastagsClick}/>
                    )
                )}


        </div>
    );
}

function HashtagItem({title,onHastagsClick,id}) {


    return (
        <div className='w-full p-2 flex flex-row rounded-md hover:bg-[#555555] transition duration-200 ease-in-out  cursor-pointer' onClick={() => onHastagsClick(id)}>
            {
                title.includes("#") ?
                    <h1 className='font-poppins font-medium text-xs text-white'>{title}</h1>
                    :
                    <h1 className='font-poppins font-medium text-xs text-white'>#{title}</h1>
            }
        </div>
    )
}
export default Forum;
