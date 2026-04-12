import { AppsCarouselSection } from "./components/apps-carousel-section";
import { AlternatingFeatureSection } from "./components/alternating-feature-section";
import { CustomizationCardsSection } from "./components/customization-cards-section";
import { DemoVideoSection } from "./components/demo-video-section";
import { FaqSection } from "./components/faq-section";
import { FinalFooterSection } from "./components/final-footer-section";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { SectionShell } from "./components/section-shell";
import { SloganCtaSection } from "./components/slogan-cta-section";

export default function Home() {
  return (
    <div className="relative px-3 pb-3 pt-5 sm:px-4 sm:pb-4 sm:pt-8 lg:px-6 lg:pb-6 lg:pt-10">
      <div className="flex flex-col gap-4 sm:gap-5">
        <SectionShell>
          <Header />
          <Hero />
        </SectionShell>

        <SectionShell>
          <AppsCarouselSection />
        </SectionShell>

        <SectionShell>
          <DemoVideoSection />
        </SectionShell>

        <SectionShell>
          <CustomizationCardsSection />
        </SectionShell>

        <SectionShell>
          <AlternatingFeatureSection />
        </SectionShell>

        <SectionShell>
          <FaqSection />
        </SectionShell>

        <SectionShell>
          <SloganCtaSection />
        </SectionShell>

        <SectionShell>
          <FinalFooterSection />
        </SectionShell>
      </div>
    </div>
  );
}
