import ProjectPage from "../../components/ProjectPage";
import Project1Canvas from "../../components/sketches/Project1Canvas";
import { projectPages } from "../../lib/site-data";

const page = projectPages.project1;

export const metadata = {
  title: "Lost and Found – woolyspace",
};

export default function ProjectOnePage() {
  return (
    <ProjectPage
      title={page.title}
      subtitle={page.subtitle}
      description={page.description}
      navigation={{ prevHref: page.prevHref, nextHref: page.nextHref }}
    >
      <Project1Canvas />
    </ProjectPage>
  );
}
