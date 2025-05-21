import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Privacy Policy - GenReview',
        description: 'Learn about how we collect, use, and protect your personal information at GenReview.',
        openGraph: {
            title: 'Privacy Policy - GenReview',
            description: 'Learn about how we collect, use, and protect your personal information at GenReview.',
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
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
                        Privacy Policy
                    </h1>
                    <p className="text-md my-4 text-gray-600">Last Updated: January 10, 2025</p>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    )
}

function PolicyContent() {
    return (
        <div className="max-w-5xl mx-auto py-2">
            <div className="mb-8 text-gray-600">
                <div className="space-y-12 text-xl">
                    <div>
                        <p className="mb-8 text-2xl">
                            At Ship Scale Software Solutions Pvt Ltd, we are committed to protecting your privacy and maintaining the security of your personal information. This Privacy Policy outlines our practices for collecting, using, storing, and safeguarding your data while using our review generation platform.
                        </p>
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>
                        
                        <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>Name and email address when you create an account</li>
                            <li>Billing information when you subscribe to our services</li>
                            <li>Property information that you add to our platform</li>
                            <li>Usage data and analytics</li>
                        </ul>

                        <h3 className="text-2xl font-semibold mb-4">Automatically Collected Information</h3>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>Device and browser information</li>
                            <li>IP address and location data</li>
                            <li>Usage patterns and preferences</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">How We Use Your Information</h2>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>To provide and maintain our services</li>
                            <li>To process your transactions</li>
                            <li>To send you service-related communications</li>
                            <li>To improve our platform and user experience</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Data Sharing and Disclosure</h2>
                        <p className="mb-4">We may share your information with:</p>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li><span className="font-semibold">Service Providers:</span> Service providers and business partners</li>
                            <li><span className="font-semibold">Payment Processors:</span> Payment processors for billing purposes</li>
                            <li><span className="font-semibold">Legal Authorities:</span> Legal authorities when required by law</li>
                            <li><span className="font-semibold">Third Parties:</span> Third parties with your explicit consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Data Security</h2>
                        <p className="mb-8">
                            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Your Rights</h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to data processing</li>
                            <li>Export your data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Analytics and Third-Party Services</h2>
                        <p className="mb-4">
                            We use Google Analytics to understand how visitors interact with our website. Google Analytics collects:
                        </p>
                        <ul className="list-disc pl-8 mb-4 space-y-2">
                            <li>Pages visited and time spent on each page</li>
                            <li>Your approximate geographic location</li>
                            <li>The device and browser you use</li>
                            <li>Referral sources (how you found our website)</li>
                        </ul>
                        <p className="mb-8">
                            You can opt-out of Google Analytics tracking by using the Google Analytics Opt-out Browser Add-on or by enabling "Do Not Track" in your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Cookies</h2>
                        <p className="mb-8">
                            We use cookies and similar tracking technologies to improve your browsing experience. You can control cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Changes to This Policy</h2>
                        <p className="mb-8">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-2xl">
                            <a 
                                href="mailto:privacy@shiptoscale.com" 
                                className="text-[#ff7e67] hover:underline"
                            >
                                privacy@shiptoscale.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default function PrivacyPolicyPage() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <main>
                <div className="py-16 sm:py-24">
                    <Container>
                        <PolicyContent />
                    </Container>
                </div>
            </main>
        </div>
    )
} 