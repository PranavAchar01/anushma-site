import React from "react";
import { motion } from "framer-motion";
import Vanta from "./Vanta";
import { company } from "../data";
import { ArrowIcon, PhoneIcon } from "./Icons";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="dot" /> LAB MATERIALS DISTRIBUTOR · DUBLIN, CA
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
          >
            {["High-Quality", "Lab Materials", "for Every Need."].map((line, i) => (
              <motion.span
                key={i}
                className={i === 2 ? "accent" : ""}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                }}
                style={{ display: "block" }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {company.subtitle}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            <a href="#catalog" className="btn btn-primary">
              Explore the Catalog <ArrowIcon width={18} height={18} />
            </a>
            <a href={company.phoneHref} className="btn btn-ghost">
              <PhoneIcon width={18} height={18} /> {company.phone}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          <Vanta
            effect="net"
            className="vanta-fill"
            options={{
              color: 0x2f6bd6,
              backgroundColor: 0xf2f5fb,
              points: 20,
              maxDistance: 24,
              spacing: 11,
              showDots: true,
            }}
          />
          <span className="visual-tag">Molecular Network</span>
        </motion.div>
      </div>
    </header>
  );
}
