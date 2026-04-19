import { FadeIn, Stagger, StaggerItem, WordReveal } from "./motion";

export const FAQ_ITEMS = [
  {
    question: "What is Tabby?",
    answer:
      "Tabby is an AI writing assistant that helps you draft emails, notes, and docs faster with suggestions that match your tone — and runs entirely on your Mac.",
  },
  {
    question: "Which apps does Tabby support?",
    answer:
      "Tabby is designed to work across common writing surfaces, including email, docs, chat, and note-taking apps on macOS.",
  },
  {
    question: "Can I customize the writing style?",
    answer:
      "Yes. You can tune style settings so output feels more formal, casual, concise, or detailed depending on your needs.",
  },
  {
    question: "Can I control the target word count?",
    answer:
      "Yes. You can set short, medium, or long response goals so suggestions fit the length you want.",
  },
  {
    question: "Does Tabby support multiple models?",
    answer:
      "Yes. Tabby can be configured with different local model options so you can pick one that fits your quality and speed preferences.",
  },
  {
    question: "How fast are suggestions generated?",
    answer:
      "Most suggestions appear in under 80ms because inference runs on Apple's Neural Engine — no network round trip.",
  },
  {
    question: "Can I edit suggestions before sending?",
    answer:
      "Absolutely. Every suggestion is fully editable, so you can review and adjust wording before sharing anything.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Nothing leaves your Mac. No accounts, no cloud, no telemetry. Tabby is open source so you can verify it yourself.",
  },
  {
    question: "Can teams use Tabby together?",
    answer:
      "Yes. Teams can align on tone and workflows so everyone writes with a more consistent voice — each install remains local.",
  },
  {
    question: "Where can I get updates about new features?",
    answer:
      "You can follow product updates through the app and release notes where new capabilities are announced.",
  },
] as const;

export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-4xl">
      <FadeIn>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface-2 px-3 py-1 text-xs font-medium tracking-tight text-ink shadow-[0_2px_0_var(--line)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            faq
          </span>
        </div>
      </FadeIn>

      <WordReveal
        as="h2"
        text="questions, answered"
        className="tabby-display mt-4 text-center text-[2.8rem] leading-[1.02] tracking-tight text-ink sm:text-[4rem]"
      />
      <FadeIn delay={0.1}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base">
          The basics, without the enterprise brochure voice.
        </p>
      </FadeIn>

      <Stagger stagger={0.06} className="mt-10 space-y-3">
        {FAQ_ITEMS.map((item) => (
          <StaggerItem key={item.question}>
            <details className="group overflow-hidden rounded-[1rem] border-2 border-line bg-surface-2 shadow-[0_4px_0_var(--line)] transition-all duration-200 open:bg-surface-3 hover:-translate-y-[1px]">
              <summary className="list-none cursor-pointer px-6 py-5 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-left text-base font-medium tracking-tight text-ink sm:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-line bg-background text-xl leading-none text-ink transition-transform duration-200 group-open:rotate-45 group-open:bg-accent/20">
                    +
                  </span>
                </div>
              </summary>

              <div className="border-t-2 border-line-soft px-6 pb-6 pr-14 pt-4">
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  {item.answer}
                </p>
              </div>
            </details>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
