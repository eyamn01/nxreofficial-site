import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collections } from "@/lib/catalog";
export const dynamicParams = false;
export function generateStaticParams() {
  return collections.map((name) => ({ slug: name.toLowerCase() }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title:
      collections.find((name) => name.toLowerCase() === slug) ?? "Not found",
    alternates: { canonical: `/collections/${slug}` },
  };
}
export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = collections.find((item) => item.toLowerCase() === slug);
  if (!name) notFound();
  return (
    <main id="main" className="section collection-page">
      <Link className="text-link" href="/#collections">
        ← All collections
      </Link>
      <p className="eyebrow">NXRE / COLLECTIONS</p>
      <h1>
        {name}
        <span className="period">.</span>
      </h1>
      <div className="collection-empty">
        <span aria-hidden="true">↗</span>
        <h2>A space for what’s next.</h2>
        <p>
          Products for this collection will appear here once the catalog is
          available.
        </p>
        <Link className="button button-light" href="/#drop">
          View product previews <span>↗</span>
        </Link>
      </div>
    </main>
  );
}
