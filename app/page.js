import LegacyPage from "../components/LegacyPage";
import { getLegacyPage } from "../lib/legacy-site";

export async function generateMetadata() {
  const page = await getLegacyPage("");

  return {
    title: page?.title ?? "woolyspace",
  };
}

export default async function HomePage() {
  const page = await getLegacyPage("");

  return <LegacyPage page={page} />;
}
