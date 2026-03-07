import SimpleBackPage from "../../components/SimpleBackPage";
import { aboutNavItems } from "../../lib/site-data";

export const metadata = {
  title: "高中Arduino作品2 — woolyspace",
};

export default function HighSchoolArduinoTwoPage() {
  return (
    <SimpleBackPage
      navItems={aboutNavItems}
      title="高中Arduino作品2"
      subtitle="Coming soon"
    />
  );
}
