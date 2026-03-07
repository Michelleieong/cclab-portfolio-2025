import { asset } from "../lib/asset";
import Link from "next/link";

export const metadata = {
  title: "woolyspace — a love letter",
};

export default function HomePage() {
  return (
    <main className="envelope-landing">
      <Link href="/about" className="envelope-link">
        <div className="envelope-image-large">
          <img src={asset("/assets/envolope.png")} alt="Envelope" />
        </div>
        <p className="envelope-subtitle">a love letter from wooly space</p>
      </Link>
    </main>
  );
}
