import { Container } from '@/components/container'
import { Metadata } from 'next'
import { Check, Star, Sparkles, Shield, Clock, Zap, CreditCard, ChevronRightIcon } from 'lucide-react'
import { PricingSwitcher } from '@/components/pricing_switcher'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Pricing - GenReview',
  description: 'Simple and transparent pricing plans for GenReview.',
}

interface PlanProps {
  name: string;
  basePrice: {
    usd: number | 'custom';
    inr: number | 'custom';
  };
  description: string;
  features: string[];
  isPopular?: boolean;
  color?: string;
  icon?: React.ReactNode;
}

const plans = [
  {
    name: 'Trial',
    basePrice: {
      usd: 0,
      inr: 0,
    },
    description: 'Perfect for trying out our services',
    features: [
      '1 Business Property',
      '15-Day Premium Data Retention',
      'Essential Analytics Dashboard',
      'Standard Support'
    ],
    color: 'from-blue-500/20 to-indigo-500/20',
    icon: <Clock className="h-5 w-5 text-blue-500" />,
  },
  {
    name: 'Pro',
    basePrice: {
      usd: 49,
      inr: 3999,
    },
    description: 'For growing businesses and teams',
    features: [
      '1 Business Property',
      'Full Year Data Preservation',
      'Dedicated Priority Support',
      'Comprehensive Analytics Reports',
    ],
    isPopular: true,
    color: 'from-violet-500/20 to-purple-500/20',
    icon: <Sparkles className="h-5 w-5 text-purple-500" />,
  },
  {
    name: 'Custom',
    basePrice: {
      usd: 'custom',
      inr: 'custom',
    },
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited Business Properties',
      'Extended 3-Year Data Retention',
      'Dedicated Account Manager',
      'Enterprise Integrations',
      'Advanced Analytics & Reporting',
    ],
    color: 'from-orange-500/20 to-pink-500/20',
    icon: <Shield className="h-5 w-5 text-pink-500" />,
  },
];

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pb-16 pt-24 sm:pb-24 sm:pt-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold text-[#ff7e67] sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="text-md my-4 text-gray-600">
            All the tools you need to streamline your workflow, with plans designed to grow with your business.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}

function PricingSection() {
  return (
    <div className="max-w-5xl mx-auto py-2">
      <div className="mb-8 text-gray-600">
        <PricingSwitcher plans={plans as PlanProps[]} />

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#ff7e67]/10 via-white to-[#ff7e67]/10 border border-gray-200/70 rounded-xl p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-600">
              <div className="flex-shrink-0 bg-indigo-100/50 p-2 rounded-full">
                <InformationCircleIcon className="h-5 w-5 text-[#ff7e67]" />
              </div>
              <p className="text-sm leading-relaxed">
                Start with our free plan today—no credit card required. All paid plans include premium features and extended data retention. Your data remains securely stored even if you downgrade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingFAQ() {
  return (
    <div className="max-w-5xl mx-auto md:px-16 py-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Everything you need to know about our pricing plans and how GenReview can help your business.</p>
      </div>
      
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="relative rounded-xl p-6 shadow-md border border-gray-100 bg-white/95 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-10"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                How does the free plan work?
              </h3>
            </div>
            <p className="text-gray-600">
              Our free tier provides essential features to get you started. Use GenReview indefinitely with standard retention limits—no credit card required. Upgrade anytime to unlock premium capabilities.
            </p>
          </div>
        </div>
        
        <div className="relative rounded-xl p-6 shadow-md border border-gray-100 bg-white/95 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-10"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="h-3 w-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Can I change my plan later?
              </h3>
            </div>
            <p className="text-gray-600">
              Absolutely. Seamlessly upgrade to access advanced features and extended data retention. If you downgrade, core functionality remains available while your data stays secure—ready when you decide to upgrade again.
            </p>
          </div>
        </div>
        
        <div className="relative rounded-xl p-6 shadow-md border border-gray-100 bg-white/95 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-10"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                What payment methods are available?
              </h3>
            </div>
            <p className="text-gray-600">
              We accept all major credit cards through Stripe and Razorpay's secure processing. Enterprise clients have the additional option of invoice payment.
            </p>
          </div>
        </div>
        
        <div className="relative rounded-xl p-6 shadow-md border border-gray-100 bg-white/95 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-[#ff7e67]/10 opacity-10"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center">
                <svg className="h-3 w-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Is there a setup fee?
              </h3>
            </div>
            <p className="text-gray-600">
              No. All plans include immediate activation with no setup fees. Start collecting valuable feedback instantly with our intuitive platform designed for seamless onboarding.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function EnterpriseCallout() {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-white to-gray-50 border border-gray-100">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#ff7e67]/5 backdrop-blur-[100px]"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#ff7e67]/10 blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"></div>
        
        <div className="relative grid md:grid-cols-5 gap-8 p-8 md:p-12">
          <div className="md:col-span-3 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#ff7e67]/10 text-gray-800 text-sm font-medium backdrop-blur-sm border border-[#ff7e67]/20">
              <svg className="h-4 w-4 text-[#ff7e67]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Enterprise Solutions
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">Scale your business <span className="text-[#ff7e67]">without limitations</span></h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Elevate your review strategy with unlimited feedback collection, dedicated account management, and bespoke integrations. Built for scale, engineered for enterprise complexity.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/features"
                className="inline-flex items-center bg-[#ff7e67] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#ff6a50] transition-all shadow-md hover:shadow-lg hover:shadow-[#ff7e67]/20 hover:translate-y-[-2px]"
              >
                <span>Explore Features</span>
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <a 
                href="/tos"
                className="inline-flex items-center bg-white text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all border border-gray-200"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 relative z-10 hidden md:flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Enterprise graphics */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-xl bg-white border border-gray-200 backdrop-blur-sm flex items-center justify-center shadow-xl">
                <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7e67] shadow-lg shadow-[#ff7e67]/30"></div>
                <div className="absolute top-1/2 right-0 w-12 h-12 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30"></div>
                <div className="absolute bottom-0 left-1/2 w-10 h-10 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/30"></div>
                
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#ff7e67] to-[#ff9f92] flex items-center justify-center shadow-lg">
                  <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature list */}
        <div className="relative px-8 pb-12 pt-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-[#ff7e67]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="h-3 w-3 text-[#ff7e67]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">Custom Branding & Whitelabeling</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-[#ff7e67]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="h-3 w-3 text-[#ff7e67]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">Dedicated Account Manager</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-[#ff7e67]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="h-3 w-3 text-[#ff7e67]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Testimonial() {
  return (
    <div className="max-w-5xl mx-auto py-8 md:py-16">
      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src="/images/clients/coffea.png"
              alt="Customer testimonial"
              className="w-full h-full object-cover"
            />
          </div>
    <div>
            <p className="text-lg text-gray-700 italic">
              "GenReview has transformed our workflow. The Pro plan gives us everything we need at an incredible value, and their support team is always there when we need them."
            </p>
            <div className="mt-4">
              <p className="font-medium text-gray-900">Sivesh Kumar</p>
              <p className="text-sm text-gray-500">Chief Operating Officer, Coffea</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="py-8 md:py-16">
          <Container>
            <PricingSection />
            <Testimonial />
            <PricingFAQ />
            <EnterpriseCallout />
          </Container>
        </div>
      </main>
    </div>
  )
}
