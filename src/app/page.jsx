"use client"
import React, { useEffect, useState, useRef } from 'react'

import Sidebar from '@/components/Sidebar'
import CountdownTimer from '@/components/CountdownTimer'
import ProductCard from '@/components/ProductCard'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import CategorySelector from '@/components/CategoryCard'
import BentoGrid from '@/components/BentoGrid'
import Image from 'next/image'
import TimerBlock from '@/components/TimerBlock'

const Page = () => {
  const [products, setProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const productContainerRef = useRef(null);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);

        const shuffled = data.sort(() => 0.5 - Math.random());
        setBestSellingProducts(shuffled.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const scroll = (direction) => {
    const container = productContainerRef.current;
    const scrollAmount = 300; // Adjust scroll amount as needed
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <main className='w-full'>
      <div className='pt-5'>
        <Sidebar />
      </div>
      <div className='flex p-20 flex-col'>
        <div className='flex flex-row ml-10 justify-start items-center'>
          <div className='h-8 w-4 bg-red-600 rounded-md mr-5'> </div>
          <span className='text-red-600 font-bold'>Today's</span>
        </div>
        <div className='flex flex-row text-black pt-5 gap-10 ml-10 align-middle'>
          <h1 className='text-4xl font-bold pr-12'>Flash Sales</h1>
          <CountdownTimer />
        </div>
        <div className='absolute right-14 bottom-16 flex space-x-2 p-2'>
            <button
              onClick={() => scroll('left')}
              className='p-2 bg-gray-200 rounded-full flex items-center justify-center w-10 h-10'
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className='p-2 bg-gray-200 rounded-full flex items-center justify-center w-10 h-10'
            >
              <ArrowRight size={20} />
            </button>
          </div>
        <div className='relative flex items-center'>
          <div
            ref={productContainerRef}
            className='flex overflow-hidden overflow-x-scroll no-scrollbar scrollbar-hide snap-x snap-mandatory space-x-5 p-2'
            style={{
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
            }}
          >
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                name={product.title} 
                price={product.price} 
                originalPrice={product.price + 50} 
                image={product.image} 
                rating={product.rating.rate} 
                reviews={product.rating.count}
              />
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='bg-red-600 text-white py-3 px-8 rounded-md mb-3'>
            <a href='/products' className='text-center'>View All Products</a>
          </div>
        </div>
        <hr className='rounded-lg'/>
        <div className='flex flex-row justify-start items-center ml-10 mt-10'>
          <div className='h-8 w-4 bg-red-600 rounded-md mr-5'> </div>
          <span className='text-red-600 font-bold'>Categories</span>
        </div>
        <div className='flex flex-row text-black pt-5 gap-10 ml-10 align-middle'>
          <h1 className='text-4xl font-bold pr-12'>Browse By Category</h1>
        </div>
        <div className='flex justify-center pt-10 mb-9 items-start'>
            <CategorySelector/>
        </div>
        <hr className='rounded-lg'/>
        <div className='relative ml-10'>
          <div className='flex flex-row justify-start items-center mt-10'>
            <div className='h-8 w-4 bg-red-600 rounded-md mr-5'> </div>
            <span className='text-red-600 font-bold'>This Month</span>
          </div>
          <div className='flex flex-row text-black pt-5 gap-10 align-middle'>
            <h1 className='text-4xl font-bold pr-12'>Best Selling Products</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
            {bestSellingProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.title}
                price={product.price}
                originalPrice={product.price + 50}
                image={product.image}
                rating={product.rating.rate}
                reviews={product.rating.count}
              />
            ))}
          </div>
          <div className='absolute right-14 bottom-96 flex space-x-2 p-2'>
            <div className='bg-red-600 text-white py-3 px-8 rounded-md mb-3'>
              <a href='/products' className='text-center'>View All </a>
            </div>
          </div>
        </div>
        <div className='m-24 pt-36 flex justify-center items-center'>
          <TimerBlock />

        </div>
        <div className='ml-10'>
          <div className='flex flex-row justify-start items-center mt-20 pt-10'>
            <div className='h-8 w-4 bg-red-600 rounded-md mr-5'> </div>
            <span className='text-red-600 font-bold'>Our Products</span>
          </div>
          <div className='flex flex-row text-black pt-5 gap-10 align-middle'>
            <h1 className='text-4xl font-bold pr-12 pb-8'>Explore Our Products</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard 
              key={product.id}
              name={product.title}
              price={product.price}
              originalPrice={product.price + 50}
              image={product.image}
              rating={product.rating.rate}
              reviews={product.rating.count}
              />
            ))}
        </div>
        <div className='flex justify-center mt-10'>
          <div className='bg-red-600 text-white py-3 px-8 rounded-md mb-3'>
            <a href='/products' className='text-center'>View All Products</a>
          </div>
        </div>
      </div>
        <div className='flex flex-row justify-start items-center ml-10 mt-10'>
          <div className='h-8 w-4 bg-red-600 rounded-md mr-5'> </div>
          <span className='text-red-600 font-bold'>Featured</span>
        </div>
        <div className='flex flex-row text-black pt-5 gap-10 ml-10 align-middle'>
          <h1 className='text-4xl font-bold pr-12 pb-8'>New Arrival</h1>
        </div>
        <div className='m-10 mt-0'>
          <BentoGrid />
        </div>
        <div className='p-20 flex justify-center items-center'>
        <Image src='/images/Facts.png'
        width={900}
        height={900}
        alt='Facts about the company' 
        />
        </div>

      </div>

    </main>
  )
}

export default Page