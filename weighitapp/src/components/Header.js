// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">WeighIt</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-200">About</a></li>
            <li><a href="#services" className="hover:text-blue-200">Services</a></li>
            <li><a href="#products" className="hover:text-blue-200">Products</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
