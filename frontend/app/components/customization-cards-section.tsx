import Image from "next/image";

function PlaceholderPanel() {
  return (
    <div className="mt-5 h-40 overflow-hidden rounded-[1.8rem] border border-neutral-300 bg-neutral-50 sm:h-48">
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

type CustomItemProps = {
  title: string;
};

function CustomItem({ title }: CustomItemProps) {
  return (
    <div>
      <h3 className="text-center text-[2rem] font-semibold leading-tight tracking-tight text-neutral-900 sm:text-[2.4rem]">
        {title}
      </h3>
      <PlaceholderPanel />
    </div>
  );
}

export function CustomizationCardsSection() {
  return (
    <section>
      <h2 className="mb-8 text-center text-[2.5rem] font-semibold leading-none tracking-tight text-neutral-900 sm:mb-10 sm:text-[3rem]">
        Customize Tabby
      </h2>
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr_0.65fr]">
        <CustomItem title="Customize model" />
        <CustomItem title="Customize word count" />
        <CustomItem title="Personalize" />
      </div>
    </section>
  );
}
