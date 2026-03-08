import { asset } from "../lib/asset";

const ZINE2_IMAGES = [
  { type: "cover", src: "/zine2Cover.png", alt: "See Me cover" },
  { type: "spread", left: "/zine2-1.png", right: "/zine2-2.png", alt: "Pages 1-2" },
  { type: "spread", left: "/zine2-3.png", right: "/zine2-4.png", alt: "Pages 3-4" },
  { type: "spread", left: "/zine2-5.png", right: "/zine2-6.png", alt: "Pages 5-6" },
  { type: "back", src: "/zine2Back.png", alt: "See Me back cover" },
];

export default function Zine2Gallery() {
  return (
    <div className="zine2-gallery">
      {ZINE2_IMAGES.map((item, index) => (
        <div key={index} className={`zine2-gallery-row zine2-gallery-row--${item.type}`}>
          {item.type === "cover" || item.type === "back" ? (
            <img
              src={asset(item.src)}
              alt={item.alt}
              className="zine2-gallery-img"
            />
          ) : (
            <>
              <img
                src={asset(item.left)}
                alt={`${item.alt} left`}
                className="zine2-gallery-img"
              />
              <img
                src={asset(item.right)}
                alt={`${item.alt} right`}
                className="zine2-gallery-img"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
