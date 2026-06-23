import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import CaseCard from "@/components/CaseCard";
import BlogCard from "@/components/BlogCard";
import TestimonialCarousel, {
  type Testimonial,
} from "@/components/TestimonialCarousel";
import { caseStudies } from "@/content/caseStudies";
import { posts } from "@/content/posts";
import { asset } from "@/lib/site";
import styles from "./page.module.css";

const LOGOS = [
  { src: "/assets/logos/stellar.png", alt: "Stellar" },
  { src: "/assets/logos/sgforge.png", alt: "Société Générale–FORGE" },
  { src: "/assets/logos/filecoin.png", alt: "Filecoin" },
  { src: "/assets/logos/lifi.png", alt: "LI.FI" },
  { src: "/assets/logos/delubac.png", alt: "Delubac & Cie" },
  { src: "/assets/logos/near.png", alt: "NEAR" },
  { src: "/assets/logos/canton.png", alt: "Canton" },
  { src: "/assets/logos/cardano.png", alt: "Cardano" },
];

const SERVICES = [
  {
    glyph: "₮",
    chipBg: "var(--navy)",
    chipColor: "#fff",
    serif: true,
    title: "Tokenization & real-world assets",
    desc: "Stablecoins, tokenized funds, and regulated asset issuance, structured, engineered, and taken live on mainnet.",
  },
  {
    glyph: "⛨",
    chipBg: "var(--green)",
    chipColor: "#fff",
    serif: false,
    title: "Smart contracts & security",
    desc: "Production smart contracts, audits, source verification, and upgrade-safe architecture for regulated, high-stakes environments.",
  },
  {
    glyph: "⚿",
    chipBg: "#d6bdbe",
    chipColor: "var(--navy)",
    serif: false,
    title: "Wallets, custody & accounts",
    desc: "Passkeys, smart accounts, and custody integrations, designed to meet institutional compliance.",
  },
  {
    glyph: "▦",
    chipBg: "var(--navy)",
    chipColor: "#fff",
    serif: false,
    title: "dApps, interfaces & product",
    desc: "Production interfaces, dashboards, and branded front-ends: the application layer your users actually touch, on any chain.",
  },
  {
    glyph: "⇌",
    chipBg: "var(--green)",
    chipColor: "#fff",
    serif: false,
    title: "Onboarding & fiat rails",
    desc: "Frictionless user onboarding and fiat on/off-ramps that connect traditional money to onchain assets, with compliance built in.",
  },
  {
    glyph: "✦",
    chipBg: "#d6bdbe",
    chipColor: "var(--navy)",
    serif: true,
    title: "Advisory, tooling & grants",
    desc: "Protocol-level guidance, open-source tooling, and ecosystem grant support, from idea to funding to mainnet.",
  },
];

const PILLARS = [
  {
    title: "Built for regulated production",
    desc: "The security, auditability, and reliability that regulated institutions put their name behind. Already running live on mainnet, not in proof of concept.",
  },
  {
    title: "We build the tooling, not just on it",
    desc: "Core contributors and maintainers of the developer tooling ecosystems run on, trusted by the foundations behind them. Proven on Stellar, applied wherever you build.",
  },
  {
    title: "Fluent in two worlds",
    desc: "Equally at home with a bank's risk committee and a Web3 founder's GitHub, and we translate cleanly between them.",
  },
];

const STATS = [
  { value: "$20M+", label: "Stablecoins issued onchain" },
  { value: "€100M+", label: "Funds tokenized" },
  { value: "2", label: "Big Four consulting partners" },
  { value: "7", label: "Blockchains we build on" },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "“When we undertook the biggest update to Stellar since its inception, fully programmable smart contracts, we knew we needed an industry-leading developer experience. We searched far and wide for capable teams. We found one.”",
    name: "Tomer Weller",
    role: "Chief Product Officer, Stellar Development Foundation",
    avatar: asset("/assets/tomer-weller.jpg"),
  },
  {
    quote:
      "“They consistently fill critical gaps in the ecosystems they work in. I'm impressed by their speed, capacity, and commitment to quality. For true co-creators who bring ideas to life, look no further than The Aha Company.”",
    name: "Jane Wang",
    role: "PM, Developer Experience & RWA Tokenization, Stellar Development Foundation",
    avatar: asset("/assets/jane-wang.jpg"),
  },
];

const featured = ["eurcv-stablecoin", "lifi-stellar", "mmf-tokenization"]
  .map((slug) => caseStudies.find((c) => c.slug === slug)!)
  .filter(Boolean);

function LogoRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className={styles.logoRow} aria-hidden={ariaHidden}>
      {LOGOS.map((l) => (
        <img key={l.alt} src={asset(l.src)} alt={l.alt} className={styles.logo} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="navy">
        <div className={styles.glowTopRight} />
        <div className={styles.glowBottomLeft} />
        <div className={styles.heroGrid}>
          <div>
            <div className={`eyebrow eyebrow--light ${styles.heroEyebrow}`}>
              Trusted by banks &amp; Web3 teams
            </div>
            <h1 className={`h1 ${styles.heroTitle}`}>
              Blockchain infrastructure, built to institutional standard.
            </h1>
            <p className={`lead ${styles.heroSub}`}>
              We take banks and Web3 teams from concept to production: secure,
              audited, and built to last.
            </p>
            <div className={styles.heroCtas}>
              <ButtonLink href="/contact" variant="primary" arrow>
                Schedule a call
              </ButtonLink>
              <ButtonLink href="/case-studies" variant="ghost">
                See our work
              </ButtonLink>
            </div>
          </div>
          <div className={styles.statCardWrap}>
            <div className={styles.statCard}>
              <div className={styles.statLive}>● Live on mainnet</div>
              <div className={styles.statBig}>$20M+</div>
              <div className={styles.statSub}>
                In regulated stablecoins issued and live onchain.
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statRow}>
                <div>
                  <div className={styles.statColValue}>€100M+</div>
                  <div className={styles.statColLabel}>Funds tokenized</div>
                </div>
                <div>
                  <div className={styles.statColValue}>7</div>
                  <div className={styles.statColLabel}>Blockchains</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED-BY MARQUEE */}
      <section className={styles.trustSection}>
        <p className={styles.trustCaption}>
          Trusted by leading financial institutions and Web3 ecosystems
        </p>
        <div className="marquee">
          <div className="marquee__track">
            <LogoRow />
            <LogoRow ariaHidden />
          </div>
        </div>
      </section>

      {/* CREDIBILITY STATS */}
      <section className="section--sm surface-paper-2" style={{ borderBottom: "1px solid var(--card-border)" }}>
        <div className={styles.statsGrid} data-aha-reveal>
          {STATS.map((s) => (
            <div key={s.label}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section surface-white">
        <div className="container">
          <div className={styles.intro} data-aha-reveal>
            <div className={`eyebrow ${styles.introEyebrow}`}>What we do</div>
            <h2 className={`h2 ${styles.introTitle}`}>
              Your end-to-end blockchain partner
            </h2>
            <p className={`lead ${styles.introLead}`}>
              From regulated asset issuance to the deepest layers of the protocol
              stack. One team that speaks both compliance and code.
            </p>
          </div>
          <div className="services-grid" data-aha-reveal>
            {SERVICES.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <div
                  className={styles.iconChip}
                  style={{
                    background: s.chipBg,
                    color: s.chipColor,
                    fontFamily: s.serif ? "var(--font-serif)" : "var(--font-sans)",
                  }}
                  aria-hidden="true"
                >
                  {s.glyph}
                </div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AHA */}
      <section id="why" className="navy section">
        <div
          className={styles.glowTopRight}
          style={{ top: "-20%", left: "-6%", right: "auto", width: 520, height: 520, background: "radial-gradient(circle, rgba(71,160,25,.16), transparent 60%)" }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.whyHead} data-aha-reveal>
            <div className={`eyebrow eyebrow--light ${styles.introEyebrow}`}>
              Why The Aha Company
            </div>
            <h2 className="h2">
              A bridge between regulated finance and onchain infrastructure
            </h2>
          </div>
          <div className={styles.whyGrid} data-aha-reveal>
            {PILLARS.map((p) => (
              <div key={p.title} className={styles.pillar}>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section id="cases" className="section surface-paper-2">
        <div className="container">
          <div className={styles.headRow} data-aha-reveal>
            <div className={styles.headText}>
              <div className={`eyebrow ${styles.introEyebrow}`}>Selected work</div>
              <h2 className="h2">Production systems, live with real institutions</h2>
            </div>
            <Link href="/case-studies" className={styles.headLink}>
              All case studies →
            </Link>
          </div>
          <div className={styles.casesGrid} data-aha-reveal>
            {featured.map((c) => (
              <CaseCard key={c.slug} study={c} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section surface-white">
        <div className="container">
          <TestimonialCarousel items={TESTIMONIALS} />
        </div>
      </section>

      {/* INSIGHTS / BLOG TEASER */}
      <section id="insights" className="section surface-white">
        <div className="container">
          <div className={styles.headRow} data-aha-reveal>
            <div>
              <div className={`eyebrow ${styles.introEyebrow}`}>Insights</div>
              <h2 className="h2">From the team building it</h2>
            </div>
            <Link href="/blog" className={styles.headLink}>
              Visit the blog →
            </Link>
          </div>
          <div className={styles.blogGrid} data-aha-reveal>
            {posts.slice(0, 3).map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PHOTO */}
      <section className="section surface-paper-2">
        <div className="container">
          <div className={styles.teamHead} data-aha-reveal>
            <div className={`eyebrow ${styles.introEyebrow}`}>The team</div>
            <h2 className={`h2 ${styles.introTitle}`}>
              The engineers behind regulated onchain systems
            </h2>
            <p className="lead">
              A senior team of protocol engineers and product builders who ship
              production systems onchain, trusted by foundations and regulated
              institutions alike.
            </p>
          </div>
          <div className={styles.teamFrame} data-aha-reveal>
            <img
              src={asset("/assets/team-photo.jpg")}
              alt="The Aha Company team working together around a table"
              className={styles.teamImg}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="navy section">
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner} data-aha-reveal>
          <h2 className="h2">Let&apos;s build your onchain product.</h2>
          <p className={`lead ${styles.ctaText}`}>
            Whether you&apos;re a financial institution or a Web3 team, let&apos;s
            discuss your needs and co-create a solution that delivers true
            transformation.
          </p>
          <div className={styles.ctaBtns}>
            <ButtonLink href="/contact" variant="primary" arrow>
              Schedule a call
            </ButtonLink>
            <ButtonLink href="mailto:hello@theaha.co" variant="ghost">
              hello@theaha.co
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
