import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — Vercel project Output Directory is set to "out"
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  devIndicators: false,
};

export default nextConfig;
