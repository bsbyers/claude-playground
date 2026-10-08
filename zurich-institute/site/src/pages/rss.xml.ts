import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getEssays, essayPath } from '../lib/essays';
import { name, tagline } from '../data/institute';

export async function GET(context: APIContext) {
  const essays = await getEssays();
  return rss({
    title: `${name}: Writing`,
    description: tagline,
    site: context.site!,
    items: essays.map(({ slug, latest }) => ({
      title: `${latest.data.title} (version ${latest.data.version})`,
      description: latest.data.dek,
      pubDate: latest.data.date,
      link: essayPath(slug),
    })),
  });
}
