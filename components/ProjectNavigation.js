import Link from "next/link";

export default function ProjectNavigation({ prevHref, nextHref }) {
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
    </>
  );
}
