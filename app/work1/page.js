import SimpleBackPage from "../../components/SimpleBackPage";
import { aboutNavItems } from "../../lib/site-data";

export const metadata = {
  title: "Work 1 — woolyspace",
};

export default function WorkOnePage() {
  return <SimpleBackPage navItems={aboutNavItems} title="Work 1" subtitle="Coming soon" />;
}
