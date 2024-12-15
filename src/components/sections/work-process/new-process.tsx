'use client'
import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion } from 'framer-motion';
const processData = [
    {
      icon: '/magnify-icon.svg',
      title: "Discovery & Consultation",
      description: "We begin with a conversation to understand your vision, goals, and project requirements. This step allows us to align our approach with your brand’s unique needs.",
      bgColor: "bg-[#C5B7FC]"
    },
    {
      icon: '/carbon-icon.svg',
      title: "Concept Development",
      description: "Based on our discussions, we brainstorm and create initial concepts. This stage focuses on visualizing ideas and presenting creative directions for your feedback.",
      bgColor: "bg-[#FFE897]"
    },
    {
      icon: '/antd-icon.svg',
      title: "Design & Creation",
      description: "After finalizing a concept, we dive into the design phase, applying our expertise in branding, graphic design, animation, or video editing to bring your vision to life.",
      bgColor: "bg-[#FFE1B6]"
    },
    {
      icon: '/antd-icon.svg',
      title: "Design & Creation",
      description: "After finalizing a concept, we dive into the design phase, applying our expertise in branding, graphic design, animation, or video editing to bring your vision to life.",
      bgColor: "bg-[#FFE1B6]"
    },
    {
      icon: '/antd-icon.svg',
      title: "Design & Creation",
      description: "After finalizing a concept, we dive into the design phase, applying our expertise in branding, graphic design, animation, or video editing to bring your vision to life.",
      bgColor: "bg-[#FFE1B6]"
    }
  ];
export default function NewWorkProcessSection() {

  return (
    <section className="max-w-7xl mx-4 py-16 md:py-24 lg:mx-auto">
  <Carousel opts={{ align: 'start' }} className="w-full">
    <div className="md:px-4 relative">
      {/* Phần Tiêu Đề */}
      <div className="text-left mb-12 space-y-4">
        <motion.div  initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="inline-flex items-center gap-2">
          <span className="text-orange-500 text-2xl">
            <Image
              alt="process"
              width={20}
              height={20}
              src={'/process-icon.svg'}
              className="mr-1"
            />
          </span>
          <span className="text-[#613AF7] text-2xl font-medium font-polysans">
            WORK PROCESS
          </span>
        </motion.div>

        {/* Tiêu đề và Nút Carousel */}
        <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }} className="flex justify-between items-center md:relative">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold max-w-lg lg:max-w-4xl">
            {`Here's a streamlined work process for your projects:`}
          </h2>
          {/* Nút Carousel cho màn hình lớn */}
          <div className="hidden md:flex absolute md:right-12 top-8">
            <CarouselPrevious className="text-primary  w-10 h-10" />
            <CarouselNext className="text-primary w-10 h-10" />
          </div>
        </motion.div>
      </div>

      {/* Carousel Content */}
      <CarouselContent className='sm:mb-0 mb-16'>
        {processData.map((process, index) => (
          <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
            <div
              key={index}
              className={`flex flex-col ${process.bgColor} p-6 rounded-lg border`}
            >
              <Image
                alt={process.icon}
                width={48}
                height={48}
                className="mb-6"
                src={process.icon}
              />
              <div>
                <p className="font-semibold lg:text-2xl mb-3">
                  {process.title}
                </p>
                <p className="text-sm text-muted-foreground lg:text-base">
                  {process.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Nút Carousel cho màn hình mobile */}
      <div className="absolute left-1/2 md:hidden">
        <CarouselPrevious className="text-primary  w-10 h-10" />
        <CarouselNext className="text-primary  w-10 h-10" />
      </div>
    </div>
  </Carousel>
</section>

  
  );

}