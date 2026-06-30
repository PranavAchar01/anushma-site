import React from "react";
import { motion } from "framer-motion";
import Vanta from "./Vanta";
import { BoltIcon, BadgeIcon, CubeIcon } from "./Icons";

const rows = [
  {
    icon: CubeIcon,
    title: "Precision-matched fluidics",
    body: "PEEK tubing and filter end fittings spec'd for high-pressure LC/MS paths — zero dead volume, no surprises.",
  },
  {
    icon: BadgeIcon,
    title: "Authentic, traceable brands",
    body: "Fisher, IDEX Health & Science, Azenta — sourced direct so the part in the box matches the datasheet.",
  },
  {
    icon: BoltIcon,
    title: "Quotes built around you",
    body: "Tell us the workflow; we assemble the consumables, reagents, and protective wear to run it.",
  },
];

export default function Showcase() {
  return (
    <section className="section container showcase">
      <div className="showcase-grid">
        <motion.div
          className="showcase-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <Vanta
            effect="globe"
            className="vanta-fill"
            options={{
              color: 0x2f6bd6,
              color2: 0x1e57bd,
              backgroundColor: 0xf2f5fb,
              size: 0.78,
            }}
          />
          <span className="visual-tag">Reproducible by Design</span>
        </motion.div>

        <div>
          <span className="eyebrow">
            <span className="dot" /> ENGINEERED FOR THE BENCH
          </span>
          <h2 className="section-title" style={{ marginBottom: 14 }}>
            Materials that hold up to <span className="accent">real science</span>
          </h2>
          <p className="section-sub">
            Every SKU earns its place in the catalog. We obsess over fit, grade, and traceability
            so your results stay reproducible run after run.
          </p>
          <div className="showcase-list">
            {rows.map((r, i) => (
              <motion.div
                key={r.title}
                className="row"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="ic">
                  <r.icon width={20} height={20} />
                </span>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
