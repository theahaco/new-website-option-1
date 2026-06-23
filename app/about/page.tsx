import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import { asset } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Aha Company is a blockchain engineering firm that takes institutional and Web3 clients from idea to mainnet, equally fluent with a bank's risk committee and a founder's GitHub.",
};

const VALUES = [
  {
    title: "Production over proof of concept",
    desc: "We measure ourselves by what runs on mainnet with real value, not by demos or pitch decks.",
  },
  {
    title: "Open by default",
    desc: "We build and maintain public goods the wider community depends on, because credible infrastructure should be inspectable.",
  },
  {
    title: "Honest about risk",
    desc: "We tell clients what is hard, what can fail, and what we would not ship. Trust is the product.",
  },
];

const ECOSYSTEM = [
  { name: "Stellar", role: "Core contributor" },
  { name: "SCF", role: "Community Fund" },
  { name: "XRPL", role: "In production" },
  { name: "Open source", role: "Public goods" },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="navy section">
        <div className={styles.heroGlow} />
        <div className={`container ${styles.heroInner}`}>
          <div className={`eyebrow eyebrow--light ${styles.heroEyebrow}`}>
            About
          </div>
          <h1 className={`h1 ${styles.heroTitle}`}>
            We sit between regulated finance and onchain infrastructure
          </h1>
          <p className={`lead ${styles.heroLead}`}>
            The Aha Company is a blockchain engineering firm that takes
            institutional and Web3 clients from idea to mainnet. We are equally
            fluent with a bank&apos;s risk committee and a founder&apos;s GitHub,
            and we translate cleanly between them.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section surface-white">
        <div className={styles.mission}>
          <div data-aha-reveal>
            <div className={`eyebrow ${styles.missionEyebrow}`}>Our mission</div>
            <h2 className={`h2 ${styles.missionTitle}`}>
              Make onchain infrastructure something a regulated institution can
              stake its name on.
            </h2>
            <p className={styles.missionText}>
              Most blockchain teams are fluent in one world. They either
              understand protocols deeply but have never sat across from a
              compliance officer, or they understand finance but treat the chain
              as a black box.
            </p>
            <p className={styles.missionText}>
              We were built to be fluent in both. We have shipped production
              systems for major banks while remaining active, credible
              contributors inside the ecosystems we work in. That combination is
              rare, and it is the entire point of the company.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM PHOTO */}
      <section className={`surface-white ${styles.teamWrap}`}>
        <div className={styles.teamFrame} data-aha-reveal>
          <img
            src={asset("/assets/team-photo.jpg")}
            alt="The Aha Company team working together around a table"
            className={styles.teamImg}
          />
        </div>
      </section>

      {/* VALUES */}
      <section
        className="section surface-paper-2"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <div className={styles.valuesInner}>
          <div className={styles.valuesHead} data-aha-reveal>
            <div className={`eyebrow ${styles.valuesEyebrow}`}>What we value</div>
            <h2 className={`h2 ${styles.valuesTitle}`}>How we choose to work</h2>
          </div>
          <div className={styles.valuesGrid} data-aha-reveal>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.value}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM STANDING */}
      <section className="section surface-white">
        <div className={styles.ecoInner}>
          <div data-aha-reveal>
            <div className={`eyebrow ${styles.ecoEyebrow}`}>Ecosystem standing</div>
            <h2 className={`h2 ${styles.ecoTitle}`}>
              Trusted by the foundations, not just building on them
            </h2>
            <p className={styles.ecoText}>
              We are active participants in the Stellar Community Fund and
              maintain open-source tooling the ecosystem builds on, including the
              Stellar CLI and Scaffold Stellar.
            </p>
            <p className={styles.ecoText}>
              Beyond Stellar, we ship in production across XRPL, Filecoin, and
              Canton, working with banks, protocols, and foundations alike.
            </p>
          </div>
          <div className={styles.chipGrid} data-aha-reveal>
            {ECOSYSTEM.map((e) => (
              <div key={e.name} className={styles.ecoChip}>
                <div className={styles.ecoChipName}>{e.name}</div>
                <div className={styles.ecoChipRole}>{e.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section
        className="surface-paper-2"
        style={{
          padding: "clamp(48px,6vw,80px) var(--pad)",
          borderTop: "1px solid var(--card-border)",
        }}
      >
        <div className={styles.locInner}>
          <div className={styles.locRow} data-aha-reveal>
            <div className="eyebrow">Where we are</div>
            <div className={styles.locLine}>
              United States · France · Brazil
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS CTA */}
      <section className="navy section">
        <div className={styles.careersGlow} />
        <div className={styles.careersInner} data-aha-reveal>
          <h2 className={`h2 ${styles.careersTitle}`}>
            Want to build at this depth?
          </h2>
          <p className={`lead ${styles.careersText}`}>
            We hire senior engineers who care about shipping regulated systems
            that actually work. If that is you, we would like to talk.
          </p>
          <ButtonLink href="/contact" variant="primary" arrow>
            Get in touch
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
