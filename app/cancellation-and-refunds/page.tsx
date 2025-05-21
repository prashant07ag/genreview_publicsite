import { Container } from '@/components/container'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Cancellation and Refund Policy - GenReview',
        description: 'Learn about our cancellation and refund policies for GenReview services.',
        openGraph: {
            title: 'Cancellation and Refund Policy - GenReview',
            description: 'Learn about our cancellation and refund policies for GenReview services.',
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancellation-and-refunds`,
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
                        Cancellation and <br /> Refund Policy
                    </h1>
                    <p className="text-md my-4 text-gray-600">
                        We strive to make our cancellation and refund process as transparent and fair as possible. Here's everything you need to know about our policies.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    )
}

function RefundContent() {
    return (
        <div className="max-w-5xl mx-auto py-2">
            <div className="mb-8 text-gray-600">
                <div className="space-y-12 text-xl">
                    <section>
                        <div className="bg-orange-50 border-l-4 border-[#ff7e67] p-6 rounded-lg mb-8">
                            <h2 className="text-2xl font-bold mb-2">Important Notice</h2>
                            <p>
                                All refund requests are subject to review and approval at the sole discretion of SHIPSCALE SOFTWARE SOLUTIONS PRIVATE LIMITED.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Subscription Cancellation</h2>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>You can cancel your subscription at any time through your account dashboard.</li>
                            <li>Upon cancellation, you will retain access to the service until the end of your current billing period.</li>
                            <li>No partial refunds are provided for unused portions of the subscription period.</li>
                            <li>All your data will remain available for export for 30 days after cancellation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Refund Eligibility</h2>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>Refund requests will be considered if submitted within 48 hours of initial subscription purchase.</li>
                            <li>For annual subscriptions, refund requests must be made within 14 days of purchase.</li>
                            <li>Refunds may be granted if there are persistent technical issues that our team cannot resolve.</li>
                            <li>If the service experiences significant downtime (exceeding our SLA), partial refunds may be considered.</li>
                            <li>The final decision on any refund request lies with SHIPSCALE SOFTWARE SOLUTIONS PRIVATE LIMITED.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Service Issues</h2>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>If you experience any technical issues, please contact our Customer Service team immediately.</li>
                            <li>Our support team will work to resolve any service-related problems within our standard response times.</li>
                            <li>Documentation of service issues or technical problems should be provided when requesting refunds.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Refund Processing</h2>
                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li>Approved refunds will be processed within 16-30 business days.</li>
                            <li>Refunds will be issued to the original payment method used for the subscription.</li>
                            <li>Any applicable taxes or fees may be deducted from the refund amount as per local regulations.</li>
                            <li>The decision to process a refund is at the sole discretion of SHIPSCALE SOFTWARE SOLUTIONS PRIVATE LIMITED.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
                        <p className="mb-4">
                            If you have any questions about our cancellation and refund policy, we're here to help.
                        </p>
                        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-semibold mb-4 text-[#ff7e67]">Contact Support</h3>
                            <p className="mb-4">
                                Our support team is available to assist you with any questions or concerns.
                            </p>
                            <a
                                href="mailto:support@shiptoscale.com"
                                className="inline-flex items-center gap-2 bg-[#ff7e67] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff6a50] transition-colors duration-200"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Support
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default function CancellationRefundsPage() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <main>
                <div className="py-8 md:py-16">
                    <Container>
                        <RefundContent />
                    </Container>
                </div>
            </main>
        </div>
    )
} 