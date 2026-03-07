import SimpleBackPage from "../../components/SimpleBackPage";
import { aboutNavItems } from "../../lib/site-data";

export const metadata = {
  title: "绘画作品 — woolyspace",
};

export default function DrawingsPage() {
  return <SimpleBackPage navItems={aboutNavItems} title="绘画作品" subtitle="3页作品" />;
}
