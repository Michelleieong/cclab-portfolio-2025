import Link from "next/link";

import PageShell from "./PageShell";
import ProjectHero from "./ProjectHero";

export default function SimpleBackPage({
  footerLinks = [],
  title,
  subtitle,
  backHref = "/work",
  children,
}) {
  return (
    <PageShell footerLinks={footerLinks}>
      <div className="page-wrap">
        <ProjectHero title={title} subtitle={subtitle} />
        {children}
        <div className="project-description">
          <p>
            <Link href={backHref}>← Back to Work</Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
