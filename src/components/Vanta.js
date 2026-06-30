import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// Vanta resolves THREE from `window.THREE` (falling back to an empty object),
// so expose it globally to guarantee a complete three instance.
if (typeof window !== "undefined" && !window.THREE) {
  window.THREE = THREE;
}

const DEFAULTS = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundColor: 0x05070f,
};

const LOADERS = {
  net: () => import("vanta/dist/vanta.net.min"),
  dots: () => import("vanta/dist/vanta.dots.min"),
  globe: () => import("vanta/dist/vanta.globe.min"),
};

export default function Vanta({ effect = "net", options = {}, className, style }) {
  const el = useRef(null);
  const fx = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const load = LOADERS[effect] || LOADERS.net;

    load()
      .then((mod) => {
        const factory = mod.default || mod;
        if (cancelled || !el.current || typeof factory !== "function") return;
        try {
          fx.current = factory({ el: el.current, THREE, ...DEFAULTS, ...options });
          // Vanta GLOBE's update loop aims the camera at (-40,0,0) while the
          // sphere stays at the origin, pushing the globe off-center. Force the
          // camera to track the origin so the sphere renders centered.
          if (effect === "globe" && fx.current && fx.current.camera) {
            const cam = fx.current.camera;
            const origin = new THREE.Vector3(0, 0, 0);
            const originalLookAt = cam.lookAt.bind(cam);
            cam.lookAt = () => originalLookAt(origin);
          }
        } catch (e) {
          console.error("Vanta init failed:", e);
        }
      })
      .catch((e) => console.error("Vanta load failed:", e));

    return () => {
      cancelled = true;
      if (fx.current) {
        fx.current.destroy();
        fx.current = null;
      }
    };
    // run once per effect type
  }, [effect]);

  return <div ref={el} className={className} style={style} aria-hidden="true" />;
}
