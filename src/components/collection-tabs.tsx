import Link from "next/link";
import { collections } from "@/lib/catalog";

export function CollectionTabs({ active = "all" }: { active?: string }) {
  return (
    <nav className="category-tabs" aria-label="Shop categories">
      <Link href="/shop" aria-current={active === "all" ? "page" : undefined}>
        All previews
      </Link>
      {collections.map((name) => (
        <Link
          key={name}
          href={`/collections/${name.toLowerCase()}`}
          aria-current={active === name.toLowerCase() ? "page" : undefined}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
