import EmbeddedSketch from "../../components/EmbeddedSketch";
import ProjectPage from "../../components/ProjectPage";
import { projectPages } from "../../lib/site-data";

const page = projectPages.project5;

export const metadata = {
  title: "Optical Illusion – woolyspace",
};

export default function ProjectFivePage() {
  return (
    <ProjectPage
      title={page.title}
      subtitle={page.subtitle}
      description={page.description}
      navigation={{ prevHref: page.prevHref, nextHref: page.nextHref }}
    >
      <EmbeddedSketch
        src="https://editor.p5js.org/yangm122/full/gMSrZGSO0"
        width={1200}
        height={700}
      />
    </ProjectPage>
  );
}
