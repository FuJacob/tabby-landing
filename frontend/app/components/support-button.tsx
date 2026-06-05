import { SUPPORT_URL } from "../lib/site";

type SupportButtonProps = {
  className?: string;
  iconClassName?: string;
};

const baseClassName =
  "tabby-button inline-flex items-center justify-center gap-2 bg-white font-bold tracking-tight text-ink hover:bg-white/85";

/**
 * Shared Ko-fi support CTA used in the header and floating action cluster.
 */
export function SupportButton({
  className = "",
  iconClassName = "h-4 w-4",
}: SupportButtonProps) {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClassName} ${className}`.trim()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={`${iconClassName} text-[#ec4899]`}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      Support Cotabby
    </a>
  );
}
