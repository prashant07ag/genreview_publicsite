import React from 'react'
import Image from 'next/image'

const BusinessAuditSection = () => {
  const statistics = [
    {
      value: "+70%",
      description: "Increase in search visibility with optimized Google Business Profile"
    },
    {
      value: "60%",
      description: "More customer engagement through managed review responses",
      highlighted: true
    },
    {
      value: "+45%",
      description: "Higher conversion rate from Google Maps searches"
    }
  ]

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Businesses are <span className="text-[#FF7E67]">improving visibility</span> <br />with astounding speed
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Complete business profile management and Google audit services powered by AI. Optimize your 
            online presence as effectively as dedicated marketing teams, with scalable solutions for businesses of any size.
          </p>
        </div>

        {/* Three-column section with images on sides */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side image */}
          <div className="md:w-1/4">
            <div className="relative h-[250px] w-full">
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
                className={`p-6 rounded-lg text-center ${
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
          <div className="md:w-1/4">
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