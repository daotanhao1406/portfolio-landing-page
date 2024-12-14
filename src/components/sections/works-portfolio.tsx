import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function WorksPortfolioSection() {
  return (
    <section className="py-20 text-center bg-[#0F0F24]">
      <div className="mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
      <div className="inline-flex items-center gap-2">
        <div className="w-6 h-6 bg-orange-500/10 rounded flex items-center justify-center">
          <span className="text-orange-500 text-2xl">
            <Image alt="feature" width={28} height={28} src={'/feature-icon.svg'} className="mr-2" />
          </span>
        </div>
        <span className="text-[#7553F5] text-2xl font-medium font-polysans">FEATURES PROJECT</span>
      </div>
      <h2 className="text-2xl md:text-6xl font-bold text-white">My Works Portfolio</h2>
      </div>
      <div className="space-y-4">
      <div
  x-data="{}"
  x-init="$nextTick(() => {
    let ul = $refs.logos;
    ul.insertAdjacentHTML('afterend', ul.outerHTML);
    ul.nextSibling.setAttribute('aria-hidden', 'true');
  })"
  className="relative w-full h-60 overflow-hidden"
>
  <span
    className="absolute z-20 font-bold text-center text-3xl text-[#7553F5] inset-0 flex items-center justify-center"
  >
    Deisn Works Animation Line
  </span>

  <ul
    x-ref="logos"
    className="flex mx-4 items-center justify-center md:justify-start [&div]:max-w-none animate-infinite-scroll-inverse"
  >
    {Array.from({ length: 20 }).map((_, index) => (
      <li key={index} className="flex">
        <div className="w-96 h-60 rounded-xl mx-2 bg-[#2F2F43]" />
      </li>
    ))}
  </ul>
</div>
      {/* <div className="flex items-center text-3xl justify-center w-full overflow-hidden h-60 mt-2 text-[#7553F5]"> */}
      <div
  x-data="{}"
  x-init="$nextTick(() => {
    let ul = $refs.logos;
    ul.insertAdjacentHTML('afterend', ul.outerHTML);
    ul.nextSibling.setAttribute('aria-hidden', 'true');
  })"
  className="relative w-full h-60 overflow-hidden"
>
  <span
    className="absolute z-20 font-bold text-center text-3xl text-[#7553F5] inset-0 flex items-center justify-center"
  >
    Video Works Animation Line
  </span>

  <ul
    x-ref="logos"
    className="flex mx-4 items-center justify-center md:justify-start [&div]:max-w-none animate-infinite-scroll"
  >
    {Array.from({ length: 20 }).map((_, index) => (
      <li key={index} className="flex">
        <div className="w-96 h-60 rounded-xl bg-[#2F2F43]" />
        <div className="w-32 h-60 mx-4 rounded-xl bg-[#2F2F43]" />
      </li>
    ))}
  </ul>
</div>
</div>
      {/* </div> */}
        <Button className="text-white font-normal text-xl p-6">View All Works  <ArrowUpRight className="w-5 h-5 ml-1 text-white group-hover:text-white transition-colors" /></Button>
      </div>
    </section>
  );
}