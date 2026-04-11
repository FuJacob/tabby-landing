import Image from "next/image";

type PlaceholderBlockProps = {
  className?: string;
};

function PlaceholderBlock({ className = "" }: PlaceholderBlockProps) {
  return (
    <div
      className={`h-44 overflow-hidden rounded-[1.9rem] border border-neutral-300 bg-neutral-50 sm:h-52 ${className}`}
    >
      <Image
        src="/placeholder.jpg"
        alt="Feature placeholder"
        width={1200}
        height={900}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function AlternatingFeatureSection() {
  return (
    <section className="space-y-8 sm:space-y-10">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <h3 className="text-[2.25rem] font-semibold leading-[0.95] tracking-tight text-neutral-900 sm:text-[2.9rem]">
          Write your emails faster
        </h3>
        <PlaceholderBlock />
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <PlaceholderBlock className="md:order-1" />
        <h3 className="text-[2.25rem] font-semibold leading-[0.95] tracking-tight text-neutral-900 sm:text-[2.9rem] md:order-2 md:text-right">
          Write your notes faster
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <h3 className="text-[2.25rem] font-semibold leading-[0.95] tracking-tight text-neutral-900 sm:text-[2.9rem]">
          Write your docs faster
        </h3>
        <PlaceholderBlock />
      </div>
    </section>
  );
}
