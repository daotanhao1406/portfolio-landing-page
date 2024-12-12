import { Button } from "../../ui/button";
import ColumnCard from "./column-card";
import RowCard from "./row-card";

export function InformationSection() {
  return (
    <section className="py-20 text-center bg-[#613AF7] ">
      <div className="mx-auto ">
        <div className="text-center max-w-2xl mx-auto space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full">
          <span className="text-orange-500 text-sm">★</span>
        <span className="text-[#613AF7] font-semibold">INFORMATIONS</span>
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-white">Committed to Grow Your Business</h2>
      <p className="text-white mb-8">
      Choosing me means choosing a team that’s invested in your success. Together, we’ll create visuals that not only look great but drive meaningful results for your brand.          </p>
      </div>
     <div className="w-full mx-auto max-w-7xl px-4 space-y-4 mt-7">
     <div className="text-center w-full grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="w-full h-auto flex  p-8 bg-[#F1DEBB] rounded-lg">
            <div className="text-center flex flex-col justify-center items-center space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold">We're more than <br /> Designers</h2>
            <p className="font-semibold text-xs md:text-sm">
            We’re your partners in creating memorable brand experiences. Trust us to deliver quality, innovation, and results every step of the way.
          </p>
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 rounded-3xl bg-slate-600"></div>
            <div>
              <p className="font-semibold">David W.</p>
              <p className="text-xs">Designer, Video & Animation</p>
            </div>
          </div>
          </div>
        </div>

        <div className="text-center w-full grid grid-cols-2 sm:grid-cols-2 gap-4 ">
          <div className="bg-[#F1DEBB] p-4 sm:flex flex-col justify-center rounded-lg h-full">
            <h3 className="text-[#FF7B32] text-4xl sm:text-6xl font-bold">4+</h3>
            <p className='text-sm md:font-semibold'>Years of Experience</p>
          </div>
          <div className="bg-[#F1DEBB] p-4 sm:flex flex-col justify-center rounded-lg h-full">
            <h3 className="text-[#FF7B32] text-4xl sm:text-6xl font-bold">250+</h3>
            <p className='text-sm md:font-semibold'>Project Crafted</p>
          </div>
          <div className="bg-[#F1DEBB] p-4 sm:flex flex-col justify-center rounded-lg h-full">
            <h3 className="text-[#FF7B32] text-4xl sm:text-6xl font-bold">17</h3>
            <p className='text-sm md:font-semibold'>Countries Served</p>
          </div>
          <div className="bg-[#F1DEBB] p-4 sm:flex flex-col justify-center rounded-lg h-full">
            <h3 className="text-[#FF7B32] text-4xl sm:text-6xl font-bold">8</h3>
            <p className='text-sm md:font-semibold'>Team Members</p>
          </div>
        </div>
      </div>




      <div className="text-center grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ColumnCard />
        <ColumnCard />
        <ColumnCard />
      </div>
      <div className="text-center w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <RowCard />
        <RowCard />
      </div>
      <div className="text-center grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ColumnCard />
        <ColumnCard />
        <ColumnCard />
      </div>
      <div className="text-center w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <RowCard />
        <RowCard />
      </div>
     </div>
      </div>
    </section>
  );
}