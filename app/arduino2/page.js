import SimpleBackPage from "../../components/SimpleBackPage";
import { aboutNavItems } from "../../lib/site-data";

export const metadata = {
  title: "Arduino作品2 — woolyspace",
};

export default function ArduinoTwoPage() {
  return (
    <SimpleBackPage navItems={aboutNavItems} title="Arduino作品2" subtitle="Coming soon" />
  );
}
