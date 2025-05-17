import React from 'react';
import { Button } from './button';
import { Container } from './container';
import Image from 'next/image';

export default function ReviewsSection() {
  return (
    <Container className="max-w-7xl mx-auto md:py-16 py-8">
      <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Get <span className="text-[#ff6a50]">5★ Reviews</span> in <br />Under 5 Minutes
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Set up in seconds – no tech skills required.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-[#FF7E67] text-white font-medium rounded-md hover:bg-[#ff6a50] transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/3">
            <Image 
              src="/images/assets/store.png" 
              alt="Store illustration"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
      </div>
    </Container>
  );
} 