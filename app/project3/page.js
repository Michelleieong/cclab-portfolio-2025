import ProjectPage from "../../components/ProjectPage";
import Project3Canvas from "../../components/sketches/Project3Canvas";
import { aboutNavItems, projectPages } from "../../lib/site-data";

const page = projectPages.project3;

export const metadata = {
  title: "Experimental Clock – woolyspace",
};

export default function ProjectThreePage() {
  return (
    <ProjectPage
      navItems={aboutNavItems}
      title={page.title}
      subtitle={page.subtitle}
      description={page.description}
      navigation={{ prevHref: page.prevHref, nextHref: page.nextHref }}
    >
      <Project3Canvas />
    </ProjectPage>
  );
}
