import Link from "next/link";

function NavigationLink({ href, className, imageSrc, imageAlt, fallbackText }) {
  if (!href) {
    return null;
  }

  return (
    <Link href={href} className={className}>
      <img src={imageSrc} alt={imageAlt} />
      <span className="sr-only">{fallbackText}</span>
    </Link>
  );
}

export default function ProjectNavigation({ prevHref, nextHref, homeHref }) {
  return (
    <>
      <NavigationLink
        href={prevHref}
        className="nav-icon nav-icon-prev"
        imageSrc="/assets/icons/wing-left.png"
        imageAlt="Previous"
        fallbackText="←"
      />
      <NavigationLink
        href={nextHref}
        className="nav-icon nav-icon-next"
        imageSrc="/assets/icons/wing-right.png"
        imageAlt="Next"
        fallbackText="→"
      />
      <NavigationLink
        href={homeHref}
        className="nav-icon nav-icon-home"
        imageSrc="/assets/icons/wing-home.png"
        imageAlt="Home"
        fallbackText="⌂"
      />
    </>
  );
}
