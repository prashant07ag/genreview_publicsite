import React from 'react'
import Image from 'next/image'
import { ChartBarIcon, ChartPieIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'

const AnalyticsDashboardSection = () => {
  const analyticFeatures = [
    {
      icon: <ChartBarIcon className="w-10 h-10 text-gray-800" />,
      title: "NPS Score Tracking",
      description: "Monitor customer satisfaction with detailed Net Promoter Score analytics"
    },
    {
      icon: <ArrowTrendingUpIcon className="w-10 h-10 text-gray-800" />,
      title: "Rating Trends",
      description: "Visualize your review performance over time with customizable date ranges"
    },
    {
      icon: <ChartPieIcon className="w-10 h-10 text-gray-800" />,
      title: "Sentiment Analysis",
      description: "Understand the emotion behind customer feedback with AI-powered analysis"
    }
  ]

  return (
    <div className="pb-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        {/* Left side - Content */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/assets/analytics_section.png"
              alt="Analytics Dashboard Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Right side - Illustration */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comprehensive Review <span className="text-[#FF7E67]">Analytics</span> & Insights
          </h2>
          
          <p className="text-gray-700 mb-6">
            Track every aspect of your review performance with detailed analytics, from NPS scores to rating trends and customer sentiment analysis.
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