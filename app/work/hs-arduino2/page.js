import SimpleBackPage from "../../../components/SimpleBackPage";
import ZineGallery from "../../../components/ZineGallery";

export const metadata = {
  title: "Memory Wardrobe — woolyspace",
};

const images = [
  { src: "/pj3-1.png", alt: "Memory Wardrobe 1" },
  { src: "/pj3-2.png", alt: "Memory Wardrobe 2" },
];

export default function HighSchoolArduinoTwoPage() {
  return (
    <SimpleBackPage title="Memory Wardrobe" subtitle="Arduino / 2025">
      <ZineGallery images={images} />
    </SimpleBackPage>
  );
}
