import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import { getCaseStudy, caseStudySlugs } from "@/content/caseStudies";
import styles from "./caseStudy.module.css";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return { title: "Case study" };
  }
  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      {/* HERO */}
      <section className="navy">
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <Link href="/case-studies" className={styles.backLink}>
            ← All case studies
          </Link>
          <div className={`eyebrow eyebrow--light ${styles.heroEyebrow}`}>
            {study.eyebrow}
          </div>
          <h1 className={`h1 ${styles.heroTitle}`}>{study.title}</h1>
          <p className={`lead ${styles.heroLead}`}>{study.summary}</p>
        </div>
      </section>

      {/* META STRIP */}
      <section className={styles.metaStrip}>
        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>Client</div>
            <div className={styles.metaValue}>{study.client}</div>
          </div>
          <div>
            <div className={styles.metaLabel}>Our role</div>
            <div className={styles.metaValue}>{study.role}</div>
          </div>
          <div>
            <div className={styles.metaLabel}>Ecosystem</div>
            <div className={styles.metaValue}>{study.ecosystem}</div>
          </div>
          <div>
            <div className={styles.metaLabel}>Status</div>
            <div className={`${styles.metaValue} ${styles.metaValueStatus}`}>
              {study.status}
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className={styles.body}>
        <div className={styles.measure}>
          <div className={styles.block} data-aha-reveal>
            <h2 className={styles.blockTitle}>The challenge</h2>
            <p className={styles.para}>{study.challenge}</p>
          </div>

          <div className={styles.block} data-aha-reveal>
            <h2 className={styles.blockTitle}>Our solution</h2>
            <p className={styles.para}>{study.solution}</p>
          </div>

          <div className={`${styles.block} ${styles.archCard}`} data-aha-reveal>
            <h3 className={styles.archEyebrow}>Architecture highlights</h3>
            <ul className={styles.archList}>
              {study.architectureHighlights.map((item) => (
                <li key={item} className={styles.archItem}>
                  <span className={styles.archDot} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.block} data-aha-reveal>
            <h2 className={styles.outcomeTitle}>Outcome</h2>
            <div className={styles.metricsGrid}>
              {study.outcomeMetrics.map((metric) => (
                <div key={metric.label}>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.block} data-aha-reveal>
            <h3 className={styles.techEyebrow}>Tech used</h3>
            <div className={styles.chips}>
              {study.techUsed.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {study.testimonial && (
            <figure className={styles.testimonial} data-aha-reveal>
              <blockquote className={styles.quote}>
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className={styles.cite}>
                {study.testimonial.name} · {study.testimonial.role}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner} data-aha-reveal>
          <h2 className={styles.ctaTitle}>Building a regulated onchain asset?</h2>
          <p className={styles.ctaText}>
            We have done it with a systemically important bank. Let&apos;s talk
            about yours.
          </p>
          <ButtonLink href="/contact" variant="primary" arrow>
            Schedule a call
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
