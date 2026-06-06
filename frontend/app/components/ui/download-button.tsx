"use client";

import type { ReactNode } from "react";
import { useEmailGate } from "@/app/components/ui/email-gate";
import { TabbyButton } from "@/app/components/ui/tabby-button";

type DownloadButtonProps = {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  children: ReactNode;
};

export function DownloadButton({
  size = "md",
  fullWidth = false,
  icon,
  children,
}: DownloadButtonProps) {
  const { requestDownload } = useEmailGate();
  return (
    <TabbyButton
      variant="blue"
      size={size}
      fullWidth={fullWidth}
      shimmer
      icon={icon}
      onClick={requestDownload}
    >
      {children}
    </TabbyButton>
  );
}
