"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-16 px-4 md:px-8 bg-[#FFFAF5] pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto lg:space-y-12">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 font-polysans">
            Business Growth Focused{" "}<br />
            <span style={{backgroundSize: "200% 100%", backgroundPosition: "20% center"}} className="bg-clip-text text-transparent bg-gradient-to-r from-[#8362FF] to-[#FFAD80]">Design</span> Solutions.
          </h1>
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