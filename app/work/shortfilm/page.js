import SimpleBackPage from "../../../components/SimpleBackPage";

export const metadata = {
  title: "Wildflower — woolyspace",
};

const DRIVE_VIDEO_ID = "1djhZie8wmdoR25fId_7QWk0O0JydYfP0";
const DRIVE_PREVIEW_URL = `https://drive.google.com/file/d/${DRIVE_VIDEO_ID}/preview`;

export default function ShortFilmPage() {
  return (
    <SimpleBackPage title="Wildflower" subtitle="Artworks / 2023">
      <div className="video-container">
        <iframe
          src={DRIVE_PREVIEW_URL}
          title="Wildflower - short film by Livia and Michelle"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </SimpleBackPage>
  );
}
