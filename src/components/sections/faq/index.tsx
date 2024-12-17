'use client'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import MoreQuestionCard from './more-question-card'
import { motion } from 'framer-motion'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of digital solutions including web development, mobile app development, UI/UX design, cloud services, and digital marketing strategies tailored to meet your business needs.',
    },
    {
      question: 'How long does it typically take to complete a project?',
      answer: "Project timelines vary depending on complexity and scope. A typical web development project takes 8-12 weeks, while smaller projects might take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and depends on your specific requirements. We offer flexible payment plans and transparent pricing with no hidden costs. Contact us for a detailed quote tailored to your needs.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support to ensure your solution runs smoothly.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Node.js, Python, AWS, and various other cutting-edge tools and frameworks. Our team stays updated with the latest industry trends and best practices.',
    },
  ]

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='mx-4 px-4 py-12 bg-[#F1DEBB] rounded-lg'>
      {/* Title - Always at the top on mobile */}
      <div className='2xl:max-w-7xl 2xl:mx-auto'>
        <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className='text-3xl font-bold text-center mb-6 md:hidden'>
          Have Questions?
        </motion.h2>
        {/* <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Have Questions?</h1> */}

        <div className='flex flex-col md:flex-row gap-8'>
          {/* FAQ List - Second on mobile, right on desktop */}
          <div className='w-full lg:w-2/3 order-1 md:order-2'>
            <div className='max-w-3xl mx-auto'>
              {faqs.map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className='mt-1 bg-[#FFFAF5] rounded-md shadow-md overflow-hidden'>
                  <button className='w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300' onClick={() => toggleFAQ(index)}>
                    <span className='font-semibold text-gray-800 '>{faq.question}</span>
                    {openIndex === index ? (
                      <div className='p-1 rounded-full bg-[#F1DEBB]'>
                        <Minus className='text-gray-600 text-xl' />
                      </div>
                    ) : (
                      <div className='p-1 rounded-full bg-[#F1DEBB]'>
                        <Plus className='text-gray-600 text-xl' />
                      </div>
                    )}
                  </button>
                  {openIndex === index && (
                    <div className='px-6 pb-4 bg-[#FFFAF5]'>
                      <p className='text-gray-600'>{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Card - Last on mobile, left on desktop */}
          <div className='w-full lg:w-1/3 flex flex-col justify-between items-center order-2 md:order-1'>
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className='hidden md:flex text-5xl font-bold mb-4'>
              Have <br /> Questions?
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <MoreQuestionCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
