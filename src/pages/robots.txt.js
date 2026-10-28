import { PREVIEW } from '../gate.js';

// Public builds welcome search engines and AI assistants; the private preview is closed to all.
export function GET() {
  const body = PREVIEW
    ? 'User-agent: *\nDisallow: /\n'
    : [
        '# Search engines and AI assistants are welcome to read and cite this record.',
        'User-agent: *',
        'Allow: /',
        '',
        'User-agent: GPTBot',
        'Allow: /',
        'User-agent: ClaudeBot',
        'Allow: /',
        'User-agent: PerplexityBot',
        'Allow: /',
        'User-agent: Google-Extended',
        'Allow: /',
        '',
        'Sitemap: https://houthirecord.org/sitemap-index.xml',
        '',
      ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
