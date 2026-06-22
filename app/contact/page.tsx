import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your onchain product. Whether you are a financial institution or a Web3 team, we will get back to you within two business days.",
};

export default function ContactPage() {
  return (
    <section className="navy">
      <div className={styles.glow} />
      <div className={styles.grid} data-aha-reveal>
        {/* LEFT: pitch + details */}
        <div>
          <div className={`eyebrow eyebrow--light ${styles.heroEyebrow}`}>
            Schedule a call
          </div>
          <h1 className={`h1 ${styles.title}`}>
            Let&apos;s build your onchain product.
          </h1>
          <p className={`lead ${styles.lead}`}>
            Tell us a little about what you are building. Whether you are a
            financial institution or a Web3 team, we will get back to you within
            two business days.
          </p>

          <div className={styles.details}>
            <div>
              <div className={styles.detailLabel}>Email</div>
              <a href="mailto:hello@ahalabs.dev" className={styles.detailValue}>
                hello@ahalabs.dev
              </a>
            </div>
            <div>
              <div className={styles.detailLabel}>Where we are</div>
              <div className={styles.detailValue}>
                United States · France · Brazil
              </div>
            </div>
            <div>
              <div className={styles.detailLabel}>Prefer to book directly?</div>
              {/* Calendar embed placeholder: drop a Calendly / Cal.com embed here */}
              <div className={styles.calendar}>
                <div className={styles.calendarTitle}>Calendar embed</div>
                <div className={styles.calendarNote}>
                  Replace this block with your Calendly or Cal.com inline embed.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: qualifying form */}
        <ContactForm />
      </div>
    </section>
  );
}
