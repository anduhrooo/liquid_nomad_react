import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './assets/liquid_nomad.PNG';
import pour from './assets/pour.png';
import NavBar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Tips from './pages/Tips.jsx';
import PackingList from './pages/PackingList.jsx';

function App() {
  return (
    <div className='app'>
      {/* <header>
        <div className="parallax-wrapper">
            <img src={ logo } alt="liquid nomad logo" />
            <img src={ pour } alt="Pouring Liquid" className="pour" data-speed="0.5" />
            <div className="liquid-container">
                <div className="liquid-fill" id="liquid-fill"></div>
            </div>
        </div>
      </header> */}
      <img className='header-logo' src={ logo } alt="liquid nomad logo" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/packing_list" element={<PackingList />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

console.log('app is rendering!')

export default App;