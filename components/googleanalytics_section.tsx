import React from 'react'
import Image from 'next/image'

const BusinessAuditSection = () => {
  const statistics = [
    {
      value: "50%",
      description: "Get 50% more reviews with our review management system.",
    },
    {
      value: "3x",
      description: "Get 3x better insights into your business performance",
      highlighted: true
    },
    {
      value: "+45%",
      description: "Higher conversion rate from Google Maps searches."
    }
  ]

  return (
    <div className="md:py-16 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="md:text-center text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Accelerate Your <span className="text-[#FF7E67]">Business </span> Visibility
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
          Leverage AI-powered online reputation management to enhance your online presence, matching the efficiency of top-tier marketing teams—scalable for businesses of all sizes.
          </p>
        </div>

        {/* Three-column section with images on sides */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left side image */}
          <div className="w-full md:w-1/4">
            <div className="relative md:h-[250px] w-full">
              <Image
                src="/images/assets/google_section2.png"
                alt="Google Business Management"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Statistics in the middle */}
          <div className="md:w-2/4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg text-center ${
                  stat.highlighted 
                    ? "bg-[#FF7E67] text-white shadow-lg" 
                    : "bg-gray-50 text-gray-800 border border-gray-200"
                }`}
              >
                <div className="text-4xl md:text-5xl font-bold mb-3">{stat.value}</div>
                <p className={`text-sm ${stat.highlighted ? "text-white" : "text-gray-600"}`}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right side image */}
          <div className="w-full hidden md:block md:w-1/4">
            <div className="relative h-[250px] w-full">
              <Image
                src="/images/assets/google_section.png"
                alt="Google Audit Services"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessAuditSection