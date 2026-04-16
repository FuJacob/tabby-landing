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
import { StructuredData } from "./components/structured-data";
import { FloatingButton } from "./components/floating-button";

function SectionDivider() {
  return (
    <section aria-hidden="true" className="px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1220px] border-t-2 border-line-soft opacity-70" />
    </section>
  );
}

export default function Home() {
  return (
    <div
      id="top"
      className="relative px-3 pb-14 pt-5 sm:px-4 sm:pb-16 sm:pt-8 lg:px-6 lg:pb-20 lg:pt-10"
    >
      <StructuredData />
      <FloatingButton />
      <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-16 sm:gap-20 lg:gap-24">
        <SectionShell>
          <Header />
          <Hero />
        </SectionShell>

        <section id="demo" className="tabby-anchor px-6 sm:px-8 lg:px-10">
          <DemoVideoSection />
        </section>

        <section className="px-6 sm:px-8 lg:px-10">
          <AppsCarouselSection />
        </section>

        <SectionDivider />

        <section
          id="how-it-works"
          className="tabby-anchor px-6 sm:px-8 lg:px-10"
        >
          <AlternatingFeatureSection />
        </section>

        <section className="px-6 sm:px-8 lg:px-10">
          <CustomizationCardsSection />
        </section>

        <SectionDivider />

        <section id="faq" className="tabby-anchor px-6 sm:px-8 lg:px-10">
          <FaqSection />
        </section>

        <SectionDivider />

        <section className="px-6 sm:px-8 lg:px-10">
          <SloganCtaSection />
        </section>

        <section className="px-6 sm:px-8 lg:px-10">
          <FinalFooterSection />
        </section>
      </div>
    </div>
  );
}
