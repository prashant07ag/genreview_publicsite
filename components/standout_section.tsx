import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const ReadyToStandOutSection = () => {
  return (
    <div className="py-4 bg-gradient-to-br from-orange-50 via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF7E67] to-transparent opacity-30"></div>
      <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-yellow-200 opacity-20 blur-3xl"></div>
      <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-[#FF7E67] opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left side - Content */}
            <div className="md:w-7/12 space-y-6">
              <span className="inline-block px-4 py-1 bg-orange-100 text-[#FF7E67] font-medium rounded-full text-sm mb-2">
                Take The Next Step
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Ready to Rise Above the Competition?
              </h2>

              <p className="text-gray-700 text-lg max-w-lg">
                Join the growing wave of businesses that have boosted their online reputation and customer engagement- powered by our smart, review-driven ai enabled platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF7E67] text-white font-medium rounded-md hover:bg-[#ff6a50] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    Request Demo
                    <ArrowRightIcon className="w-5 h-5" />
                  </span>
                </Link>

                {/* <Link href="/testimonials">
                  <span className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 bg-white text-gray-800 font-medium rounded-md hover:bg-gray-50 transition-all">
                    See Success Stories
                  </span>
                </Link> */}
              </div>
            </div>

            {/* Right side - Illustration with decorative elements */}
            <div className="md:w-1/3 relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-200 rounded-full"></div>

              <div className="relative z-10 bg-white rounded-xl shadow-lg px-4 transform rotate-1">
                <Image
                  src="/images/assets/emailinvite.png"
                  alt="User interacting with reviews"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadyToStandOutSection