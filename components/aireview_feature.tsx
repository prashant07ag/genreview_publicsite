import React from 'react';
import { Container } from './container';
import { Button } from './button';

const AIReviewsFeature = () => {
    return (
        <div className="max-w-7xl mx-auto md:py-16 py-8">
            {/* Background elements */}
            <div className="absolute -left-32 top-20 w-64 h-64 rounded-full bg-[#FF7F50]/10 blur-3xl"></div>
            <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-chart-4/10 blur-3xl"></div>

            <Container className="relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center mb-12 text-center">
                    <div className="inline-flex items-center px-2.5 py-1 bg-[#FF7F50]/10 rounded-full mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-[#FF7F50] mr-2 animate-pulse"></span>
                        <span className="text-sm font-semibold text-[#FF7F50] tracking-wide">AI-POWERED REVIEWS</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-3xl leading-tight">
                        <span className="text-[#FF7F50]">5-Star Reviews</span> for your <br /> business with AI
                    </h2>

                    <p className="text-xl text-gray-600 mb-6 max-w-2xl">
                        We help businesses get more authentic-sounding customer reviews that build trust and increase conversions.
                    </p>
                </div>

                {/* Main content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left side: Benefits & CTA */}
                    <div>
                        <div className="space-y-6 mb-8">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-[#FF7F50]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-[#FF7F50]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate Hundreds of Reviews Instantly</h3>
                                    <p className="text-gray-600">Our AI can create numerous quality reviews in seconds, helping new businesses establish credibility quickly.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-chart-4/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-chart-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Customized to Your Business</h3>
                                    <p className="text-gray-600">Reviews are tailored to your specific industry, products, and services, mentioning your unique selling points.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-[#FF7F50]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-[#FF7F50]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Boost Conversion Rates</h3>
                                    <p className="text-gray-600">Businesses using our AI reviews see up to 4x increase in conversion rates and 27% higher customer trust scores.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Sample reviews */}
                    <div className="md:w-full flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Stack of review cards with overlapping effect */}
                            <div className="absolute top-4 -right-4 w-full bg-white rounded-xl shadow-xl p-4 transform rotate-6 z-10">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700">"Amazing service and attention to detail. Would definitely recommend to anyone looking for quality!"</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 rounded-full bg-[#FF7F50]/30"></div>
                                        <p className="ml-2 text-sm font-medium text-gray-900">Sarah M.</p>
                                    </div>
                                    <span className="text-xs text-gray-500">2 days ago</span>
                                </div>
                            </div>

                            <div className="absolute top-2 -left-2 w-full bg-white rounded-xl shadow-xl p-4 transform -rotate-3 z-20">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700">"The product exceeded my expectations. Incredible quality and fast shipping!"</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 rounded-full bg-chart-4/30"></div>
                                        <p className="ml-2 text-sm font-medium text-gray-900">Michael R.</p>
                                    </div>
                                    <span className="text-xs text-gray-500">Yesterday</span>
                                </div>
                            </div>

                            <div className="relative w-full bg-white rounded-xl shadow-xl p-4 z-30 hover:shadow-2xl transition-all duration-300 transform group-hover:translate-y-1 group-hover:rotate-1">
                                <div className="absolute -top-3 -left-3 bg-[#FF7F50] text-white text-xs px-2 py-1 rounded-md font-bold">
                                    NEW REVIEW
                                </div>
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700">"I've been using this service for months now and it keeps getting better. The customer support is outstanding!"</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#FF7F50] to-chart-4"></div>
                                        <p className="ml-2 text-sm font-medium text-gray-900">David K.</p>
                                    </div>
                                    <span className="text-xs text-gray-500">Just now</span>
                                </div>

                                <div className="absolute -bottom-3 -right-3 flex items-center justify-center p-2 bg-white rounded-full shadow-lg">
                                    <svg className="w-6 h-6 text-[#FF7F50]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
                    {[
                        { label: "Reviews Generated", value: "2M+" },
                        { label: "Conversion Rate", value: "+327%" },
                        { label: "Customer Satisfaction", value: "98%" },
                        { label: "Platform Integrations", value: "20+" }
                    ].map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default AIReviewsFeature;