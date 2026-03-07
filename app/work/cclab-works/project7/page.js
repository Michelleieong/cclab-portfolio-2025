import EmbeddedSketch from "../../../../components/EmbeddedSketch";
import ProjectPage from "../../../../components/ProjectPage";
import { projectPages } from "../../../../lib/site-data";

const page = projectPages.project7;

export const metadata = {
  title: "The Light Within – woolyspace",
};

export default function ProjectSevenPage() {
  return (
    <ProjectPage
      title={page.title}
      subtitle={page.subtitle}
      description={page.description}
      navigation={{
        prevHref: page.prevHref,
        nextHref: page.nextHref,
        homeHref: page.homeHref,
      }}
    >
      <EmbeddedSketch
        src="https://editor.p5js.org/yangm122/full/pUrL-5MC-"
        width={1200}
        height={700}
      />
    </ProjectPage>
  );
}
