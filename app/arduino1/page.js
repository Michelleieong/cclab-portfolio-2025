import SimpleBackPage from "../../components/SimpleBackPage";
import { aboutNavItems } from "../../lib/site-data";

export const metadata = {
  title: "Arduino作品1 — woolyspace",
};

export default function ArduinoOnePage() {
  return (
    <SimpleBackPage navItems={aboutNavItems} title="Arduino作品1" subtitle="Coming soon" />
  );
}
