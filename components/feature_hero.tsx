'use client'
import { Container } from "./container";
import { ChartBarIcon, CpuChipIcon, UserGroupIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Feature_hero() {
  return (
    <div className="max-w-7xl mx-auto relative md:pt-24 pt-16 md:pb-16 pb-8">
      <Container className="relative">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 space-y-6">
            {/* <div className="inline-flex items-center px-3 py-1.5 bg-[#FF7E67]/10 rounded-full mb-2">
              <span className="flex h-2 w-2 rounded-full bg-[#FF7E67] mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold text-[#FF7E67] tracking-wide">POWERFUL FEATURES</span>
            </div> */}
            <h1 className="text-4xl md:text-6xl font-bold">
              Unlock Your <span className="text-[#FF7E67]">Full Potential</span>
            </h1>
            <p className="text-lg text-gray-700">
            Unleash next-level growth with advanced tools crafted to <br /> elevate your online reputation and drive real results
            </p>
            <div className="flex gap-2 pt-4">
              <Link href="/pricing" className="bg-[#FF7E67] hover:bg-[#ff6a50] text-white font-medium py-3 px-8 rounded-full">
                See Pricing
              </Link>
              {/* <Link href="/app/auth/sign-in" className="bg-white border border-[#FF7E67] hover:bg-transparent text-[#FF7E67] font-medium py-3 px-6 rounded-full">
                Get Started
              </Link> */}
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-12 md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 bg-[#FF7E67]/10 rounded-lg flex items-center justify-center mb-3">
                  <ChartBarIcon className="h-6 w-6 text-[#FF7E67]" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Smart Analytics</h3>
                <p className="text-sm text-gray-600">Make smarter decisions with real-time, actionable insights.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 bg-[#FF7E67]/10 rounded-lg flex items-center justify-center mb-3">
                  <CpuChipIcon className="h-6 w-6 text-[#FF7E67]" />
                </div>
                <h3 className="font-semibold text-lg mb-1">AI Integration</h3>
                <p className="text-sm text-gray-600">Automate your workflow effortlessly with AI support.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 bg-[#FF7E67]/10 rounded-lg flex items-center justify-center mb-3">
                  <UserGroupIcon className="h-6 w-6 text-[#FF7E67]" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Easy Collaboration</h3>
                <p className="text-sm text-gray-600">Enhance teamwork with seamless collaboration and sharing.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 bg-[#FF7E67]/10 rounded-lg flex items-center justify-center mb-3">
                  <ShieldCheckIcon className="h-6 w-6 text-[#FF7E67]" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Secure Platform</h3>
                <p className="text-sm text-gray-600">Your data, our top priority. Experience built-in, enterprise-grade security</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}