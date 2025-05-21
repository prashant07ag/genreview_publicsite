import React from 'react';
import Image from 'next/image';
import { Container } from './container';

const StreamlineProcessSection = () => {
  const features = [
    {
      id: 'setup',
      title: 'SETUP',
      subtitle: 'Add Your Business Details',
      description: 'Set up your business profile in minutes! Add your services, locations, and specialties.',
      imagePath: '/images/assets/bussinessdetail.png',
    },
    {
      id: 'collection',
      title: 'COLLECTION',
      subtitle: 'Custom Review QR Codes',
      description: 'Display smart URLs and QR codes at your locations to make it effortless for customers to leave reviews.',
      imagePath: '/images/assets/qrscan.png',
    },
    {
      id: 'subscriptions',
      title: 'SUBSCRIPTIONS',
      subtitle: 'Flexible Review Plans',
      description: 'From startups to enterprise-level operations, Choose from scalable plans supporting up to 5,000 reviews per month across all your locations.',
      imagePath: '/images/assets/bussinessprogress.png',
    },
    {
      id: 'integration',
      title: 'INTEGRATION',
      subtitle: 'Multi-platform Integration',
      description: 'Effortlessly connect to all major review sites- Google Maps, Yelp, TripAdvisor, Booking.com, Airbnb, JustDial, Zomato, Swiggy, and many more.',
      imagePath: '/images/assets/multiplatform.png',
    }
  ];

  return (
    <Container className="max-w-6xl mx-auto py-16">
      <div className="mb-2 md:mb-12 text-center">
        <div className="inline-flex items-center px-2.5 py-1 bg-[#FF7F50]/10 rounded-full mb-4">
          <span className="flex h-2 w-2 rounded-full bg-[#FF7F50] mr-2 animate-pulse"></span>
          <span className="text-sm font-semibold text-[#FF7F50] tracking-wide">Bussiness Reputation Management</span>
        </div>
        <h2 className="text-2xl sm:text-5xl font-bold text-gray-900">
        Effortless <span className="text-[#FF7E67]">Review Collection</span> Starts here
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-8">
        {features.map((feature, index) => (
          <div key={feature.id} className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            {/* Content section - alternates left/right based on index */}
            <div className={`order-2 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-2'}`}>
              <div className="mb-1">
                <span className="text-xs font-semibold text-gray-500">{feature.title}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.subtitle}</h3>
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
            </div>

            {/* Image section - alternates right/left based on index */}
            <div className={`order-1 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-1'} flex justify-center`}>
              <div className="relative h-[200px] w-[200px] mx-auto">
                <Image
                  src={feature.imagePath}
                  alt={feature.title}
                  fill
                  className="object-cover p-4"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StreamlineProcessSection;