'use client'
import React from 'react';
import { Container } from './container';
import Image from 'next/image';

const PropertyManagementFeature = () => {
    return (        
            <div className="max-w-7xl mx-auto py-16">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left content: Title and description */}
                    <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-8">
                        
                        <h2 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
                            Manage All Your <span className="text-[#FF7F50]">Business Properties</span> in One Place
                        </h2>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            Add and manage multiple business locations, franchises, or properties. Generate unique review collection campaigns for each property.
                        </p>
                        
                        {/* Feature points in grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-[#FF7F50]/20">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-10 h-10 rounded-full bg-[#FF7F50]/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[#FF7F50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900">Multiple Locations</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Seamlessly manage all your business locations from one dashboard.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-[#FF7F50]/20">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-10 h-10 rounded-full bg-[#FF7F50]/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[#FF7F50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900">Custom QR Codes</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Generate unique QR codes for each property to collect reviews.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-[#FF7F50]/20">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-10 h-10 rounded-full bg-[#FF7F50]/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[#FF7F50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900">Review Campaigns</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Create targeted review collection campaigns for each property.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-[#FF7F50]/20">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-10 h-10 rounded-full bg-[#FF7F50]/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[#FF7F50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900">Performance Analytics</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Track review performance metrics for each business property.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="mt-10 inline-flex items-center bg-[#FF7F50] text-white px-6 py-3 rounded-lg text-sm font-medium w-fit hover:bg-[#FF7F50]/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Get Started
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                    
                    {/* Right content: Frame for screenshot */}
                    <div className="hidden md:block md:w-1/2 relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FF7F50]/5 rounded-full filter blur-xl z-0"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FF7F50]/5 rounded-full filter blur-xl z-0"></div>
                        
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-0 overflow-hidden relative z-10">
                            <div className="bg-[#FF7F50] h-10 w-full flex items-center px-4">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                                </div>
                            </div>
                            
                            <div className="h-[300px] relative">
                                <Image 
                                    src="/images/assets/properties.png" 
                                    alt="Property Management Dashboard" 
                                    layout="fill" 
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PropertyManagementFeature;

