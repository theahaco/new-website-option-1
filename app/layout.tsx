import type { Metadata } from "next";
import { Spectral, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";
import { SITE_ORIGIN, SITE_URL } from "@/lib/site";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "The Aha Company — Blockchain infrastructure, built to institutional standard",
    template: "%s · The Aha Company",
  },
  description:
    "The Aha Company takes banks and Web3 teams from concept to production onchain: tokenization, smart contracts, wallets, and product, secure, audited, and live on mainnet.",
  openGraph: {
    type: "website",
    siteName: "The Aha Company",
    title: "The Aha Company — Blockchain infrastructure, built to institutional standard",
    description:
      "Institutional-grade blockchain engineering, from idea to mainnet. Trusted by banks and Web3 teams.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aha Company",
    description:
      "Institutional-grade blockchain engineering, from idea to mainnet.",
  },
};

// Runs before paint: only opt into reveal animations when the device
// allows motion and supports IntersectionObserver. Otherwise content
// stays visible (no flash, no-JS safe).
const revealReadyScript = `(function(){try{if(!('IntersectionObserver' in window))return;var m=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)');if(m&&m.matches)return;document.documentElement.setAttribute('data-reveal-ready','');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spectral.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealReadyScript }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <RevealProvider />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
