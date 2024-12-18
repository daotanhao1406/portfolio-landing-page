import Image from 'next/image'

export function SocialLinks() {
  const iconSrc = ['/be-whatsapp.svg', '/be-email.svg', '/be-skype.svg', '/be-telegram.svg', '/be-instagram.svg', '/be-x.svg', '/be-linked.svg', '/be-facebook.svg', '/be-behance.svg', '/be-dribbble.svg', '/be-youtube.svg', '/be-pinterest.svg']
  return (
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-6 grid-rows-2 gap-3'>
        {iconSrc.map((icon, index) => (
          <div key={index} className='w-10 h-10 flex justify-center items-center sm:w-12 sm:h-12 rounded-full bg-primary text-white hover:scale-110 transition-transform duration-200' title={icon}>
            <Image width={24} height={24} src={icon} alt={icon} />
          </div>
        ))}
      </div>
    </div>
  )
}
