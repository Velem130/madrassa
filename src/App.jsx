import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Navbar from './components/Navbar'; 
import Prices from './pages/Prices'; 
import About15 from './pages/About15'; 
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (

    <Router>

      <div>
       
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/About15" element={<About15 />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

      </div>

     <Footer />
    </Router>
  );
}

export default App;
