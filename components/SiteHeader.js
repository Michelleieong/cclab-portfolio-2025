import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/main", label: "Main" },
  { href: "/cclab-works", label: "CC Lab" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
];

export default function SiteHeader() {
  return (
    <header>
      <div className="header-content">
        <div className="logo-text">
          woolyspace <span className="lamb-mark">羊</span>
        </div>
        <nav>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
