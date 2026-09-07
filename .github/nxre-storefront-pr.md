# Build NXRE editorial storefront with Netlify configuration

Base: `main`  
Head: `build/nxre-storefront`

The repository previously contained only a README. This adds a responsive Next.js 16 / TypeScript storefront for NXRE with oversized editorial typography, black/bone/steel styling, subtle grain, and labeled abstract media placeholders.

Includes the announcement bar, responsive navigation, full-height “NO RULES EXIST.” hero, shop CTA, four product previews, seven collection routes, manifesto, lookbook, newsletter UI, and footer. Product and collection links resolve to real pages; unknown routes return 404. No prices, garment specifications, shipping policies, social links, or purchase claims are fabricated. Checkout is unavailable and newsletter controls explicitly remain disabled until connected.

Adds pinned framework dependencies, a reproducible pnpm lockfile, Netlify configuration, metadata/sitemap/robots/favicon, CI, browser smoke tests, and setup documentation.

Validation completed locally:

- Production build: pass; all 17 generated pages completed.
- ESLint, TypeScript, Prettier, and Git whitespace checks: pass.
- Chrome smoke test: pass at 1440px, 390px, and 320px, with no horizontal overflow or browser exceptions.
- Mobile navigation, all product/collection routes, newsletter disabled state, robots/sitemap, and unknown product/collection 404s: pass.
- Desktop and mobile screenshots visually reviewed.

Before launch: connect Netlify to the repository, enable deploy previews, configure nxreofficial.com DNS/HTTPS, provide real media and approved brand copy, and connect verified commerce and newsletter services. Approved contact/privacy/shipping/returns content still needs to be supplied. No environment variables are required for the current preview storefront.

ESLint 9 is retained for compatibility with Next.js's current lint plugins; review this development dependency when their ESLint 10 support arrives. This version is a deployable preview storefront, not a transactional shop.
