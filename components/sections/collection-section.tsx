"use client";

import { FakeVisual } from "@/components/fake-visual";
import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Email & Messaging",
    description:
      "Zip through your inbox. Craft thoughtful replies in half the time.",
    price: "Free",
    image: "/images/use-case-email-messaging.png",
  },
  {
    id: 2,
    name: "AI Prompt Writing",
    description:
      "Type smarter prompts faster — Tabby accelerates your AI workflow too.",
    price: "Free",
    image: "/images/use-case-ai-prompt-writing.png",
  },
  {
    id: 3,
    name: "Marketing Copy",
    description:
      "Craft compelling content in record time. Watch your conversions soar.",
    price: "Pro",
    image: "/images/use-case-marketing-copy.png",
  },
  {
    id: 4,
    name: "Code Documentation",
    description:
      "Write clear, concise docs in a flash. Your team will love you for it.",
    price: "Free",
    image: "/images/use-case-code-documentation.png",
  },
  {
    id: 5,
    name: "Customer Support",
    description:
      "Respond quickly yet individually. Keep your customers smiling.",
    price: "Free",
    image: "/images/use-case-customer-support.png",
  },
  {
    id: 6,
    name: "Social Media Posts",
    description: "Post more, stress less — in your own voice.",
    price: "Free",
    image: "/images/use-case-social-media-posts.png",
  },
];

export function CollectionSection() {
  return (
    <section id="plans" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Works Everywhere
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="group flex-shrink-0 w-[75vw] snap-center"
            >
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                {accessory.image.startsWith("/images/use-case-") ? (
                  <FakeVisual
                    variant={accessory.image}
                    title={accessory.name}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <FadeImage
                    src={accessory.image || "/placeholder.svg"}
                    alt={accessory.name}
                    fill
                    className="object-cover group-hover:scale-105"
                  />
                )}
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                {accessory.image.startsWith("/images/use-case-") ? (
                  <FakeVisual
                    variant={accessory.image}
                    title={accessory.name}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <FadeImage
                    src={accessory.image || "/placeholder.svg"}
                    alt={accessory.name}
                    fill
                    className="object-cover group-hover:scale-105"
                  />
                )}
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
