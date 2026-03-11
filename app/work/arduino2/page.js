import SimpleBackPage from "../../../components/SimpleBackPage";

export const metadata = {
  title: "Artwork 1 — woolyspace",
};

const DRIVE_VIDEO_ID = "1fKderNmMdcvmtj5eLpX9uYTnW0j2PEwQ";
const DRIVE_PREVIEW_URL = `https://drive.google.com/file/d/${DRIVE_VIDEO_ID}/preview`;

export default function ArduinoTwoPage() {
  return (
    <SimpleBackPage title="Artwork 1" subtitle="artwork / video" backHref="/work">
      <div className="video-container">
        <iframe
          src={DRIVE_PREVIEW_URL}
          title="Artwork 1 - video"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </SimpleBackPage>
  );
}
