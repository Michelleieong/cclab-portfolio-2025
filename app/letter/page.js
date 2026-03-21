import { asset } from "../../lib/asset";
import Link from "next/link";

export const metadata = {
  title: "Letter — woolyspace",
};

export default function LetterPage() {
  const cursorUrl = asset("/cursors/quill-32.png");
  return (
    <main className="letter-page">
      <style dangerouslySetInnerHTML={{
        __html: `
          .letter-page, .letter-page *,
          .letter-page a, .letter-page a:hover {
            cursor: url("${cursorUrl}") 4 28, auto !important;
          }
        `,
      }} />
      <div className="page-wrap">
        <div className="letter-container">
          <div className="letter-stamp">
            <img src={asset("/assets/sign3.png")} alt="Sign decoration" />
          </div>

          <p className="letter-greeting">Dear Reader,</p>

          <div className="letter-body">
            <p>Hi, it&apos;s Michelle here.</p>
            <p>
              I&apos;m from Hong Kong. I love fashion, and I&apos;m drawn to art and
              aesthetics in almost everything. I play the piano. I dance ballet.
            </p>
            <p>
              I love to follow my inner voice, to explore my inner self,
              <br />
              and to think about meaningful philosophy.
              <br />
              I&apos;m drawn to the spirituality that exists in all things.
            </p>
            <p>
              I want to do work that feels honest. Work that matters to the world,
              <br />
              and at the same time brings me closer to understanding myself.
            </p>
            <p>
              My dream is to become someone who can make an impact,
              <br />
              and to work in the industry I love.
            </p>
          </div>

          <div className="letter-signature">
            <p>
              With love,
              <br />
              Michelle
            </p>
            <Link href="/work" className="sheep-stamp-link" title="View my works">
              <div className="sheep-stamp">
                <img src={asset("/assets/sheepwords.png")} alt="View works — click to enter" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
