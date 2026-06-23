"use client";

import { useState } from "react";
import Link from "next/link";
import { asset } from "@/lib/site";
import styles from "./Footer.module.css";

const EXPERTISE = [
  { label: "Tokenization & RWA", href: "/services#tokenization" },
  { label: "Smart contracts", href: "/services#smart-contracts" },
  { label: "Wallets & custody", href: "/services#wallets" },
  { label: "Advisory & grants", href: "/services#advisory" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  // Not wired to a backend — connect to Netlify Forms / Formspree / a
  // custom endpoint. See README placeholders.
  const [sent, setSent] = useState(false);

  return (
    <footer className={`${styles.footer} navy-deep`}>
      <div className={styles.inner}>
        <div className={styles.cols}>
          <div className={styles.brand}>
            <img
              src={asset("/assets/aha-logo-horizontal-white.png")}
              alt="The Aha Company"
              width={128}
              height={32}
              className={styles.brandLogo}
            />
            <p className={styles.tagline}>
              Institutional-grade blockchain engineering, from idea to mainnet.
            </p>
          </div>

          <nav className={styles.col} aria-label="Expertise">
            <h2 className={styles.colHead}>Expertise</h2>
            {EXPERTISE.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </nav>

          <nav className={styles.col} aria-label="Company">
            <h2 className={styles.colHead}>Company</h2>
            {COMPANY.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className={styles.col}>
            <h2 className={styles.colHead}>Get the brief</h2>
            <p className={styles.briefCopy}>
              Occasional notes on building regulated systems onchain.
            </p>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className={styles.srOnly} htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@company.com"
                className={styles.input}
              />
              <button type="submit" className={styles.send} aria-label="Subscribe">
                →
              </button>
            </form>
            {sent && (
              <p className={styles.confirm} role="status">
                Thanks, you&apos;re on the list.
              </p>
            )}
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>
            © 2025 The Aha Company · United States · France · Brazil
          </div>
          <div className={styles.social}>
            <a href="mailto:hello@theaha.co" className={styles.link}>
              hello@theaha.co
            </a>
            <a
              href="https://github.com/theahaco"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/theahaco/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/theahaco"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
