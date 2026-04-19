import { CountUp, Stagger, StaggerItem } from "./motion";

type StatProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  hint: string;
};

function Stat({ value, prefix, suffix, label, hint }: StatProps) {
  return (
    <div className="flex flex-col gap-1.5 px-4 py-5 sm:px-6">
      <div className="tabby-display text-[2.3rem] leading-none tracking-tight text-ink sm:text-[2.9rem]">
        <CountUp to={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className="text-sm font-semibold tracking-tight text-ink sm:text-base">
        {label}
      </div>
      <div className="text-xs leading-relaxed tracking-tight text-subtle sm:text-sm">
        {hint}
      </div>
    </div>
  );
}

export function StatsStripSection() {
  return (
    <section className="mx-auto max-w-[1220px]">
      <div className="tabby-panel rounded-[1.6rem] p-2 sm:p-3">
        <Stagger
          stagger={0.12}
          className="grid grid-cols-2 divide-line-soft rounded-[1.2rem] border-2 border-line bg-surface-3 md:grid-cols-4 md:divide-x-2"
        >
          <StaggerItem className="border-b-2 border-line-soft md:border-b-0">
            <Stat
              value={80}
              prefix="<"
              suffix="ms"
              label="suggestion latency"
              hint="Local inference, no round trip"
            />
          </StaggerItem>
          <StaggerItem className="border-b-2 border-line-soft md:border-b-0">
            <Stat
              value={9}
              suffix="+"
              label="apps supported"
              hint="Mail, Notes, Slack, Notion, more"
            />
          </StaggerItem>
          <StaggerItem>
            <Stat
              value={0}
              label="data leaves your Mac"
              hint="Every token stays on-device"
            />
          </StaggerItem>
          <StaggerItem>
            <Stat
              value={100}
              suffix="%"
              label="free & open source"
              hint="MIT licensed, built in public"
            />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
