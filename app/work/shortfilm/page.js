import { asset } from "../../../lib/asset";

import SimpleBackPage from "../../../components/SimpleBackPage";

export const metadata = {
  title: "Wildflower — woolyspace",
};

export default function ShortFilmPage() {
  return (
    <SimpleBackPage title="Wildflower" subtitle="short film / 2024">
      <div className="video-container" style={{ margin: "40px 0" }}>
        <video
          controls
          style={{ width: "100%", maxWidth: "800px", margin: "0 auto", display: "block" }}
          src={asset(encodeURI("/Wildflower by Livia and Michelle.mp4"))}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </SimpleBackPage>
  );
}
