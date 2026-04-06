"use client";

import { FakeVisual } from "@/components/fake-visual";
import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Predicts What You'd Say Anyway",
    description: "Autocomplete",
    image: "/images/feature-predictive-autocomplete.png",
  },
  {
    title: "Works in Every Mac App",
    description: "Compatibility",
    image: "/images/feature-works-in-all-mac-apps.png",
  },
  {
    title: "100% Local — Your Data Stays Put",
    description: "Privacy",
    image: "/images/feature-local-processing-privacy.png",
  },
  {
    title: "Accept Word-by-Word with Tab",
    description: "Control",
    image: "/images/feature-tab-to-accept-suggestions.png",
  },
  {
    title: "Smart Emoji Suggestions",
    description: "Expression",
    image: "/images/feature-smart-emoji-suggestions.png",
  },
  {
    title: "Fewer Typos, More Confidence",
    description: "Accuracy",
    image: "/images/feature-typo-reduction.png",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="how-it-works" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Built for Speed.
          <br />
          Designed to Disappear.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Capabilities
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              {feature.image.startsWith("/images/feature-") ? (
                <FakeVisual
                  variant={feature.image}
                  title={feature.title}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <FadeImage
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              )}
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}
