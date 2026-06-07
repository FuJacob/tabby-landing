"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/app/components/ui/section-heading";

const EASE = [0.34, 1.56, 0.64, 1] as const; // springy back-out for the "pop"

type Review = {
  user: string;
  quote: string;
  /** Position of the bubble's center as a % of the cloud container. */
  left: number;
  top: number;
  /** Resting rotation for a hand-pinned feel. */
  rotate: number;
  /** Order in which this bubble pops in (lower = earlier). */
  order: number;
};

// Ranked snippets — strongest social proof first, scattered so the punchiest
// lines (anti-subscription, "finally someone built this") sit up top.
const REVIEWS: Review[] = [
  { user: "Zealousideal-Hat-68", quote: "This is exactly what I was looking for.", left: 50, top: 9, rotate: -2, order: 1 },
  { user: "bearclaw191991", quote: "Thank YOU. I literally have no more money for subscriptions.", left: 17, top: 21, rotate: 3, order: 3 },
  { user: "10dot", quote: "Paying more money to eat more of my own RAM is laughable.", left: 83, top: 18, rotate: -3, order: 2 },
  { user: "areyouredditenough", quote: "You're doing god's work here!", left: 8, top: 49, rotate: 2, order: 6 },
  { user: "cronberry", quote: "Just uninstalled Cotypist and installed Tabby instead.", left: 92, top: 47, rotate: -2, order: 4 },
  { user: "ContextSpiritual9068", quote: "The local-first approach is exactly what this kind of tool needs.", left: 16, top: 78, rotate: -3, order: 8 },
  { user: "hexxeric", quote: "Open-source is what I have been waiting for.", left: 84, top: 76, rotate: 3, order: 5 },
  { user: "robschmidt87", quote: "I absolutely admire your mission.", left: 50, top: 90, rotate: 2, order: 9 },
  { user: "LTame", quote: "Looking forward to uninstalling Cotypist and replacing it with an open-source alternative.", left: 32, top: 35, rotate: 2, order: 7 },
  { user: "jittarao", quote: "I might just cancel my Cotypist sub.", left: 68, top: 62, rotate: -2, order: 10 },
];

const POP_STEP = 0.16; // seconds between each bubble popping in

export function ReviewsCloudSection() {
  return (
    <section className="mx-auto max-w-content">
      <SectionHeading
        title="people are switching"
        titleSize="text-[2.4rem] sm:text-[4rem]"
        subtitle="What folks are saying after ditching their autocomplete subscription."
      />

      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto mt-12 h-[34rem] w-full overflow-hidden rounded-[1.85rem] border-2 border-line bg-ink shadow-tabby-xl sm:h-[40rem]"
      >
        {/* dotted texture, like the page shell */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Center Cotabby icon — pops first */}
        <m.div
          variants={{
            hidden: { opacity: 0, scale: 0.4 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: EASE },
            },
          }}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="tabby-cat-breathe flex h-20 w-20 items-center justify-center rounded-[1.4rem] border-2 border-line bg-white shadow-tabby sm:h-24 sm:w-24">
            <Image
              src="/app-icons/cotabby-icon.webp"
              alt="Cotabby"
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
          </div>
        </m.div>

        {/* Review bubbles — pop in one by one */}
        {REVIEWS.map((review) => (
          <m.figure
            key={review.user}
            variants={{
              hidden: { opacity: 0, scale: 0.5, y: 12 },
              show: {
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: review.rotate,
                transition: {
                  duration: 0.5,
                  ease: EASE,
                  delay: 0.45 + review.order * POP_STEP,
                },
              },
            }}
            style={{ left: `${review.left}%`, top: `${review.top}%` }}
            className="absolute w-44 max-w-[44vw] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-line bg-surface px-3.5 py-2.5 shadow-tabby-sm sm:w-56"
          >
            <blockquote className="text-[0.78rem] font-semibold leading-snug tracking-tight text-ink sm:text-sm">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-1.5 text-[0.68rem] font-bold tracking-tight text-subtle">
              u/{review.user}
            </figcaption>
          </m.figure>
        ))}
      </m.div>
    </section>
  );
}
