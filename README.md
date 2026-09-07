# NXRE — NO RULES EXIST

Responsive Next.js App Router and TypeScript storefront for **nxreofficial.com**.

## Development

Use Node.js 22 and pnpm 10.14.0. Run `corepack enable` on a standard Node installation, then:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Run `pnpm lint`, `pnpm build`, and `pnpm typecheck` to validate; `pnpm start` serves the production build. CI runs these checks on pull requests to main.

With Chrome installed and the production server running at http://127.0.0.1:3000, run `pnpm smoke` for desktop/mobile overflow, menu behavior, catalog routes, disabled signup, sitemap/robots, 404s, and browser exceptions. Screenshots go to ignored `test-results/`. Use `pnpm format` or `pnpm format:check` for source formatting. ESLint 9 is retained because Next.js's bundled lint plugins do not yet declare ESLint 10 compatibility; review this development-only dependency during upgrades.

## Content

- `src/app/page.tsx`: standalone landing page with an animated abstract hero and newsletter UI. `src/components/hero-background.tsx` provides pause/resume; reduced-motion preferences disable animation.
- `src/components/chrome-wordmark.tsx`: header wordmark with layered CSS depth, chrome reflections, floating motion, and a slow 3D spin. The header provides a dedicated pause/resume control; hover/focus pauses the logo and reduced-motion preferences keep it static.
- `src/app/y2k.css`: shared deep-red accents, chrome-edged buttons, rounded category tabs, technical labels, and lookbook scanlines/orbital artwork. Imports after the base styles so the accent treatment can be adjusted independently.
- `/shop`, `/collections`, `/lookbook`, and `/about` are separate destination pages. Shop category links open dedicated collection pages with an active category indicator. Proposed manifesto copy lives on `/about` for owner review.
- `src/lib/catalog.ts`: supplied product/collection names. Product-to-collection assignments await verified catalog data.
- `src/components/storefront.tsx`: visibly labeled abstract CSS placeholders, not actual garment designs. Replace with licensed NXRE media using `next/image`, descriptive alt text, dimensions, and responsive sizes. Video needs a poster, muted inline playback, and reduced-motion fallback.
- Four product preview routes, seven collection routes, custom 404, metadata, sitemap, robots, and favicon.
- No invented prices, specifications, policies, social links, availability dates, or purchase functionality.
- Newsletter controls are disabled with an availability message. No email is stored or transmitted. Before enabling, connect a server-side email provider, validation, abuse prevention, consent/privacy copy, and truthful success/error states.

## Netlify

1. Import `eyamn01/nxreofficial-site`, choose `main` for production, and enable PR deploy previews.
2. `netlify.toml` supplies `pnpm build`, publish directory `.next`, Node 22, and pnpm 10.14.0. Netlify automatically applies its Next.js adapter. Do not add a static export or SPA redirect.
3. Review a deploy preview, then add `nxreofficial.com` in Netlify domain management. Follow its account-specific DNS instructions at the registrar, configure the preferred www redirect, and verify HTTPS.
4. No environment variables are required now. Future commerce/email secrets belong in Netlify environment settings, never in `NEXT_PUBLIC_` variables.
5. Before transactional launch: supply real media and approved copy; connect catalog, variants, prices, inventory, checkout, and email; add approved privacy, returns, shipping, and contact information. Add only verified social links.

This is a deployable preview storefront, not yet a transactional shop. Verify deploy previews are excluded from indexing. Production sitemap URLs use `https://nxreofficial.com`.

References: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Next.js on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/).
