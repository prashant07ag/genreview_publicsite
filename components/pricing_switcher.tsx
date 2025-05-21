'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Check, CreditCard, Star, Zap, Crown, Building, Rocket, Award, Gem } from 'lucide-react'

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

export function PricingSwitcher({ plans }: { plans: PlanProps[] }) {
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd');
  const [annualBilling, setAnnualBilling] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const detectCountry = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://ipinfo.io/json?token=d78d3ada93a593');
        const data = await response.json();
        setCurrency(data.country === 'IN' ? 'inr' : 'usd');
      } catch (error) {
        setCurrency('usd');
        console.error('Error detecting country:', error);
      } finally {
        setLoading(false);
      }
    };

    detectCountry();
  }, []);

  const getDiscountedPrice = (price: number) => {
    return annualBilling ? Math.round(price * 0.80) : price;
  };

  if (isLoading) {
    return (
      <div className="pt-12 pb-12 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#ff7e67] border-r-transparent align-[-0.125em]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-4 text-lg text-gray-600">Loading pricing information...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-4 flex-wrap mb-3">
        <div className="bg-white/30 backdrop-blur-sm rounded-full p-1 flex shadow-md ring-1 ring-black/10">
          <button
            onClick={() => setAnnualBilling(false)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              !annualBilling ? "bg-white shadow-md text-gray-950" : "text-gray-700 hover:bg-white/30"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnualBilling(true)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
              annualBilling ? "bg-white shadow-md text-gray-950" : "text-gray-700 hover:bg-white/30"
            )}
          >
            Annual
            <span className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
        <p className="mt-1 text-sm text-gray-600 flex items-center gap-1.5">
          <span className="flex items-center gap-1.5">
            <CreditCard className="h-3.5 w-3.5 text-green-600" />
            No credit card required for trial
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex"
          >
            <div className={cn(
              "h-full w-full relative rounded-xl p-5 shadow-lg backdrop-blur-sm flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300",
              plan.isPopular
                ? "bg-white border-[2px] border-[#ff7e67]"
                : "bg-white/95 border border-gray-100"
            )}>
              {/* Gradient background that adapts to plan */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-10",
                plan.color
              )} />

              <div className="relative">
                <div className="flex items-center gap-2">
                  {plan.name === 'Trial' && (
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Rocket className="h-4 w-4 text-blue-600" />
                    </div>
                  )}
                  {plan.name === 'Pro' && (
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <Gem className="h-4 w-4 text-purple-600" />
                    </div>
                  )}
                  {plan.name === 'Custom' && (
                    <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <Crown className="h-4 w-4 text-orange-600" />
                    </div>
                  )}
                  <h3 className="text-lg font-medium text-gray-950">{plan.name}</h3>
                  {plan.isPopular && (
                    <div className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm border border-gray-200 transform -translate-y-0.5">
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500" /> Popular
                    </div>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-600">{plan.description}</p>
              </div>

              <div className="relative mt-4 mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-baseline">
                  {plan.basePrice[currency] === 'custom' ? (
                    <span className="text-3xl font-bold text-gray-900">
                      Custom
                    </span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-gray-900">
                        {currency === 'usd' ? '$' : '₹'}
                        {getDiscountedPrice(plan.basePrice[currency] as number)}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        /{annualBilling ? 'month' : 'month'}
                      </span>
                    </>
                  )}
                </div>
                {annualBilling && plan.basePrice[currency] !== 'custom' && (
                  <p className="mt-1 text-xs text-gray-500 flex items-center gap-1">
                    <Check className="h-3 w-3 text-green-500" />
                    Billed annually (save 20%)
                  </p>
                )}
              </div>

              <div className="relative mt-3 space-y-3 flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-[#ff7e67]">What's included</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 items-start">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-[#ff7e67]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-[#ff7e67]" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={cn(
                  "relative mt-6 w-full py-2.5 px-3 rounded-lg font-medium text-sm group overflow-hidden transition-all duration-300",
                  plan.isPopular
                    ? "bg-[#ff7e67] text-white hover:bg-[#ff6a50] shadow-md hover:shadow-lg"
                    : plan.name === 'Custom'
                      ? "bg-gray-950 text-white hover:bg-gray-800 shadow-md hover:shadow-lg"
                      : "bg-white border border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                )}
                onClick={() => {
                  if (plan.basePrice[currency] === 'custom') {
                    window.location.href = '/contact';
                  } else {
                    window.location.href = '/app/auth/sign-up?plan=' + plan.name.toLowerCase();
                  }
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  {plan.basePrice[currency] === 'custom' 
                    ? 'Contact Us' 
                    : 'Get Started'
                  }
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}