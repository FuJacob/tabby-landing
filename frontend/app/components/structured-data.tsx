import { CREATOR, DOWNLOAD_URL, SITE_URL } from "../lib/site";
import { FAQ_ITEMS } from "./faq-section";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Safe: the payload is a fully-controlled object serialized server-side.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function StructuredData() {
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "tabby",
    operatingSystem: "macOS",
    applicationCategory: "ProductivityApplication",
    url: SITE_URL,
    downloadUrl: DOWNLOAD_URL,
    description:
      "Native macOS AI autocomplete. Press Tab to accept quiet inline suggestions in Mail, Notes, Slack, Docs, and more.",
    offers: {
      "@type": "Offer",
      price: "10",
      priceCurrency: "USD",
      category: "LifetimeLicense",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Person",
      name: CREATOR.name,
      url: CREATOR.linkedin,
      sameAs: [CREATOR.linkedin, CREATOR.x],
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={softwareApp} />
      <JsonLd data={faqPage} />
    </>
  );
}
