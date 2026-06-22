"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./TestimonialCarousel.module.css";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  placeholder?: boolean;
}

const GAP = 24;
const AUTOPLAY_MS = 5500;

export default function TestimonialCarousel({
  items,
}: {
  items: Testimonial[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const perView = () =>
    typeof window !== "undefined" && window.innerWidth < 760 ? 1 : 2;
  const maxIndex = useCallback(
    () => Math.max(0, items.length - perView()),
    [items.length]
  );
  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return 0;
    return (track.children[0] as HTMLElement).offsetWidth + GAP;
  }, []);

  const go = useCallback(
    (i: number) => {
      const max = maxIndex();
      let idx = i;
      if (idx < 0) idx = max;
      if (idx > max) idx = 0;
      indexRef.current = idx;
      setIndex(idx);
      setOffset(idx * step());
    },
    [maxIndex, step]
  );

  useEffect(() => {
    const measure = setTimeout(() => go(indexRef.current), 60);
    const iv = setInterval(() => go(indexRef.current + 1), AUTOPLAY_MS);
    const onResize = () => {
      const clamped = Math.min(indexRef.current, maxIndex());
      go(clamped);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(measure);
      clearInterval(iv);
      window.removeEventListener("resize", onResize);
    };
  }, [go, maxIndex]);

  return (
    <div>
      <div className={styles.head} data-aha-reveal>
        <div className="eyebrow">In their words</div>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Previous testimonial"
            onClick={() => go(index - 1)}
          >
            ←
          </button>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Next testimonial"
            onClick={() => go(index + 1)}
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {items.map((t, i) => (
            <figure key={i} className={styles.figure}>
              <blockquote
                className={`${styles.quote} ${t.placeholder ? styles.placeholder : ""}`}
              >
                {t.quote}
              </blockquote>
              <figcaption className={styles.cap}>
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className={styles.avatar}
                  />
                ) : (
                  <div className={styles.avatarPlaceholder} aria-hidden="true" />
                )}
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
