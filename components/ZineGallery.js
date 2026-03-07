export default function ZineGallery({ images }) {
  return (
    <div className="zine-gallery-container">
      {images.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
