import type { Metadata } from "next";
import Link from "next/link";
import { collections } from "@/lib/catalog";
export const metadata: Metadata = {
  title: "Collections",
  alternates: { canonical: "/collections" },
};
export default function Page() {
  return (
    <main id="main" className="destination-page">
      <section className="collections section" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / FIND YOUR FORM</p>
            <h1>No boundaries.</h1>
          </div>
          <span className="eyebrow">THE COLLECTIONS ↙</span>
        </div>
        <div className="collection-links">
          {collections.map((name, index) => (
            <Link href={`/collections/${name.toLowerCase()}`} key={name}>
              <span className="collection-index">0{index + 1}</span>
              <span>{name}</span>
              <span className="collection-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
