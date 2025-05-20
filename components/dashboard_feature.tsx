'use client';
import React, { useState } from 'react';
import { Container } from './container';

const DashboardTrends = () => {
    const [timeRange, setTimeRange] = useState('Last 30 days');

    return (
        <Container className="md:py-8">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-6 bg-gradient-to-br from-white to-gray-50 py-10 px-5 rounded-lg border border-gray-200 shadow-sm">
                {/* Content about dashboard benefits */}
                <div className="md:w-1/2">
                    <div className="inline-flex items-center px-2.5 py-1 bg-[#FF7F50]/10 rounded-full mb-3">
                        <span className="flex h-2 w-2 rounded-full bg-[#FF7F50] mr-2 animate-pulse"></span>
                        <span className="text-sm font-semibold text-[#FF7F50] tracking-wide">REAL-TIME ANALYTICS</span>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                        Unlock Valuable Customer <span className="text-[#FF7F50]">Insights</span>
                    </h2>
                    <p className="text-base text-gray-700 mb-4 border-b border-gray-100 pb-4">
                        Our comprehensive dashboard transforms customer feedback into actionable intelligence, helping you make informed business decisions.
                    </p>

                    <div className="space-y-4 mb-5">
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 h-8 w-8 bg-[#FF7F50]/10 rounded-full flex items-center justify-center mt-0.5">
                                <svg className="h-4 w-4 text-[#FF7F50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-base font-medium text-gray-800 mb-0.5">Visualize Performance Trends</p>
                                <p className="text-sm text-gray-600 leading-relaxed">Track NPS and rating metrics across time periods, locations, and customer segments with intuitive charts.</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="flex-shrink-0 h-8 w-8 bg-[#FF7F50]/10 rounded-full flex items-center justify-center mt-0.5">
                                <svg className="h-4 w-4 text-[#FF7F50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-base font-medium text-gray-800 mb-0.5">Measure Marketing Effectiveness</p>
                                <p className="text-sm text-gray-600 leading-relaxed">See complete conversion funnel from QR scans to submissions to published reviews. Optimize your ROI.</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="flex-shrink-0 h-8 w-8 bg-[#FF7F50]/10 rounded-full flex items-center justify-center mt-0.5">
                                <svg className="h-4 w-4 text-[#FF7F50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-base font-medium text-gray-800 mb-0.5">Detailed Question Analysis</p>
                                <p className="text-sm text-gray-600 leading-relaxed">See exactly which aspects of your business need improvement with question-level performance metrics.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FF7F50]/5 p-4 rounded-lg border border-[#FF7F50]/10 mb-4 flex gap-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <svg className="h-6 w-6 text-[#FF7F50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-800 mb-1">Our customers see results:</p>
                            <p className="text-sm text-gray-600">Businesses using our dashboard report an average <span className="text-[#FF7F50] font-semibold">27% increase</span> in positive reviews and <span className="text-[#FF7F50] font-semibold">23% improvement</span> in customer retention.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="flex-grow py-3 px-5 bg-[#FF7F50] text-white rounded-md text-base font-medium hover:bg-[#FF6A3C] transition-colors shadow-md">
                            Start Free 14-Day Trial
                        </button>
                        <button className="flex items-center justify-center py-3 px-5 border border-gray-200 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            <svg className="h-5 w-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Dashboard Preview */}
                <div className="hidden md:block md:w-1/2">
                    <div className="mb-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <select
                                    value={timeRange}
                                    onChange={(e) => setTimeRange(e.target.value)}
                                    className="bg-white border border-gray-200 rounded-md py-1.5 px-3 pr-6 text-sm appearance-none focus:outline-none"
                                >
                                    <option>Last 30 days</option>
                                    <option>Last 7 days</option>
                                </select>
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center gap-1 text-sm">
                                <div className="flex items-center border border-gray-200 rounded-md">
                                    <input type="date" className="w-32 px-2 py-1.5 text-sm focus:outline-none" defaultValue="2025-04-14" />
                                </div>
                                <span className="text-sm text-gray-500">to</span>
                                <div className="flex items-center border border-gray-200 rounded-md">
                                    <input type="date" className="w-32 px-2 py-1.5 text-sm focus:outline-none" defaultValue="2025-05-14" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Metric Cards */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-3.5">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Total QR Scans</p>
                                    <h3 className="text-2xl font-bold mt-1">154</h3>
                                </div>
                                <div className="text-[#FF7F50]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <rect x="7" y="7" width="3" height="3"></rect>
                                        <rect x="14" y="7" width="3" height="3"></rect>
                                        <rect x="7" y="14" width="3" height="3"></rect>
                                        <rect x="14" y="14" width="3" height="3"></rect>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-3.5">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Feedback Submissions</p>
                                    <h3 className="text-2xl font-bold mt-1">13</h3>
                                </div>
                                <div className="text-[#FF7F50]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-3.5">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Generated Reviews</p>
                                    <h3 className="text-2xl font-bold mt-1">14</h3>
                                </div>
                                <div className="text-[#FF7F50]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* NPS Trend */}
                        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-1">
                                    <h3 className="text-base font-bold text-gray-900">NPS Trend</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>

                                <div className="relative">
                                    <select className="bg-white border border-gray-200 rounded-md py-1.5 px-2 pr-6 text-sm appearance-none focus:outline-none">
                                        <option>Overall</option>
                                    </select>
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="h-44 relative">
                                {/* Chart visualization */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-36 relative">
                                        {/* Y axis */}
                                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
                                            <div>100</div>
                                            <div>0</div>
                                            <div>-100</div>
                                        </div>

                                        {/* Chart lines - simplified */}
                                        <div className="absolute inset-0 ml-6 mr-2">
                                            <svg viewBox="0 0 400 200" className="w-full h-full">
                                                <path d="M0,100 C50,150 100,50 150,100 S250,150 300,50 L400,0" stroke="#FF7F50" fill="none" strokeWidth="3" />
                                                <path d="M0,0 C50,0 100,0 150,50 S250,100 300,150 L400,200" stroke="#FFB347" fill="none" strokeWidth="3" />
                                                <path d="M0,0 C70,20 120,100 200,50 S300,50 400,0" stroke="#66BB6A" fill="none" strokeWidth="3" />
                                                <path d="M0,0 C70,20 150,150 250,100 S350,0 400,50" stroke="#42A5F5" fill="none" strokeWidth="3" />
                                            </svg>
                                        </div>

                                        {/* X-axis labels */}
                                        <div className="absolute bottom-0 left-6 right-0 flex justify-between text-xs text-gray-500">
                                            <div>W16</div>
                                            <div>W17</div>
                                            <div>W18</div>
                                            <div>W19</div>
                                            <div>W20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-2">
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 bg-[#66BB6A] mr-1.5 rounded-full"></span>
                                    <span className="text-xs text-gray-700">Most liked</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 bg-[#FFB347] mr-1.5 rounded-full"></span>
                                    <span className="text-xs text-gray-700">Recommend</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 bg-[#FF7F50] mr-1.5 rounded-full"></span>
                                    <span className="text-xs text-gray-700">Experience</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 bg-[#42A5F5] mr-1.5 rounded-full"></span>
                                    <span className="text-xs text-gray-700">Satisfaction</span>
                                </div>
                            </div>
                        </div>

                        {/* Rating Trend */}
                        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-1">
                                    <h3 className="text-base font-bold text-gray-900">Rating Trend</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>

                                <div className="relative">
                                    <select className="bg-white border border-gray-200 rounded-md py-1.5 px-2 pr-6 text-sm appearance-none focus:outline-none">
                                        <option>Overall</option>
                                    </select>
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="h-44 relative">
                                {/* Chart visualization */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-36 relative">
                                        {/* Y axis */}
                                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
                                            <div>5</div>
                                            <div>3</div>
                                            <div>0</div>
                                        </div>

                                        {/* Chart lines - simplified */}
                                        <div className="absolute inset-0 ml-6 mr-2">
                                            <svg viewBox="0 0 400 200" className="w-full h-full">
                                                <path d="M0,0 C50,0 100,0 200,20 S350,0 400,20" stroke="#42A5F5" fill="none" strokeWidth="3" />
                                                <path d="M0,60 C50,60 100,60 200,100 S350,80 400,20" stroke="#FFB347" fill="none" strokeWidth="3" />
                                                <path d="M0,40 C70,40 120,40 200,40 S300,60 400,0" stroke="#66BB6A" fill="none" strokeWidth="3" />
                                                <path d="M0,0 C70,0 150,0 250,40 S350,60 400,100" stroke="#FF7F50" fill="none" strokeWidth="3" />
                                            </svg>
                                        </div>

                                        {/* X-axis labels */}
                                        <div className="absolute bottom-0 left-6 right-0 flex justify-between text-xs text-gray-500">
                                            <div>W16</div>
                                            <div>W17</div>
                                            <div>W18</div>
                                            <div>W19</div>
                                            <div>W20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-2">
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 bg-[#42A5F5] mr-1.5 rounded-full"></span>
                                    <span className="text-xs text-gray-700">Pizza quality</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 bg-[#FFB347] mr-1.5 rounded-full"></span>
                                    <span className="text-xs text-gray-700">Product quality</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 bg-[#FF7F50] mr-1.5 rounded-full"></span>
                                    <span className="text-xs text-gray-700">Experience</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-block w-3 h-3 bg-[#66BB6A] mr-1.5 rounded-full"></span>
                                    <span className="text-xs text-gray-700">Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DashboardTrends;