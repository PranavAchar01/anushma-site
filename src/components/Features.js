import React from "react";
import { motion } from "framer-motion";
import { features } from "../data";

export default function Features() {
  return (
    <section className="section container" id="why">
      <div className="section-head">
        <span className="eyebrow">
          <span className="dot" /> WHY ANUSHMA
        </span>
        <h2 className="section-title">
          A distributor that <span className="accent">thinks like a lab</span>
        </h2>
      </div>
      <div className="feat-grid">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="feat-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="n">0{i + 1}</div>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
