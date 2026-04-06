"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function FooterSection() {
  return (
    <footer id="demo" className="border-t border-border bg-background">
      <div className="px-6 py-20 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border bg-background px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted sm:w-auto"
          >
            <FaGithub className="h-5 w-5" aria-hidden="true" />
            GitHub
          </Link>
          <Link
            href="#demo"
            className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-opacity hover:opacity-85 sm:w-auto"
          >
            Watch Demo
          </Link>
        </div>
      </div>
    </footer>
  );
}
