import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            Sakan Construction
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-300 text-lg hover:text-white">
              Home
            </Link>
            <Link
              to="/aboutcontet"
              className="text-gray-300 text-lg hover:text-white"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 text-lg hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 text-lg hover:text-white"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link to="/" className="text-gray-300 text-lg hover:text-white">
              Home
            </Link>
            <Link
              to="/aboutcontet"
              className="text-gray-300 text-lg hover:text-white"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 text-lg hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 text-lg hover:text-white"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
