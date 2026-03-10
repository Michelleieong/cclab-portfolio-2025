"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Fixed back link on work subpages only; hidden on /work index.
 */
export default function WorkBackNav() {
  const pathname = usePathname();
  if (!pathname || !/^\/work\/.+/.test(pathname.replace(/\/$/, ""))) {
    return null;
  }
  return (
    <div className="work-back-nav" aria-label="Back to Works">
      <Link href="/work" className="work-back-link">
        ← Back
      </Link>
    </div>
  );
}
