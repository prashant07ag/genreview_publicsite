import React from 'react'
import Image from 'next/image'
import {
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline'

const FeaturesSection = () => {
  const features = [
    {
      icon: <ChartBarIcon className="w-10 h-10 text-gray-800" />,
      title: 'Insightful Review Analytics',
      description: 'Gain deep understanding of customer sentiments to drive business improvements.'
    },
    {
      icon: <CogIcon className="w-10 h-10 text-gray-800" />,
      title: 'Seamless Automation',
      description: 'Effortlessly collect, respond to, and monitor reviews with minimal effort.'
    },

    {
      icon: <BellAlertIcon className="w-10 h-10 text-gray-800" />,
      title: 'Instant Notifications',
      description: 'Stay updated with real-time alerts for every new review.'
    },
    {
      icon: <DocumentTextIcon className="w-10 h-10 text-gray-800" />,
      title: 'Tailored Messaging Templates',
      description: 'Engage your audience with the personalized communications at every interaction point.'
    },
    
  ]

  return (
    <div className='max-w-7xl mx-auto md:py-8 py-8'>
      <div className='flex flex-col lg:flex-row gap-8 items-center justify-center'>
        {/* Features Grid - Now on the left */}
        <div className='lg:w-1/2 flex flex-col items-center gap-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 place-items-center mx-auto'>
            {features.map((feature, index) => (
              <div key={index} className='flex flex-col gap-2 items-center text-center max-w-xs'>
                <div className='mb-2'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold'>{feature.title}</h3>
                <p className='text-sm text-gray-700'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Images on Right */}
        <div className='lg:w-1/3 flex flex-col gap-6 items-start'>
          {/* First image - Reviews Dashboard */}
          <div className='relative'>
            <Image
              src='/images/assets/feature_section.png'
              alt='Reviews Dashboard'
              width={400}
              height={400}
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
