import { LazyYouTube } from "@/app/components/ui/lazy-youtube";
import { ScaleIn } from "@/app/components/ui/motion";
import { SectionHeading } from "@/app/components/ui/section-heading";

export function DemoVideoSection() {
  return (
    <div className="mx-auto">
      <SectionHeading
        title="watch Cotabby in action"
        subtitle="See how the suggestions feel inside a real writing flow, instead of floating around like a checklist."
      />

      <ScaleIn delay={0.1} from={0.94}>
        <div className="relative isolate mt-10">
          <LazyYouTube
            videoId="p3TIgxQFQGE"
            title="Cotabby demo video"
            className="relative aspect-video w-full overflow-hidden rounded-[1.35rem] border-2 border-line bg-surface shadow-[0_11.8px_0_var(--line)]"
            iframeClassName="h-full w-full object-cover"
          />
        </div>
      </ScaleIn>
    </div>
  );
}
