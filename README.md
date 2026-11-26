# Culerson website

**Live website: https://tomiabe.github.io/culerson/**

This repository contains only the converted vanilla website. The original WordPress site, full recovery backups, previous Git history, and earlier identity work are preserved privately in Google Drive.

| Location | Purpose |
| --- | --- |
| **[website/](website/)** | The complete website: HTML pages, CSS, plain JavaScript, images, fonts, and favicons. |
| **[website/assets/css/](website/assets/css/)** | Original per-page styles and static compatibility rules, including the recovered icon styles. |
| **[website/assets/js/site.js](website/assets/js/site.js)** | Plain JavaScript mobile navigation. |
| **[.github/](.github/)** | GitHub Pages deployment and small local preview/check scripts. |

## Open locally

Open `website/index.html` in a browser, or run:

```sh
npm start
```

Then visit http://127.0.0.1:8087. No package installation or build is needed; Node 22 or newer is required only for the optional preview/check commands.

## Edit and publish

Edit the HTML, CSS, or JavaScript in `website/` and push to `main`. The **Publish website** workflow checks the files and publishes only that folder to GitHub Pages. Site links and assets work under the `/culerson/` project path and when opened directly from disk.

Run `npm run check` to check local page/asset links, favicon references, and the absence of PHP or database files in the published folder.

## Source and behavior

The site preserves the appearance and content of the recovered March 2025 WordPress snapshot: its layouts, Bona Nova fonts, colors, original images, and SVG icons. The `wp-content` and `wp-includes` directory names inside `website/` preserve static asset paths; there is no WordPress server, PHP, database, framework, or build dependency.

This is a static site. WordPress editing and server endpoints are not included. The backup's original `noindex, nofollow` metadata is retained. The earlier WordPress and identity materials are not part of the public repository or deployment.
