import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="section collection-page">
      <p className="eyebrow">404 / OFF THE MAP</p>
      <h1>Wrong turn.</h1>
      <p>This page doesn’t exist.</p>
      <Link className="button button-light" href="/">
        Return to NXRE ↗
      </Link>
    </main>
  );
}
