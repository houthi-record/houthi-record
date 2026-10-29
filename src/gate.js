// The publishing gate. See src/data/publish.json.
// The private preview is any Cloudflare Pages build that is not the production branch,
// or a local build with PREVIEW=1. Everything else is a public build.
import PUBLISH from './data/publish.json' with { type: 'json' };

// Drafts are built only when PREVIEW=1 is set by hand. Cloudflare never builds them.
export const PREVIEW = process.env.PREVIEW === '1';

const norm = (p) => (p.endsWith('/') ? p : p + '/');
export function isPublic(path) {
  if (PREVIEW) return true;
  if (path === '/404/' || path === '/404.html') return true;
  return PUBLISH.pages[norm(path)] === true;
}
export const HOME = PREVIEW ? { why: true, chapters: true } : PUBLISH.home;
export const PAGES = PUBLISH.pages;
