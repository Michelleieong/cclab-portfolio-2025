import PageShell from "../../components/PageShell";
import ArchiveList from "../../components/ArchiveList";
import { extraItems, footerLinks, homeNavItems } from "../../lib/site-data";

export const metadata = {
  title: "Extra — woolyspace",
};

export default function ExtraPage() {
  return (
    <PageShell navItems={homeNavItems} footerLinks={footerLinks}>
      <div className="archive-container">
        <div className="archive-logo">
          <img src="/assets/sheepwords.png" alt="woolyspace" />
        </div>

        <div className="archive-title">
          <h1>More about me</h1>
        </div>

        <ArchiveList items={extraItems} />
      </div>
    </PageShell>
  );
}
