import React, { useState } from "react";
import { motion } from "framer-motion";
import { company } from "../data";
import { PhoneIcon, MailIcon, PinIcon } from "./Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Contact Form Submission — Anushma LLC");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `${company.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const lines = [
    { Icon: PhoneIcon, label: "Call us", value: company.phone, href: company.phoneHref },
    { Icon: MailIcon, label: "Email us", value: company.email, href: company.emailHref },
    { Icon: PinIcon, label: "Based in", value: company.address, href: "#" },
  ];

  return (
    <section className="section container" id="contact">
      <motion.div
        className="cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="cta-grid">
          <div>
            <span className="eyebrow">
              <span className="dot" /> LET'S TALK
            </span>
            <h2 style={{ marginTop: 20 }}>
              Need quality <span className="accent">lab materials?</span>
            </h2>
            <p>
              Get in touch with Anushma LLC for lab essentials, reagents, and consumables tailored
              to your requirements. We'll put together a quote that fits your workflow.
            </p>
            <div className="contact-lines">
              {lines.map((l) => (
                <a key={l.label} href={l.href}>
                  <span className="ic">
                    <l.Icon width={20} height={20} />
                  </span>
                  <span className="meta">
                    <small>{l.label}</small>
                    <b>{l.value}</b>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form className="form" onSubmit={submit}>
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={update("name")}
            />
            <input
              required
              type="email"
              placeholder="Work email"
              value={form.email}
              onChange={update("email")}
            />
            <textarea
              required
              placeholder="What materials are you looking for?"
              value={form.message}
              onChange={update("message")}
            />
            <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
              Send message
            </button>
            {sent && (
              <span className="ok">✓ Opening your mail client — thanks for reaching out!</span>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
