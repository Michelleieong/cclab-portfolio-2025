import PageShell from "./PageShell";
import ProjectHero from "./ProjectHero";
import ProjectNavigation from "./ProjectNavigation";

export default function ProjectPage({
  navItems,
  footerLinks = [],
  title,
  subtitle,
  description,
  children,
  navigation = {},
}) {
  return (
    <PageShell navItems={navItems} footerLinks={footerLinks}>
      <div className="page-wrap">
        <ProjectHero title={title} subtitle={subtitle} />
        {children}
        <div className="project-description">
          <p>{description}</p>
        </div>
      </div>
      <ProjectNavigation {...navigation} />
    </PageShell>
  );
}
