import React, {useEffect, useState} from "react";
import  {auth,provider} from  '/src/utils/config.js'

import {signInWithPopup} from  'firebase/auth'
import Home from "../pages/ItemNavigation/Home/Home.jsx";
import axios from "axios";


export  default  function GoogleButtonSignIn() {



    let userdata = {
        "uuid":'',
        "username":'',
        "email":'',
        "photo_url":'',
    }

    const [value,setValue] = useState('')
    const [user,setUser] = useState(userdata)

const  handleclick = () => {
        signInWithPopup(auth,provider).then((data) =>{
            userdata = {
                "uuid":data.user.uid,
                "username":data.user.displayName,
                "email":data.user.email,
                "photo_url":data.user.photoURL,
            }

            setUser(userdata)

            setValue(data.user.displayName)
            localStorage.setItem("username",data.user.displayName)
            localStorage.setItem("uuid",data.user.uid)
        })

    //
    //


}

    useEffect(() => {
        if (user.uuid !== '') {
            axios.post("http://127.0.0.1:8000/user",
                {
    "uuid":user.uuid,
    "email":user.email,
    "photo_url":user.photo_url,
    "username":user.username
}

                ).then(value1 => console.log(value1)).catch(reason => console.log(reason))
            console.log("halo")
        }
        
        setValue(localStorage.getItem('username'))
        localStorage.removeItem('username')
        console.log(user)
    }, [user]);

    return (
      <>
          {value?<p>{value}</p>:   <div onClick={() => handleclick()} className="border-2 py-2 px-5 rounded-full border-white hover:bg-white hover:text-black group cursor-pointer max-[600px]:hidden">

              <p className="text-white  group-hover:text-black  font-poppins text-[1rem] ">Umpan Balik</p>
          </div>}
      </>
    )
}
