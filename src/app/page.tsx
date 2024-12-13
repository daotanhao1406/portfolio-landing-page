import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { ServicesSection } from "@/components/sections/services";
import { BrandingSection } from "@/components/sections/branding";
import { WorksPortfolioSection } from "@/components/sections/works-portfolio";
import { InformationSection } from "@/components/sections/information/information";
import FAQSection from "@/components/sections/faq";
import WorkProcessSection from "@/components/sections/work-process";
import SocialMediaSection from "@/components/sections/social-media";
import DemoSection from "@/components/sections/demo";
import NavBar from "@/components/layout/navigation/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFAF5]">
      {/* <Navbar /> */}
      <NavBar />
      <HeroSection />
      <TrustedBySection />
        <DemoSection />
        <ServicesSection />
      <BrandingSection />
      <WorksPortfolioSection />
      <InformationSection />
      <WorkProcessSection />
      <FAQSection />
      <SocialMediaSection />
      <Footer />
    </main>
  );
}