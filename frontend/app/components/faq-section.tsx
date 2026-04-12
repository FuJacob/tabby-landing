const FAQ_ITEMS = [
  {
    question: "What is tabby?",
    answer:
      "tabby is an AI writing assistant that helps you draft emails, notes, and docs faster with suggestions that match your tone.",
  },
  {
    question: "Which apps does tabby support?",
    answer:
      "tabby is designed to work across common writing surfaces, including email, docs, and note-taking workflows.",
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
    question: "Does tabby support multiple models?",
    answer:
      "Yes. tabby can be configured with different model options so you can pick one that fits your quality and speed preferences.",
  },
  {
    question: "How fast are suggestions generated?",
    answer:
      "Most suggestions appear within a few seconds, depending on prompt length, model choice, and network conditions.",
  },
  {
    question: "Can I edit suggestions before sending?",
    answer:
      "Absolutely. Every suggestion is fully editable, so you can review and adjust wording before sharing anything.",
  },
  {
    question: "Is my data private?",
    answer:
      "tabby is built with privacy in mind and aims to minimize data exposure while processing only what is needed for suggestions.",
  },
  {
    question: "Can teams use tabby together?",
    answer:
      "Yes. Teams can align on tone and workflows so everyone writes with a more consistent voice.",
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
      <h2 className="tabby-display text-center text-[2.8rem] leading-none tracking-tight text-ink sm:text-[4rem]">
        questions, answered
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base">
        The basics, without the enterprise brochure voice.
      </p>

      <div className="mt-10 space-y-4">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.question}
            className="group overflow-hidden rounded-[1rem] border-2 border-line bg-surface-3 shadow-[0_4px_0_var(--line)] transition-colors"
          >
            <summary className="list-none cursor-pointer px-6 py-5 [&::-webkit-details-marker]:hidden">
              <div className="flex items-center justify-between gap-4">
                <span className="text-left text-base font-medium tracking-tight text-ink sm:text-lg">
                  {item.question}
                </span>
                <span className="text-2xl leading-none text-accent transition-transform duration-200 group-open:rotate-45">
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
        ))}
      </div>
    </section>
  );
}
