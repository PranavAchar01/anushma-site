import React from "react";
import { motion } from "framer-motion";
import { catalog } from "../data";

export default function Products() {
  return (
    <section className="section container" id="catalog">
      <div className="section-head">
        <span className="eyebrow">
          <span className="dot" /> The catalog
        </span>
        <h2 className="section-title">
          Exactly <span className="accent">what ships today</span>
        </h2>
        <p className="section-sub">
          A live look at the consumables, reagents, and fluidics moving through our Dublin, CA
          facility. Need something that isn't listed? We'll source it.
        </p>
      </div>

      <motion.div
        className="catalog"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="catalog-head">
          <span>Description</span>
          <span>Catalog #</span>
        </div>
        {catalog.map((p) => (
          <a key={p.sku} className="catalog-row" href="#contact">
            <span className="c-name">{p.name}</span>
            <span className="c-sku">{p.sku}</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
