import { LazyYouTube } from "@/app/components/ui/lazy-youtube";
import { ScaleIn } from "@/app/components/ui/motion";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { TabbyPanel } from "@/app/components/ui/tabby-panel";

export function DemoVideoSection() {
  return (
    <div className="mx-auto">
      <SectionHeading
        title="watch Cotabby in action"
        subtitle="See how the suggestions feel inside a real writing flow, instead of floating around like a checklist."
      />

      <ScaleIn delay={0.1} from={0.94}>
        <TabbyPanel size="xl" className="relative isolate mt-10 aspect-video w-full overflow-hidden">
          <LazyYouTube
            videoId="p3TIgxQFQGE"
            title="Cotabby demo video"
            className="h-full w-full"
            iframeClassName="h-full w-full object-cover"
          />
        </TabbyPanel>
      </ScaleIn>
    </div>
  );
}
