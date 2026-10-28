import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { PREVIEW, isPublic, PAGES } from './src/gate.js';

// Removes every page that is not approved from a public build.
const gate = {
  name: 'publishing-gate',
  hooks: {
    'astro:build:done': async ({ dir, pages, logger }) => {
      if (PREVIEW) { logger.info('Preview build: all pages kept.'); return; }
      const root = fileURLToPath(dir);
      for (const { pathname } of pages) {
        const path = '/' + pathname.replace(/^\/|\/$/g, '') + (pathname ? '/' : '');
        const p = path === '//' ? '/' : path;
        if (!isPublic(p)) {
          await rm(root + p.replace(/^\//, ''), { recursive: true, force: true });
          logger.info('Held back (not approved): ' + p);
        }
      }
    },
  },
};

export default defineConfig({
  site: 'https://houthirecord.org',
  trailingSlash: 'always',
  integrations: [
    sitemap({ filter: (url) => isPublic(new URL(url).pathname) }),
    gate,
  ],
  build: { format: 'directory' },
});
