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

The full rules are in the editorial guide, kept privately in the project. In short:

1. **Only approved content is public.** `src/data/publish.json` lists which pages appear on houthirecord.org. A page is set to `true` only after the editor approves it in the editorial desk.
2. **Every fact has a source** that meets the guide's source rules. No allegations, no "still being researched" notes, no analysis paragraphs.
3. **Testimony** appears only in marked testimony boxes, under a pseudonym.
4. **Protect people.** No private individual is identifiable without consent. Metadata is removed from every file.

## Public site and private preview

- **Public:** the `main` branch builds houthirecord.org with approved pages only.
- **Private preview:** the `preview` branch builds everything, drafts included, with search engines blocked. It is served at `preview.houthi-record.pages.dev`, behind Cloudflare Access.
- Locally: `npm run build` builds the public site; `PREVIEW=1 npm run build` builds the preview.

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
