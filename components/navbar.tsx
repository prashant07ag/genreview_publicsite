'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: 'https://blog.genreview.io/', label: 'Blogs', target: '_blank' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/app/auth/sign-in', label: 'Login' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label, target}) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%]"
            target={target}
          >
            {label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

function MobileNavButton({ open }: { open: boolean }) {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label={open ? "Close main menu" : "Open main menu"}
    >
      {open ? (
        <XMarkIcon className="size-6" />
      ) : (
        <Bars2Icon className="size-6" />
      )}
    </DisclosureButton>
  )
}

function MobileNav({ close }: { close: () => void }) {
  return (
    <DisclosurePanel className="lg:hidden fixed inset-0 z-50 bg-[#f9f5f1]">
      <div className="container mx-auto px-6 pt-4">
        <div className="flex justify-between items-center mb-8">
          <div className="py-2">
            <Link href="/" title="Home" onClick={() => close()}>
              <Image src="/logo/main.png" alt="GenReview" width={76} height={76} />
            </Link>
          </div>
          <DisclosureButton
            className="flex size-12 items-center justify-center"
            aria-label="Close main menu"
          >
            <XMarkIcon className="size-8 text-gray-700" />
          </DisclosureButton>
        </div>
        
        <div className="flex flex-col gap-6 mt-6">
          {links.map(({ href, label, target}, linkIndex) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                ease: 'easeOut',
                delay: linkIndex * 0.05,
              }}
              key={href}
              className="border-b border-gray-200 pb-6"
            >
              <Link 
                href={href} 
                className="flex items-center text-xl font-medium text-gray-900 hover:text-gray-700 transition-colors" 
                target={target}
                onClick={() => close()}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-4 sm:pt-4">
      {({ open, close }) => (
        <>
          <div className="container mx-auto px-4">
            <div className="relative flex justify-between">
              <div className="relative flex gap-6">
                <div className="py-3">
                  <Link href="/" title="Home">
                    <Image src="/logo/main.png" alt="GenReview" width={96} height={96} />
                  </Link>
                </div>
                {banner && (
                  <div className="relative hidden items-center py-3 lg:flex">
                    {banner}
                  </div>
                )}
              </div>
              <DesktopNav />
              <MobileNavButton open={open} />
            </div>
          </div>
          <MobileNav close={close} />
        </>
      )}
    </Disclosure>
  )
}
