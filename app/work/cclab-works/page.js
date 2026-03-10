import PageShell from "../../../components/PageShell";
import ProjectHero from "../../../components/ProjectHero";
import WorksGrid from "../../../components/WorksGrid";
import { cclabCards } from "../../../lib/site-data";

export const metadata = {
  title: "Creative Computation Works — woolyspace",
};

export default function CCLabWorksPage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <ProjectHero title="Creative Computation Works" subtitle="From Creative Computation Lab" />
        <WorksGrid items={cclabCards} />
      </div>
    </PageShell>
  );
}
