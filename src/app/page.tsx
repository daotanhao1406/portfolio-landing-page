import { HeroSection } from '@/components/sections/hero'
import { TrustedBySection } from '@/components/sections/trusted-by'
import { ServicesSection } from '@/components/sections/services'
import { BrandingSection } from '@/components/sections/branding'
import { WorksPortfolioSection } from '@/components/sections/works-portfolio'
import { InformationSection } from '@/components/sections/information/information'
import FAQSection from '@/components/sections/faq'
import DemoSection from '@/components/sections/demo'
import NavBar from '@/components/layout/navigation/NavBar'
import NewWorkProcessSection from '@/components/sections/work-process/new-process'

export default function Home() {
  return (
    <section>
      <div className='xl:bg-cover bg-contain bg-hero-section bg-no-repeat bg-top'>
        <NavBar />
        <HeroSection />
      </div>
      <TrustedBySection />
      <DemoSection />
      <ServicesSection />
      <BrandingSection />
      <WorksPortfolioSection />
      <InformationSection />
      <div className='bg-pattern-section bg-cover bg-no-repeat bg-top'>
        {/* <WorkProcessSection /> */}
        <NewWorkProcessSection />
        <FAQSection />
      </div>
    </section>
  )
}
