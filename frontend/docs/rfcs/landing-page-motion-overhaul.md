# RFC: Landing Page Motion Overhaul

Status: Proposed  
Date: 2026-04-19  
Scope: `app/page.tsx` landing page experience  
Primary files affected:

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `app/components/motion.tsx`
- `app/components/hero.tsx`
- `app/components/demo-video-section.tsx`
- `app/components/apps-carousel-section.tsx`
- `app/components/how-it-works-section.tsx`
- `app/components/privacy-section.tsx`
- `app/components/customization-cards-section.tsx`
- `app/components/testimonials-section.tsx`
- `app/components/slogan-cta-section.tsx`
- `app/components/floating-button.tsx`

## Summary

This RFC proposes a full motion direction upgrade for the landing page. The current site already has good fundamentals: it uses a coherent visual language, tasteful reveal animations, and a small set of reusable motion primitives. The gap is not quality at the component level. The gap is authorship at the page level.

Right now, the page feels like a sequence of individually animated sections. The proposed direction is to turn it into a composed motion narrative with one memorable opening, a more deliberate hero sequence, a small number of high-impact story beats during scroll, and stronger micro-interactions across the rest of the experience.

The chosen approach is intentionally not maximalist. We are not trying to make the page feel like a generic “motion demo.” We are trying to make it feel premium, cinematic, tactile, and product-specific while still preserving clarity, performance, accessibility, and the quiet confidence of the Tabby brand.

## Problem Statement

The current landing page motion system is well executed but limited in scope.

What the current implementation does well:

- It uses consistent reveal patterns across the page.
- It keeps the visual tone calm and product-centric.
- It already has reusable motion primitives in `app/components/motion.tsx`.
- It avoids most of the obvious anti-patterns of over-animation.

Where it falls short:

- Motion is mostly sectional, not narrative.
- The first impression is good, but not unforgettable.
- The hero sequence is staggered, but not choreographed as a single composition.
- Scroll transitions between major sections do not feel connected.
- Several sections use the same reveal language, which reduces surprise and perceived craft over time.
- The page does not yet fully embody the product promise of “quiet, native, fast, local, and magical.”

In short: the page moves, but it does not yet perform.

## Goals

The motion overhaul should achieve the following goals:

1. Create a stronger first impression without turning the site into a loading theater.
2. Make the hero feel authored as a single cinematic event rather than a stack of delayed children.
3. Introduce 2-4 high-value story beats that are unique to Tabby’s product narrative.
4. Improve the tactile feel of interactive elements so the entire page feels more alive, not just the hero.
5. Preserve the brand’s warm, physical, editorial visual language.
6. Maintain strong performance and accessibility standards.
7. Keep the implementation maintainable by building on the existing Framer Motion stack first.

## Non-Goals

This RFC explicitly does not propose the following:

- A long blocking splash or fake loading screen.
- A motion-heavy rewrite of every section purely for spectacle.
- A full migration to GSAP or another second animation stack in phase one.
- Highly futuristic effects that conflict with the current visual identity.
- Animation that obscures the CTA or delays access to core content.

## Current State

The landing page already uses a small internal motion toolkit in `app/components/motion.tsx`:

- `FadeIn`
- `Stagger` and `StaggerItem`
- `HeroReveal`
- `ScaleIn`
- `ParallaxY`
- `WordReveal`
- `HoverLift`
- `CountUp`
- `Typewriter`
- `ScrollProgressBar`

This is a strong starting point because it means the current codebase already thinks in reusable motion primitives instead of one-off effects.

The current page composition in `app/page.tsx` is linear and section-based:

- Header and hero
- Stats strip
- Demo video
- Apps carousel
- How it works
- Alternating feature rows
- Privacy
- Customization
- Testimonials
- FAQ
- CTA
- Footer

Most sections animate in isolation when they enter the viewport. This gives the page polish, but it also means there is very little relationship between one moment and the next. As a result, the experience feels clean and competent, but not yet cinematic.

## Design Principles

The motion system should follow these principles.

### 1. Product-first motion

Every major animation should reinforce a real product idea:

- local inference
- inline ghost text
- quiet assistance
- native macOS feel
- speed and tactility

If an animation looks impressive but does not strengthen one of those ideas, it is likely the wrong animation.

### 2. Restraint beats density

We should prefer a few authored, memorable moments over constant movement everywhere. Premium motion feels intentional. Cheap motion feels omnipresent.

### 3. Motion should feel physical

The current visual language already uses borders, offset shadows, keycaps, macOS window chrome, and rounded surfaces. Motion should reinforce this physicality through:

- weighted easing
- layered depth
- slight overshoot where appropriate
- coordinated settling behavior
- tactile hover response

### 4. Motion should be progressive, not blocking

The landing page must remain usable and understandable even if:

- JavaScript is delayed
- the device is slow
- `prefers-reduced-motion` is enabled
- the intro has already played on a previous visit

### 5. Surprise should be concentrated

The page should have a clear hierarchy of motion intensity:

- highest intensity on initial arrival and the hero
- medium intensity on one or two product-story sections
- low-intensity polish across the rest of the page

## Alternatives Considered

### Option A: Maximal spectacle

This option would add a full-screen intro, pinned scroll sequences, masks, section morphs, high-density decorative effects, and highly dramatic transitions across the whole page.

Pros:

- Highest immediate “wow” factor.
- Strong visual differentiation from a standard SaaS landing page.

Cons:

- High risk of feeling generic or agency-demo-like.
- More likely to clash with the brand’s warm, quiet product voice.
- Higher implementation complexity and performance risk.
- Easier to harm conversion by delaying orientation and CTA access.

Decision:

Rejected for phase one. The cost and brand risk are too high relative to the likely upside.

### Option B: Refinement-only

This option would keep the overall structure intact and only improve timings, easing, hover states, and reveal quality.

Pros:

- Lowest risk.
- Easy to implement on the existing foundation.

Cons:

- Likely to remain “nice” rather than “memorable.”
- Does not solve the core issue that the page lacks a composed narrative.

Decision:

Rejected as the primary approach because it will not create the step-change in perception we want.

### Option C: Signature intro plus authored story beats

This option adds one memorable opening sequence, re-choreographs the hero, upgrades a few key scroll moments, and improves micro-interactions across the page while keeping the rest of the system disciplined.

Pros:

- Highest signal-to-risk ratio.
- Preserves brand fit.
- Delivers a meaningful visual leap without requiring a full rewrite.
- Builds naturally on the current Framer Motion architecture.

Cons:

- Requires stronger sequencing design, not just incremental implementation.
- Demands discipline to avoid over-extending the motion language after the first few wins.

Decision:

Accepted. This RFC is based on Option C.

## Proposed Direction

The motion overhaul will be built in four layers:

1. Signature intro layer
2. Hero choreography layer
3. Story-beat scroll layer
4. Micro-interaction polish layer

### Layer 1: Signature intro

#### What we are building

A short cold open that feels like Tabby waking up locally on the user’s Mac. This is not a loader. It is a branded opening gesture that establishes atmosphere and transitions directly into the hero.

#### Why this is the right move

The first three seconds decide whether the user experiences the page as “another startup landing page” or as something they want to watch. A strong intro creates that difference immediately, but only if it behaves like a cinematic prelude rather than a delay.

#### Experience goals

- Feel fast, deliberate, and native.
- Reinforce “local, quiet, inline, Mac-native.”
- Transition into the hero instead of cutting away from it.
- Play only when it adds value.

#### Proposed behavior

- The main landing page remains server-rendered normally.
- A client-only intro overlay mounts above the rendered page after hydration.
- On first visit in a session, the intro plays once.
- On repeat navigation or refresh within the same session, the intro is skipped or heavily shortened.
- If `prefers-reduced-motion` is enabled, the intro is skipped and the hero appears immediately.

#### Proposed visual sequence

1. The screen opens on a restrained full-viewport overlay using Tabby’s existing background language, not a totally different universe.
2. The grid or paper-like field wakes up subtly.
3. The Tabby mark lands or stamps in with weight.
4. A cursor or ghost-text line appears and writes a short suggestion fragment.
5. The suggestion resolves into acceptance.
6. The overlay peels, wipes, or compresses into the hero layout so the transition feels causally linked.
7. The hero then finishes its own settlement sequence.

#### Rules

- Maximum first-play duration should stay roughly in the 900ms to 1400ms range.
- There should be no spinner, fake progress percentage, or implied network loading.
- The intro must not hide the CTA for an excessive period.
- The hero should already exist underneath so SEO and layout stability are preserved.

### Layer 2: Hero re-choreography

#### Current issue

The hero in `app/components/hero.tsx` already uses sensible staggered reveals, but each child is essentially entering on its own timer. The result is polished, but not composed.

#### Proposed direction

Treat the hero as one authored scene with internal timing relationships.

#### Desired emotional effect

The hero should feel like the interface is arriving into focus:

- the environment settles
- the headline establishes meaning
- the product panel lands with presence
- the inline suggestion begins only after the layout is stable

#### Specific changes

- Move away from a simple top-to-bottom reveal stack.
- Animate the hero shell and hero panel as primary mass objects.
- Use a more deliberate headline reveal, likely combining mask, wipe, or underline emergence rather than only opacity and `y`.
- Time the product panel entrance to feel heavier than the text entrance.
- Delay the `Typewriter` start so it reads like a product demonstration, not just another autoplay animation.
- Introduce subtle background depth shifts so the hero feels spatial, not flat.

#### Important constraint

The hero should still read instantly even if motion fails. This means the layout and copy must remain visually strong in a static state.

### Layer 3: Story-beat scroll moments

The page does not need dramatic animation in every section. It needs a few signature moments that feel specific to Tabby’s story.

#### Beat A: Hero handoff into proof

Current gap:

`app/page.tsx` moves from hero to `StatsStripSection` and then to `DemoVideoSection` as discrete blocks.

Proposed direction:

- Add a subtle compression or release as the hero exits and proof begins.
- This can be done through scale, depth, opacity of the hero background shapes, or a shared motion cue that continues downward.
- The goal is not a gimmick. The goal is continuity.

Why:

This is where users transition from emotional first impression to proof. The motion should make that handoff feel intentional.

#### Beat B: Privacy as a centerpiece scene

Current opportunity:

`app/components/privacy-section.tsx` already has the clearest concept-to-visual mapping on the whole page. It is the section most naturally suited to memorable motion.

Proposed direction:

- Turn the “your writing stays on your Mac” section into a visual story.
- Animate the data path inward toward the device boundary.
- Make “cloud,” “telemetry,” and “accounts” feel visually rejected, crossed out, or drained of energy.
- Give the central device block a stronger feeling of protected processing.

Why:

This is not generic motion. This is brand-specific motion. Those are the highest-value animations because they make the product idea tangible.

#### Beat C: How it works as a sequence, not a grid

Current issue:

`app/components/how-it-works-section.tsx` presents the three steps as animated cards, but the motion does not reinforce the actual progression.

Proposed direction:

- Make steps 1, 2, and 3 feel causally linked.
- Use a motion rail, connection line, or relay behavior.
- Let “install,” “type,” and “press Tab” feel like a chain reaction.

Why:

When motion mirrors structure, the page becomes easier to understand and more memorable at the same time.

#### Beat D: CTA as a final calm crescendo

Current opportunity:

`app/components/slogan-cta-section.tsx` is already visually suited to a stronger end-state moment.

Proposed direction:

- Keep this section warm and calm, not explosive.
- Use parallax and depth with more intention.
- Let the CTA arrive like a final invitation after the rest of the page has built trust.

Why:

The end of the page should feel conclusive and grounded, not louder than the hero.

### Layer 4: Micro-interaction polish

This layer matters because “wow” collapses if only the opening feels premium and the rest of the page behaves generically.

#### Buttons

Files:

- `app/components/header.tsx`
- `app/components/hero.tsx`
- `app/components/slogan-cta-section.tsx`
- `app/components/floating-button.tsx`
- `app/globals.css`

Approach:

- Upgrade the current hover response from a simple translate-shadow change to a more tactile interaction.
- Add slightly more depth and inertia.
- Consider mild magnetic behavior or pointer-responsive offset only if it stays subtle and performant.

Why:

Buttons are the most frequently examined motion targets on a landing page. If they feel generic, the polish ceiling of the whole site drops.

#### App chips and cards

Files:

- `app/components/apps-carousel-section.tsx`
- `app/components/how-it-works-section.tsx`
- `app/components/customization-cards-section.tsx`
- `app/components/testimonials-section.tsx`

Approach:

- Refine hover and settle behavior so surfaces feel weighty.
- Reduce the sense that cards are merely “lifting.”
- Favor depth and pressure over obvious floating.

Why:

The current `HoverLift` primitive is good, but it is used broadly. We should create a slightly richer vocabulary so the page does not feel like every surface responds the same way.

#### Inline text demonstrations

Files:

- `app/components/hero.tsx`
- `app/components/alternating-feature-section.tsx`
- `app/components/motion.tsx`

Approach:

- Make the text-writing experiences feel more product-authentic.
- Improve rhythm so the suggestion appears as a natural assist, not just a looping text effect.
- Use pauses and acceptance timing more deliberately.

Why:

These are some of the most product-specific moments on the page. They should feel sharper than generic typewriter animation.

## Motion Architecture Changes

This RFC recommends extending the current architecture rather than replacing it.

### Keep Framer Motion as the primary motion layer

Reasoning:

- It already exists in the codebase.
- It is enough for page intros, element choreography, and moderate scroll-linked motion.
- Avoiding a second animation stack keeps complexity lower in phase one.

Decision:

Stay on Framer Motion initially. Revisit GSAP only if we later decide to implement pinned or scrubbed narrative scenes that Framer Motion would handle awkwardly.

### Introduce page-level orchestration

Current issue:

`app/components/motion.tsx` contains reusable primitives, but it does not express a page-level motion state.

Proposed addition:

- Introduce a page orchestration layer that can coordinate:
  - intro playback state
  - hero readiness
  - delayed activation of typewriter moments
  - first-visit versus repeat-visit behavior
  - reduced-motion overrides

This should likely live in a dedicated landing-page-specific client component rather than bloating the existing generic motion helpers.

Why:

Generic motion primitives solve “how an item animates.” They do not solve “when the whole page should feel like one event.”

### Introduce motion tokens

Current issue:

The codebase has repeated easing and timing patterns, but they are not yet fully expressed as design tokens.

Proposed addition:

- Define named timing tiers and easing families for:
  - intro
  - hero
  - reveal
  - hover
  - tactile press
  - marquee/background drift

Why:

A motion system becomes maintainable when the vocabulary is centralized. This also keeps the experience cohesive as more advanced choreography is added.

### Differentiate motion categories

We should stop treating all motion as one bucket and instead formalize four categories:

- Narrative motion: page intro and major story beats
- Structural motion: section reveals and layout entrances
- Demonstration motion: typewriter, inline suggestions, live product behaviors
- Tactile motion: hover, press, focus, and surface feedback

Why:

Different motion categories should use different intensities. Without this separation, everything starts to feel equally important and therefore less premium.

## Technical Constraints and Best Practices

### Accessibility

This project already partially respects reduced motion in `app/globals.css`. The overhaul must make accessibility a first-class design constraint.

Requirements:

- `prefers-reduced-motion` should disable the intro and reduce major transforms.
- Critical content must remain readable and logically ordered without motion.
- Motion should never be required to understand navigation or the CTA.
- Avoid large continuous oscillations that can feel distracting or nauseating.

### Performance

The motion overhaul must not create a visibly slower site.

Requirements:

- Prefer transform and opacity over layout-triggering properties.
- Keep blur-heavy and layered effects limited to a few high-value surfaces.
- Avoid long-running JS timelines for decorative behavior.
- Prevent expensive animations from running off-screen.
- Keep the YouTube embed framed rather than deeply motion-controlled.

Suggested budgets:

- Intro should be short enough that the page still feels instant.
- LCP should remain competitive for a landing page.
- No noticeable input lag on hover or scroll.
- Minimal layout shift introduced by client-only motion.

### SEO and hydration safety

Because this is a Next.js App Router page, we should avoid any approach that withholds the landing page from the initial server render.

Requirements:

- Render the real page content on the server.
- Mount the splash as an overlay after hydration.
- Do not gate the entire page behind client-side “loaded” state.

Why:

This preserves crawlability, avoids blank-first-paint behavior, and reduces hydration risk.

## Section-by-Section Plan

### `app/layout.tsx`

Role in the RFC:

- Keep layout server-rendered and stable.
- Add only global hooks that truly belong at the document level.

Planned direction:

- Avoid pushing landing-specific motion logic into the global layout unless required for document-wide styling or font timing.

### `app/page.tsx`

Role in the RFC:

- Become the composition root for page-level motion orchestration.

Planned direction:

- Introduce a page-level intro or orchestration component near the top of the tree.
- Preserve the existing section order.
- Add transition relationships between hero, proof, and the most important downstream story beats.

### `app/components/motion.tsx`

Role in the RFC:

- Continue as the reusable motion foundation.

Planned direction:

- Keep generic utilities here.
- Add shared timing tokens and more expressive helper variants.
- Do not place landing-page orchestration state here if it makes the module harder to reason about.

### `app/components/hero.tsx`

Role in the RFC:

- Become the most refined motion composition on the page.

Planned direction:

- Replace simple sequential reveal with layered choreography.
- Make background, headline, panel, and CTA feel interdependent.
- Treat the typewriter as a story beat, not just a loop.

### `app/components/demo-video-section.tsx`

Role in the RFC:

- Provide proof without becoming a technical liability.

Planned direction:

- Improve the reveal framing.
- Avoid overcomplicated iframe choreography.
- Let the section serve as a calm proof anchor after the more dramatic hero.

### `app/components/apps-carousel-section.tsx`

Role in the RFC:

- Add ambient movement and ecosystem breadth.

Planned direction:

- Keep the marquee behavior but refine depth, entry, and edge treatment.
- Consider making the section feel more like an ecosystem field rather than two flat tracks.

### `app/components/how-it-works-section.tsx`

Role in the RFC:

- Explain the product in a fast, memorable progression.

Planned direction:

- Convert from parallel-card feel to sequential-story feel.
- Strengthen motion links between the three steps.

### `app/components/privacy-section.tsx`

Role in the RFC:

- Act as the flagship product-specific motion scene.

Planned direction:

- Turn the static concept into a story of containment and rejection.
- Keep the message crisp and legible while upgrading motion semantics.

### `app/components/customization-cards-section.tsx`

Role in the RFC:

- Provide richness and tunability.

Planned direction:

- Use refined card motion and micro-demonstrations.
- Avoid stealing attention from hero and privacy.

### `app/components/testimonials-section.tsx`

Role in the RFC:

- Sustain momentum with softer, trust-building polish.

Planned direction:

- Improve settle and hover behavior.
- Keep this section elegant rather than theatrical.

### `app/components/slogan-cta-section.tsx`

Role in the RFC:

- Deliver a warm final crescendo.

Planned direction:

- Preserve calm confidence.
- Use depth and atmosphere rather than aggressive motion.

### `app/components/floating-button.tsx`

Role in the RFC:

- Support conversion without feeling bolted on.

Planned direction:

- Refine entrance and presence so it feels integrated with the motion system.
- Avoid making it more visually noisy than the main CTA.

## Phased Implementation Plan

### Phase 1: Foundation and orchestration

Deliverables:

- Motion token cleanup
- Page-level orchestration model
- Reduced-motion strategy
- Session-aware intro gating behavior

Why first:

The later motion work will be harder to maintain if we start by scattering bespoke sequences across sections.

### Phase 2: Intro and hero

Deliverables:

- Signature intro overlay
- Reauthored hero sequence
- Improved hero typewriter behavior
- Hero-to-proof transition cue

Why second:

This creates the biggest perceptual leap early and establishes the rest of the motion language.

### Phase 3: Story beats

Deliverables:

- Privacy scene upgrade
- How-it-works progression upgrade
- CTA end-state polish

Why third:

These are the highest-leverage downstream moments after the hero.

### Phase 4: Micro-interaction pass

Deliverables:

- Button interaction refinement
- Card response refinement
- Chip and badge polish
- Floating CTA integration polish

Why fourth:

Micro-interactions work best once the macro motion language is already defined.

### Phase 5: QA and tuning

Deliverables:

- Reduced-motion verification
- mobile and desktop feel checks
- performance and interaction tuning
- timing calibration across browsers

Why last:

Motion quality comes from tuning, not just implementation.

## Acceptance Criteria

This RFC should be considered successful when the following are true:

- The landing page has one clear signature opening that feels intentional and brand-specific.
- The hero reads as a composed scene rather than a stack of independently delayed elements.
- At least two downstream sections feel meaningfully more cinematic and product-specific.
- Motion intensity is clearly hierarchical, not uniform across the page.
- The page still feels fast and legible.
- Repeat visits do not feel slowed down by unnecessary intro playback.
- Reduced-motion mode produces a calm, usable, polished fallback.

## Risks

### Risk: Overdesign

If we push too much spectacle into the page, we may dilute the product’s quiet, trustworthy tone.

Mitigation:

- Concentrate surprise in the intro, hero, and one or two major sections only.

### Risk: Performance regression

Heavier overlays, blur layers, and client-side orchestration can degrade perceived speed.

Mitigation:

- Keep the intro short, render the page underneath, and aggressively prefer transform and opacity.

### Risk: Repetition

If the same reveal pattern is reused everywhere, the page will feel predictable despite having more motion.

Mitigation:

- Differentiate narrative, structural, demonstration, and tactile motion categories.

### Risk: Architectural sprawl

If page-specific choreography is pushed into generic helpers, `motion.tsx` can become overly coupled and hard to maintain.

Mitigation:

- Keep generic primitives generic.
- Put landing-specific orchestration in landing-specific components.

## Open Questions

1. Should the intro play once per session, once per day, or only on first visit?
2. Do we want the hero transition to feel more editorial and calm, or more dramatic and cinematic?
3. Is the privacy section definitely the flagship downstream scene, or do we want the demo section to carry more of that responsibility?
4. Do we want pointer-reactive effects at all, or should the site remain fully deterministic?
5. At what point would we consider GSAP justified for pinned narrative sections, if phase one proves too constrained in Framer Motion?

## Recommendation

We should proceed with the signature intro plus authored story beats strategy.

This wins because it solves the actual problem. The current page does not need random extra animation. It needs a stronger motion narrative. The recommended plan gives us that narrative without abandoning the current brand tone, without overcommitting to a second animation stack, and without turning the landing page into a fragile motion experiment.

The highest-value build order is:

1. motion orchestration foundation
2. splash intro
3. hero re-choreography
4. privacy scene
5. how-it-works progression
6. micro-interaction polish
7. final tuning

That order gives us the best ratio of visible impact to engineering risk and keeps the implementation aligned with clean system design rather than one-off visual hacks.
