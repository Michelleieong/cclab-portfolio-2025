import Link from "next/link";

export default function SiteHeader({ navItems = [] }) {
  return (
    <header>
      <div className="header-content">
        <div className="logo-text">
          woolyspace <span className="lamb-mark">羊</span>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
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
