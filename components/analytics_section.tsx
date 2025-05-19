import React from 'react'
import Image from 'next/image'
import { ChartBarIcon, ChartPieIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'

const AnalyticsDashboardSection = () => {
  const analyticFeatures = [
    {
      icon: <ChartBarIcon className="w-10 h-10 text-gray-800" />,
      title: "NPS Score Tracking",
      description: "Gauge customer satisfaction at a glance with real-time Net Promoter Score tracking,"
    },
    {
      icon: <ArrowTrendingUpIcon className="w-10 h-10 text-gray-800" />,
      title: "Rating Trends Over Time",
      description: "Spot patterns and performance shifts instantly."
    },
    {
      icon: <ChartPieIcon className="w-10 h-10 text-gray-800" />,
      title: "AI-Powered Sentiment Analysis",
      description: "Go beyond the star ratings understand the true sentiment behind every review."
    }
  ]

  return (
    <div className="md:py-16 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-2">
        {/* Left side - Content */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-full md:h-[400px] h-[300px]">
            <Image
              src="/images/assets/analytics_section.png"
              alt="Analytics Dashboard Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Right side - Illustration */}
        <div className="w-full md:w-1/2 space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
           In-Depth <span className="text-[#FF7E67]">Review Analytics</span> & Insights
          </h2>
          
          <p className="text-gray-700 mb-6">
          Monitor every facet of your review performance with advanced analytics, including NPS tracking, rating trends, and AI-driven sentiment analysis.
          </p>
          
          <div className="space-y-6 mt-8">
            {analyticFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboardSection