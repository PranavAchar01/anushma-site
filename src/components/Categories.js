import React, { useRef } from "react";
import { motion } from "framer-motion";
import { categories } from "../data";

function TiltCard({ cat, index }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateZ(4px)`;
  };
  const reset = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div ref={ref} className="cat-card" onMouseMove={handleMove} onMouseLeave={reset}>
        <div className="cat-media">
          <img src={cat.image} alt={cat.title} loading="lazy" />
        </div>
        <div className="cat-body">
          <h3>{cat.title}</h3>
          <p>{cat.blurb}</p>
          <a href="#contact" className="cat-link">
            Request a quote →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section className="section container" id="categories">
      <div className="section-head">
        <span className="eyebrow">
          <span className="dot" /> What we supply
        </span>
        <h2 className="section-title">
          Four pillars of the <span className="accent">modern lab</span>
        </h2>
        <p className="section-sub">
          From the bench to the chromatography stack, Anushma LLC stocks the materials your
          workflow depends on — selected, sourced, and shipped with quality you can trust.
        </p>
      </div>
      <div className="cat-grid">
        {categories.map((c, i) => (
          <TiltCard key={c.id} cat={c} index={i} />
        ))}
      </div>
    </section>
  );
}
