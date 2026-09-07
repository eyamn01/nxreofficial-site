import type { MetadataRoute } from "next";
import { siteUrl, products, collections } from "@/lib/catalog";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/shop",
    "/collections",
    "/lookbook",
    "/about",
    ...products.map((p) => `/products/${p.slug}`),
    ...collections.map((c) => `/collections/${c.toLowerCase()}`),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}
