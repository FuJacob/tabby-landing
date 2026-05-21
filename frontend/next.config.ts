import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    transitionIndicator: false,
  },
};

export default nextConfig;
