"use client";

import { ServiceCard } from "@/components/ui/service-card";
import { MonitorSmartphone, Palette, Play, Video } from "lucide-react";

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ServiceCard
        icon={<Palette className="w-6 h-6 text-[#242034]" />}
        title="Branding Design"
      />
      <ServiceCard
        icon={<MonitorSmartphone className="w-6 h-6 text-[#242034]" />}
        title="Graphic Design"
      />
      <ServiceCard
        icon={<Play className="w-6 h-6 text-[#242034]" />}
        title={`Motion \n & Animation`}
      />
      <ServiceCard
        icon={<Video className="w-6 h-6 text-[#242034]" />}
        title="Video Editing"
      />
    </div>
  );
}