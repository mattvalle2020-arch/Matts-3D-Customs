# Matt's 3D Customs

A responsive, static multi-page storefront for original 3D-printed products and custom projects. The homepage is the landing page; `product.html`, `pricing.html`, `custom-order.html`, `payment.html`, `about.html`, and `contact.html` provide dedicated catalog, policy, and inquiry pages.

## Run locally

From the repository root, start a static web server:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`. Use HTTP rather than opening files directly: the product detail page imports Three.js modules from a CDN. The homepage also loads Three.js from jsDelivr for its interactive concept viewer; the concept list and quote form remain available if the preview cannot load.

There is no package manifest, configured build, linter, or automated test suite.

## Site structure

- `index.html` is the main landing page. `styles.css` and `app.js` provide its design, product/concept displays, preliminary quote estimator, and email-draft forms.
- The dedicated detail pages use `css/style.css` and `js/site.js` for their shared layout, navigation, product catalog, and price helpers.
- `product.html` uses `js/product.js` for product details and its Three.js preview. `custom-order.html` uses `js/order.js` for the multi-step quote request.
- `pricing.html` is the reference for published catalog prices. The homepage concept/product examples and custom-order estimator are illustrative estimates, not published prices or final quotes. Keep catalog entries and the pricing table in sync when confirmed prices change.
- Contact and quote forms open an email draft addressed to `matts3dcustoms@gmail.com`; they do not send or store submissions. Selected reference files remain on the visitor's device and must be attached to the email manually.
- There is no online checkout or shipping integration. `payment.html` describes the current manual payment and order policies; do not present a payment as collected or confirmed by this site.
- GitHub Pages deployment is configured in `.github/workflows/pages.yml` to publish the repository root from `main`. `CNAME` contains the intended custom domain; GitHub Pages settings and DNS must be configured separately.

## Before launch

- Confirm the monitored contact email, phone number, and social profile links. The configured email is currently `matts3dcustoms@gmail.com`; Instagram links to `@matts3dcustoms`.
- Review product names, photos, prices, production estimates, payment terms, shipping, returns, and privacy language against current business practice. The site does not verify those business details.
- Configure the GitHub Pages custom domain and DNS, then check the deployed pages and links.
- The shop offers original, fan-inspired work and does not reproduce protected designs without authorization. Review custom requests and customer-supplied files accordingly.
