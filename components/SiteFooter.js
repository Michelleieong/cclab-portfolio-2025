export default function SiteFooter({ links = [] }) {
  return (
    <footer className="footer">
      <p>Michelle&apos;s woolyspace</p>
      {links.length > 0 ? (
        <div className="footer-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </footer>
  );
}
