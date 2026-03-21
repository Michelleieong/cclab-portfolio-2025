import SimpleBackPage from "../../../components/SimpleBackPage";
import ZineGallery from "../../../components/ZineGallery";

export const metadata = {
  title: "Observational Drawing & Painting — woolyspace",
};

const images = [
  { src: "/pj5-1.png", alt: "Observational Drawing & Painting 1" },
  { src: "/pj5-2.png", alt: "Observational Drawing & Painting 2" },
  { src: "/pj5-3.png", alt: "Observational Drawing & Painting 3" },
];

export default function DrawingsPage() {
  return (
    <SimpleBackPage title="Observational Drawing & Painting" subtitle="Artworks / 2023">
      <ZineGallery images={images} uniformSize />
    </SimpleBackPage>
  );
}
