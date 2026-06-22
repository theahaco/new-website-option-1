import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import CaseFilter from "@/components/case-studies/CaseFilter";
import { caseStudies } from "@/content/caseStudies";
import styles from "./caseStudies.module.css";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Production systems, live with real institutions. Regulated assets, cross-chain infrastructure, and developer tooling running on mainnet today.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="navy section">
        <div className={styles.heroGlow} />
        <div className={`container ${styles.heroInner}`}>
          <div className={`eyebrow eyebrow--light ${styles.heroEyebrow}`}>
            Case studies
          </div>
          <h1 className={`h1 ${styles.heroTitle}`}>
            Production systems, live with real institutions
          </h1>
          <p className={`lead ${styles.heroLead}`}>
            Not demos. Regulated assets, cross-chain infrastructure, and
            developer tooling running on mainnet today.
          </p>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="section surface-white">
        <CaseFilter studies={caseStudies} />
      </section>

      {/* CTA */}
      <section className="navy section">
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner} data-aha-reveal>
          <h2 className="h2">Your project could be the next one.</h2>
          <p className={`lead ${styles.ctaText}`}>
            We take a small number of engagements at a time so each one ships.
            Let&apos;s see if yours is a fit.
          </p>
          <ButtonLink href="/contact" variant="primary" arrow>
            Schedule a call
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
