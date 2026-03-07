import Link from "next/link";

import PageShell from "./PageShell";
import ProjectHero from "./ProjectHero";

export default function SimpleBackPage({
  navItems,
  footerLinks = [],
  title,
  subtitle,
  backHref = "/extra",
}) {
  return (
    <PageShell navItems={navItems} footerLinks={footerLinks}>
      <div className="page-wrap">
        <ProjectHero title={title} subtitle={subtitle} />
        <div className="project-description">
          <p>
            <Link href={backHref}>← Back to Extra</Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
