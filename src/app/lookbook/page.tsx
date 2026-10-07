import type { Metadata } from "next";
import Link from "next/link";
import { DesignImage } from "@/components/storefront";
import { starDesigns } from "@/lib/catalog";
export const metadata: Metadata = {
  title: "Lookbook",
  alternates: { canonical: "/lookbook" },
};
export default function Page() {
  return (
    <main id="main" className="destination-page">
      <section className="section lookbook" id="lookbook">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / STAR COLLECTION</p>
            <h1>The lookbook.</h1>
          </div>
          <p>
            People. Memories. Glitches.
            <br />
            Eight designs. Still human.
          </p>
        </div>
        <div className="lookbook-grid design-lookbook">
          {starDesigns.map((product) => (
            <figure key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                aria-label={`Explore ${product.name}`}
              >
                <DesignImage product={product} />
              </Link>
              <figcaption>
                <span>
                  {product.mark} / {product.name}
                </span>
                <span>NXRE</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
