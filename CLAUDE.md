# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Joseph Kim's personal site, served by GitHub Pages at www.josephjd.kim (see `CNAME`). Plain static HTML/CSS — no build step, no framework, no package manager, no tests. Pushing to `master` deploys.

## Structure

- `index.html` + `styles.css` — the landing page: a name, an intro line, and external links. Minimal black-on-white styling; sizes use `clamp()` for mobile (the name deliberately uses `rem` and `nowrap` to stay on one line on small screens).
- `jooms/` — standalone one-off pages shared with Soomin (e.g. `jooms/bronx-zoo/`). Each is a self-contained `index.html` with inline styles and `noindex`, independent of the root page's stylesheet.

## Working in this repo

- Preview changes by opening the HTML file directly in a browser (e.g. `open index.html`); there is no dev server.
- Keep the root page dependency-free; `jooms/` pages may pull in web fonts but should stay self-contained in a single `index.html`.
