import Link from "next/link";

export default function WorksGrid({ items }) {
  return (
    <section className="works-grid">
      {items.map((item) => {
        const cardContent = (
          <>
            <div className="tag">{item.tag}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
            <span className="card-link">Open →</span>
          </>
        );

        return (
          <div className="card" key={`${item.title}-${item.tag}`}>
            {item.href === "#" ? (
              <div aria-disabled="true">{cardContent}</div>
            ) : (
              <Link href={item.href}>{cardContent}</Link>
            )}
          </div>
        );
      })}
    </section>
  );
}
