'use client'
import { Container } from "./container";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto relative py-8 md:py-16">
      <Container className="relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Get <span className="text-[#ff6a50]">5★ Reviews</span> in Under 5 Minutes
            </h2>
            <p className="text-lg text-gray-700">
              A new way to connect with your audience
              through AI-driven interaction
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#FF7E67] hover:bg-[#ff6a50] text-white font-medium py-3 px-6 rounded-full">
                Start Free Trial
              </button>
              <button className="border border-gray-300 hover:border-gray-400 font-medium py-3 px-6 rounded-full">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 ">
            <div className="relative h-80 w-80 md:h-92 md:w-92 mx-auto bg-gray-200 rounded-full">
              <Image
                src="/images/assets/hero-vector.png"
                alt="Person with key illustration"
                fill
                className="object-contain scale-125"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}