import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Angebote from './components/Angebote';
import Services from './components/Services';
//import Hilfe from './components/Hilfe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/angebote" element={<Angebote />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/hilfe" element={<Hilfe />} /> */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
