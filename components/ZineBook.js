"use client";

import { useMemo, useState } from "react";
import { asset } from "../lib/asset";

export default function ZineBook({ coverImage, backImage, pagePairs }) {
  const states = useMemo(
    () => ["cover", ...pagePairs.map((_, index) => `pair-${index}`), "back"],
    [pagePairs],
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentState = states[currentIndex];
  const activePairIndex =
    currentState.startsWith("pair-") ? Number(currentState.replace("pair-", "")) : -1;

  function nextPage() {
    setCurrentIndex((value) => Math.min(states.length - 1, value + 1));
  }

  return (
    <div className="zine-viewer-container">
      <div className="book-container" onClick={nextPage}>
        <div
          className={`book-page cover ${currentState !== "cover" ? "flipped book-page-hidden" : ""}`}
          style={{ backgroundImage: `url('${asset(coverImage)}')` }}
        />

        {pagePairs.map((pair, index) => (
          <div
            key={`${pair.left}-${pair.right}`}
            className={`page-pair ${activePairIndex === index ? "active" : ""}`}
          >
            <div
              className={`book-page left ${activePairIndex > index ? "flipped" : ""}`}
              style={{ backgroundImage: `url('${asset(pair.left)}')` }}
            />
            <div
              className={`book-page right ${activePairIndex > index ? "flipped" : ""}`}
              style={{ backgroundImage: `url('${asset(pair.right)}')` }}
            />
          </div>
        ))}

        <div
          className={`book-page back ${currentState === "back" ? "visible" : ""}`}
          style={{ backgroundImage: `url('${asset(backImage)}')` }}
        />

        <div className={`navigation-hint ${currentIndex > 0 ? "hidden" : ""}`}>
          Click to turn page
        </div>
      </div>
    </div>
  );
}
