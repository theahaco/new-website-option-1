import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "From regulated tokenization to protocol-level engineering. The Aha Company delivers onchain products end to end: tokenization, smart contracts, wallets, product, onboarding, and advisory.",
};

interface ServiceBlock {
  id: string;
  number: string;
  title: React.ReactNode;
  tags: string[];
  problem: string;
  approach: string;
  link: { href: string; label: string };
}

const BLOCKS: ServiceBlock[] = [
  {
    id: "tokenization",
    number: "01",
    title: "Tokenization & real-world assets",
    tags: ["Stablecoins", "Tokenized funds", "Asset issuance"],
    problem:
      "Bringing a regulated asset onchain means reconciling securities law, custody, and investor protections with an immutable ledger. Get the structure wrong and the instrument is unusable.",
    approach:
      "We engineer issuance and redemption flows with compliance controls built in: permissioned transfers, allow-lists, and auditable supply. We have taken a euro stablecoin and a money-market fund to production with regulated issuers.",
    link: { href: "/case-studies", label: "See the EURCV case study →" },
  },
  {
    id: "smart-contracts",
    number: "02",
    title: "Smart contracts & security",
    tags: ["Soroban", "Audits", "Source verification"],
    problem:
      "A contract that moves regulated value cannot fail. Bugs are public, permanent, and expensive, and a risk team will not sign off without evidence the code does exactly what it claims.",
    approach:
      "We write upgrade-safe contracts with comprehensive test coverage, publish verifiable source, and structure code for external audit from day one. We also build the tooling other teams audit with.",
    link: { href: "/case-studies", label: "See the LI.FI case study →" },
  },
  {
    id: "wallets",
    number: "03",
    title: "Wallets, custody & accounts",
    tags: ["Passkeys", "Smart accounts", "Custody"],
    problem:
      "Self-custody UX scares away mainstream users, and custodial setups raise the compliance bar. Institutions need key management that satisfies an auditor without crippling the product.",
    approach:
      "We integrate passkeys and account abstraction so users sign with a fingerprint while policy and recovery rules live in a smart account, plus custody and wallet integrations that meet institutional controls.",
    link: { href: "/contact", label: "Talk through your custody model →" },
  },
  {
    id: "product",
    number: "04",
    title: "dApps, interfaces & product",
    tags: ["Front-end", "Dashboards", "Design"],
    problem:
      "The contract is only half the product. Users judge you on the interface, and most onchain front-ends feel like developer tools rather than finished software.",
    approach:
      "We build the application layer your users actually touch: branded interfaces, dashboards, and flows that hide the chain's complexity while staying honest about risk and state.",
    link: { href: "/contact", label: "Scope a product build →" },
  },
  {
    id: "onboarding",
    number: "05",
    title: "Onboarding & fiat rails",
    tags: ["On / off-ramps", "KYC flows", "Anchors"],
    problem:
      "Onchain value is useless if users cannot get money in and out. Connecting bank rails to a ledger means KYC, settlement, and partner integrations that most teams underestimate.",
    approach:
      "We connect traditional money to onchain assets with compliant on/off-ramp integrations and onboarding flows that move users from sign-up to first transaction without friction.",
    link: { href: "/contact", label: "Map your fiat rails →" },
  },
  {
    id: "advisory",
    number: "06",
    title: "Advisory, tooling & grants",
    tags: ["Architecture", "Open source", "Grant support"],
    problem:
      "Early decisions on protocol, architecture, and funding shape everything that follows. Teams often commit before they have talked to anyone who has shipped at this depth.",
    approach:
      "We advise on architecture, maintain open-source tooling the ecosystem builds on, and help teams structure and win ecosystem grants, from first idea to funded mainnet launch.",
    link: { href: "/contact", label: "Book an advisory call →" },
  },
];

const STEPS = [
  {
    number: "01",
    title: "Discover",
    desc: "We map the regulatory, technical, and product constraints before a line of code.",
  },
  {
    number: "02",
    title: "Architect",
    desc: "We design the contracts, custody model, and rails, then validate them with your risk team.",
  },
  {
    number: "03",
    title: "Build & audit",
    desc: "We ship tested, verifiable code and prepare it for external audit.",
  },
  {
    number: "04",
    title: "Ship & support",
    desc: "We take it live on mainnet and stay on to operate, monitor, and extend it.",
  },
];

export default function Services() {
  return (
    <>
      {/* SUB-HERO */}
      <section className="navy">
        <div className={styles.heroGlow} />
        <div className={`container ${styles.heroInner}`}>
          <div className={`eyebrow eyebrow--light ${styles.heroEyebrow}`}>
            Expertise
          </div>
          <h1 className={`h1 ${styles.heroTitle}`}>
            From regulated tokenization to protocol-level engineering
          </h1>
          <p className={`lead ${styles.heroLead}`}>
            We deliver onchain products end to end. Financial institutions come
            to us for security, auditability, and compliance-aware architecture.
            Web3 teams come to us for the deepest layers of the protocol stack.
            Most projects need both.
          </p>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      <section className="section surface-white">
        <div className={styles.blocks}>
          {BLOCKS.map((b, i) => (
            <div key={b.id} style={{ display: "contents" }}>
              <div id={b.id} className={styles.block} data-aha-reveal>
                <div>
                  <div className={styles.blockNumber}>{b.number}</div>
                  <h2 className={styles.blockTitle}>{b.title}</h2>
                  <div className={styles.tags}>
                    {b.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className={styles.label}>The problem</p>
                  <p className={styles.body}>{b.problem}</p>
                  <p className={styles.label}>Our approach</p>
                  <p className={styles.body}>{b.approach}</p>
                  <Link href={b.link.href} className={styles.relatedLink}>
                    {b.link.label}
                  </Link>
                </div>
              </div>
              {i < BLOCKS.length - 1 && <div className={styles.divider} />}
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section
        className="section surface-paper-2"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <div className="container">
          <div className={styles.howHead} data-aha-reveal>
            <div className={`eyebrow ${styles.howEyebrow}`}>How we work</div>
            <h2 className={styles.howTitle}>A path from idea to production</h2>
          </div>
          <div className={styles.steps} data-aha-reveal>
            {STEPS.map((s) => (
              <div key={s.number} className={styles.step}>
                <div className={styles.stepNumber}>{s.number}</div>
                <div className={styles.stepTitle}>{s.title}</div>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="navy section">
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner} data-aha-reveal>
          <h2 className={`h2 ${styles.ctaTitle}`}>
            Tell us what you are building.
          </h2>
          <p className={`lead ${styles.ctaText}`}>
            Bring us a regulated asset, a protocol, or a half-formed idea. We
            will tell you the fastest credible path to production.
          </p>
          <div className={styles.ctaBtns}>
            <ButtonLink href="/contact" variant="primary" arrow>
              Schedule a call
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
