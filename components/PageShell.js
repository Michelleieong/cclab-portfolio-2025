import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PageShell({
  navItems,
  footerLinks = [],
  children,
  mainClassName = "",
}) {
  return (
    <>
      <SiteHeader navItems={navItems} />
      <main className={mainClassName}>{children}</main>
      <SiteFooter links={footerLinks} />
    </>
  );
}
