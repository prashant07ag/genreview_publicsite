import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ReputationBoostSection = () => {
  return (
    <div className="md:py-16 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left side - Illustration */}
          <div className="md:w-1/3 relative">
            <Image
              src="/images/assets/reputation-vector.png"
              alt="Business reputation chart"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="md:w-1/2 md:max-w-lg">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Boost your business reputation
            </h2>
            
            <p className="text-gray-700 mb-8">
              Increase your online reputation by managing and generating authentic reviews. Use our platform to stand out and grow your business.
            </p>
            
            <Link href="/get-started">
              <span className="inline-block px-6 py-3 bg-[#FF7E67] text-white font-medium rounded-md hover:bg-[#ff6a50] transition-colors">
                Get Started
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReputationBoostSection