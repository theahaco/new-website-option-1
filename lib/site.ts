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
