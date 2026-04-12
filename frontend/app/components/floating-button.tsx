"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppleIcon } from "./icons";
import { bottomButtonClass } from "./final-footer-section";

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
    <div className="tabby-float-cta-enter fixed bottom-4 right-3 z-50 w-[min(340px,calc(100vw-1.5rem))] sm:bottom-6 sm:right-6">
      <Link href="#" className={bottomButtonClass}>
        <AppleIcon className="h-5 w-5" />
        Download for Mac
      </Link>
    </div>
  );
};
