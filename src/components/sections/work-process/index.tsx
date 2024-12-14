import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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
export default function WorkProcessSection() {

  return (
    // <section className="py-12 flex flex-col">
    //     <div className='max-w-7xl mx-auto px-4'>
    //   <div className=" flex items-center gap-2 mb-4">
    //   <div className="inline-flex items-center gap-2">
    //       <span className="text-orange-500 text-sm">★</span>
    //     <span className="text-[#613AF7] font-semibold">WORK PROCESS</span>
    //   </div>
    //   </div>
    //   <div className='flex justify-between'>
    //   <h2 className="text-3xl font-bold mb-8 max-w-lg">
    //     Here's a streamlined work process for your projects:
    //   </h2>
    //     <div className='hidden sm:flex space-x-4'>
    //         <Button className='text-primary' size={'icon'} variant={'outline'}><ArrowLeft /></Button>
    //         <Button className='text-primary' size={'icon'} variant={'outline'}><ArrowRight /></Button>
    //     </div>
    //     </div>
    //     </div>
    //     <div className="flex overflow-x-hidden relative lg:pl-32">
    //     <div className="flex gap-6 md:pl-4">
    //       {processData.map((process, index) => (
    //         <div key={index} className="min-w-full md:min-w-[calc(33.333%-1rem)]">
    //         <ProcessCard backgroundColor={process.bgColor} key={index} description={process.description} icon={process.icon} title={process.title} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className='flex space-x-4 self-center mt-6 sm:hidden'>
    //         <Button className='text-primary' size={'icon'} variant={'outline'}><ArrowLeft /></Button>
    //         <Button className='text-primary' size={'icon'} variant={'outline'}><ArrowRight /></Button>
    //     </div>
    // </section>
    <section className="max-w-7xl mx-4 py-16 md:py-24 lg:mx-auto">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <div className="md:px-4">
        <div
          className="text-left mb-12 space-y-4"
        >
             <div className="inline-flex items-center gap-2">
         <span className="text-orange-500 text-2xl">
          <Image alt="process" width={20} height={20} src={'/process-icon.svg'} className="mr-1" />
         </span>
       <span className="text-[#613AF7] text-2xl font-medium font-polysans">WORK PROCESS</span>
     </div>
     <div className='flex justify-between'>
     <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 max-w-4xl">
        {`Here's a streamlined work process for your projects:`}
      </h2>
      <CarouselPrevious />
      <CarouselNext />
      </div>
        </div>
        {/* <div className="grid gap-8 md:grid-cols-3">
        {processData.map((process, index) => (
            <div key={index} className={`flex flex-col ${process.bgColor} p-6 rounded-lg border`}>
              <Image alt={process.icon} width={48} height={48} className='mb-6' src={process.icon} />
              <div>
                <p className="font-semibold lg:text-2xl mb-3">{process.title}</p>
                <p className="text-sm text-muted-foreground lg:text-base">{process.description}</p>
              </div>
            </div>
          ))}
        </div> */}




        
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
               
            </div>
          </CarouselItem>
        ))} */}

{processData.map((process, index) => (
  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div key={index} className={`flex flex-col ${process.bgColor} p-6 rounded-lg border`}>
              <Image alt={process.icon} width={48} height={48} className='mb-6' src={process.icon} />
              {/* <p className="flex-1 text-base mb-4">{process.icon}</p> */}
              <div>
                <p className="font-semibold lg:text-2xl mb-3">{process.title}</p>
                <p className="text-sm text-muted-foreground lg:text-base">{process.description}</p>
              </div>
            </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      
      </div>
    </Carousel>
    </section>
  );

}