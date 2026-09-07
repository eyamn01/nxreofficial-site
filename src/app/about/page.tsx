import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The mindset",
  alternates: { canonical: "/about" },
};
export default function Page() {
  return (
    <main id="main" className="destination-page">
      <section className="manifesto" id="manifesto">
        <div className="manifesto-label">
          <span className="eyebrow">03 / THE NXRE MINDSET</span>
          <span aria-hidden="true">✳</span>
        </div>
        <div>
          <h1>
            DON’T FIT IN.
            <br />
            MAKE SPACE.
          </h1>
          <div className="manifesto-copy">
            <p>
              NXRE is a statement of self-expression. An invitation to move in
              your own direction. To wear your perspective. To define what comes
              next.
            </p>
            <p>
              No permission needed.
              <br />
              No rules exist.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
