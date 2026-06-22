"use client";

import { useState } from "react";
import CaseCard from "@/components/CaseCard";
import type { CaseStudy, CaseCategory } from "@/content/caseStudies";
import styles from "@/app/case-studies/caseStudies.module.css";

type Filter = "all" | CaseCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "banking", label: "Banking & funds" },
  { id: "web3", label: "Web3" },
  { id: "ecosystem", label: "Ecosystem & open source" },
];

export default function CaseFilter({ studies }: { studies: CaseStudy[] }) {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all"
      ? studies
      : studies.filter((s) => s.category === active);

  return (
    <div className="container">
      <div className={styles.filters}>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`pill${active === f.id ? " is-active" : ""}`}
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className={styles.grid}>
          {visible.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>No case studies in this category yet.</p>
      )}
    </div>
  );
}
