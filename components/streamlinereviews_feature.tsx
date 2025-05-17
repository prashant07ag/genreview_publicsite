import React from 'react';
import Image from 'next/image';
import { Container } from './container';

const StreamlineProcessSection = () => {
  const features = [
    {
      id: 'setup',
      title: 'SETUP',
      subtitle: 'Add Your Business Details',
      description: 'Easily set up your business profile with detailed information about your services, locations, and specialties. Our AI uses this to generate more relevant and authentic reviews.',
      imagePath: '/images/assets/bussinessdetail.png',
    },
    {
      id: 'collection',
      title: 'COLLECTION',
      subtitle: 'Custom Review Links & QR Codes',
      description: 'Generate unique review collection URLs and QR codes to display at your business locations. Make it easy for customers to leave reviews while they\'re still at your venue.',
      imagePath: '/images/assets/qrscan.png',
    },
    {
      id: 'subscriptions',
      title: 'SUBSCRIPTIONS',
      subtitle: 'Flexible Review Plans',
      description: 'Scale your review collection with plans supporting up to 5,000 reviews per month across all your properties. Choose the perfect plan for your business needs.',
      imagePath: '/images/assets/bussinessprogress.png',
    },
    {
      id: 'integration',
      title: 'INTEGRATION',
      subtitle: 'Multi-platform Integration',
      description: 'Seamlessly connect with major review platforms like Google Maps, Yelp, TripAdvisor, Booking.com, Airbnb, JustDial,zomato, swiggy and more.',
      imagePath: '/images/assets/multiplatform.png',
    }
  ];

  return (
    <Container className="max-w-7xl mx-auto py-16">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center px-2.5 py-1 bg-[#FF7F50]/10 rounded-full mb-4">
          <span className="flex h-2 w-2 rounded-full bg-[#FF7F50] mr-2 animate-pulse"></span>
          <span className="text-sm font-semibold text-[#FF7F50] tracking-wide">Bussiness Reputation Management</span>
        </div>
        <h2 className="text-2xl sm:text-5xl font-bold text-gray-900">
          Streamline your <span className="text-[#FF7E67]">review collection</span> process.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
        {features.map((feature, index) => (
          <div key={feature.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Content section - alternates left/right based on index */}
            <div className={`order-2 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-2'}`}>
              <div className="mb-1">
                <span className="text-xs font-semibold text-gray-500">{feature.title}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.subtitle}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>

            {/* Image section - alternates right/left based on index */}
            <div className={`order-1 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-1'} flex justify-center`}>
              <div className="relative w-full max-w-xs aspect-square">
                <Image
                  src={feature.imagePath}
                  alt={feature.title}
                  fill
                  className="object-contain"
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