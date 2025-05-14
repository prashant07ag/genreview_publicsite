import React from 'react';
import { Button } from './button';
import { Container } from './container';
import Image from 'next/image';

export default function ReviewsSection() {
  return (
    <Container className="max-w-7xl mx-auto py-16">
      <div className="flex flex-col md:flex-row justify-around gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Get <span className="text-[#ff6a50]">5★ Reviews</span> <br />in Under 5 Minutes
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
        
        <div className="w-1/2 max-w-sm">
            <Image 
              src="/images/assets/store.png" 
              alt="Store illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
      </div>
    </Container>
  );
} 