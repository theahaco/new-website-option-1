"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { posts, type PostCategory } from "@/content/posts";
import styles from "@/app/blog/blog.module.css";

type Filter = "All" | PostCategory;

const FILTERS: Filter[] = ["All", "Regulation", "Engineering", "RWA"];

export default function BlogFilter() {
  const [active, setActive] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const q = query.toLowerCase().trim();
    return posts.filter((post) => {
      const catOk = active === "All" || post.category === active;
      const qOk = !q || post.title.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [active, query]);

  return (
    <>
      <div className={styles.controls}>
        <div className={styles.pills}>
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`pill ${active === f ? "is-active" : ""}`}
              aria-pressed={active === f}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <input
          type="search"
          className={styles.search}
          placeholder="Search articles"
          aria-label="Search articles"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {matches.length > 0 ? (
        <div className={styles.grid}>
          {matches.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>No articles match your search yet.</p>
      )}

      {/* Static pagination (visual only). */}
      <div className={styles.pagination}>
        <span className={`${styles.page} ${styles.pageActive}`} aria-current="page">
          1
        </span>
        <a href="#" className={styles.page}>
          2
        </a>
        <a href="#" className={styles.page}>
          3
        </a>
        <a href="#" className={`${styles.page} ${styles.pageNext}`}>
          Next →
        </a>
      </div>
    </>
  );
}
