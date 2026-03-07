import { asset } from "../lib/asset";

export default function ZineGallery({ images }) {
  return (
    <div className="zine-gallery-container">
      {images.map((image) => (
        <img key={image.src} src={asset(image.src)} alt={image.alt} />
      ))}
    </div>
  );
}
