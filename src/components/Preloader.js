import React, { useEffect, useState } from "react";

const DURATION = 1700;

export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let raf;
    let killed = false;

    const finish = () => {
      if (killed) return;
      setDone(true);
      setTimeout(() => !killed && setRemoved(true), 650);
    };

    const start = performance.now();
    const tick = (now) => {
      if (killed) return;
      const v = Math.min(100, ((now - start) / DURATION) * 100);
      setPct(Math.floor(v));
      if (v < 100) raf = requestAnimationFrame(tick);
      else setTimeout(finish, 260);
    };
    raf = requestAnimationFrame(tick);

    const failsafe = setTimeout(finish, 4000);

    return () => {
      killed = true;
      cancelAnimationFrame(raf);
      clearTimeout(failsafe);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className="preloader"
      aria-hidden={done}
      style={
        done
          ? { opacity: 0, visibility: "hidden", pointerEvents: "none" }
          : undefined
      }
    >
      <img className="pre-logo" src="/assets/anushma-logo.png" alt="Anushma LLC" />
      <div className="bar">
        <i style={{ width: `${pct}%` }} />
      </div>
      <div className="pct">Anushma LLC · {String(pct).padStart(3, "0")}%</div>
    </div>
  );
}
