'use client';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';

const StoreLocatorGuide = () => {
  const steps = [
    {
      title: "Create Your Store Profile",
      description: "Add your business details, hours, and services.",
      image: "/images/assets/storelocator1.png",
    },
    {
      title: "Customize Your Map",
      description: "Configure your map settings including zoom level and style.",
      image: "/images/assets/storelocator2.png",
    },
    {
      title: "Generate Embed Code",
      description: "Create an embeddable widget with our simple code generator.",
      image: "/images/assets/storelocator3.png",
    },
    {
      title: "Add To Your Website",
      description: "Copy the code and paste it into your website.",
      image: "/images/assets/storelocator4.png",
    }
  ];

  return (
    <Container className="py-16 ">
      <div className="text-center mb-16">
        <span className="inline-block px-5 py-1.5 bg-[#FF7E67]/10 rounded-full text-[#FF7E67] text-sm font-medium mb-4">
          Embedable Store Locator
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
          <span className="text-[#FF7E67]">Help Customers</span> Find Your Location
        </h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#FF7E67] to-[#F89F81] mx-auto mb-6 rounded-full"></div>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Set up in minutes with no coding required.
        </p>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Connection dotted lines */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0 hidden md:block">
          <svg className="w-full h-24" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M80,40 C150,40 150,80 220,80 C290,80 290,40 360,40 C430,40 430,80 500,80 C570,80 570,40 640,40 C710,40 710,80 780,80 C850,80 850,40 920,40" 
              stroke="url(#orangeGradient)" 
              strokeWidth="2.5" 
              strokeDasharray="5,5" 
              fill="none" 
            />
            <defs>
              <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF7E67" />
                <stop offset="100%" stopColor="#F89F81" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="40" r="5" fill="#FF7E67" />
            <circle cx="360" cy="40" r="5" fill="#FF7E67" />
            <circle cx="640" cy="40" r="5" fill="#FF7E67" />
            <circle cx="920" cy="40" r="5" fill="#FF7E67" />
          </svg>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative mb-8 w-full max-w-[280px] h-[240px] rounded-lg overflow-hidden border border-[#FF7E67]/20 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7E67]/5 to-transparent"></div>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-r from-[#FF7E67] to-[#F89F81] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-center font-semibold text-xl text-gray-800 group-hover:text-[#FF7E67] transition-colors duration-300">{step.title}</h3>
              <p className="text-center text-base text-gray-600 mt-2 max-w-[240px] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default StoreLocatorGuide; 