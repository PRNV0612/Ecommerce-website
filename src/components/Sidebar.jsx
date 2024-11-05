"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = () => {
    const [showWomenDropdown, setShowWomenDropdown] = useState(false);
    const [showMenDropdown, setShowMenDropdown] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideIntervalTime = 3000; // Change slide every 3 seconds

    const categories = [
        {
            name: "Woman’s Fashion",
            hasDropdown: true,
            dropdownItems: ["Dresses", "Shoes", "Accessories"]
        },
        {
            name: "Men’s Fashion",
            hasDropdown: true,
            dropdownItems: ["Shirts", "Shoes", "Accessories"]
        },
        { name: "Electronics", hasDropdown: false },
        { name: "Jewellery", hasDropdown: false }
    ];

    const slides = [
        "/images/carousel/carousel-1.png",
        "/images/carousel/carousel-2.png",
        "/images/carousel/carousel-3.png"
    ];

    // Handle automatic slide change
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, slideIntervalTime);
        return () => clearInterval(interval); // Clear interval on unmount
    }, []);

    // Handle manual slide change
    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    return (
        <div className="flex">
            <div className="bg-white w-64 ml-20 p-4 border-r-2 h-full">
                <ul className="space-y-4">
                    {categories.map((category, index) => (
                        <li key={index} className="text-gray-700 hover:text-black cursor-pointer">
                            <div
                                className="flex justify-between items-center"
                                onClick={() => {
                                    if (category.name === "Woman’s Fashion") setShowWomenDropdown(!showWomenDropdown);
                                    if (category.name === "Men’s Fashion") setShowMenDropdown(!showMenDropdown);
                                }}
                            >
                                <span>{category.name}</span>
                                {category.hasDropdown && (
                                    category.name === "Woman’s Fashion" ? (
                                        showWomenDropdown ? <ChevronDown /> : <ChevronRight />
                                    ) : category.name === "Men’s Fashion" ? (
                                        showMenDropdown ? <ChevronDown /> : <ChevronRight />
                                    ) : null
                                )}
                            </div>
                            {category.name === "Woman’s Fashion" && showWomenDropdown && (
                                <ul className="ml-4 mt-2 space-y-2 text-gray-500">
                                    {category.dropdownItems.map((item, idx) => (
                                        <li key={idx} className="hover:text-black">{item}</li>
                                    ))}
                                </ul>
                            )}
                            {category.name === "Men’s Fashion" && showMenDropdown && (
                                <ul className="ml-4 mt-2 space-y-2 text-gray-500">
                                    {category.dropdownItems.map((item, idx) => (
                                        <li key={idx} className="hover:text-black">{item}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Carousel */}
            <div id="default-carousel" className="relative w-3/5 ml-32" data-carousel="slide">
                <div className="relative h-56 overflow-hidden md:h-96">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            className={`absolute block w-full h-full object-cover transition-shadow duration-5000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            alt={`Slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Carousel Indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-400'}`}
                            aria-current={index === currentSlide}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>

                {/* Carousel Navigation Buttons */}
                <button onClick={prevSlide} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                        <ChevronLeft className="w-4 h-4 text-white" />
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={nextSlide} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                        <ChevronRight className="w-4 h-4 text-white" />
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
