// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkCitations from './plugins/remark-citations.mjs';

export default defineConfig({
  site: 'https://zurichinstitute.org',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    processor: unified({ remarkPlugins: [remarkCitations], smartypants: true }),
  },
});
