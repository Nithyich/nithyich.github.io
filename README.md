# Portfolio

A static, no-build personal portfolio site. Plain HTML, CSS and a small amount of vanilla
JavaScript — nothing to install, nothing to compile, ready to serve from GitHub Pages.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole site — all content lives here. |
| `styles.css` | All styling. Design tokens (colour, type, spacing) are at the top in `:root`. |
| `main.js` | Mobile nav, scroll-spy, reveal-on-scroll, footer year. Optional — the site works without it. |
| `favicon.svg` | Browser-tab icon (the "NT" monogram). |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is instead of running them through Jekyll. |

## Before you publish — 3 things to replace

GitHub (`nithyich`) and LinkedIn (`nithyich`) are already filled in. One token remains —
search `index.html` for it:

| Token | Put in |
| --- | --- |
| `REPLACE-ME-EMAIL` | The address you want shown publicly, in the Contact section's `mailto:` link |

Also worth a look before it goes public:

- **Your name and title** — currently *Nithiesh Thennarasu*, *Implementation Engineer, API Integrations*. The title appears in the `.eyebrow` above the `<h1>`, the `<title>` tag, and the two Open Graph/description meta tags. Your name appears in the header brand, the `<title>`, and the footer.
- **Employer-specific detail** — the project write-ups deliberately describe the *work* without naming client deliverables as public artefacts. Check it reads the way you want it to before publishing.
- **The GitHub link on the EVA Data Mapper card** assumes you'll push that project to a repo called `eva-data-mapper`. If you don't, delete that link line.

## Preview locally

Just double-click `index.html` — it opens straight in a browser. No server needed.

## Publish to GitHub Pages

### Option A — as your main site (recommended)

Served at `https://nithyich.github.io/`.

1. On github.com, create a **new public repository named exactly `nithyich.github.io`**. Don't add a README or `.gitignore`.
2. From this folder:

   ```powershell
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/nithyich/nithyich.github.io.git
   git push -u origin main
   ```

   The push will open a browser window to authenticate you with GitHub — sign in there.
   Git Credential Manager stores the result, so you only do this once.

3. Repo → **Settings** → **Pages** → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)` → **Save**.
4. Give it a minute or two, then load `https://nithyich.github.io/`.

> Git has no identity configured on this machine yet, so before the first commit run:
> ```powershell
> git config --global user.name "Nithiesh Thennarasu"
> git config --global user.email "the-email-on-your-github-account"
> ```
> Use the address GitHub knows about, or your commits won't be attributed to your profile.
> If you'd rather not expose it, GitHub can give you a `@users.noreply.github.com` address —
> Settings → Emails → *Keep my email addresses private*.

### Option B — no command line at all

1. Create a repo named `nithyich.github.io` on github.com and tick *Add a README*.
2. **Add file → Upload files**, drag in `index.html`, `styles.css`, `main.js`, `favicon.svg` and `.nojekyll`, commit.
3. Turn on Pages exactly as in step 3 above.

*(`.nojekyll` starts with a dot, so it may be hidden in Explorer — enable "Hidden items" on the View tab to drag it in. The site works without it; it just avoids surprises later.)*

### Option C — as a project page

Any repo name works — put the files in the repo root, enable Pages the same way, and the site
lands at `https://nithyich.github.io/<repo>/`. All asset paths here are relative, so it works
unchanged in a subfolder.

## Editing later

- **Add a project** — copy an `<article class="project">` block in `index.html` and edit the text.
- **Change the accent colour** — one value, `--accent` in `styles.css` (`--accent-dark` is the hover shade, `--accent-tint` the pale background).
- **Add a section** — copy a `<section class="section">`, give it an `id`, and add a matching link in the header nav; the scroll-spy picks it up automatically.
