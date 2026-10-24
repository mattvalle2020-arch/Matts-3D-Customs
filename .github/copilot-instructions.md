# Repository Guidelines

## Build, test, and preview

This is a static HTML, CSS, and JavaScript site; there is no configured build, lint, or automated test command. To preview it locally, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Serve over HTTP rather than opening files directly: the product page uses JavaScript modules and an import map for Three.js, loaded from a CDN. There is no single-test command because no test suite is configured.

## Architecture

- Each top-level HTML file is a page. Shared presentation lives in `css/style.css`; `js/site.js` defines the product catalog and price helpers, then injects the common header and footer into pages that load it.
- The home page renders featured cards from `PRODUCTS`. `product.html` provides product details and a Three.js preview via `js/product.js`; `custom-order.html` uses `js/order.js` for its multi-step estimate and request form.
- `payment.html` documents manual payment options and order policies. There is no online checkout or payment processor integration; do not imply that a payment has been collected or confirmed by the site.
- GitHub Pages deployment is defined in `.github/workflows/pages.yml` and publishes the repository root from `main`; `CNAME` contains the intended custom domain. DNS and the repository's Pages settings must also be configured outside the code.
- Product IDs connect the catalog to `product.html?id=...` links and the `custom-order.html?item=...` preselection mapping in `js/order.js`. Keep those IDs and mappings aligned when adding products.
- Catalog prices are also displayed as static rows in `pricing.html`; update both representations when prices change. The custom-order estimate is a separate preliminary calculation, not the published product price.

## Project conventions

- Pages use relative asset paths and load shared styles and scripts directly from HTML; there is no bundler or package manifest. Keep page-specific DOM IDs in sync with the scripts that query them.
- Load `js/site.js` before page scripts that use `PRODUCTS` or `formatPrice`. `js/product.js` is an ES module and relies on the import map declared in `product.html`.
- The site has no backend: custom-order and contact forms prepare email drafts for the visitor to review and send. Reference files must be attached by the visitor; the site does not upload or store them. Do not claim the site uses analytics or tracking cookies; no analytics integration is configured.
- Follow the design policy in `about.html#design-policy`: the shop offers original, fan-inspired designs and does not reproduce protected designs without authorization.
