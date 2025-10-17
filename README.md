Very Cool Transferring, Apparently (VCTA)

This repository contains a small static landing page for the "Very Cool Transferring, Apparently" self-hostable file transfer project. The page is intended to be hosted on Netlify as a simple download and docs landing page for the self-hostable software.

What's included

- `index.html` — landing page with download links and quick install instructions.
- `css/styles.css` — simple responsive styles.
- `js/app.js` — small client-side helpers (copy-to-clipboard, placeholders).
- `netlify.toml` — minimal Netlify config.

How to use

1. Replace placeholder download links in `index.html` with your release URLs (GitHub releases, S3, etc.).
2. Edit the quick install snippet to match your distribution and package layout.
3. Deploy to Netlify by connecting this repo.

Notes

This repository only contains the static landing page. The file transfer server itself is separate and should be distributed as binary releases, packages, or container images.
