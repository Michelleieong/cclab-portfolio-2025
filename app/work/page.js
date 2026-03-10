import { asset } from "../../lib/asset";

import PageShell from "../../components/PageShell";
import ArchiveList from "../../components/ArchiveList";
import { extraItems, footerLinks } from "../../lib/site-data";

export const metadata = {
  title: "Work — woolyspace",
};

export default function WorkPage() {
  return (
    <PageShell footerLinks={footerLinks}>
      <div className="archive-container">
        <div className="sign-stamp-corner sign-stamp-top-left">
          <img src={asset("/assets/sign1.png")} alt="Sign stamp" />
        </div>
        <div className="sign-stamp-corner sign-stamp-bottom-right">
          <img src={asset("/assets/sign1.png")} alt="Sign stamp" />
        </div>

        <div className="archive-logo">
          <img src={asset("/assets/sheepwords.png")} alt="woolyspace" />
        </div>

        <div className="archive-title">
          <h1>Works</h1>
        </div>

        <ArchiveList items={extraItems} />

        <div className="archive-wings">
          <img src={asset("/assets/wings.png")} alt="" />
        </div>
      </div>
    </PageShell>
  );
}
