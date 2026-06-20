import type { NextConfig } from "next";

const STATIC_HTML_CACHE =
  "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    transitionIndicator: false,
    // Tree-shake barrel imports from icon/utility libs (lucide-react exports
    // hundreds of modules) so only the icons we use ship. Not in Next's
    // default optimize list as of this version.
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: "/:path((?!_next/|api/).*)",
        headers: [{ key: "Cache-Control", value: STATIC_HTML_CACHE }],
      },
    ];
  },
};

export default nextConfig;
