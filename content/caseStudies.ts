// Case study content collection (CMS-ready shape).
// Seeded entries are demonstrations of the template, not final content.

export type CaseCategory = "banking" | "web3" | "ecosystem";

export interface OutcomeMetric {
  value: string;
  label: string;
}

export interface CaseTestimonial {
  quote: string;
  name: string;
  role: string;
  /** True while the real quote is pending clearance. */
  placeholder?: boolean;
}

export interface CaseStudy {
  slug: string;
  /** Big label shown on the gradient card header, may contain markup-free text. */
  label: string;
  /** Small uppercase eyebrow, e.g. "Banking · Stablecoins". */
  eyebrow: string;
  /** Filter bucket: All / Banking & funds / Web3 / Ecosystem & open source. */
  category: CaseCategory;
  /** One of the gradient tokens in globals.css. */
  gradient: string;
  title: string;
  cardBlurb: string;
  summary: string;
  client: string;
  role: string;
  ecosystem: string;
  status: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  outcomeMetrics: OutcomeMetric[];
  techUsed: string[];
  testimonial: CaseTestimonial | null;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "eurcv-stablecoin",
    label: "EURCV",
    eyebrow: "Banking · Stablecoins",
    category: "banking",
    gradient: "var(--grad-navy)",
    title: "A euro stablecoin live on Stellar mainnet",
    cardBlurb:
      "We engineered the smart contracts behind Société Générale–FORGE's EURCV, now over $20M issued onchain.",
    summary:
      "Société Générale–FORGE set out to bring a regulated euro stablecoin to a public blockchain. We engineered the onchain contracts that issue and govern EURCV on Stellar, with compliance controls built in from the start.",
    client: "Société Générale–FORGE",
    role: "Smart contract engineering & onchain architecture",
    ecosystem: "Stellar",
    status: "Live on mainnet",
    challenge:
      "A regulated bank needed a euro stablecoin that satisfied institutional compliance, denylist controls, pausability, and auditable issuance, while living on a public network where anyone can read the ledger. The contracts had to be production-grade from day one, with no room for the experimental patterns common in DeFi.",
    solution:
      "We designed and built the Soroban contracts that mint, govern, and control EURCV, with role-separated administration, a denylist interface for compliance, and pause controls for incident response. Every privileged action is explicit and auditable, and the issuance flow maps cleanly onto the bank's existing controls.",
    architectureHighlights: [
      "Role-separated admin: issuer, compliance, and pause authorities are distinct onchain roles",
      "Denylist interface so flagged accounts can be blocked from transfers in line with regulation",
      "Pausable transfers for incident response without touching balances",
      "Source-verified contracts so anyone can confirm the deployed bytecode matches the audited source",
    ],
    outcomeMetrics: [
      { value: "$20M+", label: "Issued and live onchain" },
      { value: "Mainnet", label: "Running in production" },
      { value: "100%", label: "Source-verified contracts" },
    ],
    techUsed: ["Soroban", "Rust", "Stellar", "SEP-41", "Source verification"],
    testimonial: {
      quote:
        "[Placeholder quote, add a testimonial from the FORGE team here once cleared for public display.]",
      name: "[Name]",
      role: "[Role, Société Générale–FORGE]",
      placeholder: true,
    },
  },
  {
    slug: "mmf-tokenization",
    label: "€100M",
    eyebrow: "Funds · RWA",
    category: "banking",
    gradient: "var(--grad-slate)",
    title: "Tokenizing a money-market fund",
    cardBlurb:
      "€100M tokenized on Stellar for a regulated fund client, with compliance-aware architecture end to end.",
    summary:
      "A regulated fund wanted to bring a money-market fund onchain without compromising its compliance posture. We built the tokenization architecture, from fund structure to mainnet issuance.",
    client: "Regulated fund client",
    role: "Onchain architecture & smart contract engineering",
    ecosystem: "Stellar",
    status: "Live on mainnet",
    challenge:
      "Tokenizing a regulated fund means the onchain representation has to mirror the legal structure exactly, support controlled transfers, and remain auditable for regulators, all while being efficient enough to run at scale.",
    solution:
      "We designed a compliance-aware token architecture that ties onchain units to the fund structure, supports transfer restrictions, and gives the administrator the controls they need without weakening the security model.",
    architectureHighlights: [
      "Onchain units mapped one-to-one to the fund's legal structure",
      "Transfer restrictions enforced at the contract layer",
      "Administrator controls separated from holder operations",
      "Auditable issuance and redemption flows",
    ],
    outcomeMetrics: [
      { value: "€100M+", label: "Tokenized onchain" },
      { value: "Mainnet", label: "Running in production" },
      { value: "Compliance-aware", label: "Architecture end to end" },
    ],
    techUsed: ["Soroban", "Rust", "Stellar", "RWA"],
    testimonial: null,
  },
  {
    slug: "lifi-stellar",
    label: "LI.FI",
    eyebrow: "Web3 · Cross-chain",
    category: "web3",
    gradient: "var(--grad-green-solid)",
    title: "Smart contracts for LI.FI on Stellar",
    cardBlurb:
      "We built the smart contracts powering LI.FI's Stellar integration, extending its cross-chain reach.",
    summary:
      "LI.FI wanted to extend its cross-chain infrastructure to Stellar. We built the Soroban smart contracts that power the integration.",
    client: "LI.FI",
    role: "Smart contract engineering",
    ecosystem: "Stellar",
    status: "Live",
    challenge:
      "Bringing a cross-chain protocol to a new network means matching its existing guarantees on unfamiliar infrastructure, with contracts that are efficient, secure, and easy to integrate against.",
    solution:
      "We engineered the Soroban contracts behind LI.FI's Stellar integration, designed to slot into its existing cross-chain model while respecting Stellar's execution environment.",
    architectureHighlights: [
      "Soroban contracts designed to match LI.FI's cross-chain guarantees",
      "Efficient execution within Stellar's resource model",
      "Clean integration surface for the LI.FI stack",
    ],
    outcomeMetrics: [
      { value: "Live", label: "Stellar integration shipped" },
      { value: "Cross-chain", label: "Reach extended to Stellar" },
    ],
    techUsed: ["Soroban", "Rust", "Stellar", "Cross-chain"],
    testimonial: null,
  },
  {
    slug: "stellar-cli-scaffold",
    label: "CLI",
    eyebrow: "Ecosystem · Open source",
    category: "ecosystem",
    gradient: "var(--grad-violet)",
    title: "Stellar CLI & Scaffold developer tooling",
    cardBlurb:
      "Core contributions to the developer tooling the Stellar ecosystem builds on, trusted by the foundation behind it.",
    summary:
      "Strong ecosystems need strong tooling. We contribute to the developer tooling the Stellar ecosystem relies on, from the CLI to scaffolding that gets teams to mainnet faster.",
    client: "Stellar ecosystem",
    role: "Core open-source contribution",
    ecosystem: "Stellar",
    status: "Ongoing",
    challenge:
      "Developer experience is the bottleneck for any growing ecosystem. The tooling has to be fast, reliable, and trustworthy enough for foundations and production teams to depend on.",
    solution:
      "We build and maintain core developer tooling for Stellar, improving the CLI and scaffolding so teams can go from idea to deployed contract with less friction.",
    architectureHighlights: [
      "Improvements to the Stellar CLI used across the ecosystem",
      "Scaffolding that bootstraps production-ready projects",
      "Open-source contributions trusted by the foundation",
    ],
    outcomeMetrics: [
      { value: "Open source", label: "Used across the ecosystem" },
      { value: "Ongoing", label: "Maintained in production" },
    ],
    techUsed: ["Rust", "Stellar CLI", "Soroban", "Open source"],
    testimonial: null,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const caseStudySlugs = caseStudies.map((c) => c.slug);
