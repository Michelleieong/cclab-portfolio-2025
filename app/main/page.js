import { asset } from "../../lib/asset";
import Link from "next/link";

import PageShell from "../../components/PageShell";
import { footerLinks, mainCards } from "../../lib/site-data";

export const metadata = {
  title: "Main — woolyspace",
};

export default function MainPage() {
  return (
    <PageShell footerLinks={footerLinks} mainClassName="main-page-grid">
      <div className="page-wrap">
        <section className="projects-section">
          <div className="works-grid">
            {mainCards.map((card) => (
              <div className="card" key={card.href}>
                <Link href={card.href}>
                  <div className="tag">{card.tag}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <span className="card-link">View →</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

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
