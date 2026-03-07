import Link from "next/link";

import PageShell from "../../components/PageShell";
import ProjectHero from "../../components/ProjectHero";
import ZineBook from "../../components/ZineBook";
import { aboutNavItems, zineBookPages } from "../../lib/site-data";

export const metadata = {
  title: "Zine 作品2 — woolyspace",
};

export default function ZineTwoPage() {
  return (
    <PageShell navItems={aboutNavItems}>
      <div className="page-wrap">
        <ProjectHero title="Zine 作品2" subtitle="Visual pages" />
        <ZineBook
          coverImage="/zine2Cover.png"
          backImage="/zine2Back.png"
          pagePairs={zineBookPages}
        />
        <div className="project-description" style={{ marginTop: "60px" }}>
          <p>
            <Link href="/extra">← Back to Extra</Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
