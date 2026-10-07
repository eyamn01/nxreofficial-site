import Link from "next/link";
import Image from "next/image";
import { products, type Product } from "@/lib/catalog";
export function DesignImage({
  product,
  sizes = "(max-width: 760px) 90vw, 45vw",
}: {
  product: Product;
  sizes?: string;
}) {
  return product.image ? (
    <Image
      className="design-image"
      src={product.image}
      alt={product.alt ?? product.name}
      width={1122}
      height={1402}
      sizes={sizes}
    />
  ) : (
    <Art
      kind={product.artwork ?? "seraph"}
      label={`${product.name} — abstract placeholder, not a product photo`}
    />
  );
}
export function Art({
  kind,
  label,
  className = "",
}: {
  kind: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`art art-${kind} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="art-symbol" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <span className="art-note">NXRE / IMAGE PLACEHOLDER</span>
    </div>
  );
}
export function ProductGrid({
  items = products,
}: {
  items?: readonly Product[];
}) {
  return (
    <div className="product-grid">
      {items.map((product) => (
        <Link
          className="product"
          href={`/products/${product.slug}`}
          key={product.slug}
        >
          <div
            className={`product-image${product.image ? " product-image-design" : ""}`}
          >
            <DesignImage
              product={product}
              sizes="(max-width: 760px) 44vw, 23vw"
            />
            <span className="product-index">[{product.mark}]</span>
            <span className="product-view" aria-hidden="true">
              ↗
            </span>
          </div>
          <div className="product-title">
            <h3>{product.name}</h3>
            <span>↗</span>
          </div>
          <p>
            {product.image
              ? "Star Collection / Design preview"
              : "Product preview"}
          </p>
        </Link>
      ))}
    </div>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link className="wordmark" href="/">
          NXRE<span aria-hidden="true">✳</span>
        </Link>
        <p>NO RULES EXIST.</p>
        <a href="#top">Back to top ↑</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} NXRE</span>
        <span>NXREOFFICIAL.COM</span>
        <Link href="/about">The mindset ↗</Link>
      </div>
    </footer>
  );
}
