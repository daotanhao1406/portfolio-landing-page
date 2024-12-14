import { HeroSection } from "@/components/sections/hero";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { ServicesSection } from "@/components/sections/services";
import { BrandingSection } from "@/components/sections/branding";
import { WorksPortfolioSection } from "@/components/sections/works-portfolio";
import { InformationSection } from "@/components/sections/information/information";
import FAQSection from "@/components/sections/faq";
import DemoSection from "@/components/sections/demo";
import NavBar from "@/components/layout/navigation/NavBar";
import NewWorkProcessSection from "@/components/sections/work-process/new-process";

export default function Home() {
  return (
        
    <section >
      <div className="xl:bg-cover bg-contain" style={{ backgroundImage: "url('/hero-bg.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "center top" }}>
        <NavBar />
        <HeroSection />
      </div>
      <TrustedBySection />
      <DemoSection />
      <ServicesSection />
      <BrandingSection />
      <WorksPortfolioSection />
      <InformationSection />
      <div style={{ backgroundImage: "url('/pattern-bg.svg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center top" }}>
        {/* <WorkProcessSection /> */}
        <NewWorkProcessSection />
        <FAQSection />
      </div>
    </section>
  );
}