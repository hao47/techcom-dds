import {Link, useLocation,} from 'react-router-dom';
import NavbarItem from "../../Component/NavbarItem.jsx";
import {gsap} from "gsap";
import S from "/src/assets/images/s.svg";
import D from "/src/assets/images/d.svg";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import GoogleButtonSignIn from "../../Component/GoogleButtonSignIn.jsx";


function Navigation() {

    const [navbarPosition, setNavbarPosition] = useState('fixed');
    const location = useLocation();

    useLayoutEffect(() => {
        if (location.pathname === '/forum') {
            setNavbarPosition('sticky');
        } else {
            setNavbarPosition('fixed');
        }
    }, [location.pathname]);

    let d = useRef()
    let a = useRef()
    let f = useRef()
    let f1 = useRef()
    let a1 = useRef()


    let de = useRef()
    let e = useRef()
    let k = useRef()
    let da = useRef()

    let s = useRef()
    let i = useRef()
    let n = useRef()
    let s1 = useRef()
    let i1 = useRef()
    let n1 = useRef()

    // function fd() {
    //     gsap.to(a,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //     gsap.to(f,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //     gsap.to(f1,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //     gsap.to(a1,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //
    //
    //     gsap.to(de,{
    //
    //         x:2
    //     })
    //     gsap.to(e,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //     gsap.to(k,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //     gsap.to(da,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //     gsap.to(s,{
    //         x:1
    //
    //     })
    //     gsap.to(i,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //     gsap.to(n,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //
    //     gsap.to(s1,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //     gsap.to(i1,{
    //         opacity:1,
    //         delay:0.3
    //     })
    //     gsap.to(n1,{
    //         opacity:1,
    //         delay:0.3
    //     })
    // }
    //
    // function fl() {
    //
    //
    //
    //
    //
    //     gsap.to(a,{
    //         opacity:0,
    //         delay:0.1
    //     })
    //     gsap.to(f,{
    //         opacity:0,
    //         delay:0.1
    //     })
    //     gsap.to(f1,{
    //         opacity:0,
    //         delay:0.1
    //     })
    //     gsap.to(a1,{
    //         opacity:0,
    //         delay:0.1
    //     })
    //
    //
    //
    //
    //
    //
    //     gsap.to(de,{
    //
    //         x:-78
    //     })
    //
    //
    //
    //     gsap.to(e,{
    //         opacity:0,
    //         delay:0.1
    //
    //     })
    //     gsap.to(k,{
    //         opacity:0,
    //         delay:0.1
    //
    //     })
    //     gsap.to(da,{
    //         opacity:0,
    //         delay:0.1
    //
    //     })
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //     gsap.to(s,{
    //         x:-148
    //
    //     })
    //
    //     gsap.to(i,{
    //         opacity:0,
    //         delay:0.1
    //     })
    //
    //     gsap.to(n,{
    //         opacity:0,
    //         delay:0.1
    //
    //     })
    //
    //     gsap.to(s1,{
    //         opacity:0,
    //         delay:0.1
    //
    //     })
    //     gsap.to(i1,{
    //         opacity:0,
    //         delay:0.1
    //
    //     })
    //     gsap.to(n1,{
    //         opacity:0,
    //         delay:0.1
    //
    //     })
    //
    // }
    //
    // useEffect(() => {
    //   // f
    // }, []);



    useEffect(() => {
        let lastScrollTop = 0;
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', function() {
            let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                // Scroll ke bawah
                navbar.style.visibility = 'hidden';
            } else {
                // Scroll ke atas
                navbar.style.visibility = 'visible';
            }

            lastScrollTop = currentScrollTop;
        });

    }, []);
    return (
      <>
          <nav id={'navbar'}
               className= {`glass-container  p-4 rounded-full bg-green-950 m-4 ${navbarPosition} z-50 w-[98.5%] max-[800px]:m-0 max-[800px]:rounded-none max-[800px]:w-full`}

          >

              <div className='mx-auto flex justify-between items-center h-10'>
                  <Link to='/' >

                      <div className={'flex'}>
                          {/*<img src={D} className={'w-8'} alt=""/>*/}
                          {/*<img ref={el => s = el} src={D} className={'w-8'} alt=""/>*/}
                          <img src='/src/assets/images/logo.png' className={'w-32'} alt=""/>

                          {/*<p className={'font-bold font-montserrat text-white text-4xl '} ref={el => d= el}>D</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => a= el}>a</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => f= el}>f</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => f1= el}>f</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => a1= el}>a</p>*/}

                          {/*<p className={'font-bold font-montserrat text-white text-4xl -translate-x-[78px]'} ref={el => de= el}>D</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => e= el}>e</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => k= el}>k</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => da= el}>a</p>*/}

                          {/*<p className={'font-bold font-montserrat text-white text-4xl -translate-x-[148px]'} ref={el => s= el}>S</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => i= el}>i</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => n= el}>n</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => s1= el}>s</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => i1= el}>i</p>*/}
                          {/*<p className={'font-bold font-montserrat text-white text-4xl opacity-0'} ref={el => n1= el}>n</p>*/}
                      </div>
                  </Link>

                  <div className="border-2 py-2 px-5 rounded-full border-white hover:bg-white hover:text-black group cursor-pointer hidden max-[800px]:rounded-none max-[800px]:hidden">
                      <p className="text-white  group-hover:text-black  font-poppins text-[1rem] ">Menu</p>
                  </div>

                  <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden   " aria-controls="navbar-cta" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                      </svg>
                  </button>

                  <ul className='flex space-x-12 max-[800px]:hidden'>



                      <NavbarItem title={'Home'} link={'/'}/>
                      {/*<NavbarItem title={'Forum'} link={'/forum'}/>*/}
                      <NavbarItem title={'About Us'} link={'/aboutus'}/>



                  </ul>

                  <GoogleButtonSignIn/>

              </div>
          </nav>

      </>
    );
}

export default Navigation;