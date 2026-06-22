import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";
import styles from "./CaseCard.module.css";

/** Gradient-header case study card. Used on the home page and the
 *  case studies index. The gradient comes from the entry's data. */
export default function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={`${styles.card} card-hover`}
    >
      <div className={styles.header} style={{ background: study.gradient }}>
        <span className={styles.eyebrow}>{study.eyebrow}</span>
        <span className={styles.label}>{study.label}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{study.title}</h3>
        <p className={styles.blurb}>{study.cardBlurb}</p>
        <span className={styles.more}>Read the case study →</span>
      </div>
    </Link>
  );
}
