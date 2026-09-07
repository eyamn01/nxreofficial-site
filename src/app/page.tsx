import Link from "next/link";

import { HeroBackground } from "@/components/hero-background";
export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <HeroBackground />
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
          <Link className="button button-light" href="/shop">
            Shop the drop <span>↗</span>
          </Link>
        </div>
        <div className="hero-bottom">
          <span>YOUR OWN DIRECTION.</span>
          <Link href="/lookbook">EXPLORE THE LOOKBOOK ↗</Link>
          <span>[ NXRE ]</span>
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
