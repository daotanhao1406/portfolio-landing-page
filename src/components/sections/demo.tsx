'use client'

import Image from 'next/image'
export default function DemoSection() {
  return (
    <section className='py-20 px-4 max-w-7xl mx-auto'>
      <div className='p-2 rounded-3xl bg-[#F1EEFF]'>
        <Image src={'/demo-image.png'} className='rounded-3xl' height={891} width={1591} alt='demo-background' />
      </div>
    </section>
  )
}
