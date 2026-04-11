import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.73.5 12.16c0 5.14 3.29 9.5 7.86 11.04.58.11.79-.26.79-.57 0-.28-.01-1.04-.02-2.05-3.2.72-3.88-1.58-3.88-1.58-.52-1.36-1.28-1.72-1.28-1.72-1.05-.73.08-.72.08-.72 1.16.09 1.77 1.23 1.77 1.23 1.03 1.82 2.71 1.29 3.37.99.1-.77.4-1.29.72-1.58-2.55-.3-5.23-1.31-5.23-5.85 0-1.29.44-2.35 1.17-3.18-.12-.3-.5-1.5.11-3.13 0 0 .95-.31 3.1 1.22a10.4 10.4 0 0 1 5.64 0c2.14-1.53 3.1-1.22 3.1-1.22.61 1.63.23 2.83.11 3.13.73.83 1.17 1.89 1.17 3.18 0 4.55-2.68 5.54-5.24 5.84.41.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .32.2.69.8.57a11.66 11.66 0 0 0 7.86-11.04C23.5 5.73 18.35.5 12 .5Z" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.37 12.14c-.03-2.95 2.42-4.37 2.53-4.44-1.38-2.03-3.54-2.31-4.3-2.34-1.83-.19-3.57 1.1-4.5 1.1-.93 0-2.36-1.07-3.88-1.04-2 .03-3.84 1.17-4.87 2.96-2.08 3.62-.53 8.98 1.49 11.9.99 1.42 2.16 3.02 3.71 2.97 1.49-.06 2.05-.96 3.85-.96s2.31.96 3.89.93c1.61-.03 2.63-1.45 3.61-2.88 1.13-1.65 1.6-3.25 1.63-3.33-.03-.01-3.13-1.2-3.16-4.77Zm-2.96-8.65c.82-1 1.37-2.39 1.21-3.78-1.18.05-2.61.79-3.46 1.79-.76.87-1.42 2.28-1.24 3.62 1.32.1 2.67-.67 3.49-1.63Z" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m12 3 1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}