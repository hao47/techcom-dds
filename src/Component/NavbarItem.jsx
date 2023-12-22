import React, {useEffect} from "react";
import {useLocation, Link} from 'react-router-dom';


function NavbarItem({link, title}) {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (

        <li>

            <Link to={link} className={`${

                isActive(link) ? 'text-white  before:absolute before:-bottom-1 before:h-[2px] before:w-[100%] before:bg-white   before:opacity-1   relative ' : ' text-white       before:absolute before:-bottom-1 before:h-[2px] before:w-[100%] before:bg-white  before:-translate-y-6 before:opacity-0 before:duration-300 before:ease-in hover:before:translate-y-[0.01rem] hover:before:opacity-100 relative  '
            } font-poppins font-bold no-underline`}
            >{title}</Link>

        </li>
    )
}


export default NavbarItem