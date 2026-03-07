export default function EmbeddedSketch({ src, width, height }) {
  return (
    <div className="sketch-frame">
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: "none", display: "block", margin: "0 auto" }}
        title="Embedded sketch"
      />
    </div>
  );
}
