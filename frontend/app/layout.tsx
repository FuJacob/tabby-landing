import type { Metadata } from "next";
import { Manrope, Sour_Gummy } from "next/font/google";
import "./globals.css";
import { CREATOR, SITE_URL } from "./lib/site";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const displayFont = Sour_Gummy({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const title = "tabby — free, open-source AI autocomplete for Mac";
const description =
  "tabby is a free, open-source macOS AI autocomplete that writes with you in any app. Press Tab to accept quiet inline suggestions in Mail, Notes, Slack, Docs, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "tabby",
  keywords: [
    "AI autocomplete Mac",
    "native macOS AI writing assistant",
    "ghost text autocomplete",
    "Tab to accept AI suggestions",
    "inline AI writing",
    "AI email writing Mac",
    "AI notes Mac",
    "open source AI writing tool",
    "free AI autocomplete",
  ],
  authors: [{ name: CREATOR.name, url: CREATOR.linkedin }],
  creator: CREATOR.name,
  publisher: CREATOR.name,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/32.png", sizes: "32x32", type: "image/png" },
      { url: "/64.png", sizes: "64x64", type: "image/png" },
      { url: "/128.png", sizes: "128x128", type: "image/png" },
      { url: "/256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [{ url: "/512.png", sizes: "512x512", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "tabby",
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
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-ink">
        {children}
      </body>
    </html>
  );
}
