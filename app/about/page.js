import { asset } from "../../lib/asset";

import PageShell from "../../components/PageShell";
import { footerLinks } from "../../lib/site-data";

export const metadata = {
  title: "About — woolyspace",
};

export default function AboutPage() {
  return (
    <PageShell footerLinks={footerLinks} mainClassName="main-page-grid">
      <div className="page-wrap">
        <section className="image-strip">
          <div className="image-strip-item">
            <img src={asset("/assets/me1.png")} alt="" />
          </div>
          <div className="image-strip-item">
            <img src={asset("/assets/me2.png")} alt="" />
          </div>
          <div className="image-strip-item">
            <img src={asset("/assets/me3.png")} alt="" />
          </div>
        </section>

        <div className="decorative-sheep decorative-sheep-1">
          <img src={asset("/assets/sheep1.png")} alt="" />
        </div>
        <div className="decorative-sheep decorative-sheep-2">
          <img src={asset("/assets/sheep2.png")} alt="" />
        </div>
        <div className="sign-stamp-corner sign-stamp-top-left">
          <img src={asset("/assets/sign1.png")} alt="Sign stamp" />
        </div>
        <div className="sign-stamp-corner sign-stamp-bottom-right">
          <img src={asset("/assets/sign1.png")} alt="Sign stamp" />
        </div>
        <div className="sign-stamp-medium">
          <img src={asset("/assets/sign4.png")} alt="Wing decoration" />
        </div>
      </div>
    </PageShell>
  );
}
