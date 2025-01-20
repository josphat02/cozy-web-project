import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Lovely Responsive Web</h1>
        <div className="space-x-6">
          <a href="#hero" className="hover:text-gray-400">Home</a>
          <a href="#cards" className="hover:text-gray-400">Features</a>
          <a href="#footer" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
