import type { Metadata } from "next";
import { ProductGrid } from "@/components/storefront";
import { CollectionTabs } from "@/components/collection-tabs";
export const metadata: Metadata = {
  title: "Shop the drop",
  alternates: { canonical: "/shop" },
};
export default function Page() {
  return (
    <main id="main" className="destination-page">
      <section className="section drop" id="drop">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / THE DROP</p>
            <h1>
              Latest drop<span className="period">.</span>
            </h1>
          </div>
          <p>
            Four names. One mindset.
            <br />
            Explore the product previews.
          </p>
        </div>
        <CollectionTabs />
        <ProductGrid />
      </section>
    </main>
  );
}
