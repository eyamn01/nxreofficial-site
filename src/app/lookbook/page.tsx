import type { Metadata } from "next";
import { Art } from "@/components/storefront";
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
            <p className="eyebrow">04 / OUTSIDE THE LINES</p>
            <h1>The lookbook.</h1>
          </div>
          <p>
            A space for the NXRE perspective.
            <br />
            Campaign imagery to follow.
          </p>
        </div>
        <div className="lookbook-grid">
          <figure>
            <Art
              kind="editorial-one"
              label="Lookbook photograph placeholder, frame one"
            />
            <figcaption>
              <span>01 / OWN YOUR SPACE</span>
              <span>NXRE</span>
            </figcaption>
          </figure>
          <figure>
            <Art
              kind="editorial-two"
              label="Lookbook photograph placeholder, frame two"
            />
            <figcaption>
              <span>02 / FIND YOUR DIRECTION</span>
              <span>NXRE</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
