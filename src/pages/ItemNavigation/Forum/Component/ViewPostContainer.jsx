import React, { useEffect, useState } from "react";
import { TextInput } from "./CreatePost.jsx";
import { PostItem, PrevNext } from "./ViewPost.jsx";
import { getData } from "../utils/data.js";
import { GetForum } from "../utils/config.js";
import axios from 'axios';

function ViewPostContainer({ showCreate, selectedHashtagId }) {
    const [value, setValue] = useState([]);

    useEffect(() => {
        if (selectedHashtagId) {
            axios.get(`http://127.0.0.1:8000/hastags/${selectedHashtagId}`)
                .then(result => {
                    setValue(result.data.hastagcontent || []);

                    console.log(result.data)
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        } else {
            GetForum().then(result => {
                setValue(result.data.posts || []);



            }).catch(error => {
                console.error("Error fetching data:", error);
            });
        }
    }, [showCreate, selectedHashtagId]);

    return (
        <div className='bg-[#404040] w-full p-3 rounded-md flex flex-col'>
            {showCreate ? (
                <TextInput />
            ) : (
                value.map((news) => (
                    <PostItem {...news} image_url={news.image_url} username={news.user.username} photo_url={news.user.photo_url} key={news.id} />
                ))
            )}
        </div>
    );
}

export default ViewPostContainer;
