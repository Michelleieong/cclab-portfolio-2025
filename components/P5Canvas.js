"use client";

import { useEffect, useRef } from "react";

export default function P5Canvas({ sketch, width, height }) {
  const containerRef = useRef(null);
  const sketchRef = useRef(sketch);

  useEffect(() => {
    let instance = null;
    let cancelled = false;

    async function mount() {
      const p5Module = await import("p5");
      if (cancelled) return;

      const P5 = typeof p5Module.default === "function"
        ? p5Module.default
        : typeof p5Module === "function"
          ? p5Module
          : p5Module.default?.default;

      if (!P5) {
        console.error("Failed to resolve p5 constructor from module:", p5Module);
        return;
      }

      instance = new P5(sketchRef.current, containerRef.current);
    }

    mount();

    return () => {
      cancelled = true;
      if (instance) {
        instance.remove();
        instance = null;
      }
    };
  }, []);

  return (
    <div className="sketch-frame">
      <div
        ref={containerRef}
        id="sketch-container"
        style={{ width: `${width}px`, height: `${height}px`, margin: "0 auto" }}
      />
    </div>
  );
}
