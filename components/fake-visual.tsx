import { cn } from "@/lib/utils";

type FakeUi =
  | "discord"
  | "gmail"
  | "outlook"
  | "slack"
  | "notes"
  | "notion"
  | "terminal"
  | "support"
  | "social"
  | "chatgpt"
  | "feature-predictive"
  | "feature-compat"
  | "feature-privacy"
  | "feature-tab"
  | "feature-emoji"
  | "feature-typo";

interface FakeVisualProps {
  variant: string;
  title?: string;
  className?: string;
}

interface FakePreset {
  app: string;
  context: string;
  typed: string;
  ghost: string;
  ui: FakeUi;
}

const PRESETS: Record<string, FakePreset> = {
  "hero-side-typing-flow-left-1": {
    app: "Discord",
    context: "Channel reply",
    typed: "Totally agree, we can",
    ghost: " ship this tonight.",
    ui: "discord",
  },
  "hero-side-typing-flow-left-2": {
    app: "Slack",
    context: "Team update",
    typed: "Quick update:",
    ghost: " release pushed to staging.",
    ui: "slack",
  },
  "hero-side-typing-flow-right-1": {
    app: "Gmail",
    context: "Email draft",
    typed: "Hi team,",
    ghost: " sharing the launch summary below.",
    ui: "gmail",
  },
  "hero-side-typing-flow-right-2": {
    app: "Apple Notes",
    context: "Meeting notes",
    typed: "Action items:",
    ghost: " finalize onboarding copy.",
    ui: "notes",
  },
  "how-it-works-side-left-1": {
    app: "Terminal",
    context: "Cursor detected",
    typed: "$ git commit -m",
    ghost: " \"refactor nav icon\"",
    ui: "terminal",
  },
  "how-it-works-side-left-2": {
    app: "Notion",
    context: "Suggestion appears",
    typed: "Problem statement:",
    ghost: " users lose flow while context switching.",
    ui: "notion",
  },
  "how-it-works-side-right-1": {
    app: "Discord",
    context: "Tab accepts",
    typed: "Looks great, let us",
    ghost: " merge this now.",
    ui: "discord",
  },
  "how-it-works-side-right-2": {
    app: "Outlook",
    context: "Keep typing ignores",
    typed: "Could we move this to",
    ghost: " Thursday afternoon?",
    ui: "outlook",
  },
  "feature-predictive-autocomplete": {
    app: "Notes",
    context: "Predictive",
    typed: "The best product feels",
    ghost: " invisible while you write.",
    ui: "feature-predictive",
  },
  "feature-works-in-all-mac-apps": {
    app: "Slack",
    context: "App compatibility",
    typed: "I can reply from",
    ghost: " any app without switching tabs.",
    ui: "feature-compat",
  },
  "feature-local-processing-privacy": {
    app: "Terminal",
    context: "Local only",
    typed: "status:",
    ghost: " all suggestions generated on-device.",
    ui: "feature-privacy",
  },
  "feature-tab-to-accept-suggestions": {
    app: "Notion",
    context: "Tab to accept",
    typed: "Press Tab to",
    ghost: " accept one word or a full phrase.",
    ui: "feature-tab",
  },
  "feature-smart-emoji-suggestions": {
    app: "Discord",
    context: "Emoji hint",
    typed: "Big win for the team",
    ghost: " :sparkles:",
    ui: "feature-emoji",
  },
  "feature-typo-reduction": {
    app: "Outlook",
    context: "Cleaner writing",
    typed: "Thanks for your patience",
    ghost: " and for the quick response.",
    ui: "feature-typo",
  },
  "use-case-email-messaging": {
    app: "Gmail",
    context: "Email + messaging",
    typed: "Following up on",
    ghost: " yesterday's proposal and next steps.",
    ui: "gmail",
  },
  "use-case-ai-prompt-writing": {
    app: "ChatGPT",
    context: "Prompt writing",
    typed: "Generate a product brief",
    ghost: " for an AI typing assistant on macOS.",
    ui: "chatgpt",
  },
  "use-case-marketing-copy": {
    app: "Notion",
    context: "Marketing copy",
    typed: "Headline:",
    ghost: " Write faster, keep your voice.",
    ui: "notion",
  },
  "use-case-code-documentation": {
    app: "Terminal",
    context: "Code docs",
    typed: "README:\n",
    ghost: " explain setup in under 3 steps.",
    ui: "terminal",
  },
  "use-case-customer-support": {
    app: "Zendesk",
    context: "Support replies",
    typed: "Thanks for reaching out",
    ghost: " we have already applied the fix.",
    ui: "support",
  },
  "use-case-social-media-posts": {
    app: "Social",
    context: "Social posting",
    typed: "Launching today:",
    ghost: " Tabby for macOS, your ghost writer.",
    ui: "social",
  },
  "in-action-email-drafting": {
    app: "Gmail",
    context: "In action email",
    typed: "Hi Alex, just checking in",
    ghost: " on timeline and handoff details.",
    ui: "gmail",
  },
  "in-action-chat-replies": {
    app: "Discord",
    context: "In action chat",
    typed: "I can jump in after lunch",
    ghost: " and help review the patch.",
    ui: "discord",
  },
  "in-action-notes-writing": {
    app: "Apple Notes",
    context: "In action notes",
    typed: "Sprint recap:",
    ghost: " blockers removed, metrics trending up.",
    ui: "notes",
  },
  "in-action-docs-writing": {
    app: "Notion",
    context: "In action docs",
    typed: "Implementation details:",
    ghost: " include fallback behavior and limits.",
    ui: "notion",
  },
  "in-action-support-response": {
    app: "Zendesk",
    context: "In action support",
    typed: "I found the issue",
    ghost: " and deployed the fix to production.",
    ui: "support",
  },
  "in-action-social-posting": {
    app: "Social",
    context: "In action social",
    typed: "We just shipped",
    ghost: " tab-complete writing across Mac apps.",
    ui: "social",
  },
  "in-action-marketing-copy": {
    app: "Notion",
    context: "In action marketing",
    typed: "Product story:",
    ghost: " fewer keystrokes, same authentic tone.",
    ui: "notion",
  },
  "in-action-ai-prompting": {
    app: "ChatGPT",
    context: "In action prompting",
    typed: "Refine this prompt",
    ghost: " for concise and high-accuracy outputs.",
    ui: "chatgpt",
  },
};

function normalizeVariant(value: string) {
  return value.replace(/^\/images\//, "").replace(/\.(png|jpg|jpeg|webp|svg)$/i, "");
}

function fallbackPreset(_key: string): FakePreset {
  return {
    app: "macOS",
    context: "Typing",
    typed: "I am writing",
    ghost: " and matchatype predicts the rest.",
    ui: "notes",
  };
}

function Bar({ width, dark = false }: { width: string; dark?: boolean }) {
  return (
    <div className={cn("h-2 rounded", dark ? "bg-white/18" : "bg-zinc-300", width)} />
  );
}

function Dot({ color }: { color: string }) {
  return <span className={cn("inline-block h-2 w-2 rounded-full", color)} />;
}

function Avatar({ color }: { color: string }) {
  return <span className={cn("inline-block h-4 w-4 rounded-full", color)} />;
}

function Cursor({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-block h-[11px] w-px animate-pulse align-middle mx-0.5",
        dark ? "bg-white" : "bg-zinc-800"
      )}
    />
  );
}

function GhostInput({
  typed,
  ghost,
  dark = false,
  className,
}: {
  typed: string;
  ghost: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-md border px-2.5 py-2 text-[10px] font-medium",
        dark
          ? "border-white/20 bg-black/35 text-white"
          : "border-zinc-300 bg-white text-zinc-800",
        className
      )}
    >
      <span className="shrink-0">{typed}</span>
      <Cursor dark={dark} />
      <span className={cn("truncate", dark ? "text-white/40" : "text-zinc-400")}>{ghost}</span>
    </div>
  );
}

function AppFrame({ app, children }: { app: string; children: React.ReactNode }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[inherit] border border-zinc-300 bg-zinc-100">
      <div className="relative flex h-8 shrink-0 items-center border-b border-zinc-300 bg-zinc-200 px-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="ml-3 h-4 flex-1 rounded-sm border border-zinc-300 bg-zinc-50" />
        <span className="absolute left-1/2 -translate-x-1/2 text-[10px] font-semibold text-zinc-700">{app}</span>
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Feature-specific mocks — each communicates its feature visually
// ─────────────────────────────────────────────────────────────────────────────

// 1. Predictive Autocomplete — inline ghost text mid-sentence in Notes
function FeaturePredictiveMock() {
  return (
    <div className="flex h-full bg-[#fffef8]">
      <aside className="w-16 shrink-0 border-r border-[#e4dcc6] bg-[#f8f1cf] p-2">
        <div className="mb-2 space-y-1.5">
          <div className="rounded-md border border-[#e0d08a]/60 bg-[#fff9d6] p-1.5 shadow-sm">
            <div className="mb-1 h-2 w-full rounded bg-[#c8a84a]" />
            <div className="h-1.5 w-4/5 rounded bg-[#d9b870]/50" />
          </div>
          <div className="space-y-1 p-1.5">
            <div className="h-1.5 w-full rounded bg-[#c8b87a]/40" />
            <div className="h-1.5 w-3/5 rounded bg-[#c8b87a]/30" />
          </div>
          <div className="p-1.5">
            <div className="h-1.5 w-4/5 rounded bg-[#c8b87a]/30" />
          </div>
        </div>
      </aside>
      <div className="flex-1 overflow-hidden p-3">
        <p className="mb-0.5 text-[8px] text-zinc-400">Today, 2:14 PM</p>
        <p className="mb-3 text-[11px] font-bold text-zinc-800">Product ideas</p>
        <div className="mb-3 space-y-1.5">
          <div className="h-1.5 w-11/12 rounded bg-zinc-200" />
          <div className="h-1.5 w-9/12 rounded bg-zinc-200" />
          <div className="h-1.5 w-4/5 rounded bg-zinc-200" />
          <div className="h-1.5 w-7/12 rounded bg-zinc-200" />
        </div>
        {/* The key moment: inline ghost prediction */}
        <p className="text-[10px] leading-relaxed">
          <span className="text-zinc-800">The best product feels</span>
          <Cursor />
          <span className="text-zinc-400 italic"> invisible while you write.</span>
        </p>
        <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-2 py-0.5">
          <kbd className="text-[7px] font-semibold text-zinc-500">⇥</kbd>
          <span className="text-[7px] text-zinc-400">accept</span>
        </div>
      </div>
    </div>
  );
}

// 2. Works in Every Mac App — Slack with "also in" app pill strip
function FeatureCompatMock() {
  const otherApps = [
    { label: "Mail", dot: "bg-sky-500" },
    { label: "Notion", dot: "bg-zinc-800" },
    { label: "Discord", dot: "bg-indigo-500" },
    { label: "Terminal", dot: "bg-emerald-600" },
    { label: "Notes", dot: "bg-yellow-500" },
  ];

  return (
    <div className="flex h-full bg-white">
      <div className="w-14 shrink-0 bg-[#4a154b] p-2">
        <div className="mb-2 flex gap-1">
          <Dot color="bg-[#36c5f0]" />
          <Dot color="bg-[#2eb67d]" />
          <Dot color="bg-[#ecb22e]" />
          <Dot color="bg-[#e01e5a]" />
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-7 rounded bg-white/70" />
          <div className="h-2 w-6 rounded bg-white/55" />
          <div className="h-2 w-5 rounded bg-white/40" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-2.5">
        <div className="mb-2 flex items-center justify-between border-b border-zinc-200 pb-1">
          <span className="text-[10px] font-semibold text-zinc-700"># team-updates</span>
        </div>
        <div className="flex-1 space-y-2 pb-2">
          <div className="flex items-start gap-2">
            <Avatar color="bg-[#36c5f0]" />
            <div className="w-full space-y-1.5">
              <Bar width="w-5/6" />
              <Bar width="w-3/5" />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Avatar color="bg-[#2eb67d]" />
            <div className="w-full space-y-1.5">
              <Bar width="w-4/6" />
            </div>
          </div>
        </div>
        <GhostInput typed="I can reply from" ghost=" any app without switching tabs." />
        {/* "also works in" strip */}
        <div className="mt-2 flex items-center gap-1 overflow-hidden">
          <span className="shrink-0 text-[7px] text-zinc-400">also in</span>
          {otherApps.map((a) => (
            <div key={a.label} className="flex shrink-0 items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-1.5 py-0.5">
              <span className={cn("h-1.5 w-1.5 rounded-full", a.dot)} />
              <span className="text-[7px] text-zinc-500">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. Local Privacy — terminal system status, zero bytes out
function FeaturePrivacyMock() {
  return (
    <div className="h-full bg-[#0d1117] p-3 font-mono">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#27c93f] shadow-[0_0_6px_#27c93f80]" />
        <span className="text-[10px] font-semibold text-[#27c93f]">matchatype  v1.0  running</span>
      </div>
      <div className="mb-3 h-px bg-white/10" />
      <div className="space-y-2 text-[9px]">
        <div className="flex justify-between">
          <span className="text-white/40">model</span>
          <span className="text-[#79c0ff]">phi-3-mini · local</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/40">inference</span>
          <span className="text-[#7ee787]">84ms avg</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/40">network</span>
          <span className="text-[#ff7b72]">✕  disabled</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/40">data out</span>
          <span className="text-[#7ee787]">0.0 bytes</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/40">suggestions</span>
          <span className="text-white/70">847 today</span>
        </div>
      </div>
      <div className="my-3 h-px bg-white/10" />
      <p className="text-[8px] leading-relaxed text-white/35">
        all processing happens on your Mac.
        <br />
        your words never leave this device.
      </p>
    </div>
  );
}

// 4. Tab to Accept — Notion doc with word-by-word ghost + Tab key badge
function FeatureTabAcceptMock() {
  return (
    <div className="h-full bg-white p-3">
      <p className="mb-3 text-[11px] font-bold text-zinc-800">Q2 Product Brief</p>
      <div className="mb-3 space-y-1.5">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          <div className="h-1.5 w-10/12 rounded bg-zinc-200" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          <div className="h-1.5 w-8/12 rounded bg-zinc-200" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          <div className="h-1.5 w-6/12 rounded bg-zinc-200" />
        </div>
      </div>
      {/* Active line with staged word-by-word ghost */}
      <div className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-2 text-[10px] leading-relaxed">
        <span className="text-zinc-800">Press Tab to</span>
        <Cursor />
        <span className="font-medium text-zinc-500"> accept</span>
        <span className="text-zinc-300"> one word or a full phrase.</span>
      </div>
      {/* Tab key UI */}
      <div className="mt-2.5 flex items-center gap-2">
        <kbd className="rounded border border-zinc-300 bg-white px-2 py-0.5 text-[9px] font-semibold text-zinc-600 shadow-[0_2px_0_0_#d4d4d8]">
          ⇥ Tab
        </kbd>
        <span className="text-[8px] text-zinc-400">accept word-by-word</span>
      </div>
    </div>
  );
}

// 5. Smart Emoji — Discord with emoji picker popup row
function FeatureEmojiMock() {
  const suggestions = [
    { icon: "✨", code: ":sparkles:", active: true },
    { icon: "🎉", code: ":tada:", active: false },
    { icon: "🔥", code: ":fire:", active: false },
    { icon: "💪", code: ":muscle:", active: false },
  ];

  return (
    <div className="flex h-full bg-[#313338]">
      <div className="w-9 shrink-0 bg-[#1e1f22] p-1.5">
        <div className="space-y-1.5">
          <div className="h-4 w-4 rounded-full bg-[#5865f2]" />
          <div className="h-4 w-4 rounded-full bg-white/20" />
          <div className="h-4 w-4 rounded-full bg-white/15" />
        </div>
      </div>
      <div className="w-14 shrink-0 border-r border-white/10 bg-[#2b2d31] p-2">
        <div className="space-y-1.5 text-[9px] text-white/70">
          <div className="rounded bg-white/10 px-1 py-0.5 text-white"># general</div>
          <div className="px-1 py-0.5"># product</div>
          <div className="px-1 py-0.5"># release</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-2 text-white">
        <div className="flex-1 space-y-2 pb-2">
          <div className="flex items-start gap-2">
            <Avatar color="bg-[#5865f2]" />
            <div className="w-full space-y-1.5">
              <Bar width="w-5/6" dark />
              <Bar width="w-3/4" dark />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Avatar color="bg-[#57f287]" />
            <div className="w-full space-y-1.5">
              <Bar width="w-4/6" dark />
            </div>
          </div>
        </div>
        {/* Emoji picker popup */}
        <div className="mb-1.5 flex gap-1 rounded-lg border border-white/10 bg-[#2b2d31] p-1.5 shadow-lg">
          {suggestions.map((e) => (
            <div
              key={e.code}
              className={cn(
                "flex items-center gap-1 rounded-md px-1.5 py-1",
                e.active
                  ? "border border-[#5865f2]/60 bg-[#5865f2]/30"
                  : "hover:bg-white/5"
              )}
            >
              <span className="text-[12px] leading-none">{e.icon}</span>
              <span className="text-[7px] text-white/50">{e.code}</span>
            </div>
          ))}
        </div>
        {/* Compose */}
        <div className="flex items-center gap-1 rounded-md border border-white/15 bg-[#383a40] px-2 py-1.5 text-[9px]">
          <span className="text-white">Big win for the team</span>
          <Cursor dark />
          <span className="text-white/35"> :sparkles:</span>
        </div>
      </div>
    </div>
  );
}

// 6. Fewer Typos — Outlook showing inline typo correction
function FeatureTypoMock() {
  return (
    <div className="flex h-full bg-[#f3f6fb]">
      <aside className="w-14 shrink-0 bg-[#0f6cbd] p-2 text-[9px] text-white">
        <div className="mb-2 rounded bg-white/20 px-1.5 py-1 font-medium">Mail</div>
        <div className="space-y-1.5 text-white/70">
          <div className="px-1">Inbox</div>
          <div className="px-1">Drafts</div>
          <div className="px-1">Sent</div>
        </div>
      </aside>
      <div className="flex-1 p-2.5">
        <div className="flex h-full flex-col rounded-md border border-[#c8d5f1] bg-white p-2.5">
          <p className="mb-1.5 text-[10px] font-semibold text-[#1f4ba8]">New Message</p>
          <div className="mb-2 flex items-center gap-2 border-b border-zinc-100 pb-1.5 text-[9px]">
            <span className="text-zinc-400">To</span>
            <div className="h-1.5 w-2/3 rounded bg-zinc-200" />
          </div>
          <div className="mb-2.5 space-y-1.5">
            <div className="h-1.5 w-full rounded bg-zinc-200" />
            <div className="h-1.5 w-5/6 rounded bg-zinc-200" />
          </div>
          {/* Typo correction moment */}
          <div className="mb-2.5 rounded-md border border-orange-100 bg-[#fff8f0] px-2 py-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-zinc-400 line-through decoration-red-400 decoration-wavy">recieve</span>
              <span className="text-[9px] text-zinc-400">→</span>
              <span className="text-[9px] font-medium text-zinc-700">receive</span>
              <span className="ml-auto rounded bg-orange-100 px-1.5 py-0.5 text-[7px] font-medium text-orange-600">
                corrected
              </span>
            </div>
          </div>
          {/* Active compose line */}
          <p className="text-[10px]">
            <span className="text-zinc-800">Thanks for your patience</span>
            <Cursor />
            <span className="text-zinc-300"> and for the quick response.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Generic mocks (used for gallery, hero sides, use-case cards)
// ─────────────────────────────────────────────────────────────────────────────

function GmailMock({ preset }: { preset: FakePreset }) {
  return (
    <div className="flex h-full bg-[#f6f8fc]">
      <aside className="w-14 shrink-0 border-r border-zinc-300 bg-[#f1f3f4] p-2">
        <div className="mb-2 rounded-full bg-[#c2e7ff] px-2 py-1 text-[9px] font-semibold text-[#174ea6]">Compose</div>
        <div className="space-y-1.5 text-[9px] text-zinc-600">
          <div className="rounded bg-white px-1.5 py-1 font-semibold text-[#d93025]">Inbox</div>
          <div className="px-1.5 py-1">Sent</div>
          <div className="px-1.5 py-1">Drafts</div>
        </div>
      </aside>
      <div className="flex-1 p-2.5">
        <div className="mb-2 h-5 rounded-full border border-zinc-300 bg-white" />
        <div className="rounded-md border border-zinc-300 bg-white p-2.5">
          <div className="mb-1.5 flex items-center gap-2 text-[10px] text-zinc-500">
            <span className="w-10">To</span>
            <Bar width="w-2/3" />
          </div>
          <div className="mb-2.5 flex items-center gap-2 text-[10px] text-zinc-500">
            <span className="w-10">Subject</span>
            <Bar width="w-3/4" />
          </div>
          <div className="mb-2 space-y-1.5">
            <Bar width="w-5/6" />
            <Bar width="w-4/6" />
          </div>
          <GhostInput typed={preset.typed} ghost={preset.ghost} />
        </div>
      </div>
    </div>
  );
}

function OutlookMock({ preset }: { preset: FakePreset }) {
  return (
    <div className="flex h-full bg-[#f3f6fb]">
      <aside className="w-14 shrink-0 bg-[#0f6cbd] p-2 text-[9px] text-white">
        <div className="mb-2 rounded bg-white/20 px-1.5 py-1">Mail</div>
        <div className="space-y-1.5 text-white/85">
          <div>Inbox</div>
          <div>Drafts</div>
          <div>Sent</div>
        </div>
      </aside>
      <div className="flex-1">
        <div className="h-6 border-b border-[#c8d5f1] bg-[#e5eefb]" />
        <div className="p-2.5">
          <div className="rounded-md border border-[#c8d5f1] bg-white p-2.5">
            <div className="mb-2 text-[10px] font-semibold text-[#1f4ba8]">New Message</div>
            <div className="mb-1.5 flex items-center gap-2 text-[10px] text-zinc-500">
              <span className="w-10">To</span>
              <Bar width="w-2/3" />
            </div>
            <div className="mb-2 space-y-1.5">
              <Bar width="w-5/6" />
              <Bar width="w-3/5" />
            </div>
            <GhostInput typed={preset.typed} ghost={preset.ghost} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscordMock({ preset }: { preset: FakePreset }) {
  return (
    <div className="flex h-full bg-[#313338]">
      <div className="w-9 shrink-0 bg-[#1e1f22] p-1.5">
        <div className="space-y-1.5">
          <div className="h-4 w-4 rounded-full bg-[#5865f2]" />
          <div className="h-4 w-4 rounded-full bg-white/20" />
          <div className="h-4 w-4 rounded-full bg-white/15" />
        </div>
      </div>
      <div className="w-14 shrink-0 border-r border-white/10 bg-[#2b2d31] p-2">
        <div className="space-y-1.5 text-[9px] text-white/70">
          <div className="rounded bg-white/10 px-1 py-0.5 text-white"># general</div>
          <div className="px-1 py-0.5"># product</div>
          <div className="px-1 py-0.5"># release</div>
        </div>
      </div>
      <div className="flex-1 p-2.5 text-white">
        <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-1">
          <span className="text-[10px] font-semibold"># {preset.context}</span>
          <div className="flex gap-1">
            <Dot color="bg-white/50" />
            <Dot color="bg-white/40" />
            <Dot color="bg-white/30" />
          </div>
        </div>
        <div className="space-y-2 pb-3">
          <div className="flex items-start gap-2">
            <Avatar color="bg-[#5865f2]" />
            <div className="w-full space-y-1.5">
              <Bar width="w-5/6" dark />
              <Bar width="w-3/4" dark />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Avatar color="bg-[#57f287]" />
            <div className="w-full space-y-1.5">
              <Bar width="w-4/6" dark />
            </div>
          </div>
        </div>
        <GhostInput typed={preset.typed} ghost={preset.ghost} dark className="bg-[#383a40]" />
      </div>
    </div>
  );
}

function SlackMock({ preset }: { preset: FakePreset }) {
  return (
    <div className="flex h-full bg-white">
      <div className="w-14 shrink-0 bg-[#4a154b] p-2">
        <div className="mb-2 flex gap-1">
          <Dot color="bg-[#36c5f0]" />
          <Dot color="bg-[#2eb67d]" />
          <Dot color="bg-[#ecb22e]" />
          <Dot color="bg-[#e01e5a]" />
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-7 rounded bg-white/70" />
          <div className="h-2 w-6 rounded bg-white/55" />
          <div className="h-2 w-5 rounded bg-white/40" />
        </div>
      </div>
      <div className="flex-1 p-2.5">
        <div className="mb-2 flex items-center justify-between border-b border-zinc-200 pb-1">
          <span className="text-[10px] font-semibold text-zinc-700"># team-updates</span>
          <div className="flex gap-1">
            <Dot color="bg-zinc-400" />
            <Dot color="bg-zinc-300" />
          </div>
        </div>
        <div className="space-y-2 pb-3">
          <div className="flex items-start gap-2">
            <Avatar color="bg-[#36c5f0]" />
            <div className="w-full space-y-1.5">
              <Bar width="w-5/6" />
              <Bar width="w-3/5" />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Avatar color="bg-[#2eb67d]" />
            <div className="w-full space-y-1.5">
              <Bar width="w-4/6" />
            </div>
          </div>
        </div>
        <GhostInput typed={preset.typed} ghost={preset.ghost} />
      </div>
    </div>
  );
}

function NotesMock({ preset }: { preset: FakePreset }) {
  return (
    <div className="flex h-full bg-[#fffef8]">
      <aside className="w-14 shrink-0 border-r border-[#e4dcc6] bg-[#f8f1cf] p-2">
        <div className="space-y-1.5">
          <div className="h-2.5 w-full rounded bg-[#e8dcab]" />
          <div className="h-2.5 w-5/6 rounded bg-[#e8dcab]" />
          <div className="h-2.5 w-4/6 rounded bg-[#e8dcab]" />
        </div>
      </aside>
      <div className="flex-1 p-2.5">
        <div className="mb-2 text-[10px] font-semibold text-zinc-700">{preset.context}</div>
        <div className="space-y-1.5 pb-3">
          <Bar width="w-5/6" />
          <Bar width="w-4/6" />
          <Bar width="w-3/6" />
        </div>
        <GhostInput typed={preset.typed} ghost={preset.ghost} />
      </div>
    </div>
  );
}

function NotionMock({ preset }: { preset: FakePreset }) {
  return (
    <div className="h-full bg-white p-3">
      <div className="h-full rounded-md border border-zinc-300 bg-white p-2.5">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-3 w-3 rounded border border-zinc-300" />
          <div className="h-2.5 w-28 rounded bg-zinc-300" />
        </div>
        <div className="space-y-1.5 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-zinc-400" />
            <Bar width="w-10/12" />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-zinc-400" />
            <Bar width="w-8/12" />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-zinc-400" />
            <Bar width="w-6/12" />
          </div>
        </div>
        <GhostInput typed={preset.typed} ghost={preset.ghost} />
      </div>
    </div>
  );
}

function TerminalMock({ preset }: { preset: FakePreset }) {
  return (
    <div className="h-full bg-[#0d1117] p-3 text-white">
      <div className="mb-2 text-[10px] text-white/60">Last login: today</div>
      <div className="space-y-1.5 pb-3 text-[9px]">
        <div className="flex items-center gap-1 text-[#7ee787]">
          <span>$</span>
          <Bar width="w-3/4" dark />
        </div>
        <div className="flex items-center gap-1 text-[#79c0ff]">
          <span>$</span>
          <Bar width="w-4/6" dark />
        </div>
      </div>
      <GhostInput typed={preset.typed} ghost={preset.ghost} dark />
    </div>
  );
}

function SupportMock({ preset }: { preset: FakePreset }) {
  return (
    <div className="flex h-full bg-[#f7f7f9]">
      <aside className="w-14 shrink-0 border-r border-zinc-300 bg-[#eef2f7] p-2">
        <div className="space-y-1.5">
          <div className="h-3 w-full rounded bg-[#c8d6eb]" />
          <div className="h-3 w-5/6 rounded bg-[#c8d6eb]" />
          <div className="h-3 w-4/6 rounded bg-[#c8d6eb]" />
        </div>
      </aside>
      <div className="flex-1 p-2.5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-zinc-700">Ticket #4821</span>
          <span className="rounded bg-[#dcfce7] px-1.5 py-0.5 text-[9px] font-semibold text-[#166534]">Open</span>
        </div>
        <div className="space-y-2 pb-3">
          <div className="rounded-md bg-zinc-200 px-2 py-1.5 text-[9px] text-zinc-700">
            <Bar width="w-5/6" />
          </div>
          <div className="rounded-md bg-[#dbeafe] px-2 py-1.5 text-[9px] text-zinc-700">
            <Bar width="w-2/3" />
          </div>
        </div>
        <GhostInput typed={preset.typed} ghost={preset.ghost} />
      </div>
    </div>
  );
}

function SocialMock({ preset }: { preset: FakePreset }) {
  return (
    <div className="h-full bg-white p-3">
      <div className="rounded-md border border-zinc-300 bg-white p-2.5">
        <div className="mb-2 flex items-center justify-between border-b border-zinc-200 pb-1.5">
          <div className="flex items-center gap-2">
            <Avatar color="bg-sky-400" />
            <Bar width="w-20" />
          </div>
          <span className="text-[9px] text-zinc-500">240</span>
        </div>
        <GhostInput typed={preset.typed} ghost={preset.ghost} />
      </div>
    </div>
  );
}

function ChatGptMock({ preset }: { preset: FakePreset }) {
  return (
    <div className="flex h-full bg-[#f7f7f8]">
      <aside className="w-14 shrink-0 bg-[#202123] p-2">
        <div className="space-y-1.5">
          <div className="h-2.5 w-full rounded bg-white/25" />
          <div className="h-2.5 w-5/6 rounded bg-white/20" />
          <div className="h-2.5 w-4/6 rounded bg-white/15" />
        </div>
      </aside>
      <div className="flex-1 p-3">
        <div className="space-y-2 pb-3">
          <div className="rounded-md border border-zinc-300 bg-white p-2">
            <Bar width="w-5/6" />
          </div>
          <div className="rounded-md border border-zinc-300 bg-[#ececf1] p-2">
            <Bar width="w-4/6" />
          </div>
        </div>
        <GhostInput typed={preset.typed} ghost={preset.ghost} />
      </div>
    </div>
  );
}

function renderUi(preset: FakePreset) {
  switch (preset.ui) {
    case "feature-predictive": return <FeaturePredictiveMock />;
    case "feature-compat":     return <FeatureCompatMock />;
    case "feature-privacy":    return <FeaturePrivacyMock />;
    case "feature-tab":        return <FeatureTabAcceptMock />;
    case "feature-emoji":      return <FeatureEmojiMock />;
    case "feature-typo":       return <FeatureTypoMock />;
    case "discord":   return <DiscordMock preset={preset} />;
    case "gmail":     return <GmailMock preset={preset} />;
    case "outlook":   return <OutlookMock preset={preset} />;
    case "slack":     return <SlackMock preset={preset} />;
    case "notes":     return <NotesMock preset={preset} />;
    case "notion":    return <NotionMock preset={preset} />;
    case "terminal":  return <TerminalMock preset={preset} />;
    case "support":   return <SupportMock preset={preset} />;
    case "social":    return <SocialMock preset={preset} />;
    case "chatgpt":   return <ChatGptMock preset={preset} />;
    default:          return <NotesMock preset={preset} />;
  }
}

export function FakeVisual({ variant, title, className }: FakeVisualProps) {
  const key = normalizeVariant(variant);
  const preset = PRESETS[key] || fallbackPreset(key);
  const label = title || `${preset.app} ${preset.context}`;

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[inherit] shadow-[0_12px_28px_rgba(0,0,0,0.18)]",
        className
      )}
      role="img"
      aria-label={label}
    >
      <AppFrame app={preset.app}>{renderUi(preset)}</AppFrame>
    </div>
  );
}
