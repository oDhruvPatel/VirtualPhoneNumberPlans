import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-between items-center py-5 px-18 bg-[#1a1a1a] shadow-md poppins text-gray-300 absolute fixed top-0">
      {/* Logo */}
      <div className="text-2xl font-semibold text-blue-400">Virtual <span className='text-white'> Plans </span></div>

      {/* Navigation Links */}
      <ul className="flex space-x-10 text-lg">
        <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
        <li><Link to="/browse-plans" className="hover:text-gray-500">Browse plans</Link></li>
        <li><Link to="/pricing" className="hover:text-gray-500">Pricing</Link></li>
        <li><Link to="/features" className="hover:text-gray-500">Features</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
