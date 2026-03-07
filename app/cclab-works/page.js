import PageShell from "../../components/PageShell";
import ProjectHero from "../../components/ProjectHero";
import WorksGrid from "../../components/WorksGrid";
import { cclabCards } from "../../lib/site-data";

export const metadata = {
  title: "CC Lab Works — woolyspace",
};

export default function CCLabWorksPage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <ProjectHero title="CC Lab Works" subtitle="Projects from Fall Semester" />
        <WorksGrid items={cclabCards} />
      </div>
    </PageShell>
  );
}
