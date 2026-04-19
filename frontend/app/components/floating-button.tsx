"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DOWNLOAD_URL } from "../lib/site";
import { AppleIcon } from "./icons";

const floatingActionClass =
  "tabby-button tabby-button-primary inline-flex h-12 items-center justify-center gap-2 rounded-[1rem] px-6 text-base font-semibold tracking-tight sm:h-14 sm:px-7";

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
    <div className="tabby-float-cta-enter fixed bottom-4 right-3 z-50 sm:bottom-6 sm:right-6">
      <Link href={DOWNLOAD_URL} className={floatingActionClass}>
        <AppleIcon className="h-5 w-5" />
        Download for Mac
      </Link>
    </div>
  );
};
