"use client";

import { useEffect, useState } from "react";
import { DownloadButton } from "./download-button";
import { AppleIcon } from "./icons";
import { SupportButton } from "./support-button";

const floatingActionClass =
  "tabby-button tabby-button-blue inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 text-base font-bold tracking-tight sm:h-14 sm:px-7";

const bmcClass =
  "h-10 gap-1.5 rounded-xl px-4 text-sm sm:h-11 sm:px-5 sm:text-base";

export const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="tabby-float-cta-enter fixed bottom-4 right-3 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <SupportButton
        className={bmcClass}
        iconClassName="h-4 w-4 sm:h-4.5 sm:w-4.5"
      />
      <DownloadButton className={floatingActionClass}>
        <AppleIcon className="h-5 w-5" />
        Download for Mac
      </DownloadButton>
    </div>
  );
};
