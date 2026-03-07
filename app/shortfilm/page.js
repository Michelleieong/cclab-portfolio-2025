import SimpleBackPage from "../../components/SimpleBackPage";
import { aboutNavItems } from "../../lib/site-data";

export const metadata = {
  title: "5分钟短片 — woolyspace",
};

export default function ShortFilmPage() {
  return (
    <SimpleBackPage navItems={aboutNavItems} title="5分钟短片" subtitle="Coming soon" />
  );
}
