import { Container } from '@/components/container'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Terms of Service - GenReview',
        description: 'Read about the terms and conditions for using GenReview services.',
        openGraph: {
            title: 'Terms of Service - GenReview',
            description: 'Read about the terms and conditions for using GenReview services.',
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/tos`,
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
                        Terms of Service
                    </h1>
                    <p className="text-md my-4 text-gray-600">Last Updated: January 10, 2025</p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    )
}

function TermsContent() {
    return (
        <div className="max-w-5xl mx-auto py-2">
            <div className="mb-8 text-gray-600">
                <div className="space-y-12 text-xl">
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Agreement to Terms</h2>
                        <p className="mb-8">
                            By accessing or using GenReview, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Use of Service</h2>

                        <h3 className="text-2xl font-semibold mb-4">Account Registration</h3>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>You must provide accurate and complete information when creating an account</li>
                            <li>You are responsible for maintaining the security of your account</li>
                            <li>You must notify us immediately of any unauthorized access</li>
                            <li>We reserve the right to suspend or terminate accounts</li>
                        </ul>

                        <h3 className="text-2xl font-semibold mb-4">Acceptable Use</h3>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>You may not use the service for any illegal purposes</li>
                            <li>You may not interfere with the service's operation</li>
                            <li>You may not attempt to gain unauthorized access</li>
                            <li>You may not use the service to harm others</li>
                        </ul>

                        <h3 className="text-2xl font-semibold mb-4">Subscription and Payments</h3>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>Subscription fees are billed in advance on a recurring basis</li>
                            <li>You may cancel your subscription at any time</li>
                            <li>Refunds are provided according to our refund policy</li>
                            <li>We reserve the right to modify pricing with notice</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Intellectual Property</h2>
                        <p className="mb-8">
                            The service and its original content, features, and functionality are owned by Ship Scale Software Solutions Pvt Ltd and are protected by international copyright, trademark, and other intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Limitation of Liability</h2>
                        <p className="mb-8">
                            Ship Scale Software Solutions Pvt Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Termination</h2>
                        <p className="mb-8">
                            We may terminate or suspend your account and access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Changes to Terms</h2>
                        <p className="mb-8">
                            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <p className="text-2xl">
                            <a
                                href="mailto:legal@shiptoscale.com"
                                className="text-[#ff7e67] hover:underline"
                            >
                                legal@shiptoscale.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default function TermsOfServicePage() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <main>
                <div className="py-16 sm:py-24">
                    <Container>
                        <TermsContent />
                    </Container>
                </div>
            </main>
        </div>
    )
} 