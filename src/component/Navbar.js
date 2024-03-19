// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        {/* Your navbar content here */}
        <nav>
          <ul className="flex justify-between items-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
