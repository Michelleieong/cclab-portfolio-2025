"use client";

import { useEffect, useState } from "react";

export default function ZineViewer({ coverImage, pages }) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "ArrowLeft") {
        setCurrentPage((value) => Math.max(0, value - 1));
      }

      if (event.key === "ArrowRight") {
        setCurrentPage((value) => Math.min(pages.length - 1, value + 1));
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [pages.length]);

  return (
    <div className="zine-viewer">
      <div className="zine-cover-section">
        <img src={coverImage.src} alt={coverImage.alt} />
      </div>

      <div className="zine-pages-section">
        <div className="zine-pages-title">Pages</div>

        <div className="zine-page-container">
          {pages.map((page, index) => (
            <div
              key={page.src}
              className={`zine-page-item ${index === currentPage ? "active" : ""}`}
            >
              <img src={page.src} alt={page.alt} />
            </div>
          ))}
        </div>

        <div className="zine-controls">
          <button
            className="zine-btn"
            onClick={() => setCurrentPage((value) => Math.max(0, value - 1))}
            disabled={currentPage === 0}
          >
            ←
          </button>
          <span className="zine-counter">
            <span>{currentPage + 1}</span> / <span>{pages.length}</span>
          </span>
          <button
            className="zine-btn"
            onClick={() =>
              setCurrentPage((value) => Math.min(pages.length - 1, value + 1))
            }
            disabled={currentPage === pages.length - 1}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
