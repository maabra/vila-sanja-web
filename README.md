https://maabra.github.io/vila-sanja-web/

The site is buildless HTML, JavaScript and CSS. Source updates go to `main`;
publishing to the production host is a separate action.

All page styling lives in `styles.css`, including component rules, palette,
spacing and breakpoints. Keep presentation out of inline HTML styles and page
`<style>` blocks. The shared gallery lives in `gallery.js`; `site.js` handles
mobile focus behaviour, contextual booking visibility and counter fallback.
English HTML remains readable before scripts load. Add every new interface key
to English, Croatian and German in `translations.js`.

Original photographs remain in `images/`. Delivery copies and responsive sizes
are in `images/optimized/`; `manifest.json` records the source, dimensions and
available widths. Regenerate them with `python tools/optimize_images.py`
(requires Pillow). The script preserves colour and original files; transparent
collage layers use lossless compression. In `srcset`, encode spaces in URLs as
`%20`. Galleries display full photographs; introduction and preview crops are CSS.

Browser checks use Playwright and Microsoft Edge:

```text
python tests/browser_edge_cases.py
python tests/browser_theme.py
python tests/browser_refinement.py
```

The tests intercept external requests, so they do not increment the visitor
counter or use live map/review quotas. They cover language and theme layouts,
widget failure, keyboard galleries, mobile focus, reduced motion and contact
links with JavaScript disabled.

`python tools/consolidate_css.py` removes declarations superseded by the same
selector and property within the same CSS scope. Review its diff and run the
browser checks after any consolidation.
