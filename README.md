# Feminism Is a Practice — GitHub Pages site

A responsive, accessible, single-page educational site with a separate About view. It uses only HTML, CSS, and vanilla JavaScript; no build tools or dependencies are required.

## Publish on GitHub Pages

1. Unzip this folder.
2. Create a GitHub repository (or open the repository where you want the site).
3. Upload `index.html`, `styles.css`, `script.js`, and this `README.md` to the repository root.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your publishing branch (usually `main`) and folder `/(root)`, then save.
7. Wait for GitHub Pages to publish. The site URL will appear in the Pages settings.

## Edit the site

- Main content, citations, and the About view are in `index.html`.
- Colors, typography, layout, and responsive behavior are in `styles.css`.
- The small page-switching interaction is in `script.js`.

The Google Fonts import is optional. If the visitor is offline or blocks Google Fonts, the site falls back to system fonts. The site itself has no external JavaScript dependencies.

## Accessibility notes

- Semantic landmarks and headings, a skip link, keyboard-visible focus, native disclosure controls, and descriptive navigation labels are included.
- The layout adapts to narrow screens.
- Reduced-motion preferences are respected.
- Color contrast should be checked again if you substantially change the palette.

## Source and citation note

The content is an original, introductory synthesis based on Sara Ahmed, *Living a Feminist Life* (Duke University Press, 2017), using chapter and page references to the 2017 edition. It is not a reproduction of the book. Other writers mentioned in the book are cited in the text and selected references. The references section is intentionally selective rather than a reproduction of Ahmed's full bibliography.
