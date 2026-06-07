@AGENTS.md

# House rules — read these BEFORE touching styles

Every entry here is a mistake that's been made in this codebase and corrected.
If you're about to do something a rule warns against, stop. The user notices.

## Design tokens

- **Never inline a magic number.** Any color, shadow, radius, or size used in
  ≥2 places lives in `app/globals.css` `:root` or `@theme`. Promote on the
  second use, not the fifth.
- **Name tokens by visual role, not component.** `--shadow-tabby` not
  `--shadow-card` — the moment the next person reaches for it on a button or
  input, a component-named token feels wrong and they re-roll their own. The
  legacy `--shadow-card` exists only as a back-compat alias; do not add new
  callers.
- **No raw `0 Npx 0 var(--line)` literals outside `globals.css`.** The lint
  guard at `scripts/check-shadows.mjs` (run via `npm run lint:shadows`) fails
  the build if you reintroduce one. Same rule for `boxShadow: "..."` inline
  styles and `shadow-[0_Npx_0_...]` arbitrary Tailwind values.

## Tailwind v4 specifics — gotchas that have burned this repo

- **Shadow tokens go in `@theme { ... }`, NOT `@theme inline { ... }`** when
  the value is a literal you want Tailwind to generate a utility for. The
  `inline` modifier resolves values at parse time; `--shadow-tabby-xs:
  var(--shadow-tabby-xs)` is a self-reference Tailwind silently drops, so no
  `.shadow-tabby-xs` utility gets emitted and your icons render with no
  shadow. Real, literal values inside `@theme` is the only safe form.
- **`shadow-<color>` does NOT chain with custom shadow tokens.** Combinations
  like `className="shadow-tile shadow-violet-800"` look correct but the color
  utility only modifies `--tw-shadow-color` for Tailwind's *built-in* shadow
  utility — custom shadow tokens fall through to their literal fallback and
  render the default color. To tint a custom shadow, bake the color into the
  token: `--shadow-tile-violet: 0 3.4px 0 var(--color-violet-800)`. Don't try
  to compose at the class level.
- **Color tokens live in `@theme inline` (with `var(--foo)` references)** so
  the underlying `:root` colors stay live and themeable. Shadows that need to
  generate utilities live in plain `@theme` with literal values. These two
  forms are not interchangeable.

## Shared shells — use them, don't reroll them

The repo has four CSS shells and two components for the "card/tile" pattern.
**If you're about to write `border-2 border-line shadow-tabby-*` inline,
you're rebuilding one of these. Don't.** The lint guard at
`scripts/check-shadows.mjs` enforces this — only `IconTile`, `TabbyPanel`,
`mailing-list-input`, and three motion-heavy sections are allowlisted.

| Shell             | Use for                                       |
|-------------------|-----------------------------------------------|
| `.tabby-shell`    | Top-level container (the page shell)          |
| `.tabby-panel`    | Legacy mid-size card class (kept for legacy)  |
| `.tabby-chip`     | Carousel chip with 5px shadow                 |
| `.tabby-button`   | Buttons (use the `TabbyButton` component)     |
| `<IconTile>`      | Any bordered+shadowed rounded square holding a Lucide icon, `next/image`, or check mark |
| `<TabbyPanel>`    | Any bordered+shadowed *card-sized* container (videos, accordions, testimonials, modals, hero shells, CTAs) |

`IconTile` (`app/components/ui/icon-tile.tsx`) has eight sizes —
`2xs / xs / sm / md / lg / xl / 2xl / 3xl` — that pair `h × w`, corner
radius, and `shadow-tabby-*` together. It is `forwardRef` so AnimatedBeam
can anchor to it.

`TabbyPanel` (`app/components/ui/tabby-panel.tsx`) has six sizes —
`sm / md / lg / xl / 2xl / 3xl` — that pair corner radius with
`shadow-tabby-*`. It's polymorphic via the `as` prop (`as="section"`,
`as="article"`, `as="details"`, etc.).

Always pick a preset size before falling back to `className`. Adding a
new one-off via `className` is how the system drifts. If a real new size
emerges (≥2 usage sites), add it to the SIZE map and bump the doc comment.

## framer-motion + LazyMotion

This app wraps with `LazyMotion` in `providers.tsx`. The non-negotiable rule:
**import `m` from `framer-motion`, not `motion`.** Rendering `<motion.div>`
inside a `LazyMotion` boundary throws a runtime error. Same for
`<motion.linearGradient>`, `<motion.path>`, etc. — use `m.linearGradient`,
`m.path`.

## next/image inside a sized container

When wrapping a `next/image` in a fixed-size shell (e.g. `IconTile`), drop
the per-image sizing classes and use `h-full w-full` so the image fills the
shell:

```tsx
<IconTile size="md" tone="bg-surface-2">
  <Image src="/foo.webp" alt="…" width={48} height={48} className="h-full w-full" />
</IconTile>
```

`object-cover` is the right default for square cropping; `object-contain`
when the source has transparent padding you want to preserve.

## Drop shadows in absolute/relative containers

Shadows render *outside* the box. If a flex/grid parent uses `h-[N]` and
`overflow-hidden`, the shadow gets clipped. The fix is `pb-N` on the parent
matching the shadow's reach, not `overflow-visible` everywhere. The
animated-beam section spent two iterations on this — pad the bottom.

## framer-motion AnimatedBeam (custom)

`app/components/ui/animated-beam.tsx` is in-house — we are NOT pulling in
`magicui`. The beam's gradient is `orange → pink → purple`, NOT `coral →
black`; a near-black stop kills the colorful comet effect because the dark
stop dominates the middle of the path. Keep all three stops as bright,
saturated colors.

## Reusable hooks of refs

Never call `useRef` inside `.map()` — it's a rules-of-hooks violation. If you
need N refs for N siblings, declare them flat and put them in an array:

```tsx
const r0 = useRef(null);
const r1 = useRef(null);
const refs = [r0, r1];
```

For dynamic counts, use a single `useRef<HTMLDivElement[]>([])` and write
into it via callback refs.

## Memory and tokens are different things

- **Auto-memory** (`~/.claude/projects/.../memory/`) is for cross-conversation
  facts about the user, the project, and feedback.
- **Design tokens** (`globals.css`) are for cross-component visual values.
  Don't confuse them. A design decision the user made ONCE belongs in a
  token, not memory, so future contributors (including future-me) see it
  without reading the chat log.
