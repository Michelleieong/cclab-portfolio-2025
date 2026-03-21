import SimpleBackPage from "../../../components/SimpleBackPage";
import ZineGallery from "../../../components/ZineGallery";

export const metadata = {
  title: "绘画作品 — woolyspace",
};

const images = [
  { src: "/pj5-1.png", alt: "绘画作品 1" },
  { src: "/pj5-2.png", alt: "绘画作品 2" },
  { src: "/pj5-3.png", alt: "绘画作品 3" },
];

export default function DrawingsPage() {
  return (
    <SimpleBackPage title="绘画作品" subtitle="3页作品">
      <ZineGallery images={images} />
    </SimpleBackPage>
  );
}
