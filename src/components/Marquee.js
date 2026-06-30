import React from "react";

const items = [
  "Fisher Chemical",
  "IDEX Health & Science",
  "Azenta Life Sciences",
  "Optima LC/MS Grade",
  "PEEK Fluidics",
  "PTFE Lined Vials",
  "Nitrile Protection",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {loop.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
