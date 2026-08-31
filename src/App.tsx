import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProductPortfolio } from "@/components/ProductPortfolio";
import { BusinessSegments } from "@/components/BusinessSegments";
import { Applications } from "@/components/Applications";
import { Sustainability } from "@/components/Sustainability";
import { Newsroom } from "@/components/Newsroom";
import { ContactCta } from "@/components/ContactCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-hp-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ProductPortfolio />
        <BusinessSegments />
        <Applications />
        <Sustainability />
        <Newsroom />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}
