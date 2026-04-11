const FAQ_ITEMS = [
  {
    question: "What is Tabby?",
    answer:
      "Tabby is an AI writing assistant that helps you draft emails, notes, and docs faster with suggestions that match your tone.",
  },
  {
    question: "Which apps does Tabby support?",
    answer:
      "Tabby is designed to work across common writing surfaces, including email, docs, and note-taking workflows.",
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
      "Yes. Tabby can be configured with different model options so you can pick one that fits your quality and speed preferences.",
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
      "Tabby is built with privacy in mind and aims to minimize data exposure while processing only what is needed for suggestions.",
  },
  {
    question: "Can teams use Tabby together?",
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
      <h2 className="text-center text-[2.2rem] font-semibold leading-none tracking-tight text-neutral-900 sm:text-[2.7rem]">
        Frequently asked Questions
      </h2>

      <div className="mt-8 overflow-hidden rounded-[2rem] border border-neutral-300 bg-neutral-50 sm:mt-10">
        {FAQ_ITEMS.map((item, index) => (
          <details
            key={item.question}
            className={`group ${index === 0 ? "" : "border-t border-neutral-300"}`}
          >
            <summary className="list-none cursor-pointer px-6 py-5 [&::-webkit-details-marker]:hidden">
              <div className="flex items-center justify-between gap-4">
                <span className="text-left text-base font-medium tracking-tight text-neutral-900 sm:text-lg">
                  {item.question}
                </span>
                <span className="text-2xl leading-none text-neutral-500 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </div>
            </summary>

            <p className="px-6 pb-6 pr-14 text-sm leading-relaxed text-neutral-700 sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
