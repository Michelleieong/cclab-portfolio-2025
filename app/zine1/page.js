import Link from "next/link";

import PageShell from "../../components/PageShell";
import ProjectHero from "../../components/ProjectHero";
import ZineGallery from "../../components/ZineGallery";
import { aboutNavItems, zineOneImages } from "../../lib/site-data";

export const metadata = {
  title: "Zine 1 — woolyspace",
};

export default function ZineOnePage() {
  return (
    <PageShell navItems={aboutNavItems}>
      <div className="page-wrap">
        <ProjectHero title="Zine 作品1" subtitle="Visual pages" />
        <ZineGallery images={zineOneImages} />
        <div className="project-description" style={{ marginTop: "60px" }}>
          <p>
            <Link href="/extra">← Back to Extra</Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
