import React from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const ShieldIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const VialIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M9 3h6" />
    <path d="M10 3v6.5L6.5 16a3.5 3.5 0 0 0 3.2 5h4.6a3.5 3.5 0 0 0 3.2-5L14 9.5V3" />
    <path d="M7.5 14h9" />
  </svg>
);

export const FlowIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="18" r="2" />
    <path d="M7 6h6a4 4 0 0 1 4 4v6" />
    <path d="M9 10l-2 2-2-2" />
  </svg>
);

export const MoleculeIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="2.4" />
    <circle cx="5" cy="6" r="1.8" />
    <circle cx="19" cy="7" r="1.8" />
    <circle cx="6" cy="18" r="1.8" />
    <path d="M10.4 10.6L6.4 7.2M13.6 11L17.4 7.8M11 13.8L7.2 16.6" />
  </svg>
);

export const PhoneIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h3l2 5-2 1.5a11 11 0 0 0 5 5L18 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const MailIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

export const PinIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ArrowIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const BoltIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);

export const BadgeIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="6" />
    <path d="M9 14l-1 7 4-2 4 2-1-7" />
  </svg>
);

export const CubeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
  </svg>
);

export const ICONS = {
  shield: ShieldIcon,
  vial: VialIcon,
  flow: FlowIcon,
  molecule: MoleculeIcon,
};
