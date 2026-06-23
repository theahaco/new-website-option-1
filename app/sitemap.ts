import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/content/caseStudies";
import { postSlugs } from "@/content/posts";
import { SITE_URL } from "@/lib/site";

const SITE = SITE_URL;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/case-studies",
    "/about",
    "/blog",
    "/contact",
  ];
  const caseRoutes = caseStudySlugs.map((s) => `/case-studies/${s}`);
  const postRoutes = postSlugs.map((s) => `/blog/${s}`);

  return [...staticRoutes, ...caseRoutes, ...postRoutes].map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
