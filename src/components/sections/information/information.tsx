'use client'
import ColumnCard from './column-card'
import RowCard from './row-card'
import Image from 'next/image'
import { motion } from 'framer-motion'

const columnInformations = [
  {
    title: 'Complete Creative Solutions',
    description: 'We create visuals that captivate and convert, enhancing audience engagement and driving growth for your business.',
  },
  {
    title: 'Fast Delivery',
    description: 'Your time matters. My team and I ensure a quick turnaround, so your projects reach your audience without delay.',
  },
  {
    title: 'Brand Driven Works',
    description: 'Every works is crafted to meet your brand’s unique personality, creating a visual identity that stands out on any platform.',
  },
  {
    title: 'Engaging Video Content',
    description: 'From short content video to full-length videos, our expert editing enhances your message and keeps your audience hooked.',
  },
  {
    title: 'Animation That Inspires',
    description: 'Transform your ideas into dynamic animations that captivate and engage viewers, making complex concepts easy to understand.',
  },
  {
    title: 'Custom Brand Solutions',
    description: 'From logo creation to full brand identity design, we ensure your brand stands out with a unique and professional touch.',
  },
]

const rowInformations = [
  {
    title: 'Boosted Engagement',
    description: 'We create visuals that captivate and convert, enhancing audience engagement and driving growth for your business.',
  },
  {
    title: 'High Conversion Rates',
    description: 'Through targeted creation strategies, we focus on turning browsers into buyers, increasing your brand’s conversion rates effectively.',
  },
  {
    title: 'Consistent Visual Identity',
    description: 'We ensure that every design, from logos to social media assets, aligns seamlessly with your brand for a polished, professional look',
  },
  {
    title: 'End to End Creative Support',
    description: 'We don’t just deliver projects; we partner with you every step of the way to ensure each piece aligns with your vision and goals.',
  },
]

export function InformationSection() {
  return (
    <section className='py-20 text-center bg-[#613AF7] '>
      <div className='mx-auto '>
        <div className='text-center mx-auto space-y-6'>
          <div className='inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full'>
            <span className='text-orange-500 text-2xl'>
              <Image alt='information' width={28} height={28} src={'/information-icon.svg'} className='mr-2' />
            </span>
            <span className='text-[#613AF7] text-2xl font-medium font-polysans'>INFORMATIONS</span>
          </div>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-white '>Committed to Grow Your Business</h2>
          <p className='text-white mb-8 lg:max-w-4xl max-w-xl mx-auto font-light text-sm md:text-xl'>
            Choosing me means choosing a team that’s invested in your success. Together, we’ll create visuals that not only look great but drive meaningful results for your brand.{' '}
          </p>
        </div>
        <div className='w-full mx-auto max-w-7xl px-4 space-y-4 mt-12'>
          <div className='text-center w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='bg-information-card bg-cover bg-no-repeat bg-top w-full h-auto flex p-12 bg-[#F1DEBB] rounded-lg'
            >
              <div className='text-center flex flex-col justify-center items-center space-y-8 mx-auto'>
                <h2 className='text-2xl md:text-4xl font-bold'>
                  {`We're more than`} <br /> Designers
                </h2>
                <p className='font-medium text-xs max-w-sm md:text-sm'>{`We’re your partners in creating memorable brand experiences. Trust us to deliver quality, innovation, and results every step of the way.`}</p>
                <div className='flex items-center gap-6'>
                  <div className='w-10 h-10 rounded-3xl bg-slate-600'></div>
                  <div>
                    <p className='font-semibold'>David W.</p>
                    <p className='text-xs'>Designer, Video & Animation</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className='text-center w-full grid grid-cols-2 sm:grid-cols-2 gap-4 '>
              <div className='bg-information-card bg-cover bg-no-repeat bg-top bg-[#F1DEBB] p-4 sm:flex flex-col justify-center rounded-lg h-full space-y-2'>
                <h3 className='text-[#FF7B32] text-4xl md:text-5xl lg:text-6xl font-bold'>4+</h3>
                <p className='lg:text-lg md:font-medium text-sm'>Years of Experience</p>
              </div>
              <div className='bg-information-card bg-cover bg-no-repeat bg-top bg-[#F1DEBB] p-4 sm:flex flex-col justify-center rounded-lg h-full space-y-2'>
                <h3 className='text-[#FF7B32] text-4xl md:text-5xl lg:text-6xl font-bold'>250+</h3>
                <p className='lg:text-lg md:font-medium text-sm'>Project Crafted</p>
              </div>
              <div className='bg-information-card bg-cover bg-no-repeat bg-top bg-[#F1DEBB] p-4 sm:flex flex-col justify-center rounded-lg h-full space-y-2'>
                <h3 className='text-[#FF7B32] text-4xl md:text-5xl lg:text-6xl font-bold'>17</h3>
                <p className='lg:text-lg md:font-medium text-sm'>Countries Served</p>
              </div>
              <div className='bg-information-card bg-cover bg-no-repeat bg-top bg-[#F1DEBB] p-4 sm:flex flex-col justify-center rounded-lg h-full space-y-2'>
                <h3 className='text-[#FF7B32] text-4xl md:text-5xl lg:text-6xl font-bold'>8</h3>
                <p className='lg:text-lg md:font-medium text-sm'>Team Members</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className='text-center grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {columnInformations.slice(0, 3).map((info, index) => (
              <ColumnCard key={index} title={info.title} description={info.description} />
            ))}
          </motion.div>
          <div className='text-center w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {rowInformations.slice(0, 2).map((info, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <RowCard key={index} title={info.title} description={info.description} />
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className='text-center grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {columnInformations.slice(3).map((info, index) => (
              <ColumnCard key={index} title={info.title} description={info.description} />
            ))}
          </motion.div>
          <div className='text-center w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {rowInformations.slice(0, 2).map((info, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <RowCard key={index} title={info.title} description={info.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
