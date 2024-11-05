import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to MyShop</h1>
      <p className="mt-4 text-gray-600">Your favorite place to shop!</p>
      <Link to="/products" className="mt-8 inline-block px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700">
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
