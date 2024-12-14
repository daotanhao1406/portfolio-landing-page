'use client'
import { ProjectCard } from "./project-card";
import Image from "next/image";
import NavBar from "@/components/layout/navigation/NavBar";
import { useState } from "react";
import { Popover } from "antd";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import './index.css'
const navigationData = [
    {
      key: 1,
      label: 'Branding Design',
      items: ['Logo Design', 'Logo Design', 'Logo Design', 'Logo Design', 'Logo Design', 'Logo Design', 'Logo Design', 'Logo Design'],
    },
    {
      key: 2,
      label: 'Graphic Design',
      items: ['Logo Design', 'Logo Design', 'Logo Design', 'Logo Design'],
    },
    {
      key: 3,
      label: 'Video Editing',
      items: ['Logo Design', 'Logo Design', 'Logo Design', 'Logo Design'],
    },
    {
      key: 4,
      label: 'Animation',
      items: ['Logo Design', 'Logo Design', 'Logo Design', 'Logo Design'],
    },
  ];


export default function Works() {
  const [openIndex, setOpenIndex] = useState<number>(0);

    return (
      <section>
        <NavBar />
        <div className="lg:pt-20 pt-12 px-4 flex flex-col items-center text-center">
            <div className="lg:space-y-8 space-y-8">
                <div className="inline-flex items-center gap-2 text-3xl lg:text-5xl font-medium">
                    <span className="text-orange-500 ">
                      <Image alt="star" width={28} height={28} src={'/star-icon.svg'} className="mr-2" />
                    </span>
                    <span className="text-[#613AF7] font-polysans">PORTFOLIO</span>
                </div>
                <p className="text-gray-600 mb-8 text-base lg:text-lg font-aeonik font-normal md:max-w-2xl lg:max-w-4xl mx-auto">
                    Explore a selection of my favorite projects that showcase my expertise in branding, graphic design, animation, and video editing. Each project is a testament to my dedication to creativity and excellence. Browse my solutions across industries.
                </p>
            </div>

            {/* <div className="md:flex gap-4 py-8 grid grid-cols-2">
                {navigationData.map((item, index) => (
                    <PortfolioButton
                    key={index}
                    label={item.label}
                    items={item.items}
                    isActive={item.isActive}
                    />
                ))}
            </div> */}

          

            <div className="md:flex gap-4 py-8 mt-10 grid grid-cols-2">

            {navigationData.map((item) => (
                    <Popover
                    key={item.key}
                    overlayStyle={{ maxWidth: "!calc(100vw - 32px)" }}
                    content={ <>
                    <div className={`md:grid-cols-4 grid-cols-3 p-2 md:py-5 grid grid-rows-2 gap-x-5 md:gap-y-1`} role="menu">
                        {item.items.map((item, index) => (
                        <button
                          key={index}
                          className="flex items-center w-full md:px-4 py-2 text-sm text-gray-700 hover:text-primary group"
                          role="menuitem"
                        >
                          <span className="h-4 w-4 mr-2 rounded-full bg-black flex justify-center items-center group-hover:bg-primary">
                              <ArrowUpRight className="icon" color="white" size={14} />
                          </span>
                          {item}
                        </button>
                        ))}
                    </div>
                    </>}
                    trigger="click"
                    placement="bottom"
                  >
                      <button
                      onClick={() => setOpenIndex(item.key)}
                        className={cn(
                          "px-6 py-2 rounded-full md:text-base text-sm font-medium",
                          openIndex === item.key 
                            ? "bg-white text-primary border-2 border-[#F1DEBB]" 
                            : "bg-[#F4F4F4] text-[#312D42]"
                        )}
                      >
                        {item.label}
                      </button>
                  </Popover>
                ))}
            </div>

            
          

            <div className="w-full mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl xl:mx-auto">
                    <ProjectCard title="Project Name" isHighlighted={true} />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>

            

            <div className="bg-[#F1DEBB] mt-12 max-w-7xl w-full flex flex-col items-center text-center rounded-lg py-8 xl:px-12 px-4 xl:mx-auto space-y-2">
                <p className="text-base font-medium lg:text-3xl">Have a project in mind?</p>
                <p className="text-xl font-bold lg:text-4xl">Just Drop a Message!</p>
                <div className="flex gap-4 pt-2">
                    <button className="flex items-center justify-start gap-2 bg-green-500 text-white pl-2 pr-5 py-1 rounded-full">
                        <Image src={'/whatsapp-white-icon.svg'} width={32} height={32} alt="whatsapp" /> WhatsApp
                    </button>
                    <button className="flex items-center justify-start gap-2 bg-red-500 text-white pl-2 pr-5 py-1 rounded-full">
                    <Image src={'/gmail-icon.svg'} width={32} height={32} alt="whatsapp" /> Email
                    </button>
                </div>
            </div>
        </div>
      </section>
    );
}