import Link from "next/link";
import { products } from "@/lib/catalog";
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
export function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Link
          className="product"
          href={`/products/${product.slug}`}
          key={product.slug}
        >
          <div className="product-image">
            <Art
              kind={product.artwork}
              label={`${product.name} — abstract placeholder, not a product photo`}
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
          <p>Product preview</p>
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
        <Link href="/#manifesto">The mindset ↗</Link>
      </div>
    </footer>
  );
}
