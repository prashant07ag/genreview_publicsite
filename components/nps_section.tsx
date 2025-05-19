import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChartBarIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

const NPSFilterSection = () => {
  const npsCategories = [
    {
      title: "Detractors",
      range: "0-6",
      status: "Not eligible for review",
      icon: <XCircleIcon className="w-8 h-8 text-red-500" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "Passives",
      range: "7-8",
      status: "Optional review",
      icon: <CheckCircleIcon className="w-8 h-8 text-yellow-500" />,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      title: "Promoters",
      range: "9-10",
      status: "Priority reviews",
      icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ]

  return (
    <div className="md:py-16 py-8 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-2 md:gap-4">
        {/* Left side - Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Authentic Reviews via <span className="text-[#FF7E67]">NPS</span> Filtering
          </h2>

          <div className="flex items-center gap-3 mb-4">
            <ChartBarIcon className="w-8 h-8 text-gray-800" />
            <h3 className="text-xl font-semibold">NPS Score &gt; 7/10</h3>
          </div>
          

          <p className="text-gray-700 mb-6">
            Only customers with an NPS score above 7 can leave reviews, ensuring every review is real, positive, and reflects true satisfaction. Keep your online reputation strong, trustworthy, and glowing.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            {npsCategories.map((category, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-4 rounded-lg border flex-1 ${category.borderColor} ${category.bgColor}`}
              >
                <div className="flex items-center justify-center gap-2">
                  {category.icon}
                  <h4 className="font-semibold text-xl mb-2">{category.title}</h4>
                </div>
                <div className="font-bold text-2xl mb-2">{category.range}</div>
                <div className="text-gray-600 mt-2">{category.status}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 my-4">
            Net Promoter Score (NPS) is the gold standard system to measure customer satisfaction - and only allow reviews from those who truly love your brand.
          </p>

          <Link href="/learn-more-about-nps">
            <span className="inline-block mt-4 px-6 py-3 bg-[#FF7E67] text-white font-medium rounded-md hover:bg-[#ff6a50] transition-colors">
              Learn More About NPS
            </span>
          </Link>
        </div>

        {/* Right side - Illustration */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-full md:h-[400px] h-[300px]">
            <Image
              src="/images/assets/nps_section.png"
              alt="NPS Chart Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NPSFilterSection