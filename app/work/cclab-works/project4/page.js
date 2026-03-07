import EmbeddedSketch from "../../../../components/EmbeddedSketch";
import ProjectPage from "../../../../components/ProjectPage";
import { projectPages } from "../../../../lib/site-data";

const page = projectPages.project4;

export const metadata = {
  title: "Exquisite Corpse – woolyspace",
};

export default function ProjectFourPage() {
  return (
    <ProjectPage
      title={page.title}
      subtitle={page.subtitle}
      description={page.description}
      navigation={{ prevHref: page.prevHref, nextHref: page.nextHref }}
    >
      <EmbeddedSketch src="https://editor.p5js.org/yangm122/full/R-Oc_G5LG" width={400} height={750} />
    </ProjectPage>
  );
}
