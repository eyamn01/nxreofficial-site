import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/storefront";
import { siteUrl } from "@/lib/catalog";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "NXRE — NO RULES EXIST", template: "%s | NXRE" },
  description:
    "NXRE. NO RULES EXIST. Explore the latest drop, collections, and the NXRE mindset.",
  openGraph: {
    title: "NXRE — NO RULES EXIST",
    description: "Explore the NXRE mindset.",
    type: "website",
    siteName: "NXRE",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
