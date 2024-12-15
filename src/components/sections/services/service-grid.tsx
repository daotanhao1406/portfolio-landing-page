import { ServiceCard } from "@/components/ui/service-card";
import Image from "next/image";
import { motion } from "framer-motion";
export function ServiceGrid() {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 }} className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:mt-20 lg:mt-10">
        <ServiceCard
          icon={<Image alt="branding" width={24} height={24} src={'/branding-icon.svg'} className="w-6 h-6 text-[#242034]" />}
          title="Branding Design"
          subTitle={['Logo Design', 'Brand Identity Deisn', 'Brand Guidelines Design', 'Brand Materials Design', 'Visual Identity Design']}
        />
      <ServiceCard
        icon={<Image alt="design" width={24} height={24} src={'/design-icon.svg'} className="w-6 h-6 text-[#242034]" />}
        title="Graphic Design"
        subTitle={['Logo Design', 'Brand Identity Deisn', 'Brand Guidelines Design', 'Brand Materials Design', 'Visual Identity Design']}
      />
      <ServiceCard
        icon={<Image alt="animation" width={24} height={24} src={'/animation-icon.svg'} className="w-6 h-6 text-[#242034]" />}
        title={`Motion & Animation`}
        subTitle={['Logo Design', 'Brand Identity Deisn', 'Brand Guidelines Design', 'Brand Materials Design', 'Visual Identity Design']}
      />
      <ServiceCard
        icon={<Image alt="video" width={24} height={24} src={'/video-icon.svg'} className="w-6 h-6 text-[#242034]" />}
        title="Video Editing"
        subTitle={['Logo Design', 'Brand Identity Deisn', 'Brand Guidelines Design', 'Brand Materials Design', 'Visual Identity Design']}
      />
    </motion.div>
  );
}