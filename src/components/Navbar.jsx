import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 flex flex-wrap justify-between items-center bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-3xl text-white bg-blue-500 px-4 rounded">I</span>daniel
        </h1>
      </div>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
          />
        </svg>
      </button>

      {/* Sidebar Menu (Instead of the previous dropdown) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7 5.3a1 1 0 0 0-1.4-1.4L12 10.6 6.7 5.3a1 1 0 0 0-1.4 1.4L10.6 12l-5.3 5.3a1 1 0 0 0 1.4 1.4L12 13.4l5.3 5.3a1 1 0 0 0 1.4-1.4L13.4 12l5.3-5.3z"
            />
          </svg>
        </button>

        {/* Sidebar Content */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul>
            <li className="py-2 hover:bg-gray-700 rounded-md p-2">
              <Link to="/" className="block">Home</Link>
            </li>
            <li className="py-2 hover:bg-gray-700 rounded-md p-2">
              <Link to="/about" className="block">About</Link>
            </li>
            <li className="py-2 hover:bg-gray-700 rounded-md p-2">
              <Link to="/projects" className="block">Projects</Link>
            </li>
            <li className="py-2 hover:bg-gray-700 rounded-md p-2">
              <Link to="/contact" className="block">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex flex-wrap space-x-6 items-center">
        <Link to="/" className="text-black font-bold hover:text-amber-800">
          Home
        </Link>
        <Link to="/about" className="text-black font-bold hover:text-amber-800">
          About
        </Link>
        <Link to="/projects" className="text-black font-bold hover:text-amber-800">
          Projects
        </Link>
        <Link to="/contact" className="text-black font-bold hover:text-amber-800">
          Contact
        </Link>
      </div>

      {/* Button (Desktop) */}
      <div className="hidden md:flex">
        <button className="p-2 px-4 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 transition duration-300">
          Click me!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;