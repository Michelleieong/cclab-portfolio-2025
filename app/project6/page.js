import ProjectPage from "../../components/ProjectPage";
import Project6Canvas from "../../components/sketches/Project6Canvas";
import { aboutNavItems, projectPages } from "../../lib/site-data";

const page = projectPages.project6;

export const metadata = {
  title: "Snack Tree – woolyspace",
};

export default function ProjectSixPage() {
  return (
    <ProjectPage
      navItems={aboutNavItems}
      title={page.title}
      subtitle={page.subtitle}
      description={page.description}
      navigation={{ prevHref: page.prevHref, nextHref: page.nextHref }}
    >
      <Project6Canvas />
    </ProjectPage>
  );
}
