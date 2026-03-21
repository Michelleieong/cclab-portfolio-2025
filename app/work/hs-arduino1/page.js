import SimpleBackPage from "../../../components/SimpleBackPage";
import ZineGallery from "../../../components/ZineGallery";

export const metadata = {
  title: "Less ingredients — woolyspace",
};

const images = [
  { src: "/pj1-1.png", alt: "Less ingredients 1" },
  { src: "/pj1-2.png", alt: "Less ingredients 2" },
  { src: "/pj1-3.png", alt: "Less ingredients 3" },
];

export default function HighSchoolArduinoOnePage() {
  return (
    <SimpleBackPage title="Less ingredients" subtitle="Arduino / 2023">
      <ZineGallery images={images} uniformSize />
    </SimpleBackPage>
  );
}
