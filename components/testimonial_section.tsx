import React from 'react'
import Image from 'next/image'

const TestimonialsSection = () => {
  const testimonials = [
    {
      avatar: '/images/assets/avatar1.png',
      stars: 5,
      quote: 'The platform is user-friendly and has greatly improved our online experience.',
      name: 'James T.'
    },
    {
      avatar: '/images/assets/avatar2.png',
      stars: 5,
      quote: 'We\'ve seen a significant increase in positive reviews. Highly recommend!',
      name: 'Sarah W.'
    },
    {
      avatar: '/images/assets/avatar3.png',
      stars: 5,
      quote: 'Excellent tool for managing reviews and gaining valuable insights.',
      name: 'Sam J.'
    },
  ]

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ))
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What customers are saying</h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white py-10 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full justify-between border border-orange-100 hover:border-orange-200 transform hover:-translate-y-1"
            >
              <div className="relative w-28 h-28 mb-5">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full -z-10 transform scale-110"></div>
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  fill
                  className="object-cover rounded-full ring-4 ring-white shadow-md"
                />
              </div>
              
              <div className="flex mb-4 bg-yellow-50 px-3 py-1 rounded-full">
                {renderStars(testimonial.stars)}
              </div>
              
              <p className="text-gray-700 mb-6 flex-grow italic text-lg">"{testimonial.quote}"</p>
              
              <div className="w-12 h-1 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full mb-4"></div>
              <p className="font-semibold text-gray-800 mt-auto">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection