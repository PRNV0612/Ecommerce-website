import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 space-x-20">
        {/* Exclusive Section */}
        <div>
          <h2 className="text-lg font-bold mb-2">Exclusive</h2>
          <h2 className='pt-2 pb-3 font-semibold'>Subscribe</h2>
          <p className="text-gray-400 text-sm">Get 10% off your first order</p>
          <div className="flex items-center bg-black w-auto border-2 rounded-sm mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full bg-black rounded-l-md focus:outline-none"
            />
            <button className="bg-black text-white p-2 rounded-r-md">
              <img src='/images/icon-send.png' />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className='text-sm'>
          <h2 className="text-lg font-semibold mb-2">Support</h2>
          <div className='pt-2'>
            <p className="text-gray-400">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
            <p className="text-gray-400 mt-2">exclusive@gmail.com</p>
            <p className="text-gray-400 mt-2">+88015-88888-9999</p>
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Account</h2>
          <ul className="space-y-2 pt-2 text-gray-400 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Link</h2>
          <ul className="space-y-2 pt-2 text-gray-400 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Download App</h2>
          <p className="text-gray-400 mb-4 text-xs">Save $3 with App New User Only</p>
          <div className="flex items-center space-x-5">
            <img src='/images/Qrcode.png' alt='QR'/>
            <div className='flex flex-col space-y-5'>
                <img src="/images/GooglePlay.png" alt="Google Play" className="scale-150" />
                <img src="/images/download-appstore.png" alt="App Store" className="scale-150" />
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <a href="#"><i className="fab fa-facebook-f text-gray-400 hover:text-white"></i></a>
            <a href="#"><i className="fab fa-twitter text-gray-400 hover:text-white"></i></a>
            <a href="#"><i className="fab fa-instagram text-gray-400 hover:text-white"></i></a>
            <a href="#"><i className="fab fa-linkedin text-gray-400 hover:text-white"></i></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-700 text-sm">
        &copy; Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
