"use client";

import { useEffect, useRef } from "react";

export default function P5Canvas({ sketch, width, height, useSound = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let instance;

    async function mountSketch() {
      const p5Module = await import("p5");
      const p5 = p5Module.default;

      instance = new p5(sketch, containerRef.current);
    }

    mountSketch().catch((error) => {
      console.error(error);
    });

    return () => {
      if (instance) {
        instance.remove();
      }
    };
  }, [sketch]);

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
