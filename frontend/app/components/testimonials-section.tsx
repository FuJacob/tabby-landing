type ReviewCardProps = {
  quote: string;
  name: string;
  role: string;
  className?: string;
  quoteClassName?: string;
};

function PersonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="8" r="3.2" fill="currentColor" />
      <path
        d="M5.5 19.5c0-3.2 2.9-5.2 6.5-5.2s6.5 2 6.5 5.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReviewCard({
  quote,
  name,
  role,
  className = "",
  quoteClassName = "",
}: ReviewCardProps) {
  return (
    <article
      className={`tabby-panel-soft flex h-full flex-col rounded-[1.3rem] p-6 sm:p-7 ${className}`}
    >
      <p
        className={`text-base leading-relaxed tracking-tight text-ink sm:text-[1.1rem] lg:text-[1.2rem] ${quoteClassName}`}
      >
        {quote}
      </p>

      <div className="mt-auto flex items-center gap-3 border-t-2 border-line-soft pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] border-2 border-line bg-surface-3 text-moss">
          <PersonIcon className="h-5 w-5" />
        </div>

        <div className="leading-tight">
          <p className="text-base font-semibold tracking-tight text-ink sm:text-[1.1rem]">
            {name}
          </p>
          <p className="text-sm tracking-tight text-subtle">{role}</p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <h2 className="tabby-display text-center text-[2.9rem] leading-none tracking-tight text-ink sm:text-[4.1rem]">
        people using tabby, daily
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed tracking-tight text-muted sm:text-base">
        A few notes from people using tabby across email, notes, docs, and chat.
      </p>

      <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-12 md:auto-rows-[minmax(150px,auto)]">
        <ReviewCard
          className="md:col-span-7 md:row-span-2"
          quoteClassName="text-[1.55rem] sm:text-[1.98rem] lg:text-[2.19rem] leading-[2.18]"
          quote="I used to rewrite follow-up emails three times before sending. Now the first suggestion is usually close enough that I tweak a line and hit send. It still sounds like me, just faster."
          name="Maya Chen"
          role="Product Marketing"
        />

        <ReviewCard
          className="md:col-span-5"
          quoteClassName="sm:text-[1.08rem] lg:text-[1.14rem]"
          quote="The inline ghost text is quiet, which I like. It helps me stay in flow instead of switching to a separate writing tool."
          name="Darren Park"
          role="Engineering Manager"
        />

        <ReviewCard
          className="md:col-span-5"
          quoteClassName="sm:text-[1.02rem] lg:text-[1.08rem]"
          quote="For meeting notes, it picks up where I was going and keeps the tone natural. I spend less time cleaning up rough drafts after calls."
          name="Sofia Malik"
          role="Customer Success"
        />

        <ReviewCard
          className="md:col-span-12"
          quoteClassName="sm:text-[1.12rem] lg:text-[1.18rem]"
          quote="We are shipping updates faster because release summaries and internal docs start with a strong draft instead of a blank page."
          name="Noah Rivera"
          role="Product Lead"
        />
      </div>
    </section>
  );
}
