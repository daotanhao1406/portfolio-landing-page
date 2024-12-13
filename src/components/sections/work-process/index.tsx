import React from 'react';
import { Blocks, PencilRuler, Search } from 'lucide-react';
const processData = [
    {
      icon: <Search size={40}/>,
      title: "Discovery & Consultation",
      description: "We begin with a conversation to understand your vision, goals, and project requirements. This step allows us to align our approach with your brand’s unique needs.",
      bgColor: "bg-[#C5B7FC]"
    },
    {
      icon: <Blocks size={40}/>,
      title: "Concept Development",
      description: "Based on our discussions, we brainstorm and create initial concepts. This stage focuses on visualizing ideas and presenting creative directions for your feedback.",
      bgColor: "bg-[#FFE897]"
    },
    {
      icon: <PencilRuler size={40}/>,
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
      <div className="md:px-4">
        <div
          className="text-left mb-12 space-y-4"
        >
             <div className="inline-flex items-center gap-2">
         <span className="text-orange-500 text-2xl">★</span>
       <span className="text-[#613AF7] text-2xl font-medium font-polysans">WORK PROCESS</span>
     </div>
     <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 max-w-4xl">
        {`Here's a streamlined work process for your projects:`}
      </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
        {processData.map((process, index) => (
            <div key={index} className={`flex flex-col ${process.bgColor} p-6 rounded-lg border`}>
              <div className="mb-4 ">{process.icon}</div>
              {/* <p className="flex-1 text-base mb-4">{process.icon}</p> */}
              <div>
                <p className="font-semibold lg:text-2xl mb-3">{process.title}</p>
                <p className="text-sm text-muted-foreground lg:text-base">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}