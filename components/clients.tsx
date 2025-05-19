import React from 'react'
import Image from 'next/image'

const ClientLogos = () => {
  const clients = [
    {
      src: '/images/clients/coffea.png',
      alt: 'Client Logo 1'
    },
    {
      src: '/images/clients/happychases.png',
      alt: 'Client Logo 2'
    },
    {
      src: '/images/clients/zenith.png',
      alt: 'Client Logo 3'
    },
    {
      src: '/images/clients/tgf.png',
      alt: 'Client Logo 4'
    }
  ]

  return (
    <div className='my-8 w-full'>
      <div className='flex flex-wrap justify-center items-center gap-12'>
        {clients.map((client, index) => (
          <div key={index} className='relative w-32 h-16'>
            <Image
              src={client.src}
              alt={client.alt}
              fill
              className='object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientLogos