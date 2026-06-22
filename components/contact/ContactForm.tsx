"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.fields}>
        <div className={styles.row}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              required
              placeholder="Your name"
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Work email
            <input
              type="email"
              required
              placeholder="you@company.com"
              className={styles.input}
            />
          </label>
        </div>

        <label className={styles.label}>
          Company
          <input
            type="text"
            placeholder="Organization"
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          I am a
          <select className={styles.input}>
            <option>Financial institution</option>
            <option>Web3 project or protocol</option>
            <option>Foundation or ecosystem</option>
            <option>Other</option>
          </select>
        </label>

        <label className={styles.label}>
          What are you building?
          <textarea
            rows={4}
            placeholder="A few sentences on your project, timeline, and what you need."
            className={`${styles.input} ${styles.textarea}`}
          />
        </label>

        <button type="submit" className={styles.submit}>
          Send message <span className={styles.arrow}>→</span>
        </button>

        {submitted && (
          <p className={styles.confirm}>
            Thanks. This is a demo form. Wire it to your form service to receive
            submissions.
          </p>
        )}

        <p className={styles.consent}>
          By submitting, you agree to be contacted about your enquiry.
        </p>
      </div>
    </form>
  );
}
