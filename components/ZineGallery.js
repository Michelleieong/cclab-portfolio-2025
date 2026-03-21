import { asset } from "../lib/asset";

export default function ZineGallery({ images, uniformSize }) {
  return (
    <div className={`zine-gallery-container${uniformSize ? " zine-gallery-container--uniform" : ""}`}>
      {images.map((image) => (
        <img key={image.src} src={asset(image.src)} alt={image.alt} />
      ))}
    </div>
  );
}
