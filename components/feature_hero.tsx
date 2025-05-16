'use client'
import { Container } from "./container";
import { ChartBarIcon, CpuChipIcon, UserGroupIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Feature_hero() {
  return (
    <div className="max-w-7xl mx-auto relative pt-24 pb-16">
      <Container className="relative">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-[#FF7E67]/10 rounded-full mb-2">
              <span className="flex h-2 w-2 rounded-full bg-[#FF7E67] mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold text-[#FF7E67] tracking-wide">POWERFUL FEATURES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Unlock Your <span className="text-[#FF7E67]">Full Potential</span>
            </h1>
            <p className="text-lg text-gray-700">
              Discover the tools and features designed to enhance<br />
              your experience and drive exceptional results
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#FF7E67] hover:bg-[#ff6a50] text-white font-medium py-3 px-6 rounded-full">
                Explore Features
              </button>
              <button className="border border-gray-300 hover:border-gray-400 font-medium py-3 px-6 rounded-full">
                See Pricing
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 bg-[#FF7E67]/10 rounded-lg flex items-center justify-center mb-3">
                  <ChartBarIcon className="h-6 w-6 text-[#FF7E67]" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Smart Analytics</h3>
                <p className="text-sm text-gray-600">Real-time insights to make better decisions</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg mt-6 hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 bg-[#FF7E67]/10 rounded-lg flex items-center justify-center mb-3">
                  <CpuChipIcon className="h-6 w-6 text-[#FF7E67]" />
                </div>
                <h3 className="font-semibold text-lg mb-1">AI Integration</h3>
                <p className="text-sm text-gray-600">Powerful automation for your workflow</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 bg-[#FF7E67]/10 rounded-lg flex items-center justify-center mb-3">
                  <UserGroupIcon className="h-6 w-6 text-[#FF7E67]" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Easy Collaboration</h3>
                <p className="text-sm text-gray-600">Seamless teamwork and sharing</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg mt-6 hover:shadow-xl transition-shadow duration-300">
                <div className="h-12 w-12 bg-[#FF7E67]/10 rounded-lg flex items-center justify-center mb-3">
                  <ShieldCheckIcon className="h-6 w-6 text-[#FF7E67]" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Secure Platform</h3>
                <p className="text-sm text-gray-600">Enterprise-grade security built-in</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}