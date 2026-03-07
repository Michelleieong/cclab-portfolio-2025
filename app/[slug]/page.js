import { notFound } from "next/navigation";

import LegacyPage from "../../components/LegacyPage";
import { getLegacyPage, getLegacySlugs } from "../../lib/legacy-site";

export function generateStaticParams() {
  return getLegacySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getLegacyPage(slug);

  if (!page) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: page.title,
  };
}

export default async function LegacyRoutePage({ params }) {
  const { slug } = await params;
  const page = await getLegacyPage(slug);

  if (!page) {
    notFound();
  }

  return <LegacyPage page={page} />;
}
