import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Contact Us - GenReview',
        description: 'Get in touch with us for any questions or inquiries about GenReview.',
        openGraph: {
            title: 'Contact Us - GenReview',
            description: 'Get in touch with us for any questions or inquiries about GenReview.',
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
            images: [{
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/previews/default.png`,
            }],
        },
    }
}

function Hero() {
    return (
        <div className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 pb-16 pt-24 sm:pb-24 sm:pt-24">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-semibold text-[#ff7e67] sm:text-5xl">
                        Contact Us
                    </h1>
                    <p className="text-md my-4 text-gray-600">
                        Have questions about GenReview? We'd love to hear from you.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    )
}

function ContactForm() {
    return (
        <div className="w-full lg:w-2/3 max-w-5xl mx-auto px-4">
            <form
                action="https://formspree.io/f/mwppanro"
                method="POST"
                className="relative space-y-6 p-8 sm:p-10 border border-gray-100 rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
            >
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-[#FF7E67] to-rose-500">Get in Touch</h2>
                    <p className="mt-2 text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-700">
                            First Name *
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            required
                            minLength={2}
                            placeholder="John"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7e67] focus:border-[#ff7e67] transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-700">
                            Last Name *
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            required
                            minLength={2}
                            placeholder="Doe"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7e67] focus:border-[#ff7e67] transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john.doe@example.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7e67] focus:border-[#ff7e67] transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                    />
                </div>

                {/* Company */}
                <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">
                        Company Name *
                    </label>
                    <input
                        id="company"
                        name="company"
                        required
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7e67] focus:border-[#ff7e67] transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+1 (555) 123-4567"
                        pattern="[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7e67] focus:border-[#ff7e67] transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                    />
                </div>

                {/* Interest */}
                <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2 text-gray-700">
                        What are you interested in? *
                    </label>
                    <select
                        id="interest"
                        name="interest"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7e67] focus:border-[#ff7e67] transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                    >
                        <option value="">Select an option</option>
                        <option value="demo">Request a Demo</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        minLength={10}
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7e67] focus:border-[#ff7e67] transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#FF7E67] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#ff6a50] focus:outline-none focus:ring-2 focus:ring-[#ff7e67] focus:ring-offset-2 transition-all duration-200 shadow-lg relative overflow-hidden group"
                >
                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2">
                        Send Message
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </button>
            </form>
        </div>
    )
}

function CompanyInfo() {
    return (
        <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0 self-start">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-50 hover:shadow-2xl transition-all duration-300">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-orange-50 to-rose-50 px-8 py-7 border-b border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                        <span className="bg-white/70 backdrop-blur-sm p-2 rounded-full">
                            <svg
                                className="h-6 w-6 text-[#ff7e67]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </span>
                        Company Information
                    </h2>
                </div>

                {/* Content Section */}
                <div className="p-8">
                    <div className="space-y-8">
                        {/* Company Name */}
                        <div className="flex items-start gap-5">
                            <div className="p-3 bg-gradient-to-br from-orange-50 to-rose-100 rounded-xl shadow-md">
                                <svg
                                    className="h-6 w-6 text-[#ff7e67]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#ff7e67]">Legal Entity Name</p>
                                <p className="mt-1 text-gray-900 font-medium text-md">
                                    SHIPSCALE SOFTWARE SOLUTIONS PRIVATE LIMITED
                                </p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-5">
                            <div className="p-3 bg-gradient-to-br from-orange-50 to-rose-100 rounded-xl shadow-md">
                                <svg
                                    className="h-6 w-6 text-[#ff7e67]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#ff7e67]">Operational Address</p>
                                <p className="mt-1 text-gray-900 font-medium text-md">
                                    ZENITH COWORKING 7 FLOOR, CURRENCY TOWER TELIBANDHA<br />
                                    Raipur, CHATTISGARH 492001
                                </p>
                                <div className="mt-2">
                                    <a
                                        href="https://maps.google.com/?q=ZENITH+COWORKING+7+FLOOR,+CURRENCY+TOWER+TELIBANDHA,+Raipur,+CHATTISGARH+492001"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm text-[#ff7e67] hover:text-[#ff6a50] transition-colors duration-200"
                                    >
                                        <span className="font-medium text-md">View on map</span>
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-5">
                            <div className="p-3 bg-gradient-to-br from-orange-50 to-rose-100 rounded-xl shadow-md">
                                <svg
                                    className="h-6 w-6 text-[#ff7e67]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#ff7e67]">Email</p>
                                <a
                                    href="mailto:support@shiptoscale.com"
                                    className="mt-1 text-gray-900 hover:text-[#ff6a50] transition-colors duration-200 flex items-center gap-1 text-md font-medium"
                                >
                                    support@shiptoscale.com
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="bg-gradient-to-r from-gray-50 via-orange-50 to-rose-50 px-8 py-5 border-t border-gray-100 mt-auto">
                    <p className="text-sm text-gray-700">
                        For any inquiries, please feel free to reach out to us via email. We typically respond within 24 hours.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function ContactPage() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <div className="max-w-7xl mx-auto py-8 md:py-16">
                    <div className="flex flex-col-reverse lg:flex-row gap-12 md:gap-8">
                        <CompanyInfo />
                        <ContactForm />
                    </div>
                </div>
        </div>
    )
}