import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ReadyToStandOutSection = () => {
  return (
    <div className="py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-around gap-2 py-16">
          {/* Left side - Content */}
          <div className="md:w-1/3">
            <h2 className="text-5xl font-bold text-navy-900 mb-10 leading-tight">
              Ready to
              <br />
              stand out?
            </h2>
            
            <Link href="/request-demo">
              <span className="inline-block px-8 py-4 bg-[#FF7E67] text-white font-medium rounded-md hover:bg-[#ff6a50] transition-colors">
                Request Demo
              </span>
            </Link>
          </div>
          
          {/* Right side - Illustration */}
          <div className="md:w-1/3 relative">
            <Image
              src="/images/assets/emailinvite.png"
              alt="User interacting with reviews"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadyToStandOutSection