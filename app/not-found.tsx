import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="navy section">
      <div
        className="container"
        style={{ textAlign: "center", maxWidth: 640 }}
      >
        <div className="eyebrow eyebrow--light" style={{ marginBottom: 18 }}>
          404
        </div>
        <h1 className="h1" style={{ marginBottom: 18 }}>
          This page could not be found.
        </h1>
        <p className="lead" style={{ marginBottom: 32 }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <ButtonLink href="/" variant="primary" arrow>
          Back to home
        </ButtonLink>
      </div>
    </section>
  );
}
