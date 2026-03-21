import SimpleBackPage from "../../../components/SimpleBackPage";
import ZineGallery from "../../../components/ZineGallery";

export const metadata = {
  title: "Media Art — woolyspace",
};

const images = [{ src: "/pj4.png", alt: "Media Art" }];

export default function OrangePeelPage() {
  return (
    <SimpleBackPage title="Media Art" subtitle="Artworks / 2023">
      <ZineGallery images={images} uniformSize />
    </SimpleBackPage>
  );
}
