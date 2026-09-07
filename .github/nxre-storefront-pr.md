# Build NXRE editorial storefront with Netlify configuration

Base: `main`  
Head: `build/nxre-storefront`

The repository previously contained only a README. This adds a responsive Next.js 16 / TypeScript storefront for NXRE with oversized editorial typography, black/bone/steel styling, subtle grain, and labeled abstract media placeholders.

The homepage is a standalone landing page with an animated full-height “NO RULES EXIST.” hero, announcement, responsive navigation, shop CTA, newsletter UI, and footer. The abstract background has a pause/resume control and respects reduced-motion preferences. Shop, Collections, Lookbook, and The Mindset have separate pages. The shop contains four product previews and category navigation to seven collection routes. Product and collection links resolve to real pages; unknown routes return 404. No prices, garment specifications, shipping policies, social links, or purchase claims are fabricated. Checkout is unavailable and newsletter controls explicitly remain disabled until connected.

Adds pinned framework dependencies, a reproducible pnpm lockfile, Netlify configuration, metadata/sitemap/robots/favicon, CI, browser smoke tests, and setup documentation.

The header wordmark has an early-2000s chrome treatment with layered depth, floating motion, a slow 3D spin, and moving reflections. It preserves the NXRE home link and includes pause/resume, hover/focus pause, and reduced-motion support. Logo motion, pause/resume, reduced motion, and the home link were verified in Chrome.

Validation completed locally:

- Production build: pass; all 21 generated pages completed.
- ESLint, TypeScript, Prettier, and Git whitespace checks: pass.
- Chrome smoke test: pass at 1440px, 390px, and 320px, with no horizontal overflow or browser exceptions.
- Mobile navigation, shop CTA navigation, category navigation, animation pause/resume and reduced motion, all product/collection routes, newsletter disabled state, robots/sitemap, and unknown product/collection 404s: pass.
- Desktop and mobile screenshots visually reviewed.

Before launch: connect Netlify to the repository, enable deploy previews, configure nxreofficial.com DNS/HTTPS, provide real media and approved brand copy, and connect verified commerce and newsletter services. Approved contact/privacy/shipping/returns content still needs to be supplied. No environment variables are required for the current preview storefront.

ESLint 9 is retained for compatibility with Next.js's current lint plugins; review this development dependency when their ESLint 10 support arrives. This version is a deployable preview storefront, not a transactional shop.
