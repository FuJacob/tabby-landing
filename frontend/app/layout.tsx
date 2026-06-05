import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { BANNER_DISMISS_KEY, CREATOR, RELEASE, SITE_URL } from "./lib/site";
import { AnnouncementBanner } from "./components/announcement-banner";
import { Providers } from "./components/providers";
import { THEME_STORAGE_KEY } from "./components/use-theme";

// Runs before first paint: pins the saved theme and pre-collapses the banner if
// it was already dismissed — so returning visitors get no flash and no layout
// jump. Kept dependency-free and inlined in <head>.
const INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;}}catch(e){}try{if(localStorage.getItem("${BANNER_DISMISS_KEY}")==="${RELEASE.version}"){document.documentElement.style.setProperty("--banner-height","0px");document.documentElement.classList.add("tabby-banner-dismissed");}}catch(e){}})();`;

const bodyFont = Inter_Tight({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const title = "Cotabby - local AI autocomplete for macOS";
const description =
  "Local AI autocomplete for macOS text fields. Use Apple Intelligence or local GGUF models, accept inline suggestions with Tab, and keep every token on your Mac.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Cotabby",
  keywords: [
    "Mac autocomplete",
    "macOS text fields",
    "local AI autocomplete",
    "Apple Intelligence autocomplete",
    "GGUF autocomplete",
    "local AI Mac",
  ],
  authors: [{ name: CREATOR.name, url: CREATOR.linkedin }],
  creator: CREATOR.name,
  publisher: CREATOR.name,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Cotabby",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: CREATOR.xHandle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <head>
        {/* Apply saved theme + banner state before paint to avoid a flash of
            the wrong palette. Runs ahead of hydration; hence
            suppressHydrationWarning on <html>. */}
        <script dangerouslySetInnerHTML={{ __html: INIT_SCRIPT }} />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="" />
      </head>
      <body className="flex min-h-full flex-col bg-background pt-[var(--banner-height)] text-ink">
        <AnnouncementBanner />
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
