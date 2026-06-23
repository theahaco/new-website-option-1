import type { NextConfig } from "next";

// Empty for root / custom-domain deploys; set to "/<repo>" for GitHub Pages
// project sites (the deploy workflow passes the value from configure-pages).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Fully static marketing site — `next build` emits ./out for any static host.
  output: "export",
  // Static export has no image-optimization server.
  images: { unoptimized: true },
  // Directory-style URLs: /about/ -> about/index.html
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
