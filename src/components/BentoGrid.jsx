import React from 'react';
import Image from 'next/image';

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative h-96 md:h-[40rem]">
        <Image
          src="/images/ps5.png"
          alt="PlayStation 5"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">PlayStation 5</h2>
          <p className="text-base md:text-lg text-white mb-4">Black and White Version of the PS5 <br />coming out on sale</p>
          <a href="#" className="text-white font-medium underline">
            Shop Now
          </a>
        </div>
      </div>
      <div className="grid grid-rows-2">
        <div className="relative h-72 md:h-[18rem]">
          <Image
            src="/images/womens-collections.png"
            alt="Women's Collections"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Women&apos;s Collections</h2>
            <p className="text-base md:text-lg text-white mb-4">Featured woman collections that <br />give you another vibe.</p>
            <a href="#" className="text-white font-medium underline">
              Shop Now
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative bottom-3 h-10">
          <div className="relative h-[20.75rem]">
            <Image
              src="/images/echo-dot.png"
              alt="Speakers"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Speakers</h2>
              <p className="text-base md:text-lg text-white mb-4">Amazon wireless speakers</p>
              <a href="#" className="text-white font-medium underline">
                Shop Now
              </a>
            </div>
          </div>
          <div className="relative h-[20.75rem]">
            <Image
              src="/images/gucci-perfume.png"
              alt="Perfume"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Perfume</h2>
              <p className="text-base md:text-lg text-white mb-4">Gucci Intense Oud EDP</p>
              <a href="#" className="text-white font-medium underline">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;