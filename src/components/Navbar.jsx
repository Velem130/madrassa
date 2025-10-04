import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white pb-1 text-center text-black sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-1xl font-bold">Raha Online Madrassah</h1>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Prices">Prices</Link></li>
          <li><Link to="/about15">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center gap-4 pb-4 md:hidden bg-white">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/Prices" onClick={toggleMenu}>Prices</Link></li>
          <li><Link to="/about15" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
