import Link from "next/link";
import type { Post } from "@/content/posts";
import styles from "./BlogCard.module.css";

/** Insight/blog teaser card. Used on the home page and blog index. */
export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.thumb} style={{ background: post.thumb }} />
      <div className={styles.meta}>
        {post.category} · {post.readingTime} min
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
    </Link>
  );
}
