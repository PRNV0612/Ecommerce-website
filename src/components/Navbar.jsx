import Image from 'next/image';
import React from 'react';


const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between border-b-2 py-4 pb-0 pt-4 mb-8 text-black">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">Exclusive</div>

        {/* Navigation Links */}
        <nav className="hidden gap-10 md:flex space-x-8 text-lg">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="/signup" className="hover:underline">
            Sign Up
          </a>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center justify-between max-w-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full py-2 px-5 rounded-l-md border bg-gray-100 border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
          <button className="bg-gray-100 border border-gray-200 text-white px-4 py-2 rounded-r-md">
            <div className='w-8'>
              <Image src='/images/Search.png' width={24} height={24} alt="search"/>
            </div>
          </button>
          
          {/* Icons */}
          <div className="flex items-center m-4 space-x-4">
            <button className="p-2 hover:text-gray-300">
            <div className='w-8'>
                <Image src='/images/Heart.png' width={28} height={28} alt="search"/>
              </div>
            </button>
            <button className="p-2 hover:text-gray-300">
            <div className='w-8'>
                <Image src='/images/Shopping-cart.png' width={28} height={28} alt="search"/>
              </div>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
