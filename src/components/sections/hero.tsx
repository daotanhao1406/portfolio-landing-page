"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="lg:pt-16 md:pt-8 pt-2 px-4 md:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto lg:space-y-12">
          <div className="flex flex-col items-center text-3xl md:text-5xl lg:text-7xl font-bold mb-6 font-polysans">
            Business Growth Focused
              <div className="flex">
                <div className="flex flex-col mr-2">
                <span style={{backgroundSize: "200% 100%", backgroundPosition: "20% center"}} className="lg:h-20 md:h-[52px] bg-clip-text text-transparent bg-gradient-to-r from-[#8362FF] to-[#FFAD80]">Design
                </span>
                <Image src={'/design-bottom.svg'} className="lg:flex hidden" width={259} height={23} alt="design icon" />
                <Image src={'/design-bottom.svg'} className="md:flex lg:hidden hidden" width={150} height={12} alt="design icon" />
                <Image src={'/design-bottom.svg'} className="sm:hidden flex" width={100} height={12} alt="design icon" />
                </div>
            {' '}Solutions.
            </div>
          </div>
          <p className="text-gray-600 mb-8 text-sm lg:text-lg font-aeonik font-normal md:max-w-xl lg:max-w-4xl mx-auto">
          {`Investing in your brand is the key to unlocking growth, and I'm here to guide you every step of the way. With strategic design and proven expertise, we’ll turn your vision into a powerful brand experience that drives engagement and sales. Relax, and let me handle the details, giving you a complete solution for impactful growth.`}
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-primary text-white font-normal text-lg">Contact</Button>
            <Button variant="outline" className="font-normal text-lg">Portfolio</Button>
          </div>
        </div>
      </div>
    </section>
  );
}