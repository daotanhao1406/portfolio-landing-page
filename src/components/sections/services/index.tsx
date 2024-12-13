"use client";

import { ProfileCard } from "./profile-card";
import { ServiceGrid } from "./service-grid";
import { ServiceHeader } from "./service-header";


export function ServicesSection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:inline-flex items-center gap-2">
        <div className="w-6 h-6 bg-orange-500/10 rounded flex items-center justify-center">
          <span className="text-orange-500 text-2xl">★</span>
        </div>
        <span className="text-[#7553f5] text-2xl font-medium font-polysans">SERVICES</span>
      </div>
        <div className="hidden lg:grid grid-cols-2 gap-16 mt-3">
          <div className="flex flex-col justify-between">
          <h2 className="text-2xl md:text-5xl font-bold mb-5">My Capabilities</h2>
          <ServiceGrid />
          </div>
          <ProfileCard />
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          <ServiceHeader />
          <div className="grid grid-cols-2 gap-8 mt-12">
            <ServiceGrid />
            <ProfileCard />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          <ServiceHeader />
          <ServiceGrid />
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}