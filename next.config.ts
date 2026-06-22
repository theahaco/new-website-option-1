import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static marketing site — `next build` emits ./out for any static host.
  output: "export",
  // Static export has no image-optimization server.
  images: { unoptimized: true },
  // Directory-style URLs: /about/ -> about/index.html
  trailingSlash: true,
};

export default nextConfig;
