import SimpleBackPage from "../../../components/SimpleBackPage";
import ZineGallery from "../../../components/ZineGallery";

export const metadata = {
  title: "橘子皮作品 — woolyspace",
};

const images = [{ src: "/pj4.png", alt: "橘子皮作品" }];

export default function OrangePeelPage() {
  return (
    <SimpleBackPage title="橘子皮作品" subtitle="Coming soon">
      <ZineGallery images={images} />
    </SimpleBackPage>
  );
}
