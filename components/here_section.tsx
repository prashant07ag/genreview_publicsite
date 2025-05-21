'use client'
import { Container } from "./container";
import Image from "next/image";
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto relative py-16 md:py-24">
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
              <Link href="/app/auth/sign-in" className="bg-[#FF7E67] hover:bg-[#ff6a50] text-white font-medium py-3 px-6 rounded-full inline-flex items-center transition-all">
                Start Free Trial
              </Link>
              <Link href="/contact" className="border border-gray-300 hover:border-gray-400 font-medium py-3 px-6 rounded-full inline-flex items-center transition-all">
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 ">
            <div className="relative ">
              <Image
                src="/images/assets/heroimage.png"
                alt="Person with key illustration"
                width={500}
                height={500}
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