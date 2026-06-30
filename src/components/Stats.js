import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data";

function Counter({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="num">
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="container" style={{ paddingTop: 90 }}>
      <div className="stats">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
            <div className="lab">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
