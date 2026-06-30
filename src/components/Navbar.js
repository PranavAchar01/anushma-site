import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Categories", href: "#categories" },
  { label: "Catalog", href: "#catalog" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#top" className="brand">
        <img src="/assets/anushma-logo.png" alt="Anushma LLC logo" />
        Anushma<span style={{ color: "var(--ink-faint)", fontWeight: 400 }}> LLC</span>
      </a>
      <div className="links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
      <a href="#contact" className="btn btn-primary nav-cta">
        Request a Quote
      </a>
    </motion.nav>
  );
}
