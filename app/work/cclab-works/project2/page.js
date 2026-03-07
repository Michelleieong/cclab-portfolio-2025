import EmbeddedSketch from "../../../../components/EmbeddedSketch";
import ProjectPage from "../../../../components/ProjectPage";
import { projectPages } from "../../../../lib/site-data";

const page = projectPages.project2;

export const metadata = {
  title: "Face Generator – woolyspace",
};

export default function ProjectTwoPage() {
  return (
    <ProjectPage
      title={page.title}
      subtitle={page.subtitle}
      description={page.description}
      navigation={{ prevHref: page.prevHref, nextHref: page.nextHref }}
    >
      <EmbeddedSketch src={page.embed.src} width={page.embed.width} height={page.embed.height} />
    </ProjectPage>
  );
}
