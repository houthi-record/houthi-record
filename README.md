# The Houthi Record

An independent, sourced history of the Houthi movement in Yemen.
The site is built with [Astro](https://astro.build) and hosted on Cloudflare Pages.
Every change pushed to the `main` branch is published automatically.

## Where the content lives

| What | File |
| --- | --- |
| Chapters | `src/pages/chapters/*.md`, one file per chapter |
| Chapter list and document list | `src/data/chapters.js` |
| Timeline events | `src/data/timeline.json` |
| Charter | `src/pages/charter.md` |
| Corrections log | `src/pages/corrections.astro` |
| Site name and description | `src/site.js` |

## Editorial rules

1. **Every claim carries a source.** In chapters, cite with `<sup><a href="#s4">4</a></sup>`, where 4 is the number of the source in the `sources:` list at the top of the file.
2. **Mark the evidence level** after each claim:
   - `<span class="ev-tag">■ Documented</span>`
   - `<span class="ev-tag">□ Testimony</span>`
   - `<span class="ev-tag">◇ Allegation</span>`
3. **Drafts stay marked.** Keep `draft: true` in a chapter until every claim has been checked against its source. Then set `draft: false` and `status: Published`.
4. **Corrections are logged.** When a published claim changes, add an entry to the corrections page with the date, the original text and the new text.
5. **Protect people.** No names of private individuals, witnesses or victims without their consent. Remove metadata from every image and document before adding it.

## Adding a source to a timeline event

In `src/data/timeline.json`, each event has a `sources` list:

```json
"sources": [
  { "label": "UN Security Council, S/2015/125", "url": "https://..." }
]
```

Evidence can be `documented`, `testimony` or `allegation`.

## Cloudflare Pages settings

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`

## Running it locally (optional)

```sh
npm install
npm run dev
```
