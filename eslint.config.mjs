import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // The design uses precise inline-styled <img> tags (logos at exact
      // heights, masked marquee, object-position crops). Static export
      // disables next/image optimization anyway, so plain <img> is correct.
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
