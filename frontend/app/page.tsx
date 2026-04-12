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
    <div
      id="top"
      className="relative px-3 pb-14 pt-5 sm:px-4 sm:pb-16 sm:pt-8 lg:px-6 lg:pb-20 lg:pt-10"
    >
      <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-16 sm:gap-20 lg:gap-24">
        <SectionShell>
          <Header />
          <Hero />
        </SectionShell>

        <section className="px-2 sm:px-4">
          <AppsCarouselSection />
        </section>

        <section id="demo" className="tabby-anchor px-2 sm:px-4">
          <DemoVideoSection />
        </section>

        <section id="how-it-works" className="tabby-anchor px-2 sm:px-4">
          <CustomizationCardsSection />
        </section>

        <section className="px-2 sm:px-4">
          <AlternatingFeatureSection />
        </section>

        <section id="faq" className="tabby-anchor px-2 sm:px-4">
          <FaqSection />
        </section>

        <section className="px-2 sm:px-4">
          <SloganCtaSection />
        </section>

        <section className="px-2 sm:px-4">
          <FinalFooterSection />
        </section>
      </div>
    </div>
  );
}
