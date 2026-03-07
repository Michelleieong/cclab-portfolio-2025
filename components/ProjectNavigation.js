import Link from "next/link";

export default function ProjectNavigation({ prevHref, nextHref, homeHref }) {
  return (
    <>
      {prevHref ? (
        <Link href={prevHref} className="nav-icon nav-icon-prev">
          ←
        </Link>
      ) : null}
      {nextHref ? (
        <Link href={nextHref} className="nav-icon nav-icon-next">
          →
        </Link>
      ) : null}
      {homeHref ? (
        <Link href={homeHref} className="nav-icon nav-icon-home">
          ⌂
        </Link>
      ) : null}
    </>
  );
}
