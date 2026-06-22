import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import BlogFilter from "@/components/blog/BlogFilter";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical notes on tokenization, smart-account UX, custody, and shipping regulated systems onchain, from the team building it.",
};

export default function BlogPage() {
  return (
    <>
      {/* SUB-HERO */}
      <section className="navy">
        <div className={styles.heroGlow} />
        <div className={`container ${styles.heroInner}`}>
          <div className="eyebrow eyebrow--light">Insights</div>
          <h1 className={`h1 ${styles.heroTitle}`}>From the team building it</h1>
          <p className={`lead ${styles.heroLead}`}>
            Practical notes on tokenization, smart-account UX, custody, and
            shipping regulated systems onchain.
          </p>
        </div>
      </section>

      {/* CONTROLS + GRID */}
      <section className="surface-white">
        <div className={`container ${styles.body}`}>
          <BlogFilter />
        </div>
      </section>

      {/* CTA */}
      <section className="navy section">
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner} data-aha-reveal>
          <h2 className="h2">Have a harder version of one of these problems?</h2>
          <p className={`lead ${styles.ctaText}`}>
            That is usually where we come in. Let&apos;s talk through it.
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
