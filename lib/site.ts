// Base path for deployment under a sub-path (e.g. GitHub Pages project sites
// served at /<repo>). Set via NEXT_PUBLIC_BASE_PATH at build time; empty for
// root/custom-domain deploys. next.config.ts reads the same env for
// basePath/assetPrefix (which cover next/link + _next assets); this helper
// covers plain <img src> pointing at /public files, which Next does NOT
// auto-prefix.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}

// Deployment origin (scheme + host), no trailing slash. Currently GitHub
// Pages; override via NEXT_PUBLIC_SITE_ORIGIN for a custom domain.
export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://theahaco.github.io";

// Full public base URL including any project sub-path. Use for sitemap
// entries and canonical links; use SITE_ORIGIN for metadataBase.
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;
