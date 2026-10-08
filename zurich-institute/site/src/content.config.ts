import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Each essay lives in its own folder, one Markdown file per version:
//   src/content/essays/<essay-slug>/v1.md, v2.md, ...
// Every version stays online at /writing/<essay-slug>/v<n>/ and the highest
// version number is served at /writing/<essay-slug>/.
const essays = defineCollection({
  loader: glob({ pattern: '**/v*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    essay: z.string(),
    version: z.number().int().positive(),
    date: z.coerce.date(),
    status: z.enum(['draft', 'published']).default('draft'),
    authors: z.array(z.string()).min(1),
    dek: z.string(),
    changes: z.string(),
    summary: z.array(z.object({ label: z.string(), text: z.string() })).default([]),
    references: z.array(z.string()).default([]),
  }),
});

const people = defineCollection({
  loader: file('./src/content/people.json'),
  schema: z.object({
    name: z.string(),
    initials: z.string(),
    role: z.string(),
    bio: z.string(),
    photo: z.string().optional(),
    order: z.number(),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
  }),
});

const reading = defineCollection({
  loader: file('./src/content/reading.json'),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    year: z.number().optional(),
    recommendedBy: z.string().optional(),
    ideas: z.array(z.string()),
  }),
});

export const collections = { essays, people, reading };
