import PageShell from "../../components/PageShell";
import ProjectHero from "../../components/ProjectHero";
import WorksGrid from "../../components/WorksGrid";
import { advancedCards, worksNavItems } from "../../lib/site-data";

export const metadata = {
  title: "Advanced CC Lab — woolyspace",
};

export default function AdvancedCCLabPage() {
  return (
    <PageShell navItems={worksNavItems}>
      <div className="page-wrap">
        <ProjectHero title="Advanced CC Lab" subtitle="New Projects from Spring Semester" />
        <WorksGrid items={advancedCards} />
      </div>
    </PageShell>
  );
}
