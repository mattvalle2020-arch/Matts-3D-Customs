# Matts 3D Customs

A responsive storefront for made-to-order 3D-printed props, keepsakes, and custom work.

The supplied brand emblem informs the restrained navy and blue accents in the clean, neutral layout.
The supplied brand emblem is used as the header/footer profile image and the site's favicon/social preview image in `assets/matts-3d-customs-emblem.png`.

## Run locally

Open `index.html` in a browser or serve the repository with any static file server. The site uses Google Fonts and Unsplash product photography.

## Before launch

- Replace `hello@matts3dcustoms.com` in `app.js` and `index.html` with the business's monitored email address.
- Confirm the Instagram and TikTok profile URLs in `index.html`.
- Replace the generic Discord destination, team-role descriptions, and sample milestone copy with the business's actual links and details.
- Product photos and prices are starter content; replace them with approved product photography and current pricing.
- The quote builder has a live size slider, material-aware estimate, and visual preview, then opens an email draft. Selected files stay on the customer's device and must be attached to that email manually.
- The homepage testimonial cards are clearly marked sample content; replace them with verified customer reviews or remove them before launch.
- The footer privacy notice describes this static site's current email-based forms and third-party fonts/images. Revisit it if form handling, analytics, hosting, or checkout changes.
- Product dimensions and production windows are planning estimates. Verify them against actual products and studio capacity. Publish formal terms and privacy information before accepting orders.
- No payment or shipping provider is connected. To accept orders online, add a server-side checkout integration such as Stripe Checkout or PayPal and a shipping provider/API; never put provider secret keys in this static site.
