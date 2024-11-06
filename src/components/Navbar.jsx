"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="container mx-auto px-4 py-4 border-b-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-black">
            Exclusive
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-lg">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about/contact" className="hover:underline">Contact</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/signup" className="hover:underline">Sign Up</a>
          </nav>

          {/* Search and Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative flex items-center max-w-md">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full py-2 px-4 rounded-l-md border bg-gray-100 border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200"
              />
              <button className="bg-gray-100 border border-gray-200 text-white px-4 py-2 rounded-r-md">
                <div className="w-6">
                  <Image src='/images/Search.png' width={24} height={24} alt="search"/>
                </div>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:opacity-75">
                <div className="w-6">
                  <Image src='/images/Heart.png' width={28} height={28} alt="wishlist"/>
                </div>
              </button>
              <button className="p-2 hover:opacity-75">
                <div className="w-6">
                  <Image src='/images/Shopping-cart.png' width={28} height={28} alt="cart"/>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 border-b shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Contact</a>
                <a href="#" className="hover:underline">About</a>
                <a href="/signup" className="hover:underline">Sign Up</a>
              </nav>
              
              {/* Search - Mobile */}
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full py-2 px-4 rounded-l-md border bg-gray-100 border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200"
                />
                <button className="bg-gray-100 border border-gray-200 text-white px-4 py-2 rounded-r-md">
                  <div className="w-6">
                    <Image src='/images/Search.png' width={24} height={24} alt="search"/>
                  </div>
                </button>
              </div>

              {/* Icons - Mobile */}
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:opacity-75">
                  <div className="w-6">
                    <Image src='/images/Heart.png' width={28} height={28} alt="wishlist"/>
                  </div>
                </button>
                <button className="p-2 hover:opacity-75">
                  <div className="w-6">
                    <Image src='/images/Shopping-cart.png' width={28} height={28} alt="cart"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;