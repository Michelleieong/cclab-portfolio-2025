import Link from "next/link";

import PageShell from "../../../components/PageShell";
import ProjectHero from "../../../components/ProjectHero";
import Zine2Gallery from "../../../components/Zine2Gallery";

export const metadata = {
  title: "See Me — woolyspace",
};

export default function ZineTwoPage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <ProjectHero title="See Me" subtitle="Artworks / 2023" />
        <Zine2Gallery />
        <div className="project-description" style={{ marginTop: "60px" }}>
          <p>
            <Link href="/work">← Back to Work</Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
