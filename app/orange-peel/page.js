import SimpleBackPage from "../../components/SimpleBackPage";
import { aboutNavItems } from "../../lib/site-data";

export const metadata = {
  title: "橘子皮作品 — woolyspace",
};

export default function OrangePeelPage() {
  return (
    <SimpleBackPage navItems={aboutNavItems} title="橘子皮作品" subtitle="Coming soon" />
  );
}
