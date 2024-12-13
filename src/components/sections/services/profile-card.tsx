"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="rounded-3xl h-full">
      <p className="text-gray-600 mb-8 font-medium">
      {`Hello! I'm David,`} <span className="font-light">a dedicated creative professional with expertise in Branding Design, Graphic Design, Animation, and Video Editing. With a strong focus on helping brands stand out, my team and I bring a unique combination of skills to create visually compelling and strategic solutions.</span>
      </p>
      <div className="relative">
        
        <Image
          src="/user-image.png"
          alt="Profile"
          width={241}
          height={292}
          className="w-full h-[300px] md:h-[420px] object-cover object-top rounded-3xl"
        />
        <div className="absolute bottom-6 left-[100px] -translate-x-1/2 z-10">
          <Button className="bg-green-500 text-white">Chat on WhatsApp</Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t rounded-3xl from-purple-300/50 to-transparent" />
      </div>
    </div>
  );
}