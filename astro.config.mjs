import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live address of the site. Change it here if the domain changes.
export default defineConfig({
  site: 'https://houthirecord.org',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
