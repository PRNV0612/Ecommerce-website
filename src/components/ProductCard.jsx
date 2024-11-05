import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const ProductCard = ({ name, price, originalPrice, image, rating, reviews }) => {
  const fullStars = Math.floor(rating);
  const original = Math.floor(originalPrice);

  const truncate = (text, limit) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text
  }

  return (
    <div className="w-64 flex flex-col bg-white rounded-lg p-4">
      <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
        <Image
          fill
          alt={name}
          src={image}
          className="object-contain hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 256px) 100vw, 256px"
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <h2 className="text-black font-bold text-md mb-auto">
          {truncate(name,15)}
        </h2>
        
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <p className="text-red-600 font-bold text-md">${price}</p>
            <p className="text-gray-600 font-bold text-md line-through">
              ${original}
            </p>
          </div>
          
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={18}
                className={`${
                  index < fullStars
                    ? 'fill-yellow-500 text-yellow-500'
                    : 'fill-gray-300 text-gray-300'
                }`}
              />
            ))}
            <p className="text-gray-500 text-sm ml-2">({reviews})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;