"use client";

import type { ReactNode } from "react";
import { useEmailGate } from "./email-gate";

type DownloadButtonProps = {
  className?: string;
  children: ReactNode;
};

export function DownloadButton({ className, children }: DownloadButtonProps) {
  const { requestDownload } = useEmailGate();
  const mergedClassName = className
    ? `${className} tabby-button-shimmer`
    : "tabby-button-shimmer";
  return (
    <button type="button" onClick={requestDownload} className={mergedClassName}>
      {children}
    </button>
  );
}
