"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonLink from "./ButtonLink";
import styles from "./Nav.module.css";

const LINKS = [
  { label: "Expertise", href: "/services" },
  { label: "Case studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" className={styles.logo} aria-label="The Aha Company — home">
          <img
            src="/assets/aha-logo-horizontal-blue.png"
            alt="The Aha Company"
            width={232}
            height={58}
          />
        </Link>

        <div className={styles.desktop}>
          <div className={styles.links}>
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.link} ${isActive(l.href) ? styles.active : ""}`}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <ButtonLink href="/contact" variant="nav" arrow>
            Schedule a call
          </ButtonLink>
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuIcon} data-open={open} />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className={styles.panel}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.panelLink} ${isActive(l.href) ? styles.active : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <ButtonLink href="/contact" variant="nav" arrow className={styles.panelCta}>
            Schedule a call
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
