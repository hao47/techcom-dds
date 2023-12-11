import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav
            className='bg-gradient-to-r from-black-500 via-black-700 to-indigo-500 p-4 rounded-full m-4'
            style={{
                background: `linear-gradient(to right, #000000, #000000)`,
            }}
        >

            <div className='mx-auto flex justify-between items-center h-10'>
                <Link to='/'>
                    <img className='h-32' src="./public/logo.png" alt="Logo" />
                </Link>
                <ul className='flex space-x-12'>
                    <li>
                        <Link
                            to='/'
                            className={`${

                                isActive('/') ? 'text-white font-poppins font-bold' : 'text-white'
                            } hover:text-gray-300 font-poppins font-bold`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/explore'
                            className={`${
                                isActive('/explore') ? 'text-white font-poppins font-bold' : 'text-white'
                            } hover:text-gray-300 font-poppins font-bold`}
                        >
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/forum'
                            className={`${
                                isActive('/forum') ? 'text-white font-poppins font-bold' : 'text-white'
                            } hover:text-gray-300 font-poppins font-bold`}
                        >
                            Forum
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/support'
                            className={`${
                                isActive('/support') ? 'text-white font-poppins font-bold' : 'text-white'
                            } hover:text-gray-300 font-poppins font-bold`}
                        >

                            Support
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='/aboutus'
                            className={`${
                                isActive('/aboutus') ? 'text-white font-poppins font-bold' : 'text-white'
                            } hover:text-gray-300 font-poppins font-bold`}
                        >
                            About us
                        </Link>
                    </li>
                </ul>

                <div className="border-2 py-2 px-5 rounded-full">
                    <p className="text-white font-poppins text-[1rem]">Get Started</p>
                </div>

            </div>
        </nav>
    );
}

export default Navigation;
