import { AppsCarouselSection } from "./components/apps-carousel-section";
import { AlternatingFeatureSection } from "./components/alternating-feature-section";
import { CustomizationCardsSection } from "./components/customization-cards-section";
import { DemoVideoSection } from "./components/demo-video-section";
import { FaqSection } from "./components/faq-section";
import { FinalFooterSection } from "./components/final-footer-section";
import { FloatingNavbar } from "./components/floating-navbar";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { HowItWorksSection } from "./components/how-it-works-section";
import { LandingMotionShell } from "./components/landing-motion-shell";
import { PrivacySection } from "./components/privacy-section";
import { ScrollProgressBar } from "./components/motion";
import { SectionShell } from "./components/section-shell";
import { SloganCtaSection } from "./components/slogan-cta-section";
import { StatsStripSection } from "./components/stats-strip-section";
import { StructuredData } from "./components/structured-data";
import { TestimonialsSection } from "./components/testimonials-section";
import { FloatingButton } from "./components/floating-button";

function SectionDivider() {
  return (
    <section aria-hidden="true" className="px-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1220px] items-center gap-4">
        <div className="h-[2px] flex-1 bg-line-soft" />
        <div className="h-1.5 w-1.5 rounded-full bg-line-soft" />
        <div className="h-[2px] flex-1 bg-line-soft" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <LandingMotionShell>
      <div
        id="top"
        className="relative min-h-screen overflow-hidden bg-background px-3 pb-14 pt-5 sm:px-4 sm:pb-16 sm:pt-8 lg:px-6 lg:pb-20 lg:pt-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
            backgroundSize: "40px 40px",
          }}
        />
        <StructuredData />
        <ScrollProgressBar />
        <FloatingNavbar />
        <FloatingButton />
        <div className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-col gap-16 sm:gap-20 lg:gap-24">
          <SectionShell>
            <Header />
            <Hero />
          </SectionShell>

          <section className="px-6 sm:px-8 lg:px-10">
            <StatsStripSection />
          </section>

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
            <HowItWorksSection />
          </section>

          <section className="px-6 sm:px-8 lg:px-10">
            <AlternatingFeatureSection />
          </section>

          <SectionDivider />

          <section
            id="privacy"
            className="tabby-anchor px-6 sm:px-8 lg:px-10"
          >
            <PrivacySection />
          </section>

          <section className="px-6 sm:px-8 lg:px-10">
            <CustomizationCardsSection />
          </section>

          <SectionDivider />

          <section className="px-6 sm:px-8 lg:px-10">
            <TestimonialsSection />
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
    </LandingMotionShell>
  );
}
