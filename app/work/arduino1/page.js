import SimpleBackPage from "../../../components/SimpleBackPage";
import ZineGallery from "../../../components/ZineGallery";

export const metadata = {
  title: "Portable Relaxation Companion — woolyspace",
};

const images = [
  { src: "/pj2-1.png", alt: "Portable Relaxation Companion 1" },
  { src: "/pj2-2.png", alt: "Portable Relaxation Companion 2" },
  { src: "/pj2-3.png", alt: "Portable Relaxation Companion 3" },
];

export default function ArduinoOnePage() {
  return (
    <SimpleBackPage title="Portable Relaxation Companion" subtitle="interactive design / 2023">
      <ZineGallery images={images} />
    </SimpleBackPage>
  );
}
