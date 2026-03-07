import Link from "next/link";

import PageShell from "../../../components/PageShell";
import ProjectHero from "../../../components/ProjectHero";
import ZineViewer from "../../../components/ZineViewer";
import { zinePages } from "../../../lib/site-data";

export const metadata = {
  title: "Zine — woolyspace",
};

export default function ZinePage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <ProjectHero title="Zine" subtitle="Visual pages" />
        <ZineViewer
          coverImage={{ src: "/zinecover.png", alt: "Zine Cover" }}
          pages={zinePages}
        />
        <div className="project-description" style={{ marginTop: "60px" }}>
          <p>
            <Link href="/work">← Back to Work</Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
