import '@/app/globals.css'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import {Footer} from '@/components/footer'

export const metadata: Metadata = {
  title: {
    template: '%s - GenReview',
    default: 'GenReview - AI-Powered Review Analysis & Feedback',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The GenReview Blog"
          href="/blog/feed.xml"
        />
        <link rel="icon" href="/logo/favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-[#f9f5f1] text-foreground">
        <Container>
          <Navbar />    
        </Container>
        {children} 
        <Footer/>
      </body>
    </html>
  )
}
