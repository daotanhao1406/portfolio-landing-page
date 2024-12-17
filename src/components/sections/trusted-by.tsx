import Image from 'next/image'

export function TrustedBySection() {
  const logoSrc = ['/chargewald-logo.png', '/nature-food-logo.png', '/sensory-home-logo.png', '/sensory-marketing-logo.png', '/softnode-logo.png', '/sonar-leads-logo.png', '/trendrix-logo.png', '/allied-logo.png']
  return (
    <div className='py-8 bg-white'>
      <div className='flex justify-center opacity-60 overflow-hidden gap-8'>
        {logoSrc.map((item, index) => {
          return <Image key={index} src={item} alt='Client 1' width={200} height={48} className='h-8 object-contain' />
        })}
      </div>
    </div>
  )
}
