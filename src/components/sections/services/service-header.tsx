'use client'
import Image from 'next/image'

export function ServiceHeader() {
  return (
    <div className='space-y-2'>
      <div className='inline-flex items-center gap-2'>
        <Image alt='service' width={20} height={20} src={'/service-icon.svg'} />
        <span className='text-orange-500 font-medium'>SERVICES</span>
      </div>
      <h2 className='text-3xl font-bold'>My Capabilities</h2>
    </div>
  )
}
