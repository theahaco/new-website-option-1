import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "secondary" | "nav";

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  size?: "md" | "sm";
  /** Append a trailing arrow glyph. */
  arrow?: boolean;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/**
 * The site's one call-to-action primitive. Internal hrefs route through
 * next/link; mailto:/tel:/http(s): render a plain anchor. Styling comes
 * from the global .btn / .btn--* utilities.
 */
export default function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  children,
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  const classes = ["btn", `btn--${variant}`, size === "sm" ? "btn--sm" : "", className]
    .filter(Boolean)
    .join(" ");

  // The nav pill uses a light-green arrow; everywhere else it inherits white.
  const arrowStyle =
    variant === "nav" ? { color: "var(--green-light)" } : undefined;

  const inner = (
    <>
      {children}
      {arrow && (
        <span className="btn__arrow" style={arrowStyle} aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  if (isExternal) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}
