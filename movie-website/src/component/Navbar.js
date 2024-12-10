import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-800 text-white shadow-md z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo hoặc Tiêu đề */}
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            Movie Website
          </Link>
        </h1>

        {/* Menu liên kết */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className="hover:text-gray-300">
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
