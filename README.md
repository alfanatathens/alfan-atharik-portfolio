# Alfan Atharik — Personal Portfolio

Responsive editorial one-page portfolio with supplied photographs and scroll-reveal animations.

## Important GitHub upload structure

Upload the **contents** of this folder to the root of your GitHub repository. The `assets` directory must be uploaded too.

At the repository root, you should see:

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `assets/` (contains the `.jpg` photos)

Do not upload only the six top-level files. Without `assets/`, the portrait and project photography will return 404.

## Vercel settings

- Framework Preset: Other
- Root Directory: `./`
- Build Command: blank
- Output Directory: `.`
- Install Command: blank

Connect the GitHub repository to Vercel. Each commit pushed to the production branch (usually `main`) triggers a new deployment.

## Local preview

Open `index.html` in a browser. Keep `assets/` beside it.

## Before public launch

- Confirm public display of the email address and phone number.
- Replace `YOUR-DOMAIN.com` in `robots.txt` and `sitemap.xml` only if using a custom domain; the current Vercel URL is fine to keep for now.
- Confirm CV dates and public-facing role descriptions.

Static HTML/CSS/JS. No build command or dependencies required.
