'use client'

import React, { useState } from 'react';

function CategorySelector() {
  const categories = [
    { name: 'Phones', icon: '/images/categories/Category-Phone.png' },
    { name: 'Computers', icon: '/images/categories/Category-computer.png' },
    { name: 'SmartWatch', icon: '/images/categories/Category-Smartwatch.png' },
    { name: 'Camera', icon: '/images/categories/Category-Camera.png' },
    { name: 'HeadPhones', icon: '/images/categories/Category-Headphone.png' },
    { name: 'Gaming', icon: '/images/categories/Category-Gamepad.png' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="flex space-x-4">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => setSelectedCategory(category.name)}
          className={`flex flex-col items-center justify-center w-36 h-36 border rounded-md cursor-pointer
            ${selectedCategory === category.name ? 'bg-red-500 text-white' : 'bg-white text-black'}
            hover:bg-red-500 hover:text-white`}
        >
          <img src={category.icon} alt={category.name} className="w-8 h-8 text-black" />
          <span className="mt-2 text-sm font-medium">{category.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CategorySelector;
