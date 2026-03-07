"use client";

import { useEffect } from "react";

export default function BodyClassName({ className = "" }) {
  useEffect(() => {
    const classNames = className.split(/\s+/).filter(Boolean);
    if (classNames.length === 0) {
      return undefined;
    }

    document.body.classList.add(...classNames);

    return () => {
      document.body.classList.remove(...classNames);
    };
  }, [className]);

  return null;
}
