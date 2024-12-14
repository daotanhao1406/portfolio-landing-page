import { HeroSection } from "@/components/sections/hero";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { ServicesSection } from "@/components/sections/services";
import { BrandingSection } from "@/components/sections/branding";
import { WorksPortfolioSection } from "@/components/sections/works-portfolio";
import { InformationSection } from "@/components/sections/information/information";
import FAQSection from "@/components/sections/faq";
import WorkProcessSection from "@/components/sections/work-process";
import DemoSection from "@/components/sections/demo";
import NavBar from "@/components/layout/navigation/NavBar";

export default function Home() {
  return (
        
    <section >
      <div style={{ backgroundImage: "url('/hero-bg.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center top" }}>
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
        <WorkProcessSection />
        <FAQSection />
      </div>
    </section>
  );
}