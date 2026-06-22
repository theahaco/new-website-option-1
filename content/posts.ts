// Blog content collection (CMS-ready shape).
// Seeded posts are realistic demonstrations; author, date, and body are
// placeholders showing the template. Replace with real articles.

export type PostCategory = "Regulation" | "Engineering" | "RWA";

export interface Post {
  slug: string;
  title: string;
  category: PostCategory;
  readingTime: number; // minutes
  author: string;
  date: string; // ISO
  excerpt: string;
  /** CSS background for the card / hero thumbnail. */
  thumb: string;
}

export const posts: Post[] = [
  {
    slug: "mica-euro-stablecoins-stellar",
    title: "What MiCA means for euro stablecoins on Stellar",
    category: "Regulation",
    readingTime: 6,
    author: "Aha Engineering",
    date: "2026-05-28",
    excerpt: "How European rules shape the design of compliant onchain money.",
    thumb: "#f6e2ff",
  },
  {
    slug: "smart-accounts-passkeys-custody",
    title: "Smart accounts and passkeys for institutional custody",
    category: "Engineering",
    readingTime: 8,
    author: "Aha Engineering",
    date: "2026-05-14",
    excerpt: "Account abstraction patterns that satisfy a risk team.",
    thumb: "#d6bdbe",
  },
  {
    slug: "tokenizing-money-market-funds",
    title: "Tokenizing money-market funds: an architecture playbook",
    category: "RWA",
    readingTime: 7,
    author: "Aha Engineering",
    date: "2026-04-30",
    excerpt: "From fund structure to mainnet, the decisions that matter.",
    thumb: "#e6f2dc",
  },
  {
    slug: "source-verified-soroban-contracts",
    title: "Source verification and upgrade-safe Soroban contracts",
    category: "Engineering",
    readingTime: 9,
    author: "Aha Engineering",
    date: "2026-04-09",
    excerpt:
      "Why deployed bytecode should always trace back to audited source, and how to keep upgrades safe.",
    thumb: "var(--grad-slate)",
  },
  {
    slug: "denylist-aware-compliant-tokens",
    title: "Building denylist-aware compliant tokens onchain",
    category: "Regulation",
    readingTime: 5,
    author: "Aha Engineering",
    date: "2026-03-19",
    excerpt:
      "Compliance controls a regulator recognises, expressed cleanly in a public smart contract.",
    thumb: "var(--grad-navy)",
  },
  {
    slug: "fund-structure-to-mainnet-checklist",
    title: "From fund structure to mainnet: a tokenization checklist",
    category: "RWA",
    readingTime: 6,
    author: "Aha Engineering",
    date: "2026-02-26",
    excerpt:
      "The practical steps that take a regulated fund from legal structure to live onchain units.",
    thumb: "var(--grad-green)",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const postSlugs = posts.map((p) => p.slug);

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
