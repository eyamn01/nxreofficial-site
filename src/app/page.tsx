import Link from "next/link";
import { Art, ProductGrid } from "@/components/storefront";
import { collections } from "@/lib/catalog";
export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <Art
          kind="campaign"
          label="Abstract campaign placeholder. NXRE campaign photography or video to follow."
        />
        <div className="hero-meta">
          <span>NXRE / THE WORLD IS YOURS</span>
          <span>EXPRESSION WITHOUT PERMISSION</span>
        </div>
        <div className="hero-content">
          <p className="eyebrow">A mindset. Not a uniform.</p>
          <h1 id="hero-title">
            NO RULES
            <br />
            <span>EXIST.</span>
          </h1>
          <Link className="button button-light" href="#drop">
            Shop the drop <span>↗</span>
          </Link>
        </div>
        <div className="hero-bottom">
          <span>YOUR OWN DIRECTION.</span>
          <a href="#drop">SCROLL TO EXPLORE ↓</a>
          <span>[ NXRE ]</span>
        </div>
      </section>
      <section className="section drop" id="drop">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / THE DROP</p>
            <h2>
              Latest drop<span className="period">.</span>
            </h2>
          </div>
          <p>
            Four names. One mindset.
            <br />
            Explore the product previews.
          </p>
        </div>
        <ProductGrid />
      </section>
      <section className="collections section" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / FIND YOUR FORM</p>
            <h2>No boundaries.</h2>
          </div>
          <span className="eyebrow">THE COLLECTIONS ↙</span>
        </div>
        <div className="collection-links">
          {collections.map((name, index) => (
            <Link href={`/collections/${name.toLowerCase()}`} key={name}>
              <span className="collection-index">0{index + 1}</span>
              <span>{name}</span>
              <span className="collection-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="manifesto" id="manifesto">
        <div className="manifesto-label">
          <span className="eyebrow">03 / THE NXRE MINDSET</span>
          <span aria-hidden="true">✳</span>
        </div>
        <div>
          <h2>
            DON’T FIT IN.
            <br />
            MAKE SPACE.
          </h2>
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
      <section className="section lookbook" id="lookbook">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / OUTSIDE THE LINES</p>
            <h2>The lookbook.</h2>
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
      <section className="newsletter section" id="newsletter">
        <div>
          <p className="eyebrow">05 / STAY IN THE LOOP</p>
          <h2>
            ON YOUR
            <br />
            FREQUENCY.
          </h2>
        </div>
        <div className="newsletter-form">
          <p>Drop news. New perspectives. NXRE.</p>
          <form aria-label="Newsletter signup">
            <label htmlFor="email">Email address</label>
            <div className="email-row">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                disabled
                aria-describedby="newsletter-status"
              />
              <button
                type="button"
                disabled
                aria-label="Newsletter signup unavailable"
              >
                ↗
              </button>
            </div>
            <p id="newsletter-status" className="form-note">
              Newsletter signup is not available yet. Check back soon.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
