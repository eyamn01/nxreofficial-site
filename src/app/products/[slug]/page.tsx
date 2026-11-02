import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DesignImage } from "@/components/storefront";
import { products } from "@/lib/catalog";
export const dynamicParams = false;
export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return {
    title: product?.name ?? "Not found",
    alternates: { canonical: `/products/${slug}` },
  };
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return (
    <main id="main" className="section detail">
      <Link className="text-link" href="/shop">
        ← Back to the drop
      </Link>
      <div className="detail-grid">
        <div>
          <DesignImage product={product} />
          {product.image && (
            <a
              className="text-link"
              href={product.image}
              target="_blank"
              rel="noreferrer"
            >
              View full-resolution design ↗
            </a>
          )}
        </div>
        <div className="detail-copy">
          <p className="eyebrow">NXRE / PRODUCT PREVIEW [{product.mark}]</p>
          <h1>{product.name}</h1>
          <p>
            {product.description ??
              "Photography and product details will be added here."}
          </p>
          {product.image && (
            <p>Star Collection / Front, back and graphic details.</p>
          )}
          <p className="availability">Purchasing is not available yet.</p>
          <Link className="button button-light" href="/shop">
            Explore the drop <span>↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
