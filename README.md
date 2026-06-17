# Ankita's Care Clinic — Website

A modern, warm and professional marketing site for **Ankita's Care Clinic**, a prenatal
wellness clinic led by Dr. Ankita Panchal offering prenatal exercises & yoga, antenatal
guidance and Garbh Sanskar.

Built as a fast, dependency-light static site with **Tailwind CSS** and vanilla JavaScript.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home — hero, services overview, about teaser, approach, testimonials, CTA |
| `about.html` | About Dr. Ankita Panchal — bio, credentials, philosophy |
| `services.html` | Services — exercises & yoga, information, Garbh Sanskar, programs |
| `contact.html` | Contact — details, Google Form enquiry, map |

## Tech stack

- **HTML5** (hand-written, semantic, accessible)
- **Tailwind CSS** — compiled to a minified `assets/css/styles.css` (committed for GitHub Pages)
- **Vanilla JS** (`assets/js/main.js`) — mobile drawer, scroll-reveal, animated counters, sticky header
- **Google Fonts** — Fraunces (headings) + Inter (body)

No jQuery, Bootstrap or other runtime libraries.

## Local development

```bash
npm install          # install Tailwind (build-time only)
npm run watch        # rebuild styles.css on change
# in another terminal, serve the static files:
python3 -m http.server 8000
# open http://localhost:8000
```

Build the production stylesheet once:

```bash
npm run build        # -> assets/css/styles.css (minified)
```

> The compiled `assets/css/styles.css` is committed so the site works on GitHub Pages
> with no build step. **Re-run `npm run build` after editing any HTML class names or
> `src/input.css`, and commit the result.**

## Deployment (GitHub Pages)

A workflow at `.github/workflows/pages.yml` builds Tailwind and deploys on every push to
`main`. To enable it: **Repo → Settings → Pages → Build and deployment → Source: GitHub Actions.**

(Because `styles.css` is committed, the site also works if you serve the repo directly
without the workflow.)

## Content to fill in  🔧

Search the HTML for `[PLACEHOLDER]` and replace:

- **Testimonials** (`index.html`) — real quotes and names from your clients.
- **Pricing** (`services.html`) — your program durations and prices.
- **Contact details** (`contact.html`) — phone/WhatsApp number, email, clinic address,
  and the Google Maps embed for your exact location.

### Recommended: replace the photos

The current photos (`assets/images/preg1.jpg`, `preg1.png`) are low-resolution
(≈225–360 px). For a premium look, replace them with high-resolution images
(ideally 1200 px+ wide) using the same filenames, or update the `src` paths.

## Image assets

- `assets/images/logo.png` — optimized logo used in the header, footer and favicon.
- `assets/images/Ankitalogo.png` — original high-resolution logo (source).
- `assets/images/preg1.jpg`, `preg1.png` — section photos (replace with hi-res).
