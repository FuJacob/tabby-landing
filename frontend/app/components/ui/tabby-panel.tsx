import type {
  CSSProperties,
  ElementType,
  ReactNode,
  ComponentPropsWithoutRef,
} from "react";

/**
 * TabbyPanel — the bordered + shadowed card container that wraps videos,
 * testimonials, accordion items, modals, CTAs. Sibling to <IconTile>: same
 * border + token-shadow contract, scaled up to card sizes.
 *
 * Use this for ANYTHING that has `border-2 border-line bg-* shadow-tabby-*`
 * around a chunk of card-shaped content. The lint guard flags inline copies.
 *
 * Sizes (corner radius + shadow depth — locked together):
 *   sm  rounded-[1.1rem]  shadow-tabby-sm   (small inline cards)
 *   md  rounded-2xl       shadow-tabby      (accordion items, mid cards)
 *   lg  rounded-[1.3rem]  shadow-tabby-lg   (testimonial, stat cards)
 *   xl  rounded-[1.5rem]  shadow-tabby-xl   (video shells, hero demo)
 *   2xl rounded-3xl       shadow-tabby-2xl  (modals)
 *   3xl rounded-4xl       shadow-tabby-xl   (full-bleed CTAs)
 */
type Size = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

const SIZE: Record<Size, string> = {
  sm: "rounded-[1.1rem] shadow-tabby-sm",
  md: "rounded-2xl shadow-tabby",
  lg: "rounded-[1.3rem] shadow-tabby-lg",
  xl: "rounded-[1.5rem] shadow-tabby-xl",
  "2xl": "rounded-3xl shadow-tabby-2xl",
  "3xl": "rounded-4xl shadow-tabby-xl",
};

type TabbyPanelOwnProps<T extends ElementType> = {
  as?: T;
  size?: Size;
  /** Tailwind bg utility, e.g. "bg-surface", "bg-surface-2", "bg-ink". */
  tone?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

type TabbyPanelProps<T extends ElementType> = TabbyPanelOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TabbyPanelOwnProps<T>>;

export function TabbyPanel<T extends ElementType = "div">({
  as,
  size = "md",
  tone = "bg-surface",
  className,
  children,
  ...rest
}: TabbyPanelProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={[
        "border-2 border-line",
        SIZE[size],
        tone,
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
