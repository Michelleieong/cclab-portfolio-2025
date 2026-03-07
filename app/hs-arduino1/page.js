import SimpleBackPage from "../../components/SimpleBackPage";
import { aboutNavItems } from "../../lib/site-data";

export const metadata = {
  title: "高中Arduino作品1 — woolyspace",
};

export default function HighSchoolArduinoOnePage() {
  return (
    <SimpleBackPage
      navItems={aboutNavItems}
      title="高中Arduino作品1"
      subtitle="Coming soon"
    />
  );
}
