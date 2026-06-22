import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import BlogCard from "@/components/BlogCard";
import { posts, getPost, postSlugs, formatDate } from "@/content/posts";
import styles from "./article.module.css";

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Article not found · The Aha Company" };
  }
  return {
    title: `${post.title} · The Aha Company`,
    description: post.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        {/* ARTICLE HEADER */}
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/blog" className={styles.backLink}>
              ← All insights
            </Link>
            <div className={styles.category}>{post.category}</div>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.authorRow}>
              <div className={styles.avatar} aria-hidden="true" />
              <div className={styles.authorMeta}>
                {post.author}
                <span className={styles.authorSub}>
                  {formatDate(post.date)} · {post.readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* HERO IMAGE */}
        <div className={styles.heroWrap}>
          <div className={styles.hero} style={{ background: post.thumb }} />
        </div>

        {/* BODY */}
        <div className={styles.body}>
          <p className={styles.intro}>
            [Article body, replace with real content. This template demonstrates
            the reading layout: a comfortable measure, clear heading hierarchy,
            and generous line height for long-form technical writing.]
          </p>

          <h2 className={styles.h2}>A section heading</h2>
          <p className={styles.p}>
            Body paragraphs use Space Grotesk at a readable size with relaxed
            leading. Keep paragraphs short and the measure around 65 characters
            so long technical passages stay easy to scan.
          </p>
          <p className={styles.p}>
            Inline emphasis like{" "}
            <strong className={styles.strong}>a bold phrase</strong> or{" "}
            <a href="#" className={styles.inlineLink}>
              a link
            </a>{" "}
            sits naturally within the text.
          </p>

          <blockquote className={styles.quote}>
            A pull quote draws out the single most important line of the piece.
          </blockquote>

          <h3 className={styles.h3}>A subsection heading</h3>
          <p className={styles.p}>Lists are used for sequences and key points:</p>
          <ul className={styles.list}>
            <li>First point worth calling out on its own line.</li>
            <li>Second point, kept short and scannable.</li>
            <li>Third point that closes the thought.</li>
          </ul>

          {/* SHARE */}
          <div className={styles.share}>
            <span className={styles.shareLabel}>Share</span>
            <a href="#" className={styles.shareLink}>
              LinkedIn
            </a>
            <a href="#" className={styles.shareLink}>
              X
            </a>
            <a href="#" className={styles.shareLink}>
              Copy link
            </a>
          </div>

          {/* INLINE CTA */}
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Working on something like this?</h3>
            <p className={styles.ctaText}>
              We help institutions and Web3 teams take regulated onchain
              products to mainnet.
            </p>
            <ButtonLink href="/contact" variant="primary" arrow>
              Schedule a call
            </ButtonLink>
          </div>
        </div>
      </article>

      {/* RELATED READING */}
      <section
        className="section--sm surface-paper-2"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <div className="container">
          <h2 className={styles.relatedHead} data-aha-reveal>
            Related reading
          </h2>
          <div className={styles.relatedGrid} data-aha-reveal>
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
