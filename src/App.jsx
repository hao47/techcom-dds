// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./pages/ItemNavigation/Navigation.jsx";
import Home from "./pages/ItemNavigation/Home/Home.jsx";
import Explorer from "./pages/ItemNavigation/Explorer/Explorer.jsx";
import Forum from "./pages/ItemNavigation/Forum/Forum.jsx";
import Support from "./pages/ItemNavigation/Support/Support.jsx";
import AboutUs from "./pages/ItemNavigation/AboutUs/AboutUs.jsx";

function  App() {
    return (
        <Router>
            <div className="">
                <header>
                    <Navigation />
                </header>
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/explore' element={<Explorer />} />
                        <Route path='/forum' element={<Forum />} />
                        <Route path='/support' element={<Support />} />
                        <Route path='/aboutus' element={<AboutUs />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
