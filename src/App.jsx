// App.js
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navigation from "./pages/ItemNavigation/Navigation.jsx";
import Home from "./pages/ItemNavigation/Home/Home.jsx";
import Forum from "./pages/ItemNavigation/Forum/Forum.jsx";
import AboutUs from "./pages/ItemNavigation/AboutUs/AboutUs.jsx";
import Explore from "./pages/Explore/Explore.jsx";
import Explorer from "./pages/ItemNavigation/Explorer/Explorer.jsx";
import Detail from "./pages/ItemNavigation/Explorer/Detail.jsx";
const navigationRoutes = ['/', '/explore', '/aboutus','/support'];

function App() {



    return (
        <Router>
            <div className="">
                {/*<header>*/}
                    <Navigation />


                {/*{navigationRoutes.includes(window.location.pathname) && <Navigation position={'fixed'}/>}*/}
                {/*{['/forum'].includes(window.location.pathname) && <Navigation position={'sticky'}/>}*/}
                {/*</header>*/}
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/explore' element={<Explorer />} />
                        <Route path='/explore/detail' element={<Detail />} />
                        <Route path='/forum' element={<Forum />} />
                        <Route path='/aboutus' element={<AboutUs />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
