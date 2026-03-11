import Link from "next/link";
import { asset } from "../lib/asset";

export default function ArchiveList({ items }) {
  return (
    <div className="items-list">
      {items.map((item) => (
        <div className="item-entry" key={item.href}>
          <Link href={item.href} className="item-link">
            <div className={`item-image${item.imageScale ? " item-image--zoom" : ""}`}>
              <img src={asset(item.image)} alt={item.imageAlt} />
            </div>
            <div className="item-info">
              <h2 className="item-title">{item.title}</h2>
              <p className="item-description">{item.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
