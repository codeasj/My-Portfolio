import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Optimize bundle size
  compress: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Reduce JavaScript bundle size
  experimental: {
    optimizePackageImports: ["swiper"],
  },
};

export default nextConfig;
