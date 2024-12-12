"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-32 px-4 md:px-8 bg-[#FFFAF5] pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-poly-sans)]">
            Business Growth Focused{" "}<br />
            <span className="text-primary">Design</span> Solutions.
          </h1>
          <p className="text-gray-600 mb-8 text-sm md:text-medium">
          Investing in your brand is the key to unlocking growth, and I'm here to guide you every step of the way. With strategic design and proven expertise, we’ll turn your vision into a powerful brand experience that drives engagement and sales. Relax, and let me handle the details, giving you a complete solution for impactful growth.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-primary text-white">Contact</Button>
            <Button variant="outline">Portfolio</Button>
          </div>
        </div>
      </div>
    </section>
  );
}