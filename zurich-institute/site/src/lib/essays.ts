import { getCollection, type CollectionEntry } from 'astro:content';

export type EssayVersion = CollectionEntry<'essays'>;

export interface Essay {
  slug: string;
  latest: EssayVersion;
  /** All versions, newest first. */
  versions: EssayVersion[];
}

/** Groups version files by essay and sorts essays by their latest version date. */
export async function getEssays(): Promise<Essay[]> {
  const entries = await getCollection('essays');
  const bySlug = new Map<string, EssayVersion[]>();
  for (const entry of entries) {
    const list = bySlug.get(entry.data.essay) ?? [];
    list.push(entry);
    bySlug.set(entry.data.essay, list);
  }
  const essays: Essay[] = [];
  for (const [slug, versions] of bySlug) {
    versions.sort((a, b) => b.data.version - a.data.version);
    const seen = new Set<number>();
    for (const v of versions) {
      if (seen.has(v.data.version)) {
        throw new Error(`Essay "${slug}" has two files for version ${v.data.version}.`);
      }
      seen.add(v.data.version);
    }
    essays.push({ slug, latest: versions[0], versions });
  }
  return essays.sort((a, b) => b.latest.data.date.valueOf() - a.latest.data.date.valueOf());
}

export const essayPath = (slug: string) => `/writing/${slug}/`;
export const versionPath = (v: EssayVersion) => `/writing/${v.data.essay}/v${v.data.version}/`;

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function readingMinutes(text = ''): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Renders the small subset of Markdown used in reference lists: *italic*. */
export function inlineMarkdown(s: string): string {
  return escapeHtml(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
