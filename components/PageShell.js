import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PageShell({
  footerLinks = [],
  children,
  mainClassName = "",
}) {
  return (
    <>
      <SiteHeader />
      <main className={mainClassName}>{children}</main>
      <SiteFooter links={footerLinks} />
    </>
  );
}
